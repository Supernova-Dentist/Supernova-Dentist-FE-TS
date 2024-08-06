'use client';

import { useState } from 'react';
import { GOOGLE_API_KEY } from '@/lib/constants';

export default function GoogleMap() {
  const [isLoading, setLoading] = useState(true);

  return (
    <div>
      {/* Add better loader here */}
      {isLoading && <p>Loading...</p>}
      <iframe
        width='100%'
        height='350'
        referrerPolicy='no-referrer-when-downgrade'
        src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}&q=supernovea+dental+marsh+lane+huntworth+bridgwater+TA6 6LQ`} // Will need tweaking to get actual building location or more specific with lat and lon
        onLoad={() => setLoading(false)}
        allowFullScreen
      ></iframe>
    </div>
  );
}
