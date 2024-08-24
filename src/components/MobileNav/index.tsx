import React from 'react';
import MenuButton from './MenuButton';
import MenuContent from './MenuContent';

export default function MobileMenu() {
  return (
    <div className='menu-wrapper'>
      <MenuButton />
      <MenuContent />
    </div>
  );
}
