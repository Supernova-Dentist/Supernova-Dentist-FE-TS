'use client';

import { Button } from '@/components/ui/button';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import cbctImage from '../../../../../public/assets/images/dental-implants-supernova-dental-bridgwater.webp';
import OverallGoogleRating from '../../../blocks/OverallGoogleRating/OverallGoogleRating';
import practiceExteriorImage from '../../../public/assets/images/supernova-dental-practice-exterior-bridgwater.webp';

export default function DentalImplantsIntroSection() {
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
          Dental Implants designed to help you get a long-lasting smile
        </h2>
        <p className='mt-4'>
          At Supernova Dental we offer advanced dental implant treatments to restore your smile and your confidence.
          Whether you need a single-tooth implant or a full-arch solution like All-on-4/6, our experienced
          implantologist provides personalised care using modern techniques to deliver strong, natural-looking results
          that can last for many years.
        </p>
        <Link href={`/enquiry?ref=${encodeURIComponent('cosmetic-dentistry/dental-implants')}`}>
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
          src={cbctImage}
          alt='Dental Implants in Bridgwater, Somerset'
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
