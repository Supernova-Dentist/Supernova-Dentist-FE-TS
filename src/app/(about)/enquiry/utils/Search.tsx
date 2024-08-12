import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const urlToReadableMap: { [key: string]: string } = {
  invisalign: 'Invisalign',
  'composite-bonding': 'Composite Bonding',
  'tooth-whitening': 'Tooth Whitening',
  'dental-implants': 'Dental Implants',
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
      console.log('ref', ref);
      console.log('readableRef', readableRef);

      setReferringPageDisplay(typeof readableRef === 'string' ? readableRef : '');
    }
  }, [searchParams]);

  return referringPage.length > 0 ? (
    <div className='flex items-center mb-8'>
      <Button
        onClick={(e) => {
          e.preventDefault();
          router.push(`/${encodeURIComponent(referringPage)}`);
        }}
        className='inline-flex items-center gap-2 text-cream text-lg hover:text-gold hover:bg-cream transition'
      >
        <ArrowLeftIcon className='h-5 w-5' />
        Back to {referringPageDisplay}
      </Button>
    </div>
  ) : null;
}