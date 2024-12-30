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
      <div className='sticky bottom-5 mb-8 flex justify-center z-10'>
        <EnquiryButton referringPage={'cosmetic-dentistry/invisalign'} />
      </div>
    </div>
  );
}
