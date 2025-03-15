'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export function AboutPractice() {
  const { ref, inView } = useInView({
    threshold: 0.025, // Trigger when 2.5% of the component is in view
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <section className='py-16'>
      <div ref={ref} className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16'>
        {/* Image Section */}
        <div
          className={cn(
            'relative overflow-hidden rounded-lg',
            inView ? 'opacity-100 transition-opacity duration-700' : 'opacity-0'
          )}
        >
          <Image
            src='/assets/images/outerBuilding.jpg'
            alt='About Us'
            width={600}
            height={800}
            layout={'responsive'}
            quality={100}
            className='object-contain h-auto w-auto max-w-[40rem] rounded-lg p-4'
          />
        </div>

        {/* Text Section */}
        <div className={cn('transition-opacity duration-700', inView ? 'opacity-100' : 'opacity-0')}>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900'>About Supernova Dental</h2>
          <p className='text-md lg:text-lg md:text-xl text-gray-800 text-muted-foreground mb-8'>
            At Supernova Dental, we are committed to providing exceptional dental care in a modern, welcoming
            environment. Our team of experienced professionals is dedicated to helping our patients achieve and maintain
            optimal oral health.
          </p>
          <p className='text-md lg:text-lg md:text-xl text-gray-800 text-muted-foreground mb-8'>
            With cutting-edge technology, a compassionate approach and a dedication to patient satisfaction, we stand
            out as a premier dental provider based in Bridgwater. Our practice’s welcoming atmosphere, coupled with a
            team that truly cares, makes every visit a positive experience.
          </p>

          <p className='text-md lg:text-lg md:text-xl text-gray-800 text-muted-foreground mt-8'>
            Need assistance? We are more than happy to provide support for any questions or concerns. Look for the
            button with the plus icon in the bottom right corner of each page for various methods of contact, and we
            will be in touch as soon as we can.
          </p>
        </div>
      </div>
    </section>
  );
}
