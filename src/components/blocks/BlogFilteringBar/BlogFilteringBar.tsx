'use client';

import { Suspense } from 'react';
import { cn } from '@/lib/utils';
import Searchbar from '@/components/Searchbar/Searchbar';
import BlogFilterButtons from '@/components/BlogFilterButtons/BlogFilterButtons';

export default function BlogFilteringBar({ className }: { className?: string }) {
  return (
    <div className={cn(`relative flex lg:flex-row flex-col items-center w-full ${className}`)}>
      <div className='lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 justify-center'>
        <BlogFilterButtons />
      </div>
      
      <Suspense fallback={null}>
        <div className='lg:ml-auto justify-center'>
          <Searchbar placeholder='Search blogs...' />
        </div>
      </Suspense>

    </div>
  );
}
