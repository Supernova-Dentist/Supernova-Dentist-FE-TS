'use client';

import { useEffect } from 'react';

export const AccessibilityWidget = () => {
  useEffect(() => {
    console.log('Component mounted');

    // load the script
    const script = document.createElement('script');
    script.src = 'https://website-widgets.pages.dev/dist/sienna.min.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
};
