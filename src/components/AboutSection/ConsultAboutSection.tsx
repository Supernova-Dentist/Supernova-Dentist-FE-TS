'use client';

import { Button } from '@/components/ui/button';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import cosmeticImage from '../../../public/assets/images/cosmetic-dentistry-supernova-dental-bridgwater.webp';
import OverallGoogleRating from '../blocks/OverallGoogleRating/OverallGoogleRating';

export default function ConsultAboutSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className='flex flex-col items-center justify-center py-8 lg:py-16' ref={ref}>
      <OverallGoogleRating />
      <div className='flex flex-col items-center justify-center lg:flex-row-reverse'>
        {/* TEXT */}
        <motion.div
          className='flex w-full max-w-prose flex-col items-center p-6 text-center md:px-16 md:pb-6 lg:w-1/2 lg:items-start lg:text-left'
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <p className='text-sm uppercase tracking-[0.3em] text-gold'>Private Cosmetic Dentistry in Bridgwater</p>

          <h2 className='mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl'>
            A Personalised Approach to Your New Smile
          </h2>

          <p className='mt-6 text-gray-700'>
            At Supernova Dental, we design natural-looking cosmetic smiles using advanced digital dentistry and
            aesthetic precision. Every treatment is planned around your face, your goals, and how you want to feel when
            you smile.
          </p>

          <p className='mt-4 text-gray-700'>
            Whether you&apos;re considering subtle improvements or a full smile transformation, your journey always
            begins with a private consultation at our Bridgwater clinic. We’ll assess your smile, discuss your options,
            and create a tailored treatment plan with no pressure.
          </p>

          <div className='mt-6 flex flex-col items-center gap-4 text-center'>
            <Button onClick={scrollToPromotionForm} className='w-fit bg-gold p-6 text-white hover:bg-lightGold'>
              Check Availability
            </Button>

            <p className='text-sm text-gray-500'>
              Consultation request | No obligation | Private cosmetic assessments in Bridgwater
            </p>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className='flex w-full justify-center lg:w-1/2'
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
        >
          <div className='relative w-full max-w-[32rem] overflow-hidden rounded-2xl shadow-xl'>
            <Image
              src={cosmeticImage}
              alt='Supernova Dental cosmetic dentistry in Bridgwater Somerset'
              width={1824}
              height={1216}
              quality={80}
              placeholder='blur'
              className='h-[30rem] w-full object-cover aspect-square'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
