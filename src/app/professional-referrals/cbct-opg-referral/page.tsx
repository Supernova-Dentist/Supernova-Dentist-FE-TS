import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import { type Metadata } from 'next';
import { CBCTOPGReferralFormContent } from './utils/cbct-opg-referral-form-content';

export const metadata: Metadata = {
  title: 'CBCT & OPG Referral | Bridgwater | Supernova Dental ',
  description:
    'Refer patients to Supernova Dental in Bridgwater for CBCT and OPG dental imaging. Fast turnaround, accurate reports and simple digital referrals for dentists.',
  keywords:
    'CBCT referral Bridgwater, OPG referral Somerset, dental imaging referral, 3D dental scan Bridgwater, dental CT scan Somerset, professional dental referral, Supernova Dental CBCT, CBCT OPG Bridgwater, dental radiography referral, dentist imaging Somerset',
};

export default function CBCTOPGReferral() {
  return (
    <div className='min-h-screen flex  justify-center align-middle'>
      <div className='container mx-auto py-24 px-8'>
        <HighlightCard
          title='CBCT & OPG Referral'
          description='Complete the referral form below to refer your patient for CBCT or OPG imaging at Supernova Dental.'
          logoSrc='/favicon.ico'
        />

        <div className='p-4 md:px-6 pb-10 flex flex-col justify-start mx-auto max-w-5xl md:max-w-6xl lg:max-w-7xl'>
          <BreadCrumb />

          <p className='text-md md:text-xl lg:text-2xl leading-tight text-center tracking-tight font-bold text-gold mt-4 mb-2'>
            Please fill in the CBCT/OPG form below
          </p>

          <CBCTOPGReferralFormContent />
        </div>
      </div>
    </div>
  );
}
