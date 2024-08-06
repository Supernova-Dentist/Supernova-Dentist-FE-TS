'use client';

import React from 'react';
import Button from '../Button/Button';

const filters = [
  {
    id: 1,
    text: 'All',
  },
  {
    id: 2,
    text: 'Invisalign',
  },
  {
    id: 3,
    text: 'Practice',
  },
];

export default function BlogFilterButtons() {
  return (
    <div className='flex gap-4'>
      {filters.map(({ id, text }) => (
        <React.Fragment key={id}>
          <Button text={text} className='bg-gray-100 px-6 py-2 rounded-sm' />
        </React.Fragment>
      ))}
    </div>
  );
}
