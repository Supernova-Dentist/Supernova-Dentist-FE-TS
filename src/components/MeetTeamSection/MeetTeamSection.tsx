'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import OverallGoogleRating from '../blocks/OverallGoogleRating/OverallGoogleRating';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function MeetTeamSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <section
      className='flex flex-col lg:flex-row bg-gradient-to-b from-white to-cream items-center justify-center lg:py-16'
      ref={ref}
    >
      {/* Text Section */}
      <motion.div
        className='w-full lg:w-1/2 p-4 max-w-prose md:p-12 flex flex-col items-center text-center lg:text-left'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mt-8'>Meet the Team</h2>
        <p className='mt-4'>
          Come and meet our friendly and professional team at Supernova Dental. We are dedicated to providing the
          highest standard of dental care in Bridgewater. Our team is here to ensure you have a comfortable and
          exceptional experience.
        </p>
        <Link href='/team'>
          <Button className='mt-6 w-fit p-6'>View Team</Button>
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
          src='/assets/images/team.jpeg'
          alt='Meet the Team'
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
