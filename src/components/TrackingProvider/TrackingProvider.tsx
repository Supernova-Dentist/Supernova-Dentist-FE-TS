'use client';

import { saveTracking } from '@/lib/tracking';
import { usePathname } from 'next/navigation';
import { useEffect, type PropsWithChildren } from 'react';

export default function TrackingProvider({ children }: PropsWithChildren) {
  const pathname = usePathname();
  useEffect(() => {
    saveTracking();
  }, [pathname]);

  return <>{children}</>;
}
