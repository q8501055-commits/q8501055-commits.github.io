import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

const subscribeAuthState = vi.fn(() => () => {});
const mountUserButton = vi.fn(() => () => {});

vi.mock('@/services/analytics', () => ({ trackGateHit: vi.fn() }));
vi.mock('@/services/entitlements', () => ({
  getEntitlementState: () => null,
  isEntitlementActive: () => false,
  onEntitlementChange: () => () => {},
}));
vi.mock('@/services/billing', () => ({
  getSubscription: () => null,
  onSubscriptionChange: () => () => {},
}));
vi.mock('@/services/billing-state', () => ({
  deriveBillingUxState: () => 'free',
  getReactivationHref: () => '/pro#pricing',
}));
vi.mock('@/services/auth-state', () => ({
  getAuthState: () => ({ user: null, isPending: false }),
  subscribeAuthState,
}));
vi.mock('@/services/clerk', () => ({
  getCurrentClerkUser: () => null,
  isClerkAuthEnabled: () => false,
  mountUserButton,
  openSignIn: vi.fn(),
  openSignUp: vi.fn(),
}));
vi.mock('@/services/runtime-config', () => ({
  getSecretState: () => ({ present: false }),
}));
vi.mock('@/services/widget-store', () => ({
  isProWidgetEnabled: () => false,
  isWidgetFeatureEnabled: () => false,
}));
vi.mock('@/services/i18n', () => ({ t: (key: string) => key }));

let AuthHeaderWidget: typeof import('@/components/AuthHeaderWidget').AuthHeaderWidget;
let MobilePrimaryNav: typeof import('@/app/mobile-primary-nav').MobilePrimaryNav;
let showProBanner: typeof import('@/components/ProBanner').showProBanner;

beforeAll(async () => {
  ({ AuthHeaderWidget } = await import('@/components/AuthHeaderWidget'));
  ({ MobilePrimaryNav } = await import('@/app/mobile-primary-nav'));
  ({ showProBanner } = await import('@/components/ProBanner'));
});

beforeEach(() => {
  document.body.replaceChildren();
  document.documentElement.classList.remove('wm-pro-banner-reserved');
  subscribeAuthState.mockClear();
  mountUserButton.mockClear();
});

describe('self-host browser chrome', () => {
  it('does not subscribe or render sign-in, sign-up, or avatar UI on localhost', () => {
    expect(location.hostname).toBe('localhost');
    const widget = new AuthHeaderWidget();

    expect(widget.getElement().hidden).toBe(true);
    expect(widget.getElement().childElementCount).toBe(0);
    expect(subscribeAuthState).not.toHaveBeenCalled();
    expect(mountUserButton).not.toHaveBeenCalled();
  });

  it('does not mount or reserve space for the Pro banner on localhost', () => {
    expect(location.hostname).toBe('localhost');
    const container = document.createElement('main');
    const slot = document.createElement('div');
    slot.id = 'proBannerSlot';
    container.appendChild(slot);
    document.body.appendChild(container);
    document.documentElement.classList.add('wm-pro-banner-reserved');

    showProBanner(container);

    expect(container.querySelector('.pro-banner')).toBeNull();
    expect(document.documentElement.classList.contains('wm-pro-banner-reserved')).toBe(false);
  });

  it('hides the complete mobile account entry on localhost', () => {
    const accountSection = document.createElement('section');
    accountSection.className = 'mobile-menu-account';
    const mount = document.createElement('div');
    mount.id = 'mobileAuthWidgetMount';
    const fallback = document.createElement('button');
    fallback.id = 'mobileAuthFallback';
    accountSection.append(mount, fallback);
    document.body.appendChild(accountSection);

    const nav = new MobilePrimaryNav({} as never, {} as never);
    nav.setupAuth(null);

    expect(accountSection.hidden).toBe(true);
    expect(fallback.hidden).toBe(true);
    expect(mount.childElementCount).toBe(0);
  });
});
