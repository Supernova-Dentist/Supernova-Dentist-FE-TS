import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import { type Metadata } from 'next';
import { InvisalignReferralFormContent } from '../invisalign-referral/utils/invisalign-referral-form-content';

export const metadata: Metadata = {
  title: 'Invisalign Referral Form | Supernova Dental, Bridgwater, Somerset',
  description:
    'Refer your patients for Invisalign treatment at Supernova Dental in Bridgwater, Somerset. Professional, fast, and seamless referrals for outstanding orthodontic care.',
  keywords:
    'Invisalign referral Bridgwater, Invisalign dentist Somerset, refer patient for Invisalign, Invisalign provider Bridgwater, orthodontic referral Somerset, clear aligners Bridgwater, Invisalign Supernova Dental, Invisalign treatment referral, dental referral for Invisalign, Somerset orthodontics, orthodontic patient referral',
};

export default function InvisalignReferral() {
  return (
    <div className='min-h-screen flex  justify-center align-middle'>
      <div className='container mx-auto py-24 px-8'>
        <HighlightCard
          title='Invisalign Referral'
          description='Use the form below to refer your patient for Invisalign treatment with our experienced dental team at Supernova Dental.'
          logoSrc='/favicon.ico'
        />

        <div className='p-4 md:px-6 pb-10 flex flex-col justify-start mx-auto max-w-5xl md:max-w-6xl lg:max-w-7xl'>
          <BreadCrumb />

          <p className='text-md md:text-xl lg:text-2xl leading-tight text-center tracking-tight font-bold text-gold mt-4 mb-2'>
            Fill in the Invisalign referral form below
          </p>

          <InvisalignReferralFormContent />
        </div>
      </div>
    </div>
  );
}
