import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import EnquiryButton from '@/components/EnquiryButton/EnquiryButton';
import FaqSection from '@/components/FaqSection/FaqSection';
import SectionSpacing from '@/components/SectionSpacing/SectionSpacing';
import SubHeader from '@/components/SubHeader/SubHeader';
import Image from 'next/image';
import fcaLogo from '../../../public/assets/images/fca-logo.png';
import logo from '../../../public/assets/images/logo.png';
import { faqItems } from './faqItems';

export const metadata = {
  title: 'Flexible Dental Finance Options | Supernova Dental Bridgwater',
  description:
    'Explore flexible dental finance options at Supernova Dental in Bridgwater. Enjoy 0% interest for up to 12 months and easy monthly payments to invest in your smile with confidence.',
  keywords: [
    'Dental finance',
    'Flexible dental finance',
    'Supernova Dental',
    'Bridgwater dental finance',
    '0% interest dental payments',
  ],
  openGraph: {
    title: 'Flexible Dental Finance Options | Supernova Dental Bridgwater',
    description:
      'Explore flexible dental finance options at Supernova Dental in Bridgwater. Enjoy 0% interest for up to 12 months and easy monthly payments to invest in your smile with confidence.',
    url: 'https://www.supernovadental.co.uk/dental-finance',
    siteName: 'Supernova Dental',
    images: [
      {
        url: 'https://www.supernovadental.co.uk/assets/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Supernova Dental Logo',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flexible Dental Finance Options | Supernova Dental Bridgwater',
    description:
      'Explore flexible dental finance options at Supernova Dental in Bridgwater. Enjoy 0% interest for up to 12 months and easy monthly payments to invest in your smile with confidence.',
    images: ['https://www.supernovadental.co.uk/assets/images/logo.png'],
  },
};

export default function DentalFinance() {
  return (
    <>
      <section className='text-left pt-20 px-4 md:pb-8 sm:px-10 bg-gradient-to-b from-white to-cream'>
        <div className='flex flex-col items-center text-center'>
          <div className='flex items-center gap-3 my-6'>
            <Image src={fcaLogo} alt='FCA Logo' className='w-28 h-auto ' />
            <p className='text-md font-semibold text-gray-700'>FCA Number: 1034407</p>
          </div>
          <Image src={logo} alt='logo' className='w-20 h-20' />
          <div className='my-2'>
            <BreadCrumb />
          </div>
          <h2 className='text-gold text-2xl'>Invest in your smile with confidence</h2>
          <h1 className='text-4xl font-semibold'>Flexible Dental Finance Options</h1>
        </div>

        <div className='max-w-[1000px] mx-auto mt-8 flex flex-col gap-8 pb-12'>
          <SectionSpacing className='flex flex-col gap-4'>
            <p>
              At Supernova Dental we understand that investing in your oral health can sometimes feel overwhelming, both
              emotionally and financially. That’s why we’re proud to offer <strong>flexible financing</strong> through
              our partner, Tabeo – making your dental care more accessible and manageable.
            </p>
            <p>
              With easy monthly payment options and <strong>0% interest for up to 12 months</strong>, you can start your
              treatment right away without the stress of upfront costs.
            </p>
          </SectionSpacing>

          <SectionSpacing className='flex flex-col gap-4'>
            <SubHeader>Why Choose Our Dental Finance?</SubHeader>
            <ul className='list-disc list-inside'>
              <li>Flexible finance from 0% interest over 12 months to longer-term options up to 60 months</li>
              <li>No upfront payments required</li>
              <li>Apply online in just 2 minutes</li>
              <li>
                Soft credit checks for finance applications only – verification only, no impact on your credit score
              </li>
              <li>No hidden fees or early repayment penalties</li>
            </ul>
            <p className='mt-2 text-sm text-gray-700'>
              *Please note: For plans up to 12 months, the minimum treatment value is £250. For finance over 12 months,
              a minimum of £500 applies.
            </p>
          </SectionSpacing>

          <SectionSpacing className='flex flex-col gap-4'>
            <SubHeader>How It Works</SubHeader>
            <ol className='list-decimal list-inside space-y-2'>
              <li>
                <strong>Schedule an appointment:</strong> We’ll assess your needs and provide a treatment plan.
              </li>
              <li>
                <strong>Apply for finance:</strong> We’ll send you a link via email to complete a short online
                application – we can also help you apply in-practice if you prefer.
              </li>
              <li>
                <strong>Get instant approval:</strong> 9 out of 10 decisions are made instantly. If you’re approved,
                simply choose your payment date.
              </li>
              <li>
                <strong>Start your treatment:</strong> Begin your care right away and spread the cost over time.
              </li>
            </ol>
          </SectionSpacing>

          <SectionSpacing className='flex flex-col gap-4'>
            <SubHeader>Who Can Apply?</SubHeader>
            <p>
              Anyone aged 18 or over with a regular income can apply. You don’t need perfect credit, and your
              application won’t affect your credit score thanks to soft credit checks for finance applications only.
            </p>
          </SectionSpacing>

          <SectionSpacing className='flex flex-col gap-4'>
            <SubHeader>Repayment and Flexibility</SubHeader>
            <p>
              Payments are taken monthly, and you can adjust your payment day at any time through your Tabeo account.
              Want to pay off early? No problem – there are <strong>no penalties</strong>.
            </p>
          </SectionSpacing>

          <SectionSpacing className='flex flex-col gap-4'>
            <SubHeader>Ready to Get Started?</SubHeader>
            <p>
              Speak to our team today to explore payment options. We’ll help you every step of the way to make sure your
              journey to a healthier, happier, Supernova smile is smooth and stress-free.
            </p>
          </SectionSpacing>
        </div>
      </section>
      <div className='pb-6 md:pb-12'>
        <FaqSection id='faq' faqItems={faqItems} />
      </div>
      <EnquiryButton referringPage={'dental-finance'} />
    </>
  );
}
