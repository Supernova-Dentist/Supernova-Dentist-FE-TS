'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function PromotionFooter() {
  const { ref, inView } = useInView({
    threshold: 0.7, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // Initial state for the animation
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate in
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <footer className='w-full p-6 sm:px-10 bg-grey text-cream text-sm'>
        <div className='flex justify-between flex-col lg:flex-row items-center gap-1'>
          <span className='text-center lg:text-left'>
            This practice is fully private with no NHS services available.
          </span>
          <div className='flex items-center gap-2 flex-col-reverse sm:flex-row'>
            <span>&copy; Supernova Dental 2024</span>
            <span className='hidden sm:block'>|</span>
            <span>Website last updated: November 2024</span>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
