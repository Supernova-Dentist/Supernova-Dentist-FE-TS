import Link from 'next/link';
import { cosmeticServices, generalServices, officeInfo, practiceInfo, reviewLinks, socialIcons } from '@/lib/constants';
import FooterLink from '../FooterLink/FooterLink';
import GetDirectionsForm from '@/components/GetDirectionsForm/GetDirectionsForm';
import Button from '@/components/Button/Button';
import DynamicGoogleMap from '../GoogleMap/DynamicGoogleMap';

export default function Footer() {
  return (
    <footer className='bg-grey'>
      <div className='w-full px-4 py-12 sm:px-10'>
        <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-[1500px]:grid-cols-6 gap-8 text-gray-300'>
          {/* General Services Section */}
          <ul className='flex flex-col items-center sm:items-start gap-1'>
            <li className='text-gold text-lg uppercase'>General Services</li>
            {generalServices.map((service, index) => (
              <FooterLink key={service.name} link={service.link} name={service.name} index={index} />
            ))}
          </ul>

          {/* Cosmetic Services Section */}
          <ul className='flex flex-col items-center sm:items-start gap-1'>
            <li className='text-gold text-lg uppercase'>Cosmetic Services</li>
            {cosmeticServices.map((service, index) => (
              <FooterLink key={service.name} link={service.link} name={service.name} index={index} />
            ))}
          </ul>

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
              <li className='text-gold text-lg uppercase text-center sm:text-left'>Office</li>
              <li className='text-center sm:text-left'>{officeInfo.address}</li>
            </ul>
            <DynamicGoogleMap />
            <div className='mt-2'>
              <GetDirectionsForm />
            </div>
          </div>

          {/* Review Us Section */}
          <ul className='flex flex-col items-center sm:items-start gap-1'>
            <li className='text-gold text-lg uppercase'>Review Us</li>
            {reviewLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
            <li className='flex gap-1'>
              {socialIcons.map((social, index) => (
                <Button key={index} className='p-1 flex justify-center items-center text-cream'>
                  {social.icon}
                </Button>
              ))}
            </li>
          </ul>

          {/* Contact Us Section */}
          <ul className='flex flex-col items-center sm:items-start gap-1'>
            <li className='text-gold text-lg uppercase'>Contact Us</li>
            <li>Email: contact@supernovadental.com</li>
            <li>Phone: (123) 456-7890</li>
            <li className='flex gap-2'>
              <a
                href='mailto:contact@supernovadental.com'
                className='bg-gold rounded px-4 py-2 text-md hover:bg-lightGold transition-all duration-150 text-grey'
              >
                Email Us
              </a>
              <a
                href='tel:+1234567890'
                className='bg-gold rounded px-4 py-2 text-md hover:bg-lightGold transition-all duration-150 text-grey'
              >
                Call Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-between px-8 mt-8'>
        <span className='pb-3 text-slate-50'>
          © 2024 All Rights Reserved |{' '}
          <Link href='/privacy-policy' className='underline text-gold cursor-pointer'>
            Privacy Policy
          </Link>
        </span>
      </div>
    </footer>
  );
}
