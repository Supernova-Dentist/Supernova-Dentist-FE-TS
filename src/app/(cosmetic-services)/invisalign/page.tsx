import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import FAQ from '@/components/FAQ/FAQ';
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';
import { SliderWithImageComparison } from '@/components/SliderWithImageComparison/SliderWithImageComparison';
import { Card, CardContent } from '@/components/ui/card';
import { XIcon } from '@heroicons/react/outline';
import { CheckIcon } from '@radix-ui/react-icons';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaBriefcase, FaCakeCandles, FaFaceSmileBeam, FaPersonWalking, FaPlane } from 'react-icons/fa6';

import { IoHappy } from 'react-icons/io5';
import { faqItems } from './utils/faqItems';
import LearnMoreButton from '@/components/LearnMoreButton/LearnMoreButton';
import EnquiryButton from '@/components/EquiryButton/EnquiryButton';
import { DentallyPortal } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Supernova Dental | Invisalign',
  description:
    'Discover the benefits of Invisalign at Supernova Dental. Straighten your teeth discreetly and effectively.',
};

export default function Invisalign() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <section className="relative w-full bg-[url('/assets/images/composite-bonding-process.jpg')] bg-cover bg-center bg-no-repeat py-20 md:py-32 lg:py-40">
        <div className='container mx-auto px-4 md:px-6'>
          <div className='relative max-w-3xl rounded-lg bg-white p-8 shadow-lg md:p-12'>
            <h1 className='text-3xl font-bold text-gold md:text-4xl text-center'>Invisalign</h1>
            <p className='mt-4 text-lg font-medium text-grey text-center'>
              Achieve a perfect smile with our Invisalign clear aligners.
            </p>
            <p className='mt-6 text-lightGrey'>
              Invisalign is a modern orthodontic treatment that straightens your teeth using a series of clear,
              removable aligners. Our experienced dentists will customize a treatment plan tailored to your specific
              needs, ensuring a comfortable and effective journey to a straighter smile.
            </p>

            <div className='mt-6 mb-8'>
              <p className='text-lightGrey'>
                Enjoy the benefits of a straighter smile without the hassle of traditional braces. Book your Invisalign
                consultation today!
              </p>
            </div>

            <div className='flex flex-col-reverse md:flex-row md:justify-between'>
              <div className='flex flex-col gap-4 md:absolute md:right-0 md:bottom-0 md:w-auto md:p-6 '>
                <p className='text-lg text-lightGrey font-medium text-center'>On average:</p>
                <div className='flex flex-col gap-4 sm:flex-row justify-center'>
                  <div className='flex flex-col gap-1'>
                    <span className='text-lg font-bold text-gold text-center '>12 - 18 months</span>
                    <span className='text-sm text-lightGrey text-center'>treatment duration</span>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className='text-lg font-bold text-gold text-center'>20 - 22 hours</span>
                    <span className='text-sm text-lightGrey text-center'>wear per day</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:mt-6 mt-10 flex flex-col gap-4 sm:flex-row md:justify-start sm:justify-center'>
              <Link
                target='_blank' href={`${DentallyPortal}`}
                className='inline-flex h-10 items-center justify-center rounded-md bg-gold px-6 text-sm font-medium text-white shadow transition-colors hover:bg-cream hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                prefetch={false}
              >
                Book Now
              </Link>
              <LearnMoreButton />
            </div>
          </div>
        </div>
      </section>

      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>
      <section className='py-8 px-4 md:py-18 lg:pb-28 '>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl '>What is Invisalign?</h2>

          <p className='mt-6 text-lightGrey text-left'>
            Invisalign is a popular and effective orthodontic treatment that uses a series of clear, removable aligners
            to gradually straighten your teeth. These aligners are custom-made to fit your teeth and are virtually
            invisible, making them a discreet option for achieving a straighter smile.
          </p>
          <p className='mt-4 text-lightGrey'>
            Invisalign aligners are made from a comfortable, BPA-free plastic that won’t irritate your cheeks and gums
            like traditional metal braces. With Invisalign, you can achieve a beautiful smile without the inconvenience
            of traditional braces.
          </p>
          <p className='mt-6 text-lightGrey font-bold'>Advantages of Invisalign:</p>
          <ul className='mt-6 grid gap-4 md:grid-cols-2'>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Discreet</h3>
                <p className='text-lightGrey'>Clear aligners are virtually invisible.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Removable</h3>
                <p className='text-lightGrey'>Easily remove aligners for eating, drinking, and cleaning.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Comfortable</h3>
                <p className='text-lightGrey'>Smooth, comfortable plastic aligners.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Effective</h3>
                <p className='text-lightGrey'>Achieves results comparable to traditional braces.</p>
              </div>
            </li>
          </ul>

          <p className='mt-6 text-lightGrey font-bold'>Use Cases of Invisalign:</p>
          <ul className='mt-6 grid gap-4 md:grid-cols-2'>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Crowded Teeth</h3>
                <p className='text-lightGrey'>Align and straighten crowded or overlapping teeth.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Gaps and Spaces</h3>
                <p className='text-lightGrey'>Close gaps and spaces between teeth.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Overbite</h3>
                <p className='text-lightGrey'>Correct an overbite for improved function and appearance.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Underbite</h3>
                <p className='text-lightGrey'>Address an underbite for better bite alignment.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className='py-12 px-4 md:py-20 lg:py-28 bg-grey'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl'>Who Can Benefit from Invisalign?</h2>
          <p className='mt-4 text-cream'>
            Invisalign is a versatile treatment suitable for almost everyone looking to improve their smile:
          </p>
          <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <IoHappy className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Teenagers</h3>
              <p className='mt-2 text-lightGrey'>
                Invisalign provides a discreet and comfortable option for teenagers, allowing them to straighten their
                teeth without the visibility of traditional braces.
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <FaFaceSmileBeam className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Adults</h3>
              <p className='mt-2 text-lightGrey'>
                Many adults prefer Invisalign to improve their smiles while maintaining a professional appearance. The
                clear aligners fit seamlessly into their busy lives.
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <FaPersonWalking className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Active Individuals</h3>
              <p className='mt-2 text-lightGrey'>
                For those with active lifestyles, Invisalign aligners are perfect as they are comfortable, removable,
                and allow you to continue sports and activities without interruption.
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <FaBriefcase className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Professionals</h3>
              <p className='mt-2 text-lightGrey'>
                Professionals who need to maintain a polished and professional look find Invisalign to be a great
                solution for discreetly achieving a perfect smile.
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <FaPlane className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Frequent Travelers</h3>
              <p className='mt-2 text-lightGrey'>
                For frequent travelers, Invisalign aligners offer convenience and flexibility, making it easy to
                maintain treatment while on the go.
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <FaCakeCandles className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Special Occasions</h3>
              <p className='mt-2 text-lightGrey'>
                Whether it&apos;s a wedding, reunion, or other special event, Invisalign allows you to improve your
                smile without compromising your appearance for photos and celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12 px-4 md:py-20 lg:py-28 bg-lightGrey'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl'>Your Invisalign Process</h2>
          <p className='mt-4 text-cream'>
            Our experienced dentists follow a simple and straightforward process to ensure your Invisalign treatment is
            comfortable and effective:
          </p>
          <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <Card>
              <CardContent>
                <Image
                  src='/assets/images/composite-bonding-process.jpg'
                  alt='Consultation'
                  className='w-full h-56 px-2 py-4 object-cover'
                  width={400}
                  height={300}
                />
                <h3 className='mt-4 text-lg font-medium text-gold'>Consultation</h3>
                <p className='mt-2 text-lightGrey'>
                  During your initial consultation, we’ll discuss your goals and evaluate your dental health to
                  determine if Invisalign is the right solution for you.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Image
                  src='/assets/images/composite-bonding-process.jpg'
                  alt='Digital Scanning'
                  className='w-full h-56 px-2 py-4 object-cover'
                  width={400}
                  height={300}
                />
                <h3 className='mt-4 text-lg font-medium text-gold'>Digital Scanning</h3>
                <p className='mt-2 text-lightGrey'>
                  We use advanced digital scanning technology to create a precise 3D image of your teeth, allowing us to
                  plan your custom treatment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Image
                  src='/assets/images/composite-bonding-process.jpg'
                  alt='Fitting and Delivery'
                  className='w-full h-56 px-2 py-4 object-cover'
                  width={400}
                  height={300}
                />
                <h3 className='mt-4 text-lg font-medium text-gold'>Fitting and Delivery</h3>
                <p className='mt-2 text-lightGrey'>
                  Once your custom aligners are ready, you’ll come in for a fitting to ensure they fit perfectly and
                  comfortably.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className='py-12 px-4 md:py-20 lg:py-28'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl mb-6 text-center'>Client Testimonials</h2>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='bg-cream p-6 rounded-lg shadow-lg'>
              <p className='text-lightGrey'>
                &quot;I couldn&apos;t be happier with my Invisalign treatment! The team was professional, and the
                results were fantastic. My smile has never looked better!&quot;
              </p>
              <p className='my-4 font-medium text-gold'>Emily R.</p>
              <SliderWithImageComparison
                beforeImageSrc='/assets/images/teeth-before.jpg'
                beforeImageAlt='Before Invisalign'
                afterImageSrc='/assets/images/teeth-after.png'
                afterImageAlt='After Invisalign'
                imageWidth={400}
                imageHeight={300}
              />
            </div>
            <div className='bg-cream p-6 rounded-lg shadow-lg'>
              <p className='text-lightGrey'>
                &quot;The procedure was quick and painless. I was impressed with how natural the Invisalign results
                look. Highly recommend it to anyone looking to enhance their smile.&quot;
              </p>
              <p className='my-4 font-medium text-gold'>James T.</p>
              <SliderWithImageComparison
                beforeImageSrc='/assets/images/teeth-before.jpg'
                beforeImageAlt='Before Invisalign'
                afterImageSrc='/assets/images/teeth-after.png'
                afterImageAlt='After Invisalign'
                imageWidth={400}
                imageHeight={300}
              />
            </div>
            <div className='bg-cream p-6 rounded-lg shadow-lg'>
              <p className='text-lightGrey'>
                &quot;The Invisalign treatment exceeded my expectations. The results were noticeable almost immediately,
                and the process was smoother than I anticipated. It&apos;s a fantastic option for anyone wanting to
                improve their smile with minimal fuss.&quot;
              </p>
              <p className='my-4 font-medium text-gold'>Sophia M.</p>
              <SliderWithImageComparison
                beforeImageSrc='/assets/images/teeth-before.jpg'
                beforeImageAlt='Before Invisalign'
                afterImageSrc='/assets/images/teeth-after.png'
                afterImageAlt='After Invisalign'
                imageWidth={400}
                imageHeight={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare Instructions */}
      <section className='py-12 px-4 md:py-20 lg:py-28 bg-grey'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl'>Invisalign Aftercare Instructions</h2>
          <p className='mt-4 text-cream'>
            Proper aftercare is crucial to ensure the effectiveness and longevity of your Invisalign treatment. Here are
            some tips to help you maintain your aligners and achieve the best results:
          </p>
          <ul className='mt-6 grid gap-4 md:grid-cols-2'>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg text-gold'>Maintain Good Oral Hygiene</h3>
                <p className='text-cream'>
                  Brush your teeth and your aligners at least twice a day to keep them clean and free from bacteria.
                </p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg text-gold'>Avoid Staining Foods and Drinks</h3>
                <p className='text-cream'>
                  Remove your aligners when consuming coffee, tea, red wine, or tobacco to prevent staining.
                </p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg text-gold'>Handle Aligners with Care</h3>
                <p className='text-cream'>
                  Avoid bending or twisting your aligners, and always store them in their case when not in use.
                </p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg text-gold'>Regular Dental Check-ups</h3>
                <p className='text-cream'>
                  Visit your dentist regularly for check-ups to monitor your progress and make any necessary
                  adjustments.
                </p>
              </div>
            </li>
          </ul>
          <p className='mt-8 text-cream'>
            Common side effects of Invisalign may include slight discomfort or pressure as your teeth adjust. This is
            usually temporary and should resolve within a few days. If you experience any prolonged discomfort or notice
            any issues with your aligners, contact your dentist promptly.
          </p>
        </div>
      </section>

      <section className='py-12 px-4 md:py-20 lg:py-28 bg-lightGrey'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl mb-6 text-center'>Treatment Comparison</h2>
          <p className='text-center text-cream mb-8'>
            Compare Invisalign with other common orthodontic treatments to find the best option for your needs.
          </p>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-grey text-gold'>
                <tr>
                  <th className='py-3 px-4 text-left text-sm font-medium'>Feature</th>
                  <th className='py-3 px-4 text-left text-sm font-medium'>Invisalign</th>
                  <th className='py-3 px-4 text-left text-sm font-medium'>Traditional Braces</th>
                  <th className='py-3 px-4 text-left text-sm font-medium'>Lingual Braces</th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-black-200'>
                <tr>
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Invisible Appearance</td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <CheckIcon className='h-6 w-6 text-gold inline-block align-middle' />
                  </td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <XIcon className='h-6 w-6 text-red-500 inline-block align-middle' />
                  </td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <CheckIcon className='h-6 w-6 text-gold inline-block align-middle' />
                  </td>
                </tr>
                <tr>
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Removable</td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <CheckIcon className='h-6 w-6 text-gold inline-block align-middle' />
                  </td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <XIcon className='h-6 w-6 text-red-500 inline-block align-middle' />
                  </td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <XIcon className='h-6 w-6 text-red-500 inline-block align-middle' />
                  </td>
                </tr>
                <tr>
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Comfort</td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <CheckIcon className='h-6 w-6 text-gold inline-block align-middle' />
                  </td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <XIcon className='h-6 w-6 text-red-500 inline-block align-middle' />
                  </td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <CheckIcon className='h-6 w-6 text-gold inline-block align-middle' />
                  </td>
                </tr>
                <tr>
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Dietary Restrictions</td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <XIcon className='h-6 w-6 text-red-500 inline-block align-middle' />
                  </td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <CheckIcon className='h-6 w-6 text-gold inline-block align-middle' />
                  </td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <CheckIcon className='h-6 w-6 text-gold inline-block align-middle' />
                  </td>
                </tr>
                <tr>
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Treatment Duration</td>
                  <td className='py-4 px-4 text-sm text-center'>12-18 months</td>
                  <td className='py-4 px-4 text-sm text-center'>18-24 months</td>
                  <td className='py-4 px-4 text-sm text-center'>18-24 months</td>
                </tr>
                <tr>
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Investment in Comfort and Aesthetics</td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <CheckIcon className='h-6 w-6 text-gold inline-block align-middle' />
                  </td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <XIcon className='h-6 w-6 text-red-500 inline-block align-middle' />
                  </td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <XIcon className='h-6 w-6 text-red-500 inline-block align-middle' />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id='faq' className='bg-white py-12 px-4 md:py-20 lg:py-28 flex justify-center'>
        <div className='w-full max-w-4xl px-4 md:px-6 text-center'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl mb-6'>Frequently Asked Questions</h2>
          <div className='bg-cream p-6 rounded-lg shadow-lg'>
            <FAQ faqItems={faqItems} />
          </div>
        </div>
      </section>
      <div className='fixed inset-x-0 bottom-5 md:fixed md:bottom-10 md:right-40 flex justify-center md:justify-end'>
        <EnquiryButton referringPage={'invisalign'} />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
