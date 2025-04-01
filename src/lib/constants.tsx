import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoInstagram } from 'react-icons/io';

export const BLOG_LIMIT = 9;
export const { INSTAGRAM_API_BASE_URL, META_API_CLIENT_ID, META_API_CLIENT_SECRET, META_ACCESS_TOKEN } = process.env;

// Navigation
export const cosmeticServices = [
  { name: 'Invisalign', link: '/cosmetic-dentistry/invisalign' },
  { name: 'Composite Bonding', link: '/cosmetic-dentistry/composite-bonding' },
  { name: 'Tooth Whitening', link: '/cosmetic-dentistry/tooth-whitening' },
  { name: 'Dental Implants', link: '/cosmetic-dentistry/dental-implants' },
];

export const practiceInfo = [
  { name: 'Home', link: '/' },
  { name: 'Practice', link: '/practice' },
  { name: 'Invisalign Open Day', link: '/invisalign-open-day' },
  { name: 'Invisalign', link: '/invisalign' },
  { name: 'Dental Hygiene', link: '/dental-hygiene' },
  { name: 'Find Us', link: '/find-us' },
  { name: 'Pricing', link: '/pricing' },
  { name: 'Enquiry', link: '/enquiry' },
  { name: 'Social', link: '/social' },
];

export const generalServices = [
  { name: 'General Check-up', link: '/general-dentistry/general-checkup' },
  { name: 'Filling', link: '/general-dentistry/filling' },
  { name: 'Root Canal', link: '/general-dentistry/root-canal' },
  { name: 'Emergency', link: '/general-dentistry/emergency' },
];

export const cosmetic = [
  {
    name: 'Invisalign Open Day',
    link: '/invisalign-open-day',
  },
  {
    name: 'Invisalign',
    link: '/invisalign',
  },
];

export const general = [
  {
    name: 'Dental Therapist',
    link: '/dental-therapist',
  },
  {
    name: 'Dental Hygiene',
    link: '/dental-hygiene',
  },
];

export const aboutUs = [
  { name: 'Team', link: '/team' },
  { name: 'Find Us', link: '/find-us' },
  { name: 'Social', link: '/social' },
  { name: 'Pricing', link: '/pricing' },
  { name: 'Enquiry', link: '/enquiry' },
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
  //  TODO: Uncomment when there is an instagram post
  // {
  //   name: 'Social',
  //   link: '/social',
  // },
];

export const navLinks = [
  // {
  //   name: 'Cosmetic Dentistry',
  //   url: '/cosmetic-dentistry',
  //   flyout: cosmetic,
  // },
  // { name: 'General Dentistry', url: '/general-dentistry', flyout: generalServices },
  // { name: 'About us', url: '/about', flyout: practiceInfo },
  // { name: 'Media', url: '/media', flyout: media },
  { name: 'Home', url: '/', flyout: [] },
  //  TODO: Uncomment when there is a insta post
  // { name: 'Social', url: '#social', flyout: [] },
  { name: 'Practice', url: '/practice', flyout: [] },
  { name: 'Cosmetic Dentistry', flyout: cosmetic },
  { name: 'General Dentistry', flyout: general },
  { name: 'About us', flyout: aboutUs },
];

export const locationInfo = {
  address: 'Supernova Building, Marsh Lane, Huntworth Gate, Bridgwater TA6 6LQ',
  phone: '(816) 555-5555',
  text: '(816) 555-4444',
};

export const socialIcons = [
  { icon: <IoLogoInstagram size={28} />, name: 'Instagram', url: 'https://www.instagram.com/supernova.dental' },
  {
    icon: <GrFacebookOption size={28} />,
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61567279201971',
  },
];

export const DentallyPortal = 'https://supernova.dentr.net';

export const pricing = [
  {
    id: 1,
    plan: 'Invisalign',
    price: { number: 250 },
    offerPrice: 10,
    features: ['Free Invisalign assessment', 'Includes Single arch Invisalign', '£250 off Treatment cost'],
  },
  {
    id: 2,
    plan: 'Invisalign Deluxe',
    price: { number: 1000, text: 'Over' },
    offerPrice: 1470,
    features: [
      'Free Invisalign assessment',
      'Includes Dual arch Invisalign',
      '£500 off Treatment cost',
      'Free whitening worth £425',
      'Free vivera retainers worth £399',
    ],
  },
  // {
  //   id: 3,
  //   plan: 'Dental Wellness',
  //   price: { number: 150 },
  //   offerPrice: 99,
  //   features: ['50% off new patient assessment', '50% off 1st routine hygiene appointment', 'Includes air polish'],
  // },
];

export const instagramAccountsConfig = {
  social: '17841470126685683',
  'scott-young': '17841468241198700',
};
