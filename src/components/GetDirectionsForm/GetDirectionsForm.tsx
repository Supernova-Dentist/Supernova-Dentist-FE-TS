'use client';
import { useState } from 'react';
import Button from '../Button/Button';

const GetDirectionsForm = () => {
  const [postcode, setPostcode] = useState('');

  const handleGetDirections = () => {
    const formattedPostcode = encodeURIComponent(postcode);
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${formattedPostcode}&destination=Marsh+Lane,+Huntworth,+Bridgwater,+Alliance+Building,+TA6+6LQ`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <div className='flex flex-row items-center gap-2'>
      <input
        type='text'
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
        placeholder='Enter your postcode'
        className='px-4 py-1 border border-gray-300 rounded-sm w-full flex-1 outline-none text-gray-800 hover:border-gray-400 focus:border-gray-400'
      />
      <Button onClick={handleGetDirections} className='text-cream py-[0.35rem]'>
        Go
      </Button>
    </div>
  );
};

export default GetDirectionsForm;
