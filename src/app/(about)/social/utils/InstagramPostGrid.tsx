'use client';

import { ChatBubbleIcon, HeartIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import React, { useState } from 'react';
import InstagramPostModal from './InstagramPostModal';
import { instaPostItems } from './instaPostItems';

export default function InstagramPostGrid({ posts }: any) {
  const [selectedPost, setSelectedPost] = useState([]);

  console.log({ posts });

  return (
    <div className='container mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {posts?.map((post: any, index: number) => (
        <div key={index} className='bg-grey rounded-lg overflow-hidden shadow-lg'>
          <Image
            src={post.media_url}
            alt='Instagram Post'
            width={400}
            height={400}
            className='w-full h-64 object-cover'
          />
          <div className='p-4 bg-lightGrey'>
            <div className='h-20 overflow-y-auto'>
              <p className='text-sm text-cream mb-2'>
                {post.caption.length > 75 ? (
                  <>
                    {post.caption.substring(0, 75)}...
                    {/* <button onClick={() => setSelectedPost(post)} className='text-blue-500 underline ml-1'>
                      Show More
                    </button> */}
                  </>
                ) : (
                  post.caption
                )}
              </p>
            </div>
            {/* <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <HeartIcon className='w-5 h-5 text-red-500' />
                <span className='text-sm font-medium text-cream'>{post.likes}</span>
              </div>
              <div className='flex items-center gap-2'>
                <ChatBubbleIcon className='w-5 h-5 text-cream' />
                <span className='text-sm font-medium text-cream'>{post.comments}</span>
              </div>
            </div> */}
          </div>
        </div>
      ))}
      {/* {selectedPost != null && <InstagramPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />} */}
    </div>
  );
}
