import { ReferAFriendContent } from '@/components/blocks/ReferAFriendContent/ReferAFriendContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refer a Friend for Invisalign | Supernova Dental',
  description:
    'Refer a friend for Invisalign at Supernova Dental in Bridgwater. Existing patients receive a £50 voucher and referred friends receive £50 off Invisalign treatment.',
  alternates: { canonical: '/refer-a-friend' },
};

export default function ReferAFriend() {
  return <ReferAFriendContent />;
}
