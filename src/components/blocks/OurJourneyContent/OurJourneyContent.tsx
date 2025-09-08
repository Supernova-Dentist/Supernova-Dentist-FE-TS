'use client';

import PricingCards from '@/components/Pricing/PricingCards';
import PromotionForm from '@/components/PromotionForm/PromotionForm';
import ServiceForm from '@/components/ServiceForm/ServiceForm';
import SmileTransformations from '@/components/SmileTransformations/SmileTransformations';
import { Button } from '@/components/ui/button';
import { VideoAnimationSection } from '@/components/VideoAnimationSection/VideoAnimationSection';
import { scrollToPromotionForm } from '@/utils/scrollToPromotionForm';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { type ReactNode, useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import BuildingTransformations from './BuildingTransformations/BuildingTransformations';
import OurJourneyCard from './OurJourneyCard/OurJourneyOpenDayCard';
import OurJourneyForm from './OurJourneyForm/OurJourneyForm';
import { OurJourneyHero } from './OurJourneyHero/OurJourneyHero';
import { OurJourneySlideTabs } from './OurJourneySlideTabs/OurJourneySlideTabs';
import { OurJourney } from './OurJourneyTimeline/contentData';
import { OurJourneyVideoSection } from './OurJourneyVideoSection/OurJourneyVideoSection';
import Results from './Results/Results';

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

      <section id='about-us'>
        <OurJourneySlideTabs />
        <TextParallaxContent
          portraitImgUrl='/assets/images/invisalign_1.jpg'
          landscapeImgUrl='/assets/images/invisalign_1.jpeg'
          logoSrc='/assets/images/logo.png'
          subheading='About Us'
          heading='Who We Are.'
          height='h-[200vh]'
        >
          <motion.div
            className='relative w-full mx-auto max-w-7xl p-4 md:p-12 flex flex-col lg:flex-row items-center gap-8 justify-center'
            initial='hidden'
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Text + Button */}
            <div className='w-full lg:w-1/2 flex flex-col text-center lg:text-left'>
              <h2 className='text-gold text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mt-8'>Who We Are</h2>
              <p className='mt-4 text-white text-lg md:text-xl '>
                We’re a family-led practice where patients are listened to, respected, and cared for. From your first
                visit, our close-knit team ensures a calm, comfortable experience every step of the way.
              </p>
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
      <section id='our-trasnformation'>
        <OurJourneySlideTabs />
        <TextParallaxContent
          portraitImgUrl='/assets/images/invisalign_p_1.jpg'
          landscapeImgUrl='/assets/images/invisalign_2.jpg'
          logoSrc='/assets/images/logo.png'
          subheading='Our Transformation'
          heading='From Shell to Success.'
          height='h-[300vh]'
        >
          <BuildingTransformations />
          {/* <div className='relative w-full mx-auto'>
            <OurJourney id='journey' />
          </div> */}
        </TextParallaxContent>
      </section>
      <section id='impact'>
        <OurJourneySlideTabs />
        <TextParallaxContent
          portraitImgUrl='/assets/images/invisalign_p_2.jpg'
          landscapeImgUrl='/assets/images/invisalign_landscape_2.jpg'
          logoSrc='/assets/images/logo.png'
          subheading='Impact'
          heading='Supporting patients and community at every step.'
          height={typeof window !== 'undefined' && window.innerWidth > 768 ? 'h-[300vh]' : 'h-[400vh]'}
        >
          <motion.div
            className='relative w-full mx-auto max-w-7xl p-4 md:p-12 flex flex-col lg:flex-row items-center gap-8 justify-center'
            initial='hidden'
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Text + Button */}
            <div className='w-full lg:w-1/2 flex flex-col text-center lg:text-left'>
              <h2 className='text-gold text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mt-8'>
                Partnerships
              </h2>
              <p className='mt-4 text-white text-lg md:text-xl '>
                We were delighted to partner with our neighbours, Brainwave Charity, by donating a FREE Invisalign
                Package as a prize, giving one lucky winner the chance to transform their smile while helping raise
                vital funds to support Brainwave’s incredible work in the community.
              </p>
            </div>

            {/* Image */}
            <motion.div
              className='w-full lg:w-1/2 flex justify-center'
              initial='hidden'
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            >
              <Image
                src='/assets/images/brainwave_giveaway.webp'
                alt='About Us'
                width={600}
                height={800}
                quality={100}
                className='object-contain h-auto w-full max-w-[40rem] rounded-lg'
              />
            </motion.div>
          </motion.div>
          <motion.div
            className='relative w-full mx-auto max-w-7xl p-4 md:p-12 flex flex-col lg:flex-row-reverse items-center gap-8 justify-center'
            initial='hidden'
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Text + Button */}
            <div className='w-full lg:w-1/2 flex flex-col text-center lg:text-left'>
              <h2 className='text-gold text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mt-8'>Promotions</h2>
              <p className='mt-4 text-white text-lg md:text-xl '>
                Over the Easter holidays, we ran a family-friendly offer where parents booking a new patient examination
                received up to three free children’s check-ups — a great way to encourage healthy smiles for all ages.
              </p>
              {/* <p className='mt-4 text-white text-lg md:text-xl '>
                With every adult new patient examination booked during this period, we provided up to three children’s
                examinations completely free of charge.
              </p> */}
              {/* <p className='mt-4 text-white text-lg md:text-xl '>
                It was a great opportunity for parents to take care of their own dental health while ensuring their kids
                received a thorough check-up at no extra cost.
              </p> */}
            </div>

            {/* Image */}
            <motion.div
              className='w-full lg:w-1/2 flex justify-center'
              initial='hidden'
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            >
              <Image
                src='/assets/images/easter_dental_therapy_promo.png'
                alt='About Us'
                width={600}
                height={800}
                quality={100}
                layout='responsive'
                className='object-contain h-auto w-full max-w-[40rem] rounded-lg'
              />
            </motion.div>
          </motion.div>
          <motion.div
            className='relative w-full mx-auto max-w-7xl p-4 md:p-12 flex flex-col lg:flex-row items-center gap-8 justify-center'
            initial='hidden'
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Text + Button */}
            <div className='w-full lg:w-1/2 flex flex-col text-center lg:text-left'>
              <h2 className='text-gold text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mt-8'>
                Word of Mouth
              </h2>
              <p className='mt-4 text-white text-lg md:text-xl '>
                Our growth largely comes from patient referrals people recommend us not just for rewards, but because
                they value our friendly team, relaxing environment, and high-quality care.
              </p>
            </div>

            {/* Image */}
            <motion.div
              className='w-full lg:w-1/2 flex justify-center'
              initial='hidden'
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            >
              <Image
                src='/assets/images/refer_impact.jpg'
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

      <section id='growth'>
        <OurJourneySlideTabs />
        <TextParallaxContent
          portraitImgUrl='/assets/images/invisalign_p_2.jpg'
          landscapeImgUrl='/assets/images/invisalign_landscape_2.jpg'
          logoSrc='/assets/images/logo.png'
          subheading='Growth'
          heading='Growing together with our patients and community.'
          height={typeof window !== 'undefined' && window.innerWidth > 768 ? 'h-[300vh]' : 'h-[400vh]'}
        >
          <motion.div
            className='relative w-full mx-auto max-w-7xl p-4 md:p-12 flex flex-col lg:flex-row items-center gap-8 justify-center'
            initial='hidden'
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Text + Button */}
            <div className='w-full lg:w-1/2 flex flex-col text-center lg:text-left'>
              <h2 className='text-gold text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mt-8'>Reviews</h2>
              <p className='mt-4 text-white text-lg md:text-xl '>
                We’re proud to have received 75 Google reviews, each reflecting the care, comfort, and service we aim to
                deliver. The feedback that inspires us to keep improving the patient journey.
              </p>
            </div>

            {/* Image */}
            <motion.div
              className='w-full lg:w-1/2 flex justify-center'
              initial='hidden'
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            >
              <Image
                src='/assets/images/75_reviews.png'
                alt='About Us'
                width={600}
                height={800}
                quality={100}
                className='object-contain h-auto w-full max-w-[40rem] rounded-lg'
              />
            </motion.div>
          </motion.div>
          <motion.div
            className='relative w-full mx-auto max-w-7xl p-4 md:p-12 flex flex-col lg:flex-row-reverse items-center gap-8 justify-center'
            initial='hidden'
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Text + Button */}
            <div className='w-full lg:w-1/2 flex flex-col text-center lg:text-left'>
              <h2 className='text-gold text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mt-8'>Expanding</h2>
              <p className='mt-4 text-white text-lg md:text-xl '>
                Supernova Dental is growing to meet patient needs, recently welcoming Dr Sara Banuri (implantologist)
                and Dr Jaqueline Amarin (general and restorative dentist). Their expertise expands our appointment
                availability and treatment range, ensuring advanced care under one roof.
              </p>
            </div>

            {/* Image */}
            <motion.div
              className='w-full lg:w-1/2 flex justify-center'
              initial='hidden'
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            >
              <Image
                src='/assets/images/sara_jackie.jpg'
                alt='About Us'
                width={600}
                height={800}
                quality={100}
                className='object-contain h-auto w-full max-w-[40rem] rounded-lg'
              />
            </motion.div>
          </motion.div>
          <motion.div
            className='relative w-full mx-auto max-w-7xl p-4 md:p-12 flex flex-col lg:flex-row items-center gap-8 justify-center'
            initial='hidden'
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Text + Button */}
            <div className='w-full lg:w-1/2 flex flex-col text-center lg:text-left'>
              <h2 className='text-gold text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mt-8'>Teamwork</h2>
              <p className='mt-4 text-white text-lg md:text-xl '>
                What sets us apart is our team’s harmony and shared passion for dentistry and patient care. Supporting
                and learning from each other daily, we create a welcoming environment so patients feel our positive
                energy from the moment they walk in.
              </p>
            </div>

            {/* Image */}
            <motion.div
              className='w-full lg:w-1/2 flex justify-center'
              initial='hidden'
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            >
              <Image
                src='/assets/images/team_sd.jpeg'
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
  height = 'h-[250vh]',
}: {
  portraitImgUrl: string;
  landscapeImgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
  logoSrc?: string;
  height?: string;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className={`relative ${height}`}>
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
