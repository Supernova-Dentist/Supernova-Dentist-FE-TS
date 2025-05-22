'use client';

import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function ReferAFriendContainerTextFlip() {
  const words = ['General Dentistry', 'Cosmetic Dentistry', 'Restorative Dentistry', 'Implants', 'Invisalign'];

  // This state tracks a "key" that changes on resize, forcing remount
  const [resizeKey, setResizeKey] = useState(0);

  useEffect(() => {
    function handleResize() {
      setResizeKey((prev) => prev + 1); // Increment key to remount component
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    // Use the key prop to force React to remount this whole subtree
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
        <p className='text-lg md:text-2xl lg:text-4xl xl:text-6xl'>
          Refer A Friend <br />& Earn Credit For
        </p>
        <ContainerTextFlip
          words={words}
          textClassName='text-lg md:text-2xl lg:text-4xl xl:text-6xl leading-[1.1] will-change-transform antialiased flex items-center justify-center'
          className='mt-4'
        />
      </motion.h1>
    </div>
  );
}
