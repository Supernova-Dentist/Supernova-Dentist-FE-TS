'use client';

import { addActiveDuration, hasAnalyticsConsent, saveTracking } from '@/lib/tracking';
import { usePathname } from 'next/navigation';
import { useEffect, type PropsWithChildren } from 'react';

export default function TrackingProvider({ children }: PropsWithChildren) {
  const pathname = usePathname();
  useEffect(() => {
    const capture = () => {
      if (hasAnalyticsConsent()) saveTracking();
    };
    capture();
    window.addEventListener('sn-consent-change', capture);
    return () => window.removeEventListener('sn-consent-change', capture);
  }, [pathname]);

  useEffect(() => {
    const pageUrl = window.location.href;
    let activeSince = document.visibilityState === 'visible' ? performance.now() : null;
    const flush = () => {
      if (activeSince === null) return;
      addActiveDuration(performance.now() - activeSince, pageUrl);
      activeSince = null;
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') activeSince = performance.now();
      else flush();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pagehide', flush);
    return () => {
      flush();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('pagehide', flush);
    };
  }, [pathname]);

  return <>{children}</>;
}
