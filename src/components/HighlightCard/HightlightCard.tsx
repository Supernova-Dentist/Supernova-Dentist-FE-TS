'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type HighlightCardProps = {
  title: string;
  description: string;
  logoSrc?: string; // Optional logo
  gradient?: { from: string; to: string }; // Custom gradient colors
  className?: string; // Additional styles
};

export function HighlightCard({
  title,
  description,
  logoSrc,
  gradient = { from: 'from-lightGrey', to: 'to-grey' }, // Default light gradient
  className,
}: HighlightCardProps) {
  return (
    <motion.div
      className={cn('px-8', className)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className={cn(
          'max-w-5xl mx-auto p-10 rounded-lg shadow-lg border border-gold',
          `bg-gradient-to-r ${gradient.from} ${gradient.to}`
        )}
      >
        {logoSrc && (
          <motion.div
            className='flex justify-center mb-4'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Image src={logoSrc} alt='Supernova Dental Logo' width={80} height={80} className='rounded-full' />
          </motion.div>
        )}
        <motion.h4
          className='text-4xl lg:text-5xl leading-tight text-center tracking-tight font-bold text-gold'
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
        >
          {title}
        </motion.h4>
        <motion.p
          className='text-white lg:text-lg mt-4 text-center font-medium'
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
