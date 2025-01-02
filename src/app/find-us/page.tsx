import dynamic from 'next/dynamic';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import FindUsInfoSection from './utils/FindUsInfoSection';

const GoogleMap = dynamic(async () => await import('@/components/blocks/GoogleMap/GoogleMap'), {
  ssr: false,
});

export const metadata = {
  title: 'Find Us | Supernova Dental - Bridgwater, Somerset',
  description:
    'Discover Supernova Dental in Bridgwater, Somerset. View our contact details, opening hours, address and parking information. Locate us on the map and plan your visit easily.',
  keywords: [
    'Supernova Dental',
    'Bridgwater dentist',
    'dental practice Somerset',
    'dentist near me',
    'contact details',
    'opening hours',
    'parking information',
  ],
  author: 'Supernova Dental',
  openGraph: {
    title: 'Find Us | Supernova Dental - Bridgwater, Somerset',
    description:
      'Looking for a reliable dentist in Bridgwater? Find Supernova Dental on the map, view parking spots, opening hours and contact information.',
    url: 'https://www.supernovadental.co.uk//find-us', 
    siteName: 'Supernova Dental',
    type: 'website',
  },
};

export default function FindUs() {
  return (
    <div id='location' className='flex flex-col align-middle justify-center bg-gradient-to-b from-white to-white'>
      <div className='container mx-auto py-24 px-8'>
        <HighlightCard
          logoSrc='/assets/images/logo.png'
          title='Find Us - Supernova Dental'
          description='Locate Supernova Dental on the map, get directions, view reserved parking spots and check our contact details and opening hours.'
        />

        <div className='my-6'>
          <GoogleMap />
        </div>
        <FindUsInfoSection />
      </div>
    </div>
  );
}
