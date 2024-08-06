'use client';

import { cn } from '@/lib/utils';
import Button from '../Button/Button';

export default function GetDirectionsButton({ className }: { className?: string }) {
  const handleGetDirections = () => {
    const destination = 'Supernova Dental, Marsh Ln, Bridgwater TA6 6LQ';
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      className={cn('text-gold underline hover:text-lightGold duration-150', className)}
      text='Get directions'
      onClick={handleGetDirections}
    />
  );
}
