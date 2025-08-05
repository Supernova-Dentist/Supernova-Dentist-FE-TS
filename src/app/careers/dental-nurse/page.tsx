import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import SectionSpacing from '@/components/SectionSpacing/SectionSpacing';
import SubHeader from '@/components/SubHeader/SubHeader';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/assets/images/logo.png';
import { DentalNurseFormContent } from './utils/dental-nurse-form-content';

export const metadata = {
  title: 'Dental Nurse Job – Bridgwater | Supernova Dental Careers',
  description:
    'Apply now for a Dental Nurse role at Supernova Dental in Bridgwater, Somerset. Full-time and part-time positions available with competitive pay and career growth opportunities.',
  keywords:
    'dental careers Bridgwater, jobs at Supernova Dental, dental nurse jobs Somerset, dentist jobs Bridgwater, careers in dentistry Somerset, Supernova Dental hiring, join our dental team, dental practice vacancies, dental jobs Somerset, Supernova Dental careers',
};

export default function DentalNurseJob() {
  return (
    <>
      <section className='text-left pt-24 px-4 sm:px-10 bg-gradient-to-b from-white to-cream'>
        <div className='flex flex-col items-center text-center'>
          <Image src={logo} alt='Supernova Dental Logo' className='w-20 h-20 mb-4' />
          <div className='my-2'>
            <BreadCrumb />
          </div>
          <h1 className='text-4xl font-semibold text-gold mb-2'>Dental Nurse Job – Now Hiring in Bridgwater</h1>
          <p className='text-lg text-gray-700'>Join Supernova Dental in Bridgwater, Somerset</p>
          <p className='text-md text-gray-600'>From £13.50 an hour · Part-time & Full-time Dental Nurse Positions</p>
        </div>

        <div className='max-w-[1000px] mx-auto mt-8 flex flex-col gap-8 pb-12'>
          <SectionSpacing className='flex flex-col gap-4'>
            <SubHeader>About Us</SubHeader>

            <div className='flex flex-col md:flex-row-reverse gap-6 items-center'>
              <div className='flex-1'>
                <Image
                  src='/assets/images/dental_nurses_2.jpeg' // Make sure to place this image in public/assets/images
                  alt='Supernova Dental Nurse Team'
                  width={600}
                  height={400}
                  className='rounded-2xl shadow-md object-cover w-full h-auto'
                />
                <p className='text-sm text-gray-500 mt-2 text-center'>
                  Meet some of the team you’ll be working with at Supernova Dental
                </p>
              </div>

              <div className='flex-1'>
                <p>
                  Supernova Dental is a modern, growing dental practice based in{' '}
                  <strong>Bridgwater</strong>, serving patients across <strong>Somerset</strong>.
                  We’re known for providing high-quality patient care using advanced technology in a calm, welcoming
                  environment.
                </p>
                <p className='mt-2'>
                  Conveniently located between <strong>Taunton</strong> and <strong>Bridgwater</strong> just off the M5,
                  our practice is easily accessible for Dental Nurses commuting from{' '}
                  <strong>Burnham-on-Sea, Highbridge, Wellington</strong>, and other surrounding towns.{' '}
                  <Link href='/find-us' className='underline text-blue-600'>
                    View directions.
                  </Link>
                </p>
              </div>
            </div>
          </SectionSpacing>

          <SectionSpacing className='flex flex-col gap-4'>
            <SubHeader>Role Summary</SubHeader>
            <ul className='list-disc list-inside'>
              <li>Assist dentists during procedures to ensure smooth workflow.</li>
              <li>Sterilise instruments and maintain cross-infection control.</li>
              <li>Keep accurate patient records and assist with treatment plans.</li>
              <li>Support reception with scheduling and billing when needed.</li>
              <li>Ensure the clinical space is clean, compliant, and organised.</li>
            </ul>
          </SectionSpacing>

          <SectionSpacing className='flex flex-col gap-4'>
            <SubHeader>Requirements</SubHeader>
            <p>
              <strong>Essential:</strong>
            </p>
            <ul className='list-disc list-inside'>
              <li>Qualified Dental Nurse with GDC registration</li>
              <li>Excellent communication and teamwork skills</li>
              <li>Confidence using dental software and digital systems</li>
            </ul>
            <p>
              <strong>Preferred:</strong>
            </p>
            <ul className='list-disc list-inside'>
              <li>Several years of practice experience</li>
              <li>Radiography qualification (desirable)</li>
            </ul>
          </SectionSpacing>

          <SectionSpacing className='flex flex-col gap-4'>
            <SubHeader>What We Offer</SubHeader>
            <ul className='list-disc list-inside'>
              <li>Pay from £13.50 per hour (based on experience)</li>
              <li>Full-time or part-time hours (min. 19 hours/week)</li>
              <li>Career development and ongoing training support</li>
              <li>Regular team socials and supportive working environment</li>
              <li>On-site parking and staff treatments</li>
              <li>Company pension and employee discounts</li>
              <li>
                Convenient location between Taunton and Bridgwater – ideal for Somerset-based dental professionals
              </li>
            </ul>
          </SectionSpacing>

          <SectionSpacing className='flex flex-col gap-4'>
            <SubHeader>How to Apply</SubHeader>
            <p>
              If you’re a Dental Nurse looking for your next opportunity we’d love to hear from you. You can either
              email your CV and a brief cover letter to: <strong>scott@supernovadental.co.uk</strong> with the subject
              line <em>“Dental Nurse Application – [Your Name]”</em>, or use the application form below for easy
              submission.
            </p>
          </SectionSpacing>

          <DentalNurseFormContent />
        </div>
      </section>
    </>
  );
}
