import type { Metadata } from 'next';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import RootCanalContent from '@/components/blocks/RootCanalContent/RootCanalContent';

export const metadata: Metadata = {
  title: 'Supernova Dental | Root Canal Treatment',
  description:
    'Relieve pain and save your tooth with expert root canal treatment at Supernova Dental. Our skilled team offers comprehensive care to restore your dental health.',
};

export default function RootCanal() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <RootCanalContent />
      <div className='fixed inset-x-0 bottom-5 md:fixed md:bottom-10 md:right-40 flex justify-center md:justify-end'>
        <EnquiryButton referringPage={'general-dentistry/root-canal'} />
      </div>
    </div>
  );
}
