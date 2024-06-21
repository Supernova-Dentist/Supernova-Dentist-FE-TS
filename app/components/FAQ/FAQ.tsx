import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';

const FAQ = ({ faqItems }: FAQProps) => {
  return (
    <Accordion type='single' collapsible>
      {faqItems.map((item: FAQItem, index: number) => (
        <AccordionItem value={index.toString()} key={index}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;
