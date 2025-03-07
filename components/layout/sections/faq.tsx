import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'What services do you offer?',
    answer:
      'We provide branding, digital marketing, web & mobile development, creative design, client management solutions, and live support.',
    value: 'item-1',
  },
  {
    question: 'How can I get started with your services?',
    answer:
      'You can contact us through our website, book a consultation, or request a proposal. We will guide you through the process step by step.',
    value: 'item-2',
  },
  {
    question: 'Do you offer custom solutions?',
    answer:
      'Yes! We tailor our services based on your specific business needs to ensure maximum impact and efficiency.',
    value: 'item-3',
  },
  {
    question: 'Is ongoing support included?',
    answer:
      'Absolutely. We provide continuous support and maintenance to keep your brand and digital presence performing at its best.',
    value: 'item-4',
  },
  {
    question: 'How do you handle client management?',
    answer:
      'We use data-driven strategies and CRM tools to enhance communication, automate workflows, and improve customer retention.',
    value: 'item-5',
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container max-w-2xl py-24 sm:py-32">
      <div className="text-center mb-10">
        <h2 className="text-lg text-primary tracking-wider uppercase mb-2">
          FAQs
        </h2>

        <h2 className="text-3xl md:text-5xl font-bold">
          Frequently Asked Questions
        </h2>

        <p className="text-xl text-muted-foreground mt-4">
          Need more information? Here are some of the most common questions
          about our services.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value} className="border-b">
            <AccordionTrigger className="text-lg font-medium text-left">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
