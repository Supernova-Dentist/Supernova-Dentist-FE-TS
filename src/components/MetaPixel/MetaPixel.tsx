'use client';

import { useEffect } from 'react';

export default function MetaPixel() {
  useEffect(() => {
    if (window?.fbq !== undefined) {
      window.fbq('init', '539899052125710');
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <>
      <script async src='https://connect.facebook.net/en_US/fbevents.js' />
      <noscript>
        <img
          height='1'
          width='1'
          style={{ display: 'none' }}
          src='https://www.facebook.com/tr?id=539899052125710&ev=PageView&noscript=1'
        />
      </noscript>
    </>
  );
}
