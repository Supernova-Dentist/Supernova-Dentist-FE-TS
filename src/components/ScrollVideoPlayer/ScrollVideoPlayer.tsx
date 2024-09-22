'use client';

import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollVideoPlayerProps {
  videoSrc: string;
}

const ScrollVideoPlayer: React.FC<ScrollVideoPlayerProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({ threshold: 0 });
  const ticking = useRef(false);

  const updateVideoTime = () => {
    if (videoRef.current) {
      const videoElement = videoRef.current;
      const videoDuration = videoElement.duration;

      // Get the bounding rectangle of the video element relative to the viewport
      const videoRect = videoElement.getBoundingClientRect();

      // Adjust the visiblePercentage to start playing earlier
      const visiblePercentage = Math.max(
        0,
        Math.min(1, -(videoRect.top - window.innerHeight * 0.9) / window.innerHeight)
      );

      // Calculate the current time based on the percentage of visibility
      const currentTime = Math.min(visiblePercentage * videoDuration, videoDuration);

      videoElement.currentTime = currentTime;
    }
  };

  const handleScroll = () => {
    if (!ticking.current) {
      ticking.current = true;
      window.requestAnimationFrame(() => {
        updateVideoTime();
        ticking.current = false;
      });
    }
  };

  useEffect(() => {
    if (inView) {
      window.addEventListener('scroll', handleScroll);
      // Update video time initially when the video comes into view
      updateVideoTime();
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inView]);

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '110vh', // Full viewport height to center vertically
        width: '100vw', // Full viewport width to center horizontally
        overflow: 'hidden',
      }}
    >
      <video ref={videoRef} src={videoSrc} style={{ width: '75%', height: 'auto' }} muted playsInline />
    </div>
  );
};

export default ScrollVideoPlayer;
