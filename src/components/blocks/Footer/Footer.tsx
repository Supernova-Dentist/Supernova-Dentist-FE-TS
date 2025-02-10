import GetDirectionsForm from '@/components/GetDirectionsForm/GetDirectionsForm';
import PromotionFooter from '@/components/PromotionFooter/PromotionFooter';
import { cosmeticServices, generalServices, locationInfo, practiceInfo, socialIcons } from '@/lib/constants';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import FooterLink from '../FooterLink/FooterLink';
import ReviewLink from '../ReviewLink/ReviewLink';

const GoogleMap = dynamic(async () => await import('@/components/blocks/GoogleMap/GoogleMap'), {
  ssr: false,
});

export default function Footer() {
  return (
    <footer className='bg-grey'>
      <div className='w-full px-4 py-12 sm:px-10'>
        {/* Centering the content within the footer */}
        <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-gray-300 max-w-screen-lg gap-6'>
          {/* Practice Info Section */}
          <ul className='flex flex-col items-center sm:items-start gap-1'>
            <li className='text-gold text-lg uppercase'>Practice Info</li>
            {practiceInfo.map((info, index) => (
              <FooterLink key={info.name} link={info.link} name={info.name} index={index} />
            ))}
          </ul>

          {/* Office Info Section with Map */}
          <div className='flex flex-col items-center sm:items-start gap-1'>
            <ul className='w-full'>
              <li className='text-gold text-lg uppercase text-center sm:text-left'>Location</li>
              <li className='text-center sm:text-left'>{locationInfo.address}</li>
            </ul>
            <div className='mb-2'>
              <GoogleMap />
            </div>
            <GetDirectionsForm />
          </div>

          {/* Social Section */}
          <ul className='flex flex-col items-center sm:items-start gap-1'>
            <li className='text-gold text-lg uppercase'>Follow Us</li>
            <li className='flex gap-4'>
              {socialIcons.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target='_blank'
                  className='bg-gold p-1 rounded-sm flex justify-center items-center'
                >
                  <div className='bg-gold p-1 rounded-sm flex justify-center items-center'>{social.icon}</div>
                </Link>
              ))}
            </li>
          </ul>

          {/* Review Us Section */}
          <ul className='flex flex-col items-center sm:items-start gap-1'>
            <li className='text-gold text-lg uppercase'>Review Us</li>

            <ReviewLink />
          </ul>

          {/* Contact Us Section */}
          <ul className='flex flex-col items-center sm:items-start gap-1'>
            <li className='text-gold text-lg uppercase'>Contact Us</li>
            <li>enquiries@supernovadental.co.uk</li>
            <li>Phone: 01278 228665</li>
            <li className='flex gap-2'>
              <a href='mailto:enquiries@supernovadental.co.uk' className='bg-gold py-1 px-2 rounded-sm text-white'>
                Email Us
              </a>
              <a href='tel:+441278228665' className='bg-gold py-1 px-2 rounded-sm text-white'>
                Call Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Add the PromotionFooter at the bottom */}
      <PromotionFooter />
    </footer>
  );
}
