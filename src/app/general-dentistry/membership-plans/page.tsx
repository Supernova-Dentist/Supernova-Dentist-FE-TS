import MembershipPlansContent from '@/components/blocks/MembershipPlansContent/MembershipPlansContent';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Membership Plans in Bridgwater | Supernova Dental',
  description:
    'Join Supernova Dental in Bridgwater with dental membership plans for adults and children. Affordable care with check-ups, hygiene visits and emergency cover.',
  keywords:
    'dental membership plans Bridgwater, dental membership Somerset, adult dental plan Bridgwater, children dental plan Bridgwater, affordable dental care Bridgwater, Supernova Dental membership, private dentist Bridgwater, routine dental checkups Bridgwater, dental hygiene plan Bridgwater, emergency dental cover Somerset, new dentist Bridgwater, taking new patients',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Dental Membership Plans Bridgwater',
  url: 'https://www.supernovadental.co.uk/general-dentistry/membership-plans',
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
    name: 'Register for a Dental Membership Plan',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function MembershipPlans() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <MembershipPlansContent />
      {/* Sticky EnquiryButton */}
      <EnquiryButton referringPage={'general-dentistry/membership-plans'} />
    </div>
  );
}
