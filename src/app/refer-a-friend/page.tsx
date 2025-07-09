import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import InvisalignContent from '@/components/blocks/InvisalignContent/InvisalignContent';
import ReferAFriendCard from '@/components/blocks/ReferAFriendContent/ReferAFriendCard/ReferAFriendCard';
import { ReferAFriendContent } from '@/components/blocks/ReferAFriendContent/ReferAFriendContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refer a Friend - Supernova Dental',
  description:
    'Refer a friend to Supernova Dental and both receive £10 credit after their new patient exam. Earn £50 credit if your friend starts Invisalign treatment within 2 months. Spread smiles in Bridgwater!',
  keywords:
    'Refer a friend Bridgwater, dental referral Bridgwater, Supernova Dental referral, Invisalign referral, dental credit offer Bridgwater, new patient exam referral, dental referral bonus, teeth straightening referral',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Supernova Dental - Refer a Friend',
  url: 'https://www.supernovadental.co.uk/refer-a-friend',
  description:
    'Refer a friend to Supernova Dental in Bridgwater. Both you and your friend receive £10 credit when they complete their new patient exam, plus £50 credit if they start Invisalign treatment.',
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
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567279201971',
    'https://www.instagram.com/supernova.dental/',
    'https://g.co/kgs/qqvPcF1',
  ],
};

export default function ReferAFriend() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ReferAFriendContent />
    </div>
  );
}
