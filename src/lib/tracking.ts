export interface TrackingData {
  pageUrl: string;
  pagePath: string;
  previousPage: string;

  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;

  utm_id: string | null;
  utm_source_platform: string | null;
  utm_creative_format: string | null;
  utm_marketing_tactic: string | null;
  utm_ad_name: string | null;

  gclid: string | null;
  fbclid: string | null;
  msclkid: string | null;

  visitDate: string;
}

export interface AttributionData {
  firstTouch: TrackingData;
  lastTouch: TrackingData;
  conversionPage?: TrackingData;
}

const STORAGE_KEY = 'sn_tracking';
export const ANALYTICS_CONSENT_KEY = 'sn_analytics_consent';

export function hasAnalyticsConsent() {
  return typeof window !== 'undefined' && localStorage.getItem(ANALYTICS_CONSENT_KEY) === 'granted';
}

export function pushAnalyticsEvent(event: Record<string, unknown>) {
  if (!hasAnalyticsConsent()) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

function buildTrackingData(): TrackingData {
  const params = new URLSearchParams(window.location.search);

  return {
    pageUrl: window.location.href,
    pagePath: window.location.pathname,
    previousPage: document.referrer,

    utm_id: params.get('utm_id'),
    utm_source_platform: params.get('utm_source_platform'),
    utm_creative_format: params.get('utm_creative_format'),
    utm_marketing_tactic: params.get('utm_marketing_tactic'),
    utm_ad_name: params.get('utm_ad_name'),

    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
    utm_term: params.get('utm_term'),
    utm_content: params.get('utm_content'),

    gclid: params.get('gclid'),
    fbclid: params.get('fbclid'),
    msclkid: params.get('msclkid'),

    visitDate: new Date().toISOString(),
  };
}

export function saveTracking() {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) return;

  const current = buildTrackingData();

  const stored = localStorage.getItem(STORAGE_KEY);

  // First ever visit
  if (!stored) {
    const attribution: AttributionData = {
      firstTouch: current,
      lastTouch: current,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));

    return;
  }

  const attribution: AttributionData = JSON.parse(stored);

  // Update the latest page visited
  attribution.lastTouch = current;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
}

export function getTracking(): AttributionData | null {
  if (typeof window === 'undefined') return null;

  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) return null;

  return JSON.parse(stored);
}

export function clearTracking() {
  if (typeof window === 'undefined') return;

  localStorage.removeItem(STORAGE_KEY);
}
