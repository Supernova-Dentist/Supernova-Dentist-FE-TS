import { type Metadata } from 'next';
import PageHero from '@/components/blocks/PageHero/PageHero';
import Button from '@/components/Button/Button';
import { DisappearingFeatures } from '@/components/DisappearingScrollFeatures/DisappearingScrollFeatures';
import { FloatingPhone } from '@/components/FloatingPhone/FloatingPhone';
import PromotionForm from '@/components/PromotionForm/PromotionForm';
import SteppedProgress from '@/components/SteppedProgress/SteppedProgress';
import { StickyCards } from '@/components/StickyCards/StickyCards';
import { FeaturesSectionDemo } from '@/components/ui/bento-grid';
import Link from 'next/link';
import { stepContent } from './utils/stepContent';

export const metadata: Metadata = {
  title: 'Supernova Dental | Our Clinic',
  description:
    'Discover the welcoming environment of Supernova Dental. Learn about our exceptional dental care, state-of-the-art technology and services that prioritise your oral health.',
};

export default function OurClinic() {
  return (
    <div className='flex flex-col'>
      {/* <PageHero
        bgImage='bg-blog'
        title='Welcome to Supernova Dental'
        description='Exceptional dental care in a modern, welcoming environment.'
      /> */}
      {/* About Section */}
      <section>
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <FeaturesSectionDemo />
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 py-16'>
            <div>
              <img
                src='/assets/images/outerBuilding.jpg'
                alt='About Supernova Dental'
                className='w-full h-full object-cover rounded-lg'
                width={800}
                height={600}
                style={{ aspectRatio: '800/600', objectFit: 'cover' }}
              />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>About Supernova Dental</h2>
              <p className='text-lg md:text-xl text-gray-800 text-muted-foreground mb-8'>
                At Supernova Dental, we are committed to providing exceptional dental care in a modern, welcoming
                environment. Our team of experienced professionals is dedicated to helping our patients achieve and
                maintain optimal oral health.
              </p>
              <p className='text-lg md:text-xl text-gray-800 text-muted-foreground mb-8'>
                With cutting-edge technology, a compassionate approach and a dedication to patient satisfaction, we
                stand out as a premier dental provider. Our clinic’s welcoming atmosphere, coupled with a team that
                truly cares, makes every visit a positive experience.
              </p>
              <h3 className='text-2xl text-gray-900 font-semibold mb-4'>Check out to see what we have to offer!</h3>
              <div className='flex flex-col sm:flex-row sm:justify-start gap-4'>
                <Link href='cosmetic-dentistry'>
                  <Button
                    className='uppercase text-md font-semibold bg-gold text-white px-6 py-3 w-full sm:w-auto hover:bg-gold-dark focus:ring-2 focus:ring-gold focus:ring-offset-2 transition'
                    text='Cosmetic Services'
                  />
                </Link>
                <Link href='general-dentistry'>
                  <Button
                    className='uppercase text-md font-semibold bg-gold text-white px-6 py-3 w-full sm:w-auto hover:bg-gold-dark focus:ring-2 focus:ring-gold focus:ring-offset-2 transition'
                    text='General Services'
                  />
                </Link>
              </div>
              <p className='text-lg text-gray-800 text-muted-foreground mt-8'>
                Need assistance? We offer live chat support for any questions or concerns. Look for the chat button in
                the bottom right corner of the page for immediate help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      <DisappearingFeatures />

      {/* Online Booking Walkthrough Section */}
      <section className='py-16 md:py-24 lg:py-32 bg-grey'>
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-gold'>Easy Online Booking</h2>
          <p className='text-lg md:text-xl lg:text-2xl text-cream mb-16 pb-4 text-center  md:px-16 lg:px-32 '>
            Booking your appointment has never been easier, anytime, anywhere, even from your mobile device! Our online
            system powered by Dentally allows you to schedule your visit with ease.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex flex-col justify-center'>
              <h3 className='text-2xl font-bold my-2 px-6 text-gold'>First time? Let us help you get setup:</h3>
              <SteppedProgress stepContent={stepContent} />
            </div>
            <div className='flex justify-center items-center'>
              <FloatingPhone />
            </div>
          </div>
        </div>
      </section>

      <StickyCards />

      <PromotionForm />
    </div>
  );
}
