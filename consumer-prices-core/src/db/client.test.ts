import { describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  poolConstructor: vi.fn(),
}));

vi.mock('pg', () => ({
  default: { Pool: mocks.poolConstructor },
}));

const {
  createDatabaseSslConfig,
  sanitizeDatabaseConnectionString,
} = await import('./client.js');

describe('createDatabaseSslConfig', () => {
  it('does not construct a database pool when the module is imported', () => {
    expect(mocks.poolConstructor).not.toHaveBeenCalled();
  });

  it.each([
    'postgresql://user:password@localhost:5432/prices',
    'postgresql://user:password@LOCALHOST:5432/prices',
    'postgres://user:password@127.0.0.1:5432/prices',
    'postgresql://user:password@[::1]:5432/prices',
  ])('disables TLS only for an exact loopback host: %s', (databaseUrl) => {
    expect(createDatabaseSslConfig(databaseUrl)).toBe(false);
  });

  it.each([
    'postgresql://user:password@localhost.evil.example:5432/prices',
    'postgresql://user:password@127.0.0.2:5432/prices',
    'postgresql://user:password@db.internal:5432/prices',
    'postgresql://user:password@localhost:5432/prices?host=db.internal',
    'postgresql://user:password@db.internal:5432/prices?host=localhost&host=',
  ])('requires certificate verification for non-loopback host: %s', (databaseUrl) => {
    expect(createDatabaseSslConfig(databaseUrl)).toEqual({ rejectUnauthorized: true });
  });

  it.each([
    'postgresql://user:password@db.internal:5432/prices?host=localhost',
    'postgresql://user:password@db.internal:5432/prices?host=127.0.0.1',
    'postgresql://user:password@db.internal:5432/prices?host=%3A%3A1',
  ])('uses the effective loopback host from a pg host query parameter: %s', (databaseUrl) => {
    expect(createDatabaseSslConfig(databaseUrl)).toBe(false);
  });

  it.each([undefined, ''])('uses the system trust store when no CA is provided', (trustedCa) => {
    const ssl = createDatabaseSslConfig(
      'postgresql://user:password@db.example.com/prices',
      trustedCa,
    );

    expect(ssl).toEqual({ rejectUnauthorized: true });
    expect(ssl).not.toHaveProperty('ca');
  });

  it('preserves a CA with literal newlines', () => {
    const ca = '-----BEGIN CERTIFICATE-----\nliteral-body\n-----END CERTIFICATE-----\n';

    expect(createDatabaseSslConfig('postgresql://db.example.com/prices', ca)).toEqual({
      rejectUnauthorized: true,
      ca,
    });
  });

  it('converts escaped newline sequences in a CA environment value', () => {
    const escapedCa = '-----BEGIN CERTIFICATE-----\\nescaped-body\\n-----END CERTIFICATE-----\\n';

    expect(createDatabaseSslConfig('postgresql://db.example.com/prices', escapedCa)).toEqual({
      rejectUnauthorized: true,
      ca: '-----BEGIN CERTIFICATE-----\nescaped-body\n-----END CERTIFICATE-----\n',
    });
  });

  it.each([
    'not a URL',
    'postgresql://user:password@bad host/prices',
    'https://db.example.com/prices',
  ])('fails closed for an invalid PostgreSQL URL: %s', (databaseUrl) => {
    expect(() => createDatabaseSslConfig(databaseUrl)).toThrow(/DATABASE_URL must/);
  });

  it('removes URL parameters that could override the enforced TLS policy', () => {
    const sanitized = sanitizeDatabaseConnectionString(
      'postgresql://db.example.com/prices?ssl=0&sslmode=no-verify&sslcert=client.pem&sslkey=client.key&sslrootcert=root.pem&uselibpqcompat=true&application_name=consumer-prices',
    );
    const parameters = new URL(sanitized).searchParams;

    expect(parameters.get('application_name')).toBe('consumer-prices');
    expect(parameters.has('ssl')).toBe(false);
    expect(parameters.has('sslmode')).toBe(false);
    expect(parameters.has('sslcert')).toBe(false);
    expect(parameters.has('sslkey')).toBe(false);
    expect(parameters.has('sslrootcert')).toBe(false);
    expect(parameters.has('uselibpqcompat')).toBe(false);
  });

  it('rejects an invalid URL before sanitization can reach the pool', () => {
    expect(() => sanitizeDatabaseConnectionString('not a URL')).toThrow(/DATABASE_URL must/);
  });
});
