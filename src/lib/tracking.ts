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
  gbraid: string | null;
  wbraid: string | null;
  fbclid: string | null;
  msclkid: string | null;
  visitDate: string;
}

export interface JourneyEntry {
  pageUrl: string;
  pagePath: string;
  enteredAt: string;
  exitedAt?: string;
  activeDurationMs: number;
}

export interface AttributionData {
  version: 2;
  mode: 'consented';
  firstTouch: TrackingData;
  lastTouch: TrackingData;
  journey: JourneyEntry[];
  updatedAt: string;
}

export interface SubmissionTracking {
  version: 2;
  mode: 'consented' | 'current';
  form: string;
  service?: string;
  conversionPage: TrackingData;
  firstTouch?: TrackingData;
  lastTouch?: TrackingData;
  journey?: JourneyEntry[];
  submittedAt: string;
}

const STORAGE_KEY = 'sn_tracking';
const SESSION_ROUTE_KEY = 'sn_tracking_route';
const MAX_JOURNEY_ENTRIES = 50;
const MAX_STORAGE_AGE_MS = 90 * 24 * 60 * 60 * 1000;
export const ANALYTICS_CONSENT_KEY = 'sn_analytics_consent';
export const MARKETING_CONSENT_KEY = 'sn_marketing_consent';
export const CONSENT_READY_KEY = 'sn_consent_ready';

export function hasAnalyticsConsent() {
  return typeof window !== 'undefined' && sessionStorage.getItem(CONSENT_READY_KEY) === 'true' && localStorage.getItem(ANALYTICS_CONSENT_KEY) === 'granted';
}

export function hasMarketingConsent() {
  return typeof window !== 'undefined' && sessionStorage.getItem(CONSENT_READY_KEY) === 'true' && localStorage.getItem(MARKETING_CONSENT_KEY) === 'granted';
}

export function pushAnalyticsEvent(event: Record<string, unknown>) {
  if (!hasAnalyticsConsent()) return;
  window.dataLayer ??= [];
  window.dataLayer.push(event);
}

export function pushMarketingEvent(event: Record<string, unknown>) {
  if (!hasMarketingConsent()) return;
  window.dataLayer ??= [];
  window.dataLayer.push(event);
}

