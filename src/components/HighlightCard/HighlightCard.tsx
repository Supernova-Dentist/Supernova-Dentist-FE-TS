'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

type HighlightCardProps = {
  title: string;
  description?: React.ReactNode;
  logoSrc?: string;
  gradient?: { from: string; to: string };
  className?: string;
};

export function HighlightCard({
  title,
  description,
  logoSrc,
  gradient = { from: 'from-lightGrey', to: 'to-grey' },
  className,
}: HighlightCardProps) {
  return (
    <motion.div
      className={cn('p-2 md:p-8 mb-6 md:mb-2', className)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className={cn(
          'max-w-5xl mx-auto p-6 md:p-10 rounded-xl md:rounded-2xl shadow-lg border border-gold',
          `bg-gradient-to-r ${gradient.from} ${gradient.to}`
        )}
      >
        {logoSrc && (
          <motion.div
            className='flex justify-center mb-4'
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Image src={logoSrc} alt='Supernova Dental Logo' width={80} height={80} className='rounded-full' />
          </motion.div>
        )}

        <motion.h1
          className='text-2xl md:text-4xl text-center tracking-tight font-bold text-gold max-w-[34rem] mx-auto mb-2 md:mb-4'
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.div
            className='text-white lg:text-lg mt-4 text-center font-medium max-w-none md:max-w-[34rem] mx-auto space-y-4 [&>p]:block [&>p]:mx-auto'
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
          >
            {description}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
