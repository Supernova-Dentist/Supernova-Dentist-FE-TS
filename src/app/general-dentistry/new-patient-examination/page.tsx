import NewPatientContent from '@/components/blocks/NewPatientContent/NewPatientContent';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Patient Dental Examination | Supernova Dental, Bridgwater',
  description:
    'Book your new patient dental examination at Supernova Dental in Bridgwater, Somerset. Our expert team provides thorough check-ups for adults and children to ensure a healthy smile.',
  keywords:
    'new patient dentist Bridgwater, new patient dental exam Somerset, dental check-up Bridgwater, first dental appointment Bridgwater, register as new patient Somerset, family dentist Bridgwater, private dentist Somerset, dental examination Bridgwater, oral health check Bridgwater, Supernova Dental new patient',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - New Patient Dental Examination in Bridgwater, Somerset',
  url: 'https://www.supernovadental.co.uk/new-patient-examination',
  image: 'https://www.supernovadental.co.uk/assets/images/outerBuilding.jpg',
  description:
    'Supernova Dental provides new patient dental examinations in Bridgwater, Somerset. Our experienced dentists carry out thorough check-ups for adults and children, assess oral health, and create personalised treatment plans. Serving patients from Bridgwater and surrounding areas including Taunton, Highbridge, and Burnham-on-Sea.',
  keywords:
    'new patient dentist Bridgwater, new patient dental exam Somerset, dental check-up Bridgwater, first dental appointment Bridgwater, family dentist Bridgwater, private dentist Somerset',
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
    name: 'New Patient Dental Examination',
    description:
      'Supernova Dental offers thorough new patient dental examinations in Bridgwater, Somerset. Our dentists assess oral health, check teeth and gums, and provide personalised treatment plans. Serving patients from surrounding areas including Taunton, Highbridge, and Burnham-on-Sea.',
    procedureType: 'Non-invasive',
    areaServed: ['Bridgwater, UK', 'Somerset, UK', 'Taunton, UK', 'Highbridge, UK', 'Burnham-on-Sea, UK'],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function NewPatientExamination() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <NewPatientContent />
      {/* Sticky EnquiryButton */}
      <EnquiryButton referringPage={'general-dentistry/new-patient-examination'} />
    </div>
  );
}