export function trackGoogleAdsConversion(parameters: Record<string, unknown>) {
  if (!hasMarketingConsent() || typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', parameters);
}

export function trackMetaEvent(eventName: string, parameters?: Record<string, unknown>) {
  if (!hasMarketingConsent() || typeof window.fbq !== 'function') return;
  window.fbq('trackCustom', eventName, parameters);
}

function buildTrackingData(includeMarketingIds = hasMarketingConsent(), includeReferrer = true): TrackingData {
  const params = new URLSearchParams(window.location.search);
  const value = (name: string) => params.get(name)?.slice(0, 500) ?? null;
  const marketingValue = (name: string) => (includeMarketingIds ? value(name) : null);
  const allowedQuery = new URLSearchParams();
  const allowedKeys = [
    'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id',
    'utm_source_platform', 'utm_creative_format', 'utm_marketing_tactic', 'utm_ad_name',
    ...(includeMarketingIds ? ['gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'] : []),
  ];
  allowedKeys.forEach((key) => {
    const current = params.get(key);
    if (current !== null && current !== '') allowedQuery.set(key, current.slice(0, 500));
  });
  const query = allowedQuery.toString();
  return {
    pageUrl: `${window.location.origin}${window.location.pathname}${query !== '' ? `?${query}` : ''}`.slice(0, 2048),
    pagePath: window.location.pathname.slice(0, 500),
    previousPage: includeReferrer ? document.referrer.slice(0, 2048) : '',
    utm_id: value('utm_id'),
    utm_source_platform: value('utm_source_platform'),
    utm_creative_format: value('utm_creative_format'),
    utm_marketing_tactic: value('utm_marketing_tactic'),
    utm_ad_name: value('utm_ad_name'),
    utm_source: value('utm_source'),
    utm_medium: value('utm_medium'),
    utm_campaign: value('utm_campaign'),
    utm_term: value('utm_term'),
    utm_content: value('utm_content'),
    gclid: marketingValue('gclid'),
    gbraid: marketingValue('gbraid'),
    wbraid: marketingValue('wbraid'),
    fbclid: marketingValue('fbclid'),
    msclkid: marketingValue('msclkid'),
    visitDate: new Date().toISOString(),
  };
}

function isAttributableTouch(touch: TrackingData) {
  if ([touch.utm_source, touch.utm_medium, touch.utm_campaign, touch.utm_id, touch.gclid, touch.gbraid, touch.wbraid, touch.fbclid, touch.msclkid].some(Boolean)) return true;
  try {
    return touch.previousPage !== '' && new URL(touch.previousPage).origin !== window.location.origin;
  } catch {
    return false;
  }
}

function readStoredTracking(): AttributionData | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === null) return null;
  try {
    const parsed = JSON.parse(stored) as AttributionData;
    if (parsed.version !== 2 || parsed.mode !== 'consented' || !Array.isArray(parsed.journey)) return null;
    if (Date.now() - Date.parse(parsed.updatedAt) > MAX_STORAGE_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveTracking() {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) return;
  const current = buildTrackingData();
  const stored = readStoredTracking();
  const journeyEntry: JourneyEntry = {
    pageUrl: `${window.location.origin}${window.location.pathname}`,
    pagePath: current.pagePath,
    enteredAt: current.visitDate,
    activeDurationMs: 0,
  };
  if (stored === null) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      version: 2,
      mode: 'consented',
      firstTouch: current,
      lastTouch: current,
      journey: [journeyEntry],
      updatedAt: current.visitDate,
    } satisfies AttributionData));
    sessionStorage.setItem(SESSION_ROUTE_KEY, current.pageUrl);
    return;
  }
  if (sessionStorage.getItem(SESSION_ROUTE_KEY) !== current.pageUrl) stored.journey.push(journeyEntry);
  sessionStorage.setItem(SESSION_ROUTE_KEY, current.pageUrl);
  if (isAttributableTouch(current)) stored.lastTouch = current;
  stored.journey = stored.journey.slice(-MAX_JOURNEY_ENTRIES);
  stored.updatedAt = current.visitDate;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
}

export function addActiveDuration(durationMs: number, pageUrl = window.location.href) {
  if (typeof window === 'undefined' || !hasAnalyticsConsent() || durationMs <= 0) return;
  const stored = readStoredTracking();
  const current = stored?.journey.slice().reverse().find((entry) => entry.pageUrl === `${new URL(pageUrl).origin}${new URL(pageUrl).pathname}`);
  if (stored === null || current === undefined) return;
  current.activeDurationMs = Math.min(current.activeDurationMs + Math.round(durationMs), 24 * 60 * 60 * 1000);
  current.exitedAt = new Date().toISOString();
  stored.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
}

export function getTracking(): AttributionData | null {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) return null;
  return readStoredTracking();
}

export function buildSubmissionTracking({ form, service }: { form: string; service?: string }): SubmissionTracking {
  const stored = getTracking();
  const submittedAt = new Date().toISOString();
  // Current-page campaign values are submission context, not browser persistence.
  const navigationUrl = (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined)?.name;
  const isDocumentLandingPage = navigationUrl !== undefined && navigationUrl !== ''
    ? new URL(navigationUrl).pathname === window.location.pathname
    : true;
  const conversionPage = buildTrackingData(true, isDocumentLandingPage);
  if (stored === null) return { version: 2, mode: 'current', form, service, conversionPage, submittedAt };
  return {
    version: 2,
    mode: 'consented',
    form,
    service,
    conversionPage,
    firstTouch: stored.firstTouch,
    lastTouch: stored.lastTouch,
    journey: stored.journey,
    submittedAt,
  };
}

export function clearTracking() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(SESSION_ROUTE_KEY);
}
