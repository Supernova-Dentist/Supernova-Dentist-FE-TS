import Link from 'next/link';
import CtaButtons from '../Cta/CtaButtons';
import { SlideTabsExample } from '../SlideTabs/SlideTabs';

export default function Welcome() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <section
        className='relative w-full h-[80vh] bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: 'url("/hero-image.jpg")' }}
      >
        <div className='absolute inset-0 bg-gradient-to-b from-grey to-lightGrey' />
        <div className='relative h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center text-white'>
          <h1 className='text-6xl font-bold mb-2'>
            Welcome to <span className='text-gold'>Supernova</span> Dental{' '}
            <img src='/favicon.ico' alt='Supernova Dental Logo' className='h-24 w-auto inline' />
          </h1>
          <p className='text-xl mb-16'>Experience exceptional dental care with our state-of-the-art clinic.</p>

          <SlideTabsExample />

          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg mb-12'>
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

          <CtaButtons />
        </div>
      </section>

      <section
        className='relative w-full h-[40vh] bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: 'url("/hero-image.jpg")' }}
      >
        <div className='absolute inset-0 bg-gradient-to-b from-lightGrey to-grey' />
        <div className='relative h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center text-white'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
            <div className='flex flex-col items-center text-center'>
              <PowerIcon className='text-primary h-12 w-12 mb-4' />
              <h3 className='text-xl font-medium mb-2'>State-of-the-art Equipment</h3>
              <p className='text-muted-foreground'>
                Our clinic is equipped with the latest dental technology to ensure the best possible care.
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <UserIcon className='text-primary h-12 w-12 mb-4' />
              <h3 className='text-xl font-medium mb-2'>Experienced Dentists</h3>
              <p className='text-muted-foreground'>
                Our team of skilled and experienced dentists are dedicated to providing personalized care.
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <ClipboardIcon className='text-primary h-12 w-12 mb-4' />
              <h3 className='text-xl font-medium mb-2'>Comprehensive Services</h3>
              <p className='text-muted-foreground'>
                From routine check-ups to complex procedures, we offer a wide range of dental services.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='py-12 sm:py-16 bg-muted'>
        <div className='container mx-auto px-4 sm:px-6 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-4'>Discover the Difference</h2>
          <p className='text-muted-foreground mb-8'>
            Learn more about how Supernova Dental can provide you with exceptional dental care.
          </p>
          <Link
            href='#'
            className='inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
            prefetch={false}
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='8' height='4' x='8' y='2' rx='1' ry='1' />
      <path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' />
    </svg>
  );
}

function PowerIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 2v10' />
      <path d='M18.4 6.6a9 9 0 1 1-12.77.04' />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </svg>
  );
}
