'use client';

import { ANALYTICS_CONSENT_KEY } from '@/lib/tracking';
import { useEffect } from 'react';

type CookiebotWindow = Window & {
  Cookiebot?: { consent?: { statistics?: boolean; marketing?: boolean } };
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
};

const GTM_SCRIPT_ID = 'consented-gtm-script';

function loadGoogleTagManager() {
  if (document.getElementById(GTM_SCRIPT_ID) !== null) return;
  const consentWindow = window as CookiebotWindow;
  consentWindow.dataLayer = consentWindow.dataLayer ?? [];
  consentWindow.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.id = GTM_SCRIPT_ID;
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-5Q5NWLHG';
  document.head.appendChild(script);
}

export default function CookieConsentBridge() {
  useEffect(() => {
    const syncConsent = () => {
      const consent = (window as CookiebotWindow).Cookiebot?.consent;
      if (consent === undefined) return;

      const analyticsGranted = consent.statistics === true;
      const attributionGranted = analyticsGranted && consent.marketing === true;
      localStorage.setItem(ANALYTICS_CONSENT_KEY, attributionGranted ? 'granted' : 'denied');
      window.dispatchEvent(new Event('sn-consent-change'));

      (window as CookiebotWindow).gtag?.('consent', 'update', {
        analytics_storage: analyticsGranted ? 'granted' : 'denied',
        ad_storage: consent.marketing ? 'granted' : 'denied',
        ad_user_data: consent.marketing ? 'granted' : 'denied',
        ad_personalization: consent.marketing ? 'granted' : 'denied',
      });
      if (analyticsGranted) loadGoogleTagManager();
    };

    window.addEventListener('CookiebotOnConsentReady', syncConsent);
    window.addEventListener('CookiebotOnAccept', syncConsent);
    window.addEventListener('CookiebotOnDecline', syncConsent);
    syncConsent();

    return () => {
      window.removeEventListener('CookiebotOnConsentReady', syncConsent);
      window.removeEventListener('CookiebotOnAccept', syncConsent);
      window.removeEventListener('CookiebotOnDecline', syncConsent);
    };
  }, []);

  return null;
}
