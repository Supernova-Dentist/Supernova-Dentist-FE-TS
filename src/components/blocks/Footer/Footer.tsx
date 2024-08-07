import dynamic from 'next/dynamic';
import { cosmeticServices, generalServices, officeInfo, practiceInfo, reviewLinks, socialIcons } from '@/lib/constants';
import FooterLink from '../FooterLink/FooterLink';
import GetDirectionsForm from '@/components/GetDirectionsForm/GetDirectionsForm';
const GoogleMap = dynamic(async () => await import('@/components/blocks/GoogleMap/GoogleMap'), {
  ssr: false,
});

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
            <div className='mb-2'>
              <GoogleMap />
            </div>
            <GetDirectionsForm />
          </div>

          {/* Review Us Section */}
          <ul className='flex flex-col items-center sm:items-start gap-1'>
            <li className='text-gold text-lg uppercase'>Review Us</li>
            {reviewLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
            <li className='flex gap-1'>
              {socialIcons.map((social, index) => (
                <div key={index} className='bg-gold p-1 rounded-sm flex justify-center items-center'>
                  {social.icon}
                </div>
              ))}
            </li>
          </ul>

          {/* Contact Us Section */}
          <ul className='flex flex-col items-center sm:items-start gap-1'>
            <li className='text-gold text-lg uppercase'>Contact Us</li>
            <li>Email: contact@supernovadental.com</li>
            <li>Phone: (123) 456-7890</li>
            <li className='flex gap-2'>
              <a href='mailto:contact@supernovadental.com' className='bg-gold py-1 px-2 rounded-sm text-white'>
                Email Us
              </a>
              <a href='tel:+1234567890' className='bg-gold py-1 px-2 rounded-sm text-white'>
                Call Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-between px-8 mt-8'>
        <span className='pb-3 text-slate-50'>
          © 2024 All Rights Reserved | <span className='underline text-gold cursor-pointer'>Privacy Policy</span>
        </span>
      </div>
    </footer>
  );
}
