import type { Metadata } from 'next';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import EmergencyContent from '@/components/blocks/EmergencyContent/EmergencyContent';

export const metadata: Metadata = {
  title: 'Supernova Dental | Emergency Dental Care',
  description:
    'Get prompt and effective care for dental emergencies at Supernova Dental. Our experienced team is ready to address urgent issues and provide relief to keep your oral health intact.',
};

export default function Emergency() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <EmergencyContent />
      <div className='fixed inset-x-0 bottom-5 md:fixed md:bottom-10 md:right-40 flex justify-center md:justify-end'>
        <EnquiryButton referringPage={'emergency'} />
      </div>
    </div>
  );
}
