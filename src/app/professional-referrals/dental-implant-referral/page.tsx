import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import { type Metadata } from 'next';
import { ImplantReferralFormContent } from './utils/implant-form-content';

export const metadata: Metadata = {
  title: 'Dental Implant Referral in Bridgwater | Supernova Dental',
  description:
    'Refer patients for dental implants at Supernova Dental in Bridgwater. Implant care, advanced techniques and a simple referral process for restoring smiles.',
  alternates: { canonical: '/professional-referrals/dental-implant-referral' },
  keywords:
    'dental implant referral Bridgwater, implant dentist Somerset, refer patient for dental implants, implantology referral Somerset, Supernova Dental implants, dental restoration referral, missing teeth Bridgwater, tooth replacement Somerset, implant referral dentist, implant treatment Bridgwater',
};

export default function ImplantReferral() {
  return (
    <div className='min-h-screen flex  justify-center align-middle'>
      <div className='container mx-auto py-24 px-8'>
        <h1 className='sr-only'>Dental Implant Referral</h1>
        <HighlightCard
          title='Dental Implant Referral'
          description='Complete the referral form below to refer your patient for dental implant treatment at Supernova Dental.'
          logoSrc='/favicon.ico'
        />

        <div className='p-4 md:px-6 pb-10 flex flex-col justify-start mx-auto max-w-5xl md:max-w-6xl lg:max-w-7xl'>
          <BreadCrumb />

          <p className='text-md md:text-xl lg:text-2xl leading-tight text-center tracking-tight font-bold text-gold mt-4 mb-2'>
            Please fill in the Implant referral form below
          </p>

          <ImplantReferralFormContent />
        </div>
      </div>
    </div>
  );
}
