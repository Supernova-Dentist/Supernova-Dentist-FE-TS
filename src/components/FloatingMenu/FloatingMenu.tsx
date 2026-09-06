'use client';

import { DentallyPortal } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const consultationRoutes = new Set([
  '/smile-makeover-consultation',
  '/book-appointment',
  '/implant-consultation',
]);

const SHOW_AFTER_SCROLL = 96;

export default function FloatingMenu() {
  const pathname = usePathname();
  const [isQuickActionsVisible, setIsQuickActionsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const shouldShow = window.scrollY > SHOW_AFTER_SCROLL;

      setIsQuickActionsVisible((current) =>
        current === shouldShow ? current : shouldShow,
      );
    };

    updateVisibility();

    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  if (consultationRoutes.has(pathname)) return null;

  const tabIndex = isQuickActionsVisible ? undefined : -1;

  return (
    <>
      <nav
        aria-label='Quick contact actions'
        aria-hidden={!isQuickActionsVisible}
        className={`fixed inset-x-0 bottom-0 z-40 grid h-[calc(5.25rem+env(safe-area-inset-bottom))] grid-cols-3 bg-gold pb-[env(safe-area-inset-bottom)] text-white shadow-[0_-4px_16px_rgba(0,0,0,0.15)] transition-[transform,opacity,visibility] duration-300 ease-out motion-reduce:transition-none md:hidden ${
          isQuickActionsVisible
            ? 'visible translate-y-0 opacity-100'
            : 'pointer-events-none invisible translate-y-full opacity-0'
        }`}
      >
        <QuickAction
          href={DentallyPortal}
          label='Book online'
          external
          icon={<CalendarIcon />}
          tabIndex={tabIndex}
        />

        <Link
          href='/find-us'
          tabIndex={tabIndex}
          className={quickActionClassName}
        >
          <QuickActionContent label='Find us' icon={<PinIcon />} />
        </Link>

        <QuickAction
          href='tel:01278228665'
          label='Call reception'
          icon={<PhoneIcon />}
          tabIndex={tabIndex}
        />
      </nav>

      <a
        href='https://wa.me/447863338815'
        target='_blank'
        rel='noreferrer'
        aria-label='Chat with Supernova Dental on WhatsApp'
        aria-hidden={!isQuickActionsVisible}
        tabIndex={tabIndex}
        className={`fixed bottom-[calc(6.25rem+env(safe-area-inset-bottom))] right-4 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] md:bottom-5 ${
          isQuickActionsVisible
            ? 'visible translate-y-0 opacity-100'
            : 'pointer-events-none invisible translate-y-4 opacity-0'
        }`}
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}

const quickActionClassName =
  'flex flex-col items-center justify-center gap-1.5 border-r border-black/60 px-2 text-center text-base font-medium leading-tight last:border-r-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white';

function QuickAction({
  href,
  label,
  icon,
  external = false,
  tabIndex,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
  tabIndex?: number;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      tabIndex={tabIndex}
      className={quickActionClassName}
    >
      <QuickActionContent label={label} icon={icon} />
    </a>
  );
}

function QuickActionContent({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <>
      <span
        aria-hidden='true'
        className='grid size-[26px] shrink-0 place-items-center [&>svg]:size-full'
      >
        {icon}
      </span>

      <span>{label}</span>
    </>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      aria-hidden='true'
    >
      <rect x='3' y='4.5' width='18' height='16' rx='2' />
      <path d='M8 2.5v4M16 2.5v4M3 9.5h18' />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      aria-hidden='true'
    >
      <path d='M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z' />
      <circle cx='12' cy='10' r='2.5' />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      aria-hidden='true'
    >
      <path d='M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 2.9a2 2 0 0 1-.4 2.1L8.2 10a16 16 0 0 0 5.8 5.8l1.3-1.3a2 2 0 0 1 2.1-.4c.9.4 1.9.7 2.9.8a2 2 0 0 1 1.7 2Z' />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden='true'
      className='size-8'
    >
      <path d='M19.05 4.94A9.9 9.9 0 0 0 12.02 2C6.55 2 2.1 6.44 2.1 11.9c0 1.74.45 3.43 1.31 4.92L2 22l5.32-1.39a9.95 9.95 0 0 0 4.7 1.19h.01c5.46 0 9.9-4.44 9.9-9.9a9.85 9.85 0 0 0-2.88-6.96Zm-7.03 15.2a8.25 8.25 0 0 1-4.2-1.15l-.3-.18-3.16.83.84-3.07-.2-.32a8.18 8.18 0 0 1-1.25-4.35c0-4.55 3.7-8.25 8.27-8.25a8.18 8.18 0 0 1 5.85 2.42 8.2 8.2 0 0 1 2.4 5.83c0 4.55-3.7 8.25-8.25 8.25Zm4.52-6.18c-.25-.12-1.47-.73-1.7-.81-.23-.08-.4-.12-.57.12-.16.24-.65.8-.79.97-.15.16-.3.18-.55.06-.25-.13-1.06-.39-2.01-1.24a7.56 7.56 0 0 1-1.4-1.74c-.15-.25-.02-.38.1-.5.12-.11.25-.3.37-.45.13-.15.17-.25.25-.41.08-.16.04-.31-.02-.44-.06-.12-.57-1.36-.77-1.86-.2-.48-.4-.42-.55-.43h-.48a.92.92 0 0 0-.66.3c-.23.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.54.12.16 1.74 2.65 4.2 3.72.59.25 1.05.4 1.41.51.6.19 1.14.16 1.57.1.48-.08 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.29Z' />
    </svg>
  );
}