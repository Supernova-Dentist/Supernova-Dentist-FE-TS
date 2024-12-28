'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { IconBrandYoutubeFilled } from '@tabler/icons-react';
import Link from 'next/link';

export function FeaturesSectionDemo() {
  const features = [
    {
      title: 'Welcome to Reception',
      description: 'Experience a warm welcome and personalized attention from our team.',
      skeleton: <SkeletonOne />,
      className: 'col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800',
    },
    {
      title: 'Smile Zone Tour',
      description: 'Discover our Smile Zone, designed for comfort and state-of-the-art dental care.',
      skeleton: <SkeletonTwo />,
      className: 'border-b col-span-1 lg:col-span-2 dark:border-neutral-800',
    },
    {
      title: 'Patient Journey Video',
      description: 'Watch Dr. Young, our principal dentist, explain the patient journey and learn what to expect.',
      skeleton: <SkeletonThree />,
      className: 'col-span-1 lg:col-span-2 lg:border-r dark:border-neutral-800 overflow-hidden',
    },
    {
      title: 'Advanced Surgery Suite',
      description: 'Explore our advanced surgery suite equipped with the latest technology.',
      skeleton: <SkeletonFour />,
      className: 'col-span-1 lg:col-span-4 border-b lg:border-none',
    },
  ];
  return (
    <div className='relative z-20 py-10 lg:py-40 max-w-7xl mx-auto'>
      <div className='px-8'>
        <h4 className='text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white'>
          Supernova Dental Clinic
        </h4>

        <p className='text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300'>
          From reception to surgery, discover our seamless patient journey designed to prioritize your comfort and care.
        </p>
      </div>

      <div className='relative overflow-hidden'>
        <div className='overflow-hidden grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800'>
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className='h-full w-full'>{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>{children}</div>;
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className='max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug'>
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        'text-sm md:text-base max-w-4xl text-left mx-auto',
        'text-neutral-500 text-center font-normal dark:text-neutral-300',
        'text-left max-w-sm mx-0 md:text-sm my-2'
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className='relative flex py-8 px-2 gap-10 h-full'>
      <div className='w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full'>
        <Image
          src='/assets/images/reception.jpg'
          alt='Reception'
          width={800}
          height={800}
          className='h-full w-full aspect-square object-cover object-left-top rounded-sm'
        />
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const image = '/assets/images/smile_zone.jpg';

  return (
    <div className='relative flex flex-col items-center p-8 gap-10 h-full overflow-hidden'>
      <motion.div className='rounded-xl p-1 bg-white dark:bg-neutral-800 border border-neutral-100 flex-shrink-0 overflow-hidden w-full h-full'>
        <Image src={image} alt='Smile Zone' layout='fill' objectFit='cover' className='rounded-lg' />
      </motion.div>
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <iframe
      src='/assets/videos/why_supernova.mp4'
      width={267}
      height={476}
      style={{
        border: 'none',
        overflow: 'hidden',
        margin: '0 auto',
      }}
      scrolling='no'
      frameBorder='0'
      allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
      allowFullScreen={true}
    />
  );
};

export const SkeletonFour = () => {
  return (
    <div className='flex items-center h-[476px]'>
      <div className='relative w-full h-full'>
        <Image src='/assets/images/surgery.jpg' alt='Surgery' layout='fill' objectFit='cover' className='rounded-lg' />
      </div>
    </div>
  );
};
