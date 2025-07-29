import SportsMouthguardsContent from '@/components/blocks/SportsMouthguardsContent/SportsMouthguardsContent';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sports Mouthguards Bridgwater & Taunton | Custom Fit Protection',
  description:
    'Protect your teeth with custom-fit sports mouthguards from Supernova Dental. We use digital scans—no messy impressions—and work with the same expert lab trusted by world-class athletes like Tyson Fury.',
  keywords:
    'sports mouthguards Bridgwater, custom sports guards Taunton, mouthguards for rugby Bridgwater, boxing mouthguard Somerset, dental sports guard, digital dental scan Bridgwater, Tyson Fury mouthguard lab, Supernova Dental sports guards',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Custom Sports Mouthguards',
  url: 'https://www.supernovadental.co.uk/sports-mouthguards',
  description:
    'Custom sports mouthguards using digital scans—no messy impressions. Our lab also produces mouthguards trusted by elite athletes, including heavyweight champion Tyson Fury.',
  keywords:
    'sports mouthguards Bridgwater, custom dental guards Taunton, digital mouthguard scan, rugby mouthguard Somerset, boxing mouthguard UK',
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
    name: 'Custom Sports Mouthguard Fitting',
    description:
      'Digitally scanned and custom-made sports mouthguards for protection during rugby, boxing, and contact sports. Fabricated by a specialist lab trusted by top athletes.',
    procedureType: 'Non-surgical',
    areaServed: ['Bridgwater, UK', 'Taunton, UK', 'Somerset, UK'],
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
