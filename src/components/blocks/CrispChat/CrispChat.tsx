'use client';
import { useEffect } from 'react';

const CrispChat: React.FC = () => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;

    (() => {
      const d = document;
      const s = d.createElement('script');

      s.src = 'https://client.crisp.chat/l.js';
      s.async = true;
      d.getElementsByTagName('head')[0].appendChild(s);
    })();
  }, []);

  return null;
};

export default CrispChat;
