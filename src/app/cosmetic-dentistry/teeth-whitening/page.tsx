import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import TeethWhiteningContent from '@/components/blocks/TeethWhiteningContent/TeethWhiteningContent';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Teeth Whitening Bridgwater, Somerset | Professional Whitening Treatments',
  description:
    'Brighten your smile with professional teeth whitening in Bridgwater, Somerset at Supernova Dental. Safe, effective, and long-lasting whitening solutions. We welcome patients from Taunton, Highbridge, Burnham-on-Sea, and nearby areas. Book your whitening consultation today!',
  keywords:
    'teeth whitening Bridgwater, teeth whitening Somerset, professional whitening Bridgwater, cosmetic dentist Bridgwater, whiter teeth Somerset, stain removal Bridgwater, white dental beauty whitening Bridgwater, private dentist Somerset, teeth bleaching Bridgwater, whitening near Taunton, teeth whitening Taunton, teeth whitening Highbridge, teeth whitening Burnham-on-Sea',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Teeth Whitening Bridgwater, Somerset',
  url: 'https://www.supernovadental.co.uk/cosmetic-dentistry/teeth-whitening',
  description:
    'Supernova Dental offers professional teeth whitening in Bridgwater, Somerset. Our safe and effective treatments help brighten your smile with lasting results. Serving patients from Taunton, Highbridge, Burnham-on-Sea, and surrounding areas.',
  keywords:
    'teeth whitening Bridgwater, teeth whitening Somerset, professional whitening Bridgwater, cosmetic dentist Bridgwater, whiter teeth Somerset, stain removal Bridgwater, whitening Bridgwater, white dental beauty whitening Bridgwater, private dentist Somerset, teeth bleaching Bridgwater, whitening near Taunton, teeth whitening Taunton, teeth whitening Highbridge, teeth whitening Burnham-on-Sea',
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
    name: 'Teeth Whitening Treatment',
    description:
      'Supernova Dental provides safe, professional teeth whitening in Bridgwater, Somerset. Treatments include White Dental Beauty, delivering outstanding results for brighter, whiter smiles. Serving patients from Taunton, Highbridge, Burnham-on-Sea, and surrounding areas.',
    procedureType: 'Non-invasive',
    areaServed: ['Bridgwater, UK', 'Somerset, UK', 'Taunton, UK', 'Highbridge, UK', 'Burnham-on-Sea, UK'],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '76',
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.supernovadental.co.uk/cosmetic-dentistry/teeth-whitening',
    },
    actionStatus: 'PotentialActionStatus',
    name: 'Book a Teeth Whitening Consultation',
  },
  priceRange: 'From £299, depending on system used',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function TeethWhitening() {
  return (
    <>
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name='description' content={metadata.description ?? ''} />
        <meta
          name='keywords'
          content={Array.isArray(metadata.keywords) ? metadata.keywords.join(', ') : (metadata.keywords ?? '')}
        />
        <link rel='canonical' href='https://www.supernovadental.co.uk/cosmetic-dentistry/teeth-whitening' />
      </Head>

      <div className='flex flex-col min-h-[100dvh]'>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <TeethWhiteningContent />
        {/* Sticky EnquiryButton */}
        <EnquiryButton referringPage={'cosmetic-dentistry/teeth-whitening'} />
      </div>
    </>
  );
}
