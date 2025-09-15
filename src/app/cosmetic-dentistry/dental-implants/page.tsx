import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import DentalImplantsContent from '@/components/blocks/DentalImplantsContent/DentalImplantsContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Implants Bridgwater | All-on-4 & Full Arch Implants Somerset',
  description:
    'Restore your smile with dental implants at Supernova Dental in Bridgwater, Somerset, including All-on-4 and full arch solutions. Book your dental implant consultation today for a permanent solution to missing teeth.',
  keywords:
    'Dental implants Bridgwater, All-on-4 implants Bridgwater, full arch dental implants Bridgwater, dental implants Somerset, All-on-4 implants Somerset, full arch implants Somerset, missing teeth solution, implant dentist Bridgwater, tooth implant Bridgwater, best implant dentist Bridgwater, permanent teeth replacement Bridgwater, implant consultation Bridgwater, Supernova Dental implants, cosmetic dentistry Bridgwater, dental implants near Taunton, tooth implant Taunton, All-on-4 Taunton, full arch implants Taunton',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Dental Implants Bridgwater',
  url: 'https://www.supernovadental.co.uk/dental-implants',
  description:
    'Restore your smile with dental implants at Supernova Dental in Bridgwater, Somerset, including All-on-4 and full arch solutions. Book your consultation today for a permanent solution to missing teeth.',
  keywords:
    'Dental implants Bridgwater, All-on-4 implants Bridgwater, full arch dental implants Bridgwater, dental implants Somerset, All-on-4 implants Somerset, full arch implants Somerset, implant dentist Bridgwater, permanent teeth replacement, missing tooth solution Bridgwater, dental implants Taunton, implant dentist near Taunton, All-on-4 Taunton, full arch implants Taunton',
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
      'We provide high-quality dental implant treatment in Bridgwater, Somerset, including All-on-4 and full arch solutions, consultation, 3D scanning, implant placement, and restoration.',
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
      {/* Sticky EnquiryButton */}
      <EnquiryButton referringPage={'cosmetic-dentistry/dental-implants'} />
    </div>
  );
}
