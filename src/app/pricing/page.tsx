import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import Link from 'next/link';
import { PricingAccordion } from './utils/PricingAccordion';
import { pricingItems } from './utils/pricingItems';

export default function Pricing() {
  return (
    <div className='min-h-screen flex bg-gradient-to-b from-white to-cream justify-center align-middle'>
      <div className='container mx-auto py-24 px-8'>
        <h1 className='text-4xl md:text-5xl text-gold font-bold text-center my-12 pt-6'>Price Guide</h1>
        <hr className='border-t-2 border-gold w-20 mx-auto mb-16' />
        <div className='px-4 md:px-6 pb-10 flex justify-start mx-auto  max-w-3xl  '>
          <BreadCrumb />
        </div>
        <p className='text-center text-lg md:text-xl mb-8'>
          Prices are subject to change and offers may be time-limited.
        </p>
        {/* <div className='max-w-6xl mx-auto'> */}
        <PricingAccordion pricingItems={pricingItems} />
        {/* </div> */}
        {/* <div className='text-center mt-16 py-12 md:py-18 lg:py-24'>
          <h2 className='text-2xl md:text-3xl text-gold font-semibold mb-6'>
            Have Questions or Need More Information?
          </h2>
          <p className='text-lg mb-12'>
            If you have any questions or need more details about our pricing plans, feel free to reach out to us.
            We&apos;re here to help!
          </p>
          <Link
            href={`/enquiry?ref=${encodeURIComponent('pricing')}`}
            className='bg-gold rounded-full px-6 py-3 text-md hover:bg-lightGold transition-all duration-150 text-gray-50'
          >
            Make an Enquiry
          </Link>
        </div> */}
      </div>
    </div>
  );
}
