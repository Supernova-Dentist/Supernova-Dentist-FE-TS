import type { Metadata } from 'next';
import CtaText from '@/components/blocks/Cta/CtaText';
import CtaButtons from '@/components/blocks/Cta/CtaButtons';
import Button from '@/components/Button/Button';
import Steps from '@/components/blocks/Steps/Steps';
import GoogleMap from '@/components/blocks/GoogleMap/GoogleMap';
import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';

export const metadata: Metadata = {
  title: 'Supernova Dental | Team',
  description: 'Meet the team behind Supernova Dental',
};

export default function Team() {
  return (
    <div className=''>
      <div className='bg-team-cta h-[650px] w-full bg-no-repeat bg-cover bg-center-top'>
        <div className='flex flex-col justify-center items-center gap-20 h-full'>
          <CtaText title='Meet the team' description='Behind Supernova Dental' />
          <CtaButtons />
        </div>
      </div>
      <div className='mb-8'>
        <div className='lg:flex-row flex flex-col'>
          <div className='lg:w-1/2 h-[500px]'>
            <img src='/assets/images/dummy-team-2.jpeg' alt='Team' className='object-cover h-full w-full' />
          </div>
          <div className='bg-grey lg:w-1/2 p-12 flex flex-col justify-center'>
            <h3 className='text-cream text-3xl mb-8'>
              <span className='text-gold'>About</span> Supernova Dental
            </h3>
            <div className='flex flex-col gap-4'>
              <p className='text-cream'>
                We offer dental services in Tucson, AZ, ranging from general and family dentistry to cosmetic
                procedures. We use state-of-the-art technology along with trusted techniques to give you the bright and
                healthy smile you&apos;ve always dreamed of.
              </p>
              <p className='text-cream'>
                One of the main things that sets us apart from other dental practices is our passionate, skilled staff.
                Our team is comprised of talented dental professionals that are committed to providing personalized,
                high-quality care with service that will leave you smiling. From the front desk to the dental chair, you
                can rest assured that you&apos;re in good hands!
              </p>
            </div>
          </div>
        </div>
        <div className='lg:flex-row flex flex-col-reverse'>
          <div className='lg:w-1/2 p-12 flex flex-col justify-center lg:items-start items-center'>
            <h3 className='text-3xl uppercase mb-8'>Dr. James Raymond</h3>
            <div className='flex flex-col gap-4'>
              <p className='text-center lg:text-left'>
                “I&apos;m so proud of my team here at Skyline Dental. We do such great work together serving our
                patients and our community!”
              </p>
            </div>
            <Button
              className='hover:opacity-90 transition-opacity duration-150 uppercase text-xl font-semibold bg-gold text-black px-4 py-2 w-[25rem] mt-8'
              text='Read dr. Raymonds bio'
            />
          </div>
          <div className='lg:w-1/2'>
            <img src='/assets/images/dummy-dentist.jpeg' alt='Team' className='h-full object-cover w-full' />
            {/* <Image
              className='w-full'
              src='/assets/images/dummy-dentist.jpeg'
              alt='Team'
              width={500}
              height={500}
              layout='responsive'
            /> */}
          </div>
        </div>
      </div>
      <div className='my-24'>
        <Steps />
      </div>
      <div className='my-24'>
        <GalleryCarousel />
      </div>
      <GoogleMap />
    </div>
  );
}
