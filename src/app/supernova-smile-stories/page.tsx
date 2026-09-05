import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import { SupernovaSmileStoriesContent } from '@/components/blocks/SupernovaSmileStoriesContent/SupernovaSmileStoriesContent';
import { extendPracticeStructuredData } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patient transformations | Smile Stories | Supernova Dental',
  description:
    'Discover real patient smile transformations at Supernova Dental. Read how our Smile Stories create confident, healthy smiles in Bridgwater, Somerset.',
  keywords:
    'Supernova Smile Stories, smile transformations Bridgwater, smile transformations Taunton, patient journeys Bridgwater, patient journeys Taunton, cosmetic dentistry Bridgwater, cosmetic dentistry Taunton, teeth whitening, dental veneers, Invisalign stories, clear aligners stories, adult braces stories',
  alternates: { canonical: '/supernova-smile-stories' },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Smile Stories',
  url: 'https://www.supernovadental.co.uk/supernova-smile-stories',
  description:
    'Discover real patient smile transformations at Supernova Dental. Read our Supernova Smile Stories and see how we create confident, healthy smiles in Bridgwater and Taunton.',
  keywords:
    'Supernova Smile Stories, smile transformations Bridgwater, cosmetic dentistry Bridgwater, patient journeys Taunton, clear aligners stories',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Supernova Building, Marsh Lane, Huntworth Gate',
    addressLocality: 'Bridgwater',
    addressRegion: 'Somerset',
    postalCode: 'TA6 6LQ',
    addressCountry: 'GB',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44 1278 228665',
    contactType: 'Customer Service',
    email: 'enquiries@supernovadental.co.uk',
    areaServed: ['Bridgwater, UK', 'Taunton, UK', 'Somerset, UK'],
    availableLanguage: ['English', 'Polish', 'Spanish', 'French', 'Romanian', 'Arabic'],
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:15',
      closes: '18:15',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function SupernovaSmileStories() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(extendPracticeStructuredData(structuredData)) }} />
        <SupernovaSmileStoriesContent />
    </div>
  );
}
