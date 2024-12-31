'use client';

import Image from 'next/image';
import { PlayIcon } from '@radix-ui/react-icons';

export default function InstagramMediaComponent({ post, onClick }: InstagramMediaComponentProps) {
  const isVideo = post.media_type === 'VIDEO';

  if (isVideo) {
    return (
      <div className='relative w-full h-64'>
        <Image
          src={post.thumbnail_url || post.media_url}
          alt='Instagram Video Thumbnail'
          width={400}
          height={400}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all'>
          <PlayIcon className='w-12 h-12 text-white opacity-80 group-hover:opacity-100' />
        </div>
      </div>
    );
  }

  return (
    <Image src={post.media_url} alt='Instagram Post' width={400} height={400} className='w-full h-64 object-cover' />
  );
}
