import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

type MainLinkProps = {
  href?: string;
  showFlyout: boolean;
  children: React.ReactNode;
  flyoutItems: any[];
  open: boolean;
};

export default function MainLink({ href, showFlyout, children, flyoutItems, open }: MainLinkProps) {
  const [localShowFlyout, setLocalShowFlyout] = useState(showFlyout);

  // Effect to sync local state with showFlyout prop
  useEffect(() => {
    setLocalShowFlyout(showFlyout);
  }, [showFlyout]);

  // Handle click event to toggle flyout if no href
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation if href is not defined
    setLocalShowFlyout(true); // Toggle flyout visibility
  };

  const handleHomeNavigation = () => {
    setLocalShowFlyout(false);
    window.location.href = '/';
  }

  const renderLinkContent = () => (
    <>
      {children}
      {flyoutItems.length > 0 && (
        <ChevronDownIcon
          className={cn('ml-1 transform transition-transform duration-300', {
            'rotate-180': localShowFlyout, // Rotate icon when flyout is open
          })}
        />
      )}
      <span
        style={{
          transform: open ? 'scaleX(1)' : 'scaleX(0)', // Animate underline effect
        }}
        className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-gold transition-transform duration-300 ease-out'
      />
    </>
  );

  // If no href, render a clickable element (like div or span)
  return (
    <span
      onClick={flyoutItems.length > 0 ? handleClick : handleHomeNavigation} // Add click handler for toggling flyout
      aria-expanded={localShowFlyout}
      className={`relative text-white transition-all duration-300 ease-out flex items-center cursor-pointer ${flyoutItems.length > 0 && open ? 'hover:cursor-default' : ''}`}
    >
      {renderLinkContent()}
    </span>
  );
}
