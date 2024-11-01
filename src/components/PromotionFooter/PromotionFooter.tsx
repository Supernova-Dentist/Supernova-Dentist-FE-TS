export default function PromotionFooter() {
  return (
    <footer className='w-full px-10 py-4 bg-grey text-cream text-sm'>
      <div className='flex justify-between flex-col lg:flex-row items-center gap-1'>
        <span>This practice is fully private with no NHS services available.</span>
        <div className='flex items-center gap-2'>
          <span>&copy; Supernova Dental 2024</span>
          <span>| Website last updated: November 2024</span>
        </div>
      </div>
    </footer>
  );
}
