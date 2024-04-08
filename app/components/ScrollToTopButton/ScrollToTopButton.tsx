'use client';

import { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import Button from '../Button/Button';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return visible ? (
    <Button
      onClick={scrollToTop}
      className='fixed bottom-24 right-0 p-2 bg-black text-white rounded-l-md opacity-30'
    >
      <MdOutlineKeyboardArrowUp size={26} />
    </Button>
  ) : null;
}
