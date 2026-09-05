'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import compositeBondingImage from '../../../../../public/assets/images/cosmetic-dentistry-supernova-dental-bridgwater.webp';
import OverallGoogleRating from '../../OverallGoogleRating/OverallGoogleRating';

export default function CompositeBondingIntroSection() {
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
      className='flex flex-col lg:flex-row-reverse min-h-[65vh] my-auto items-center justify-center py-4'
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
          Professional Composite Bonding in Bridgwater, Somerset
        </h2>
        <p className='mt-4'>
          Enhance your smile with minimally invasive composite bonding at Supernova Dental. Our experienced{' '}
          <Link href='/team' className='underline text-gold hover:text-lightGold'>
            dental team
          </Link>{' '}
          carefully repairs chipped teeth, closes small gaps, and improves tooth shape to create a natural-looking,
          radiant smile.
        </p>
        <Link href={`/enquiry?ref=${encodeURIComponent('cosmetic-dentistry/composite-bonding')}`}>
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
          src={compositeBondingImage}
          alt='Composite Bonding Treatment in Bridgwater, Somerset'
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
