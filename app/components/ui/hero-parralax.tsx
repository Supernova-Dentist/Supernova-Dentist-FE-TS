'use client';
import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const products = [
  {
    title: 'Invisalign',
    link: '/invisalign',
    thumbnail: 'https://via.placeholder.com/600x600.png?text=Teeth+Whitening',
  },
  {
    title: 'Composite Bonding',
    link: '/composite-bonding',
    thumbnail: 'https://via.placeholder.com/600x600.png?text=Cosmetic+Dentistry',
  },
  {
    title: 'Implants',
    link: '/implants',
    thumbnail: 'https://via.placeholder.com/600x600.png?text=Dental+Implants',
  },
  {
    title: 'General Dentistry',
    link: '/general-dentistry',
    thumbnail: 'https://via.placeholder.com/600x600.png?text=General+Dentistry',
  },
  {
    title: 'Pediatric Dentistry',
    link: '/pediatric-dentistry',
    thumbnail: 'https://via.placeholder.com/600x600.png?text=Pediatric+Dentistry',
  },
  {
    title: 'Oral Surgery',
    link: '/oral-surgery',
    thumbnail: 'https://via.placeholder.com/600x600.png?text=Oral+Surgery',
  },
  {
    title: 'Periodontics',
    link: '/periodontics',
    thumbnail: 'https://via.placeholder.com/600x600.png?text=Periodontics',
  },
  {
    title: 'About us',
    link: '/about',
    thumbnail: 'https://via.placeholder.com/600x600.png?text=Oral+Surgery',
  },
  {
    title: 'Pricing',
    link: '/Pricing',
    thumbnail: 'https://via.placeholder.com/600x600.png?text=Periodontics',
  },
  {
    title: 'Gallery',
    link: '/gallery',
    thumbnail: 'https://via.placeholder.com/600x600.png?text=Oral+Surgery',
  },
  {
    title: 'Blog',
    link: '/blog',
    thumbnail: 'https://via.placeholder.com/600x600.png?text=Periodontics',
  },
  {
    title: 'Find Us',
    link: '/find-us',
    thumbnail: 'https://via.placeholder.com/600x600.png?text=Periodontics',
  },
];

export const HeroParallax = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);
  const thirdRow = products.slice(8, 11);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 4], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 4], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);

  const translateYSmall = useSpring(useTransform(scrollYProgress, [0, 0.2], [-200, 200]), springConfig);
  const translateYMedium = useSpring(useTransform(scrollYProgress, [0, 0.2], [-500, 300]), springConfig);
  const translateYLarge = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  let translateY;
  if (isSmallScreen) {
    translateY = translateYSmall;
  } else if (isMediumScreen) {
    translateY = translateYMedium;
  } else if (isLargeScreen) {
    translateY = translateYLarge;
  }

  return (
    <div
      ref={ref}
      className='h-[150vh] md:h-[220vh] lg:h-[250vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]'
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=''
      >
        <motion.div className='flex flex-wrap justify-center space-x-4 mb-8'>
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className='flex flex-wrap justify-center space-x-4 mb-8'>
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className='flex flex-wrap justify-center space-x-4'>
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className='max-w-7xl mx-auto py-10 md:py-20 px-4 w-full'>
      <h1 className='text-2xl md:text-5xl font-bold dark:text-white text-center'>
        SUPERNOVA DENTAL
        <br />A SUPERNOVA STAR SMILE
      </h1>
      <p className='max-w-2xl text-base md:text-xl mt-4 md:mt-8 dark:text-neutral-200 mx-auto text-center'>
        At Supernova Dental, we provide top-notch dental services to give you a stellar smile. Our team of expert
        dentists and specialists use the latest technologies to ensure your dental health and enhance your natural
        beauty.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10,
      }}
      key={product.title}
      className='group/product h-32 w-32 md:h-64 md:w-48 lg:h-96 lg:w-64 relative flex-shrink-0'
    >
      <Link href={product.link} className='block group-hover/product:shadow-2xl'>
        <Image
          src={product.thumbnail}
          height='600'
          width='600'
          className='object-cover object-left-top absolute h-full w-full inset-0'
          alt={product.title}
        />
      </Link>
      <div className='absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none'></div>
      <h2 className='absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white'>{product.title}</h2>
    </motion.div>
  );
};
