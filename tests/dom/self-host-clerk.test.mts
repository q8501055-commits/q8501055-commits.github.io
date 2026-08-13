import { describe, expect, it } from 'vitest';

import {
  initClerk,
  isClerkAuthEnabled,
  mountUserButton,
  openSignIn,
  openSignUp,
  scheduleClerkLoad,
} from '@/services/clerk';

describe('self-host Clerk policy', () => {
  it('does not enable or load Clerk account UI on localhost', async () => {
    expect(location.hostname).toBe('localhost');
    const scriptsBefore = document.head.querySelectorAll('script').length;
    const mount = document.createElement('div');

    expect(isClerkAuthEnabled()).toBe(false);
    await initClerk();
    scheduleClerkLoad();
    openSignIn();
    openSignUp();
    const unmount = mountUserButton(mount);

    expect(document.head.querySelectorAll('script').length).toBe(scriptsBefore);
    expect(mount.childElementCount).toBe(0);
    expect(unmount).toBeTypeOf('function');
  });
});
