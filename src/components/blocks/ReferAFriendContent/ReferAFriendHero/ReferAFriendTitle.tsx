'use client';

import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export function ReferAFriendContainerTextFlip() {
  const words = ['General Dentistry', 'Cosmetic Dentistry', 'Restorative Dentistry', 'Implants', 'Invisalign'];

  return (
    <div
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
        className='inline-block max-w-[56rem] text-4xl font-bold md:text-7xl '
      >
        <p className='text-lg md:text-2xl lg:text-4xl'>
          Refer A Friend <br />& Earn Credit For
        </p>
        <ContainerTextFlip
          words={words}
          textClassName='text-lg md:text-2xl lg:text-4xl leading-[1.1] will-change-transform antialiased flex items-center justify-center'
          className='mt-4'
        />
      </motion.h1>
    </div>
  );
}
