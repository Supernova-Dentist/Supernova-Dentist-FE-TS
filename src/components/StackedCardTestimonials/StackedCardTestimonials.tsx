'use client';

import { motion } from 'framer-motion';
import { type Dispatch, type SetStateAction, useState } from 'react';

const StackedCardTestimonials = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className='bg-white py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden'>
      <div className='p-4'>
        <h3 className='text-5xl font-semibold'>Patient Testimonials for Dr. Scott Young</h3>
        <p className='text-slate-500 my-4'>
          Discover why patients consistently praise Dr. Scott Young for his exceptional care, including services such as
          Invisalign, composite bonding, teeth whitening, and emergency dentistry.
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
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5 }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className='absolute top-0 left-0 bottom-0 bg-slate-950'
                style={{ width: selected > n ? '100%' : '0%' }}
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
    <div className='p-4 relative h-[500px] shadow-xl'>
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
      className='absolute top-0 left-0 w-full h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between'
    >
      <img src='/favicon.ico' alt='Supernova logo' className='w-20 h-20 mx-auto' />
      <p className='text-md lg:text-lg font-light italic my-4 flex-1 overflow-auto'>&quot;{description}&quot;</p>
      <div>
        <span className='block font-semibold text-md lg:text-lg'>{name ?? 'Anonymous'}</span>
        <span className='block text-xs lg:text-sm'>{title}</span>
      </div>
    </motion.div>
  );
};

export default StackedCardTestimonials;

interface Testimonial {
  title: string;
  name?: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    description:
      'Scott and his team are absolutely fantastic. His reception staff are incredibly welcoming. They made me feel at ease from my initial call, right through to my appointment with Scott. I am on course to achieve the smile I want. Outstanding level of professionalism. Highly recommend.',
    name: 'Steve Bury',
    title: 'Smile Design Patient',
  },
  {
    description:
      'I had a fantastic experience with Scott and the team at Supernova. He is extremely knowledgeable and experienced, and I felt confident in his care throughout my visit. The team is always accommodating, ensuring they cater to my availability and make the process as smooth as possible. Highly recommend!',
    name: 'Hollie Tudor-Smith',
    title: 'Teeth Whitening Patient',
  },
  {
    description:
      "I am deathly nervous of the dentist, but I called up Thursday as I was in so much pain and spoke to Kayleigh, who was amazing, I was booked in with Scott for today, I was so scared, he was brilliant I had xrays first then asked to come back later, he did an extraction, I have never had some one so gentle and helpful in all my life, I need a few more appointments with things to be done, but Scott put my mind at ease and I'm ready to do this now 😀 Thank you Supernova team.",
    name: 'Rebecca Bryan',
    title: 'Emergency Care Patient',
  },
  {
    description:
      'I had an emergency appointment today with Scott due to having a broken tooth. Scott & his team greeted me with care and kindness. The repair was done efficiently & was pain free. I would recommend Supernova to anyone. A dentist you can trust.',
    name: 'Suzanne Radford',
    title: 'Emergency Care Patient',
  },
  {
    description:
      "I would just like to say how wonderful Scott and his team are as I suffer from anxiety and going to the dentist was a very upsetting time for me,I found as soon as you walk in to supernova dental practice it's totally different from other dentists it's more like a spa and no dentist smells. I had a root filling and never felt a thing which is a first for me best dentist I have ever been to I highly recommend. Thankyou lorraine",
    name: 'Lorraine Drew',
    title: 'General Dentistry Patient',
  },
];
