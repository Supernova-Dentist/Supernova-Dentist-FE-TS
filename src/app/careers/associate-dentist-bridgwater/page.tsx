import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import SectionSpacing from '@/components/SectionSpacing/SectionSpacing';
import SubHeader from '@/components/SubHeader/SubHeader';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/assets/images/logo.png';
import { AssociateDentistBridgwaterFormContent } from './utils/associate-dentist-bridgwater-form-content';

export const metadata = {
  title: 'General Dentist Job - Bridgwater | Supernova Dental Careers',
  description:
    'Apply now for a General Dentist position at Supernova Dental in Bridgwater, Somerset. Join our modern fully private practice with mentorship, advanced technology and excellent career opportunities.',
  keywords:
    'general dentist jobs Bridgwater, associate dentist jobs Somerset, private dentist jobs, Invisalign dentist jobs, cosmetic dentist careers, Supernova Dental careers, dentist jobs Somerset, private dental practice jobs',
};

export default function AssociateDentistJob() {
  return (
    <>
      <section className='text-left pt-24 px-4 sm:px-10'>
        <div className='flex flex-col items-center text-center'>
          <Image src={logo} alt='Supernova Dental Logo' className='w-20 h-20 mb-4' />

          <div className='my-2'>
            <BreadCrumb />
          </div>

          <h1 className='text-4xl font-semibold text-gold mb-2'>General Dentist – Now Hiring in Bridgwater</h1>

          <p className='text-lg text-gray-700'>
            Join Supernova Dental&apos;s fully private practice in Bridgwater, Somerset
          </p>

          <p className='text-md text-gray-600'>Full-time & Part-time Positions Available</p>
        </div>

        <div className='max-w-[1000px] mx-auto mt-8 flex flex-col gap-8 pb-12'>
          <SectionSpacing className='flex flex-col gap-4'>
            <div className='flex flex-col gap-6 items-center'>
              <Image
                src='/assets/images/sunlight_suite_supernova_dental_bridgwater.webp'
                alt='Supernova Sunlight Suite Bridgwater'
                width={600}
                height={400}
                className='rounded-2xl shadow-md object-cover w-full h-auto'
              />
              <div className='flex-1'>
                <p className='text-sm text-gray-500 mt-2 text-center'>
                  Join our friendly and forward-thinking team at Supernova Dental
                </p>
              </div>

              <SubHeader>About Us</SubHeader>
              <div className='flex-1'>
                <p>
                  Supernova Dental is a modern, fast-growing <strong>fully private dental practice</strong> based in{' '}
                  <strong>Bridgwater, Somerset</strong>. We combine advanced technology with a personal, patient-focused
                  approach to deliver exceptional dental care.
                </p>

                <p className='mt-2'>
                  Conveniently located just off <strong>J24 of the M5</strong>, our practice is easily accessible from{' '}
                  <strong>Taunton, Burnham-on-Sea, Highbridge, Wellington</strong> and the surrounding Somerset area.
                  <Link href='/find-us' className='underline text-blue-600'>
                    {' '}
                    View directions.
                  </Link>
                </p>
              </div>
            </div>
          </SectionSpacing>

          <SectionSpacing className='flex flex-col gap-4'>
            <SubHeader>The Role</SubHeader>

            <ul className='list-disc list-inside space-y-2'>
              <li>Manage and grow your own fully private patient list.</li>
              <li>
                Provide general dentistry alongside Invisalign, cosmetic treatments, or your own special interests.
              </li>
              <li>Receive mentorship and clinical support from the Principal Dentist.</li>
              <li>Work alongside a supportive, ambitious and forward-thinking team.</li>
              <li>Full-time and part-time positions are available.</li>
            </ul>
          </SectionSpacing>

          <SectionSpacing className='flex flex-col gap-4'>
            <SubHeader>What We&apos;re Looking For</SubHeader>

            <ul className='list-disc list-inside space-y-2'>
              <li>Experience working within a private dental practice.</li>
              <li>Invisalign experience.</li>
              <li>A strong clinical case portfolio.</li>
              <li>Postgraduate qualifications or a special interest area are preferred.</li>
              <li>Passion for delivering outstanding clinical outcomes and patient care.</li>
            </ul>
          </SectionSpacing>

          <SectionSpacing className='flex flex-col gap-4'>
            <SubHeader>Practice Features</SubHeader>

            <ul className='list-disc list-inside space-y-2'>
              <li>Fully private practice.</li>
              <li>CBCT & OPG imaging on-site.</li>
              <li>iTero Lumina scanner.</li>
              <li>Digital X-ray systems and intra-oral cameras.</li>
              <li>Dentally cloud-based practice management software.</li>
              <li>Part of the MiSmile Network with consistent new Invisalign leads.</li>
              <li>10+ on-site parking spaces.</li>
            </ul>
          </SectionSpacing>

          <SectionSpacing className='flex flex-col gap-4'>
            <SubHeader>Benefits</SubHeader>

            <ul className='list-disc list-inside space-y-2'>
              <li>Company events.</li>
              <li>On-site parking.</li>
              <li>Referral programme.</li>
              <li>Mentorship and clinical development.</li>
              <li>Supportive, collaborative working environment.</li>
              <li>Opportunity to develop your own special interests.</li>
            </ul>
          </SectionSpacing>

          <SectionSpacing className='flex flex-col gap-4'>
            <SubHeader>How to Apply</SubHeader>

            <p>
              We&apos;d love to hear from experienced clinicians who are looking to join a modern, ambitious private
              practice.
            </p>

            <p>
              Please email your <strong>CV and clinical portfolio</strong> to{' '}
              <strong>scott@supernovadental.co.uk</strong>, or complete the application form below.
            </p>

            <p>
              <strong>Job Types:</strong> Full-time, Part-time
            </p>

            <p>
              <strong>Work Location:</strong> In person
            </p>
          </SectionSpacing>

          <AssociateDentistBridgwaterFormContent />
        </div>
      </section>
    </>
  );
}
