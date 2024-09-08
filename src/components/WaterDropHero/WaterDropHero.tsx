'use client';

import anime from 'animejs';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const WaterDropHero = () => {
  return (
    <section className='text-slat-100 overflow-hidden bg-slate-900 px-8 py-24 md:px-12 md:py-32'>
      <div className='relative mx-auto max-w-5xl'>
        <div className='pointer-events-none relative z-10'>
          <Reveal>
            <h1 className='pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl'>
              Hi, I'm Scott<span className='text-gold'>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className='pointer-events-auto my-2 text-2xl text-slate-400 md:my-4 md:text-4xl'>
              I'm a <span className='font-semibold text-gold'>Dental Practitioner</span>
            </h2>
            <h3 className='text-gold'>GPhC Registration Number: 12345678</h3>
          </Reveal>
          <Reveal>
            <p className='pointer-events-auto max-w-xl text-sm text-slate-300 md:text-base mt-4'>
              I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach
              people to paint online (incase you've got an empty canvas layin' around 🎨). Let's connect!
            </p>
          </Reveal>
          <Reveal>
            <div className='flex gap-4 mt-4'>
              <button className='pointer-events-auto mt-4 rounded bg-gold px-4 py-2 font-medium text-slate-100 transition-all hover:bg-indigo-700 active:scale-95 md:mt-6'>
                Book with me
              </button>
              <button className='pointer-events-auto mt-4 rounded bg-gold px-4 py-2 font-medium text-slate-100 transition-all hover:bg-indigo-700 active:scale-95 md:mt-6'>
                Contact me
              </button>
            </div>
          </Reveal>
          <Reveal>
            <img
              src='/assets/images/scottAiImage.jpg'
              alt='Scott'
              className='pointer-events-auto w-72 h-72 object-cover rounded-full shadow-lg mt-8 md:w-96 md:h-96'
            />
          </Reveal>
        </div>
        {/* <DotGrid /> */}
      </div>
    </section>
  );
};

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

interface RevealProps {
  children: JSX.Element;
}

export const Reveal = ({ children }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      void mainControls.start('visible');
      void slideControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} className='relative w-fit overflow-hidden'>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default WaterDropHero;
