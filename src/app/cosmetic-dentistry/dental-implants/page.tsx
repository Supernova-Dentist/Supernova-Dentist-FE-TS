import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import DentalImplantsContent from '@/components/blocks/DentalImplantsContent/DentalImplantsContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Implants | All-on-4 & Full Arch | Supernova Dental',
  description:
    'Replace missing teeth with dental implants at Supernova Dental in Bridgwater. We offer All-on-4 and full arch solutions with natural-looking results. Book today!',
  keywords:
    'dental implants Bridgwater Somerset, All-on-4 Bridgwater, full arch implants Somerset, implant dentist Bridgwater, tooth replacement Somerset, long-term teeth replacement Bridgwater, dental implants near Taunton, Supernova Dental implants, missing teeth solution Somerset, All-on-4 Taunton, best dental implants Bridgwater',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Dental Implants in Bridgwater, Somerset | All-on-4 & Full Arch Specialists',
  url: 'https://www.supernovadental.co.uk/cosmetic-dentistry/dental-implants',
  image: 'https://www.supernovadental.co.uk/assets/images/outerBuilding.jpg',
  description:
    'Missing teeth? Supernova Dental in Bridgwater, Somerset provides high-quality dental implants, including All-on-4 and full arch solutions. Book your consultation today for long-term teeth replacements.',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '76',
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.supernovadental.co.uk/cosmetic-dentistry/dental-implants',
    },
    actionStatus: 'PotentialActionStatus',
    name: 'Book a Dental Implant Consultation',
  },
  priceRange: 'From £1400 for a dental implant, £1350 for an implant crown',
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
