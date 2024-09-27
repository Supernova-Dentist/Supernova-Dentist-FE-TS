'use client';

import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import React, { useRef, useState } from 'react';
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from '../ui/text-reveal-card';

export function VideoAnimationSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoEnded(true); // Show the Lottie animation when video ends
  };

  const handleReplayClick = () => {
    console.log('Replay clicked');

    if (videoRef.current) {
      void videoRef.current.play(); // Replay the video
      setIsVideoEnded(false); // Hide the Lottie animation while video is playing
    }
  };

  return (
    <div className='min-h-[101vh] flex flex-col items-center justify-center py-12 bg-gradient-to-b from-white to-cream'>
      <div className='p-8 bg-black rounded-xl'>
        <TextRevealCard
          className='h-[20rem] w-full rounded-lg p-8 relative overflow-hidden'
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
            ></iframe>
          </div>

          <video
            ref={videoRef}
            src='assets/videos/invisalign_video2.mp4'
            autoPlay
            muted
            playsInline // Helps with inline playback on mobile
            onEnded={handleVideoEnd}
            className=' w-full max-w-[75rem] h-auto'
          />
        </div>
        <div className='mt-2 pt-8 pb-12 lg:pb-24 flex justify-center'>
          <button
            onClick={scrollToPromotionForm}
            className='bg-lightGold text-cream px-8 py-4 rounded-lg text-lg font-semibold'
          >
            Take the first step!
          </button>
        </div>
      </div>
    </div>
  );
}
