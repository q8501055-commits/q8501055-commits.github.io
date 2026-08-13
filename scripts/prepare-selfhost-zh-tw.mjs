import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const REPLACEMENTS = [
  ['<html lang="en">', '<html lang="zh-TW">'],
  ['World Monitor - Real-Time Global Intelligence Dashboard', 'World Monitor - 即時全球情報儀表板'],
  ['Real-time global intelligence platform tracking conflicts, markets, military activity, and OSINT signals across 190+ countries, with live context in one view.', '即時追蹤全球衝突、市場、軍事活動與開放來源情報訊號的情報儀表板。'],
  ['World Monitor — Real-Time Global Intelligence Dashboard', 'World Monitor — 即時全球情報儀表板'],
  ['The live dashboard requires JavaScript', '即時儀表板需要 JavaScript'],
  ['World Monitor’s interactive map, panels, alerts, and live analysis run in the browser. Visit the <a href="/">World Monitor homepage</a> for the platform overview, or use the indexable reference pages below without enabling JavaScript.', 'World Monitor 的互動地圖、面板、警示與即時分析會在瀏覽器中執行。你也可以在未啟用 JavaScript 時使用下列參考頁面。'],
  ['World Monitor references', 'World Monitor 參考資料'],
  ['Country intelligence', '國家情報'],
  ['Maritime chokepoints', '海運要道'],
  ['Crisis trackers', '危機追蹤'],
  ['Live tools', '即時工具'],
  ['Research reports', '研究報告'],
  ['>Blog<', '>部落格<'],
  ['Documentation', '說明文件'],
  ['World Monitor dashboard loading', 'World Monitor 儀表板載入中'],
  ['Dashboard shell loading', '儀表板介面載入中'],
  ['>Global<', '>全球<'],
  ['>Live<', '>即時<'],
  ['>Loading<', '>載入中<'],
  ['>Dashboard<', '>儀表板<'],
  ['Preparing map and panels', '正在準備地圖與面板'],
  ['Preparing dashboard', '正在準備儀表板'],
  ['Dashboard is loading', '儀表板載入中'],
  ['Map layers, panels, alerts, and analysis will appear here as soon as the app finishes loading.', '應用程式載入完成後，這裡會顯示地圖圖層、面板、警示與分析。'],
  ['>Map<', '>地圖<'],
  ['>Panels<', '>面板<'],
  ['>Alerts<', '>警示<'],
  ['>Analysis<', '>分析<'],
  ['Primary view loading', '主要檢視載入中'],
  ['>Primary View<', '>主要檢視<'],
  ['Preparing workspace', '正在準備工作區'],
  ['The live workspace is reserving space for the map, panels, and current signals.', '正在為地圖、面板與即時訊號保留顯示空間。'],
  ['Map layers loading', '地圖圖層載入中'],
  ['>Map Layers<', '>地圖圖層<'],
  ['Preparing overlays', '正在準備圖層'],
  ['Geographic overlays and layer controls will hydrate into this reserved area.', '地理圖層與控制項將顯示於此區域。'],
  ['Signal panels loading', '訊號面板載入中'],
  ['>Signal Panels<', '>訊號面板<'],
  ['Preparing data', '正在準備資料'],
  ['Panel data and summaries will populate after the dashboard bundle starts.', '儀表板啟動後會載入面板資料與摘要。'],
  ['Context loading', '背景資訊載入中'],
  ['>Context<', '>背景資訊<'],
  ['Preparing context', '正在準備背景資訊'],
  ['Supporting context cards keep their final dashboard slots stable.', '相關資訊卡片將顯示於預留位置。'],
  ['Analysis loading', '分析載入中'],
  ['Preparing analysis', '正在準備分析'],
  ['Analysis modules will appear after data and settings are ready.', '資料與設定就緒後會顯示分析模組。'],
  ['Updates loading', '更新內容載入中'],
  ['>Updates<', '>更新<'],
  ['Preparing updates', '正在準備更新'],
  ['Recent updates and refresh state will replace this placeholder.', '近期更新與重新整理狀態將顯示於此。'],
  ['aria-label="Country Intelligence"', 'aria-label="國家情報"'],
  ['aria-label="Close"', 'aria-label="關閉"'],
];

export function localizeSelfHostedHtml(source, publicOrigin) {
  let html = source;
  for (const [english, chinese] of REPLACEMENTS) {
    if (!html.includes(english)) throw new Error(`Missing self-host HTML anchor: ${english}`);
    html = html.replaceAll(english, chinese);
  }
  html = html.replace(/\s*<li><a href="\/pro#pricing">Pricing<\/a><\/li>/, '');
  if (publicOrigin) {
    const root = new URL('/', publicOrigin).href;
    const upstreamDashboardUrl = ['https:', '//www.', 'worldmonitor.app/dashboard'].join('');
    html = html.replaceAll(upstreamDashboardUrl, root);
  }
  return html;
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const file = resolve(process.argv[2] || 'dist/dashboard.html');
  const publicOrigin = process.argv[3];
  writeFileSync(file, localizeSelfHostedHtml(readFileSync(file, 'utf8'), publicOrigin), 'utf8');
  console.log(`Prepared Taiwan Traditional Chinese self-host HTML: ${file}`);
}
