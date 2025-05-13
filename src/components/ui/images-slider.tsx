/* eslint-disable @typescript-eslint/promise-function-async */
'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = 'up',
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: 'up' | 'down';
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    setLoadedImages(images); // No need to manually preload, Next.js handles this
  }, [images]);

  // Autoplay logic
  useEffect(() => {
    if (loadedImages.length === 0) return;

    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % loadedImages.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [loadedImages, autoplay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % loadedImages.length);
      } else if (event.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + loadedImages.length) % loadedImages.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [loadedImages]);

  const slideVariants = {
    initial: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: [0.645, 0.045, 0.355, 1.0] } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <div className={`overflow-hidden h-full w-full relative flex items-center justify-center ${className}`}>
      {loadedImages.length > 0 && children}
      {overlay && <div className={`absolute inset-0 bg-black/40 z-20 ${overlayClassName}`} />}

      {loadedImages.length > 0 && (
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial='initial'
            animate='visible'
            exit='exit'
            variants={slideVariants}
            className='absolute inset-0 h-full w-full'
          >
            <Image
              src={loadedImages[currentIndex]}
              alt={`Slide ${currentIndex}`}
              fill
              priority={currentIndex === 0} // Prioritize the first image
              sizes='100vw'
              className='object-cover'
            />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
