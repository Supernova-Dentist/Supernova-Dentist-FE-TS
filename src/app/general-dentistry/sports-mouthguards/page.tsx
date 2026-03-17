import SportsMouthguardsContent from '@/components/blocks/SportsMouthguardsContent/SportsMouthguardsContent';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sports Mouthguards | Bridgwater, Somerset | Supernova Dental',
  description:
    'Sports mouthguards in Bridgwater, Somerset at Supernova Dental. Custom-fit with digital scans and lab-made protection trusted by top athletes. Book today.',
  keywords:
    'sports mouthguards Bridgwater, custom sports guards Somerset, mouthguards for rugby Bridgwater, boxing mouthguard Somerset, digital dental scan Bridgwater, Tyson Fury mouthguard lab, dental sports guard, Supernova Dental sports guards, custom sports mouthguards Taunton, sports guard Highbridge, sports mouthguard Burnham-on-Sea',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Custom Sports Mouthguards',
  url: 'https://www.supernovadental.co.uk/general-dentistry/sports-mouthguards',
  description:
    'Supernova Dental provides custom sports mouthguards in Bridgwater, Somerset, using digital scans—no messy impressions. Our lab also produces mouthguards trusted by elite athletes, including heavyweight champion Tyson Fury. Serving patients from Taunton, Highbridge, Burnham-on-Sea, and surrounding areas.',
  keywords:
    'sports mouthguards Bridgwater, custom sports guards Somerset, digital mouthguard scan, rugby mouthguard Somerset, boxing mouthguard UK, custom sports mouthguards Taunton, sports guard Highbridge, sports mouthguard Burnham-on-Sea',
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
    name: 'Custom Sports Mouthguard Fitting',
    description:
      'Digitally scanned and custom-made sports mouthguards for protection during rugby, boxing, and contact sports. Fabricated by a specialist lab trusted by top athletes. Serving Bridgwater, Somerset, and surrounding areas including Taunton, Highbridge, and Burnham-on-Sea.',
    procedureType: 'Non-surgical',
    areaServed: ['Bridgwater, UK', 'Somerset, UK', 'Taunton, UK', 'Highbridge, UK', 'Burnham-on-Sea, UK'],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function SportsMouthguards() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SportsMouthguardsContent />
      <EnquiryButton referringPage={'general-dentistry/sports-mouthguards'} />
    </div>
  );
}
