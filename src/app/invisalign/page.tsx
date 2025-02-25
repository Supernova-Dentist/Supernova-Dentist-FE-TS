import type { Metadata } from 'next';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import InvisalignContent from '@/components/blocks/InvisalignContent/InvisalignContent';

export const metadata: Metadata = {
  title: 'Invisalign Bridgwater',
  description:
    'Achieve a perfect smile with Invisalign in Bridgwater at Supernova Dental. Start your journey to straight teeth with clear aligners. Book a free consultation today!',
  keywords:
    'Invisalign Bridgwater, clear aligners Bridgwater, teeth straightening Bridgwater, Invisalign treatment Bridgwater, invisible braces Bridgwater, Invisalign cost Bridgwater, best Invisalign dentist Bridgwater, adult braces Bridgwater, orthodontic treatment Bridgwater, Invisalign consultation Bridgwater, Supernova Dental Invisalign, private Invisalign dentist Bridgwater, cosmetic dentistry Bridgwater',
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
