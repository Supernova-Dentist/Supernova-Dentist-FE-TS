import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';
import SectionTitle from '../SectionTitle/SectionTitle';

const InvisalignSmileView = () => {
  return (
    <div className='py-12 p-4 mx-auto max-w-4xl'>
      <SectionTitle title='Invisalign SmileView' />

      <hr className='border-t-2 border-gold w-20 mx-auto mt-4 mb-8' />
      {/* Text above the image */}
      <p className='text-center text-lg md:text-xl mb-8 max-w-[42rem] mx-auto'>
        Curious to see your smile with straighter teeth? Snap a selfie and watch your transformation happen in seconds!
      </p>

      {/* Image */}
      <div className='relative w-full mb-8 '>
        <Image
          src='/assets/images/Invisalign_Smile_View.jpg' // Adjust the path to where the image is located in your project
          alt='Invisalign Smile View'
          width={1200}
          height={675}
          className='rounded-lg shadow-lg max-w-[30rem] mx-auto'
          layout='responsive'
        />
      </div>

      {/* Button */}
      <div className='text-center'>
        <Link href='https://www.invisalign.co.uk/SV/1795073' target='_blank' rel='noopener noreferrer'>
          <Button className='px-8 py-3 text-lg md:text-xl text-white rounded-lg shadow-md hover:underline'>
            See your new smile!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default InvisalignSmileView;
