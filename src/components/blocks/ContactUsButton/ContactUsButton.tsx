'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Props {
  referringPage: string;
}

const ContactUsButton = ({ referringPage }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='fixed inset-x-0 bottom-5 md:fixed md:right-28 flex justify-center md:justify-end'>
      <Link
        href={`/enquiry?ref=${encodeURIComponent(referringPage)}`}
        className='hover:underline'
      >
        <span className='text-gold'>contact us</span>
      </Link>
    </div>
  );
};

export default ContactUsButton;
