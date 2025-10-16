'use client';

import { StickyBanner } from '@/components/ui/sticky-banner';
import Link from 'next/link';

export function OpenDayBanner({ onDismiss }: { onDismiss?: () => void }) {
  return (
    <StickyBanner
      onDismiss={onDismiss}
      className='bg-gold text-white cursor-pointer hover:brightness-105 transition-all'
    >
      <Link
        href='/cosmetic-dentistry/invisalign-open-day'
        className='flex w-full items-center justify-center gap- text-center text-sm sm:text-base font-semibold tracking-wide'
      >
        <span>
          Invisalign Open Day – Save up to £1500! <br />
          <span className='underline underline-offset-2'>Tap to Book</span>
        </span>
      </Link>
    </StickyBanner>
  );
}
