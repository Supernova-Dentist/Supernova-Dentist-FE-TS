import { type Metadata } from 'next';
import PageHero from '@/components/blocks/PageHero/PageHero';
import Button from '@/components/Button/Button';
import { DisappearingFeatures } from '@/components/DisappearingScrollFeatures/DisappearingScrollFeatures';
import { FloatingPhone } from '@/components/FloatingPhone/FloatingPhone';
import PromotionForm from '@/components/PromotionForm/PromotionForm';
import SteppedProgress from '@/components/SteppedProgress/SteppedProgress';
import { StickyCards } from '@/components/StickyCards/StickyCards';
import { FeaturesSectionDemo } from '@/components/ui/bento-grid';
import Link from 'next/link';
import DentallyTutorial from '@/components/DentallyTutorial/DentallyTutorial';
import { AboutPractice } from '@/components/AboutPractice/AboutPractice';
import ServiceForm from '@/components/ServiceForm/ServiceForm';

export const metadata: Metadata = {
  title: 'Dental Membership Plans in Bridgwater, Somerset | Supernova Dental',
  description:
    'Join Supernova Dental’s new practice in Bridgwater. Our dental membership plans for adults and children provide affordable, ongoing care including check-ups, hygiene visits, and emergency cover. Taking new patients—sign up today!',
  keywords:
    'dental membership plans Bridgwater, dental membership Somerset, adult dental plan Bridgwater, children dental plan Bridgwater, affordable dental care Bridgwater, Supernova Dental membership, private dentist Bridgwater, routine dental checkups Bridgwater, dental hygiene plan Bridgwater, emergency dental cover Somerset, new dentist Bridgwater, taking new patients',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Dental Membership Plans Bridgwater',
  url: 'https://www.supernovadental.co.uk/practice',
  image: 'https://www.supernovadental.co.uk/assets/images/outerBuilding.jpg',
  description:
    'Supernova Dental in Bridgwater offers dental membership plans for adults and children. Enjoy routine check-ups, hygiene visits, emergency cover, and expert care. Our new practice is welcoming new patients today!',
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
    areaServed: ['Bridgwater, UK', 'Taunton, UK', 'Somerset, UK'],
    availableLanguage: 'English',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
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
  serviceProvided: [
    {
      '@type': 'Service',
      name: 'Adult Membership Plan (16+)',
      description:
        '£24.99/month. Includes 2 routine exams per year, 2 hygiene appointments per year, 1 emergency assessment per year, small X-rays, and worldwide emergency cover.',
    },
    {
      '@type': 'Service',
      name: "Children's Membership Plan",
      description:
        '£5.99/month. Includes 2 routine exams per year, fluoride varnish application, and worldwide emergency cover.',
    },
  ],
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.supernovadental.co.uk/enquiry',
    },
    actionStatus: 'PotentialActionStatus',
    name: 'Sign up for a Dental Membership Plan',
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
          serviceName='Practice Plan'
          serviceChip='Join Our Practice Plan'
          serviceDescription='Enjoy affordable, ongoing dental care with our Practice Plan, designed to keep your oral health in top condition.'
          formTitle='Sign Up for Our Practice Plan'
          formDescription='Join our Practice Plan from £5.99/month for children or £24.99/month for adults (16+). Enjoy routine check-ups, hygiene visits, emergency cover, and more. Sign up today for expert dental care and peace of mind.'
          videoSrc='/assets/videos/sd_practice_plan.mp4'
          videoThumbnailSrc='/assets/images/practice_plan_thumbnail.png'
          formId='practice-enquiry-form'
          eventType='PracticePlanLead'
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
