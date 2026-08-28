import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const urlToReadableMap: { [key: string]: string } = {
  'cosmetic-dentistry/invisalign': 'Invisalign',
  'general-dentistry/dental-therapist': 'Dental Therapist',
  'general-dentistry/dental-hygiene': 'Dental Hygiene',
  'general-dentistry/sports-mouthguards': 'Sports Mouthguards',
  'general-dentistry/new-patient-examination': 'New Patient Examination',
  'cosmetic-dentistry/composite-bonding': 'Composite Bonding',
  'cosmetic-dentistry/teeth-whitening': 'Teeth Whitening',
  'cosmetic-dentistry/dental-implants': 'Dental Implants',
  'general-dentistry/general-checkup': 'General Check-up',
  'general-dentistry/white-composite-fillings': 'White Composite Fillings',
  'general-dentistry/root-canal-treatment': 'Root Canal Treatment',
  'general-dentistry/dentures': 'Dentures',
  'general-dentistry/emergency-dentistry': 'Emergency Dental Care',
  pricing: 'Pricing',
  'general-dentistry/dental-finance': 'Dental Finance',
  'general-dentistry/dental-membership-plans': 'Dental Membership Plans',
  'emergency-dentistry': 'Emergency Dentistry',
};

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [referringPage, setReferringPage] = useState<string>('');
  const [referringPageDisplay, setReferringPageDisplay] = useState<string>('');

  useEffect(() => {
    const ref = searchParams.get('ref');

    if (ref != null) {
      const readableRef = urlToReadableMap[ref] || ref;
      setReferringPage(ref);

      setReferringPageDisplay(typeof readableRef === 'string' ? readableRef : '');
    }
  }, [searchParams]);

  return referringPage.length > 0 ? (
    <div className='mb-8 flex items-center'>
      <Button
        onClick={(e) => {
          e.preventDefault();
          router.push(`/${referringPage}`);
        }}
        className='inline-flex min-h-11 items-center gap-2 rounded-full border border-[#ded8cc] bg-white px-4 text-sm font-semibold text-[#171923] transition-colors hover:border-[#b9975b] hover:bg-[#f7f5f0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9975b]'
      >
        <ArrowLeftIcon className='h-5 w-5' />
        Back to {referringPageDisplay}
      </Button>
    </div>
  ) : null;
}
