'use client';

import { motion } from 'framer-motion';
import { type Dispatch, type SetStateAction, useState } from 'react';

const StackedCardTestimonials = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className='bg-white py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden'>
      <div className='p-4'>
        <h3 className='text-5xl font-semibold'>What patients say about Scott</h3>
        <p className='text-slate-500 my-4'>
          Discover why our patients rave about Dr. Young&apos;s exceptional care, from Invisalign and composite bonding to
          tooth whitening and emergency services.
        </p>
        <SelectBtns numTracks={testimonials.length} setSelected={setSelected} selected={selected} />
      </div>
      <Cards testimonials={testimonials} setSelected={setSelected} selected={selected} />
    </section>
  );
};

const SelectBtns = ({
  numTracks,
  setSelected,
  selected,
}: {
  numTracks: number;
  setSelected: Dispatch<SetStateAction<number>>;
  selected: number;
}) => {
  return (
    <div className='flex gap-1 mt-8'>
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button key={n} onClick={() => setSelected(n)} className='h-1.5 w-full bg-slate-300 relative'>
            {selected === n ? (
              <motion.span
                className='absolute top-0 left-0 bottom-0 bg-slate-950'
                initial={{
                  width: '0%',
                }}
                animate={{
                  width: '100%',
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className='absolute top-0 left-0 bottom-0 bg-slate-950'
                style={{
                  width: selected > n ? '100%' : '0%',
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

const Cards = ({
  testimonials,
  selected,
  setSelected,
}: {
  testimonials: Testimonial[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className='p-4 relative h-[450px] lg:h-[500px] shadow-xl'>
      {testimonials.map((t, i) => {
        return <Card {...t} key={i} position={i} selected={selected} setSelected={setSelected} />;
      })}
    </div>
  );
};

const Card = ({
  description,
  name,
  title,
  position,
  selected,
  setSelected,
}: Testimonial & {
  position: number;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
  const background = position % 2 ? 'black' : 'white';
  const color = position % 2 ? 'white' : 'black';

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: 'left bottom',
        background,
        color,
      }}
      animate={{
        x: `${offset}%`,
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: 'easeOut',
      }}
      onClick={() => setSelected(position)}
      className='absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between'
    >
      <img src='/favicon.ico' alt='Supernova logo' className='w-20 h-20 mx-auto' />
      <p className='text-lg lg:text-xl font-light italic my-8'>&quot;{description}&quot;</p>
      <div>
        <span className='block font-semibold text-lg'>{name}</span>
        <span className='block text-sm'>{title}</span>
      </div>
    </motion.div>
  );
};

export default StackedCardTestimonials;

interface Testimonial {
  title: string;
  name: string;
  description: string;
}

const testimonials = [
  {
    description:
      'Dr. Young transformed my smile with Invisalign and I couldn’t be happier. His professionalism and care were exceptional throughout the entire process.',
    name: 'Emily Thompson',
    title: 'Invisalign Patient',
  },
  {
    description:
      'The composite bonding treatment I received from Dr. Scott was flawless. He explained every step and made sure I was comfortable. Highly recommended!',
    name: 'Michael Adams',
    title: 'Composite Bonding Patient',
  },
  {
    description:
      'My teeth whitening experience with Dr. Scott was incredible. I saw results immediately and his friendly demeanor made the process smooth and enjoyable.',
    name: 'Sarah Lee',
    title: 'Teeth Whitening Patient',
  },
  {
    description:
      'Dr. Scott’s implant work was precise and his attention to detail was impressive. I feel confident with my new smile thanks to his expertise.',
    name: 'James Brown',
    title: 'Implant Patient',
  },
  {
    description:
      'I had a dental emergency and Dr. Scott handled it with exceptional skill and compassion. I was grateful for his prompt and effective treatment.',
    name: 'Laura Green',
    title: 'Emergency Care Patient',
  },
];
