'use client';

import { motion, type MotionValue, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import { Smile, Wifi } from 'react-feather';

export const DisappearingFeatures = () => {
  return (
    <>
      <div className='relative h-fit bg-lightGrey'>
        <Features />
      </div>

      {/* <div className='h-[50vh] bg-white' /> */}
    </>
  );
};

const Features = () => {
  return (
    <div className='relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2'>
      <Copy />
      <Carousel />
    </div>
  );
};

const Copy = () => {
  return (
    <div className='flex h-fit w-full flex-col justify-center py-12 md:sticky md:top-0 md:h-screen'>
      <span className='w-fit rounded-full bg-gold px-4 py-2 text-sm uppercase text-gray-50'>Our Clinic Features</span>
      <h2 className='mb-4 mt-2 text-5xl text-gold font-medium leading-tight'>
        Discover the Exceptional Amenities We Offer
      </h2>
      <p className='text-lg text-gray-50'>
        Our clinic is designed with your comfort and convenience in mind, offering state-of-the-art technology and
        amenities that ensure a pleasant experience every time you visit.
      </p>
    </div>
  );
};

const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const clinicFeatures = [
    {
      title: 'Comfortable Chairs',
      description: 'Our ergonomic chairs provide maximum comfort during your treatments.',
      icon: <Smile className='w-12 h-12 mb-4 text-gold' />,
      imgSrc: '/assets/images/surgery2.JPG',
    },
    {
      title: 'Advanced Equipment',
      description: 'We use the latest dental technology to ensure accurate and efficient treatments.',
      icon: <Smile className='w-12 h-12 mb-4 text-gold' />,
      imgSrc: '/assets/images/equipment.JPG',
    },
    {
      title: 'Free WiFi',
      description: 'Stay connected while you wait with our complimentary WiFi.',
      icon: <Wifi className='w-12 h-12 mb-4 text-gold' />,
      imgSrc: '/assets/images/waitingRoom.JPG',
    },
    {
      title: 'Accessibility friendly toilets',
      description: 'Our clinic is equipped with an accessible toilet for your convenience.',
      icon: <Wifi className='w-12 h-12 mb-4 text-gold' />,
      imgSrc: '/assets/images/toilet.JPG',
    },
    {
      title: 'Ample Parking',
      description: 'Plenty of parking spaces available, ensuring a hassle-free visit every time.',
      icon: <Smile className='w-12 h-12 mb-4 text-gold' />,
      imgSrc: '/assets/images/parking.JPG',
    },
  ];

  return (
    <div className='relative w-full'>
      <Gradient />

      <div ref={ref} className='relative z-0 flex flex-col gap-6 md:gap-12'>
        {clinicFeatures.map((feature, index) => (
          <CarouselItem
            key={index}
            scrollYProgress={scrollYProgress}
            position={index + 1}
            numItems={clinicFeatures.length}
            feature={feature}
          />
        ))}
      </div>

      <Buffer />
    </div>
  );
};

const CarouselItem = ({
  scrollYProgress,
  position,
  numItems,
  feature,
}: {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
  feature: any;
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className='grid aspect-video w-full shrink-0 place-content-center rounded-2xl bg-neutral-900 p-6'
    >
      <div className='flex flex-col items-center text-center text-cream'>
        {feature.icon}
        <h3 className='text-3xl font-bold mb-2 text-gold'>{feature.title}</h3>
        <p className='p-4'>{feature.description}</p>
        <Image
          src={feature.imgSrc}
          alt={feature.title}
          width={600}
          height={600}
          className='w-full h-full object-cover rounded-2xl'
        />
      </div>
    </motion.div>
  );
};

const Gradient = () => (
  <div className='sticky top-0 z-10 hidden h-24 w-full bg-gradient-to-b from-lightGrey to-lightGrey md:block' />
);

const Buffer = () => <div className='h-24 w-full md:h-48' />;
