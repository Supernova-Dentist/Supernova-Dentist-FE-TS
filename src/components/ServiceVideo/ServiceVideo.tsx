'use client';

import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { DentallyPortal } from '@/lib/constants';

interface ServiceVideoProps {
  videoSrc: string;
}

export default function ServiceVideo({ videoSrc }: ServiceVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  // Handle video end event
  const handleVideoEnd = () => {
    setIsVideoEnded(true); // Show Lottie animation when the video ends
  };

  // Replay the video when Lottie animation is clicked
  const handleReplayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoEnded(false); // Hide Lottie animation when the video is playing
    }
  };

  // Scroll-trigger logic
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true, // Play the video when it enters the view for the first time
  });

  return (
    <div className='flex flex-col items-center justify-center '>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className='p-2 xl:rounded-xl'
      >
        <div className='relative flex flex-col justify-center items-center w-full'>
          {/* Lottie animation, visible after video ends */}
          <div className={`relative w-[100px] h-[100px] mb-4 ${isVideoEnded ? 'block' : 'invisible'}`}>
            {/* Clickable overlay */}
            <div className='absolute inset-0 z-10 cursor-pointer' onClick={handleReplayClick}></div>
            {/* Lottie player */}
            <iframe
              src='https://lottie.host/embed/8e74a3ee-9028-4f2b-a61b-8c7c7d6747fd/tdbxNbutCj.json'
              className='w-full h-full'
              title='Replay animation'
            ></iframe>
          </div>

          {/* Video player */}
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className='w-full max-w-[55rem] h-auto'
          />
        </div>
        <div className='mt-2 pt-8 pb-12 lg:pb-24 flex justify-center'>
          <Link href={`${DentallyPortal}`} target='_blank'>
            <button className='bg-lightGold text-white px-8 py-4 rounded-lg text-lg font-semibold'>
              Take the first step!
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
