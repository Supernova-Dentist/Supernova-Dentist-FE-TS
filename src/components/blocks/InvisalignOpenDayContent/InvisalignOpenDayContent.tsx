'use client';

import PricingCards from '@/components/Pricing/PricingCards';
import PromotionForm from '@/components/PromotionForm/PromotionForm';
import ServiceForm from '@/components/ServiceForm/ServiceForm';
import SmileTransformations from '@/components/SmileTransformations/SmileTransformations';
import { VideoAnimationSection } from '@/components/VideoAnimationSection/VideoAnimationSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { type ReactNode, useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import InvisalignOpenDayCard from './InvisalignOpenDayCard/InvisalignOpenDayCard';
import InvisalignOpenDayForm from './InvisalignOpenDayForm/InvisalignOpenDayForm';
import { InvisalignOpenDayHero } from './InvisalignOpenDayHero/InvisalignOpenDayHero';
import InvisalignOpenDayJourney from './InvisalignOpenDayJourney/InvisalignOpenDayJourney';
import { InvisalignOpenDaySlideTabs } from './InvisalignOpenDaySlideTabs/InvisalignOpenDaySlideTabs';
import Results from './Results/Results';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { InvisalignOpenDayVideoSection } from './InvisalignOpenDayVideoSection/InvisalignOpenDayVideoSection';

const pricing = [
  {
    plan: 'Invisalign Deluxe',
    price: { number: 1000, text: 'Over' },
    offerPrice: 1470,
    features: [
      'Free Invisalign assessment',
      'Includes Dual arch Invisalign',
      '£500 off Treatment cost',
      'Free whitening worth £425',
      'Free vivera retainers worth £399',
    ],
  },
];

export const InvisalignOpenDayContent = () => {
  return (
    <div className='bg-cream'>
      <InvisalignOpenDayHero />
      <div className='p-4 md:p-12 min-h-screen flex flex-col justify-center items-center'>
        <InvisalignOpenDayForm
          serviceName='Invisalign'
          serviceChip='Invisalign® Open Day'
          serviceDescription='Exclusive open day bonuses and discounts worth over £1470 if you go ahead at the event'
          formTitle='Sign Up for a Free Consultation'
          formDescription='Meet with our experts, ask questions, and learn how Invisalign can transform your smile.'
        />
      </div>

      <section id='offer'>
        <InvisalignOpenDaySlideTabs />
        <TextParallaxContent
          portraitImgUrl='/assets/images/invisalign_1.jpg'
          landscapeImgUrl='/assets/images/invisalign_1.jpeg'
          logoSrc='/assets/images/logo.png'
          subheading='Huge Savings'
          heading="Don't miss out."
        >
          <div className='flex items-center justify-center pt-8 pb-16'>
            {pricing.map((planData, index) => (
              <InvisalignOpenDayCard
                key={index}
                plan={planData.plan}
                price={planData.price}
                offerPrice={planData.offerPrice}
                features={planData.features}
                monthly={false}
                isMiddle
              />
            ))}
          </div>
        </TextParallaxContent>
      </section>
      <section id='cases'>
        <InvisalignOpenDaySlideTabs />
        <TextParallaxContent
          portraitImgUrl='/assets/images/invisalign_p_1.jpg'
          landscapeImgUrl='/assets/images/invisalign_2.jpg'
          logoSrc='/assets/images/logo.png'
          subheading='Treatment Cases'
          heading='See how it can help.'
        >
          <div className='relative w-full max-w-[360px] mx-auto aspect-[9/16]'>
            <video
              className='w-full h-full object-fit rounded-lg lg:mt-8'
              controls
              preload='metadata'
              src='/assets/videos/invisalign_treatment_cases.mp4'
            />
          </div>
        </TextParallaxContent>
      </section>
      <section id='journey'>
        <InvisalignOpenDaySlideTabs />
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
        <InvisalignOpenDaySlideTabs />
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

      <InvisalignOpenDayVideoSection />
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
      className='sticky z-0 overflow-hidden rounded-3xl h-[calc(100vh-3rem)] top-12 bg-cover bg-center'
    >
      {/* Portrait image (default for mobile) */}
      <div
        className='absolute inset-0 bg-cover bg-center sm:hidden w-full h-full'
        style={{ backgroundImage: `url(${portraitImgUrl})` }}
      />

      {/* Landscape image (for medium screens and above) */}
      <div
        className='absolute inset-0 hidden sm:block bg-cover bg-center w-full h-full'
        style={{ backgroundImage: `url(${landscapeImgUrl})` }}
      />

      {/* Overlay for dimming effect */}
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
      {logoSrc && <img src={logoSrc} className='w-auto h-auto max-w-full mt-4 md:w-32 md:h-32' alt='Logo' />}

      {/* Animated Arrow Button */}
      <button onClick={handleScroll} className='mt-6 flex flex-col items-center'>
        <video src='assets/videos/arrow.webm' autoPlay loop muted playsInline className='w-12 h-12 mt-2' />
      </button>
    </motion.div>
  );
};

const ExampleContent = () => (
  <InvisalignOpenDayForm
    serviceName='Invisalign'
    serviceChip='Invisalign® Open Day'
    serviceDescription='Get a personalised Invisalign treatment plan and discover how clear aligners can transform your smile.'
    formTitle='Sign up for your Free Invisalign Consultation'
    formDescription='Sign up now for a no-obligation consultation with our expert team, and take the first step towards your perfect smile with Invisalign clear aligners.'
  />
);
