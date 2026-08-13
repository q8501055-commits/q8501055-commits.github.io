import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path: string): string => readFileSync(path, 'utf8');
const zh = JSON.parse(read('src/selfhost-locales/zh.json')) as Record<string, unknown>;
const officialZh = JSON.parse(read('src/locales/zh.json')) as Record<string, unknown>;
const en = JSON.parse(read('src/locales/en.json')) as Record<string, unknown>;
const i18nSource = read('src/services/i18n.ts');
const indexHtml = read('index.html');
const variantMetaSource = read('src/config/variant-meta.ts');
const mapSource = read('src/components/Map.ts');
const webcamsSource = read('src/components/LiveWebcamsPanel.ts');
const liveNewsSource = read('src/components/LiveNewsPanel.ts');
const globeMapSource = read('src/components/GlobeMap.ts');
const deckGlMapSource = read('src/components/DeckGLMap.ts');
const eventHandlersSource = read('src/app/event-handlers.ts');

function leafKeys(value: unknown, prefix = '', keys = new Set<string>()): Set<string> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return keys;
  for (const [key, child] of Object.entries(value)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (child && typeof child === 'object' && !Array.isArray(child)) {
      leafKeys(child, path, keys);
    } else {
      keys.add(path);
    }
  }
  return keys;
}

function at(path: string): unknown {
  return path.split('.').reduce<unknown>((value, key) => {
    assert.ok(value && typeof value === 'object' && key in value, `missing ${path}`);
    return (value as Record<string, unknown>)[key];
  }, zh);
}

describe('Taiwan Traditional Chinese locale contract', () => {
  it('remains structurally aligned with the English source dictionary', () => {
    assert.deepEqual([...leafKeys(zh)].sort(), [...leafKeys(en)].sort());
  });

  it('uses Traditional Chinese for priority dashboard and account controls', () => {
    const expected = {
      'countryBrief.signals.gpsJammingZones': 'GPS 干擾區域',
      'components.regulation.dashboard': 'AI 法規儀表板',
      'components.economic.centralBanks': '中央銀行',
      'components.strategicRisk.insufficientData': '資料不足',
      'components.serviceStatus.checkingServices': '正在檢查服務…',
      'components.verification.title': '資訊驗證檢查表',
      'components.community.joinDiscord': '加入 Discord 社群',
      'components.dashboardChrome.countries': '國家',
      'components.missionPresets.crisisDeskLabel': '危機戰情室',
      'components.threatTimeline.emptyCopy': '當情報洞察包含帶有時間戳記的威脅等級時，此面板就會顯示資料。',
      'common.retry': '重試',
      'auth.signIn': '登入',
      'auth.createAccount': '建立帳戶',
      'auth.settings': '設定',
    };
    for (const [path, value] of Object.entries(expected)) {
      assert.equal(at(path), value, path);
    }
  });

  it('does not retain common Simplified Chinese UI terminology', () => {
    const serialized = JSON.stringify(zh);
    const simplifiedUiTerms = [
      '设置', '登录', '创建账户', '账户', '数据', '软件', '网络', '信息',
      '视频', '组件', '小组件', '服务器', '搜索', '加载', '缓存', '用户',
      '导出', '导入', '刷新', '保存', '链接', '文件夹', '页面', '标签页',
      '删除', '添加', '默认', '屏幕', '鼠标', '支持', '离线', '在线', '许可证',
    ];
    for (const term of simplifiedUiTerms) {
      assert.equal(serialized.includes(term), false, `Simplified UI term remains: ${term}`);
    }
  });

  it('advertises the self-hosted edition as Taiwan Traditional Chinese', () => {
    assert.match(i18nSource, /isSelfHostedBrowserRuntime\(\) \? 'zh-TW' : 'zh-CN'/);
    assert.match(i18nSource, /return isSelfHostedBrowserRuntime\(\) \? 'zh-TW' : 'zh-CN'/);
    assert.match(i18nSource, /label: '繁體中文（台灣）', flag: '🇹🇼'/);
    assert.match(i18nSource, /selfHostedLocaleModules\['\.\.\/selfhost-locales\/zh\.json'\]/);
  });

  it('locks self-hosted deployments to Traditional Chinese ahead of URL, stored, and browser choices', () => {
    assert.match(i18nSource, /SELF_HOSTED_DEFAULT_LANGUAGE = 'zh-TW'/);
    assert.match(i18nSource, /isOfficialWorldMonitorAppHostname\(window\.location\.hostname\)/);
    assert.match(
      i18nSource,
      /order: \['wmSelfHostedDefault', 'wmQuery', 'wmExplicit', 'navigator'\]/,
    );
    assert.match(i18nSource, /isSelfHostedBrowserRuntime\(\) \? SELF_HOSTED_DEFAULT_LANGUAGE : lng/);
    assert.match(i18nSource, /\[\{ code: 'zh', label: '繁體中文（台灣）', flag: '🇹🇼' \}\]/);
  });

  it('preserves the official multilingual entry point and Simplified Chinese resource', () => {
    assert.match(indexHtml, /<html lang="en">/);
    assert.match(indexHtml, /World Monitor - Real-Time Global Intelligence Dashboard/);
    assert.match(variantMetaSource, /title: 'World Monitor - Real-Time Global Intelligence Dashboard'/);
    assert.equal(JSON.stringify(officialZh).includes('美国'), true);
    assert.equal(JSON.stringify(zh).includes('美國'), true);
  });

  it('localizes map and webcam operation labels instead of hard-coding English UI', () => {
    for (const source of [
      mapSource,
      webcamsSource,
      liveNewsSource,
      globeMapSource,
      deckGlMapSource,
      eventHandlersSource,
    ]) {
      assert.doesNotMatch(source, /['"`]Zoom (?:in|out)['"`]/i);
      assert.doesNotMatch(source, /['"`]Reset rotation['"`]/);
      assert.doesNotMatch(source, /['"`]Fullscreen['"`]/);
      assert.doesNotMatch(source, /['"`](?:Grid|Single) view['"`]/);
    }
    assert.match(mapSource, /t\('components\.deckgl\.zoomIn'\)/);
    assert.match(mapSource, /t\('components\.deckgl\.resetView'\)/);
    assert.doesNotMatch(mapSource, /label: 'ALL'/);
    assert.match(webcamsSource, /t\('components\.webcams\.gridView'\)/);
    assert.match(liveNewsSource, /t\('components\.liveNews\.fullscreen'\)/);
    assert.match(globeMapSource, /t\('components\.deckgl\.zoomIn'\)/);
    assert.match(deckGlMapSource, /t\('components\.deckgl\.layerGuide'\)/);
    assert.match(eventHandlersSource, /t\('components\.liveNews\.exitFullscreen'\)/);
  });
});
