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
      title: 'Patient Journey Video',
      description: 'Watch Dr. Young, our principal dentist, explain the patient journey and learn what to expect.',
      skeleton: <SkeletonTwo />,
      className: 'border-b col-span-1 lg:col-span-2 dark:border-neutral-800 lg:mt-28 ',
    },
    {
      title: 'Smile Zone Tour',
      description: 'Discover our Smile Zone, designed for comfort and state-of-the-art dental care.',

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

      <div className='relative'>
        <div className='grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800'>
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div>{feature.skeleton}</div>
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
        'text-left max-w-sm mx-0 md:text-sm my-2 pb-4'
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <Image
      src='/assets/images/reception.JPG'
      alt='Reception'
      width={800}
      height={800}
      className='h-full w-full aspect-square object-cover rounded-lg'
      style={{ objectFit: 'cover' }} // Ensures the image fills its container
    />
  );
};

export const SkeletonTwo = () => {
  return (
    <div
      className='relative w-full'
      style={{ paddingTop: `${(476 / 267) * 100}%` }} // Aspect ratio based on video dimensions
    >
      <iframe
        src='/assets/videos/why_supernova.mp4'
        className='absolute top-0 left-0 w-full h-full rounded-lg'
        style={{
          border: 'none',
          overflow: 'hidden',
        }}
        scrolling='no'
        frameBorder='0'
        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
        allowFullScreen={true}
      />
    </div>
  );
};

export const SkeletonThree = () => {
  const image = '/assets/images/smile_zone.JPG';

  return (
    <div className='h-full w-full'>
      <Image
        src={image}
        alt='Smile Zone'
        width={800}
        height={2400}
        className='h-full w-full object-cover rounded-lg'
        style={{ height: '100%', width: '100%' }} // Ensures the image fully fills its container
      />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className='flex items-center h-[476px]'>
      <div className='relative w-full h-full'>
        <Image src='/assets/images/surgery.JPG' alt='Surgery' layout='fill' objectFit='cover' className='rounded-lg' />
      </div>
    </div>
  );
};
