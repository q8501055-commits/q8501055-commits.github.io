const UPSTREAM_ORIGIN = 'https://api.worldmonitor.app';
const UPSTREAM_BROWSER_ORIGIN = 'https://worldmonitor.app';
const MAX_BODY_BYTES = 128 * 1024;
const UPSTREAM_TIMEOUT_MS = 25_000;

const BLOCKED_PREFIXES = [
  '/api/a2a',
  '/api/agent',
  '/api/ask',
  '/api/cache-purge',
  '/api/chat',
  '/api/company-monitoring',
  '/api/create-checkout',
  '/api/discord',
  '/api/internal',
  '/api/invalidate-',
  '/api/leads',
  '/api/mcp',
  '/api/me',
  '/api/notification',
  '/api/notify',
  '/api/oauth',
  '/api/referral',
  '/api/slack',
  '/api/v2/shipping/webhooks',
];

const READ_ONLY_POST_PATHS = new Set([
  '/api/wm-session',
  '/api/conflict/v1/get-humanitarian-summary-batch',
  '/api/economic/v1/get-fred-series-batch',
  '/api/military/v1/get-aircraft-details-batch',
]);

const FORWARDED_REQUEST_HEADERS = [
  'accept',
  'accept-language',
  'content-type',
  'if-none-match',
  'x-worldmonitor-key',
];

const STRIPPED_RESPONSE_HEADERS = [
  'access-control-allow-credentials',
  'access-control-allow-headers',
  'access-control-allow-methods',
  'access-control-allow-origin',
  'content-encoding',
  'content-length',
  'set-cookie',
];

function jsonError(status, error) {
  return new Response(JSON.stringify({ error }), {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

export function isSameOriginBrowserRequest(request) {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get('origin');
  if (origin && origin !== requestUrl.origin) return false;

  const fetchSite = request.headers.get('sec-fetch-site');
  return !fetchSite || fetchSite === 'same-origin' || fetchSite === 'same-site' || fetchSite === 'none';
}

export function isAllowedProxyRequest(method, pathname) {
  const normalizedMethod = method.toUpperCase();
  // All production RPC paths are ASCII literals. Reject any encoded path byte
  // so a sensitive route cannot bypass the blocklist through alternate URL
  // decoding performed by the upstream router.
  if (!pathname.startsWith('/api/') || pathname.includes('\\') || pathname.includes('%')) return false;
  const normalizedPath = pathname.toLowerCase();
  if (BLOCKED_PREFIXES.some((prefix) => normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`))) return false;
  if (normalizedMethod === 'GET' || normalizedMethod === 'HEAD' || normalizedMethod === 'OPTIONS') return true;
  return normalizedMethod === 'POST' && READ_ONLY_POST_PATHS.has(normalizedPath);
}

function upstreamHeaders(request) {
  const headers = new Headers();
  for (const name of FORWARDED_REQUEST_HEADERS) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }
  headers.set('Origin', UPSTREAM_BROWSER_ORIGIN);
  headers.set('Referer', `${UPSTREAM_BROWSER_ORIGIN}/dashboard`);
  // Cloudflare rejects runtime-default fetch user agents before the request
  // reaches the public API. Identify this bounded gateway explicitly.
  headers.set('User-Agent', 'WorldMonitor-SelfHost/1.0');
  return headers;
}

async function requestBody(request) {
  if (request.method === 'GET' || request.method === 'HEAD') return undefined;
  const declaredLength = Number(request.headers.get('content-length') || 0);
  if (declaredLength > MAX_BODY_BYTES) throw new RangeError('request body too large');
  const bytes = await request.arrayBuffer();
  if (bytes.byteLength > MAX_BODY_BYTES) throw new RangeError('request body too large');
  return bytes;
}

export async function handleWebRequest(request) {
  if (!isSameOriginBrowserRequest(request)) return jsonError(403, 'Cross-origin proxy access denied');

  const requestUrl = new URL(request.url);
  if (!isAllowedProxyRequest(request.method, requestUrl.pathname)) {
    return jsonError(405, 'This self-host gateway only permits dashboard read operations');
  }

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        Allow: 'GET, HEAD, POST, OPTIONS',
        'Cache-Control': 'no-store',
      },
    });
  }

  let body;
  try {
    body = await requestBody(request);
  } catch (error) {
    if (error instanceof RangeError) return jsonError(413, error.message);
    return jsonError(400, 'Unable to read request body');
  }

  const upstreamUrl = new URL(requestUrl.pathname + requestUrl.search, UPSTREAM_ORIGIN);
  let upstreamResponse;
  try {
    upstreamResponse = await fetch(upstreamUrl, {
      method: request.method,
      headers: upstreamHeaders(request),
      body,
      redirect: 'manual',
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
  } catch {
    return jsonError(502, 'World Monitor data service is temporarily unavailable');
  }

  const responseHeaders = new Headers(upstreamResponse.headers);
  for (const name of STRIPPED_RESPONSE_HEADERS) responseHeaders.delete(name);
  responseHeaders.set('X-Content-Type-Options', 'nosniff');
  responseHeaders.set('X-Selfhost-Data-Source', 'api.worldmonitor.app');

  return new Response(upstreamResponse.body, {
    status: upstreamResponse.status,
    statusText: upstreamResponse.statusText,
    headers: responseHeaders,
  });
}

function firstHeaderValue(value) {
  return Array.isArray(value) ? value[0] : value;
}

async function nodeRequestBody(request) {
  if (request.body !== undefined && request.body !== null) {
    if (typeof request.body === 'string' || request.body instanceof Uint8Array) return request.body;
    return JSON.stringify(request.body);
  }
  const chunks = [];
  for await (const chunk of request) chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  return chunks.length ? Buffer.concat(chunks) : undefined;
}

async function toWebRequest(request) {
  const protocol = firstHeaderValue(request.headers['x-forwarded-proto']) || 'https';
  const host = firstHeaderValue(request.headers['x-forwarded-host']) || firstHeaderValue(request.headers.host);
  const url = new URL(request.url || '/', `${protocol}://${host}`);
  const rewrittenPath = url.searchParams.get('__wm_path');
  if (rewrittenPath) {
    url.pathname = `/api/${rewrittenPath.replace(/^\/+/, '')}`;
    url.searchParams.delete('__wm_path');
  }
  const headers = new Headers();
  for (const [name, value] of Object.entries(request.headers)) {
    if (value === undefined) continue;
    headers.set(name, Array.isArray(value) ? value.join(', ') : String(value));
  }
  const method = (request.method || 'GET').toUpperCase();
  const body = method === 'GET' || method === 'HEAD' ? undefined : await nodeRequestBody(request);
  return new Request(url, { method, headers, body });
}

async function sendNodeResponse(response, webResponse) {
  response.statusCode = webResponse.status;
  response.statusMessage = webResponse.statusText;
  webResponse.headers.forEach((value, name) => response.setHeader(name, value));
  response.end(Buffer.from(await webResponse.arrayBuffer()));
}

export default async function handler(request, response) {
  // Direct Web Request support keeps the security policy independently
  // testable; Vercel's anonymous Node runtime calls the adapter branch.
  if (request instanceof Request && response === undefined) return handleWebRequest(request);
  return sendNodeResponse(response, await handleWebRequest(await toWebRequest(request)));
}
