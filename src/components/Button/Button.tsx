import React from 'react';
import { cn } from '@/lib/utils';

type ButtonTypeProps = 'button' | 'submit' | 'reset';

type ButtonProps = {
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: ButtonTypeProps;
  disabled?: boolean;
  children?: React.ReactNode;
  [key: string]: any;
};

export default function Button({
  text,
  onClick,
  className,
  type = 'button',
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'bg-gold rounded px-6 py-4 text-md hover:bg-lightGold transition-all duration-150 text-grey',
        className
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children !== undefined ? children : text}
    </button>
  );
}
