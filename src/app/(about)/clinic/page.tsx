import PageHero from '@/components/blocks/PageHero/PageHero';
import ReviewLink from '@/components/blocks/ReviewLink/ReviewLink';
import Button from '@/components/Button/Button';
import { FloatingPhone } from '@/components/FloatingPhone/FloatingPhone';
import GetDirectionsForm from '@/components/GetDirectionsForm/GetDirectionsForm';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { type JSX, type SVGProps } from 'react';
const GoogleMap = dynamic(async () => await import('@/components/blocks/GoogleMap/GoogleMap'), {
  ssr: false,
});

export default function OurClinic() {
  return (
    <div className='flex flex-col'>
      <PageHero
        bgImage='bg-blog'
        title='Welcome to Supernova Dental'
        description='Exceptional dental care in a modern, welcoming environment.'
      />
      {/* About Section */}
      <section className='py-16 md:py-24 lg:py-32'>
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16'>
            <div>
              <img
                src='/assets/images/skyline-dental-office-exterior.jpg' // Replace with an actual image file
                alt='About Supernova Dental'
                className='w-full h-full object-cover rounded-lg'
                width={800}
                height={600}
                style={{ aspectRatio: '800/600', objectFit: 'cover' }}
              />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>About Supernova Dental</h2>
              <p className='text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8'>
                At Supernova Dental, we are committed to providing exceptional dental care in a modern, welcoming
                environment. Our team of experienced professionals is dedicated to helping our patients achieve and
                maintain optimal oral health.
              </p>
              <p className='text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8'>
                With cutting-edge technology, a compassionate approach, and a dedication to patient satisfaction, we
                stand out as a premier dental provider. Our clinic’s welcoming atmosphere, coupled with a team that
                truly cares, makes every visit a positive experience.
              </p>
              <div className='flex flex-col md:flex-row gap-4'>
                <Link href='cosmetic-dentistry'>
                  <Button
                    className='hover:opacity-90 transition-opacity duration-150 uppercase text-base text:md font-semibold bg-gold text-grey px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto'
                    text='Cosmetic Services'
                  />
                </Link>

                <Link href='general-dentistry'>
                  <Button
                    className='hover:opacity-90 transition-opacity duration-150 uppercase text-base text:md font-semibold bg-gold text-grey px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto'
                    text='General Services'
                  />
                </Link>
              </div>
              <p className='text-lg md:text-xl lg:text-2xl text-muted-foreground mt-8'>
                Need assistance? We offer live chat support for any questions or concerns. Look for the chat button in
                the bottom right corner of the page for immediate help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 md:py-24 lg:py-32 bg-lightGrey'>
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-gold'>Our Clinic Features</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16'>
            <div className='flex flex-col items-center text-center'>
              <SmileIcon className='w-12 h-12 mb-4 text-gold' />
              <h3 className='text-xl font-bold mb-2 text-gold'>Comfortable Chairs</h3>
              <p className='text-cream'>Our ergonomic chairs provide maximum comfort during your treatments.</p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <SmileIcon className='w-12 h-12 mb-4 text-gold' />
              <h3 className='text-xl font-bold mb-2 text-gold'>Advanced Equipment</h3>
              <p className='text-cream'>
                We use the latest dental technology to ensure accurate and efficient treatments.
              </p>
            </div>
            {/* <div className='flex flex-col items-center text-center'>
              <ClockIcon className='w-12 h-12 mb-4 text-gold' />
              <h3 className='text-xl font-bold mb-2 text-gold '>Flexible Scheduling</h3>
              <p className='text-cream'>We offer convenient appointment times to fit your busy schedule.</p>
            </div> */}
            <div className='flex flex-col items-center text-center'>
              <WifiIcon className='w-12 h-12 mb-4 text-gold' />
              <h3 className='text-xl font-bold mb-2 text-gold'>Free WiFi</h3>
              <p className='text-cream'>Stay connected while you wait with our complimentary WiFi.</p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <SmileIcon className='w-12 h-12 mb-4 text-gold' />
              <h3 className='text-xl font-bold mb-2 text-gold'>Ample Parking</h3>
              <p className='text-cream'>Plenty of parking spaces available, ensuring a hassle-free visit every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Booking Walkthrough Section */}
      <section className='py-16 md:py-24 lg:py-32 bg-grey'>
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-gold'>Easy Online Booking</h2>
          <p className='text-lg md:text-xl lg:text-2xl text-cream mb-8 text-center'>
            Booking your appointment has never been easier! Our online system powered by Dentally allows you to schedule
            your visit at your convenience.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex flex-col justify-center'>
              <h3 className='text-2xl font-bold mb-4 text-gold'>How to Book Online:</h3>
              <ol className='list-decimal list-inside text-lg text-cream'>
                <li>Select your preferred service from our online menu.</li>
                <li>Choose a date and time that works for you.</li>
                <li>Enter your personal details to confirm the booking.</li>
                <li>Receive an email confirmation with all the details.</li>
              </ol>
            </div>
            <div className='flex justify-center items-center'>
              <FloatingPhone />
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials (Coming Soon) Section */}
      <section className='py-16 md:py-24 lg:py-32 bg-muted'>
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center'>Had an Appointment with Us?</h2>
          <p className='text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 text-center'>
            Be one of the first to share your experience with Supernova Dental Clinic. We’d love to hear your feedback!
          </p>
          <div className='flex justify-center'>
            <ReviewLink />
          </div>
        </div>
      </section>

      {/* Virtual Tour (Coming Soon) Section */}
      {/* <section className='py-16 md:py-24 lg:py-32'>
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center'>Virtual Tour (Coming Soon)</h2>
          <p className='text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 text-center'>
            We’re working on providing a virtual tour of our clinic so you can explore our facilities from the comfort
            of your home. Stay tuned for updates!
          </p>
        </div>
      </section> */}

      {/* Follow Us Section */}
      <section className='py-16 md:py-24 lg:py-32 bg-gray-50'>
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center'>Follow Us</h2>
          <p className='text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 text-center'>
            Stay updated with the latest news, promotions, and dental care tips by following us on social media.
          </p>
          <div className='flex justify-center space-x-4'>
            <a href='https://facebook.com/yourclinic' target='_blank' rel='noopener noreferrer'>
              <img src='/images/facebook-icon.png' alt='Facebook' className='w-10 h-10' />
            </a>
            <a href='https://twitter.com/yourclinic' target='_blank' rel='noopener noreferrer'>
              <img src='/images/twitter-icon.png' alt='Twitter' className='w-10 h-10' />
            </a>
            <a href='https://instagram.com/yourclinic' target='_blank' rel='noopener noreferrer'>
              <img src='/images/instagram-icon.png' alt='Instagram' className='w-10 h-10' />
            </a>
            <a href='https://linkedin.com/company/yourclinic' target='_blank' rel='noopener noreferrer'>
              <img src='/images/linkedin-icon.png' alt='LinkedIn' className='w-10 h-10' />
            </a>
          </div>
        </div>
      </section>

      <div className='flex flex-col items-center justify-start py-12 bg-gray-50'>
        <div className='w-full max-w-7xl px-6 sm:px-8 lg:px-12'>
          <section className='mb-12'>
            <h1 className='text-4xl sm:text-5xl font-bold my-8 text-center sm:text-left text-grey'>
              Find Supernova Dental Clinic
            </h1>
            <p className='text-lg sm:text-xl mb-6 text-center sm:text-left text-lightGrey'>
              Locate Supernova Dental Clinic on the map. Find our address, contact information, and directions.
            </p>

            <div className='my-6'>
              <GoogleMap />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='md:col-span-1 mt-12'>
                <h2 className='text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left text-gray'>
                  Our Address
                </h2>
                <ul className='text-center sm:text-left'>
                  <li className='mb-3'>Marsh Lane, Huntworth,</li>
                  <li className='mb-3'>Bridgwater, Alliance Building</li>
                  <li className='mb-3'>TA6 6LQ</li>
                  <li className='mb-3 sm:max-w-80'>
                    <GetDirectionsForm />
                  </li>
                </ul>
              </div>

              <div className='md:col-span-1 mt-12'>
                <h2 className='text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left text-gray'>
                  Contact Us
                </h2>
                <div className='flex flex-col items-center sm:items-start'>
                  <p className='text-base sm:text-lg mb-2 text-center sm:text-left text-lightGrey'>
                    Phone: (123) 456-7890
                  </p>
                  <p className='text-base sm:text-lg mb-2 text-center sm:text-left text-lightGrey'>
                    Email:{' '}
                    <a href='mailto:info@supernovadentalclinic.com' className='underline'>
                      info@supernovadentalclinic.com
                    </a>
                  </p>
                  <p className='text-base sm:text-lg mb-2 text-center sm:text-left text-lightGrey'>
                    Website:{' '}
                    <a
                      href='http://www.supernovadentalclinic.com'
                      className='underline'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      www.supernovadentalclinic.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx='12' cy='12' r='10' />
      <polyline points='12 6 12 12 16 14' />
    </svg>
  );
}

function SmileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx='12' cy='12' r='10' />
      <path d='M8 14s1.5 2 4 2 4-2 4-2' />
      <line x1='9' x2='9.01' y1='9' y2='9' />
      <line x1='15' x2='15.01' y1='9' y2='9' />
    </svg>
  );
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
    </svg>
  );
}

function WifiIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d='M12 20h.01' />
      <path d='M2 8.82a15 15 0 0 1 20 0' />
      <path d='M5 12.859a10 10 0 0 1 14 0' />
      <path d='M8.5 16.429a5 5 0 0 1 7 0' />
    </svg>
  );
}
