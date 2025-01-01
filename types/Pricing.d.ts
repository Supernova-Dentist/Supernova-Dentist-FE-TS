type Product = {
  description: string;
  price?: number;
  priceDescription?: string;
  priceDescriptionBefore?: string;
  isHeader?: boolean;
};

type PricingItem = {
  title: string;
  products: Product[];
};

type PricingAccordionProps = {
  pricingItems: PricingItem[];
};
