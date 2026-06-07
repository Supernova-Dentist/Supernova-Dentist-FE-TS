'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import denturesImage from '../../../../../public/assets/images/dentures-intro-bridgwater.webp';
import OverallGoogleRating from '../../OverallGoogleRating/OverallGoogleRating';

export default function DenturesIntro() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      className='flex flex-col lg:flex-row-reverse min-h-[50vh] my-auto items-center justify-center py-4'
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
        <OverallGoogleRating />

        <h2 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mt-8'>
          Dentures in Bridgwater, Somerset
        </h2>

        <p className='mt-4'>
          Looking for dentures in Bridgwater? We provide high-quality full and partial dentures designed to replace
          missing teeth and restore everyday function. Our experienced{' '}
          <Link href='/team' className='underline text-gold hover:text-lightGold'>
            dental team
          </Link>{' '}
          will guide you through the process from consultation to fitting, ensuring your dentures are comfortable,
          secure and natural-looking.
        </p>

        <Link href={`/enquiry?ref=${encodeURIComponent('general-dentistry/dentures')}`}>
          <Button className='mt-6 w-fit p-6'>Book Your Consultation</Button>
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
          src={denturesImage}
          alt='Dentures in Bridgwater, Somerset'
          width={1824}
          height={1216}
          quality={75}
          placeholder='blur'
          className='object-cover w-full h-full rounded-lg max-w-[40rem]'
        />
      </motion.div>
    </section>
  );
}
