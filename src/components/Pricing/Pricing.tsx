'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import PricingCards from './PricingCards';
import PricingTabs from './PricingTabs';
import { useInView } from 'react-intersection-observer';

export default function Pricing() {
  const [monthly, setMonthly] = useState(true);

  const { ref, inView } = useInView({
    threshold: 0.025, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <section
      id='offers'
      ref={ref}
      className='py-12 md:py-24 lg:py-32 mx-auto text-gray-900 bg-gradient-to-b from-white to-cream'
    >
      <motion.div
        className='flex justify-center flex-col items-center'
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div className='rounded-xl bg-grey px-4 py-1 text-sm text-gray-50'>Opening Offers</div>
        <h1 className='text-4xl lg:text-5xl font-semibold text-center max-w-[500px] mt-4 mb-8'>
          Don&apos;t miss out on huge savings!
        </h1>
        <hr className='border-t-2 border-grey w-20 mx-auto mt-2 mb-8' />
        {/* Uncomment if you want to use the tabs */}
        {/* <PricingTabs setMonthly={setMonthly} monthly={monthly} /> */}
      </motion.div>
      <div className='flex justify-center w-full max-xl:overflow-auto pb-10'>
        <PricingCards monthly={monthly} />
      </div>
    </section>
  );
}
