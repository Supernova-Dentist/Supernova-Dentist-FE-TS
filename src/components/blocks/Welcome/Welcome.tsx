'use client';

import Snowfall from 'react-snowfall';
import AuroraHero from '../AuroraHero/AuroraHero';

export default function Welcome() {
  return (
    <div id='welcome' className='relative min-h-[100vh]'>
      <AuroraHero />

      <Snowfall
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
        snowflakeCount={120}
      />
    </div>
  );
}
