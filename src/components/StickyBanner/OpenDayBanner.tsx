'use client';

import { StickyBanner } from '@/components/ui/sticky-banner';
import Link from 'next/link';

export function OpenDayBanner({ onDismiss }: { onDismiss?: () => void }) {
  return (
    <StickyBanner
      onDismiss={onDismiss}
      className='bg-gold text-white cursor-pointer hover:brightness-105 transition-all hover:cursor-pointer'
    >
      <Link
        href='/cosmetic-dentistry/invisalign-open-day'
        onClick={onDismiss}
        className='flex w-full items-center justify-center text-center text-sm sm:text-base font-semibold tracking-wide'
      >
        <span>
          Invisalign Open Day <br /> Save up to £1,250! <br />
          <span className='underline underline-offset-2'>Tap to Book</span>
        </span>
      </Link>
    </StickyBanner>
  );
}
