import type { Metadata } from 'next';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import EmergencyDentistryContent from '@/components/blocks/EmergencyDenistry/EmergencyDentistryContent';

export const metadata: Metadata = {
  title: 'Emergency Dentist in Bridgwater, Somerset | Supernova Dental',
  description:
    'Emergency dentist in Bridgwater. Supernova Dental offers same-day appointments for tooth pain, infection or broken teeth. Fast relief for urgent dental problems.',
  keywords:
    'emergency dentist Bridgwater, emergency dentist Somerset, tooth pain Bridgwater, tooth extraction Bridgwater, tooth infection Somerset, emergency dental care Bridgwater, urgent dentist Bridgwater, broken tooth Bridgwater, same day dental appointment Bridgwater, Saturday dental appointments Bridgwater, Supernova Dental emergency dentist, emergency dentist Taunton, emergency dentist Highbridge, emergency dentist Burnham-on-Sea',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Emergency Dentist Bridgwater, Somerset',
  url: 'https://www.supernovadental.co.uk/emergency-dentist',
  description:
    'Supernova Dental provides urgent dental care in Bridgwater, Somerset, including same-day appointments for emergencies like tooth pain, tooth infection, broken teeth, and extractions. We also welcome patients from Taunton, Highbridge, Burnham-on-Sea, and surrounding areas. Saturday appointments available.',
  keywords:
    'emergency dentist Bridgwater, emergency dentist Somerset, tooth pain Bridgwater, tooth extraction Bridgwater, tooth infection Somerset, broken tooth Bridgwater, urgent dental care Bridgwater, same day dental appointment Bridgwater, Saturday appointments Bridgwater, emergency dentist Taunton, emergency dentist Highbridge, emergency dentist Burnham-on-Sea',
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
    areaServed: 'GB',
    availableLanguage: 'English',
    additionalType: 'https://schema.org/OutOfHoursContactPoint',
    outOfHoursContact: {
      '@type': 'ContactPoint',
      telephone: '+44 7863 338815',
      contactType: 'WhatsApp (Out of Hours)',
      description: 'For emergency inquiries outside of regular hours, please reach us via WhatsApp.',
    },
  },
  openingHours: ['Mo-Th 08:15-18:15', 'Sa 09:00-13:00'],
  serviceProvided: {
    '@type': 'MedicalProcedure',
    name: 'Emergency Dental Treatment',
    description:
      'Supernova Dental offers urgent dental care in Bridgwater, Somerset, including same-day appointments for tooth pain, tooth infection, broken teeth, and emergency tooth extractions. We serve patients from Bridgwater, Somerset, Taunton, Highbridge, Burnham-on-Sea, and surrounding areas.',
    procedureType: 'Non-invasive',
    areaServed: 'Bridgwater, Somerset, Taunton, Highbridge, Burnham-on-Sea, UK',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function EmergencyDentistry() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <EmergencyDentistryContent />
    </div>
  );
}
