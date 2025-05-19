'use client';
import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export function ReferAFriendContainerTextFlip() {
  const words = ['General Dentistry', 'Cosmetic Dentistry', 'Restorative Dentistry', 'Implants', 'Invisalign'];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
       "relative inline-block rounded-lg pt-2 pb-3 text-center text-4xl font-bold text-black md:text-7xl dark:text-white",
        "[background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)]",
        "shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db]",
        "dark:[background:linear-gradient(to_bottom,#374151,#1f2937)]",
        "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]",
      )}
      layout
    >
      <div className='inline-block max-w-[56rem]'>
        <p className='text-6xl'> Refer a Friend and earn credit for</p> <ContainerTextFlip textClassName='text-6xl' words={words} />
        {/* <Blips /> */}
      </div>
    </motion.h1>
  );
}
