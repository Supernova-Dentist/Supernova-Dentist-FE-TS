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
import { FaStar } from 'react-icons/fa6';
import { IoHappy } from 'react-icons/io5';
import { MdCoffeeMaker } from 'react-icons/md';
import { faqItems } from './utils/faqItems';
import LearnMoreButton from '@/components/LearnMoreButton/LearnMoreButton';
import EnquiryButton from '@/components/EquiryButton/EnquiryButton';
import { DentallyPortal } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Supernova Dental | Composite Bonding',
  description:
    'Learn about composite bonding at Supernova Dental. Enhance your smile with this cosmetic dental procedure.',
};

export default function ToothWhitening() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <section className="relative w-full bg-[url('/assets/images/composite-bonding-process.jpg')] bg-cover bg-center bg-no-repeat py-20 md:py-32 lg:py-40">
        <div className='container mx-auto px-4 md:px-6'>
          <div className='relative max-w-3xl rounded-lg bg-white p-8 shadow-lg md:p-12'>
            <h1 className='text-3xl font-bold text-gold md:text-4xl text-center'>Tooth Whitening</h1>
            <p className='mt-4 text-lg font-medium text-grey text-center'>
              Brighten your smile with our professional tooth whitening services.
            </p>
            <p className='mt-6 text-lightGrey'>
              Our tooth whitening treatments use advanced technology to effectively remove stains and discoloration,
              giving you a dazzling, whiter smile. Whether you’re preparing for a special event or just looking to
              enhance your everyday look, our expert team is here to help you achieve your desired results.
            </p>

            <div className='mt-6 mb-8'>
              <p className='text-lightGrey'>
                Experience a radiant smile and increased confidence with our top-quality tooth whitening services.
                Schedule your consultation today!
              </p>
            </div>

            <div className='flex flex-col-reverse md:flex-row md:justify-between'>
              <div className='flex flex-col gap-4 md:absolute md:right-0 md:bottom-0 md:w-auto md:p-6'>
                <p className='text-lg text-lightGrey font-medium text-center'>On average:</p>
                <div className='flex flex-col gap-4 sm:flex-row justify-center'>
                  <div className='flex flex-col gap-1'>
                    <span className='text-lg font-bold text-gold text-center'>60 - 90 minutes</span>
                    <span className='text-sm text-lightGrey text-center'>treatment duration</span>
                    <span className='text-sm text-lightGrey text-center'>per session</span>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className='text-lg font-bold text-gold text-center'>1 - 3</span>
                    <span className='text-sm text-lightGrey text-center'>sessions required</span>
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

      <section className='py-8 px-4 md:py-18 lg:pb-28'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl'>What is Tooth Whitening?</h2>

          <p className='mt-6 text-lightGrey text-left'>
            Tooth whitening is a popular cosmetic dental procedure designed to brighten the color of your teeth. It
            involves using advanced whitening agents to remove stains and discoloration, resulting in a whiter, more
            radiant smile.
          </p>
          <p className='mt-4 text-lightGrey'>
            With numerous techniques available, including in-office treatments and take-home options, tooth whitening
            can be tailored to meet your specific needs and preferences. Our experienced team ensures safe, effective,
            and noticeable results.
          </p>
          <p className='mt-6 text-lightGrey font-bold'>Advantages of Tooth Whitening:</p>
          <ul className='mt-6 grid gap-4 md:grid-cols-2'>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Enhanced Aesthetics</h3>
                <p className='text-lightGrey'>Brightens teeth for a more youthful and vibrant appearance.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Quick Results</h3>
                <p className='text-lightGrey'>Achieve noticeable whitening effects in a short period of time.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Safe and Effective</h3>
                <p className='text-lightGrey'>Uses clinically proven methods to ensure safety and effectiveness.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Customizable Options</h3>
                <p className='text-lightGrey'>Choose from in-office treatments or take-home whitening kits.</p>
              </div>
            </li>
          </ul>

          <p className='mt-6 text-lightGrey font-bold'>Use Cases of Tooth Whitening:</p>
          <ul className='mt-6 grid gap-4 md:grid-cols-2'>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Brighten Stained Teeth</h3>
                <p className='text-lightGrey'>Effectively removes stains caused by coffee, tea, and tobacco.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Prepare for Special Events</h3>
                <p className='text-lightGrey'>
                  Get a brighter smile for weddings, interviews, or other important occasions.
                </p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Enhance Overall Smile</h3>
                <p className='text-lightGrey'>Complete your smile makeover with a whitening treatment.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Boost Self-Confidence</h3>
                <p className='text-lightGrey'>Enjoy a brighter smile and increased self-esteem.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className='py-12 px-4 md:py-20 lg:py-28 bg-grey'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl'>Who Can Benefit from Tooth Whitening?</h2>
          <p className='mt-4 text-cream'>
            Tooth whitening is a popular cosmetic treatment that can enhance your smile and boost your confidence. It’s
            ideal for a variety of patients:
          </p>
          <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <IoHappy className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Brighten Your Smile</h3>
              <p className='mt-2 text-lightGrey'>
                If you&apos;re looking to brighten your smile and reduce the appearance of stains and discoloration,
                tooth whitening can offer a dramatic improvement and enhance your overall appearance.
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <MdCoffeeMaker className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Remove Stains</h3>
              <p className='mt-2 text-lightGrey'>
                Whether caused by coffee, tea, red wine, or tobacco, tooth whitening can effectively address and remove
                stubborn stains, giving your teeth a cleaner, brighter look.
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <FaStar className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Quick Results</h3>
              <p className='mt-2 text-lightGrey'>
                With in-office treatments, you can see significant results in just one visit. At-home options also offer
                flexibility with noticeable improvements over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12 px-4 md:py-20 lg:py-28 bg-lightGrey'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl'>Your Tooth Whitening Process</h2>
          <p className='mt-4 text-cream'>
            Our professional tooth whitening process is designed to safely and effectively brighten your smile. Here’s
            how we ensure a smooth and successful treatment:
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
                  During your initial consultation, we’ll assess your dental health and discuss your whitening goals to
                  determine the best treatment plan for you.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Image
                  src='/assets/images/composite-bonding-process.jpg'
                  alt='Preparation'
                  className='w-full h-56 px-2 py-4 object-cover'
                  width={400}
                  height={300}
                />
                <h3 className='mt-4 text-lg font-medium text-gold'>Preparation</h3>
                <p className='mt-2 text-lightGrey'>
                  We prepare your teeth by thoroughly cleaning them and, if needed, applying a protective gel to
                  safeguard your gums during the whitening process.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Image
                  src='/assets/images/composite-bonding-process.jpg'
                  alt='Application'
                  className='w-full h-56 px-2 py-4 object-cover'
                  width={400}
                  height={300}
                />
                <h3 className='mt-4 text-lg font-medium text-gold'>Application</h3>
                <p className='mt-2 text-lightGrey'>
                  The whitening gel is applied to your teeth and activated using a special light or laser, which
                  accelerates the whitening process for noticeable results.
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
                &quot;I couldn&apos;t be happier with my composite bonding treatment! The team was professional, and the
                results were fantastic. My smile has never looked better!&quot;
              </p>
              <p className='my-4 font-medium text-gold'>Emily R.</p>
              <SliderWithImageComparison
                beforeImageSrc='/assets/images/teeth-before.jpg'
                beforeImageAlt='Before Composite Bonding'
                afterImageSrc='/assets/images/teeth-after.png'
                afterImageAlt='After Composite Bonding'
                imageWidth={400}
                imageHeight={300}
              />
            </div>
            <div className='bg-cream p-6 rounded-lg shadow-lg'>
              <p className='text-lightGrey'>
                &quot;The procedure was quick and painless. I was impressed with how natural the composite bonding
                looks. Highly recommend it to anyone looking to enhance their smile.&quot;
              </p>
              <p className='my-4 font-medium text-gold'>James T.</p>
              <SliderWithImageComparison
                beforeImageSrc='/assets/images/teeth-before.jpg'
                beforeImageAlt='Before Composite Bonding'
                afterImageSrc='/assets/images/teeth-after.png'
                afterImageAlt='After Composite Bonding'
                imageWidth={400}
                imageHeight={300}
              />
            </div>
            <div className='bg-cream p-6 rounded-lg shadow-lg'>
              <p className='text-lightGrey'>
                &quot;The composite bonding treatment exceeded my expectations. The results were noticeable almost
                immediately, and the process was smoother than I anticipated. It&apos;s a fantastic option for anyone
                wanting to improve their smile with minimal fuss.&quot;
              </p>
              <p className='my-4 font-medium text-gold'>Sophia M.</p>
              <SliderWithImageComparison
                beforeImageSrc='/assets/images/teeth-before.jpg'
                beforeImageAlt='Before Composite Bonding'
                afterImageSrc='/assets/images/teeth-after.png'
                afterImageAlt='After Composite Bonding'
                imageWidth={400}
                imageHeight={300}
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-12 px-4 md:py-20 lg:py-28 bg-grey'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl'>Tooth Whitening Aftercare Instructions</h2>
          <p className='mt-4 text-cream'>
            Proper aftercare is crucial to ensure the longevity and appearance of your tooth whitening results. Follow
            these tips to keep your smile bright and healthy:
          </p>
          <ul className='mt-6 grid gap-4 md:grid-cols-2'>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg text-gold'>Avoid Staining Foods and Drinks</h3>
                <p className='text-cream'>
                  Limit your consumption of coffee, tea, red wine, and other staining foods or beverages to preserve the
                  brightness of your teeth.
                </p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg text-gold'>Maintain Good Oral Hygiene</h3>
                <p className='text-cream'>
                  Brush your teeth twice daily with a fluoride toothpaste and floss regularly to keep your teeth and
                  gums healthy.
                </p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg text-gold'>Use a Straw</h3>
                <p className='text-cream'>
                  When consuming beverages that can stain teeth, such as coffee or tea, use a straw to minimize contact
                  with your teeth.
                </p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg text-gold'>Regular Dental Check-ups</h3>
                <p className='text-cream'>
                  Schedule regular visits to your dentist for check-ups and cleanings to maintain your whitening results
                  and overall oral health.
                </p>
              </div>
            </li>
          </ul>
          <p className='mt-8 text-cream'>
            It&apos;s common to experience some temporary sensitivity to hot or cold foods and beverages after tooth
            whitening. This sensitivity usually subsides within a few days. If you experience prolonged discomfort or
            any other issues, contact your dentist for advice.
          </p>
        </div>
      </section>

      <section className='py-12 px-4 md:py-20 lg:py-28 bg-lightGrey'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl mb-6 text-center'>Cosmetic Treatment Comparison</h2>
          <p className='text-center text-cream mb-8'>
            Compare our professional tooth whitening with veneers and teeth bonding to discover the ideal solution for
            your smile enhancement.
          </p>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-grey text-gold'>
                <tr>
                  <th className='py-3 px-4 text-left text-sm font-medium'>Feature</th>
                  <th className='py-3 px-4 text-left text-sm font-medium'>Professional Tooth Whitening</th>
                  <th className='py-3 px-4 text-left text-sm font-medium'>Veneers</th>
                  <th className='py-3 px-4 text-left text-sm font-medium'>Composite Bonding</th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                <tr>
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Immediate Results</td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <CheckIcon className='h-6 w-6 text-gold inline-block align-middle' />
                  </td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <CheckIcon className='h-6 w-6 text-gold inline-block align-middle' />
                  </td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <CheckIcon className='h-6 w-6 text-gold inline-block align-middle' />
                  </td>
                </tr>
                <tr>
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Customizable Treatment</td>
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
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Longevity of Results</td>
                  <td className='py-4 px-4 text-sm text-center'>6-12 months (with touch-ups)</td>
                  <td className='py-4 px-4 text-sm text-center'>10-15 years</td>
                  <td className='py-4 px-4 text-sm text-center'>5-7 years</td>
                </tr>
                <tr>
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Cost-Effective</td>
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
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Coverage for Imperfections</td>
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
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Stain Resistance</td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <CheckIcon className='h-6 w-6 text-gold inline-block align-middle' />
                  </td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <CheckIcon className='h-6 w-6 text-gold inline-block align-middle' />
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
        <EnquiryButton referringPage={'tooth-whitening'} />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
