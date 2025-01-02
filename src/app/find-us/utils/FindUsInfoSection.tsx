'use client';

import React from 'react';
import { motion } from 'framer-motion';
import GetDirectionsForm from '@/components/GetDirectionsForm/GetDirectionsForm';

export default function FindUsInfoSection() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-evenly space-y-6 lg:space-y-0'>
      {/* Address and Contact Information */}
      <motion.div
        className='space-y-6 lg:space-y-8'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
        className='space-y-6 md:col-span-1'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className='text-xl xl:text-2xl font-semibold mb-4 text-center text-gray'>10 Reserved Parking Spots</h2>
        {/* Video iframe with aspect ratio */}
        <div className='relative w-full' style={{ paddingTop: `${(476 / 267) * 100}%` }}>
          <iframe
            src='/assets/videos/supernova_parking.mp4'
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
      </motion.div>
    </div>
  );
}
