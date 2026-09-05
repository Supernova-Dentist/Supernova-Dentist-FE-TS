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
    <section id={id} ref={ref} className='service-faq w-full bg-porcelain px-4 py-14 text-obsidian md:px-8 md:py-20'>
      <div className='px-4 md:px-6 w-full'>
        <motion.div
          className='flex flex-col items-center space-y-6 text-center'
          initial={{ opacity: 0.94, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.94, y: 12 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <div className='space-y-2'>
            <h2 className='pb-2 text-balance text-3xl leading-tight md:text-4xl lg:text-5xl'>
              Frequently Asked Questions
            </h2>
            <hr className='mx-auto mb-8 mt-4 w-16 border-t border-champagne' />
            <motion.div
              className='service-faq-list w-full max-w-3xl rounded-[1.25rem] border border-stone bg-ivory p-5 text-left shadow-[0_16px_45px_rgba(11,18,24,0.08)] sm:p-7'
              initial={{ opacity: 0.96 }}
              animate={inView ? { opacity: 1 } : { opacity: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              <FAQ faqItems={faqItems} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
