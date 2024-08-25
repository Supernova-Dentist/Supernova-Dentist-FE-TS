import type { Metadata } from 'next';
import GeneralCheckupContent from '@/components/blocks/GeneralCheckupContent/GeneralCheckupContent';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';

export const metadata: Metadata = {
  title: 'Supernova Dental | General Checkup',
  description:
    'Ensure optimal oral health with a comprehensive general checkup at Supernova Dental. Our experienced team provides thorough examinations and personalized care.',
};

export default function GeneralCheckup() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <GeneralCheckupContent />
      <div className='fixed inset-x-0 bottom-5 md:fixed md:bottom-10 md:right-40 flex justify-center md:justify-end'>
        <EnquiryButton referringPage={'general-dentistry/general-checkup'} />
      </div>
    </div>
  );
}
