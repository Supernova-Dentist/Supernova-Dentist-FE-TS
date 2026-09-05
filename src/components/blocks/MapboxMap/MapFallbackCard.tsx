import { practiceLocation } from '@/lib/practiceLocation';
import Link from 'next/link';

export default function MapFallbackCard() {
  return (
    <div
      className='flex min-h-[390px] items-center justify-center bg-obsidian px-6 py-10 text-ivory sm:min-h-[480px] lg:min-h-[610px]'
      role='region'
      aria-label='Supernova Dental location details'
    >
      <div className='max-w-lg text-center'>
        <p className='text-xs font-semibold uppercase tracking-[0.22em] text-champagne'>Location details</p>
        <h3 className='mt-4 text-3xl leading-tight'>Supernova Dental</h3>
        <p className='mt-4 text-sm leading-6 text-ivory/65'>The interactive map is unavailable, but you can still plan your visit.</p>
        <address className='mt-5 not-italic leading-7 text-ivory/80'>{practiceLocation.address}</address>
        <p className='mt-4 text-sm font-semibold text-champagne'>Just off Junction 24 of the M5</p>
        <p className='mt-2 text-sm leading-6 text-ivory/70'>Patient parking is available directly opposite the building.</p>
        <div className='mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-ivory/85'>
          <a className='underline decoration-champagne/70 underline-offset-4' href={practiceLocation.phoneHref}>
            Call {practiceLocation.phone}
          </a>
          <a
            className='underline decoration-champagne/70 underline-offset-4'
            href={practiceLocation.whatsappHref}
            target='_blank'
            rel='noreferrer'
          >
            WhatsApp {practiceLocation.whatsapp}
          </a>
          <a className='underline decoration-champagne/70 underline-offset-4' href={`mailto:${practiceLocation.email}`}>
            Email the practice
          </a>
        </div>
        <div className='mt-7 flex flex-wrap justify-center gap-3'>
          <Link
            href={practiceLocation.directionsUrl}
            target='_blank'
            rel='noreferrer'
            className='inline-flex min-h-11 items-center justify-center rounded-full border border-champagne bg-champagne px-6 py-3 text-sm font-semibold text-obsidian transition-colors hover:bg-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian'
          >
            Get directions
          </Link>
        </div>
        <div className='mt-4 border-t border-white/10 pt-3'>
          <Link
            href={practiceLocation.stationWalkingDirectionsUrl}
            target='_blank'
            rel='noreferrer'
            className='inline-flex min-h-11 items-center rounded-sm py-2 text-sm leading-6 text-ivory/75 underline decoration-champagne/50 underline-offset-4 hover:text-champagne focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne'
          >
            <span>Walk from Bridgwater station — approximately 1.5 miles <span aria-hidden='true'>↗</span><span className='sr-only'> (opens Google Maps in a new tab)</span></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
