'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <section className='flex flex-col lg:flex-row bg-white items-center justify-center py-2 md:py-6' ref={ref}>
      {/* Text Section */}
      <motion.div
        className='w-full lg:w-1/2 p-4 max-w-prose md:p-12 flex flex-col items-center text-center lg:text-left'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-4 mt-6 lg:mt-0'>Meet the Team</h2>
        <p className='text-base md:text-lg'>
          Get to know the passionate professionals behind Supernova Dental. Our friendly Bridgwater-based team is here
          to support you on your journey to a healthier, more confident Supernova smile - from your first visit to your
          final results.
        </p>
        <Link href='/team'>
          <Button className='mt-6 p-6'>Meet Our Team</Button>
        </Link>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className='flex justify-center'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
      >
        <Image
          src='/assets/images/staff_1.jpg'
          alt='About Us'
          width={600}
          height={800}
          layout={'responsive'}
          quality={100}
          className='object-contain h-auto w-auto max-w-[40rem] rounded-lg p-4'
        />
      </motion.div>
    </section>
  );
}
