// components/EnquiryButton.js

import Link from 'next/link';

interface Props {
  referringPage: string;
}

const EnquiryButton = ({ referringPage }: Props) => {
  return (
    <div className='fixed inset-x-0 bottom-5 md:fixed md:right-28 flex justify-center md:justify-end'>
      <Link
        href={`/enquiry?ref=${encodeURIComponent(referringPage)}`}
        className='bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl'
      >
        Enquiry
      </Link>
    </div>
  );
};

export default EnquiryButton;
