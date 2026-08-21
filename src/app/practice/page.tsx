import { AboutPractice } from '@/components/AboutPractice/AboutPractice';
import DentallyTutorial from '@/components/DentallyTutorial/DentallyTutorial';
import { DisappearingFeatures } from '@/components/DisappearingScrollFeatures/DisappearingScrollFeatures';
import ServiceForm from '@/components/ServiceForm/ServiceForm';
import { StickyCards } from '@/components/StickyCards/StickyCards';
import { FeaturesSectionDemo } from '@/components/ui/bento-grid';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Dental Practice in Bridgwater | Supernova Dental',
  description:
    'Discover Supernova Dental in Bridgwater, a modern private dental practice with advanced facilities, technology and a welcoming patient experience. Book a complimentary practice tour.',
  keywords:
    'dentist Bridgwater, dental practice Bridgwater, private dentist Bridgwater, dental practice Somerset, modern dental practice Bridgwater, new dental practice Bridgwater, dentist near Bridgwater, dental clinic Bridgwater, dental facilities Bridgwater, private dental care Bridgwater, complimentary practice tour, dental practice tour Bridgwater, Supernova Dental',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental',
  url: 'https://www.supernovadental.co.uk/practice',
  image: 'https://www.supernovadental.co.uk/assets/images/outerBuilding.jpg',
  description:
    'Supernova Dental is a modern private dental practice in Bridgwater, Somerset, offering advanced dental facilities, technology and a welcoming environment for patients. Complimentary practice tours are available for patients who would like to visit the practice before their appointment.',
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
    areaServed: ['Bridgwater, UK', 'Somerset, UK'],
    availableLanguage: ['English', 'Polish', 'Spanish', 'French', 'Romanian', 'Arabic'],
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:15',
      closes: '18:15',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dental Services at Supernova Dental',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Private Dental Care',
          description: 'Private dental care provided in a modern dental practice in Bridgwater, Somerset.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Complimentary Practice Tour',
          description:
            'A complimentary opportunity to visit Supernova Dental, explore the practice and facilities, and meet the team before becoming a patient.',
        },
      },
    ],
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.supernovadental.co.uk/enquiry',
    },
    actionStatus: 'PotentialActionStatus',
    name: 'Book a Complimentary Practice Tour',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function OurPractice() {
  return (
    <div className='flex flex-col'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className='mt-4'>
        <ServiceForm
          serviceName='Practice Tour'
          serviceChip='Book a Complimentary Practice Tour'
          serviceDescription='Take a look around Supernova Dental, explore our modern facilities and meet the team before your appointment.'
          formTitle='Book a Complimentary Practice Tour'
          formDescription='Come and see Supernova Dental for yourself. Our complimentary practice tours give you the opportunity to explore our modern facilities, see our technology and meet the team in a relaxed environment before becoming a patient.'
          formId='practice-tour-form'
          eventType='PracticeTourLead'
        />
      </div>

      <section>
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <FeaturesSectionDemo />
          <AboutPractice />
        </div>
      </section>

      <DisappearingFeatures />

      <DentallyTutorial />

      <StickyCards />
    </div>
  );
}
