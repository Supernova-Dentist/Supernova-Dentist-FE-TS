import DentalTherapistContent from '@/components/blocks/DentalTherapist/DentalTherapistContent';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Therapist Services in Bridgwater | Supernova Dental',
  description:
    'Explore professional dental therapist services at Supernova Dental in Bridgwater. Our expert dental therapist provide high-quality care, including preventive and restorative treatments.',
  keywords:
    'dental therapist Bridgwater, preventive dental care Bridgwater, restorative dental care Bridgwater, children’s dental care Bridgwater, plaque removal Bridgwater, tooth fillings Bridgwater, gum care Bridgwater, Supernova Dental therapist',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Dental Therapist Services in Bridgwater',
  url: 'https://www.supernovadental.co.uk/dental-therapist',
  description:
    'Supernova Dental offers expert dental therapist services in Bridgwater, providing preventive and restorative treatments to maintain optimal oral health.',
  keywords:
    'dental therapist Bridgwater, preventive dental care Bridgwater, restorative dental care Bridgwater, oral health Bridgwater, children’s dental care Bridgwater, gum care Bridgwater',
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
    name: 'Dental Therapist Services',
    description:
      'Supernova Dental provides professional dental therapist services in Bridgwater, including preventive care, restorative treatments such as fillings and crowns, and oral health maintenance.',
    procedureType: 'Non-invasive',
    areaServed: 'Bridgwater, UK',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function DentalTherapist() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <DentalTherapistContent />
      {/* Sticky EnquiryButton */}
      <EnquiryButton referringPage={'dental-therapist'} />
    </div>
  );
}
