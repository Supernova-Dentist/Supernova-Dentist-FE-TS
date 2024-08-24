import cn from 'classnames';
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
          console.log('clicked');

          setOpen(!open);
        }}
      >
        <span />
      </button>
    </div>
  );
}
