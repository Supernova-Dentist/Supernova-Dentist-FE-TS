'use client';

import React from 'react';

type ButtonTypeProps = 'button' | 'submit' | 'reset';

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  className?: string;
  type?: ButtonTypeProps;
  disabled?: boolean;
  children?: React.ReactNode;
};

export default function Button({ text, onClick, className, type = 'button', disabled = false, children }: ButtonProps) {
  return (
    <button className={className} onClick={onClick} type={type} disabled={disabled}>
      {children !== undefined ? children : text}
    </button>
  );
}
