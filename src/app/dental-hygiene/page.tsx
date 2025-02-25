import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import HygieneContent from '@/components/blocks/InvisalignContent copy/HygieneContent';
import InvisalignContent from '@/components/blocks/InvisalignContent/InvisalignContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Hygiene & Teeth Cleaning in Bridgwater | Supernova Dental',
  description:
    'Looking for professional teeth cleaning in Bridgwater? Keep your smile healthy with Supernova Dental. Prevent gum disease, freshen your breath, and maintain optimal oral hygiene with expert dental care.',
};


export default function Invisalign() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <HygieneContent />
      {/* Sticky EnquiryButton */}
      <EnquiryButton referringPage={'dental-hygiene'} />
    </div>
  );
}
