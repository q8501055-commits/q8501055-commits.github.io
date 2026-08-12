import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  initAnalytics,
  isAllowedAnalyticsHostname,
  resetAnalyticsForTesting,
} from '../src/services/analytics.ts';

describe('analytics hostname allowlist', () => {
  it('allows exactly the official hosts currently listed in Umami data-domains', () => {
    const allowed = [
      'worldmonitor.app',
      'www.worldmonitor.app',
      'happy.worldmonitor.app',
    ];
    const denied = [
      'world-monitor.vercel.app',
      'worldmonitor.pages.dev',
      'worldmonitor.example.com',
      'localhost',
      '127.0.0.1',
      'tauri.localhost',
      'tech.worldmonitor.app',
      'finance.worldmonitor.app',
      'commodity.worldmonitor.app',
      'preview.worldmonitor.app',
      'worldmonitor.app.example.com',
      '',
    ];

    for (const hostname of allowed) {
      assert.equal(isAllowedAnalyticsHostname(hostname), true, hostname);
    }
    for (const hostname of denied) {
      assert.equal(isAllowedAnalyticsHostname(hostname), false, hostname);
    }
  });

  it('does not create an Umami script on preview, custom, local, or Tauri hosts', () => {
    const denied = [
      'world-monitor.vercel.app',
      'customer.example.com',
      'localhost',
      'tauri.localhost',
    ];
    const savedWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
    const savedDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');

    try {
      for (const hostname of denied) {
        let createdScripts = 0;
        Object.defineProperty(globalThis, 'window', {
          configurable: true,
          value: { location: { hostname } },
        });
        Object.defineProperty(globalThis, 'document', {
          configurable: true,
          value: {
            readyState: 'complete',
            createElement: () => {
              createdScripts += 1;
              return {};
            },
          },
        });

        resetAnalyticsForTesting();
        initAnalytics();
        assert.equal(createdScripts, 0, `${hostname} must not create the Umami script`);
      }
    } finally {
      resetAnalyticsForTesting();
      if (savedWindow) Object.defineProperty(globalThis, 'window', savedWindow);
      else delete (globalThis as { window?: unknown }).window;
      if (savedDocument) Object.defineProperty(globalThis, 'document', savedDocument);
      else delete (globalThis as { document?: unknown }).document;
    }
  });

  it('rechecks the hostname before a deferred load can create the script', () => {
    let idleCallback: (() => void) | undefined;
    let createdScripts = 0;
    const location = { hostname: 'www.worldmonitor.app' };
    const savedWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
    const savedDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');

    Object.defineProperty(globalThis, 'window', {
      configurable: true,
      value: {
        location,
        requestAnimationFrame: (callback: () => void) => {
          callback();
          return 1;
        },
        requestIdleCallback: (callback: () => void) => {
          idleCallback = callback;
          return 1;
        },
      },
    });
    Object.defineProperty(globalThis, 'document', {
      configurable: true,
      value: {
        readyState: 'complete',
        createElement: () => {
          createdScripts += 1;
          return {};
        },
      },
    });

    try {
      resetAnalyticsForTesting();
      initAnalytics();
      assert.ok(idleCallback, 'official hostname should schedule the deferred load');

      location.hostname = 'preview.vercel.app';
      idleCallback();
      assert.equal(createdScripts, 0, 'hostname changes must be denied before script creation');
    } finally {
      resetAnalyticsForTesting();
      if (savedWindow) Object.defineProperty(globalThis, 'window', savedWindow);
      else delete (globalThis as { window?: unknown }).window;
      if (savedDocument) Object.defineProperty(globalThis, 'document', savedDocument);
      else delete (globalThis as { document?: unknown }).document;
    }
  });
});
