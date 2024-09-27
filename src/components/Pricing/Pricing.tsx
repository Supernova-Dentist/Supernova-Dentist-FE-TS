'use client';

import Image from 'next/image';
import { useState } from 'react';
import PricingCards from './PricingCards';
import PricingTabs from './PricingTabs';

export default function Pricing() {
  const [monthly, setMonthly] = useState(true);

  return (
    <section className='py-12 md:py-24 lg:py-32 mx-auto text-gray-900 my-20 bg-gradient-to-b from-white to-cream'>
      <div className='flex justify-center flex-col items-center'>
      <div className='rounded-xl bg-grey px-4 py-1 text-sm text-gray-50'>Opening Offers</div>
        <h1 className='text-4xl lg:text-5xl font-semibold text-center max-w-[500px] mt-4 mb-8'>
          Don&apos;t miss out on huge savings!
        </h1>
        <hr className='border-t-2 border-grey w-20 mx-auto mt-2 mb-8' />
        {/* <PricingTabs setMonthly={setMonthly} monthly={monthly} /> */}
        
      </div>
      <div className='flex justify-center w-full max-xl:overflow-auto pb-10'>
        <PricingCards monthly={monthly} />
      </div>
    </section>
  );
}
