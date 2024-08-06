'use client';

import Button from '../Button/Button';

export default function GetDirectionsButton() {
  const handleGetDirections = () => {
    const destination = 'Supernova Dental, Marsh Ln, Bridgwater TA6 6LQ';
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      className='text-gold underline hover:text-lightGold duration-150'
      text='Get directions'
      onClick={handleGetDirections}
    />
  );
}
