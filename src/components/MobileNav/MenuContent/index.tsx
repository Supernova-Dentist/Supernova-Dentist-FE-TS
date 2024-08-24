import cn from 'classnames';
import React, { useContext } from 'react';
import { Dribbble, Facebook, Instagram, Twitch, Youtube } from 'react-feather';
import { MenuContext } from '../MenuManager';

import './style.scss';

const internalLinks = [
  {
    url: '#1',
    component: (
      <>
        <h2>Home</h2>
      </>
    ),
  },
  {
    url: '#2',
    component: <h2>Cosmetic Services</h2>,
  },
  {
    url: '#3',
    component: <h2>General Services</h2>,
  },
  {
    url: '#4',
    component: <h2>About</h2>,
  },
  {
    url: '#5',
    component: <h2>Media</h2>,
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
  const { open } = useContext(MenuContext);
  return (
    <div className='menu-holder'>
      <div className={cn('menu-inside', { open })}>
        <div className='menu-nav-container'>
          <ul className='internal-nav-links text-center'>
            {internalLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.component}</a>
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
