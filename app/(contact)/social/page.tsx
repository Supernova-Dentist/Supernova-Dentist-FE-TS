'use client';

import Head from 'next/head';
// import React, { useEffect, useState } from 'react';
// import ProfileInfo from './ProfileInfo';
// import { fetchProfileData } from './api';

const SocialPage = () => {
    // const [profile, setProfile] = useState(null);

    // useEffect(() => {
    //     fetchProfileData()
    //       .then(data => {
    //         setProfileData(data);
    //       })
    //       .catch(error => {
    //         console.error('Error fetching profile data:', error);
    //       });
    //   }, []);
    
    //   if (!profileData) {
    //     return <div>Loading...</div>;
    //   }


  return (
    <div className='min-h-screen bg-gray-100'>
      <Head>
        <title>Social - Supernova Dental</title>
        <meta name='description' content='Connect with Supernova Dental on social media.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-4xl font-bold text-blue-600'>Supernova Dental</h1>
        <p className='mt-4 text-lg text-gray-700'>Connect with us on social media!</p>

        <div className='mt-10 flex space-x-4'>
          <a href='#' className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
            Facebook
          </a>
          <a href='#' className='px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition'>
            Twitter
          </a>
          <a href='#' className='px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition'>
            Instagram
          </a>
        </div>
      </main>

      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-semibold text-gray-800 text-center'>Instagram Profile</h2>
          <div className='flex items-center justify-center mt-6'>
            <img src='/profile.jpg' alt='Profile Picture' className='w-20 h-20 rounded-full border-4 border-pink-500' />
          </div>
          <div className='text-center mt-4'>
            <h3 className='text-xl font-semibold'>Supernova Dental</h3>
            <p className='text-gray-600'>@supernova_dental</p>
          </div>
          <div className='flex justify-center mt-6'>
            <button className='px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition'>Follow</button>
          </div>
          <div className='grid grid-cols-3 gap-4 mt-8'>
            <div className='bg-gray-300 aspect-w-1 aspect-h-1 rounded-lg'></div>
            <div className='bg-gray-300 aspect-w-1 aspect-h-1 rounded-lg'></div>
            <div className='bg-gray-300 aspect-w-1 aspect-h-1 rounded-lg'></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialPage;
