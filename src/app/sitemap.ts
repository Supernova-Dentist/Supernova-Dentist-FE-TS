import { teamMembers } from '@/data/team';
import { SITE_URL } from '@/lib/site';
import type { MetadataRoute } from 'next';

const indexableRoutes = [
  '/',
  '/bridgwater-sainsburys',
  '/cancellations',
  '/careers',
  '/careers/associate-dentist-bridgwater-somerset',
  '/cosmetic-dentistry',
  '/cosmetic-dentistry/composite-bonding',
  '/cosmetic-dentistry/dental-implants',
  '/cosmetic-dentistry/invisalign',
  '/cosmetic-dentistry/teeth-whitening',
  '/enquiry',
  '/find-us',
  '/general-dentistry',
  '/general-dentistry/dental-finance',
  '/general-dentistry/dental-hygiene',
  '/general-dentistry/dental-membership-plans',
  '/general-dentistry/dental-therapist',
  '/general-dentistry/dentures',
  '/general-dentistry/emergency-dentistry',
  '/general-dentistry/new-patient-examination',
  '/general-dentistry/root-canal-treatment',
  '/general-dentistry/sports-mouthguards',
  '/general-dentistry/white-composite-fillings',
  '/practice',
  '/pricing',
  '/privacy-policy',
  '/professional-referrals',
  '/professional-referrals/cbct-opg-referral',
  '/professional-referrals/dental-implant-referral',
  '/professional-referrals/invisalign-referral',
  '/professional-referrals/oral-surgery-referral',
  '/refer-a-friend',
  '/supernova-smile-stories',
  '/team',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...indexableRoutes, ...teamMembers.map(({ slug }) => `/team/${slug}`)];

  return routes.map((route) => ({ url: new URL(route, SITE_URL).toString() }));
}
