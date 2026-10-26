import { getServiceEnquiryHref } from '@/lib/serviceActions';

interface Props {
  referringPage: string;
  className?: string;
}

export function ServiceEnquiryLink({ referringPage, className = '' }: Props) {
  return (
    <a
      href={getServiceEnquiryHref(referringPage)}
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-champagne px-7 py-3 text-base font-semibold text-obsidian transition-colors hover:bg-lightGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze-ink focus-visible:ring-offset-4 ${className}`}
    >
      Enquire now
    </a>
  );
}

const EnquiryButton = ({ referringPage }: Props) => {
  return (
    <div className='mb-10 flex justify-center px-5 md:mb-16'>
      <ServiceEnquiryLink referringPage={referringPage} />
    </div>
  );
};

export default EnquiryButton;
