'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import InstagramPostModal from '@/app/(about)/social/utils/InstagramPostModal';

export default function InstagramPosts({ posts }: { posts: InstagramPost[] }) {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  const handlePostClick = useCallback((post: InstagramPost) => {
    setSelectedPost(post);
  }, []);

  return (
    <>
      {posts?.map((post: InstagramPost) => (
        <div key={post.id} className='relative group max-w-[300px]' onClick={() => handlePostClick(post)}>
          <Image
            src={post.media_url}
            alt='Instagram Post'
            width={400}
            height={400}
            className='w-full h-56 object-cover '
          />
          <div className='absolute inset-0 cursor-pointer bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4'>
            {/* Display caption */}
            <p className='text-sm text-center'>{post.caption.slice(0, 100)}</p>
          </div>
        </div>
      ))}
      {selectedPost != null && <InstagramPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </>
  );
}
