import { OurJourneyContent } from '@/components/blocks/OurJourneyContent/OurJourneyContent';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Our Journey | Supernova Dental',
  description:
    'Follow the journey of Supernova Dental – from our Rising Star nomination at the MiSmile Awards to future milestones, achievements, and community projects.',
  keywords:
    'Supernova Dental journey, dental awards Somerset, MiSmile Rising Star, dental achievements Bridgwater, dental awards Taunton, Supernova Dental story',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental',
  url: 'https://www.supernovadental.co.uk/our-journey',
  description:
    'Follow the journey of Supernova Dental – from our Rising Star nomination at the MiSmile Awards to future milestones, achievements, and community projects.',
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
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function OurJourneyPage() {
  return (
    <>
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name='description' content={metadata.description ?? ''} />
        <meta
          name='keywords'
          content={Array.isArray(metadata.keywords) ? metadata.keywords.join(', ') : metadata.keywords ?? ''}
        />
        <link rel='canonical' href='https://www.supernovadental.co.uk/our-journey' />
      </Head>

      <div className='flex flex-col min-h-[100dvh]'>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <OurJourneyContent />
      </div>
    </>
  );
}
