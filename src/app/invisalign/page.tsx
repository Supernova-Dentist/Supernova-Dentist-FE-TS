import type { Metadata } from 'next';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import InvisalignContent from '@/components/blocks/InvisalignContent/InvisalignContent';

export const metadata: Metadata = {
  title: 'Invisalign Bridgwater | Supernova Dental',
  description: 
    'Looking for Invisalign in Bridgwater? Book your free consultation at Supernova Dental and get started on your journey to a straighter smile with clear aligners and invisible braces.',
};


export default function Invisalign() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <InvisalignContent />
      {/* Sticky EnquiryButton */}
      <EnquiryButton referringPage={'invisalign'} />
    </div>
  );
}
