import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import { type Metadata } from 'next';
import TeamMemberGrid from './utils/TeamMemberGrid';

export const metadata: Metadata = {
  title: 'Meet Our Skilled Dental Team | Supernova Dental Bridgwater, Somerset',
  description:
    'Meet the expert dental team at Supernova Dental in Bridgwater, Somerset. Our dentists, implantologist/oral surgeon, therapist provide personalised, compassionate care for all patients. Welcoming new patients from Bridgwater, Taunton, and beyond.',
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
    availableLanguage: 'English',
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
    <div className='flex flex-col min-h-screen justify-center align-center  px-8'>
      {/* Structured Data */}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Highlight Card */}
      <HighlightCard
        logoSrc='/assets/images/logo.png'
        title='Meet Our Dedicated Dental Team'
        description='Discover the friendly, highly skilled professionals behind Supernova Dental. Providing expert care for all patients, we are now welcoming new patients from Bridgwater, Taunton, and surrounding areas.'
        className='mx-auto mt-16'
      />

      {/* Breadcrumb */}
      <div className='mx-auto px-4 md:px-6 container pt-8 pb-4'>
        <BreadCrumb />
      </div>

      {/* Team Members Grid */}
      <TeamMemberGrid />
    </div>
  );
}
