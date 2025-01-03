'use client';
import GetDirectionsForm from '@/components/GetDirectionsForm/GetDirectionsForm';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import {HighlightCard} from '@/components/HighlightCard/HighlightCard';

const GoogleMap = dynamic(async () => await import('@/components/blocks/GoogleMap/GoogleMap'), {
  ssr: false,
});

export default function FindUs() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div id='location' className='flex flex-col items-center justify-start bg-gradient-to-b from-cream to-white'>
      <div className='w-full max-w-7xl px-6 sm:px-8 lg:px-12'>
        <section ref={ref} className='mb-12'>
          <HighlightCard
            logoSrc='/assets/images/logo.png'
            title='Find Us - Supernova Dental'
            description='Locate Supernova Dental on the map, get directions, view reserved parking spots and check our contact details and opening hours.'
            className='mt-16'
          />

          <div className='my-6'>
            <GoogleMap />
          </div>
          <div className='flex flex-col lg:flex-row items-center justify-evenly space-y-8 lg:space-y-0'>
            {/* Address and Contact Information */}
            <motion.div
              className='space-y-8'
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <h2 className='text-xl xl:text-2xl font-semibold mb-4 text-center text-gray'>Our Address</h2>
                <ul className='text-center space-y-2'>
                  <li>Supernova Building</li>
                  <li>Huntworth Gate, Marsh Lane,</li>
                  <li>Bridgwater</li>
                  <li>TA6 6LQ</li>
                </ul>
                <div className='mt-4 max-w-80 mx-auto'>
                  <GetDirectionsForm />
                </div>
              </div>
              <div>
                <h2 className='text-xl xl:text-2xl font-semibold mb-4 text-center text-gray'>Contact Us</h2>
                <div className='flex flex-col items-center space-y-2'>
                  <p className='text-base sm:text-lg text-center text-lightGrey'>Phone: 01278 228665</p>
                  <p className='text-base sm:text-lg text-center text-lightGrey'>
                    Email:{' '}
                    <a href='mailto:info@supernovadentalclinic.com' className='underline'>
                      enquiries@supernovadental.co.uk
                    </a>
                  </p>
                </div>
              </div>
              {/* Opening Hours below contact */}
              <div>
                <h2 className='text-xl xl:text-2xl font-semibold mb-4 text-center text-gray'>Opening Hours</h2>
                <ul className='space-y-2 text-center'>
                  <li>Monday: 08:15–18:15</li>
                  <li>Tuesday: 08:15–18:15</li>
                  <li>Wednesday: 08:15–18:15</li>
                  <li>Thursday: 08:15–18:15</li>
                  <li>Friday: Closed</li>
                  <li>Saturday: 09:00–13:00</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </motion.div>

            {/* Video showing the 10 reserved parking spots */}
            <motion.div
              className='space-y-8 md:col-span-1'
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className='text-xl xl:text-2xl font-semibold mb-4 text-center text-gray'>
                10 Reserved Parking Spots
              </h2>
              <div className='aspect-w-16 aspect-h-9'>
                <video
                  className='w-full h-full object-cover rounded-lg'
                  src='/assets/videos/parking.mp4'
                  controls
                  autoPlay
                  loop
                  muted
                />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
