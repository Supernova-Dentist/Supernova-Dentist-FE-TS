'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HighlightCard } from '../HighlightCard/HighlightCard';
import BreadCrumb from '../BreadCrumb/BreadCrumb';

export function FeaturesSectionDemo() {
  const features = [
    {
      title: 'Welcome to Reception',
      description: 'Experience a warm welcome and personalised attention from our team.',
      skeleton: <SkeletonOne />,
      className: 'lg:col-span-4 border-gold',
    },
    {
      title: 'Patient Journey Video',
      description: 'Watch Dr. Young, our principal dentist, explain the patient journey and learn what to expect.',
      skeleton: <SkeletonTwo />,
      className: 'lg:col-span-2 border-gold',
    },
    {
      title: 'Smile Zone Tour',
      description: 'Discover our Smile Zone, designed for comfort and state-of-the-art dental care.',
      skeleton: <SkeletonThree />,
      className: 'lg:col-span-2 border-gold',
    },
    {
      title: 'Advanced Surgery Suite',
      description: 'Explore our advanced surgery suite equipped with the latest technology.',
      skeleton: <SkeletonFour />,
      className: 'lg:col-span-4 border-gold',
    },
  ];

  return (
    <div className='relative z-20 py-10 lg:py-4 max-w-7xl mx-auto'>
      <HighlightCard
        title='Supernova Dental Clinic'
        description='From reception to surgery, discover our seamless patient journey designed to prioritize your comfort and care.'
        logoSrc='/assets/images/logo.png'
        className='mt-12'
      />

      <div className='px-4'>
        <BreadCrumb />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-6 gap-8 mt-12 border-gold border-4 rounded-md p-4'>
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            className={cn('relative overflow-hidden p-6 shadow-lg rounded-lg', feature.className)}
          >
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
            <div>{feature.skeleton}</div>
          </FeatureCard>
        ))}
      </div>
    </div>
  );
}

const FeatureCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className={cn(`border-2 border-gold rounded-lg hover:shadow-xl transition-shadow`, className)}>{children}</div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return <h3 className='text-xl lg:text-2xl font-bold text-black mb-2'>{children}</h3>;
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return <p className='text-sm lg:text-base text-neutral-500 pb-4 '>{children}</p>;
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
        className='absolute top-0 left-0 w-full h-full rounded-lg lg:mt-8'
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
  const image = '/assets/images/supernova_smile_zone.jpg';

  return (
    <div className='relative w-full max-h-[600px]'>
      <Image
        src={image}
        alt='Smile Zone'
        layout='intrinsic'
        width={600}
        height={400} // Maintain aspect ratio
        className='object-cover rounded-lg'
      />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className='relative w-full max-h-[600px] mt-6'>
      <Image
        src='/assets/images/surgery.JPG'
        alt='Surgery'
        layout='intrinsic'
        width={800}
        height={533} // Maintain aspect ratio for 4:3 aspect ratio
        className='object-cover rounded-lg'
      />
    </div>
  );
};
