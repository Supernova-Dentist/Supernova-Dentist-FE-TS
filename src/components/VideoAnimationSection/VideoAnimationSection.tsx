import React from 'react';
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from '../ui/text-reveal-card';
import ScrollVideoPlayer from '../ScrollVideoPlayer/ScrollVideoPlayer';

export function VideoAnimationSection() {
  return (
    <div className='flex flex-col items-center justify-center bg-black w-full py-12'>
      <div className='px-8'>
        <TextRevealCard
          className='h-[20rem] w-full rounded-lg p-8 relative overflow-hidden'
          text='You know the value of a healthy smile'
          revealText='We know the art of dentistry'
        >
          <TextRevealCardTitle>Sometimes, you just need to see the smile transformation.</TextRevealCardTitle>
          <TextRevealCardDescription>Hover to uncover the secret to a healthy smile!</TextRevealCardDescription>
        </TextRevealCard>
      </div>
      <ScrollVideoPlayer videoSrc='assets/videos/invisalign_video.mp4' />
    </div>
  );
}
