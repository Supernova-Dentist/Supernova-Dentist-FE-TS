import type { Metadata } from 'next';
import Image from 'next/image';
import { FaThumbsUp, FaTooth } from 'react-icons/fa6';
import { IoHappy } from 'react-icons/io5';
import { CheckIcon } from '@radix-ui/react-icons';
import { XIcon } from '@heroicons/react/outline';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import FAQ from '@/components/FAQ/FAQ';
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';
import { SliderWithImageComparison } from '@/components/SliderWithImageComparison/SliderWithImageComparison';
import { Card, CardContent } from '@/components/ui/card';
import EnquiryButton from '@/components/EquiryButton/EnquiryButton';
import { faqItems } from './utils/faqItems';
import CompositBondingContent from '@/components/blocks/CompositBondingContent/CompositBondingContent';

export const metadata: Metadata = {
  title: 'Supernova Dental | Composite Bonding',
  description:
    'Learn about composite bonding at Supernova Dental. Enhance your smile with this cosmetic dental procedure.',
};

export default function CompositeBonding() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <CompositBondingContent />

      <div className='mx-auto px-4 md:px-6 container pt-10 pb-6 md:py-12'>
        <BreadCrumb />
      </div>
      <section className='py-8 px-4 md:py-18 lg:pb-28 '>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl '>What is Composite Bonding?</h2>

          <p className='mt-6 text-lightGrey text-left'>
            Composite bonding is a highly versatile and popular cosmetic dental procedure used to enhance the appearance
            of teeth. It involves applying a tooth-colored resin material to the surface of the teeth, which is then
            shaped and polished to match the surrounding teeth for a natural look.
          </p>
          <p className='mt-4 text-lightGrey'>
            This treatment has been in use for several decades and has a well-established safety record. Advances in
            dental materials and techniques have made this procedure more effective and longer-lasting than ever before.
          </p>
          <p className='mt-6 text-lightGrey font-bold'>Advantages of Composite Bonding:</p>
          <ul className='mt-6 grid gap-4 md:grid-cols-2'>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Minimally Invasive</h3>
                <p className='text-lightGrey'>Preserves the integrity of your natural teeth.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Preserves Natural Tooth Structure</h3>
                <p className='text-lightGrey'>Requires little to no removal of the natural tooth structure.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Improvement in Appearance</h3>
                <p className='text-lightGrey'>Provides a dramatic improvement in the appearance of your smile.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Long-Lasting Results</h3>
                <p className='text-lightGrey'>Offers durable and long-lasting results.</p>
              </div>
            </li>
          </ul>

          <p className='mt-6 text-lightGrey font-bold'>Use Cases of Composite Bonding:</p>
          <ul className='mt-6 grid gap-4 md:grid-cols-2'>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Fill in Gaps</h3>
                <p className='text-lightGrey'>Close gaps and spaces between teeth for a more uniform smile.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Repair Chips</h3>
                <p className='text-lightGrey'>Restore the shape and appearance of chipped or cracked teeth.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Whiten Discolored Teeth</h3>
                <p className='text-lightGrey'>Improve the color and brightness of stained or discolored teeth.</p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg font-medium'>Reshape Teeth</h3>
                <p className='text-lightGrey'>
                  Alter the shape and size of teeth for a more balanced, symmetrical smile.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className='py-12 px-4 md:py-20 lg:py-28 bg-grey'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl'>Who Can Benefit from Composite Bonding?</h2>
          <p className='mt-4 text-cream'>
            Composite bonding is a versatile treatment that can benefit a wide range of patients:
          </p>
          <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <IoHappy className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Cosmetic Concerns</h3>
              <p className='mt-2 text-lightGrey'>
                If you&apos;re self-conscious about the appearance of your teeth, composite bonding can help you achieve
                a more confident, beautiful smile by addressing specific aesthetic issues.
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <FaTooth className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Dental Imperfections</h3>
              <p className='mt-2 text-lightGrey'>
                Composite bonding can address a variety of dental issues, such as gaps, chips, cracks, and
                discoloration, for a more uniform and healthy-looking smile.
              </p>
            </div>
            <div className='rounded-lg bg-white p-6 shadow-lg'>
              <FaThumbsUp className='h-12 w-12 text-gold' />
              <h3 className='mt-4 text-lg font-medium'>Quick and Non-Invasive</h3>
              <p className='mt-2 text-lightGrey'>
                Composite bonding is a quick and non-invasive procedure, allowing you to enhance your smile with minimal
                discomfort and downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12 px-4 md:py-20 lg:py-28 bg-lightGrey'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl'>Your Composite Bonding Process</h2>
          <p className='mt-4 text-cream'>
            Our experienced dentists follow a simple and straightforward process to ensure your composite bonding
            treatment is comfortable and effective:
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
                  determine if composite bonding is the right solution for you.
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
                  We prepare your teeth by cleaning and etching the surface to ensure the bonding material adheres
                  properly.
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
                  The composite resin is applied and shaped to match the natural contours of your teeth. It is then
                  cured using a special light.
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
                beforeImageAlt='Before Invisalign'
                afterImageSrc='/assets/images/teeth-after.png'
                afterImageAlt='After Invisalign'
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
                beforeImageAlt='Before Invisalign'
                afterImageSrc='/assets/images/teeth-after.png'
                afterImageAlt='After Invisalign'
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
                beforeImageAlt='Before Treatment'
                afterImageSrc='/assets/images/teeth-after.png'
                afterImageAlt='After Treatment'
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
          <h2 className='text-2xl font-bold text-gold md:text-3xl'>Composite Bonding Aftercare Instructions</h2>
          <p className='mt-4 text-cream'>
            Proper aftercare is crucial to ensure the longevity and appearance of your composite bonding. Here are some
            tips to help you maintain your new smile:
          </p>
          <ul className='mt-6 grid gap-4 md:grid-cols-2'>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg text-gold'>Maintain Good Oral Hygiene</h3>
                <p className='text-cream'>
                  Brush your teeth at least twice a day and floss daily to keep your teeth and gums healthy.
                </p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg text-gold'>Avoid Staining Foods and Drinks</h3>
                <p className='text-cream'>
                  Limit your intake of coffee, tea, red wine, and tobacco to prevent staining of the composite resin.
                </p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg text-gold'>Be Gentle</h3>
                <p className='text-cream'>
                  Avoid biting your nails, chewing on pens, or using your teeth as tools, as these actions can damage
                  the composite bonding.
                </p>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <CheckIcon className='h-6 w-6 flex-shrink-0 text-gold' />
              <div>
                <h3 className='text-lg text-gold'>Regular Dental Check-ups</h3>
                <p className='text-cream'>
                  Visit your dentist regularly for check-ups and cleanings to ensure your bonded teeth remain in good
                  condition.
                </p>
              </div>
            </li>
          </ul>
          <p className='mt-8 text-cream'>
            Common side effects of composite bonding may include slight sensitivity to hot and cold foods or drinks
            shortly after the procedure. This is usually temporary and should resolve within a few days. If you
            experience any prolonged discomfort or notice any damage to the bonded area, contact your dentist promptly.
          </p>
        </div>
      </section>

      <section className='py-12 px-4 md:py-20 lg:py-28 bg-lightGrey'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl font-bold text-gold md:text-3xl mb-6 text-center'>Treatment Comparison</h2>
          <p className='text-center text-cream mb-8'>
            Compare our composite bonding treatment with other common dental treatments to find the best option for your
            needs.
          </p>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-grey text-gold'>
                <tr>
                  <th className='py-3 px-4 text-left text-sm font-medium '>Feature</th>
                  <th className='py-3 px-4 text-left text-sm font-medium'>Composite Bonding</th>
                  <th className='py-3 px-4 text-left text-sm font-medium'>Veneers</th>
                  <th className='py-3 px-4 text-left text-sm font-medium'>Dental Crowns</th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-black-200'>
                <tr>
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Quick Application</td>
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
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Minimal Tooth Reduction</td>
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
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Estimated Longevity</td>
                  <td className='py-4 px-4 text-sm text-center'>5-7 years</td>
                  <td className='py-4 px-4 text-sm text-center'>10 years</td>
                  <td className='py-4 px-4 text-sm text-center'>15 years</td>
                </tr>
                <tr>
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Cost-effective</td>
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
                  <td className='py-4 px-4 text-sm font-medium text-gold'>Stain Resistance</td>
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
        <EnquiryButton referringPage={'composite-bonding'} />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
