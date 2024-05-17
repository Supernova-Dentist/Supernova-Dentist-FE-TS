'use client';

import Head from 'next/head';

const SocialPage = () => {
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
          <h2 className='text-3xl font-semibold text-gray-800 text-center'>Instagram Posts</h2>
          <p className='mt-2 text-lg text-gray-600 text-center'>
            Follow us on Instagram for the latest updates and promotions!
          </p>

          <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {/* Placeholder Instagram posts */}
            <div className='aspect-w-1 aspect-h-1'>
              <div className='bg-gray-300 rounded-lg flex items-center justify-center'>
                <span className='text-gray-500'>Instagram Post 1</span>
              </div>
            </div>
            <div className='aspect-w-1 aspect-h-1'>
              <div className='bg-gray-300 rounded-lg flex items-center justify-center'>
                <span className='text-gray-500'>Instagram Post 2</span>
              </div>
            </div>
            <div className='aspect-w-1 aspect-h-1'>
              <div className='bg-gray-300 rounded-lg flex items-center justify-center'>
                <span className='text-gray-500'>Instagram Post 3</span>
              </div>
            </div>
            <div className='aspect-w-1 aspect-h-1'>
              <div className='bg-gray-300 rounded-lg flex items-center justify-center'>
                <span className='text-gray-500'>Instagram Post 4</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialPage;
