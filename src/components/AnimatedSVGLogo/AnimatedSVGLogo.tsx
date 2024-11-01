'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const AnimatedLogo = () => {
  // Properly type the svgRef
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // Adjust SVG size based on container size
    const svg = svgRef.current;
    if (!svg) return; // Check if svgRef.current is null

    const resizeObserver = new ResizeObserver(() => {
      if (svg) {
        const { width } = svg.getBoundingClientRect();
        svg.setAttribute('width', width.toString()); // Ensure width is a string
      }
    });

    resizeObserver.observe(svg);
    return () => resizeObserver.disconnect();
  }, []);

  // Path animations configuration
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2, // Duration of animation
        ease: 'easeInOut', // Easing function
        staggerChildren: 0.5, // Stagger animation for multiple paths
      },
    },
  };

  return (
    <svg
      ref={svgRef}
      id='Layer_1'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      version='1.1'
      viewBox='0 0 400 400'
      style={{
        width: '100%',
        height: 'auto', // Maintain aspect ratio
      }}
    >
      <defs>
        <style>
          {`
            .cls-1 {
              fill: url(#linear-gradient);
            }

            .cls-1, .cls-2, .cls-3 {
              stroke-width: 0px;
            }

            .cls-2 {
              fill: url(#radial-gradient);
            }

            .cls-3 {
              fill: url(#linear-gradient-2);
            }
          `}
        </style>
        <linearGradient
          id='linear-gradient'
          x1='277.87'
          y1='100.53'
          x2='346.17'
          y2='258.33'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0' stopColor='#e6e7e8' />
          <stop offset='1' stopColor='#bcbec0' />
        </linearGradient>
        <linearGradient
          id='linear-gradient-2'
          x1='219.49'
          y1='146.25'
          x2='298.39'
          y2='155.67'
          xlinkHref='#linear-gradient'
        />
        <radialGradient
          id='radial-gradient'
          cx='165.02'
          cy='208.2'
          fx='165.02'
          fy='208.2'
          r='230.92'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0' stopColor='#ffd76b' />
          <stop offset='1' stopColor='#99722d' />
        </radialGradient>
      </defs>
      <g>
        <motion.path
          className='cls-1'
          d='M304.66,280.87c25.19-51.56,44.92-109.57,29.76-166.4-6.85-24.71-23.7-52.06-51.25-55.19-8-.83-16.35,1.22-23.66,5.03,0,0-4.98,2.53-4.98,2.53-16.5,9.23-35.83,15.27-54.42,12.73,14.79-1.75,28.78-6.62,40.6-14.52,3.1-2.08,10.82-7.22,13.83-9.19,8.51-5.7,18.64-9.22,29.21-9.02,25.5.31,46.22,19.76,57.25,41.25,31.39,63.53,5.49,140.81-36.33,192.78h0Z'
          variants={pathVariants}
          initial='hidden'
          animate='visible'
        />
        <motion.path
          className='cls-3'
          d='M267.58,150.78l6.97-1.85-6.97-1.85c-11.61-3.08-20.68-12.15-23.76-23.76l-1.85-6.97-1.85,6.97c-3.08,11.61-12.15,20.68-23.76,23.76l-6.97,1.85,6.97,1.85c11.61,3.08,20.68,12.15,23.76,23.76l1.85,6.97,1.85-6.97c3.08-11.61,12.15-20.68,23.76-23.76Z'
          variants={pathVariants}
          initial='hidden'
          animate='visible'
        />
        <motion.path
          className='cls-2'
          d='M224.47,242.97c-4.8-2.23-9.7-4.29-14.59-6.37-10.59-4.52-21.1-9.15-30.36-15.92-7.11-5.19-13.47-11.77-16.88-19.89-4.05-9.66-3.47-21.12,1.41-30.4,1.25-2.37,2.76-4.56,4.48-6.58.08-.1.15-.19.24-.29.1-.1.19-.2.29-.3,2.2-2.47,4.72-4.65,7.47-6.51,12.78-8.97,26.12-8.57,30.95-8.05-20.71-2.96-34.86,3.38-34.86,3.38h.01c-1.52.73-3.01,1.54-4.47,2.44-12.25,7.55-20.76,20.54-23.85,34.59-2.22,10.07-1.74,20.88,2.33,30.36,6.75,15.73,22.2,25.88,37.71,33.12,15.51,7.24,32.16,12.67,45.64,23.22,13.48,10.55,23.35,28.16,18.66,44.62-2.85,10.01-10.76,18.09-20.08,22.72-27.44,13.62-59.54,1.94-83.16-14.07-10.26-6.95-19.65-15.24-27.76-24.62-3.02-3.5-5.93-7.11-8.73-10.79-4.19-5.64-8.28-11.46-11.59-17.64-27.24-49.88-47.12-110.09-30.27-166.23,7.46-23.95,25.17-49.77,52.23-51.14,8.72-.39,17.31,2.62,24.88,6.91,8.6,4.44,17.47,9.18,26.93,11.62,9.46,2.49,19.33,3.4,29.01,2.42-14.27-1.48-27.77-5.93-39.75-13.47-5.93-3.78-15.46-10.6-21.66-13.69-39.61-18.5-75.03,16.58-86.35,52.51-18.84,57.85,1.34,120.75,33.95,169.35,16.87,25.15,38.03,48.43,64.32,63.92,12.5,7.37,26.34,12.7,40.8,14.41,21.33,2.52,44.21-3.5,59.4-18.69,15.18-15.2,21.02-40.03,11.43-59.25-7.49-15-22.57-24.64-37.77-31.7Z'
          variants={pathVariants}
          initial='hidden'
          animate='visible'
        />
      </g>
    </svg>
  );
};

export default AnimatedLogo;
