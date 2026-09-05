import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import MapFallbackCard from '@/components/blocks/MapboxMap/MapFallbackCard';
import { practiceLocation } from '@/lib/practiceLocation';
import { extendPracticeStructuredData } from '@/lib/site';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import FindUsInfoSection from './utils/FindUsInfoSection';

const MapboxMap = dynamic(async () => await import('@/components/blocks/MapboxMap/MapboxMap'), {
  ssr: false,
  loading: () => <div className='min-h-[390px] bg-obsidian sm:min-h-[480px] lg:min-h-[610px]' aria-hidden='true' />,
});

export const metadata: Metadata = {
  title: 'Find a Private Dentist in Bridgwater | Supernova Dental',
  description:
    'Plan your visit to Supernova Dental in Bridgwater. View our address, contact details, opening hours, parking information and directions from Junction 24.',
  alternates: {
    canonical: 'https://www.supernovadental.co.uk/find-us',
  },
  openGraph: {
    title: 'Find Supernova Dental | Dentist in Bridgwater, Somerset',
    description:
      'Find Supernova Dental at Huntworth Gate, view opening hours and parking information, and plan your route from Junction 24.',
    url: 'https://www.supernovadental.co.uk/find-us',
    siteName: 'Supernova Dental',
    type: 'website',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental',
  url: 'https://www.supernovadental.co.uk/find-us',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Supernova Building, Marsh Lane, Huntworth Gate',
    addressLocality: 'Bridgwater',
    addressRegion: 'Somerset',
    postalCode: 'TA6 6LQ',
    addressCountry: 'GB',
  },
  telephone: '+44 1278 228665',
  openingHours: ['Mo-Fr 08:15-18:15', 'Sa 09:00-13:00'],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: practiceLocation.coordinates.latitude,
    longitude: practiceLocation.coordinates.longitude,
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
  potentialAction: {
    '@type': 'GetDirectionsAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: practiceLocation.directionsUrl,
    },
    name: 'Get directions to Supernova Dental',
  },
};

const nearbyLandmarkIds = new Set(['junction-24', 'huntworth-gate', 'bridgwater', 'patient-parking']);

export default function FindUs() {
  const nearbyLandmarks = practiceLocation.map.landmarks.filter((landmark) => nearbyLandmarkIds.has(landmark.id));

  return (
    <main id='location' className='min-w-0 overflow-x-clip bg-porcelain text-obsidian'>
      <section className='relative isolate overflow-hidden bg-obsidian text-ivory'>
        <div aria-hidden='true' className='luxury-hero-glow absolute inset-0 -z-10' />
        <div className='mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 md:pb-24 lg:px-8'>
          <BreadCrumb tone='dark' />
          <div className='max-w-4xl pt-14 md:pt-20'>
            <p className='mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-champagne sm:text-sm'>Visit the practice</p>
            <div aria-hidden='true' className='mb-7 flex items-center gap-3'>
              <span className='h-px w-12 bg-champagne' />
              <span className='size-1.5 rotate-45 bg-champagne' />
            </div>
            <h1 className='max-w-3xl text-balance text-4xl leading-[1.03] sm:text-5xl md:text-6xl lg:text-7xl'>Find Supernova Dental</h1>
            <p className='mt-7 max-w-3xl text-pretty text-base leading-8 text-ivory/80 sm:text-lg'>
              Our modern private dental practice is easy to reach from Bridgwater, Taunton, Burnham-on-Sea, Highbridge and surrounding Somerset areas.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby='location-map-heading' className='mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8'>
        <div className='mb-10 max-w-3xl'>
          <p className='mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>Location</p>
          <h2 id='location-map-heading' className='text-3xl leading-tight sm:text-4xl'>Find us just off Junction 24</h2>
          <p className='mt-4 max-w-2xl leading-7 text-taupe'>
            Use the interactive map to see the practice, local access, reserved parking and the nearby M5 connection.
          </p>
        </div>

        <div className='grid min-w-0 gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start'>
          <aside className='min-w-0 rounded-[1.5rem] border border-stone bg-ivory p-6 sm:p-8' aria-label='Practice location summary'>
            <h3 className='text-2xl'>Supernova Dental</h3>
            <address className='mt-5 space-y-1 not-italic leading-7 text-taupe'>
              {practiceLocation.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address>
            <p className='mt-5 text-sm font-semibold text-bronze-ink'>Just off Junction 24 of the M5</p>

            <div className='mt-6 flex flex-col items-start gap-3 text-sm text-taupe'>
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
              <a className='break-all underline decoration-champagne/70 underline-offset-4' href={`mailto:${practiceLocation.email}`}>
                {practiceLocation.email}
              </a>
            </div>

            <Link
              href={practiceLocation.directionsUrl}
              target='_blank'
              rel='noreferrer'
              className='mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-champagne bg-champagne px-5 py-3 text-sm font-semibold text-obsidian transition-colors hover:bg-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 sm:w-auto'
            >
              Get directions
            </Link>

            <div className='mt-9 border-t border-stone pt-7'>
              <h3 className='text-xl'>Nearby</h3>
              <ul className='mt-4 space-y-4'>
                {nearbyLandmarks.map((landmark) => (
                  <li key={landmark.id} className='border-l border-champagne/70 pl-4'>
                    <p className='text-sm font-semibold text-obsidian'>{landmark.name}</p>
                    <p className='mt-1 text-sm leading-6 text-taupe'>{landmark.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className='min-w-0 overflow-hidden rounded-[1.5rem] border border-stone bg-obsidian shadow-[0_24px_70px_rgba(11,18,24,0.14)]'>
            <MapboxMap />
            <noscript>
              <MapFallbackCard />
            </noscript>
          </div>
        </div>
      </section>

      <FindUsInfoSection />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(extendPracticeStructuredData(structuredData)) }} />
    </main>
  );
}
