import RootCanalContent from '@/components/blocks/RootCanalContent.tsx/RootCanalContent';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Root Canal Treatment in Bridgwater | Supernova Dental',
  description:
    'Expert root canal treatment at Supernova Dental in Bridgwater, Somerset. Save infected teeth with gentle, effective endodontic care. Book your consultation today.',
  alternates: {
    canonical: '/general-dentistry/root-canal-treatment',
  },
  keywords:
    'root canal Bridgwater, root canal treatment Somerset, endodontist Bridgwater, tooth infection treatment Bridgwater, emergency root canal Somerset, save tooth root canal, private dentist Bridgwater, pain free root canal Somerset, Supernova Dental root canal',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Root Canal Treatment in Bridgwater, Somerset',
  url: 'https://www.supernovadental.co.uk/general-dentistry/root-canal-treatment',
  image: 'https://www.supernovadental.co.uk/assets/images/outerBuilding.jpg',
  description:
    'Supernova Dental provides expert root canal treatment in Bridgwater, Somerset. Our experienced dentists treat infected teeth, relieve pain, and help preserve your natural smile. Serving patients from Bridgwater and surrounding areas including Taunton, Highbridge, and Burnham-on-Sea.',
  keywords:
    'root canal Bridgwater, root canal treatment Somerset, endodontic treatment Bridgwater, tooth infection treatment Somerset, emergency dentist Bridgwater, private dentist Somerset',
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
    name: 'Root Canal Treatment',
    description:
      'Root canal treatment at Supernova Dental removes infection from inside the tooth, relieves pain, and helps save your natural tooth. We provide gentle, effective care for patients in Bridgwater and surrounding areas.',
    procedureType: 'Minimally invasive',
    areaServed: ['Bridgwater, UK', 'Somerset, UK', 'Taunton, UK', 'Highbridge, UK', 'Burnham-on-Sea, UK'],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function RootCanalTreatment() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <RootCanalContent />
      {/* Sticky EnquiryButton */}
      <EnquiryButton referringPage={'general-dentistry/root-canal-treatment'} />
    </div>
  );
}
