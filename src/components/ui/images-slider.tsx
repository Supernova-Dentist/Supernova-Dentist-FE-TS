/* eslint-disable @typescript-eslint/promise-function-async */
'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

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

  // Load images one by one
  useEffect(() => {
    const loadImage = (src: string) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = reject;
      });
    };

    let isMounted = true;
    const loadAllImages = async () => {
      const newLoadedImages: string[] = [];
      for (const image of images) {
        try {
          const loadedSrc = await loadImage(image);
          if (isMounted) {
            newLoadedImages.push(loadedSrc);
            setLoadedImages([...newLoadedImages]); // Update as each image loads
          }
        } catch (error) {
          console.error('Failed to load image:', image, error);
        }
      }
    };

    void loadAllImages();
    return () => {
      isMounted = false;
    };
  }, [images]);

  // Autoplay (only after first image is loaded)
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

  // Keyboard Navigation
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
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial='initial'
            animate='visible'
            exit='exit'
            variants={slideVariants}
            className='image h-full w-full absolute inset-0 object-cover object-center'
          />
        </AnimatePresence>
      )}
    </div>
  );
};
