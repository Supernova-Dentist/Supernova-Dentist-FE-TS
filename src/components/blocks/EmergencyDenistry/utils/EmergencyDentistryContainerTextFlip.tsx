'use client';

import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function EmergencyDentistryContainerTextFlip() {
  const words = [
    'Same-Day Emergency Appointments',
    'Toothache Relief',
    'Broken Tooth Repairs',
    'Swelling & Infection Treatment',
    'Lost Filling Fixes',
    'Saturday Appointments',
    'Emergency Dental Services',
  ];

  const [resizeKey, setResizeKey] = useState(0);

  useEffect(() => {
    function handleResize() {
      setResizeKey((prev) => prev + 1);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='flex flex-col items-center gap-4 px-4'>
      {/* Chip tab */}
      <div className='bg-grey text-white text-sm md:text-base px-4 py-2 rounded-full shadow-md'>
        Emergency Dentistry in Bridgwater
      </div>

      {/* Main banner */}
      <div
        key={resizeKey}
        className={cn(
          'flex flex-col items-center justify-center mb-2',
          'relative inline-block rounded-2xl px-6 py-6 text-center text-white max-w-[56rem]',
          'bg-[linear-gradient(to_bottom,var(--grey),var(--light-grey))]',
          'shadow-[inset_0_0_0_1px_var(--gold),inset_0_1px_2px_0_var(--lightGold),0_4px_8px_rgba(0,0,0,0.5)]'
        )}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          layout
          className='inline-block max-w-[56rem] font-bold'
        >
          <p className='text-lg md:text-lg lg:text-2xl xl:text-4xl leading-tight'>Supernova Dental proudly offers</p>
          <ContainerTextFlip
            words={words}
            textClassName='text-lg md:text-lg lg:text-2xl xl:text-4xl leading-[1.1] will-change-transform antialiased flex items-center justify-center'
            className='mt-4'
          />
        </motion.h1>
      </div>
    </div>
  );
}
