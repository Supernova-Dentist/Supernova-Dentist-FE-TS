import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import InvisalignContent from '@/components/blocks/InvisalignContent/InvisalignContent';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Invisalign | Clear Aligners & Invisible Braces | Supernova Dental',
  description:
    'Invisalign in Bridgwater, Somerset. Straighten your teeth with clear aligners at Supernova Dental. Book your free Invisalign consultation today.',
  keywords:
    'Invisalign Bridgwater, Invisalign Somerset, clear aligners Bridgwater, invisible braces Bridgwater, Invisalign cost Bridgwater, teeth straightening Bridgwater, adult braces Somerset, orthodontic treatment Bridgwater, private Invisalign dentist Bridgwater, Invisalign near Taunton, Invisalign Taunton, invisible braces Taunton, clear aligners Taunton',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Invisalign Bridgwater, Somerset',
  url: 'https://www.supernovadental.co.uk/cosmetic-dentistry/invisalign',
  image: 'https://www.supernovadental.co.uk/assets/images/Invisalign_Group.jpg', // team picture
  description:
    'Supernova Dental provides Invisalign clear aligners in Bridgwater, Somerset. We help patients achieve straight teeth with invisible braces and clear aligners. Serving patients from Taunton, Highbridge, Burnham-on-Sea, and surrounding areas. Book a free consultation today!',
  keywords:
    'Invisalign Bridgwater, Invisalign Somerset, clear aligners Bridgwater, invisible braces Bridgwater, Invisalign cost Bridgwater, teeth straightening Bridgwater, adult braces Somerset, orthodontic treatment Bridgwater, private Invisalign dentist Bridgwater, Invisalign near Taunton, Invisalign Taunton, invisible braces Taunton, clear aligners Taunton',
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
    name: 'Invisalign Treatment',
    description:
      'Supernova Dental offers Invisalign clear aligners and invisible braces in Bridgwater, Somerset. Treatment includes a free consultation, digital smile preview, and personalized orthodontic planning. We serve patients from Taunton, Highbridge, Burnham-on-Sea, and surrounding areas.',
    procedureType: 'Non-invasive',
    areaServed: ['Bridgwater, UK', 'Somerset, UK', 'Taunton, UK', 'Highbridge, UK', 'Burnham-on-Sea, UK'],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '124',
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.supernovadental.co.uk/cosmetic-dentistry/invisalign',
    },
    actionStatus: 'PotentialActionStatus',
    name: 'Book a Free Invisalign Consultation',
  },
  priceRange: 'From £2500, average price £3999',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function Invisalign() {
  return (
    <>
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name='description' content={metadata.description ?? ''} />
        <meta
          name='keywords'
          content={Array.isArray(metadata.keywords) ? metadata.keywords.join(', ') : (metadata.keywords ?? '')}
        />
        <link rel='canonical' href='https://www.supernovadental.co.uk/invisalign' />
      </Head>

      <div className='flex flex-col min-h-[100dvh]'>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <InvisalignContent />
        {/* Sticky EnquiryButton */}
        <EnquiryButton referringPage={'cosmetic-dentistry/invisalign'} />
      </div>
    </>
  );
}
