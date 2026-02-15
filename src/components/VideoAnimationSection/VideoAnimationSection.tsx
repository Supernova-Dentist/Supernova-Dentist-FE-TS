'use client';

import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from '../ui/text-reveal-card';

export function VideoAnimationSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoEnded(true); // Show the Lottie animation when video ends
  };

  const handleReplayClick = () => {
    if (videoRef.current) {
      void videoRef.current.play(); // Replay the video
      setIsVideoEnded(false); // Hide the Lottie animation while video is playing
    }
  };

  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is in view
    triggerOnce: true,
  });

  return (
    <div className='min-h-[101vh] flex flex-col items-center justify-center py-12 bg-gradient-to-b from-white to-cream'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className='p-8 bg-black xl:rounded-xl w-full max-w-[55rem]'
      >
        <TextRevealCard
          className='h-[20rem] w-full rounded-lg p-8 relative overflow-hidden mb-8'
          text='You know the value of a healthy smile'
          revealText='We know the art of dentistry'
        >
          <TextRevealCardTitle>Sometimes, you just need to see the smile transformation.</TextRevealCardTitle>
          <TextRevealCardDescription>Hover to uncover the secret to a healthy smile!</TextRevealCardDescription>
        </TextRevealCard>

        <div className='relative flex flex-col justify-center items-center w-full'>
          {/* Lottie player initially hidden but rendered to avoid layout shift */}
          <div className={`relative w-[120px] h-[120px] mb-4 ${isVideoEnded ? 'block' : 'invisible'}`}>
            {/* Clickable overlay */}
            <div className='absolute inset-0 z-10 cursor-pointer' onClick={handleReplayClick}></div>
            {/* Lottie player iframe */}
            <iframe
              src='https://lottie.host/embed/8e74a3ee-9028-4f2b-a61b-8c7c7d6747fd/tdbxNbutCj.json'
              className='w-full h-full'
              title='Replay animation'
                loading='lazy'
            ></iframe>
          </div>
          
          {/* Only load video when in view */}
          {inView && (
          <video
            ref={videoRef}
              src='assets/videos/invisalign-clear-braces-transformation-bridgwater.mp4'
              poster='assets/images/invisalign-clear-braces-transformation-bridgwater-poster.png'
              muted
            autoPlay
              playsInline
            onEnded={handleVideoEnd}
              aria-label='Invisalign smile transformation at Supernova Dental'
              className='w-full max-w-[50rem] h-auto rounded-lg'
          />
          )}
        </div>

        <div className='mt-8 flex justify-center'>
          <button
            onClick={scrollToPromotionForm}
            className='bg-gold text-cream px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-shadow duration-200'
          >
            Take the first step!
          </button>
        </div>
      </motion.div>
    </div>
  );
}
