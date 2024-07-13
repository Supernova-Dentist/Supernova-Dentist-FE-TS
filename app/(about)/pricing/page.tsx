import { PricingAccordion } from './utils/PricingAccordion';
import { pricingItems } from './utils/pricingItems';

export default function Pricing() {
  return (
    <div className='min-h-screen flex'>
      <div className='container mx-auto py-16 px-8'>
        <h1 className='text-4xl md:text-5xl font-bold text-center mb-12'>Our Pricing Plans</h1>
        <div className='max-w-4xl mx-auto'>
          <PricingAccordion pricingItems={pricingItems} />
        </div>
      </div>
    </div>
  );
}
