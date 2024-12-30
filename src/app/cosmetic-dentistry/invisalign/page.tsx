import type { Metadata } from 'next';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import InvisalignContent from '@/components/blocks/InvisalignContent/InvisalignContent';

export const metadata: Metadata = {
  title: 'Supernova Dental | Invisalign',
  description:
    'Discover the benefits of Invisalign at Supernova Dental. Straighten your teeth discreetly and effectively.',
};

export default function Invisalign() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <InvisalignContent />
      {/* Sticky EnquiryButton */}
      <EnquiryButton referringPage={'cosmetic-dentistry/invisalign'} />
    </div>
  );
}
