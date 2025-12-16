import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "GoldenGlow transformed our rough concept into a polished MVP in just 10 weeks. Their team's expertise and communication were exceptional.",
    author: "Sarah Chen",
    role: "Founder & CEO",
    company: "TechStart",
  },
  {
    quote: "The quality of their work exceeded our expectations. We raised our seed round within a month of launching the MVP they built for us.",
    author: "Marcus Johnson",
    role: "Co-Founder",
    company: "LaunchPad",
  },
  {
    quote: "Professional, responsive, and incredibly skilled. They don't just build products—they become true partners in your success.",
    author: "Elena Rodriguez",
    role: "Product Director",
    company: "VentureX",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-card/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-mono mb-4 block">// testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="p-8 rounded-2xl bg-background border border-border card-hover"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              <p className="text-foreground mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary">
                    {testimonial.author[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
