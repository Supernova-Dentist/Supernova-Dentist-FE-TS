'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import debounce from 'lodash.debounce';
import { cn } from '@/lib/utils';

type SearchbarProps = {
  placeholder?: string;
  className?: string;
};

export default function Searchbar({ className, placeholder = 'Search...' }: SearchbarProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value !== '') {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    void router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <input
      className={cn(
        'outline-none border border-gray-300 px-4 py-2 hover:border-gray-400 focus:border-gray-400',
        className
      )}
      type='text'
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
      defaultValue={searchParams.get('search')?.toString()}
    />
  );
}
