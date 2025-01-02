import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { PricingAccordion } from './utils/PricingAccordion';
import { pricingItems } from './utils/pricingItems';
import { HighlightCard } from '@/components/HighlightCard/HighlightCard';
import MakeEnquirySection from './utils/MakeEnquirySection';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supernova Dental Pricing | Affordable Dental Care in Bridgwater, Somerset',
  description:
    'Discover affordable pricing options for dental services at Supernova Dental in Bridgwater, Somerset. Get the best dental care for you and your family.',
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

        <div className='px-4 md:px-6 pb-10 flex justify-start mx-auto max-w-3xl'>
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
