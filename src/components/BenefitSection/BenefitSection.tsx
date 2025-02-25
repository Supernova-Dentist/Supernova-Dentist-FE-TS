'use client';

import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ServiceBenefit from '@/components/ServiceBenefit/ServiceBenefit';
import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function BenefitSection({ data, id }: BenefitSection) {
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
        transition={{ duration: 0.5 }} // Duration of the animation
        className='container mx-auto px-4 md:px-6'
      >
        <SectionTitle title={title} />
        <hr className='border-t-2 border-gold w-20 mx-auto mt-4 mb-8' />
        <div className='flex justify-center'>
          <p className='mt-4 mb-6 text-lg max-w-[720px]'>{description}</p>
        </div>
        <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {content.map(({ id, icon, header, text }) => (
            <React.Fragment key={id}>
              <ServiceBenefit icon={icon} header={header} text={text} />
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
