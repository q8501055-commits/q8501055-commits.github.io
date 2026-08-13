import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

import { localizeSelfHostedHtml } from '../scripts/prepare-selfhost-zh-tw.mjs';

const officialHtml = readFileSync('index.html', 'utf8');

describe('self-hosted HTML localization', () => {
  it('keeps the shared official entry point in its upstream English baseline', () => {
    assert.match(officialHtml, /<html lang="en">/);
    assert.match(officialHtml, /World Monitor - Real-Time Global Intelligence Dashboard/);
    assert.match(officialHtml, /Dashboard shell loading/);
  });

  it('produces a Traditional Chinese first paint for the GitHub Pages deployment', () => {
    const localized = localizeSelfHostedHtml(officialHtml, 'https://q8501055-commits.github.io/');
    assert.match(localized, /<html lang="zh-TW">/);
    assert.match(localized, /World Monitor - 即時全球情報儀表板/);
    assert.match(localized, /儀表板介面載入中/);
    assert.match(localized, /主要檢視載入中/);
    assert.doesNotMatch(localized, /Dashboard shell loading|Primary View|Pricing/);
    assert.match(localized, /https:\/\/q8501055-commits\.github\.io\//);
  });
});
