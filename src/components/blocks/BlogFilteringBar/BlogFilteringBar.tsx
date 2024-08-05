'use client';

import { Suspense } from 'react';
import { cn } from '@/lib/utils';
import Searchbar from '@/components/Searchbar/Searchbar';

export default function BlogFilteringBar({ className }: { className?: string }) {
  return (
    <div className={cn(`flex justify-between items-center ${className}`)}>
      <div>Filters</div>
      <Suspense fallback={null}>
        <Searchbar placeholder='Search blogs...' />
      </Suspense>
    </div>
  );
}
