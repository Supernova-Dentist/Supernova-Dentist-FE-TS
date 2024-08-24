import { cn } from '@/lib/utils';
import React, { useContext } from 'react';
import { MenuContext } from '../MenuManager';

import './style.scss';

export default function MenuButton() {
  const { setOpen, open } = useContext(MenuContext);

  return (
    <div className={cn('menu-button-wrap', { open })}>
      <button
        className='menu-button'
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span />
      </button>
    </div>
  );
}
