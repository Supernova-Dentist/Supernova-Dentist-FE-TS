'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FloatingPhone } from '../FloatingPhone/FloatingPhone';

const SteppedProgress = ({ stepContent }: { stepContent: any }) => {
  const [stepsComplete, setStepsComplete] = useState(0);

  console.log(stepContent);

  const handleSetStep = (num: number) => {
    if ((stepsComplete === 0 && num === -1) || (stepsComplete === stepContent.length - 1 && num === 1)) {
      return;
    }

    setStepsComplete((pv) => pv + num);
  };

  return (
    <motion.div
      className='px-4 py-14'
      initial={{ opacity: 0, y: 20 }} // Start hidden and slightly lower
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and default position
      transition={{ duration: 0.5 }} // Animation duration
    >
      <div className='p-8 bg-white shadow-lg rounded-md w-full max-w-2xl mx-auto'>
        {stepContent[stepsComplete]?.header && (
          <motion.h2
            className='text-2xl font-bold text-center text-gray-800 mb-2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {stepContent[stepsComplete].header}
          </motion.h2>
        )}
        <Steps numSteps={stepContent.length - 1} stepsComplete={stepsComplete} />
        <div className='p-2 my-6 bg-gray-100 border-2 border-dashed border-gray-200 rounded-lg'>
          <motion.p
            className='text-lg text-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {stepContent[stepsComplete].text}
          </motion.p>
          {stepsComplete === 0 ? <FloatingPhone /> : null}
          {stepContent[stepsComplete]?.image && (
            <motion.img
              src={stepContent[stepsComplete].image}
              alt='step-image'
              className='w-72 h-48 mx-auto mt-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </div>

        <div className='flex items-center justify-end gap-2'>
          <button className='px-4 py-1 rounded hover:bg-gray-100 text-black' onClick={() => handleSetStep(-1)}>
            Prev
          </button>
          <button className='px-4 py-1 rounded bg-black text-white' onClick={() => handleSetStep(1)}>
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Steps = ({ numSteps, stepsComplete }: { numSteps: number; stepsComplete: number }) => {
  const stepArray = Array.from(Array(numSteps).keys());

  return (
    <div className='flex items-center justify-between gap-3'>
      {stepArray.map((num) => {
        const stepNum = num + 1;
        const isActive = stepNum <= stepsComplete;
        return (
          <React.Fragment key={stepNum}>
            <Step num={stepNum} isActive={isActive} />
            {stepNum !== stepArray.length && (
              <div className='w-full h-1 rounded-full bg-gray-200 relative'>
                <motion.div
                  className='absolute top-0 bottom-0 left-0 bg-gold rounded-full'
                  animate={{ width: isActive ? '100%' : 0 }}
                  transition={{ ease: 'easeIn', duration: 0.3 }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Step = ({ num, isActive }: { num: number; isActive: boolean }) => {
  return (
    <div className='relative'>
      <div
        className={`w-10 h-10 flex items-center justify-center shrink-0 border-2 rounded-full font-semibold text-sm relative z-10 transition-colors duration-300 ${
          isActive ? 'border-gold bg-gold text-white' : 'border-gray-300 text-gray-300'
        }`}
      >
        <AnimatePresence mode='wait'>
          {isActive ? (
            <motion.svg
              key='icon-marker-check'
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 16 16'
              height='1.6em'
              width='1.6em'
              xmlns='http://www.w3.org/2000/svg'
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z'></path>
            </motion.svg>
          ) : (
            <motion.span
              key='icon-marker-num'
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              {num}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      {isActive && <div className='absolute z-0 -inset-1.5 bg-lightGold rounded-full animate-pulse' />}
    </div>
  );
};

export default SteppedProgress;
