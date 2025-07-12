'use client';

import { FlipWords } from '@/components/ui/flip-words';
import { useEffect, useState } from 'react';

export function EmergencyDentistryContainerTextFlip() {
  const words = [
    'Same-Day Appointments',
    'Toothache Relief',
    'Broken Teeth',
    'Filling Repairs',
    'Saturday Visits',
    'Emergency Care',
  ];

  const [resizeKey, setResizeKey] = useState(0);

  useEffect(() => {
    function handleResize() {
      setResizeKey((prev) => prev + 1);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div key={resizeKey} className='h-[20rem] flex flex-col justify-center items-center text-center px-4'>
      {/* Chip tag */}
      <div className='mb-6 bg-grey text-white text-sm md:text-base px-4 py-2 rounded-full shadow-md'>
        Emergency Dentistry in Bridgwater
      </div>

      {/* Main banner text */}
      <div className='text-4xl lg:text-6xl font-normal max-w-3xl leading-tight'>
        <p>Supernova Dental Helps With:</p>
        <FlipWords words={words} />
        <p className='mt-2'>In Bridgwater</p>
      </div>
    </div>
  );
}
