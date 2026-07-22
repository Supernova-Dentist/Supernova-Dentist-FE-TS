import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import CompositeBondingContent from '@/components/blocks/CompositeBondingContent/CompositeBondingContent';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Composite Bonding at Supernova Dental',
  description:
    'Composite bonding in Bridgwater, Somerset at Supernova Dental. Repair chipped teeth, close gaps, and improve your smile with natural-looking results. Book your consultation today.',
  keywords:
    'composite bonding Bridgwater, cosmetic bonding Somerset, smile makeover Bridgwater, repair chipped teeth Bridgwater, close gaps teeth Somerset, natural-looking smile Bridgwater, dental bonding Bridgwater, cosmetic dentist Bridgwater, composite bonding Taunton, cosmetic dentistry Somerset',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Composite Bonding Bridgwater, Somerset',
  url: 'https://www.supernovadental.co.uk/cosmetic-dentistry/composite-bonding',
  description:
    'Supernova Dental offers professional composite bonding in Bridgwater, Somerset. Repair chips, close gaps, and enhance the appearance of your teeth with natural-looking results. Serving patients from Taunton, Highbridge, Burnham-on-Sea, and surrounding areas.',
  keywords:
    'composite bonding Bridgwater, cosmetic bonding Somerset, smile makeover Bridgwater, repair chipped teeth Bridgwater, close gaps teeth Somerset, natural-looking smile Bridgwater, dental bonding Bridgwater, cosmetic dentist Bridgwater, composite bonding Taunton, cosmetic dentistry Somerset',
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
    areaServed: ['Bridgwater, UK', 'Somerset, UK', 'Taunton, UK', 'Highbridge, UK', 'Burnham-on-Sea, UK'],
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
  serviceProvided: {
    '@type': 'MedicalProcedure',
    name: 'Composite Bonding',
    description:
      'Supernova Dental provides professional composite bonding in Bridgwater, Somerset. Treatments repair chipped teeth, close small gaps, and enhance smile appearance with natural-looking results. Serving patients from Taunton, Highbridge, Burnham-on-Sea, and surrounding areas.',
    procedureType: 'Minimally invasive',
    areaServed: ['Bridgwater, UK', 'Somerset, UK', 'Taunton, UK', 'Highbridge, UK', 'Burnham-on-Sea, UK'],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '169',
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.supernovadental.co.uk/cosmetic-dentistry/composite-bonding',
    },
    actionStatus: 'PotentialActionStatus',
    name: 'Book a Composite Bonding Consultation',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function CompositeBonding() {
  return (
    <>
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name='description' content={metadata.description ?? ''} />
        <meta
          name='keywords'
          content={Array.isArray(metadata.keywords) ? metadata.keywords.join(', ') : (metadata.keywords ?? '')}
        />
        <link rel='canonical' href='https://www.supernovadental.co.uk/cosmetic-dentistry/composite-bonding' />
      </Head>

      <div className='flex flex-col min-h-[100dvh]'>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <CompositeBondingContent />
        {/* Sticky EnquiryButton */}
        <EnquiryButton referringPage={'cosmetic-dentistry/composite-bonding'} />
      </div>
    </>
  );
}
