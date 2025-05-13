import type { Metadata } from 'next';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import ToothWhiteningContent from '@/components/blocks/ToothWhiteningContent/ToothWhiteningContent';

export const metadata: Metadata = {
  title: 'Supernova Dental | Composite Bonding',
  description:
    'Learn about composite bonding at Supernova Dental. Enhance your smile with this cosmetic dental procedure.',
};

export default function ToothWhitening() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <ToothWhiteningContent />
      <EnquiryButton referringPage={'cosmetic-dentistry/tooth-whitening'} />
    </div>
  );
}
