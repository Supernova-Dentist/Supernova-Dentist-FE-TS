import { PricingAccordion } from './utils/PricingAccordion';
import { pricingItems } from './utils/pricingItems';

export default function Pricing() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='container mx-auto py-12 px-4'>
        <h1 className='text-3xl font-bold text-center mb-6'>Our Pricing Plans</h1>
        <div className='max-w-lg mx-auto'>
          <PricingAccordion pricingItems={pricingItems} />
        </div>
      </div>
    </div>
  );
}
