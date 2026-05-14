'use client';

import GetDirectionsForm from '@/components/GetDirectionsForm/GetDirectionsForm';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

const GoogleMap = dynamic(async () => await import('@/components/blocks/GoogleMap/GoogleMap'), {
  ssr: false,
});

export default function ConsultFindUs() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div id='location' className='flex flex-col items-center justify-start py-12'>
      <div className='w-full max-w-7xl px-6 sm:px-8 lg:px-12'>
        <section ref={ref} className='mb-12'>
          {/* Heading */}
          <motion.h1
            className='text-4xl sm:text-5xl font-bold my-8 text-center text-grey'
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Visit Our Practice
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className='text-lg sm:text-xl mb-6 text-center text-lightGrey'
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Easily accessible from Bridgwater and surrounding areas. Use the map below to find us or get directions.
          </motion.p>

          {/* Map */}
          <div className='my-6'>
            <GoogleMap />
          </div>

          {/* Info Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-4'>
            {/* Address */}
            <motion.div
              className='space-y-8'
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <h2 className='text-xl xl:text-2xl font-semibold mb-4 text-center text-gray'>Practice Address</h2>

                <ul className='text-center space-y-2'>
                  <li>Supernova Building,</li>
                  <li>Marsh Lane,</li>
                  <li>Huntworth Gate,</li>
                  <li>Bridgwater</li>
                  <li>TA6 6LQ</li>
                </ul>

                <div className='mt-4 max-w-80 mx-auto'>
                  <GetDirectionsForm />
                </div>
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              className='space-y-8'
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className='text-xl xl:text-2xl font-semibold mb-4 text-center text-gray'>Opening Hours</h2>

              <ul className='space-y-2 text-center'>
                <li>Monday: 08:15–18:15</li>
                <li>Tuesday: 08:15–18:15</li>
                <li>Wednesday: 08:15–18:15</li>
                <li>Thursday: 08:15–18:15</li>
                <li>Friday: 08:15–18:15</li>
                <li>Saturday: 09:00–13:00</li>
                <li>Sunday: Closed</li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              className='space-y-8'
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <h2 className='text-xl xl:text-2xl font-semibold mb-4 text-center text-gray'>Get in Touch</h2>

                <div className='flex flex-col items-center space-y-2'>
                  <p className='text-base sm:text-lg text-center text-lightGrey'>Phone: 01278 228665</p>

                  <p className='text-base sm:text-lg text-center text-lightGrey'>WhatsApp: 07863 338815</p>

                  <p className='text-base sm:text-lg text-center text-lightGrey'>
                    Email:{' '}
                    <a href='mailto:enquiries@supernovadental.co.uk' className='underline'>
                      enquiries@supernovadental.co.uk
                    </a>
                  </p>
                </div>

                <div className='mt-6 flex justify-center'>
                  <button
                    onClick={scrollToPromotionForm}
                    className='bg-gold text-white px-6 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition'
                  >
                    Book a Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
