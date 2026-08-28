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
      className={cn('service-highlight mb-6 p-2 md:mb-2 md:p-8', className)}
      initial={{ opacity: 0.92, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      <motion.div
        className={cn(
          'mx-auto max-w-5xl rounded-[1.5rem] border border-champagne/35 p-6 shadow-[0_20px_60px_rgba(11,18,24,0.12)] md:p-10',
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

        <motion.h2
          className='mx-auto mb-2 max-w-[38rem] text-balance text-center text-3xl leading-tight text-champagne md:mb-4 md:text-5xl'
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
        >
          {title}
        </motion.h2>
        {description && (
          <motion.div
            className='mx-auto mt-4 max-w-none space-y-4 text-pretty text-center leading-7 text-ivory/80 md:max-w-[38rem] lg:text-lg [&>p]:mx-auto [&>p]:block'
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
