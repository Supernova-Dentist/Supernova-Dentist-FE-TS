'use client';

import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import React, { useRef } from 'react';
import { Award, Instagram, Facebook } from 'react-feather';
import { FiArrowRight } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

export const StickyCards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.025, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <div ref={inViewRef}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='relative'
      >
        {CARDS.map((c, idx) => (
          <Card key={c.id} card={c} scrollYProgress={scrollYProgress} position={idx + 1} />
        ))}
      </motion.div>
      {/* <div className='h-screen bg-black' /> */}
    </div>
  );
};

const Card = ({
  position,
  card,
  scrollYProgress,
}: {
  position: number;
  card: any;
  scrollYProgress: MotionValue<number>;
}) => {
  const scaleFromPct = (position - 1) / CARDS.length;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const isOddCard = position % 2;

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: position === CARDS.length ? undefined : y,
        background: card.id === 1 ? 'cream' : card.id === 2 ? '#404244' : '#121c26',
        color: card.id === 1 ? 'black' : card.id === 2 ? '#c29470' : 'white',
      }}
      className='sticky top-0 flex w-full origin-top flex-col items-center justify-center px-4'
    >
      <div className='flex flex-row'>
        <card.Icon width='48' height='48' className='mb-4' />
        {card.Icon2 && <card.Icon2 width='48' height='48' className='mb-4 ml-2' />}
      </div>
      <h3 className='mb-6 text-center text-4xl font-semibold md:text-6xl'>{card.title}</h3>
      <p className='mb-8 max-w-lg text-center text-sm md:text-base'>{card.description}</p>
      <a
        href={card.routeTo}
        className={`flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase text-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg ${
          card.ctaClasses
        } ${
          card.id === 1
            ? 'shadow-[4px_4px_0px_goldenrod] hover:shadow-[8px_8px_0px_goldenrod]'
            : card.id === 2
            ? 'shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]'
            : 'shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]'
        }`}
      >
        <span className={`${card.id === 1 ? 'text-gold' : 'text-grey'}`}>{card.buttonText}</span>
        <FiArrowRight className={`${card.id === 1 ? 'text-gold' : 'text-grey'}`} />
      </a>
    </motion.div>
  );
};

const CARD_HEIGHT = 500;

const CARDS = [
  {
    id: 1,
    Icon: Award, // Use an icon that represents testimonials or feedback
    title: 'Had an Appointment with Us?',
    description: 'Share your experience with Supernova Dental. We’d love to hear your feedback!',
    buttonText: 'Write a Review',
    ctaClasses: 'bg-grey', // Adjust color scheme as needed
    routeTo: 'https://g.page/r/Cd1EdVyvZxVIEAI/review', // Assuming ReviewLink redirects to a review page
  },
  // {
  //   id: 2,
  //   Icon: Instagram, // Use an icon that represents social media or updates
  //   Icon2: Facebook,
  //   title: 'Keep in the Loop!',
  //   description:
  //     'Check out the Supernova Dental social media pages and stay updated with the latest news, promotions and dental care tips by following us.',
  //   buttonText: 'Follow Us',
  //   ctaClasses: 'bg-white', // Adjust color scheme as needed
  //   routeTo: '/social',
  // },
  {
    id: 2,
    Icon: ChatBubbleIcon, // Use an icon that represents questions or contact
    title: 'Got a Question or Enquiry?',
    description: 'If you have any questions or would like to make an enquiry, feel free to get in touch with us.',
    buttonText: 'Make an Enquiry',
    ctaClasses: 'bg-gold', // Adjust colour scheme as needed
    routeTo: '/enquiry', // Link to the enquiry page
  },
  // {
  //   id: 3,
  //   Icon: Instagram, // Use an icon that represents social media or updates
  //   Icon2: Facebook,
  //   title: 'Keep in the Loop!',
  //   description:
  //     'Check out the Supernova Dental social media pages and stay updated with the latest news, promotions and dental care tips by following us.',
  //   buttonText: 'Follow Us',
  //   ctaClasses: 'bg-white', // Adjust color scheme as needed
  //   routeTo: '/social',
  // },
];
