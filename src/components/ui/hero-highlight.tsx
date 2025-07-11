'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, motion, useMotionTemplate } from 'motion/react';
import React from 'react';

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const bgImage = '/assets/images/logo.png'; // Your PNG file

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn('group relative flex h-[100vh] w-full items-center justify-center bg-black', containerClassName)}
      onMouseMove={handleMouseMove}
    >
      {/* Tiled default background */}
      <div
        className='pointer-events-none absolute inset-0 block'
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'repeat',
          margin: '4px',
          backgroundSize: '64px 64px', // adjust tile size to your PNG
          backgroundPosition: '4 4',
          filter: 'brightness(1)',
        }}
      />

      {/* Hover brightened tiled background with mask */}
      <motion.div
        className='pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 block'
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '64px 64px',
          backgroundPosition: '4 4',
          margin: '4px',
          filter: 'brightness(1.5)', // brighten on hover
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn('relative z-20', className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.span
      initial={{
        backgroundSize: '0% 100%',
      }}
      animate={{
        backgroundSize: '100%',
      }}
      transition={{
        duration: 2,
        ease: 'linear',
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
      }}
      className={cn(`relative inline-block rounded-lg bg-gradient-to-r px-1 pb-1 from-lightGold to-gold`, className)}
    >
      {children}
    </motion.span>
  );
};
