'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import membershipPlansImage from '../../../../../public/assets/images/supernova-dental-bridgwater-reception-new-patients.webp';
import OverallGoogleRating from '../../OverallGoogleRating/OverallGoogleRating';

export default function MembershipPlansIntroSection() {
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
      className='flex flex-col lg:flex-row-reverse min-h-[65vh] my-auto items-center justify-center pb-4'
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
          Dental Membership Plans in Bridgwater, Somerset
        </h2>

        <p className='mt-4'>
          Looking for an affordable way to manage your dental care? Our dental membership plans at Supernova Dental
          provide a simple and convenient way to stay on top of your oral health, with regular appointments and
          essential dental care included for a monthly fee.
        </p>

        <p className='mt-4'>
          We offer membership options for both adults and children, helping you maintain regular dental check-ups and
          hygiene care while providing additional peace of mind with emergency dental cover. Our plans are designed to
          make looking after your teeth straightforward and predictable.
        </p>

        <Link href={`/enquiry?ref=${encodeURIComponent('general-dentistry/dental-membership-plans')}`}>
          <Button className='mt-6 w-fit p-6'>Ask About Our Membership Plans</Button>
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
          src={membershipPlansImage}
          alt='Dental membership plans at Supernova Dental in Bridgwater, Somerset'
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
