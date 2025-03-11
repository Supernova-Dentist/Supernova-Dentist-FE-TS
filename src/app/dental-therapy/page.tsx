import DentalTherapyContent from '@/components/blocks/DentalTherapy/DentalTherapyContent';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Therapy & Teeth Cleaning in Bridgwater | Supernova Dental',
  description:
    'Discover professional dental therapy, teeth cleaning, and gum disease prevention at Supernova Dental in Bridgwater. Keep your smile healthy with expert dental care and preventive treatments.',
  keywords:
    'dental therapy Bridgwater, teeth cleaning Bridgwater, gum disease prevention Bridgwater, dental hygienist Bridgwater, scale and polish Bridgwater, oral health Bridgwater, restorative dental care Bridgwater, children’s dental care Bridgwater, plaque removal Bridgwater, tooth fillings Bridgwater, gum care Bridgwater, preventive dental treatments Bridgwater, Supernova Dental therapy',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Dental Therapy & Teeth Cleaning in Bridgwater',
  url: 'https://www.supernovadental.co.uk/dental-therapy',
  description:
    'Supernova Dental offers professional dental therapy, teeth cleaning, and gum disease prevention in Bridgwater. Our expert team provides restorative dental care and preventive treatments to keep your smile healthy.',
  keywords:
    'dental therapy Bridgwater, teeth cleaning Bridgwater, gum disease prevention Bridgwater, restorative dental care Bridgwater, oral health Bridgwater, preventive treatments Bridgwater, children’s dental care Bridgwater',
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
    name: 'Dental Therapy & Teeth Cleaning',
    description:
      'Supernova Dental provides professional dental therapy services in Bridgwater, including teeth cleaning, gum disease prevention, and restorative treatments such as fillings and crowns.',
    procedureType: 'Non-invasive',
    areaServed: 'Bridgwater, UK',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function DentalTherapy() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <DentalTherapyContent />
      {/* Sticky EnquiryButton */}
      <EnquiryButton referringPage={'dental-therapy'} />
    </div>
  );
}
