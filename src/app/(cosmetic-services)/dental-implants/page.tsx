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
import { FaCheck, FaFaceSmile, FaFaceSmileBeam } from 'react-icons/fa6';
import { faqItems } from './utils/faqItems';
import LearnMoreButton from '@/components/LearnMoreButton/LearnMoreButton';
import EnquiryButton from '@/components/EquiryButton/EnquiryButton';

export const metadata: Metadata = {
  title: 'Supernova Dental | Composite Bonding',
  description:
    'Learn about composite bonding at Supernova Dental. Enhance your smile with this cosmetic dental procedure.',
};

export default function DentalImplants() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <section className="relative w-full bg-[url('/assets/images/composite-bonding-process.jpg')] bg-cover bg-center bg-no-repeat py-20 md:py-32 lg:py-40">
        <div className='container mx-auto px-4 md:px-6'>
          <div className='relative max-w-3xl rounded-lg bg-white p-8 shadow-lg md:p-12'>
            <h1 className='text-3xl font-bold text-gold md:text-4xl text-center'>Dental Implants</h1>
            <p className='mt-4 text-lg font-medium text-grey text-center'>
              Replace missing teeth and restore gaps with advanced dental implants.
            </p>
            <p className='mt-6 text-lightGrey'>
              Dental implants are a superior solution for missing teeth, providing a durable and natural-looking
              replacement. They are designed to fill gaps, restore functionality, and enhance your smile. Whether you
              need to replace a single tooth or multiple teeth, dental implants offer a versatile and long-lasting
              solution.
            </p>

            <div className='mt-6 mb-8'>
              <p className='text-lightGrey'>
                Achieve a complete, confident smile with our state-of-the-art dental implants. Schedule your
                consultation today!
              </p>
            </div>

            <div className='flex flex-col-reverse md:flex-row md:justify-between'>
              <div className='flex flex-col gap-4 md:absolute md:right-0 md:bottom-0 md:w-auto md:p-6'>
                <p className='text-lg text-lightGrey font-medium text-center'>On average:</p>
                <div className='flex flex-col gap-4 sm:flex-row justify-center'>
                  <div className='flex flex-col gap-1'>
                    <span className='text-lg font-bold text-gold text-center'>1 - 2 hours</span>
                    <span className='text-sm text-lightGrey text-center'>surgery duration</span>
                    <span className='text-sm text-lightGrey text-center'>per session</span>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className='text-lg font-bold text-gold text-center'>1 - 2</span>
                    <span className='text-sm text-lightGrey text-center'>appointments required</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:mt-6 mt-10 flex flex-col gap-4 sm:flex-row md:justify-start sm:justify-center'>
              <Link
                href='#'
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
          <h2 className='text-2xl font-bold text-gold md:text-3xl'>What are Dental Implants?</h2>

          <p className='mt-6 text-lightGrey text-left'>
            Dental implants are a modern solution for replacing missing teeth. They consist of a titanium post that is
            surgically inserted into the jawbone, which acts as a replacement root for a new tooth. This procedure
            provides a stable and durable foundation for attaching crowns, bridges, or dentures.
          </p>
          <p className='mt-4 text-lightGrey'>
            Implants offer a natural look and feel, effectively restoring both the function and aesthetics of your
            smile. They can be used to replace a single tooth, multiple teeth, or even support full dentures. Our expert
            team ensures a precise and comfortable procedure with long-lasting results.
          </p>
          <p className='mt-6 text-lightGrey font-bold'>Advantages of Dental Implants:</p>
          <ul className='mt-6 grid gap-4 md:grid-cols-2'>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Natural Appearance</h3>
                <p className='text-lightGrey'>Blends seamlessly with your existing teeth for a natural look.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Durability</h3>
                <p className='text-lightGrey'>Provides a long-lasting solution with proper care.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Enhanced Functionality</h3>
                <p className='text-lightGrey'>Restores full chewing ability and support for adjacent teeth.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>No Impact on Adjacent Teeth</h3>
                <p className='text-lightGrey'>
                  Unlike bridges, implants don’t require modification of neighboring teeth.
                </p>
              </div>
            </li>
          </ul>

          <p className='mt-6 text-lightGrey font-bold'>Use Cases of Dental Implants:</p>
          <ul className='mt-6 grid gap-4 md:grid-cols-2'>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Replace Missing Teeth</h3>
                <p className='text-lightGrey'>
                  Ideal for replacing one or more missing teeth with a natural-looking solution.
                </p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Support for Dentures</h3>
                <p className='text-lightGrey'>
                  Provides a stable foundation for dentures, reducing movement and enhancing comfort.
                </p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Restore Chewing Function</h3>
                <p className='text-lightGrey'>Enables you to eat a wide variety of foods comfortably.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Improve Oral Health</h3>
                <p className='text-lightGrey'>Helps maintain the integrity of the jawbone and prevents bone loss.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className='py-12 px-4 md:py-20 lg:py-28 bg-grey'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl'>Who Can Benefit from Dental Implants?</h2>
          <p className='mt-4 text-cream'>
            Dental implants offer a reliable solution for replacing missing teeth and can significantly enhance your
            oral health and quality of life. They are ideal for a variety of patients:
          </p>
          <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <FaFaceSmile className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Restore Missing Teeth</h3>
              <p className='mt-2 text-lightGrey'>
                If you have one or more missing teeth, dental implants provide a natural-looking and durable
                replacement, restoring both function and aesthetics.
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <FaCheck className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Support for Dentures</h3>
              <p className='mt-2 text-lightGrey'>
                Dental implants can support dentures, making them more stable and comfortable, reducing movement, and
                improving your ability to eat and speak.
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <FaFaceSmileBeam className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Improve Oral Health</h3>
              <p className='mt-2 text-lightGrey'>
                Implants help maintain the structure of your jawbone and prevent bone loss, which is important for
                overall oral health and the stability of your remaining teeth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12 px-4 md:py-20 lg:py-28 bg-lightGrey'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl'>Your Dental Implant Process</h2>
          <p className='mt-4 text-cream'>
            Our comprehensive dental implant process is designed to ensure a successful and comfortable experience.
            Here’s how we guide you through each step:
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
                  During your initial consultation, we will evaluate your oral health, discuss your implant options, and
                  create a customized treatment plan to meet your needs.
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
                  We prepare for the implant placement by taking detailed scans and possibly performing preliminary
                  procedures to ensure a successful implantation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Image
                  src='/assets/images/composite-bonding-process.jpg'
                  alt='Surgery'
                  className='w-full h-56 px-2 py-4 object-cover'
                  width={400}
                  height={300}
                />
                <h3 className='mt-4 text-lg font-medium text-gold'>Implant Placement</h3>
                <p className='mt-2 text-lightGrey'>
                  The dental implant is surgically placed into the jawbone. We use advanced techniques to ensure
                  precision and minimize discomfort.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Image
                  src='/assets/images/composite-bonding-process.jpg'
                  alt='Healing'
                  className='w-full h-56 px-2 py-4 object-cover'
                  width={400}
                  height={300}
                />
                <h3 className='mt-4 text-lg font-medium text-gold'>Healing & Integration</h3>
                <p className='mt-2 text-lightGrey'>
                  The implant will need time to integrate with the jawbone. During this healing period, we monitor your
                  progress and provide guidance for optimal recovery.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Image
                  src='/assets/images/composite-bonding-process.jpg'
                  alt='Restoration'
                  className='w-full h-56 px-2 py-4 object-cover'
                  width={400}
                  height={300}
                />
                <h3 className='mt-4 text-lg font-medium text-gold'>Restoration</h3>
                <p className='mt-2 text-lightGrey'>
                  Once healing is complete, we attach the final restoration, such as a crown or bridge, to the implant.
                  This completes the process, giving you a fully restored smile.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Image
                  src='/assets/images/composite-bonding-process.jpg'
                  alt='Completion'
                  className='w-full h-56 px-2 py-4 object-cover'
                  width={400}
                  height={300}
                />
                <h3 className='mt-4 text-lg font-medium text-gold'>Completion</h3>
                <p className='mt-2 text-lightGrey'>
                  Your dental implant journey concludes with a follow-up visit to ensure everything is functioning
                  correctly and to discuss any final adjustments needed for your perfect smile.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className='py-12 px-4 md:py-20 lg:py-28 bg-white'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl mb-6 text-center'>Client Testimonials</h2>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='bg-cream p-6 rounded-lg shadow-lg'>
              <p className='text-lightGrey'>
                &quot;The dental implant procedure was seamless and the results are amazing! My new implants look and
                feel just like natural teeth. The team made sure I was comfortable throughout the process.&quot;
              </p>
              <p className='my-4 font-medium text-gold'>Sarah L.</p>
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
                &quot;I was impressed by how quickly I adapted to my new dental implants. The procedure was
                straightforward, and the recovery was faster than I expected. I highly recommend this treatment to
                anyone with missing teeth.&quot;
              </p>
              <p className='my-4 font-medium text-gold'>Michael B.</p>
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
                &quot;The dental implants have completely transformed my smile. I can eat, talk, and smile with
                confidence now. The team was professional and provided excellent care throughout the entire
                process.&quot;
              </p>
              <p className='my-4 font-medium text-gold'>Jessica W.</p>
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
          <h2 className='text-2xl font-bold text-gold md:text-3xl'>Dental Implant After Care Instructions</h2>
          <p className='mt-4 text-cream'>
            Proper care is essential to ensure the success and longevity of your dental implants. Follow these
            guidelines to maintain optimal oral health and implant function:
          </p>
          <ul className='mt-6 grid gap-4 md:grid-cols-2'>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg text-gold'>Maintain Excellent Oral Hygiene</h3>
                <p className='text-cream'>
                  Brush your teeth and implants twice daily with a fluoride toothpaste and floss regularly to prevent
                  plaque buildup and gum issues.
                </p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg text-gold'>Avoid Hard Foods</h3>
                <p className='text-cream'>
                  Refrain from chewing on hard foods, such as nuts or ice, which could potentially damage your implants
                  or the surrounding teeth.
                </p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg text-gold'>Quit Smoking</h3>
                <p className='text-cream'>
                  Smoking can adversely affect the healing process and the success of your implants. Quitting will
                  greatly benefit your oral health.
                </p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg text-gold'>Regular Dental Check-ups</h3>
                <p className='text-cream'>
                  Schedule routine visits to your dentist for check-ups and cleanings to ensure your implants and
                  overall oral health remain in top condition.
                </p>
              </div>
            </li>
          </ul>
          <p className='mt-8 text-cream'>
            Some initial discomfort or swelling is normal following the placement of dental implants. If you experience
            persistent pain, unusual swelling, or other issues, contact your dentist promptly.
          </p>
        </div>
      </section>

      <section className='py-12 px-4 md:py-20 lg:py-28 bg-lightGrey'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl mb-6 text-center'>Dental Restoration Comparison</h2>
          <p className='text-center text-cream mb-8'>
            Compare dental implants with bridges and dentures to find the best option for your tooth replacement needs.
          </p>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-grey text-gold'>
                <tr>
                  <th className='py-3 px-4 text-left text-sm font-medium'>Feature</th>
                  <th className='py-3 px-4 text-left text-sm font-medium'>Dental Implants</th>
                  <th className='py-3 px-4 text-left text-sm font-medium'>Bridges</th>
                  <th className='py-3 px-4 text-left text-sm font-medium'>Dentures</th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                <tr>
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Longevity</td>
                  <td className='py-4 px-4 text-sm text-center'>10-15 years or more</td>
                  <td className='py-4 px-4 text-sm text-center'>5-10 years</td>
                  <td className='py-4 px-4 text-sm text-center'>5-7 years</td>
                </tr>
                <tr>
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Durability</td>
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
                <tr>
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Impact on Adjacent Teeth</td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <XIcon className='h-6 w-6 text-red-500 inline-block align-middle' />
                  </td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <CheckIcon className='h-6 w-6 text-gold inline-block align-middle' />
                  </td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <XIcon className='h-6 w-6 text-red-500 inline-block align-middle' />
                  </td>
                </tr>
                <tr>
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Comfort and Fit</td>
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
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Maintenance</td>
                  <td className='py-4 px-4 text-sm text-center'>Regular brushing and flossing</td>
                  <td className='py-4 px-4 text-sm text-center'>Requires special cleaning</td>
                  <td className='py-4 px-4 text-sm text-center'>Daily removal and cleaning</td>
                </tr>
                <tr>
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Cost-effective</td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <XIcon className='h-6 w-6 text-red-500 inline-block align-middle' />
                  </td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <XIcon className='h-6 w-6 text-red-500 inline-block align-middle' />
                  </td>
                  <td className='py-4 px-4 text-sm text-center'>
                    <CheckIcon className='h-6 w-6 text-gold inline-block align-middle' />
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
        <EnquiryButton referringPage={'dental-implants'} />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
