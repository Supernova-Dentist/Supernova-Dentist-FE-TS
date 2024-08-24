import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoInstagram } from 'react-icons/io';

export const BLOG_LIMIT = 9;
export const { NEXT_PUBLIC_META_API_BASE_URL, META_API_CLIENT_ID, META_API_CLIENT_SECRET, META_ACCESS_TOKEN } =
  process.env;

// Navigation
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

export const generalServices = [
  { name: 'General Check-up', link: '/' },
  { name: 'Filling', link: '/' },
  { name: 'Root Canal', link: '/' },
  { name: 'Emergency', link: '/' },
];

export const media = [
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Gallery',
    link: '/gallery',
  },
  {
    name: 'Social',
    link: '/social',
  },
];

export const navLinks = [
  {
    name: 'Cosmetic Services',
    url: '/cosmetic-services',
    flyout: cosmeticServices,
  },
  { name: 'General Services', url: '/general-services', flyout: generalServices },
  { name: 'About us', url: '/about', flyout: practiceInfo },
  { name: 'Media', url: '/media', flyout: media },
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
