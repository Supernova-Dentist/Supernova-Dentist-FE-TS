'use client';

import { ImplantInvisalignBanner } from '@/components/ui/implant-invisalign-sticky-banner';
import Link from 'next/link';

export function ImplantInvisalignBannerPopUp({ onDismiss }: { onDismiss?: () => void }) {
  return (
    <ImplantInvisalignBanner
      onDismiss={onDismiss}
      className='bg-gold text-white cursor-pointer hover:brightness-105 transition-all hover:cursor-pointer px-4'
    >
      <Link
        href='/implant-consultation'
        onClick={onDismiss}
        className='flex w-full items-center justify-center text-center text-sm sm:text-base font-semibold tracking-wide'
      >
        <span>
          Implant Consultations
          <br />
          Monday 22nd June - Limited Availability Remaining
          <br />
          <span className='underline underline-offset-2'>Click Here To Register Interest</span>
        </span>
      </Link>
    </ImplantInvisalignBanner>
  );
}
