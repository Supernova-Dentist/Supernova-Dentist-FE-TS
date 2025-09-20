'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

export default function JoinUsSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
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
        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-4 mt-6 lg:mt-0'>
          Interested in Working With Us?
        </h2>
        <p className='text-base md:text-lg'>
          Find out what roles we are actively hiring for to join our Bridgwater dental practice team. Even if we aren’t
          currently hiring, you can submit your details— we are always open to considering passionate individuals who
          want to strive to constantly improve the patient journey with us.
        </p>
        <Link href='/careers'>
          <Button className='mt-6 p-6'>View Careers</Button>
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
          src='/assets/images/supernova_team.jpg'
          alt='Supernova Dental team in Bridgwater, Somerset'
          width={600}
          height={800}
          layout='responsive'
          quality={100}
          className='object-contain h-auto w-auto max-w-[40rem] rounded-lg p-4'
        />
      </motion.div>
    </section>
  );
}
