import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import DentalImplantsContent from '@/components/blocks/DentalImplantsContent/DentalImplantsContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Implants Bridgwater',
  description:
    'Restore your smile with dental implants at Supernova Dental in Bridgwater. Book your free implant consultation today for a permanent solution to missing teeth.',
  keywords:
    'Dental implants Bridgwater, missing teeth solution, implant dentist Bridgwater, tooth implant Bridgwater, All-on-4 implants Bridgwater, best implant dentist Bridgwater, permanent teeth replacement Bridgwater, implant consultation Bridgwater, Supernova Dental implants, cosmetic dentistry Bridgwater',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Dental Implants Bridgwater',
  url: 'https://www.supernovadental.co.uk/dental-implants',
  description:
    'Restore your smile with dental implants at Supernova Dental in Bridgwater. Book your free implant consultation today for a permanent solution to missing teeth.',
  keywords:
    'Dental implants Bridgwater, implant dentist Bridgwater, permanent teeth replacement, missing tooth solution Bridgwater',
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
    name: 'Dental Implant Treatment',
    description:
      'We provide high-quality dental implant treatment in Bridgwater, including consultation, 3D scanning, implant placement, and restoration.',
    procedureType: 'Surgical',
    areaServed: 'Bridgwater, UK',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function DentalImplants() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <DentalImplantsContent />
      {/* Sticky EnquiryButton */}
      <EnquiryButton referringPage={'dental-implants'} />
    </div>
  );
}
