import type { Metadata } from 'next';
import { SITE_URL } from './site';

export const localReachEditions = {
  'localreach-highbridge-and-burnham': 'Highbridge and Burnham',
  'localreach-bridgwater': 'Bridgwater',
  'localreach-taunton': 'Taunton',
} as const;

export type LocalReachEdition = keyof typeof localReachEditions;

export function isLocalReachPage(pathname: string) {
  return Object.prototype.hasOwnProperty.call(localReachEditions, pathname.slice(1));
}

export function localReachMetadata(edition: LocalReachEdition): Metadata {
  const title = `Welcome, LocalReach ${localReachEditions[edition]} readers | Supernova Dental`;
  const description = 'Come and see Supernova Dental in Bridgwater before you decide. Arrange a complimentary practice tour, ask about Invisalign or enquire about a new patient appointment.';
  return {
    title,
    description,
    alternates: { canonical: `/${edition}` },
    robots: { index: false, follow: true },
    openGraph: { title, description, url: `${SITE_URL}/${edition}`, type: 'website' },
  };
}
