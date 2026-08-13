import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import ignore from 'ignore';
import handler, { handleWebRequest, isAllowedProxyRequest, isSameOriginBrowserRequest } from '../api/selfhost-gateway.js';

describe('self-host Vercel Hobby gateway', () => {
  it('deploys only the single catch-all API function', () => {
    const rules = readFileSync(resolve('.vercelignore'), 'utf8');
    const filter = ignore().add(rules);
    assert.equal(filter.ignores('api/health.js'), true);
    assert.equal(filter.ignores('api/economic/v1/[rpc].ts'), true);
    assert.equal(filter.ignores('api/selfhost-gateway.js'), false);
  });

  it('short-circuits premium-only trade reads on self-hosted domains', () => {
    const source = readFileSync(resolve('src/services/trade/index.ts'), 'utf8');
    const tariffBody = source.match(/export async function fetchTariffTrends[\s\S]*?\n}/)?.[0] ?? '';
    const comtradeBody = source.match(/export async function fetchComtradeFlows[\s\S]*?\n}/)?.[0] ?? '';
    assert.match(tariffBody, /if \(!isOfficialWorldMonitorAppRuntime\(\)\) return emptyTariffs;/);
    assert.match(comtradeBody, /if \(!isOfficialWorldMonitorAppRuntime\(\)\) return emptyComtrade;/);
  });

  it('allows dashboard reads and only explicitly approved read-only POSTs', () => {
    assert.equal(isAllowedProxyRequest('GET', '/api/trade/v1/get-trade-flows'), true);
    assert.equal(isAllowedProxyRequest('POST', '/api/economic/v1/get-fred-series-batch'), true);
    assert.equal(isAllowedProxyRequest('POST', '/api/wm-session'), true);
    assert.equal(isAllowedProxyRequest('POST', '/api/create-checkout'), false);
    assert.equal(isAllowedProxyRequest('POST', '/api/company-monitoring/v1/create-monitored-company'), false);
    assert.equal(isAllowedProxyRequest('GET', '/api/oauth/authorize'), false);
    assert.equal(isAllowedProxyRequest('GET', '/api/%2f/oauth/authorize'), false);
    assert.equal(isAllowedProxyRequest('GET', '/api/%6fauth/authorize'), false);
    assert.equal(isAllowedProxyRequest('GET', '/api/OAUTH/authorize'), false);
  });

  it('rejects browser requests from a foreign origin', () => {
    const sameOrigin = new Request('https://world-monitor-zh-tw.vercel.app/api/health', {
      headers: { Origin: 'https://world-monitor-zh-tw.vercel.app', 'Sec-Fetch-Site': 'same-origin' },
    });
    const crossOrigin = new Request('https://world-monitor-zh-tw.vercel.app/api/health', {
      headers: { Origin: 'https://attacker.example', 'Sec-Fetch-Site': 'cross-site' },
    });
    assert.equal(isSameOriginBrowserRequest(sameOrigin), true);
    assert.equal(isSameOriginBrowserRequest(crossOrigin), false);
  });

  it('does not forward cross-origin requests to the upstream service', async () => {
    const response = await handleWebRequest(new Request('https://world-monitor-zh-tw.vercel.app/api/health', {
      headers: { Origin: 'https://attacker.example' },
    }));
    assert.equal(response.status, 403);
    assert.deepEqual(await response.json(), { error: 'Cross-origin proxy access denied' });
  });

  it('forwards only bounded headers and strips upstream cookies/CORS metadata', async () => {
    const originalFetch = globalThis.fetch;
    let captured;
    globalThis.fetch = async (url, init) => {
      captured = { url: String(url), init };
      return new Response('{"ok":true}', {
        headers: {
          'Access-Control-Allow-Origin': 'https://worldmonitor.app',
          'Content-Type': 'application/json',
          'Set-Cookie': 'wm-session=secret; Secure; HttpOnly',
        },
      });
    };
    try {
      const response = await handleWebRequest(new Request('https://world-monitor-zh-tw.vercel.app/api/health', {
        headers: {
          Authorization: 'Bearer must-not-leave-selfhost',
          Cookie: 'private=value',
          Origin: 'https://world-monitor-zh-tw.vercel.app',
          'Sec-Fetch-Site': 'same-origin',
          'X-WorldMonitor-Key': 'wms_public_session',
        },
      }));
      assert.equal(captured.url, 'https://api.worldmonitor.app/api/health');
      assert.equal(captured.init.headers.get('User-Agent'), 'WorldMonitor-SelfHost/1.0');
      assert.equal(captured.init.headers.get('Origin'), 'https://worldmonitor.app');
      assert.equal(captured.init.headers.get('X-WorldMonitor-Key'), 'wms_public_session');
      assert.equal(captured.init.headers.has('Authorization'), false);
      assert.equal(captured.init.headers.has('Cookie'), false);
      assert.equal(response.headers.has('Set-Cookie'), false);
      assert.equal(response.headers.has('Access-Control-Allow-Origin'), false);
      assert.equal(response.headers.get('X-Selfhost-Data-Source'), 'api.worldmonitor.app');
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  it('adapts Vercel Node requests without forwarding private browser headers', async () => {
    const originalFetch = globalThis.fetch;
    globalThis.fetch = async () => new Response('{"status":"ok"}', {
      headers: { 'Content-Type': 'application/json' },
    });
    const headers = new Map();
    const nodeResponse = {
      statusCode: 0,
      statusMessage: '',
      setHeader(name, value) { headers.set(name.toLowerCase(), value); },
      end(value) { this.body = value; },
    };
    try {
      await handler({
        method: 'GET',
        url: '/api/selfhost-gateway?__wm_path=health&compact=1',
        headers: {
          host: 'world-monitor-zh-tw.vercel.app',
          origin: 'https://world-monitor-zh-tw.vercel.app',
          'sec-fetch-site': 'same-origin',
          'x-forwarded-proto': 'https',
        },
        async *[Symbol.asyncIterator]() {},
      }, nodeResponse);
      assert.equal(nodeResponse.statusCode, 200);
      assert.deepEqual(JSON.parse(nodeResponse.body.toString()), { status: 'ok' });
      assert.equal(headers.get('x-selfhost-data-source'), 'api.worldmonitor.app');
    } finally {
      globalThis.fetch = originalFetch;
    }
  });
});
