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
    <section ref={ref} id={id} className='py-12 px-4 md:py-20 lg:py-28 bg-gradient-to-b from-white to-cream'>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial state for the animation
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
        transition={{ duration: 0.5 }}
        className='container mx-auto'
      >
        <SectionTitle title={title} className='mb-4' />
        <hr className='border-t-2 border-gold w-20 mx-auto mt-4 mb-8' />
        <p className='mb-10 text-lg px-4 md:px-6 max-w-[720px] mx-auto text-left'>{description}</p>
        <div className='overflow-x-auto max-w-[52rem] mx-auto'>
          <ComparisonTable data={content} />
        </div>
      </motion.div>
    </section>
  );
}
