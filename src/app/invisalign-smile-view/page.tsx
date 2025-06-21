'use client';

import Head from 'next/head';
import { useEffect } from 'react';

export default function InvisalignSmileView() {
  useEffect(() => {
    window.location.href = 'https://wwwinvisalign-ts-prd-eu.herokuapp.com/SV/1795073';
  }, []);

  return (
    <>
      <Head>
        <title>Invisalign SmileView</title>
        <meta name='robots' content='noindex, nofollow' />
        <meta property='og:title' content='Your Invisalign Smile Preview' />
        <meta property='og:description' content='Visualise your future smile with Invisalign treatment.' />
        <meta property='og:image' content='https://supernovadental.co.uk/images/invisalign_landscape_2.jpg' />
        <meta property='og:url' content='https://supernovadental.co.uk/invisalign-preview' />
        <meta property='og:type' content='website' />

        {/* Optional Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Your Invisalign Smile Preview' />
        <meta name='twitter:description' content='Visualise your future smile with Invisalign treatment.' />
        <meta name='twitter:image' content='https://supernovadental.co.uk/images/invisalign_landscape_2.jpg' />
      </Head>

      <main className='min-h-screen flex items-center justify-center text-center'>
        <p className='text-lg'>Redirecting you to Invisalign SmileView...</p>
      </main>
    </>
  );
}
