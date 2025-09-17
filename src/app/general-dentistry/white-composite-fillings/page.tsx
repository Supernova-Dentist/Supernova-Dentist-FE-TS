import WhiteCompositeFillingsContent from '@/components/blocks/WhiteCompositeFillingsContent/WhiteCompositeFillingsContent';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'White Composite Fillings in Bridgwater | Supernova Dental',
  description:
    'Restore your teeth with natural-looking white composite fillings in Bridgwater. Supernova Dental provides durable, tooth-coloured fillings to protect and enhance your smile.',
  keywords:
    'white fillings Bridgwater, composite fillings Bridgwater, tooth-coloured fillings Bridgwater, cavity treatment Bridgwater, dental fillings Bridgwater, Supernova Dental',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - White Composite Fillings in Bridgwater',
  url: 'https://www.supernovadental.co.uk/white-composite-fillings',
  description:
    'Restore damaged or decayed teeth with natural-looking white composite fillings at Supernova Dental in Bridgwater. Durable, tooth-coloured, and aesthetically pleasing.',
  keywords:
    'white fillings Bridgwater, composite fillings Bridgwater, tooth-coloured fillings Bridgwater, cavity treatment Bridgwater, dental fillings Bridgwater',
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
    name: 'White Composite Fillings',
    description:
      'Supernova Dental provides natural-looking white composite fillings to restore and protect teeth in Bridgwater.',
    procedureType: 'Restorative',
    areaServed: ['Bridgwater, UK', 'Taunton, UK', 'Somerset, UK'],
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
