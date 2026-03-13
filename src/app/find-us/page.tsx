import dynamic from 'next/dynamic';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import FindUsInfoSection from './utils/FindUsInfoSection';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';

const GoogleMap = dynamic(async () => await import('@/components/blocks/GoogleMap/GoogleMap'), {
  ssr: false,
});

export const metadata = {
  title: 'Find a Private Dentist in Bridgwater | Supernova Dental',
  description:
    'Plan your visit to Supernova Dental in Bridgwater. View our address, contact details, opening hours, parking info and find us on the map. New patients welcome.',
  keywords: [
    'dentist Bridgwater',
    'Supernova Dental',
    'dental practice Somerset',
    'private dentist Bridgwater',
    'dentist near me Bridgwater',
    'dental clinic Bridgwater',
    'opening hours dentist Bridgwater',
    'parking information dentist Bridgwater',
    'new patients dentist Bridgwater',
  ],
  author: 'Supernova Dental',
  openGraph: {
    title: 'Find Supernova Dental | Dentist Bridgwater, Somerset',
    description:
      'Looking for a reliable dentist in Bridgwater? Find Supernova Dental on the map, check opening hours, contact info, and parking. Taking new patients.',
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
  description:
    'Supernova Dental in Bridgwater, Somerset provides private dental care including general, cosmetic, and emergency dentistry. Taking new patients.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Supernova Building, Marsh Lane, Huntworth Gate',
    addressLocality: 'Bridgwater',
    addressRegion: 'Somerset',
    postalCode: 'TA6 6LQ',
    addressCountry: 'GB',
  },
  telephone: '+44 1278 228665',
  openingHours: ['Mo-Th 08:15-18:15', 'Sa 09:00-13:00'],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.135,
    longitude: -3.004, // approximate
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
      urlTemplate:
        'https://www.google.com/maps/dir/?api=1&destination=Supernova+Building,+Marsh+Lane,+Huntworth+Gate,+Bridgwater,+TA6+6LQ',
    },
    name: 'Get Directions to Supernova Dental',
  },
};

export default function FindUs() {
  return (
    <div id='location' className='flex flex-col align-middle justify-center bg-gradient-to-b from-white to-white'>
      <div className='container mx-auto py-24 px-8'>
        <HighlightCard
          logoSrc='/favicon.ico'
          title='Find Supernova Dental'
          description='Locate Supernova Dental on the map, get directions, view reserved parking spots, and check our contact details and opening hours. We are welcoming new patients.'
        />

        <div className='p-4 md:px-6 pb-10 flex justify-start mx-auto max-w-3xl'>
          <BreadCrumb />
        </div>

        <div className='my-6'>
          <GoogleMap />
        </div>
        <FindUsInfoSection />

        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </div>
    </div>
  );
}
