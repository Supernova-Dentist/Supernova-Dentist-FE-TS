'use client';
import { useMotionValueEvent, useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className='w-full bg-white dark:bg-neutral-950 font-sans md:px-10' ref={containerRef}>
      <div className='max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10'>
        <div className='flex justify-center mb-4 '>
          <div className='rounded-xl bg-gold px-4 py-1 text-sm text-gray-50'>Your Journey</div>
        </div>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-gold'>
          Your Smile Transformation Journey
        </h2>
        <hr className='border-t-2 border-gold w-20 mx-auto mt-6 mb-8' />
        <p className='text-xl md:text-2xl lg:text-2xl text-center text-gray-800'>
          Improving your smile can be as easy as A B C. Here&apos;s how we can help you achieve the smile you&apos;ve
          always wanted.
        </p>
      </div>

      <div ref={ref} className='relative max-w-7xl mx-auto pb-20'>
        {data.map((item, index) => (
          <div key={index} className='flex justify-start pt-10 md:pt-40 md:gap-10'>
            <div className='sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full'>
              <div className='h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center'>
                <div className='h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2' />
              </div>
              <h3 className='hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 '>
                {item.title}
              </h3>
            </div>

            <div className='relative pl-20 pr-4 md:pl-4 w-full'>
              <h3 className='md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500'>
                {item.title}
              </h3>
              {item.content}{' '}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className='absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] '
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full'
          />
        </div>
      </div>
    </div>
  );
};