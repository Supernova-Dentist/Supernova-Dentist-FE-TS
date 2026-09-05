'use client';

import PricingCards from '@/components/Pricing/PricingCards';
import PromotionForm from '@/components/PromotionForm/PromotionForm';
import ServiceForm from '@/components/ServiceForm/ServiceForm';
import SmileTransformations from '@/components/SmileTransformations/SmileTransformations';
import { VideoAnimationSection } from '@/components/VideoAnimationSection/VideoAnimationSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { type ReactNode, useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import Results from './Results/Results';
import SmileStoryCard from './SmileStoryCard/SmileStoryCard';
import SmileStoryForm from './SmileStoryForm/SmileStoryForm';
import { SmileStoryHero } from './SmileStoryHero/SmileStoryHero';
import SmileStoryJourney from './SmileStoryJourney/SmileStoryJourney';
import { SmileStorySlideTabs } from './SmileStorySlideTabs/SmileStorySlideTabs';
import { SmileStoryVideoSection } from './SmileStoryVideoSection/SmileStoryVideoSection';

const pricing = [
  {
    plan: 'Smile Transformation',
    price: { number: 1000, text: 'From' },
    offerPrice: 1500,
    features: [
      'FREE consultation',
      'FREE hygiene check',
      'Whitening options',
      'Veneers included',
      '£250 OFF treatment',
    ],
  },
];

export const SupernovaSmileStoriesContent = () => {
  return (
    <div className='bg-cream'>
      <h1 className='sr-only'>Supernova Smile Stories</h1>
      <SmileStoryHero />
      <div className='p-4 md:p-12 min-h-screen flex flex-col justify-center items-center'>
        <SmileStoryForm
          serviceName='Smile Transformation'
          serviceChip='Supernova Smile Stories'
          serviceDescription='Bespoke patient journeys - transform your smile today!'
          formTitle='Register For A Consultation'
          formDescription='Meet with our experts, ask questions, and explore how we can create your perfect smile.'
        />
      </div>

      <section id='journey'>
        <SmileStorySlideTabs />

        <TextParallaxContent
          portraitImgUrl='/assets/images/invisalign_p_2.jpg'
          landscapeImgUrl='/assets/images/invisalign_landscape_2.jpg'
          logoSrc='/assets/images/logo.png'
          subheading='The Supernova Experience'
          heading='It’s not just about your treatment. It’s about your overall patient experience.'
        >
          <div className='space-y-6'>
            <div className='relative w-full max-w-[600px] mx-auto aspect-[9/16]'>
              <video
                className='w-full h-full object-fit rounded-lg lg:mt-8'
                controls
                preload='none'
                src='/assets/videos/why_supernova.mp4'
                poster='/assets/images/video_thumbnail.png'
              />
            </div>
          </div>
        </TextParallaxContent>
      </section>

      <section id='stories'>
        <SmileStorySlideTabs />
        <TextParallaxContent
          portraitImgUrl='/assets/images/invisalign_1.jpg'
          landscapeImgUrl='/assets/images/invisalign_1.jpeg'
          logoSrc='/assets/images/logo.png'
          subheading='Real Patient Experience'
          heading='Hear Rowannah’s Smile Story'
        >
          <div className='relative w-full max-w-[600px] mx-auto aspect-[9/16]'>
            <video
              className='w-full h-full object-fit rounded-lg lg:mt-8'
              controls
              preload='none'
              src='/assets/videos/Supernova_Smile_Story.mp4'
              poster='/assets/images/Supernova_Smile_Story_Poster.png'
            />
          </div>
        </TextParallaxContent>
      </section>

      <section id='results'>
        <SmileStorySlideTabs />
        <TextParallaxContent
          portraitImgUrl='/assets/images/invisalign_4.jpg'
          landscapeImgUrl='/assets/images/invisalign_4.jpg'
          logoSrc='/assets/images/logo.png'
          subheading='Results'
          heading='See the difference we can make.'
        >
          <Results />
        </TextParallaxContent>
      </section>

      <SmileStoryVideoSection />
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  portraitImgUrl,
  landscapeImgUrl,
  subheading,
  heading,
  children,
  logoSrc,
}: {
  portraitImgUrl: string;
  landscapeImgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
  logoSrc?: string;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className='relative h-[250vh]'>
        <StickyImage portraitImgUrl={portraitImgUrl} landscapeImgUrl={landscapeImgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} logoSrc={logoSrc} scrollToRef={contentRef} />
        <div ref={contentRef}>{children}</div>
      </div>
    </div>
  );
};

const StickyImage = ({ portraitImgUrl, landscapeImgUrl }: { portraitImgUrl: string; landscapeImgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['end end', 'end start'] });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ scale, willChange: 'transform' }}
      className='sticky z-0 overflow-hidden rounded-3xl h-[calc(100vh-3rem)] top-12'
    >
      <div className='absolute inset-0 sm:hidden w-full h-full'>
        <Image
          src={portraitImgUrl}
          alt='Smile Portrait'
          fill
          className='object-cover'
          priority
          sizes='(max-width: 640px) 100vw'
        />
      </div>
      <div className='absolute inset-0 hidden sm:block w-full h-full'>
        <Image
          src={landscapeImgUrl}
          alt='Smile Landscape'
          fill
          className='object-cover'
          priority
          sizes='(min-width: 640px) 100vw'
        />
      </div>
      <motion.div className='absolute inset-0 bg-neutral-950/70' style={{ opacity }} />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
  logoSrc,
  scrollToRef,
}: {
  subheading: string;
  heading: string;
  logoSrc?: string;
  scrollToRef: React.RefObject<HTMLDivElement>;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start end', 'end start'] });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  const handleScroll = () => {
    if (scrollToRef.current) scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className='absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white z-40'
    >
      <p className='mb-2 text-center text-xl md:mb-4 md:text-3xl'>{subheading}</p>
      <p className='text-center text-4xl font-bold md:text-7xl max-w-[56rem]'>{heading}</p>
    </motion.div>
  );
};
