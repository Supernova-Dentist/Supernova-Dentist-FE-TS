import { render, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { ANALYTICS_CONSENT_KEY, MARKETING_CONSENT_KEY } from '@/lib/tracking';
import CookieConsentBridge from './CookieConsentBridge';

describe('CookieConsentBridge', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    document.getElementById('consented-gtm-script')?.remove();
    delete (window as Window & { Cookiebot?: unknown }).Cookiebot;
    window.dataLayer = [];
  });

  it('does not load GTM before consent or after rejection', () => {
    render(<CookieConsentBridge />);
    expect(document.getElementById('consented-gtm-script')).toBeNull();

    (window as Window & { Cookiebot?: unknown }).Cookiebot = {
      consent: { statistics: false, marketing: false },
    };
    window.dispatchEvent(new Event('CookiebotOnDecline'));
    expect(localStorage.getItem(ANALYTICS_CONSENT_KEY)).toBe('denied');
    expect(localStorage.getItem(MARKETING_CONSENT_KEY)).toBe('denied');
    expect(document.getElementById('consented-gtm-script')).toBeNull();
  });

  it('loads GTM after statistics consent and keeps marketing consent separate', async () => {
    render(<CookieConsentBridge />);
    (window as Window & { Cookiebot?: unknown }).Cookiebot = {
      consent: { statistics: true, marketing: true },
    };
    window.dispatchEvent(new Event('CookiebotOnAccept'));

    await waitFor(() => expect(document.getElementById('consented-gtm-script')).not.toBeNull());
    expect(localStorage.getItem(ANALYTICS_CONSENT_KEY)).toBe('granted');
    expect(localStorage.getItem(MARKETING_CONSENT_KEY)).toBe('granted');
  });

  it('clears stored attribution when statistics consent is withdrawn', () => {
    localStorage.setItem('sn_tracking', JSON.stringify({ synthetic: true }));
    render(<CookieConsentBridge />);
    (window as Window & { Cookiebot?: unknown }).Cookiebot = {
      consent: { statistics: false, marketing: true },
    };
    window.dispatchEvent(new Event('CookiebotOnDecline'));
    expect(localStorage.getItem('sn_tracking')).toBeNull();
    expect(localStorage.getItem(ANALYTICS_CONSENT_KEY)).toBe('denied');
    expect(localStorage.getItem(MARKETING_CONSENT_KEY)).toBe('granted');
    expect(document.getElementById('consented-gtm-script')).not.toBeNull();
  });
});
