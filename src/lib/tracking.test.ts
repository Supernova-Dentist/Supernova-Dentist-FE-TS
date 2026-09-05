import { beforeEach, describe, expect, it } from 'vitest';
import { ANALYTICS_CONSENT_KEY, clearTracking, getTracking, pushAnalyticsEvent, saveTracking } from './tracking';

describe('tracking consent boundary', () => {
  beforeEach(() => {
    localStorage.clear();
    window.history.replaceState({}, '', '/test?gclid=synthetic-click&utm_source=synthetic');
  });

  it('does not persist attribution before consent or after rejection', () => {
    saveTracking();
    expect(getTracking()).toBeNull();

    localStorage.setItem(ANALYTICS_CONSENT_KEY, 'denied');
    saveTracking();
    expect(getTracking()).toBeNull();
  });

  it('persists attribution only after consent is granted', () => {
    localStorage.setItem(ANALYTICS_CONSENT_KEY, 'granted');
    saveTracking();
    expect(getTracking()?.firstTouch.gclid).toBe('synthetic-click');
    expect(getTracking()?.firstTouch.utm_source).toBe('synthetic');

    clearTracking();
    expect(getTracking()).toBeNull();
  });

  it('queues conversion events only after consent is granted', () => {
    window.dataLayer = [];
    pushAnalyticsEvent({ event: 'SyntheticLead' });
    expect(window.dataLayer).toHaveLength(0);

    localStorage.setItem(ANALYTICS_CONSENT_KEY, 'granted');
    pushAnalyticsEvent({ event: 'SyntheticLead' });
    expect(window.dataLayer).toEqual([{ event: 'SyntheticLead' }]);
  });
});
