// components/EnquiryButton.js

import Link from 'next/link';

interface Props {
  referringPage: string;
}

const EnquiryButton = ({ referringPage }: Props) => {
  return (
    <div className='flex justify-center mx-auto'>
      <Link
        href={`/enquiry?ref=${encodeURIComponent(referringPage)}`}
        className='bg-gold text-white py-3 px-6 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl'
      >
        Enquiry
      </Link>
    </div>
  );
};

export default EnquiryButton;
