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
      <EnquiryButton referringPage={'general-dentistry/general-checkup'} />
    </div>
  );
}
