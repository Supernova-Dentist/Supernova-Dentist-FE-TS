import type { Metadata } from 'next';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import CompositeBondingContent from '@/components/blocks/CompositeBondingContent/CompositeBondingContent';

export const metadata: Metadata = {
  title: 'Supernova Dental | Composite Bonding',
  description:
    'Learn about composite bonding at Supernova Dental. Enhance your smile with this cosmetic dental procedure.',
};

export default function CompositeBonding() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <CompositeBondingContent />
      <EnquiryButton referringPage={'cosmetic-dentistry/composite-bonding'} />
    </div>
  );
}
