import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import { type Metadata } from 'next';
import { OralSurgeryReferralFormContent } from './utils/oral-surgery-referral-form-content';

export const metadata: Metadata = {
  title: 'Oral Surgery Referral in Bridgwater | Supernova Dental',
  description:
    'Refer patients for oral surgery at Supernova Dental in Bridgwater. Expert care for extractions and minor surgery with fast appointments and clear updates.',
  alternates: { canonical: '/professional-referrals/oral-surgery-referral' },
  keywords:
    'oral surgery referral Bridgwater, dental extraction referral Somerset, minor oral surgery, wisdom tooth removal, Supernova Dental oral surgery, dental referral Somerset, oral surgeon Bridgwater, professional dental referral, dentist referral oral surgery',
};

export default function OralSurgeryReferral() {
  return (
    <div className='min-h-screen flex  justify-center align-middle'>
      <div className='container mx-auto py-24 px-8'>
        <HighlightCard
          title='Oral Surgery Referral'
          description='Complete the referral form below to refer your patient for oral surgery at Supernova Dental.'
          logoSrc='/favicon.ico'
        />

        <div className='p-4 md:px-6 pb-10 flex flex-col justify-start mx-auto max-w-5xl md:max-w-6xl lg:max-w-7xl'>
          <BreadCrumb />

          <p className='text-md md:text-xl lg:text-2xl leading-tight text-center tracking-tight font-bold text-gold mt-4 mb-2'>
            Please fill in the oral surgery referral form below
          </p>

          <OralSurgeryReferralFormContent />
        </div>
      </div>
    </div>
  );
}
