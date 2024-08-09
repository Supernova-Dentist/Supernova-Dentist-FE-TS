'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import Button from '../Button/Button';

const filters = [
  {
    id: 0,
    text: 'All',
  },
  {
    id: 773520406,
    text: 'Invisalign',
  },
  {
    id: 1700021,
    text: 'Practice',
  },
];

export default function BlogFilterButtons() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const params = new URLSearchParams(searchParams.toString());

    const button = e.currentTarget;
    const id = button.getAttribute('id');

    if (id === null || id === '0') {
      params.delete('categories');
    } else {
      params.set('page', '1');
      params.set('categories', id);
    }

    void router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className='flex gap-4'>
      {filters.map(({ id, text }) => (
        <React.Fragment key={id}>
          <Button text={text} id={id} className='bg-gray-100 px-6 py-2 rounded-sm' onClick={handleClick} />
        </React.Fragment>
      ))}
    </div>
  );
}
