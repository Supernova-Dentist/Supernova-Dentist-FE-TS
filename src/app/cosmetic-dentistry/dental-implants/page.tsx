import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import DentalImplantsContent from '@/components/blocks/DentalImplantsContent/DentalImplantsContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Implants in Bridgwater, Somerset | All-on-4 & Full Arch Specialists',
  description:
    'Missing teeth? Supernova Dental in Bridgwater, Somerset offers expert dental implants, including All-on-4 and full arch solutions. Enjoy natural-looking, permanent teeth replacements—book your consultation today.',
  keywords:
    'dental implants Bridgwater Somerset, All-on-4 Bridgwater, full arch implants Somerset, implant dentist Bridgwater, tooth replacement Somerset, permanent teeth replacement Bridgwater, dental implants near Taunton, Supernova Dental implants, missing teeth solution Somerset, All-on-4 Taunton, best dental implants Bridgwater',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Dental Implants Bridgwater',
  url: 'https://www.supernovadental.co.uk/dental-implants',
  description:
    'Missing teeth? Supernova Dental in Bridgwater, Somerset provides high-quality dental implants, including All-on-4 and full arch solutions. Book your consultation today for a permanent solution to missing teeth.',
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
    areaServed: ['Bridgwater, UK', 'Taunton, UK', 'Somerset, UK'],
    availableLanguage: 'English',
  },
  openingHours: ['Mo-Th 08:15-18:15', 'Sa 09:00-13:00'],
  serviceProvided: {
    '@type': 'MedicalProcedure',
    name: 'Dental Implant Treatment - Including All-on-4 & Full Arch',
    description:
      'High-quality dental implant treatment in Bridgwater, Somerset, including All-on-4 and full arch solutions, consultation, 3D scanning, implant placement, and restoration.',
    procedureType: 'Surgical',
    areaServed: ['Bridgwater, UK', 'Taunton, UK', 'Somerset, UK'],
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
      <EnquiryButton referringPage={'cosmetic-dentistry/dental-implants'} />
    </div>
  );
}
