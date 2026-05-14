'use client';

import { Button } from '@/components/ui/button';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import dentalImage from '../../../public/assets/images/scott-patient.jpg';
import OverallGoogleRating from '../blocks/OverallGoogleRating/OverallGoogleRating';

export default function GeneralAboutSection() {
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
          <p className='text-sm uppercase tracking-[0.3em] text-gold'>Private Dentistry in Bridgwater</p>

          <h2 className='mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl'>
            A Personalised Approach to Your Dental Care
          </h2>

          <p className='mt-6 text-gray-700'>
            At Supernova Dental, we provide modern, patient-focused dentistry using advanced digital technology and a
            gentle, precise approach. Everything we do is centred around your comfort, your oral health, and your
            long-term dental wellbeing.
          </p>

          <p className='mt-4 text-gray-700'>
            Whether you need a routine check-up, help with a specific concern, or are simply looking for a trusted
            dental team, your journey always begins with a consultation at our Bridgwater clinic. We’ll assess your
            needs, explain your options clearly, and recommend the right care for you with no pressure.
          </p>

          <div className='mt-6 flex flex-col items-center gap-4 text-center'>
            <Button onClick={scrollToPromotionForm} className='w-fit bg-gold p-6 text-white hover:bg-lightGold'>
              Check Availability
            </Button>

            <p className='text-sm text-gray-500'>
              Consultation request | No obligation | Private dental appointments in Bridgwater
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
              src={dentalImage}
              alt='Supernova Dental private dentistry practice in Bridgwater Somerset'
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
