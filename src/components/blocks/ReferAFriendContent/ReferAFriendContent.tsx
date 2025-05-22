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
import ReferAFriendCard from './ReferAFriendCard/ReferAFriendCard';
import ReferAFriendForm from './ReferAFriendForm/ReferAFriendForm';
import { ReferAFriendHero } from './ReferAFriendHero/ReferAFriendHero';
import InvisalignOpenDayJourney from './ReferAFriendJourney/ReferAFriendJourney';
import { ReferAFriendSlideTabs } from './ReferAFriendSlideTabs/ReferAFriendSlideTabs';
import { ReferAFriendVideoSection } from './ReferAFriendVideoSection/ReferAFriendVideoSection';
import Results from './Results/Results';

const dentalCreditData = [
  {
    plan: 'Referral Credit',
    price: { number: 60, text: 'Up to' },
    offerPrice: 60,
    features: ['General Dentistry', 'Cosmetic Dentistry', 'Restorative Dentistry', 'Implants', 'Invisalign'],
    postText: 'CREDIT PER REFERRAL',
  },
];

const leaderboardData = [
  {
    plan: 'Referral Credit',
    price: { number: 60, text: 'Over' },
    offerPrice: 1000,
    features: [
      'Top 5 Win Prizes',
      'Teeth Whitening + £100 Dental Credit (Worth £525)',
      'Electric Toothbrush + Airflow Hygiene Appointment (Worth £350)',
      'Complimentary Hygiene Appointment  (Worth £25)',
      '2x £25 Dental Credit',
    ],
    postText: 'WORTH OF PRIZES TO BE WON',
  },
];

export const ReferAFriendContent = () => {
  return (
    <div className='bg-cream'>
      <ReferAFriendHero />
      <div className='p-4 md:p-12 min-h-screen flex flex-col justify-center items-center'>
        <ReferAFriendForm
          serviceName='Supernova Dental'
          serviceChip='Refer A Friend'
          serviceDescription='Refer a friend and earn up to £60 credit! You both get £10 after their new patient examination, plus you get £50 if they start Invisalign within 2 months. Referrer must be a registered patient. Scheme ends August 31.'
          formTitle='Refer A Friend Today'
          formDescription='Fill in the details to refer someone. Both of you will earn account credit once they attend their new patient exam, and even more if they start Invisalign within 2 months.'
        />
      </div>

      <section id='credit'>
        <ReferAFriendSlideTabs />
        <TextParallaxContent
          portraitImgUrl='/assets/images/invisalign_1.jpg'
          landscapeImgUrl='/assets/images/invisalign_1.jpeg'
          logoSrc='/assets/images/logo.png'
          subheading='Time Limited Scheme'
          heading="Don't miss out."
        >
          <div className='flex items-center justify-center pt-8 pb-16'>
            {dentalCreditData.map((planData, index) => (
              <ReferAFriendCard
                key={index}
                plan={planData.plan}
                price={planData.price}
                offerPrice={planData.offerPrice}
                features={planData.features}
                postText={planData.postText}
                monthly={false}
                isMiddle
              />
            ))}
          </div>
        </TextParallaxContent>
      </section>
      <section id='leaderboard'>
        <ReferAFriendSlideTabs />
        <TextParallaxContent
          portraitImgUrl='/assets/images/invisalign_p_1.jpg'
          landscapeImgUrl='/assets/images/invisalign_2.jpg'
          logoSrc='/assets/images/logo.png'
          subheading='Referral Leaderboard'
          heading='Prizes to be won.'
        >
          <div className='flex items-center justify-center pt-8 pb-16'>
            {leaderboardData.map((planData, index) => (
              <ReferAFriendCard
                key={index}
                plan={planData.plan}
                price={planData.price}
                offerPrice={planData.offerPrice}
                features={planData.features}
                postText={planData.postText}
                monthly={false}
                isMiddle
              />
            ))}
          </div>
        </TextParallaxContent>
      </section>

      <section id='journey'>
        <ReferAFriendSlideTabs />
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
        <ReferAFriendSlideTabs />
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
