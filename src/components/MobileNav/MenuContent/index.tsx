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
    url: '/cosmetic-denistry',
    header: <h2>Cosmetic Dentistry</h2>,
    subHeaders: [
      {
        url: '/teeth-whitening',
        header: <h3>Teeth Whitening</h3>,
      },
      {
        url: '/invisalign',
        header: <h3>Invisalign</h3>,
      },
      {
        url: '/cosmetic-bonding',
        header: <h3>Cosmetic Bonding</h3>,
      },
    ],
  },
  {
    url: '/general-dentistry',
    header: <h2>General Dentistry</h2>,
    subHeaders: [
      {
        url: '/general-dentistry',
        header: <h3>General Check-Up</h3>,
      },
      {
        url: '/root-canal-treatment',
        header: <h3>Root Canal Treatment</h3>,
      },
      {
        url: '/dental-implants',
        header: <h3>Fillings</h3>,
      },
      {
        url: '/emergency-dentistry',
        header: <h3>Emergency Dentistry</h3>,
      },
    ],
  },
  {
    url: '/about',
    header: <h2>About</h2>,
    subHeaders: [
      {
        url: '/meet-the-team',
        header: <h3>Meet the Team</h3>,
      },
      {
        url: '/find-us',
        header: <h3>Find Us</h3>,
      },
      {
        url: '/contact',
        header: <h3>Contact</h3>,
      },
    ],
  },
  {
    url: '/media',
    header: <h2>Media</h2>,
    subHeaders: [
      {
        url: '/blog',
        header: <h3>Blog</h3>,
      },
      {
        url: '/gallery',
        header: <h3>Gallery</h3>,
      },
      {
        url: '/social-media',
        header: <h3>Social Media</h3>,
      },
    ],
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
