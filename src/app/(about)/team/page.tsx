import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { type Metadata } from 'next';
import TeamMemberGrid from './utils/TeamMemberGrid';
import type { Metadata } from 'next';
import textBoxContent from './textBoxContent';
import PageHero from '@/components/blocks/PageHero/PageHero';
import ImageAndText from '@/components/blocks/ImageAndText/ImageAndText';
import DefaultTextBox from '@/components/blocks/ImageAndText/DefaultTextBox';
import TextBox from '@/components/TextBoxContainer/TextBox';
import Button from '@/components/Button/Button';
import Steps from '@/components/blocks/Steps/Steps';
import GalleryCarousel from '@/components/blocks/GalleryCarousel/GalleryCarousel';
import DynamicGoogleMap from '@/components/blocks/GoogleMap/DynamicGoogleMap';


export const metadata: Metadata = {
  title: 'Supernova Dental | Our Team',
  description: 'Meet the dedicated professionals who make our dental practice exceptional.',
};

export default function TeamPage() {
  return (
    <div className='flex flex-col min-h-screen '>
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-120 w-full bg-[url('/assets/images/aiTeamImage.jpg')] bg-cover bg-center bg-no-repeat py-20 md:py-32 lg:py-40">
        <h1 className='text-3xl font-extrabold text-center text-gold sm:text-4xl md:text-5xl'>Meet Our Dental Team</h1>
        <p className='mx-auto mt-4 max-w-2xl text-lg text-center text-white'>
          Discover the dedicated professionals who make our dental practice exceptional.
        </p>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32 bg-cream'>
        {/* Breadcrumb */}
        <div className='mx-auto px-4 md:px-6 container pt-8 pb-4'>
          <BreadCrumb />
        </div>

        <TeamMemberGrid />
      </section>
    </div>
  );
}
