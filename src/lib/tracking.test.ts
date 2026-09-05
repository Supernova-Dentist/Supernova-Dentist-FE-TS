import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  ANALYTICS_CONSENT_KEY,
  CONSENT_READY_KEY,
  MARKETING_CONSENT_KEY,
  addActiveDuration,
  buildSubmissionTracking,
  clearTracking,
  getTracking,
  pushAnalyticsEvent,
  saveTracking,
  trackGoogleAdsConversion,
  trackMetaEvent,
} from './tracking';

describe('tracking consent boundary', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    window.history.replaceState({}, '', '/implants?utm_source=google&utm_campaign=september&gclid=synthetic');
    window.dataLayer = [];
    window.gtag = vi.fn();
    window.fbq = Object.assign(vi.fn(), {
      queue: [],
      disablePushState: false,
      forcePageView: false,
      generation: 1,
    });
  });

  it('does not persist history without statistics consent but includes current conversion context', () => {
    localStorage.setItem(ANALYTICS_CONSENT_KEY, 'granted');
    saveTracking();
    expect(getTracking()).toBeNull();
    expect(localStorage.getItem('sn_tracking')).toBeNull();
    const submission = buildSubmissionTracking({ form: 'service-enquiry', service: 'Implants' });
    expect(submission.mode).toBe('current');
    expect(submission.firstTouch).toBeUndefined();
    expect(submission.journey).toBeUndefined();
    expect(submission.conversionPage.utm_source).toBe('google');
    expect(submission.conversionPage.gclid).toBe('synthetic');
  });

  it('starts prospectively and does not replace marketing touch on internal navigation', () => {
    localStorage.setItem(ANALYTICS_CONSENT_KEY, 'granted');
    sessionStorage.setItem(CONSENT_READY_KEY, 'true');
    localStorage.setItem(MARKETING_CONSENT_KEY, 'granted');
    saveTracking();
    const first = getTracking()?.firstTouch;
    window.history.replaceState({}, '', '/implant-costs');
    saveTracking();
    expect(getTracking()?.firstTouch).toEqual(first);
    expect(getTracking()?.lastTouch.pagePath).toBe('/implants');
    expect(getTracking()?.journey.map((entry) => entry.pagePath)).toEqual(['/implants', '/implant-costs']);
    window.history.replaceState({}, '', '/finance?utm_source=facebook&utm_campaign=finance');
    saveTracking();
    expect(getTracking()?.lastTouch.pagePath).toBe('/finance');
  });

  it('does not persist advertising click identifiers without marketing consent', () => {
    localStorage.setItem(ANALYTICS_CONSENT_KEY, 'granted');
    sessionStorage.setItem(CONSENT_READY_KEY, 'true');
    localStorage.setItem(MARKETING_CONSENT_KEY, 'denied');
    saveTracking();
    expect(getTracking()?.firstTouch.utm_source).toBe('google');
    expect(getTracking()?.firstTouch.gclid).toBeNull();
    expect(getTracking()?.firstTouch.pageUrl).not.toContain('gclid');
  });

  it('records active time and clears persisted history', () => {
    localStorage.setItem(ANALYTICS_CONSENT_KEY, 'granted');
    sessionStorage.setItem(CONSENT_READY_KEY, 'true');
    saveTracking();
    addActiveDuration(12_345, window.location.href);
    expect(getTracking()?.journey[0].activeDurationMs).toBe(12_345);
    expect(getTracking()?.journey[0].exitedAt).toBeTruthy();
    clearTracking();
    expect(getTracking()).toBeNull();
  });

  it('gates analytics and advertising events independently', () => {
    pushAnalyticsEvent({ event: 'lead' });
    trackGoogleAdsConversion({ send_to: 'AW-test' });
    trackMetaEvent('Lead');
    expect(window.dataLayer).toHaveLength(0);
    expect(window.gtag).not.toHaveBeenCalled();
    expect(window.fbq).not.toHaveBeenCalled();
    localStorage.setItem(ANALYTICS_CONSENT_KEY, 'granted');
    sessionStorage.setItem(CONSENT_READY_KEY, 'true');
    pushAnalyticsEvent({ event: 'lead' });
    expect(window.dataLayer).toEqual([{ event: 'lead' }]);
    expect(window.gtag).not.toHaveBeenCalled();
    localStorage.setItem(MARKETING_CONSENT_KEY, 'granted');
    trackGoogleAdsConversion({ send_to: 'AW-test' });
    trackMetaEvent('Lead');
    expect(window.gtag).toHaveBeenCalledWith('event', 'conversion', { send_to: 'AW-test' });
    expect(window.fbq).toHaveBeenCalledWith('trackCustom', 'Lead', undefined);
  });
});
