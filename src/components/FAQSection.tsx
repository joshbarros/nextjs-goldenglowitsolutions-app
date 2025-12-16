import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema } from "@/components/seo/JsonLd";

export const faqs = [
  {
    question: "How long does it take to build an MVP?",
    answer: "Our typical MVP timeline is 8-12 weeks, depending on complexity. We use agile methodology with bi-weekly sprints, so you'll see tangible progress throughout the development process.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, scalable technologies including React, Node.js, TypeScript, and cloud platforms like AWS and Vercel. We select the best tech stack for your specific needs and growth plans.",
  },
  {
    question: "How much does an MVP cost?",
    answer: "MVP costs vary based on scope and complexity. Our projects typically range from $25,000 to $100,000. We provide detailed estimates after our discovery phase to ensure transparency.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Absolutely! We offer flexible support packages including bug fixes, feature iterations, and scaling assistance. Many clients continue working with us well beyond the initial launch.",
  },
  {
    question: "What if my idea changes during development?",
    answer: "Change is expected! Our agile approach embraces iterations. We build flexibility into our process so you can pivot based on user feedback and market insights.",
  },
];

export function FAQSection() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <section id="faq" className="py-24 lg:py-32">
        <div className="section-container max-w-3xl">
          {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-mono mb-4 block">// faq</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 bg-card/50 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
