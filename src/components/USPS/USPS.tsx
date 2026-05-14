'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, CreditCard, LucideSmile, Sparkles } from 'lucide-react';

export default function USPS() {
  const usps = [
    {
      title: 'Complete Smile Journey Under One Roof',
      icon: Sparkles,
    },
    {
      title: '5 Star Rated On Google',
      icon: BadgeCheck,
    },
    {
      title: 'Advanced Digital Smile Design',
      icon: LucideSmile,
    },
    {
      title: 'Flexible Finance Options',
      icon: CreditCard,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='w-[32rem] max-w-full lg:w-full lg:pt-40 mx-auto'
    >
      <div className='mx-auto max-w-7xl border-y border-gray-200 px-4 py-8'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            const isLast = index === usps.length - 1;

            return (
              <div
                key={usp.title}
                className={`
                  relative grid grid-cols-[40px_1fr] items-start gap-3 text-left
                  ${!isLast ? 'lg:border-r lg:border-gray-200 lg:pr-6' : ''}
                `}
              >
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shrink-0'>
                  <Icon size={22} strokeWidth={1.75} />
                </div>

                <h3 className='text-md font-medium tracking-tight text-gray-900 leading-snug'>{usp.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
