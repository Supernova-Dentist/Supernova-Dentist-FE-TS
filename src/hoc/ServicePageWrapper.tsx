import React, { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ServicePageWrapper({ children }: Props) {
  return <div className='max-w-6xl mx-auto'>{children}</div>;
}
