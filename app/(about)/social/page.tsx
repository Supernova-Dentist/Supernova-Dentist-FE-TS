'use client';

import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { ChatBubbleIcon, HeartIcon, InstagramLogoIcon } from '@radix-ui/react-icons';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import InstagramPostModal from './utils/InstagramPostModal';
import { instaPostItems } from './utils/instaPostItems';

export default function SocialMedia() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-start py-12 bg-gray-50'>
        <div className='w-full max-w-7xl px-6 sm:px-8 lg:px-12'>
          <BreadCrumb />

          <div className='flex items-center justify-between mb-8'>
            <div>
              <h1 className='text-3xl font-bold'>Our Instagram</h1>
              <p className='text-muted-foreground'>Follow us on Instagram for the latest updates and dental tips.</p>
            </div>
            <Link
              href='#'
              className='inline-flex items-center gap-2 bg-grey text-primary rounded-md px-4 py-2 hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring'
              prefetch={false}
            >
              <InstagramLogoIcon className='w-5 h-5 text-cream' />
              <span className='text-cream'>Follow</span>
            </Link>
          </div>

          <div className='container mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {instaPostItems.map((post, index) => (
              <div key={index} className='bg-grey rounded-lg overflow-hidden shadow-lg'>
                <Image
                  src={post.image}
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
                          <button onClick={() => setSelectedPost(post)} className='text-blue-500 underline ml-1'>
                            Show More
                          </button>
                        </>
                      ) : (
                        post.caption
                      )}
                    </p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <HeartIcon className='w-5 h-5 text-red-500' />
                      <span className='text-sm font-medium text-cream'>{post.likes}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <ChatBubbleIcon className='w-5 h-5 text-cream' />
                      <span className='text-sm font-medium text-cream'>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedPost && <InstagramPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </>
  );
}
