'use client';

import { hasAnalyticsConsent, saveTracking } from '@/lib/tracking';
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

  return <>{children}</>;
}
