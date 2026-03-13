import WhiteCompositeFillingsContent from '@/components/blocks/WhiteCompositeFillingsContent/WhiteCompositeFillingsContent';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'White Composite Fillings in Bridgwater | Supernova Dental',
  description:
    'White composite fillings in Bridgwater, Somerset. Supernova Dental provides durable, natural-looking tooth-coloured fillings to restore and protect your smile.',
  keywords:
    'white fillings Bridgwater, white fillings Somerset, composite fillings Bridgwater, composite fillings Somerset, tooth-coloured fillings Bridgwater, cavity treatment Bridgwater, dental fillings Bridgwater, dental fillings Somerset, Supernova Dental, dental care Taunton, dental care Highbridge, dental care Burnham-on-Sea',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - White Composite Fillings in Bridgwater, Somerset',
  url: 'https://www.supernovadental.co.uk/white-composite-fillings',
  description:
    'Restore damaged or decayed teeth with natural-looking white composite fillings at Supernova Dental in Bridgwater, Somerset. Durable, tooth-coloured, and aesthetically pleasing. Serving patients from surrounding areas including Taunton, Highbridge, and Burnham-on-Sea.',
  keywords:
    'white fillings Bridgwater, white fillings Somerset, composite fillings Bridgwater, composite fillings Somerset, tooth-coloured fillings Bridgwater, cavity treatment Bridgwater, dental fillings Bridgwater, dental fillings Somerset, dental care Taunton, dental care Highbridge, dental care Burnham-on-Sea',
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
  openingHours: ['Mo-Fr 08:15-18:15', 'Sa 09:00-13:00'],
  serviceProvided: {
    '@type': 'MedicalProcedure',
    name: 'White Composite Fillings',
    description:
      'Supernova Dental provides natural-looking white composite fillings to restore and protect teeth in Bridgwater, Somerset. Serving patients from surrounding areas including Taunton, Highbridge, and Burnham-on-Sea.',
    procedureType: 'Restorative',
    areaServed: ['Bridgwater, UK', 'Somerset, UK', 'Taunton, UK', 'Highbridge, UK', 'Burnham-on-Sea, UK'],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function WhiteCompositeFillings() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <WhiteCompositeFillingsContent />
      {/* Sticky EnquiryButton */}
      <EnquiryButton referringPage={'general-dentistry/white-composite-fillings'} />
    </div>
  );
}
