'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { cn } from '@/lib/utils';

type SearchbarProps = {
  placeholder?: string;
  className?: string;
};

export default function Searchbar({ className, placeholder = 'Search...' }: SearchbarProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value !== '') {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    void router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <input
      className={cn(
        'outline-none border border-gray-300 px-4 py-2 mt-6 lg:mt-0 hover:border-gray-400 focus:border-gray-400 rounded-sm duration-150',
        className
      )}
      type='text'
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
      defaultValue={searchParams.get('search')?.toString()}
    />
  );
}
