const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn about your vision, goals, target market, and competitive landscape to define the MVP scope.",
  },
  {
    number: "02",
    title: "Design",
    description: "Our designers create stunning UI/UX that delights users and maximizes conversion rates.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Agile sprints deliver real results every two weeks. You see progress, not promises.",
  },
  {
    number: "04",
    title: "Deploy",
    description: "We launch your MVP and provide ongoing support as you gather user feedback and iterate.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-card/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-mono mb-4 block">// our process</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How We <span className="text-gradient">Build Your MVP</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven 4-step process that takes you from idea to launch in 8-12 weeks.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center lg:text-left">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-background border border-border mb-6 relative z-10">
                  <span className="font-display text-3xl font-bold text-gradient">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
