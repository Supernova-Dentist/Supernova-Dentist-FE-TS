'use client';

import Footer from '@/components/blocks/Footer/Footer';
import MainNav from '@/components/blocks/MainNav/MainNav';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { type ReactNode, useEffect } from 'react';
import { getServiceAction } from '@/lib/serviceActions';

const FloatingMenu = dynamic(async () => await import('@/components/FloatingMenu/FloatingMenu'), { ssr: false });

interface RouteAwareSiteShellProps {
  children: ReactNode;
}

export default function RouteAwareSiteShell({ children }: RouteAwareSiteShellProps) {
  const pathname = usePathname();
  const isStaffRoute = pathname === '/admin' || pathname.startsWith('/admin/');

  useEffect(() => {
    document.body.classList.toggle('consent-forms-route', isStaffRoute);

    return () => document.body.classList.remove('consent-forms-route');
  }, [isStaffRoute]);

  if (isStaffRoute) {
    return <div className='min-h-[100dvh]'>{children}</div>;
  }

  return (
    <div className={`flex min-h-[100dvh] flex-col ${getServiceAction(pathname) !== undefined ? 'pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0' : ''}`}>
      <MainNav />
      <div className='flex-1'>{children}</div>
      <FloatingMenu />
      <Footer />
    </div>
  );
}
