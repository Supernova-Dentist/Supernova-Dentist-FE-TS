'use client';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  setImagesLoaded: React.Dispatch<React.SetStateAction<number>>;
  imagesLoaded: number;
}

export const InvisalignTimeline = ({ data, setImagesLoaded, imagesLoaded }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const totalImages = data.length; // Assuming each entry has one image

  // Update height when an image loads
  const handleImageLoad = () => {
    setImagesLoaded((prev) => {
      const newCount = prev + 1;
      if (newCount === totalImages && ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
      return newCount;
    });
  };

  // Update height on window resize
  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight(); // Initial height update
    window.addEventListener('resize', updateHeight); // Add resize listener
    return () => {
      window.removeEventListener('resize', updateHeight); // Clean up listener on unmount
    };
  }, [imagesLoaded]); // No dependencies to ensure it runs on mount and resize

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const { ref: refInView, inView } = useInView({
    threshold: 0.05, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className='w-full bg-gradient-to-b from-cream to-white font-sans md:px-10' ref={containerRef}>
      <motion.div
        ref={refInView}
        initial={{ opacity: 0, y: 20 }} // Start hidden and slightly lower
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
        transition={{ duration: 0.5 }} // Animation duration
      >
        <div ref={ref} className='relative max-w-7xl mx-auto pb-20'>
          {data.map((item, index) => (
            <div key={index} className='flex justify-start pt-10 md:pt-40 md:gap-10'>
              <div className='sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full'>
                <div className='h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center'>
                  <div className='h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2' />
                </div>
                <h3 className='hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500'>
                  {item.title}
                </h3>
              </div>

              <div className='relative pl-20 pr-4 md:pl-4 w-full'>
                <h3 className='md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500'>
                  {item.title}
                </h3>
                <div>{React.cloneElement(item.content as React.ReactElement, { onLoad: handleImageLoad })}</div>
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + 'px',
            }}
            className='absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] '
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className='absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full'
            />
          </div>
        </div>
      </motion.div>
      <div className='flex justify-center mb-6 py-6'>
        <button
          onClick={scrollToPromotionForm}
          className='bg-lightGold text-cream px-8 py-4 rounded-lg text-lg font-semibold'
        >
          Begin Your Journey!
        </button>
      </div>
    </div>
  );
};
