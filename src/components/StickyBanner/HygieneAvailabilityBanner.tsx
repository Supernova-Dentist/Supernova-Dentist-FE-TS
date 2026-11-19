'use client';

import { StickyBanner } from '@/components/ui/sticky-banner';
import { useEffect, useState } from 'react';

const campaignStartsAt = Date.parse('2026-11-19T00:00:00Z');
const campaignEndsAt = Date.parse('2026-11-22T00:00:00Z');
const dismissalKey = 'hygiene-availability-2026-11-21-dismissed';

export function HygieneAvailabilityBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const now = Date.now();
    if (now < campaignStartsAt || now >= campaignEndsAt) return;

    try {
      if (sessionStorage.getItem(dismissalKey) === 'true') return;
    } catch {
      // The banner can still be dismissed for the current page without storage.
    }

    setIsVisible(true);
    const expiryTimer = window.setTimeout(() => setIsVisible(false), campaignEndsAt - now);
    return () => window.clearTimeout(expiryTimer);
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    try {
      sessionStorage.setItem(dismissalKey, 'true');
    } catch {
      // In-memory dismissal still applies.
    }
  };

  if (!isVisible) return null;

  return (
    <StickyBanner
      onDismiss={dismiss}
      rememberDismissal={false}
      className='relative z-auto h-auto bg-gold px-14 py-0 text-grey md:h-auto'
    >
      <a
        href='https://supernova.portal.dental/book'
        className='flex min-h-11 w-full flex-wrap items-center justify-center gap-x-3 gap-y-0 rounded-sm py-2 text-center text-sm font-semibold leading-snug focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grey sm:text-base'
      >
        <span>Hygiene appointments available Saturday 21 November</span>
        <span className='underline underline-offset-2'>Book online</span>
      </a>
    </StickyBanner>
  );
}
