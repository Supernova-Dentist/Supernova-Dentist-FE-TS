import { cosmeticServices, generalServices, officeInfo, practiceInfo, reviewLinks, socialIcons } from '@/lib/constants';
import FooterLink from '../FooterLink/FooterLink';

export default function Footer() {
  return (
    <footer className='bg-grey'>
      <div className='container mx-auto px-4 py-12 sm:px-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-300'>
          <ul className='flex flex-col items-center sm:items-start gap-1'>
            <li className='text-gold text-lg mb-1 uppercase'>General Services</li>
            {generalServices.map((service, index) => (
              <FooterLink key={service.name} link={service.link} name={service.name} index={index} />
            ))}
          </ul>
          <ul className='flex flex-col items-center sm:items-start gap-1'>
            <li className='text-gold text-lg mb-1 uppercase'>Cosmetic Services</li>
            {cosmeticServices.map((service, index) => (
              <FooterLink key={service.name} link={service.link} name={service.name} index={index} />
            ))}
          </ul>
          <ul className='flex flex-col items-center sm:items-start gap-1'>
            <li className='text-gold text-lg mb-1 uppercase'>Practice Info</li>
            {practiceInfo.map((info, index) => (
              <FooterLink key={info.name} link={info.link} name={info.name} index={index} />
            ))}
          </ul>
          <ul className='flex flex-col items-center sm:items-start'>
            <li className='text-gold text-lg mb-2 max-w-[5rem] uppercase'>Office</li>
            <li className='mb-3 text-center sm:text-left'>{officeInfo.address}</li>
            <li className='mb-3 text-gold underline-animation cursor-pointer'>Get Directions</li>
            <li className='mb-3'>Call {officeInfo.phone}</li>
            <li className='mb-3'>Text {officeInfo.text}</li>
          </ul>
          <ul className='flex flex-col items-center sm:items-start'>
            <li className='text-gold text-lg mb-2 uppercase'>Review Us</li>
            {reviewLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
            <li className='flex gap-1 mt-3'>
              {socialIcons.map((social, index) => (
                <div key={index} className='bg-gold p-1 rounded-sm flex justify-center items-center'>
                  {social.icon}
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-between px-8 mt-8'>
        <span className='pb-3 text-slate-50'>
          © 2021 All Rights Reserved | <span className='text-gold cursor-pointer'>Privacy Policy</span>
        </span>
      </div>
    </footer>
  );
}
