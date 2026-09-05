'use client';

import ComparisonTable from '@/components/ComparisonTable/ComparisonTable';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ComparisonSection({ data, id }: ComparisonSection) {
  const { title, description, content } = data;

  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <section ref={ref} id={id} className='service-comparison bg-ivory px-4 py-14 md:py-20 lg:py-28'>
      <motion.div
        initial={{ opacity: 0.94, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.94, y: 12 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className='container mx-auto'
      >
        <SectionTitle title={title} className='mb-4' />
        <hr className='mx-auto mb-8 mt-5 w-16 border-t border-champagne' />
        <p className='mx-auto mb-10 max-w-[720px] px-4 text-pretty text-center text-lg leading-8 text-taupe md:px-6'>{description}</p>
        <div className='mx-auto max-w-[52rem] overflow-x-auto rounded-[1.25rem] bg-porcelain shadow-[0_16px_45px_rgba(11,18,24,0.08)]'>
          <ComparisonTable data={content} />
        </div>
      </motion.div>
    </section>
  );
}
