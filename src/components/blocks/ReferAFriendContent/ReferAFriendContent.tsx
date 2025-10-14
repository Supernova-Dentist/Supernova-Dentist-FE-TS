'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { type ReactNode, useRef } from 'react';
import ReferAFriendCard from './ReferAFriendCard/ReferAFriendCard';
import ReferAFriendForm from './ReferAFriendForm/ReferAFriendForm';
import { ReferAFriendHero } from './ReferAFriendHero/ReferAFriendHero';
import { ReferAFriendSlideTabs } from './ReferAFriendSlideTabs/ReferAFriendSlideTabs';
import Results from './Results/Results';

const dentalCreditData = [
  {
    plan: 'Invisalign Open Days',
    price: { number: 1500, text: 'Up To' },
    offerPrice: 1500,
    features: [
      'FREE Consultation',
      'FREE Whitening',
      'FREE Retainers',
      'FREE Hygiene Appointment',
      'PLUS £250 OFF Invisalign treatment',
    ],
    postText: 'IN SAVINGS ON OUR UPCOMING OPEN DAYS',
  },
];

const dentalRewardCreditData = [
  {
    plan: 'Referral Reward',
    price: { number: 50, text: 'GET' },
    offerPrice: 50,
    features: [
      'Referrer: £50 Voucher',
      'Referee: £50 Off Invisalign',
      'Voucher can be used on: General Dentistry, Cosmetic Dentistry, Restorative Dentistry, Implants, Invisalign',
    ],
    postText: 'PER REFERRAL',
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
          serviceDescription='Refer a friend and earn a £50 voucher! Your friend also gets £50 off their Invisalign treatment. Referrer must be a registered patient.'
          imgSrc='/assets/images/scott_jackie_invisalign.jpeg'
          formTitle='Refer A Friend Today'
          formDescription='Fill in the details to refer someone. You will receive a £50 voucher, and your friend will get £50 off their Invisalign treatment.'
        />
      </div>

      <section id='credit'>
        <ReferAFriendSlideTabs />
        <TextParallaxContent
          portraitImgUrl='/assets/images/invisalign_1.jpg'
          landscapeImgUrl='/assets/images/invisalign_1.jpeg'
          logoSrc='/assets/images/logo.png'
          subheading='Huge Savings For Your Friend'
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
          subheading='Referral Reward'
          heading='Earn £50 for every friend you refer!'
        >
          <div className='flex items-center justify-center pt-8 pb-16'>
            {dentalRewardCreditData.map((planData, index) => (
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
          heading='See the Supernova Dental journey.'
        >
          <div className='relative w-full max-w-[600px] mx-auto aspect-[9/16]'>
            <iframe
              className='w-full h-full'
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling='no'
              frameBorder='0'
              allowFullScreen={true}
              allow='clipboard-write; encrypted-media; picture-in-picture; web-share'
              src='/assets/videos/why_supernova.mp4'
            ></iframe>
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
          heading='See the Invisalign difference.'
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
