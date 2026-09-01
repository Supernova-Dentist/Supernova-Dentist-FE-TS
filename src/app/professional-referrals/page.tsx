import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import { ReferralOutlineCards } from '@/components/OutlineCards/ReferralOutlineCards';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Referral Form | Bridgwater Dentist | Supernova Dental',
  description:
    'Refer patients to Supernova Dental in Bridgwater for expert implants, oral surgery, CBCT/OPG imaging and Invisalign with a fast, simple referral process.',
  alternates: { canonical: '/professional-referrals' },
  keywords:
    'dental referral Bridgwater, patient referral Somerset, dental referral form, refer patient to dentist, implant referral Somerset, oral surgery referral, CBCT referral Bridgwater, OPG referral Somerset, Invisalign referral, Supernova Dental referrals, dental specialist referral',
};

export default function ReferralForm() {
  return (
    <div className='min-h-screen flex  justify-center align-middle'>
      <div className='container mx-auto py-24 px-8'>
        <HighlightCard
          title='Professional Referrals'
          description='Select the type of referral below to submit your patient to the appropriate service at Supernova Dental.'
          logoSrc='/favicon.ico'
        />

        <div className='p-4 md:px-6 pb-10 flex flex-col justify-start mx-auto max-w-5xl md:max-w-6xl lg:max-w-7xl'>
          <BreadCrumb />

          <h2 className='text-md md:text-xl lg:text-2xl leading-tight text-center tracking-tight font-bold text-gold mt-4'>
            We currently accept referrals for:
          </h2>

          {/* Renders outline-style cards linking to each referral page */}
          <ReferralOutlineCards />
        </div>
      </div>
    </div>
  );
}
