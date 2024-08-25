import type { Metadata } from 'next';
import EnquiryButton from '@/components/EquiryButton/EnquiryButton';
import GeneralCheckupContent from '@/components/blocks/GeneralCheckupContent/GeneralCheckupContent';

export const metadata: Metadata = {
  title: 'Supernova Dental | Composite Bonding',
  description:
    'Learn about composite bonding at Supernova Dental. Enhance your smile with this cosmetic dental procedure.',
};

export default function GeneralCheckup() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <GeneralCheckupContent />
      <div className='fixed inset-x-0 bottom-5 md:fixed md:bottom-10 md:right-40 flex justify-center md:justify-end'>
        <EnquiryButton referringPage={'cosmetic-dentistry/tooth-whitening'} />
      </div>
    </div>
  );
}
