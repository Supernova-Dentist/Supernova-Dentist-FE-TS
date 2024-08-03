// components/EnquiryButton.js

import Link from 'next/link';

const EnquiryButton = ({ referringPage }) => {
  return (
    <Link
      href={`/enquiry?ref=${encodeURIComponent(referringPage)}`}
      className='bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl'
    >
      Enquiry
    </Link>
  );
};

export default EnquiryButton;
