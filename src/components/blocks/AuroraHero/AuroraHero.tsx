'use client';

import { DentallyPortal } from '@/lib/constants';
import { practiceLocation } from '@/lib/practiceLocation';
import { useReducedMotion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';

const AuroraStars = dynamic(async () => await import('./AuroraStars'), {
  ssr: false,
  loading: () => <div className='h-full w-full bg-[radial-gradient(circle_at_70%_30%,rgba(198,161,91,0.08),transparent_28rem)]' />,
});

export default function AuroraHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby='home-hero-title'
      className='relative isolate flex min-h-[calc(100svh-5.25rem)] items-center overflow-hidden bg-obsidian text-ivory'
    >
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(65,105,150,0.28),transparent_27rem),radial-gradient(circle_at_92%_74%,rgba(198,161,91,0.16),transparent_24rem),linear-gradient(135deg,#070b10_8%,#0b1218_52%,#111b24_100%)]' aria-hidden='true' />
      <div className='absolute -left-24 top-1/3 h-80 w-[38rem] -rotate-12 rounded-[100%] bg-gradient-to-r from-transparent via-cyan-300/10 to-indigo-400/10 blur-3xl' aria-hidden='true' />
      <div className='absolute right-[-12rem] top-[-8rem] h-[36rem] w-[36rem] rounded-full border border-champagne/15 bg-champagne/[0.03] shadow-[0_0_140px_rgba(198,161,91,0.12)]' aria-hidden='true' />

      {reduceMotion !== true && (
        <div className='pointer-events-none absolute inset-0 opacity-70' aria-hidden='true'>
          <AuroraStars />
        </div>
      )}

      <div className='relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:items-end lg:px-12 lg:py-28'>
        <div className='max-w-4xl'>
          <p className='mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-champagne sm:text-sm'>
            <span className='h-px w-10 bg-champagne/70' aria-hidden='true' />
            Private dental care in Bridgwater
          </p>
          <h1 id='home-hero-title' className='max-w-4xl text-balance text-5xl font-normal leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]'>
            Modern dentistry,
            <span className='block bg-gradient-to-r from-ivory via-[#f3dfb2] to-champagne bg-clip-text text-transparent'>thoughtfully delivered.</span>
          </h1>
          <p className='mt-7 max-w-2xl text-pretty text-lg leading-8 text-ivory/70 sm:text-xl'>
            Personal general, cosmetic and implant dentistry from a welcoming team, in a calm modern practice designed around you.
          </p>

          <div className='mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
            <Link
              href={DentallyPortal}
              target='_blank'
              rel='noopener noreferrer'
              className='group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-champagne px-6 text-sm font-semibold text-obsidian transition-colors hover:bg-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian'
            >
              Book an appointment
              <FiArrowRight className='transition-transform group-hover:translate-x-0.5' aria-hidden='true' />
            </Link>
            <Link
              href='/enquiry'
              className='inline-flex min-h-12 items-center justify-center rounded-full border border-ivory/30 bg-ivory/[0.04] px-6 text-sm font-semibold text-ivory transition-colors hover:border-champagne hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne'
            >
              Make an enquiry
            </Link>
          </div>
        </div>

        <div className='justify-self-stretch border-l border-ivory/15 pl-6 lg:max-w-sm lg:justify-self-end lg:pl-8'>
          <p className='text-sm uppercase tracking-[0.18em] text-ivory/45'>Your brightest smile starts here</p>
          <p className='mt-4 text-pretty text-xl leading-8 text-ivory/85'>A private dental practice for Bridgwater, Taunton, Burnham-on-Sea, Highbridge and surrounding Somerset areas.</p>
          <Link href='/find-us' className='mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-champagne underline decoration-champagne/40 underline-offset-8 transition-colors hover:text-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne'>
            <FiMapPin aria-hidden='true' />
            {practiceLocation.addressLines[3]} · Just off Junction 24
          </Link>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent' aria-hidden='true' />
    </section>
  );
}
