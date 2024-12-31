'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import InstagramPostModal from './InstagramPostModal';
import InstagramMediaComponent from '@/components/InstagramMediaComponent/InstagramMediaComponent';

export default function InstagramPostGrid({ posts }: InstagramPostGridProps) {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  function handleShowMoreClick(post: InstagramPost) {
    setSelectedPost(post);
  }

  return (
    <div className='mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {posts?.map((post: InstagramPost, index: number) => (
        <div
          key={index}
          className='rounded-lg overflow-hidden shadow-lg group cursor-pointer'
          onClick={() => handleShowMoreClick(post)}
        >
          <InstagramMediaComponent post={post} onClick={() => handleShowMoreClick(post)} />
          <div className='p-4 bg-offWhite'>
            <div>
              <p className='text-sm'>
                {post.caption.length > 75 ? (
                  <>
                    {post.caption.substring(0, 75)}...
                    <span className='text-gold hover:text-lightGold transition-all duration-150 underline ml-1'>
                      Show More
                    </span>
                  </>
                ) : (
                  post.caption
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
      {selectedPost && <InstagramPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </div>
  );
}
