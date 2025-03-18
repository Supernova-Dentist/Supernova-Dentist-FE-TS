import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import InvisalignContent from '@/components/blocks/InvisalignContent/InvisalignContent';
import { InvisalignOpenDayContent } from '@/components/blocks/InvisalignOpenDayContent/InvisalignOpenDayContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invisalign Bridgwater',
  description:
    'Achieve a perfect smile with Invisalign in Bridgwater at Supernova Dental. Start your journey to straight teeth with clear aligners. Book a free consultation today!',
  keywords:
    'Invisalign Bridgwater, clear aligners Bridgwater, teeth straightening Bridgwater, Invisalign treatment Bridgwater, invisible braces Bridgwater, Invisalign cost Bridgwater, best Invisalign dentist Bridgwater, adult braces Bridgwater, orthodontic treatment Bridgwater, Invisalign consultation Bridgwater, Supernova Dental Invisalign, private Invisalign dentist Bridgwater, cosmetic dentistry Bridgwater',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Invisalign Bridgwater',
  url: 'https://www.supernovadental.co.uk/invisalign',
  description:
    'Achieve a perfect smile with Invisalign in Bridgwater at Supernova Dental. Start your journey to straight teeth with clear aligners. Book a free consultation today!',
  keywords:
    'Invisalign Bridgwater, best Invisalign dentist Bridgwater, clear aligners Bridgwater, teeth straightening Bridgwater, Invisalign cost Bridgwater',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Supernova Building, Marsh Lane, Huntworth Gate',
    addressLocality: 'Bridgwater',
    postalCode: 'TA6 6LQ',
    addressCountry: 'GB',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44 1278 228665',
    contactType: 'Customer Service',
    email: 'enquiries@supernovadental.co.uk',
    areaServed: 'GB',
    availableLanguage: 'English',
  },
  openingHours: ['Mo-Th 08:15-18:15', 'Sa 09:00-13:00'],
  serviceProvided: {
    '@type': 'MedicalProcedure',
    name: 'Invisalign Treatment',
    description:
      'We offer Invisalign clear aligners for straightening teeth in Bridgwater. Treatment includes a free consultation and digital smile preview.',
    procedureType: 'Non-invasive',
    areaServed: 'Bridgwater, UK',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function Invisalign() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <InvisalignOpenDayContent />
    </div>
  );
}
