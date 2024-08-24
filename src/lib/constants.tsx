import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoInstagram } from 'react-icons/io';

export const BLOG_LIMIT = 9;
export const { NEXT_PUBLIC_META_API_BASE_URL, META_API_CLIENT_ID, META_API_CLIENT_SECRET, META_ACCESS_TOKEN } =
  process.env;

// FOOTER
export const generalServices = [
  { name: 'Implants', link: '/implants' },
  { name: 'Emergency Dentist', link: '/emergency-dentist' },
];

export const cosmeticServices = [
  { name: 'Invisalign', link: '/invisalign' },
  { name: 'Composite Bonding', link: '/composite-bonding' },
  { name: 'Tooth Whitening', link: '/tooth-whitening' },
  { name: 'Dental Implants', link: '/dental-implants' },
];

export const practiceInfo = [
  { name: 'Our Clinic', link: '/clinic' },
  { name: 'Meet Dr. Young', link: '/meet-dr-young' },
  { name: 'Meet The Team', link: '/team' },
  { name: 'Find Us', link: '/find-us' },
  { name: 'Pricing', link: '/pricing' },
  { name: 'Enquiry', link: '/enquiry' },
];

export const officeInfo = {
  address: 'Marsh Lane, Huntworth, Bridgwater, Alliance Building TA6 6LQ',
  phone: '(816) 555-5555',
  text: '(816) 555-4444',
};

export const reviewLinks = ['Google', 'Yelp', 'Facebook'];

export const socialIcons = [
  { icon: <IoLogoInstagram size={28} />, name: 'Instagram' },
  { icon: <GrFacebookOption size={28} />, name: 'Facebook' },
];

export const DentallyPortal = 'https://supernova.dentr.net';
