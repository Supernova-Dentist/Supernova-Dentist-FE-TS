import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoInstagram } from 'react-icons/io';

export const BLOG_LIMIT = 9;
export const { INSTAGRAM_API_BASE_URL, META_API_CLIENT_ID, META_API_CLIENT_SECRET, META_ACCESS_TOKEN } = process.env;

// Navigation
export const cosmeticServices = [
  {
    name: 'Explore Cosmetic Dentistry',
    link: '/cosmetic-dentistry',
  },
  // {
  //   name: 'Invisalign Flash Sale',
  //   link: '/cosmetic-dentistry/invisalign-flash-sale',
  // },
  {
    name: 'Invisalign Open Day',
    link: '/cosmetic-dentistry/invisalign-open-day',
  },
  {
    name: 'Invisalign',
    link: '/cosmetic-dentistry/invisalign',
  },
  {
    name: 'Dental Implants',
    link: '/cosmetic-dentistry/dental-implants',
  },
  {
    name: 'Teeth Whitening',
    link: '/cosmetic-dentistry/teeth-whitening',
  },
];

export const practiceInfo = [
  { name: 'Home', link: '/' },
  { name: 'Practice', link: '/practice' },
  // { name: 'Invisalign Open Day', link: '/invisalign-open-day' },
  { name: 'Emergency Dentistry', link: '/emergency-dentistry' },
  { name: 'Dental Implants', link: '/dental-implants' },
  { name: 'Invisalign Open Day', link: '/cosmetic-dentistry/invisalign-open-day' },
  { name: 'Invisalign', link: '/invisalign' },
  { name: 'White Composite Fillings', link: '/general-dentistry/white-composite-fillings' },
  { name: 'Dental Hygiene', link: '/dental-hygiene' },
  { name: 'Dental Therapist', link: '/dental-therapist' },
  { name: 'Dental Finance', link: '/dental-finance' },
  { name: 'Find Us', link: '/find-us' },
  { name: 'Pricing', link: '/pricing' },
  { name: 'Enquiry', link: '/enquiry' },
  { name: 'Careers', link: '/careers' },
  { name: 'Professional Referrals', link: '/professional-referrals' },
  { name: 'Refer A Friend', link: '/refer-a-friend' },
  // { name: 'Refer A Friend', link: '/refer-a-friend' },
  { name: 'Patient Portal', link: 'https://supernova.portal.dental' },
  // { name: 'Social', link: '/social' },
];

export const generalServices = [
  {
    name: 'Explore General Dentistry',
    link: '/general-dentistry',
  },
  {
    name: 'Emergency Dentistry',
    link: '/general-dentistry/emergency-dentistry',
  },
  {
    name: 'White Composite Fillings',
    link: '/general-dentistry/white-composite-fillings',
  },
  {
    name: 'Dental Therapist',
    link: '/general-dentistry/dental-therapist',
  },
  {
    name: 'Dental Hygiene',
    link: '/general-dentistry/dental-hygiene',
  },
  {
    name: 'Sports Mouthguards',
    link: '/general-dentistry/sports-mouthguards',
  },
  {
    name: 'Dental Finance',
    link: '/general-dentistry/dental-finance',
  },
];

export const services = [
  // {
  //   name: 'Invisalign Open Day',
  //   link: '/invisalign-open-day',
  // },
  {
    name: 'Emergency Dentistry',
    link: '/emergency-dentistry',
  },
  {
    name: 'Dental Implants',
    link: '/dental-implants',
  },
  {
    name: 'Invisalign',
    link: '/invisalign',
  },
  {
    name: 'Dental Therapist',
    link: '/dental-therapist',
  },
  {
    name: 'Dental Hygiene',
    link: '/dental-hygiene',
  },
  {
    name: 'Dental Finance',
    link: '/dental-finance',
  },
];

// export const general = [
//   {
//     name: 'Dental Therapist',
//     link: '/dental-therapist',
//   },
//   {
//     name: 'Dental Hygiene',
//     link: '/dental-hygiene',
//   },
// ];

export const aboutUs = [
  { name: 'Practice', link: '/practice' },
  // { name: 'Our Journey', link: '/our-journey' },
  { name: 'Team', link: '/team' },
  { name: 'Find Us', link: '/find-us' },
  // { name: 'Social', link: '/social' },
  { name: 'Pricing', link: '/pricing' },
  { name: 'Enquiry', link: '/enquiry' },
  { name: 'Careers', link: '/careers' },
];

export const referrals = [
  { name: 'Professional Referrals', link: '/professional-referrals' },
  { name: 'Refer A Friend', link: '/refer-a-friend' },
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
  { name: 'Cosmetic Dentistry', flyout: cosmeticServices },
  { name: 'General Dentistry', flyout: generalServices },
  // { name: 'General Dentistry', flyout: general },
  { name: 'About us', flyout: aboutUs },
  { name: 'Referral', flyout: referrals },
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
