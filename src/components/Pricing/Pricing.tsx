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
        <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold text-center max-w-[500px] mb-8'>
          Opening Offers
        </h1>
        <PricingTabs setMonthly={setMonthly} monthly={monthly} />
        
      </div>
      <div className='flex justify-center w-full max-xl:overflow-auto pb-10'>
        <PricingCards monthly={monthly} />
      </div>
    </section>
  );
}
