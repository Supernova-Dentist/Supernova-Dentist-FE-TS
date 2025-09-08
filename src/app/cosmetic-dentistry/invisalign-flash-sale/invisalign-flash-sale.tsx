import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import InvisalignContent from '@/components/blocks/InvisalignContent/InvisalignContent';
import { InvisalignOpenDayContent } from '@/components/blocks/InvisalignOpenDayContent/InvisalignOpenDayContent';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Invisalign Bridgwater & Taunton | Clear Aligners & Invisible Braces',
  description:
    'Achieve a perfect smile with Invisalign in Bridgwater and Taunton at Supernova Dental. Start your journey to straight teeth with clear aligners. Book a free consultation today!',
  keywords:
    'Invisalign Bridgwater, Invisalign Taunton, clear aligners Bridgwater, clear aligners Taunton, teeth straightening Bridgwater, teeth straightening Taunton, Invisalign treatment Bridgwater, invisible braces Bridgwater, invisible braces Taunton, Invisalign cost Bridgwater, Invisalign cost Taunton, best Invisalign dentist Bridgwater, adult braces Bridgwater, orthodontic treatment Bridgwater, private Invisalign dentist Bridgwater, cosmetic dentistry Bridgwater, Invisalign near Taunton',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Invisalign Bridgwater & Taunton',
  url: 'https://www.supernovadental.co.uk/invisalign',
  description:
    'Achieve a perfect smile with Invisalign in Bridgwater and Taunton at Supernova Dental. Start your journey to straight teeth with clear aligners. Book a free consultation today!',
  keywords:
    'Invisalign Bridgwater, Invisalign Taunton, best Invisalign dentist Bridgwater, clear aligners Bridgwater, clear aligners Taunton, teeth straightening Bridgwater, Invisalign cost Bridgwater, Invisalign cost Taunton, Invisalign dentist near Taunton',
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
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
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
      'We offer Invisalign clear aligners for straightening teeth in Bridgwater and Taunton. Treatment includes a free consultation and digital smile preview.',
    procedureType: 'Non-invasive',
    areaServed: ['Bridgwater, UK', 'Taunton, UK', 'Somerset, UK'],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function InvisalignFlashSale() {
  return (
    <>
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name='description' content={metadata.description ?? ''} />
        <meta
          name='keywords'
          content={Array.isArray(metadata.keywords) ? metadata.keywords.join(', ') : metadata.keywords ?? ''}
        />
        <link rel='canonical' href='https://www.supernovadental.co.uk/invisalign' />
      </Head>

      <div className='flex flex-col min-h-[100dvh]'>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <InvisalignOpenDayContent />
        {/* Sticky EnquiryButton */}
      </div>
    </>
  );
}
