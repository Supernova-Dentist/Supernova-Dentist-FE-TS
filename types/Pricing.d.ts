type Product = {
  description: string;
  price: number;
};

type PricingItem = {
  title: string;
  products: Product[];
};

type PricingAccordionProps = {
  pricingItems: PricingItem[];
};
