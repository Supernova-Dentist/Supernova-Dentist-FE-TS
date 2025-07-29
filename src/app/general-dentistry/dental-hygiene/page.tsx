import HygieneContent from '@/components/blocks/HygieneContent/HygieneContent';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Hygiene & Teeth Cleaning in Bridgwater | Supernova Dental',
  description:
    'Looking for professional dental hygiene and teeth cleaning in Bridgwater? Keep your smile fresh and healthy with expert dental care at Supernova Dental. Prevent gum disease, remove plaque, and enjoy a brighter smile today.',
  keywords:
    'dental hygiene Bridgwater, teeth cleaning Bridgwater, professional teeth cleaning Bridgwater, private dental hygiene Bridgwater, gum disease prevention Bridgwater, fresh breath treatment Bridgwater, dental hygienist Bridgwater, scale and polish Bridgwater, tartar removal Bridgwater, plaque removal Bridgwater, oral health Bridgwater, healthy gums Bridgwater, bad breath treatment Bridgwater, stain removal teeth Bridgwater, best dental hygienist Bridgwater, teeth whitening Bridgwater, preventative dentistry Bridgwater, Supernova Dental hygiene',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Dental Hygiene & Teeth Cleaning in Bridgwater',
  url: 'https://www.supernovadental.co.uk/dental-hygiene',
  description:
    'Looking for professional dental hygiene and teeth cleaning in Bridgwater? Keep your smile fresh and healthy with expert dental care at Supernova Dental. Prevent gum disease, remove plaque, and enjoy a brighter smile today.',
  keywords:
    'dental hygiene Bridgwater, teeth cleaning Bridgwater, private dental hygiene Bridgwater, gum disease prevention Bridgwater, scale and polish Bridgwater, oral health Bridgwater, best dental hygienist Bridgwater',
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
    name: 'Dental Hygiene & Teeth Cleaning',
    description:
      'Supernova Dental provides professional dental hygiene and teeth cleaning services in Bridgwater. Our expert hygienists remove plaque, prevent gum disease, and ensure fresh breath.',
    procedureType: 'Non-invasive',
    areaServed: ['Bridgwater, UK', 'Taunton, UK', 'Somerset, UK'],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function DentalHygiene() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HygieneContent />
      {/* Sticky EnquiryButton */}
      <EnquiryButton referringPage={'general-dentistry/dental-hygiene'} />
    </div>
  );
}
