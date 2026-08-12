import pg from 'pg';

const { Pool } = pg;

export type DatabaseSslConfig = false | {
  rejectUnauthorized: true;
  ca?: string;
};

const LOOPBACK_HOSTNAMES = new Set(['localhost', '127.0.0.1', '::1']);
const SSL_QUERY_PARAMETERS = [
  'ssl',
  'sslcert',
  'sslkey',
  'sslmode',
  'sslrootcert',
  'uselibpqcompat',
] as const;

function parseDatabaseUrl(databaseUrl: string): URL {
  let parsed: URL;
  try {
    parsed = new URL(databaseUrl);
  } catch {
    throw new Error('DATABASE_URL must be a valid PostgreSQL URL');
  }

  if (parsed.protocol !== 'postgres:' && parsed.protocol !== 'postgresql:') {
    throw new Error('DATABASE_URL must use the postgres: or postgresql: protocol');
  }

  return parsed;
}

function getEffectiveDatabaseHostname(parsed: URL): string {
  let queryHost: string | undefined;
  for (const [key, value] of parsed.searchParams) {
    if (key === 'host') queryHost = value;
  }

  const hostname = queryHost || parsed.hostname;
  // WHATWG URL retains brackets for IPv6 hosts under non-special schemes.
  return hostname.toLowerCase().replace(/^\[|\]$/g, '');
}

export function createDatabaseSslConfig(
  databaseUrl: string,
  trustedCa?: string,
): DatabaseSslConfig {
  const hostname = getEffectiveDatabaseHostname(parseDatabaseUrl(databaseUrl));
  if (LOOPBACK_HOSTNAMES.has(hostname)) return false;

  const normalizedCa = trustedCa?.replace(/\\n/g, '\n');
  return normalizedCa
    ? { rejectUnauthorized: true, ca: normalizedCa }
    : { rejectUnauthorized: true };
}

export function sanitizeDatabaseConnectionString(databaseUrl: string): string {
  const parsed = parseDatabaseUrl(databaseUrl);
  for (const parameter of SSL_QUERY_PARAMETERS) {
    parsed.searchParams.delete(parameter);
  }
  return parsed.toString();
}

let _pool: pg.Pool | null = null;

export function getPool(): pg.Pool {
  if (!_pool) {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) throw new Error('DATABASE_URL is not set');

    _pool = new Pool({
      connectionString: sanitizeDatabaseConnectionString(databaseUrl),
      max: 10,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 5_000,
      ssl: createDatabaseSslConfig(databaseUrl, process.env.DATABASE_SSL_CA),
    });

    _pool.on('error', (err) => {
      console.error('[db] pool error:', err.message);
    });
  }
  return _pool;
}

export async function query<T extends pg.QueryResultRow = Record<string, unknown>>(
  sql: string,
  params?: unknown[],
): Promise<pg.QueryResult<T>> {
  const pool = getPool();
  return pool.query<T>(sql, params);
}

export async function closePool(): Promise<void> {
  await _pool?.end();
  _pool = null;
}
