import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import { SupernovaSmileStoriesContent } from '@/components/blocks/SupernovaSmileStoriesContent/SupernovaSmileStoriesContent';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Supernova Smile Stories | Transformations & Patient Journeys',
  description:
    'Discover real patient smile transformations at Supernova Dental. Read our Supernova Smile Stories and see how we create confident, healthy smiles in Bridgwater and Taunton.',
  keywords:
    'Supernova Smile Stories, smile transformations Bridgwater, smile transformations Taunton, patient journeys Bridgwater, patient journeys Taunton, cosmetic dentistry Bridgwater, cosmetic dentistry Taunton, teeth whitening, dental veneers, Invisalign stories, clear aligners stories, adult braces stories',
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
    availableLanguage: 'English',
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
  serviceProvided: {
    '@type': 'MedicalProcedure',
    name: 'Cosmetic Dentistry & Smile Transformations',
    description:
      'We provide cosmetic dentistry treatments, teeth whitening, veneers, Invisalign, and other procedures to help patients achieve their perfect smiles.',
    procedureType: 'Non-invasive',
    areaServed: ['Bridgwater, UK', 'Taunton, UK', 'Somerset, UK'],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function SupernovaSmileStories() {
  return (
    <>
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name='description' content={metadata.description ?? ''} />
        <meta
          name='keywords'
          content={Array.isArray(metadata.keywords) ? metadata.keywords.join(', ') : (metadata.keywords ?? '')}
        />
        <link rel='canonical' href='https://www.supernovadental.co.uk/supernova-smile-stories' />
      </Head>

      <div className='flex flex-col min-h-[100dvh]'>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <SupernovaSmileStoriesContent />
      </div>
    </>
  );
}
