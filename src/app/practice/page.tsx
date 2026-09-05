import DentallyTutorial from '@/components/DentallyTutorial/DentallyTutorial';
import PracticeExperience from '@/components/PracticeExperience/PracticeExperience';
import ServiceForm from '@/components/ServiceForm/ServiceForm';
import { PRACTICE_ID, SITE_URL } from '@/lib/site';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Dental Practice in Bridgwater | Supernova Dental',
  description:
    'Discover Supernova Dental in Bridgwater, a modern private dental practice with advanced facilities, technology and a welcoming patient experience. Book a complimentary practice tour.',
  alternates: {
    canonical: '/practice',
  },
  keywords:
    'dentist Bridgwater, dental practice Bridgwater, private dentist Bridgwater, dental practice Somerset, modern dental practice Bridgwater, new dental practice Bridgwater, dentist near Bridgwater, dental clinic Bridgwater, dental facilities Bridgwater, private dental care Bridgwater, complimentary practice tour, dental practice tour Bridgwater, Supernova Dental',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': PRACTICE_ID,
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
      urlTemplate: `${SITE_URL}/enquiry`,
    },
    actionStatus: 'PotentialActionStatus',
    name: 'Book a Complimentary Practice Tour',
  },
};

export default function OurPractice() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <PracticeExperience />

      <div className='scroll-mt-24'>
        <ServiceForm
          serviceName='Practice Tour'
          serviceChip='Book a Complimentary Practice Tour'
          serviceDescription='Take a look around Supernova Dental, explore our modern facilities and meet the team before your appointment.'
          formTitle='Book a Complimentary Practice Tour'
          formDescription='Come and see Supernova Dental for yourself. Our complimentary practice tours give you the opportunity to explore our modern facilities, see our technology and meet the team in a relaxed environment before becoming a patient.'
          formId='practice-tour-form'
          eventType='PracticeTourLead'
          headingLevel='h2'
          showBreadcrumb={false}
        />
      </div>

      <DentallyTutorial />
    </>
  );
}
