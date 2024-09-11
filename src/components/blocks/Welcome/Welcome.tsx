import CtaButtons from '../Cta/CtaButtons';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import { BubbleText } from './Utils/BubbleText';

export default function Welcome() {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <section
        className='relative w-full h-[100vh] bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: 'url("/hero-image.jpg")' }}
      >
        <div className='absolute inset-0 bg-gradient-to-b from-grey to-lightGrey' />
        <div className='relative h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center text-white'>
          <h1 className='text-4xl md:text-5xl font-bold mb-2'>
            Welcome to <span className='lg:hidden text-gold'>Supernova</span>{' '}
            <span className='hidden lg:inline-block'>
              <BubbleText />{' '}
            </span>{' '}
            Dental <img src='/favicon.ico' alt='Supernova Dental Logo' className='h-16 md:h-24 w-auto inline' />
          </h1>
          <p className='text-xl mb-16'>Experience exceptional dental care with our state-of-the-art clinic.</p>

          <CtaButtons />
          <ul className='hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg mt-16'>
            <li className='flex items-center'>
              <svg
                className='h-6 w-6 text-green-500 mr-2'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
              </svg>
              Free consultations
            </li>
            <li className='flex items-center'>
              <svg
                className='h-6 w-6 text-green-500 mr-2'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
              </svg>
              Multi-award-winning
            </li>
            <li className='flex items-center'>
              <svg
                className='h-6 w-6 text-green-500 mr-2'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
              </svg>
              Open evenings and weekends
            </li>
            <li className='flex items-center'>
              <svg
                className='h-6 w-6 text-green-500 mr-2'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
              </svg>
              Interest-free Easy Payment Plans
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
