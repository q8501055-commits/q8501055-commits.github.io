import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { isOfficialWorldMonitorAppHostname } from '@/config/web-origin';

describe('self-host commercial chrome policy', () => {
  it('keeps account and Pro UI enabled on exact production app hosts', () => {
    for (const hostname of [
      'worldmonitor.app',
      'www.worldmonitor.app',
      'tech.worldmonitor.app',
      'finance.worldmonitor.app',
      'commodity.worldmonitor.app',
      'happy.worldmonitor.app',
      'energy.worldmonitor.app',
    ]) {
      assert.equal(isOfficialWorldMonitorAppHostname(hostname), true, hostname);
    }
  });

  it('suppresses account and Pro UI on self-hosts, previews, local dev, and spoofed hosts', () => {
    for (const hostname of [
      'fred.github.io',
      'worldmonitor-fred.vercel.app',
      'localhost',
      '127.0.0.1',
      'evilworldmonitor.app',
      'worldmonitor.app.evil.example',
      'preview.worldmonitor.app',
      'worldmonitor.app:443',
      'worldmonitor.app.',
    ]) {
      assert.equal(isOfficialWorldMonitorAppHostname(hostname), false, hostname);
    }
  });

  it('matches browser hostname case-insensitively without accepting surrounding characters', () => {
    assert.equal(isOfficialWorldMonitorAppHostname('WWW.WORLDMONITOR.APP'), true);
    assert.equal(isOfficialWorldMonitorAppHostname(' worldmonitor.app'), false);
    assert.equal(isOfficialWorldMonitorAppHostname('worldmonitor.app '), false);
  });
});
