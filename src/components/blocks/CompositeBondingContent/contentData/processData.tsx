'use client';

import { CompositeBondingTimeline } from '@/components/ServiceTimelines/CompositeBondingTimeline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface CompositeBondingProcessProps {
  id: string;
}

export function CompositeBondingProcess({ id }: CompositeBondingProcessProps) {
  const timelineData = [
    {
      title: 'Consultation & Smile Assessment',
      content: (
        <div className='px-12 py-8'>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            Your composite bonding journey begins with a consultation where we assess your teeth and discuss the changes
            you would like to make. This may include repairing chipped teeth, closing small gaps, or improving the shape
            and symmetry of your smile.
          </p>
          <Image
            src='/assets/images/composite-bonding-1.webp'
            alt='Composite bonding consultation and smile assessment'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4 rounded-xl'
          />
        </div>
      ),
    },
    {
      title: 'Smile Design & Tooth Preparation',
      content: (
        <div className='px-12 py-8'>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            Your dentist carefully plans the shape and appearance of your new smile. A tooth-coloured composite resin is
            selected to match your natural teeth. In most cases, little to no drilling is required, making composite
            bonding a minimally invasive cosmetic treatment.
          </p>
          <Image
            src='/assets/images/composite-bonding-2.webp'
            alt='Composite bonding smile design and preparation'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4 rounded-xl'
          />
        </div>
      ),
    },
    {
      title: 'Bonding & Final Polish',
      content: (
        <div className='px-12 py-8'>
          <p className='text-sm md:text-md lg:text-lg font-normal mb-8'>
            The composite resin is carefully applied, sculpted, and hardened using a special curing light. Your dentist
            then refines and polishes the bonding so it blends seamlessly with your natural teeth, creating a smooth,
            natural-looking finish.
          </p>
          <Image
            src='/assets/images/cosmetic-dentistry-supernova-dental-bridgwater.webp'
            alt='Composite bonding treatment and final smile results'
            width={100}
            height={800}
            layout='responsive'
            className='max-w-[30rem] mx-auto py-4 rounded-xl'
          />
        </div>
      ),
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className='w-full py-12 pt-24 '>
      <motion.div
        id={id}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-2xl md:text-3xl font-bold mb-8 text-center text-gold'>Your Composite Bonding Journey</h2>
        <hr className='border-t-2 border-gold w-20 mx-auto mb-8' />
        <p className='text-lg md:text-xl text-center max-w-[35rem] mx-auto'>
          Composite bonding is a simple and minimally invasive cosmetic dental treatment that can transform your smile
          in a single visit.
        </p>
        <CompositeBondingTimeline data={timelineData} />
      </motion.div>
    </section>
  );
}
