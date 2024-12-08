'use client';

import { type ComponentType, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';

// Color values for the gradient animation
const COLORS_TOP = [
  '#FFD700', // Gold
  '#B0C4DE', // Light Slate Gray
  '#708090', // Slate Gray
  '#006400', // Dark Green
  '#1E67C6', // Dark Navy
];

// The AuroraBackground component is unchanged
const AuroraBackground: React.FC = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  // Animate the color value to cycle through COLORS_TOP
  useEffect(() => {
    void animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 15,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        backgroundImage,
      }}
      className='relative min-h-screen overflow-hidden bg-gray-950'
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className='absolute inset-0'
      >
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </motion.div>
    </motion.div>
  );
};

// HOC function

interface WithAuroraBackgroundProps {
  // Define any props you expect to pass into the wrapped component
  [key: string]: any;
}

const withAuroraBackground = <P extends WithAuroraBackgroundProps>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithAuroraBackground: React.FC<P> = (props) => (
    <div className='relative'>
      <AuroraBackground />
      <div className='relative z-10'>
        <WrappedComponent {...props} />
      </div>
    </div>
  );

  ComponentWithAuroraBackground.displayName = `withAuroraBackground(${
    WrappedComponent.displayName != null || WrappedComponent.name.length > 0 || 'Component'
  })`;

  return ComponentWithAuroraBackground;
};

export default withAuroraBackground;
