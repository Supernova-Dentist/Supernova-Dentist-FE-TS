import DenturesContent from '@/components/blocks/DenturesContent.tsx/DenturesContent';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dentures in Bridgwater | Supernova Dental',
  description:
    'High-quality dentures at Supernova Dental in Bridgwater, Somerset. Restore your smile with comfortable full and partial dentures tailored to your needs. Book your consultation today.',
  keywords:
    'dentures Bridgwater, dentures Somerset, full dentures Bridgwater, partial dentures Somerset, false teeth Bridgwater, denture clinic Somerset, replacement teeth Bridgwater, private dentist dentures Somerset, Supernova Dental dentures',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Dentures in Bridgwater, Somerset',
  url: 'https://www.supernovadental.co.uk/general-dentistry/dentures',
  image: 'https://www.supernovadental.co.uk/assets/images/outerBuilding.jpg',
  description:
    'Supernova Dental provides high-quality full and partial dentures in Bridgwater, Somerset. Our experienced team creates comfortable, natural-looking dentures to restore your smile, confidence, and ability to eat and speak comfortably. Serving patients from Bridgwater and surrounding areas including Taunton, Highbridge, and Burnham-on-Sea.',
  keywords:
    'dentures Bridgwater, full dentures Somerset, partial dentures Bridgwater, false teeth Somerset, denture clinic Bridgwater, replacement teeth Somerset',
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
  openingHours: ['Mo-Fr 08:15-18:15', 'Sa 09:00-13:00'],
  serviceProvided: {
    '@type': 'MedicalProcedure',
    name: 'Dentures',
    description:
      'Custom-made full and partial dentures at Supernova Dental help replace missing teeth and restore confidence, comfort, and function. We provide personalised denture solutions for patients in Bridgwater and surrounding areas.',
    areaServed: ['Bridgwater, UK', 'Somerset, UK', 'Taunton, UK', 'Highbridge, UK', 'Burnham-on-Sea, UK'],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function Dentures() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <DenturesContent />
      {/* Sticky EnquiryButton */}
      <EnquiryButton referringPage={'general-dentistry/dentures'} />
    </div>
  );
}
