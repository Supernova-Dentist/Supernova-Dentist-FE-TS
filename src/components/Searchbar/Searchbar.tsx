'use client';

import { type ChangeEvent, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { cn } from '@/lib/utils';
// import { useSearchParams } from 'next/navigation';

type SearchbarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onSearch: (value: string) => void;
  debounceDelay?: number;
  className?: string;
};

export default function Searchbar({
  value,
  onChange,
  onSearch,
  className,
  debounceDelay = 300,
  placeholder = 'Search...',
}: SearchbarProps) {
  // const searchParams = useSearchParams();
  // const debouncedOnChange = useMemo(() => debounce(onChange, debounceDelay), [onChange, debounceDelay]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log({ typedVal: e.target.value });
    onChange(e.target.value);

    // debouncedOnChange(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      onSearch(value);
    }
  }

  // useEffect(() => {
  //   return () => {
  //     debouncedOnChange.cancel();
  //   };
  // }, [debouncedOnChange]);

  return (
    <input
      className={cn(
        'outline-none border border-gray-300 px-4 py-2 hover:border-gray-400 focus:border-gray-400',
        className
      )}
      type='text'
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
    />
  );
}
