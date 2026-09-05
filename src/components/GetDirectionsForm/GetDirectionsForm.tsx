'use client';

import { practiceLocation } from '@/lib/practiceLocation';
import { useState } from 'react';

const GetDirectionsForm = () => {
  const [postcode, setPostcode] = useState('');

  const handleGetDirections = () => {
    const formattedPostcode = encodeURIComponent(postcode);
    const destination = encodeURIComponent(`${practiceLocation.name}, ${practiceLocation.address}`);
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${formattedPostcode}&destination=${destination}`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <form
      className='flex flex-col gap-3 sm:flex-row sm:items-end'
      onSubmit={(event) => {
        event.preventDefault();
        handleGetDirections();
      }}
    >
      <label className='flex-1 text-sm font-semibold text-obsidian' htmlFor='directions-postcode'>
        Your postcode
        <input
          id='directions-postcode'
          type='text'
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          placeholder='Enter your postcode'
          autoComplete='postal-code'
          className='mt-2 min-h-11 w-full rounded-sm border border-control-border bg-white px-4 py-2 text-obsidian outline-none placeholder:text-taupe focus:border-champagne focus-visible:ring-2 focus-visible:ring-focus-light'
        />
      </label>
      <button
        type='submit'
        className='inline-flex min-h-11 items-center justify-center rounded-full border border-champagne bg-champagne px-5 py-3 text-sm font-semibold text-obsidian transition-colors hover:bg-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light'
      >
        Get directions
      </button>
    </form>
  );
};

export default GetDirectionsForm;
