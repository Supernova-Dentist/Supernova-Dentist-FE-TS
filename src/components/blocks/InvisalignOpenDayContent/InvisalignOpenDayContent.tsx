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
import InvisalignOpenDayCard from './InvisalignOpenDayCard/InvisalignOpenDayCard';
import InvisalignOpenDayForm from './InvisalignOpenDayForm/InvisalignOpenDayForm';
import { InvisalignOpenDayHero } from './InvisalignOpenDayHero/InvisalignOpenDayHero';
import InvisalignOpenDayJourney from './InvisalignOpenDayJourney/InvisalignOpenDayJourney';
import { InvisalignOpenDaySlideTabs } from './InvisalignOpenDaySlideTabs/InvisalignOpenDaySlideTabs';
import { InvisalignOpenDayVideoSection } from './InvisalignOpenDayVideoSection/InvisalignOpenDayVideoSection';
import Results from './Results/Results';

const pricing = [
  {
    plan: 'Invisalign',
    price: { number: 1250, text: 'Up To' },
    offerPrice: 1250,
    features: ['FREE consultation', 'FREE whitening', 'FREE retainers (Vivera)', 'Up To £250 OFF treatment'],
  },
];

export const InvisalignOpenDayContent = () => {
  return (
    <div className='bg-cream'>
      {/* <InvisalignOpenDayHero /> */}
      <div className='p-4 md:p-20 min-h-screen flex flex-col justify-center items-center'>
        <InvisalignOpenDayForm
          serviceName='Invisalign'
          serviceChip='Invisalign® Open Day'
          serviceDescription='Exclusive Invisalign Open Day offer - save up to £1,250!'
          formTitle='Register for a Free Consultation'
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
          <div className='relative w-full max-w-[600px] mx-auto aspect-[9/16]'>
            <video
              className='w-full h-full object-fit rounded-lg lg:mt-8'
              controls
              preload='none'
              src='/assets/videos/invisalign_treatment_cases.mp4'
              poster='/assets/images/treatment_cases.png'
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
          <div className='relative w-full max-w-[600px] mx-auto aspect-[9/16]'>
            <iframe
              src='https://www.facebook.com/plugins/video.php?height=800&href=https%3A%2F%2Fwww.facebook.com%2F61567279201971%2Fvideos%2F692776213553871%2F&show_text=false&width=450&t=0'
              className='w-full h-full'
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling='no'
              frameBorder='0'
              loading='lazy'
              allowFullScreen={true}
              allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
            ></iframe>
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
  <InvisalignOpenDayForm
    serviceName='Invisalign'
    serviceChip='Invisalign® Open Day'
    serviceDescription='Get a personalised Invisalign treatment plan and discover how clear aligners can transform your smile.'
    formTitle='Register for your Free Invisalign Consultation'
    formDescription='Register now for a no-obligation consultation with our expert team, and take the first step towards your perfect smile with Invisalign clear aligners.'
  />
);
