'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import InstagramPostModal from './InstagramPostModal';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function InstagramPostGrid({ posts }: InstagramPostGridProps) {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const [selectedTab, setSelectedTab] = useState<'posts' | 'reels'>('posts'); // Default to 'posts'

  const [videoPlaying, setVideoPlaying] = useState<string | null>(null); // Track which video is playing

  const handleTabChange = (tab: 'posts' | 'reels') => {
    setSelectedTab(tab);
  };

  const filteredPosts = posts?.filter((post) => {
    if (selectedTab === 'posts') {
      return post.media_type === 'IMAGE'; // Only show posts (images)
    } else {
      return post.media_type === 'VIDEO'; // Only show reels (videos)
    }
  });

  function handleShowMoreClick(post: InstagramPost) {
    setSelectedPost(post);
  }

  function renderPostContent(post: InstagramPost) {
    const isVideo = post.media_type === 'VIDEO'; // Check if it's a video
    const thumbnailUrl = post.thumbnail_url ?? post.media_url; // Fallback to media_url if no thumbnail_url

    return (
      <motion.div
        key={post.id}
        className='rounded-lg overflow-hidden shadow-lg cursor-pointer'
        onClick={() => handleShowMoreClick(post)}
      >
        {isVideo ? (
          <div
            className='relative w-full'
            style={{ paddingTop: `${(476 / 267) * 100}%` }} // Aspect ratio based on video dimensions
          >
            {videoPlaying !== post.id ? (
              // Show the thumbnail before clicking
              <Image
                src={thumbnailUrl}
                alt='Instagram Reel Thumbnail'
                layout='fill'
                objectFit='fill'
                className='rounded-t-lg'
              />
            ) : (
              // Show the video after clicking
              <video controls className='absolute inset-0 w-full h-full'>
                <source src={post.media_url} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ) : (
          <div className='relative w-full aspect-[1/1]'>
            <Image
              src={post.media_url} // For images, use the media_url directly
              alt='Instagram Post'
              layout='fill'
              objectFit='fill'
              className='rounded-t-lg'
            />
          </div>
        )}
        <div className='p-4 bg-offWhite'>
          <div>
            <p className='text-sm'>
              {post.caption.length > 75 ? (
                <>
                  {post.caption.substring(0, 75)}...
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent parent click event
                      handleShowMoreClick(post);
                    }}
                    className='text-gold hover:text-lightGold transition-all duration-150 underline ml-1'
                  >
                    Show More
                  </button>
                </>
              ) : (
                post.caption
              )}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  const { ref, inView } = useInView({
    threshold: 0.025, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only play the animation once
  });

  return (
    <motion.div
      ref={ref}
      className='mx-auto py-12'
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Center the tabs */}
      <div className='flex justify-center mb-6'>
        <button
          onClick={() => handleTabChange('posts')}
          className={`mr-4 px-6 py-2 rounded-lg ${
            selectedTab === 'posts' ? 'bg-gold text-white' : 'bg-lightGrey text-white'
          }`}
        >
          Posts
        </button>
        <button
          onClick={() => handleTabChange('reels')}
          className={`px-6 py-2 rounded-lg ${
            selectedTab === 'posts' ? 'bg-lightGrey text-white' : 'bg-gold text-white'
          }`}
        >
          Reels
        </button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {filteredPosts?.map((post) => renderPostContent(post))}
      </div>

      {selectedPost != null && <InstagramPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </motion.div>
  );
}
