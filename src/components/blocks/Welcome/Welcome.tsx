import AnimatedSVGLogo from '@/components/AnimatedSVGLogo/AnimatedSVGLogo';
import CtaButtons from '../Cta/CtaButtons';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';
import { BubbleText } from './Utils/BubbleText';

export default function Welcome() {
  return (
    <div className='flex flex-col min-h-screen'>
      <section
        className='relative w-full h-screen bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: 'url("/hero-image.jpg")' }}
      >
        <div className='absolute inset-0 bg-gradient-to-b from-grey to-lightGrey' />
        <div className='relative flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center text-white'>
          <div className='flex flex-col items-center justify-center h-auto'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-2 flex flex-col lg:flex-row items-center justify-center'>
              Welcome to
              <span className='lg:hidden text-gold my-2'>Supernova</span>{' '}
              <span className='hidden lg:inline-flex items-center px-4 my-4 pb-2'>
                <BubbleText />
              </span>{' '}
              Dental
              <span className='w-20 mt-2 lg:mt-0 inline-flex items-center justify-center lg:ml-4'>
                <AnimatedSVGLogo />
              </span>
            </h1>
            <p className='text-lg sm:text-xl mt-6 lg:mt-2 mb-12'>
              Experience exceptional dental care with our state-of-the-art clinic.
            </p>
          </div>
          <CtaButtons />
          <ul className='hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg mt-12'>
            <li className='flex items-center'>
              <svg
                className='h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2'
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
                className='h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2'
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
                className='h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2'
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
                className='h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2'
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
