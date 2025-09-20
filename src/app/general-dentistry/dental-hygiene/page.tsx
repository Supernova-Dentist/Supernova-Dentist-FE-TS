import HygieneContent from '@/components/blocks/HygieneContent/HygieneContent';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Hygiene & Teeth Cleaning in Bridgwater, Somerset | Supernova Dental',
  description:
    'Looking for professional dental hygiene and teeth cleaning in Bridgwater, Somerset? Keep your smile fresh and healthy with expert dental care at Supernova Dental. Serving patients from Bridgwater and surrounding areas including Taunton, Highbridge, and Burnham-on-Sea.',
  keywords:
    'dental hygiene Bridgwater, dental hygiene Somerset, teeth cleaning Bridgwater, teeth cleaning Somerset, professional teeth cleaning Bridgwater, private dental hygiene Bridgwater, gum disease prevention Bridgwater, plaque removal Bridgwater, tartar removal Bridgwater, oral health Somerset, fresh breath treatment Bridgwater, scale and polish Bridgwater, healthy gums Bridgwater, dental hygienist Bridgwater, stain removal teeth Bridgwater, preventative dentistry Bridgwater, Supernova Dental hygiene',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Dental Hygiene & Teeth Cleaning in Bridgwater, Somerset',
  url: 'https://www.supernovadental.co.uk/dental-hygiene',
  description:
    'Supernova Dental provides professional dental hygiene and teeth cleaning services in Bridgwater, Somerset. Our expert hygienists remove plaque, prevent gum disease, and ensure fresh breath. We serve patients from Bridgwater and surrounding areas including Taunton, Highbridge, and Burnham-on-Sea.',
  keywords:
    'dental hygiene Bridgwater, dental hygiene Somerset, teeth cleaning Bridgwater, teeth cleaning Somerset, private dental hygiene Bridgwater, gum disease prevention Bridgwater, plaque removal Bridgwater, tartar removal Bridgwater, oral health Somerset, dental hygienist Bridgwater',
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
    availableLanguage: 'English',
  },
  openingHours: ['Mo-Th 08:15-18:15', 'Sa 09:00-13:00'],
  serviceProvided: {
    '@type': 'MedicalProcedure',
    name: 'Dental Hygiene & Teeth Cleaning',
    description:
      'Supernova Dental offers professional dental hygiene and teeth cleaning in Bridgwater, Somerset. Our expert hygienists remove plaque, prevent gum disease, and ensure fresh breath. We also serve patients from surrounding areas including Taunton, Highbridge, and Burnham-on-Sea.',
    procedureType: 'Non-invasive',
    areaServed: ['Bridgwater, UK', 'Somerset, UK', 'Taunton, UK', 'Highbridge, UK', 'Burnham-on-Sea, UK'],
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
