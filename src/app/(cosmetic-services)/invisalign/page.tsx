import type { Metadata } from 'next';
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';
import EnquiryButton from '@/components/EquiryButton/EnquiryButton';
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
      <div className='fixed inset-x-0 bottom-5 md:fixed md:bottom-10 md:right-40 flex justify-center md:justify-end'>
        <EnquiryButton referringPage={'invisalign'} />
      </div>
    </div>
  );
}
