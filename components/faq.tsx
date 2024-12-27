
'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQSection = () => {
  const faqs = [
    { question: 'What is Trusty Money?', answer: 'Trusty Money is a platform designed to manage your finances securely.' },
    { question: 'How can I sign up?', answer: "Click on the 'Sign Up' button on the homepage and follow the instructions." },
    { question: 'Is my data secure?', answer: 'Yes, we prioritize data security with advanced encryption methods.' },
    { question: 'What payment methods do you support?', answer: 'We support a wide range of payment options including UPI, cards, and net banking.' },
  ];

  return (
    <section className="bg-muted py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground text-center mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium text-card-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-card-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;