import type { Metadata } from 'next';
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';
import EnquiryButton from '@/components/EquiryButton/EnquiryButton';
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
      <div className='fixed inset-x-0 bottom-5 md:fixed md:bottom-10 md:right-40 flex justify-center md:justify-end'>
        <EnquiryButton referringPage={'tooth-whitening'} />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
