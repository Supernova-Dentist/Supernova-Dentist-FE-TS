import TeamListing from '@/components/TeamExperience/TeamListing';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skilled Private Dental Team in Bridgwater | Supernova Dental',
  description:
    'Meet the expert dental team at Supernova Dental in Bridgwater. Our dentists and specialists provide personalised, compassionate care. New patients welcome.',
  keywords: [
    'dental team Bridgwater',
    'qualified dentists Bridgwater',
    'implantologists Bridgwater',
    'dental therapists UK',
    'oral surgeons Bridgwater',
    'dental hygienists UK',
    'experienced dental professionals',
    'personalised dental care Bridgwater',
    'compassionate dentists',
    'advanced dental techniques',
    'dental specialists UK',
    'oral health experts Bridgwater',
    'smile transformation dentists Bridgwater',
    'taking new patients Bridgwater',
    'dentist team Somerset',
    'family dentist Bridgwater',
  ].join(', '),
  alternates: { canonical: '/team' },
  openGraph: {
    title: 'Skilled Private Dental Team in Bridgwater | Supernova Dental',
    description:
      'Meet the expert dental team at Supernova Dental in Bridgwater. Our dentists and specialists provide personalised, compassionate care. New patients welcome.',
    url: '/team',
    type: 'website',
    images: [
      {
        url: '/assets/images/staff_1.jpg',
        alt: 'The Supernova Dental team in Bridgwater, Somerset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skilled Private Dental Team in Bridgwater | Supernova Dental',
    description:
      'Meet the expert dental team at Supernova Dental in Bridgwater. Our dentists and specialists provide personalised, compassionate care.',
    images: ['/assets/images/staff_1.jpg'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Supernova Dental',
  url: 'https://www.supernovadental.co.uk/team',
  image: 'https://www.supernovadental.co.uk/assets/images/staff_1.jpg', // team picture
  description:
    'Meet the expert dental team at Supernova Dental in Bridgwater, Somerset. Our dentists, implantologist/oral surgeon, and therapist provide personalised, compassionate care for all patients.',
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
    availableLanguage: ['English', 'Polish', 'Spanish', 'French', 'Romanian', 'Arabic'],
    areaServed: ['Bridgwater, UK', 'Taunton, UK', 'Somerset, UK'],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function TeamPage() {
  return (
    <>
      {/* Structured Data */}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <TeamListing />
    </>
  );
}
