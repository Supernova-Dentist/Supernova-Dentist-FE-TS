import type { Metadata } from 'next';
import FillingContent from '@/components/blocks/FillingContent/FillingContent';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';

export const metadata: Metadata = {
  title: 'Supernova Dental | Dental Fillings',
  description:
    'Restore and protect your teeth with expert dental fillings at Supernova Dental. Our skilled team ensures precise, comfortable treatments to keep your smile healthy.',
};

export default function Filling() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <FillingContent />
      <EnquiryButton referringPage={'general-dentistry/filling'} />
    </div>
  );
}
