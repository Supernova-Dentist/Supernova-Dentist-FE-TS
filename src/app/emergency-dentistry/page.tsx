import type { Metadata } from 'next';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import EmergencyDentistryContent from '@/components/blocks/EmergencyDenistry/EmergencyDentistryContent';

export const metadata: Metadata = {
  title: 'Emergency Dentist Bridgwater & Taunton | Same Day Dental Appointments',
  description:
    'Need an emergency dentist in Bridgwater or Taunton? Supernova Dental offers urgent care, same-day dental appointments, and fast solutions for dental emergencies. Call us now for immediate assistance, including Saturday appointments!',
  keywords:
    'emergency dentist Bridgwater, same day dental appointment Bridgwater, dental emergency Bridgwater, urgent dental care Taunton, emergency dentist Taunton, same day dentist Taunton, dental emergency appointment, emergency dentist near me, dental pain Bridgwater, toothache emergency, urgent care dental clinic, Supernova Dental emergency dentist, dentist for emergencies Bridgwater, Saturday dental appointments',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Emergency Dentist Bridgwater & Taunton',
  url: 'https://www.supernovadental.co.uk/emergency-dentist',
  description:
    'Need an emergency dentist in Bridgwater or Taunton? Supernova Dental offers urgent care, same-day appointments, and solutions for dental emergencies. Call us now for immediate assistance, including Saturday appointments!',
  keywords:
    'emergency dentist Bridgwater, same day dental appointment Bridgwater, dental emergency Bridgwater, urgent dental care Taunton, emergency dentist Taunton, dental pain, Supernova Dental emergency dentist, Saturday appointments Bridgwater, same day dentist Taunton, emergency dental appointment',
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
  openingHours: ['Mo-Th 08:15-18:15', 'Sa 09:00-13:00'], // Still showcasing Saturday availability
  serviceProvided: {
    '@type': 'MedicalProcedure',
    name: 'Emergency Dental Treatment',
    description:
      'Supernova Dental offers urgent dental care for emergencies, including same-day appointments for toothaches, broken teeth, lost fillings, and other urgent dental issues. We are also available for Saturday appointments.',
    procedureType: 'Non-invasive',
    areaServed: 'Bridgwater, Taunton, UK',
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
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <EmergencyDentistryContent />
    </div>
  );
}
