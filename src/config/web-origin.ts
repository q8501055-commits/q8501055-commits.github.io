/**
 * Canonical https origin of the WorldMonitor web app.
 *
 * The desktop WebView serves the dashboard from `tauri://localhost` (or
 * `https://localhost:<port>` under `desktop:dev`), so a relative link to a
 * web-only surface — pricing, the billing portal, a payment-provider return
 * URL — resolves against an origin that hosts none of those routes and
 * dead-ends the user. Every desktop-reachable link into the web app must be
 * absolute against this constant.
 *
 * Dependency-free on purpose: consumers span `config`, `services`,
 * `components` and `utils`, and the checkout-return builders are unit-tested
 * without the browser service graph.
 */
export const WEB_APP_ORIGIN = 'https://worldmonitor.app';

/**
 * Browser hosts operated by WorldMonitor that may expose account and Pro UI.
 *
 * Keep this as an exact allowlist. Domain-suffix checks are intentionally not
 * used: previews, localhost, GitHub Pages, and lookalikes such as
 * `evilworldmonitor.app` are self-host surfaces and must stay free of the
 * upstream service's commercial/account chrome.
 */
const OFFICIAL_WORLD_MONITOR_APP_HOSTNAMES = new Set([
  'worldmonitor.app',
  'www.worldmonitor.app',
  'tech.worldmonitor.app',
  'finance.worldmonitor.app',
  'commodity.worldmonitor.app',
  'happy.worldmonitor.app',
  'energy.worldmonitor.app',
]);

export function isOfficialWorldMonitorAppHostname(hostname: string): boolean {
  return OFFICIAL_WORLD_MONITOR_APP_HOSTNAMES.has(hostname.toLowerCase());
}

/**
 * Runtime policy for commercial/account browser UI. Non-browser callers are
 * left unchanged so server-side and unit-test auth helpers retain their prior
 * behavior; browser runtimes must match the exact production-host allowlist.
 */
export function isOfficialWorldMonitorAppRuntime(): boolean {
  if (typeof location === 'undefined') return true;
  return isOfficialWorldMonitorAppHostname(location.hostname);
}
