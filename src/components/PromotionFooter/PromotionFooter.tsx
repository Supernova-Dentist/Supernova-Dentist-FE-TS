export default function PromotionFooter() {
  return (
    <footer className='w-full p-6 sm:px-10 bg-grey text-cream text-sm'>
      <div className='flex justify-between flex-col lg:flex-row items-center gap-1'>
        <span className='text-center lg:text-left'>This practice is fully private with no NHS services available.</span>
        <div className='flex items-center gap-2 flex-col-reverse sm:flex-row'>
          <span>&copy; Supernova Dental 2025</span>
          <span className='hidden sm:block'>|</span>
          <span>Website last updated: January 2025</span>
        </div>
      </div>
    </footer>
  );
}
