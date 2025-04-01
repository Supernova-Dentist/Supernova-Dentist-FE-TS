'use client';

import { motion } from 'framer-motion';
import { type Dispatch, type SetStateAction, useState } from 'react';

const KayleighTestimonials = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className='bg-white py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden'>
      <div className='p-4'>
        <h3 className='text-5xl font-semibold'>Patient Testimonials for Kayleigh Dowdle</h3>
        <p className='text-slate-500 my-4'>
          Discover why patients consistently praise Kayleigh Dowdle for her exceptional care, including dental hygiene
          services and emergency dentistry.
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

export default KayleighTestimonials;

interface Testimonial {
  title: string;
  name: string;
  description: string;
}

const testimonials = [
  {
    description:
      'What an experience so far, Loving every second of my journey. Professional curtesy call, text reminders and updates. Earlier appointment provided nothing is to much for this team. I was seen by Kay and her nurse Tori. So professional. Walked me through everything she was doing. Any questions I had, any little issue I have been living with for years was no problem for her. Tori her nurse was amazing so friendly and removed all my excess dribble and I dribble a lot. I had my teeth all cleaned up and now they are exceptionally smooth. How did they make the water taste like cola too, this place just works magic✨',
    name: 'Dan Lathall',
    title: 'Dental Hygiene Patient',
  },
  {
    description: `Highly recommend Supernova Dental. I experienced a friendly and professional welcome from Mia, professional and comforting experience with my appointment with Scott and a fantastic professional experience with Kayleigh for my Hygienist appointment, can honestly say it was the most thorough and pleasant hygienist appointment I've experienced. Fantastic team in a lovely/stylish practice. Thanks to all. Josh`,
    name: 'Jay M',
    title: 'Dental Hygiene Patient',
  },
  {
    description:
      'I am deathly nervous of the dentist, but I called up Thursday as I was in so much pain and spoke to Kayleigh, who was amazing, I was booked in with Scott for today, I was so scared, he was brilliant I had xrays first then asked to come back later, he did an extraction, I have never had some one so gentle and helpful in all my life, I need a few more appointments with things to be done, but Scott put my mind at ease and im ready to do this now 😀 Thank Supernova team',
    name: 'Rebecca Bryan',
    title: 'Emergency Care Patient',
  },
];
