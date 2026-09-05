import Link from 'next/link';

const MakeEnquirySection = () => {
  return (
    <div className='mx-auto mt-16 max-w-4xl rounded-[1.5rem] bg-ivory px-6 py-10 text-center sm:px-10 lg:py-14'>
      <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-text-light'>Need some guidance?</p>
      <h2 className='mb-5 mt-3 text-3xl font-normal text-obsidian md:text-4xl'>Have questions about treatment prices?</h2>
      <p className='mx-auto mb-8 max-w-2xl leading-7 text-taupe'>
        If you have any questions or need more details about our pricing plans, feel free to reach out to us. We&apos;re
        here to help!
      </p>
      <Link
        href={`/enquiry?ref=${encodeURIComponent('pricing')}`}
        className='inline-flex min-h-12 items-center justify-center rounded-full bg-obsidian px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-deep-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light focus-visible:ring-offset-2'
      >
        Make an Enquiry
      </Link>
    </div>
  );
};

export default MakeEnquirySection;
