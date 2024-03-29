import { IoLogoInstagram } from 'react-icons/io';
import { GrFacebookOption } from 'react-icons/gr';

export default function Footer() {
  return (
    <footer className='bg-[#121C26]'>
      <div className='flex flex-col px-20 py-28'>
        <div className='flex flex-wrap items-start gap-4 justify-center sm:justify-between text-slate-50'>
          <ul className='w-[15rem] flex flex-col items-center sm:items-start'>
            <li className='text-[#C29470] text-2xl mb-2'>Services</li>
            <li>General</li>
            <li>Cosmetic</li>
            <li>Surgical</li>
            <li>Family Desntistry</li>
          </ul>
          <ul className='w-[15rem] flex flex-col items-center sm:items-start'>
            <li className='text-[#C29470] text-2xl mb-2'>Practice Info</li>
            <li>About</li>
            <li>New Patients</li>
            <li>Careers</li>
            <li>Payment Options</li>
            <li>New Patient Forms</li>
          </ul>
          <ul className='max-w-[15rem] w-[15rem] flex flex-col items-center sm:items-start'>
            <li className='text-[#C29470] text-2xl mb-2 max-w-[5rem]'>Office</li>
            <li className='mb-3 text-center sm:text-left'>
              Marsh Lane, Huntworth, Bridgwater, Alliance Building TA6 6LQ
            </li>
            <li className='mb-3 text-[#C29470] underline'>Get Directions</li>
            <li className='mb-3'>Call (816) 555-5555</li>
            <li className='mb-3'>Text (816) 555-4444</li>
          </ul>
          <ul className='w-[15rem] flex flex-col items-center sm:items-start'>
            <li className='text-[#C29470] text-2xl mb-2'>Review Us</li>
            <li>Google</li>
            <li>Yelp</li>
            <li className='mb-3'>Facebook</li>
            <li className='flex gap-1'>
              <div className='bg-[#C29470] p-1 rounded-sm flex justify-center items-center'>
                <IoLogoInstagram size={28} />
              </div>
              <div className='bg-[#C29470] p-1 rounded-sm flex justify-center items-center'>
                <GrFacebookOption size={28} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-between px-8'>
        <span className='pb-3 text-slate-50'>
          © 2021 All Rights Reserved |{' '}
          <span className='underline text-[#C29470]'>Privacy Policy</span>
        </span>
      </div>
    </footer>
  );
}
