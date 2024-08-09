'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import Button from '../Button/Button';
import { cn } from '@/lib/utils';

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
  const [activeFilter, setActiveFilter] = useState(0);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const params = new URLSearchParams(searchParams.toString());

    const button = e.currentTarget;
    const id = button.getAttribute('id');

    if (id === null || id === '0') {
      params.delete('categories');
      setActiveFilter(0);
    } else {
      setActiveFilter(Number(id));
      params.set('page', '1');
      params.set('categories', id);
    }

    void router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className='flex gap-4'>
      {filters.map(({ id, text }) => (
        <React.Fragment key={id}>
          <Button
            text={text}
            id={id}
            className={cn(
              `bg-gray-200 px-6 py-2 rounded-sm hover:bg-gray-100 duration-150 border border-transparent hover:border-gray-200 ${
                activeFilter === id ? 'bg-gray-100 border-gray-200' : null
              }`
            )}
            onClick={handleClick}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
