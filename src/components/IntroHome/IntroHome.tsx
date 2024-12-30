import Link from 'next/link';
import Button from '../Button/Button';
import IntroCard from './IntroCard';
import GeneralImg from '../../../public/assets/images/general-dentistry.jpg';
import CosmeticImg from '../../../public/assets/images/invisalign.jpg';

export default function IntroHome() {
  return (
    <div className='flex flex-col min-h-[50dvh]'>
      <div className='flex-1 container mx-auto px-4 md:px-6 py-12 md:py-24 grid gap-12'>
        <h2 className='text-3xl text-gray-800 font-bold text-center'>
          Experience Exceptional Dental Care at Supernova Dental
        </h2>
        <hr className='w-16 h-1 bg-grey mx-auto mb-6' />
        <div className='grid md:grid-cols-2 gap-6'>
          <IntroCard
            link='/general-dentistry'
            title='General Dentistry'
            description="At Supernova Dental, we're excited to bring top-notch general dentistry to Bridgewater. From
                  routine checkups to root canals and emergency care, we’re here to keep your smile healthy and radiant."
            imgSrc={GeneralImg}
            btnText='Discover More'
          />
          <IntroCard
            link='/cosmetic-dentistry'
            title='Cosmetic Dentistry'
            description=" Transform your smile with our cosmetic services at Supernova Dental. Whether you're interested in
                  Invisalign, composite bonding, dental implants, or whitening, we’ve got you covered to enhance your
                  smile's brilliance."
            imgSrc={CosmeticImg}
            btnText='Explore Options'
          />
        </div>
        <section>
          <div className='space-y-4'>
            <div className='inline-block rounded-lg bg-cream px-3 py-1 text-sm'>Our Mission</div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl text-slate-800'>
              Welcome to Supernova Dental
            </h2>
            <p className='text-muted-foreground md:text-xl/relaxed text-gray-800'>
              At <span className='font-semibold'>Supernova Dental</span>, opening in Bridgewater in Q4 2024, we&apos;re
              dedicated to offering personalized, high-quality dental care. Our expert team is committed to helping you
              achieve and maintain a healthy, stunning smile with a range of services tailored just for you.
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-6 mt-8'>
            <img
              src='/assets/images/skyline-dental-office-exterior.jpg'
              alt='Our Practice'
              className='w-full h-96 object-cover rounded-xl'
            />
            <div className='space-y-4 text-gray-700'>
              <h3 className='text-2xl font-bold text-gold'>About Us</h3>
              <p className='text-muted-foreground'>
                At Supernova Dental, our mission is to provide exceptional dental care with a focus on excellence,
                compassion and innovation. We are dedicated to delivering personalized treatment that meets each
                patient’s unique needs and aspirations.
              </p>
              <p className='text-muted-foreground'>
                Our experienced team utilizes cutting-edge technology and techniques to offer effective and comfortable
                treatments, from routine cleanings to advanced procedures. Our state-of-the-art facility ensures a warm
                and welcoming environment for all our patients.
              </p>
              <p className='text-muted-foreground'>
                As we prepare to open in Bridgewater in Q4 2024, we are eager to serve the community and help you
                achieve a healthy, beautiful smile. We look forward to building lasting relationships and being a
                trusted partner in your dental health journey.
              </p>
              <div className='py-4 flex justify-center'>
                <Link href='/clinic'>
                  <Button variant='link'>Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
