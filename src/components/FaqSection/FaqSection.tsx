'use client';

import FAQ from '@/components/FAQ/FAQ';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FaqSection({ faqItems, id }: { faqItems: any; id: string }) {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <section
      id={id}
      ref={ref}
      className='w-full py-12 md:py-24 lg:py-32 text-gray-900 bg-gradient-to-b from-cream to-white'
    >
      <div className='px-4 md:px-6 w-full'>
        <motion.div
          className='flex flex-col items-center space-y-6 text-center'
          initial={{ opacity: 0, y: 20 }} // Initial state for the animation
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          <div className='space-y-2'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter pb-6'>
              Frequently Asked Questions
            </h2>
            <hr className='border-t-2 border-grey w-20 mx-auto mt-4 pb-8' />
            <motion.div
              className='w-full max-w-2xl shadow-lg rounded-lg p-6'
              initial={{ opacity: 0 }} // Initial state for the FAQ container
              animate={inView ? { opacity: 1 } : { opacity: 0 }} // Animate in
              transition={{ duration: 0.5, delay: 0.2 }} // Delay for the FAQ container
            >
              <FAQ faqItems={faqItems} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
