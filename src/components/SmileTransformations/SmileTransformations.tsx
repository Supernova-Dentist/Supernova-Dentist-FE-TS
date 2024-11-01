'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function SmileTransformations() {
  // const transformations = [
  //   {
  //     id: 1,
  //     before: '/assets/images/teeth-before.jpg',
  //     after: '/assets/images/teeth-after.png',
  //     description: 'Teeth Whitening',
  //   },
  //   // {
  //   //   id: 2,
  //   //   before: '/assets/images/teeth-before.jpg',
  //   //   after: '/assets/images/teeth-after.png',
  //   //   description: 'Invisalign Treatment',
  //   // },
  //   // {
  //   //   id: 3,
  //   //   before: '/assets/images/teeth-before.jpg',
  //   //   after: '/assets/images/teeth-after.png',
  //   //   description: 'Dental Veneers',
  //   // },
  // ];
  const transformations = [
    {
      id: 1,
      src: '/assets/images/teeth-before.jpg',
      alt: 'Teeth whitening before',
    },
    {
      id: 2,
      src: '/assets/images/after_teeth.png',
      alt: 'Teeth whitening after',
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <section
      id='results'
      className='w-full py-20 md:py-24 lg:py-32 bg-gradient-to-b from-cream to-white'
      ref={ref} // Attach the ref to the section
    >
      <div className='container mx-auto'>
        <div className='flex justify-center mb-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Start hidden and slightly lower
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
            transition={{ duration: 0.5 }} // Animation duration
          >
            <div className='rounded-xl bg-gold px-4 py-1 text-sm text-gray-50'>Our Results</div>
          </motion.div>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} // Start hidden and slightly lower
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
          transition={{ duration: 0.5 }} // Animation duration
          className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-gold'
        >
          Our Smile Transformations
        </motion.h2>
        <motion.hr
          initial={{ opacity: 0, y: 20 }} // Start hidden and slightly lower
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
          transition={{ duration: 0.5 }} // Animation duration
          className='border-t-2 border-gold w-20 mx-auto mt-6 mb-8'
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }} // Start hidden and slightly lower
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
          transition={{ duration: 0.5 }} // Animation duration
          className='text-xl md:text-2xl lg:text-2xl text-center text-gray-800 mb-12'
        >
          See the difference we can make
        </motion.p>
        <div className='flex flex-col-reverse md:flex-row-reverse justify-center gap-8 items-center px-4'>
          {transformations.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }} // Initial state: hidden and slightly lower
              animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
              transition={{ duration: 0.5 }} // Animation duration
            >
              <Image
                className='object-cover h-[400px] w-[400px] rounded-md'
                width={400}
                height={400}
                src={item.src}
                alt={item.alt}
              />
            </motion.div>
          ))}
          {/* {transformations.map((item) => (
  <div key={item.id} className='flex justify-center p-4 border rounded-3xl bg-neutral-100 border-neutral-200'>
    <Compare
      firstImage={item.before}
      secondImage={item.after}
      firstImageClassName='object-cover object-left-top'
      secondImageClassname='object-cover object-left-top'
      className='h-64 w-64 md:h-96 md:w-96 lg:h-[600px] lg:w-[800px]'
      slideMode='hover'
    />
  </div>
))} */}
        </div>
      </div>
    </section>
  );
}
