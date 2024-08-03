'use client';
import { useState } from 'react';

const GetDirectionsForm = () => {
  const [postcode, setPostcode] = useState('');

  const handleGetDirections = () => {
    const formattedPostcode = encodeURIComponent(postcode);
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${formattedPostcode}&destination=Marsh+Lane,+Huntworth,+Bridgwater,+Alliance+Building,+TA6+6LQ`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <div className='flex flex-col sm:flex-row items-center gap-4'>
      <input
        type='text'
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
        placeholder='Enter your postcode'
        className='p-2 border border-gray-300 rounded-md w-full sm:w-auto'
      />
      <button onClick={handleGetDirections} className='bg-gold text-white px-4 py-2 rounded-md'>
        Go
      </button>
    </div>
  );
};

export default GetDirectionsForm;
