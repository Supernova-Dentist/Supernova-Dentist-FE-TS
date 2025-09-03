'use client';

import PricingCards from '@/components/Pricing/PricingCards';
import PromotionForm from '@/components/PromotionForm/PromotionForm';
import ServiceForm from '@/components/ServiceForm/ServiceForm';
import SmileTransformations from '@/components/SmileTransformations/SmileTransformations';
import { VideoAnimationSection } from '@/components/VideoAnimationSection/VideoAnimationSection';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { type ReactNode, useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import OurJourneyCard from './OurJourneyCard/OurJourneyOpenDayCard';
import OurJourneyForm from './OurJourneyForm/OurJourneyForm';
import { OurJourneyHero } from './OurJourneyHero/OurJourneyHero';
import { OurJourneySlideTabs } from './OurJourneySlideTabs/OurJourneySlideTabs';
import { OurJourneyVideoSection } from './OurJourneyVideoSection/OurJourneyVideoSection';
import Results from './Results/Results';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { OurJourney } from './OurJourneyTimeline/contentData';
import BuildingTransformations from './BuildingTransformations/BuildingTransformations';

const pricing = [
  {
    plan: 'Invisalign',
    price: { number: 1000, text: 'Over' },
    offerPrice: 1470,
    features: [
      'Free Invisalign assessment',
      'For Comprehensive Invisalign cases',
      '£500 off Treatment cost',
      'Free whitening worth £425',
      '3 Free sets of vivera retainers worth £399',
    ],
  },
];

export const OurJourneyContent = () => {
  return (
    <div className='bg-cream'>
      <OurJourneyHero />

      <section id='offer'>
        <OurJourneySlideTabs />
        <TextParallaxContent
          portraitImgUrl='/assets/images/invisalign_1.jpg'
          landscapeImgUrl='/assets/images/invisalign_1.jpeg'
          logoSrc='/assets/images/logo.png'
          subheading='About Us'
          heading='Who We Are.'
        >
          <motion.div
            className='relative w-full mx-auto max-w-7xl p-4 md:p-12 flex flex-col lg:flex-row items-center gap-8 justify-center'
            initial='hidden'
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Text + Button */}
            <div className='w-full lg:w-1/2 flex flex-col text-center lg:text-left'>
              <h2 className='text-gold text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mt-8'>Who We Are</h2>
              <p className='mt-4 text-white'>
                We’re a proud, family-led practice built on the belief that every patient deserves to feel listened to,
                respected, and truly cared for. Our close-knit team works together like family and we treat our patients
                like part of it too. At Supernova Dental Practice from your very first visit you’ll notice our
                commitment to creating a calm, comfortable environment throughout your whole patient journey.
              </p>
              <Link className='mx-auto' href='/practice'>
                <Button className='mt-6 w-fit p-6 '>Learn More!</Button>
              </Link>
            </div>

            {/* Image */}
            <motion.div
              className='w-full lg:w-1/2 flex justify-center'
              initial='hidden'
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            >
              <Image
                src='/assets/images/staff_1.jpg'
                alt='About Us'
                width={600}
                height={800}
                quality={100}
                className='object-contain h-auto w-full max-w-[40rem] rounded-lg'
              />
            </motion.div>
          </motion.div>
        </TextParallaxContent>
      </section>
      <section id='cases'>
        <OurJourneySlideTabs />
        <TextParallaxContent
          portraitImgUrl='/assets/images/invisalign_p_1.jpg'
          landscapeImgUrl='/assets/images/invisalign_2.jpg'
          logoSrc='/assets/images/logo.png'
          subheading='Our Journey'
          heading='From Shell to Success.'
        >
          <BuildingTransformations />
          {/* <div className='relative w-full mx-auto'>
            <OurJourney id='journey' />
          </div> */}
        </TextParallaxContent>
      </section>
      <section id='journey'>
        <OurJourneySlideTabs />
        <TextParallaxContent
          portraitImgUrl='/assets/images/invisalign_p_2.jpg'
          landscapeImgUrl='/assets/images/invisalign_landscape_2.jpg'
          logoSrc='/assets/images/logo.png'
          subheading='Modern'
          heading='See the journey.'
        >
          <div className='relative w-full max-w-[360px] mx-auto aspect-[9/16]'>
            <video
              className='w-full h-full object-fit rounded-lg lg:mt-8'
              controls
              preload='metadata'
              poster='/assets/images/video_thumbnail.png' // Optional: use an image as a placeholder before the video loads
            >
              <source src={'/assets/videos/why_supernova.mp4'} type='video/mp4' />
              Sorry, your browser doesn&apos;t support the video tag.
            </video>
          </div>
        </TextParallaxContent>
      </section>
      <section id='results'>
        <OurJourneySlideTabs />
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

      <OurJourneyVideoSection />
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
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      // ADD A PROP TO BE ABLE TO TOGGLE THE HEIGHT FOR LONGER SECTIONS
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
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ scale, willChange: 'transform' }}
      className='sticky z-0 overflow-hidden rounded-3xl h-[calc(100vh-3rem)] top-12'
    >
      {/* Portrait Image (Mobile) */}
      <div className='absolute inset-0 sm:hidden w-full h-full'>
        <Image
          src={portraitImgUrl}
          alt='Invisalign Portrait'
          fill
          className='object-cover'
          priority
          sizes='(max-width: 640px) 100vw'
        />
      </div>

      {/* Landscape Image (Desktop) */}
      <div className='absolute inset-0 hidden sm:block w-full h-full'>
        <Image
          src={landscapeImgUrl}
          alt='Invisalign Landscape'
          fill
          className='object-cover'
          priority
          sizes='(min-width: 640px) 100vw'
        />
      </div>

      {/* Overlay for Dimming Effect */}
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
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  const handleScroll = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className='absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white z-40'
    >
      <p className='mb-2 text-center text-xl md:mb-4 md:text-3xl'>{subheading}</p>
      <p className='text-center text-4xl font-bold md:text-7xl max-w-[56rem]'>{heading}</p>

      {/* Animated Arrow Button */}
      {/* <button onClick={handleScroll} className='mt-6 flex flex-col items-center'>
        <video src='assets/videos/arrow.webm' autoPlay loop muted playsInline className='w-12 h-12 mt-2' />
      </button> */}
    </motion.div>
  );
};

const ExampleContent = () => (
  <OurJourneyForm
    serviceName='Invisalign'
    serviceChip='Invisalign® Open Day'
    serviceDescription='Get a personalised Invisalign treatment plan and discover how clear aligners can transform your smile.'
    formTitle='Sign up for your Free Invisalign Consultation'
    formDescription='Sign up now for a no-obligation consultation with our expert team, and take the first step towards your perfect smile with Invisalign clear aligners.'
  />
);
