'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceBox from '../blocks/ServiceBox/ServiceBox';

export default function HeroSection({ data }: HeroSection) {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <section
      ref={ref}
      className='flex items-center justify-center w-full mx-auto py-20 md:py-32'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial state for the animation
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
        transition={{ duration: 0.5 }} // Duration of the animation
        className='mx-auto px-6 text-center '
      >
        <ServiceBox
          title={data.header.title}
          subTitle={data.header.subTitle}
          benefitText={data.benefitText}
          stats={data.serviceStats}
        />
      </motion.div>
    </section>
  );
}
