import Link from 'next/link';
import { PricingAccordion } from './utils/PricingAccordion';
import { pricingItems } from './utils/pricingItems';

export default function Pricing() {
  return (
    <div className='min-h-screen flex bg-lightGrey'>
      <div className='container mx-auto py-24 px-8'>
        <h1 className='text-4xl md:text-5xl text-gold font-bold text-center mb-12'>Our Pricing Plans</h1>
        <hr className='border-t-2 border-gold w-20 mx-auto mb-16' />
        <div className='max-w-4xl mx-auto'>
          <PricingAccordion pricingItems={pricingItems} />
        </div>
        <div className='text-center mt-16 py-12 md:py-18 lg:py-24'>
          <h2 className='text-2xl md:text-3xl text-gold font-semibold mb-6'>
            Have Questions or Need More Information?
          </h2>
          <p className='text-lg text-cream mb-10'>
            If you have any questions or need more details about our pricing plans, feel free to reach out to us.
            We&apos;re here to help!
          </p>
          <Link
            href={`/enquiry?ref=${encodeURIComponent('pricing')}`}
            className='bg-gold rounded-full px-6 py-3 text-md hover:bg-lightGold transition-all duration-150 text-gray-50'
          >
            Make an Enquiry
          </Link>
        </div>
      </div>
    </div>
  );
}
