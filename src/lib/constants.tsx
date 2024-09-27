import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoInstagram } from 'react-icons/io';

export const BLOG_LIMIT = 9;
export const { NEXT_PUBLIC_INSTAGRAM_API_BASE_URL, META_API_CLIENT_ID, META_API_CLIENT_SECRET, META_ACCESS_TOKEN } =
  process.env;

// Navigation
export const cosmeticServices = [
  { name: 'Invisalign', link: '/cosmetic-dentistry/invisalign' },
  { name: 'Composite Bonding', link: '/cosmetic-dentistry/composite-bonding' },
  { name: 'Tooth Whitening', link: '/cosmetic-dentistry/tooth-whitening' },
  { name: 'Dental Implants', link: '/cosmetic-dentistry/dental-implants' },
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
  { name: 'General Check-up', link: '/general-dentistry/general-checkup' },
  { name: 'Filling', link: '/general-dentistry/filling' },
  { name: 'Root Canal', link: '/general-dentistry/root-canal' },
  { name: 'Emergency', link: '/general-dentistry/emergency' },
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
  // {
  //   name: 'Cosmetic Dentistry',
  //   url: '/cosmetic-dentistry',
  //   flyout: cosmeticServices,
  // },
  // { name: 'General Dentistry', url: '/general-dentistry', flyout: generalServices },
  // { name: 'About us', url: '/about', flyout: practiceInfo },
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

export const pricing = [
  {
    id: 1,
    plan: 'Invisalign',
    price: 250,
    offerPrice: 10,
    features: [
      'Free Invisalign assessment',
      'Includes Single arch Invisalign',
      '£250 off Treatment cost',
    ],
  },
  {
    id: 2,
    plan: 'Invisalign',
    price: 1000,
    offerPrice: 49,
    features: [
      'Free Invisalign assessment',
      'Includes Dual arch Invisalign',
      '£250 off Treatment cost',
      'Free boutique whitening worth £425',
      'Free vivera retainers worth £399',
    ],
  },
  {
    id: 3,
    plan: 'Dental Wellness',
    price: 150,
    offerPrice: 99,
    features: ['50% off new patient assessment ', '50% off 1st routine hygiene appointment', 'Includes air polish'],
  },
];
