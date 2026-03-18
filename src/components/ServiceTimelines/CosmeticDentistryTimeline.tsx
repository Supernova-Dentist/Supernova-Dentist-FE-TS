'use client';

import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
}

export const CosmeticDentistryTimeline = ({ data }: TimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 20%', 'end 80%'],
  });

  const { ref: refInView, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  // Animate height using percentage
  const heightTransform = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div id='cosmetic-dentistry-timeline' className='w-full font-sans xl:px-10' ref={containerRef}>
      <motion.div
        ref={refInView}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className='relative max-w-7xl mx-auto pb-20'>
          {data.map((item, index) => (
            <div key={index} className='flex justify-start pt-10 xl:pt-20 xl:gap-10'>
              {/* Sticky Title Section */}
              <div className='sticky flex flex-col xl:flex-row z-40 items-center top-40 self-start max-w-xs xl:max-w-sm xl:w-full'>
                <div className='h-10 absolute left-3 w-10 rounded-full bg-white flex items-center justify-center'>
                  <div className='h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2' />
                </div>

                <h3 className='hidden xl:block text-xl xl:pl-20 xl:text-5xl font-bold text-neutral-500'>
                  {item.title}
                </h3>
              </div>

              {/* Content Section */}
              <div className='relative pl-20 pr-4 xl:pl-4 w-full'>
                <h3 className='xl:hidden block text-2xl mb-4 text-left font-bold text-neutral-500'>{item.title}</h3>
                <div>{item.content}</div>
              </div>
            </div>
          ))}

          {/* Timeline Line */}
          <div
            className='absolute xl:left-8 left-8 top-0 bottom-0 w-[2px] 
              bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
              from-transparent via-neutral-200 to-transparent 
              [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]'
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className='absolute inset-x-0 top-0 w-[2px] 
                bg-gradient-to-t from-purple-500 via-blue-500 to-transparent 
                rounded-full'
            />
          </div>
        </div>

        {/* <div className='flex justify-center pb-6'>
          <button
            onClick={scrollToPromotionForm}
            className='bg-gold text-white px-8 py-4 rounded-lg text-lg font-semibold'
          >
            Begin Your Journey!
          </button>
        </div> */}
      </motion.div>
    </div>
  );
};
