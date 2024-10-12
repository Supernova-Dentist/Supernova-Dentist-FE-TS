import React, { useContext } from 'react';
import { Dribbble, Facebook, Instagram, Twitch, Youtube } from 'react-feather';
import { MenuContext } from '../MenuManager';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import './style.scss';

const internalLinks = [
  {
    url: '/',
    header: (
      <>
        <h2>Home</h2>
      </>
    ),
  },
  {
    url: '#results',
    header: <h2>Results</h2>,
    subHeaders: [
      {
        url: '#reviews',
        header: <h3>Reviews</h3>,
      },
    ],
  },
  {
    url: '#reviews',
    header: <h3>Reviews</h3>,
  },
  {
    url: '#offers',
    header: <h3>Offers</h3>,
  },
  {
    url: '#social',
    header: <h3>Social</h3>,
  },
  {
    url: '#location',
    header: <h3>Find us</h3>,
  },
  {
    url: '#faqs',
    header: <h3>FAQs</h3>,
  },
];

const externalLinks = [
  {
    url: 'www.facebook.com',
    component: <Facebook />,
  },
  {
    url: 'www.instagram.com',
    component: <Instagram />,
  },
  {
    url: 'www.youtube.com',
    component: <Youtube />,
  },
  {
    url: 'www.dribbble.com',
    component: <Dribbble />,
  },
  {
    url: 'www.twitch.com',
    component: <Twitch />,
  },
];

export default function MenuContent() {
  const { open, setOpen } = useContext(MenuContext);
  return (
    <div className='menu-holder'>
      <div className={cn('menu-inside', { open })}>
        <div className='menu-nav-container'>
          <ul className='internal-nav-links text-center'>
            {internalLinks.map((link) => (
              <li key={link.url}>
                <Link onClick={() => setOpen(!open)} href={link.url} className='header-link'>
                  {link.header}
                </Link>
                {link.subHeaders?.map((subLink) => (
                  <Link key={subLink.url} onClick={() => setOpen(!open)} href={subLink.url} className='subheader-link'>
                    {subLink.header}
                  </Link>
                ))}
              </li>
            ))}
          </ul>
          <ul className='external-nav-links text-center'>
            {externalLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.component}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
