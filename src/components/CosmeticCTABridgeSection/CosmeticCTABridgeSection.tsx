'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import smileZone from '../../../public/assets/images/smile_view_zone.webp';
import { CosmeticFloatingPhone } from '../FloatingPhone/CosmeticFloatingPhone';
import { motion } from 'framer-motion';

export default function CosmeticCTABridgeSection() {
  return (
    <section className='py-20 px-6'>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>
        {/* LEFT: CTA CONTENT */}
        <div className='text-center lg:text-left flex flex-col items-center lg:items-start'>
          <h2 className='text-3xl md:text-4xl font-semibold tracking-tight'>See What Your New Smile Could Look Like</h2>

          <p className='mt-2 lg:my-4 text-gray-700 max-w-md'>
            Book a private consultation at Supernova Dental. We’ll assess your smile and show you what’s possible using
            advanced smile design technology before any treatment begins.
          </p>
          <div className='w-full max-w-md overflow-hidden rounded-2xl shadow-xl lg:block hidden'>
            <Image
              src={smileZone}
              alt='Smile consultation view zone at Supernova Dental Bridgwater'
              width={800}
              height={600}
              className='w-full h-auto object-cover'
            />
          </div>
        </div>

        {/* RIGHT: VISUAL STACK */}
        <div className='flex flex-col items-center gap-10'>
          {/* Floating Phone (primary visual) */}
          <CosmeticFloatingPhone />

          {/* Smile View Zone (secondary trust) */}
          <div className='w-full max-w-md overflow-hidden rounded-2xl shadow-xl lg:hidden block'>
            <Image
              src={smileZone}
              alt='Smile consultation view zone at Supernova Dental Bridgwater'
              width={800}
              height={600}
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
