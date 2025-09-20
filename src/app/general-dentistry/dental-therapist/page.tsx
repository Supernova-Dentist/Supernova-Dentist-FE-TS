import DentalTherapistContent from '@/components/blocks/DentalTherapist/DentalTherapistContent';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Therapist Services in Bridgwater, Somerset | Supernova Dental',
  description:
    'Explore professional dental therapist services at Supernova Dental in Bridgwater, Somerset. Our expert dental therapists provide high-quality preventive and restorative care. Serving patients from Bridgwater and surrounding areas including Taunton, Highbridge, and Burnham-on-Sea.',
  keywords:
    'dental therapist Bridgwater, dental therapist Somerset, preventive dental care Bridgwater, restorative dental care Bridgwater, children’s dental care Bridgwater, plaque removal Bridgwater, tooth fillings Bridgwater, gum care Bridgwater, Supernova Dental therapist, dental care Taunton, dental care Highbridge, dental care Burnham-on-Sea',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Dental Therapist Services in Bridgwater, Somerset',
  url: 'https://www.supernovadental.co.uk/dental-therapist',
  description:
    'Supernova Dental provides expert dental therapist services in Bridgwater, Somerset, including preventive and restorative treatments. We serve patients from surrounding areas such as Taunton, Highbridge, and Burnham-on-Sea.',
  image: 'https://www.supernovadental.co.uk/assets/images/outerBuilding.jpg',
  keywords:
    'dental therapist Bridgwater, dental therapist Somerset, preventive dental care Bridgwater, restorative dental care Bridgwater, oral health Bridgwater, children’s dental care Bridgwater, gum care Bridgwater, dental care Taunton, dental care Highbridge, dental care Burnham-on-Sea',
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
    name: 'Dental Therapist Services',
    description:
      'Supernova Dental offers professional dental therapist services in Bridgwater, Somerset, including preventive care, restorative treatments such as fillings and crowns, and oral health maintenance. Serving patients from surrounding areas including Taunton, Highbridge, and Burnham-on-Sea.',
    procedureType: 'Non-invasive',
    areaServed: ['Bridgwater, UK', 'Somerset, UK', 'Taunton, UK', 'Highbridge, UK', 'Burnham-on-Sea, UK'],
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
      <EnquiryButton referringPage={'general-dentistry/dental-therapist'} />
    </div>
  );
}
