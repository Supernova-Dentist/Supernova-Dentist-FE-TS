'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Searchbar from '@/components/Searchbar/Searchbar';

export default function BlogFilteringBar({ className }: { className?: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');

  console.log({ searchParams });

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value !== '') {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    void router.replace(`${pathname}?${params.toString()}`);
    setSearchTerm(value);
  };

  return (
    <div className={cn(`flex justify-between ${className}`)}>
      <div>Filters</div>
      <Searchbar
        placeholder='Search for a blog...'
        value={searchTerm}
        onChange={handleChange}
        onSearch={(value) => console.log(value)}
      />
    </div>
  );
}
