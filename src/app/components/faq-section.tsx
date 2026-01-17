import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: 'What is Rezpitch?',
      answer: 'Rezpitch is a premium B2B bidding platform that connects hotels and destination management companies (DMCs) through an intelligent marketplace. We facilitate partnerships through transparent bidding, instant matching, and secure payment processing.',
    },
    {
      question: 'How does the smart matching algorithm work?',
      answer: 'Our AI-powered algorithm analyzes multiple factors including capacity, preferences, historical performance, pricing, and availability to connect the most compatible partners. This ensures high-quality matches that lead to successful long-term partnerships.',
    },
    {
      question: 'Is payment processing secure?',
      answer: 'Absolutely. We use bank-level encryption and escrow protection for all transactions. Our platform supports multiple currencies and provides instant settlement options, ensuring your funds are always protected.',
    },
    {
      question: 'How are partners verified?',
      answer: 'Every DMC on our platform goes through rigorous screening including background checks, credential verification, and performance reviews. Only verified premium partners are allowed to participate in the marketplace.',
    },
    {
      question: 'What countries do you operate in?',
      answer: 'Rezpitch operates globally across 150+ countries with 24/7 multilingual support. Our network includes over 5,000 verified partners worldwide.',
    },
    {
      question: 'How much does it cost?',
      answer: 'We offer flexible pricing plans based on your business needs. Contact our sales team for a custom quote tailored to your requirements. Most clients see ROI within the first quarter through our cost-saving features.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 800 }}>
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Rezpitch
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-50 rounded-xl px-6 border border-gray-200 hover:border-teal-300 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span style={{ fontWeight: 600 }}>{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
