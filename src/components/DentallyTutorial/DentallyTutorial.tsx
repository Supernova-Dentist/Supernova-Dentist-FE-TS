import React from 'react';
import { FloatingPhone } from '../FloatingPhone/FloatingPhone';
import SteppedProgress from '../SteppedProgress/SteppedProgress';
import { stepContent } from './utils/stepContent';

export default function DentallyTutorial() {
  return (
    <section className='py-16 md:py-24 lg:py-32 bg-gradient-to-b from-cream to-white'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-gold'>Easy Online Booking</h2>
        <p className='text-lg md:text-xl lg:text-2xl mb-16 pb-4 text-center md:px-16 lg:px-32 '>
          Booking your appointment has never been easier, anytime, anywhere, even from your mobile device! Our online
          system powered by Dentally allows you to schedule your visit with ease.
        </p>

        <div className='grid grid-cols-1 gap-8'>
          <div className='flex flex-col justify-center'>
            <h3 className='text-2xl font-bold my-2 px-6 text-gold text-center'>
              First time? Let us help you get setup:
            </h3>
            <SteppedProgress stepContent={stepContent} />
          </div>
        </div>
      </div>
    </section>
  );
}
