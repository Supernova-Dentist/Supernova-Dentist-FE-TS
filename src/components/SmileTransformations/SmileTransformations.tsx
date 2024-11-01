import Image from 'next/image';
import React from 'react';
// import { m } from 'framer-motion';
// import GoogleReviews from '../blocks/GoogleReviews/GoogleReviews';
// import { Compare } from '../ui/compare';

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

  // NOTE: I think the before and after images are reversed
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

  return (
    <section id='results' className='w-full py-20 md:py-24 lg:py-32 bg-gradient-to-b from-cream to-white'>
      <div className='container mx-auto'>
        <div className='flex justify-center mb-4 '>
          <div className='rounded-xl bg-gold px-4 py-1 text-sm text-gray-50'>Our Results</div>
        </div>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-gold'>
          Our Smile Transformations
        </h2>
        <hr className='border-t-2 border-gold w-20 mx-auto mt-6 mb-8' />
        <p className='text-xl md:text-2xl lg:text-2xl text-center text-gray-800 mb-12'>
          See the difference we can make
        </p>
        <div className='flex flex-col-reverse md:flex-row-reverse justify-center gap-8 items-center px-4'>
          {transformations.map((item) => (
            <React.Fragment key={item.id}>
              <Image
                className='object-cover h-[400px] w-[400px] rounded-md'
                width={400}
                height={400}
                src={item.src}
                alt={item.alt}
              />
            </React.Fragment>
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
