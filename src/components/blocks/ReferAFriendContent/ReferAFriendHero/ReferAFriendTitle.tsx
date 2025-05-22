'use client';

import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export function ReferAFriendContainerTextFlip() {
  const words = ['General Dentistry', 'Cosmetic Dentistry', 'Restorative Dentistry', 'Implants', 'Invisalign'];
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  // On mount, measure max height of all words rendered hidden
  useEffect(() => {
    if (!containerRef.current) return;

    // Create offscreen div to measure heights
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.visibility = 'hidden';
    tempDiv.style.height = 'auto';
    tempDiv.style.whiteSpace = 'nowrap';
    tempDiv.style.fontSize = 'inherit';
    tempDiv.style.fontWeight = 'inherit';
    tempDiv.style.lineHeight = 'inherit';
    tempDiv.style.padding = '0';
    tempDiv.style.margin = '0';

    document.body.appendChild(tempDiv);

    let maxH = 0;
    words.forEach((word) => {
      tempDiv.innerText = word;
      const h = tempDiv.offsetHeight;
      if (h > maxH) maxH = h;
    });

    document.body.removeChild(tempDiv);
    setMaxHeight(maxH);
  }, [words]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'flex flex-col items-center justify-center mb-2',
        'relative w-full max-w-[56rem] rounded-2xl px-6 py-6 text-center text-white',
        'bg-[linear-gradient(to_bottom,var(--grey),var(--light-grey))]',
        'shadow-[inset_0_0_0_1px_var(--gold),inset_0_1px_2px_0_var(--lightGold),0_4px_8px_rgba(0,0,0,0.5)]'
      )}
      style={{ minHeight: maxHeight ? maxHeight + 24 /* extra padding for flips */ : undefined }}
    >
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} layout className='w-full font-bold text-center'>
        <p className='text-lg md:text-2xl lg:text-4xl xl:text-6xl'>
          Refer A Friend <br />& Earn Credit For
        </p>
        <ContainerTextFlip
          words={words}
          textClassName='text-lg md:text-2xl lg:text-4xl xl:text-6xl leading-[1.1] will-change-transform antialiased flex items-center justify-center'
          className='mt-4'
        />
      </motion.div>
     
    </div>
  );
}
