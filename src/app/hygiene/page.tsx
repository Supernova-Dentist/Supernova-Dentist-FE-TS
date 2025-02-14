import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import HygieneContent from '@/components/blocks/InvisalignContent copy/HygieneContent';
import InvisalignContent from '@/components/blocks/InvisalignContent/InvisalignContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental | Professional Teeth Cleaning & Hygiene',
  description:
    'Keep your smile healthy with professional teeth cleaning at Supernova Dental. Prevent gum disease, freshen your breath, and maintain optimal oral hygiene.',
};

export default function Invisalign() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <HygieneContent />
      {/* Sticky EnquiryButton */}
      <EnquiryButton referringPage={'hygiene'} />
    </div>
  );
}
