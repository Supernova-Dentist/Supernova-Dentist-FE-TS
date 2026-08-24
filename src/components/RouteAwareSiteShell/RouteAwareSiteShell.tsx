'use client';

import Footer from '@/components/blocks/Footer/Footer';
import MainNav from '@/components/blocks/MainNav/MainNav';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { type ReactNode, useEffect } from 'react';

const FloatingMenu = dynamic(async () => await import('@/components/FloatingMenu/FloatingMenu'), { ssr: false });

interface RouteAwareSiteShellProps {
  children: ReactNode;
}

export default function RouteAwareSiteShell({ children }: RouteAwareSiteShellProps) {
  const pathname = usePathname();
  const isConsentFormsRoute = pathname === '/consent-forms' || pathname.startsWith('/consent-forms/');

  useEffect(() => {
    document.body.classList.toggle('consent-forms-route', isConsentFormsRoute);

    return () => document.body.classList.remove('consent-forms-route');
  }, [isConsentFormsRoute]);

  return (
    <>
      {!isConsentFormsRoute && <MainNav />}
      {children}
      {!isConsentFormsRoute && (
        <>
          <FloatingMenu />
          <Footer />
        </>
      )}
    </>
  );
}
