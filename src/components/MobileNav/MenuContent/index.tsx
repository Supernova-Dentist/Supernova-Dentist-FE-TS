import React, { useContext } from 'react';
import { Dribbble, Facebook, Instagram, Twitch, Youtube } from 'react-feather';
import { MenuContext } from '../MenuManager';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { navLinks } from '@/lib/constants';
import './style.scss';

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
    <nav className='menu-holder'>
      <div className={cn('menu-inside', { open })}>
        <div className='menu-nav-container'>
          <ul className='internal-nav-links text-center flex flex-col'>
            <li>
              <Link onClick={() => setOpen(!open)} href='/' className='header-link'>
                Home
              </Link>
            </li>
            {navLinks.map(({ name, subLinks, url }) => (
              <li key={url}>
                <Link className='header-link' href={url}>
                  {name}
                </Link>
                {subLinks !== undefined && (
                  <ul className='sub-links mt-5'>
                    {subLinks.map((subLink) => (
                      <li key={subLink.link}>
                        <Link onClick={() => setOpen(!open)} href={subLink.link} className='subheader-link block'>
                          {subLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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
    </nav>
  );
}
