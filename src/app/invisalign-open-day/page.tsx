import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import InvisalignContent from '@/components/blocks/InvisalignContent/InvisalignContent';
import { InvisalignOpenDayContent } from '@/components/blocks/InvisalignOpenDayContent/InvisalignOpenDayContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invisalign Open Day - Save £1,473! | Supernova Dental, Bridgwater',
  description:
    'Join us on Saturday, 12th April, for our Invisalign® Open Day at Supernova Dental, Bridgwater! Enjoy a FREE consultation, 3D scan, whitening, retainers & £500 off Invisalign treatment. Secure your spot today!',
  keywords:
    'Invisalign Open Day Bridgwater, Invisalign discount Bridgwater, Invisalign event, free Invisalign consultation, clear aligners Bridgwater, teeth straightening Bridgwater, best Invisalign deals, adult braces, Invisalign offers UK, Supernova Dental Invisalign',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Invisalign Open Day - Supernova Dental Bridgwater',
  startDate: '2025-04-12T09:00:00+01:00',
  endDate: '2025-04-12T17:00:00+01:00',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'Supernova Dental',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Supernova Building, Marsh Lane, Huntworth Gate',
      addressLocality: 'Bridgwater',
      postalCode: 'TA6 6LQ',
      addressCountry: 'GB',
    },
  },
  description:
    'Discover your dream smile at our Invisalign Open Day on Saturday, 12th April at Supernova Dental, Bridgwater! Enjoy a FREE consultation, 3D scan, OPG radiograph, whitening, retainers, and £500 off Invisalign treatment. Payment plans available from £39.99/month.',
  organizer: {
    '@type': 'Organization',
    name: 'Supernova Dental',
    url: 'https://www.supernovadental.co.uk',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44 1278 228665',
      contactType: 'Customer Service',
      email: 'enquiries@supernovadental.co.uk',
    },
  },
  offers: {
    '@type': 'Offer',
    url: 'https://www.supernovadental.co.uk/invisalign-open-day',
    price: '50',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
    validFrom: '2025-03-01T00:00:00+01:00',
    description:
      'Secure your spot with a refundable £50 deposit and claim your exclusive Open Day offer worth £1,473, including a FREE consultation, 3D scan, whitening, retainers, and £500 off Invisalign treatment.',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function Invisalign() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <InvisalignOpenDayContent />
    </div>
  );
}
