type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqItems: FAQItem[];
  id?: string;
};
