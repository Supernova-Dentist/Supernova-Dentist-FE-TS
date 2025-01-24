import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { PricingAccordion } from './utils/PricingAccordion';
import { pricingItems } from './utils/pricingItems';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import MakeEnquirySection from './utils/MakeEnquirySection';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invisalign Pricing & Affordable Dental Care | Supernova Dental Bridgwater, Somerset',
  description:
    'Explore affordable Invisalign pricing and dental care options at Supernova Dental in Bridgwater, Somerset. Get clear aligners, consultations, and personalised treatment plans tailored to your needs.',
  keywords:
    'Invisalign pricing, dental pricing Bridgwater, affordable Invisalign, clear aligners Somerset, Invisalign consultation Bridgwater, Invisalign costs, dentist Bridgwater, dental care Somerset, affordable dental care, Supernova Dental pricing, orthodontics Somerset, teeth straightening Bridgwater, Invisalign treatment Bridgwater',
};

export default function Pricing() {
  return (
    <div className='min-h-screen flex bg-gradient-to-b from-white to-cream justify-center align-middle'>
      <div className='container mx-auto py-24 px-8'>
        <HighlightCard
          title='Price Guide'
          description='Prices are subject to change and offers may be time-limited.'
          logoSrc='/favicon.ico'
        />

        <div className='p-4 md:px-6 pb-10 flex justify-start mx-auto max-w-3xl'>
          <BreadCrumb />
        </div>

        {/* Pricing Accordion with motion animation */}

        <PricingAccordion pricingItems={pricingItems} />

        {/* Make an Enquiry Section with motion animation */}
        <MakeEnquirySection />
      </div>
    </div>
  );
}
