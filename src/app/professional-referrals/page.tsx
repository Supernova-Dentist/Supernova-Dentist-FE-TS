import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import { type Metadata } from 'next';
import { ReferralOutlineCards } from '@/components/OutlineCards/ReferralOutlineCards';

export const metadata: Metadata = {
  title: 'Professional Referrals | Supernova Dental in Bridgwater, Somerset',
  description:
    'Refer your patients to Supernova Dental for expert care in Implants, Oral Surgery, CBCT/OPG imaging, and Invisalign. Trusted by professionals across Somerset, our referral process is quick and seamless.',
  keywords:
    'dental referral Bridgwater, professional dental referral, refer patient to dentist, implant referral Somerset, CBCT referral Bridgwater, oral surgery referral, Invisalign dentist Somerset, Supernova Dental referrals, dental specialist referral, Bridgwater endodontist, Somerset dental imaging',
};

export default function ReferralForm() {
  return (
    <div className='min-h-screen flex bg-gradient-to-b from-white to-cream justify-center align-middle'>
      <div className='container mx-auto py-24 px-8'>
        <HighlightCard
          title='Professional Referrals'
          description='Please select the type of referral below. You’ll be taken to the appropriate form for your patient.'
          logoSrc='/favicon.ico'
        />

        <div className='p-4 md:px-6 pb-10 flex flex-col justify-start mx-auto max-w-5xl md:max-w-6xl lg:max-w-7xl'>
          <BreadCrumb />

          <h2 className='text-md md:text-xl lg:text-2xl leading-tight text-center tracking-tight font-bold text-gold mt-4'>We currently accept referrals for:</h2>

          {/* Renders 4 outline-style buttons linking to each referral page */}
          <ReferralOutlineCards />
        </div>
      </div>
    </div>
  );
}
