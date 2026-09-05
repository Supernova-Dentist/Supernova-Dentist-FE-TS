'use client';

import { FlipWords } from '@/components/ui/flip-words';
import { AnimatePresence, motion, useMotionTemplate } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

// ---------- ImagesSlider Component ----------
export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  // Load images
  useEffect(() => {
    setLoadedImages(images); // Next.js Image handles caching
  }, [images]);

  // Autoplay
  useEffect(() => {
    if (loadedImages.length <= 1) return;
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
      if (loadedImages.length === 0) return;
      if (event.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % loadedImages.length);
      if (event.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + loadedImages.length) % loadedImages.length);
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
      {/* Text / buttons on top */}
      {loadedImages.length > 0 && <div className='relative z-30'>{children}</div>}

      {/* Overlay only after first image */}
      {overlay && loadedImages.length > 1 && (
        <div className={`absolute inset-0 bg-black/50 z-20 ${overlayClassName}`} />
      )}

      {/* First image shown immediately */}
      {loadedImages.length > 0 && currentIndex === 0 && (
        <Image
          src={loadedImages[0]}
          alt='Slide 0'
          fill
          priority
          sizes='100vw'
          className='object-cover absolute inset-0 h-full w-full z-10'
        />
      )}

      {/* Animate rest of slides */}
      {loadedImages.length > 1 && (
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
              sizes='100vw'
              className='object-cover'
            />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

