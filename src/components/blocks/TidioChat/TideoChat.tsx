'use client';

import { useEffect } from 'react';

export default function TidioChat() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/zpxt3qqr9xeep3mlsftdvrn8sz5maizi.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
