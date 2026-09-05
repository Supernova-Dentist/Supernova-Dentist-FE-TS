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
    <section ref={ref} id={id} className='service-benefits bg-ivory px-4 py-14 md:py-20 lg:py-28'>
      <motion.div
        initial={{ opacity: 0.94, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.94, y: 12 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className='container mx-auto px-4 md:px-6'
      >
        <SectionTitle title={title} />
        <hr className='mx-auto mb-8 mt-5 w-16 border-t border-champagne' />
        <div className='flex justify-center'>
          <p className='mb-6 mt-4 max-w-[720px] text-pretty text-center text-lg leading-8 text-taupe'>{description}</p>
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
