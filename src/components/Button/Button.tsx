import React from 'react';

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
    <button className={className} onClick={onClick} type={type} disabled={disabled} {...props}>
      {children !== undefined ? children : text}
    </button>
  );
}
