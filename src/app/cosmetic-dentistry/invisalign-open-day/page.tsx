import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import InvisalignContent from '@/components/blocks/InvisalignContent/InvisalignContent';
import { InvisalignOpenDayContent } from '@/components/blocks/InvisalignOpenDayContent/InvisalignOpenDayContent';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Invisalign Open Day – Friday 24th & Saturday 25th April | Bridgwater | Supernova Dental',
  description:
    'Join our Invisalign Open Day on Friday 24th and Saturday 25th April at Supernova Dental. Enjoy exclusive offers, free consultations, and start your journey to a straighter smile with clear aligners in Bridgwater and Taunton.',
  keywords:
    'Invisalign open day Bridgwater, Invisalign open day Taunton, Invisalign event April, clear aligners Bridgwater, clear aligners Taunton, Invisalign offers UK, Invisalign consultation Bridgwater, Invisalign deals Taunton, teeth straightening Somerset, invisible braces Bridgwater, Invisalign dentist Bridgwater Taunton',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental Invisalign Open Day - Bridgwater & Taunton',
  url: 'https://www.supernovadental.co.uk/cosmetic-dentistry/invisalign-open-day',
  description:
    'Join our Invisalign Open Day on Friday 24th and Saturday 25th April at Supernova Dental. Enjoy exclusive offers, free consultations, and begin your journey to straighter teeth with Invisalign clear aligners.',
  keywords:
    'Invisalign open day Bridgwater, Invisalign open day Taunton, Invisalign event April, clear aligners Bridgwater, clear aligners Taunton, Invisalign offers UK, Invisalign dentist Bridgwater Taunton',
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
  serviceProvided: {
    '@type': 'MedicalProcedure',
    name: 'Invisalign Treatment',
    description:
      'We offer Invisalign clear aligners for straightening teeth in Bridgwater and Taunton. Treatment includes a consultation and digital smile preview.',
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
          content={Array.isArray(metadata.keywords) ? metadata.keywords.join(', ') : (metadata.keywords ?? '')}
        />
        <link rel='canonical' href='https://www.supernovadental.co.uk/cosmetic-dentistry/invisalign-open-day' />
      </Head>

      <div className='flex flex-col min-h-[100dvh]'>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <InvisalignOpenDayContent />
        {/* Sticky EnquiryButton */}
      </div>
    </>
  );
}
