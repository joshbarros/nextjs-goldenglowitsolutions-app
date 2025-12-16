import { CheckCircle2, Users, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "8-12 weeks from concept to launch",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Senior developers on every project",
  },
  {
    icon: Shield,
    title: "Quality First",
    description: "Production-ready, scalable code",
  },
];

const benefits = [
  "Transparent communication throughout the project",
  "Bi-weekly demos and progress updates",
  "Flexible scope adjustments based on feedback",
  "Post-launch support and maintenance",
  "Full code ownership and documentation",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card/50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="label-mono mb-4 block">// about us</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Trusted <span className="text-gradient">MVP Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              GoldenGlow IT Solutions is a boutique development agency specializing in 
              building MVPs for startups and entrepreneurs. We combine technical excellence 
              with startup mentality to deliver products that validate ideas and attract investors.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-start gap-5 p-6 rounded-2xl bg-background border border-border card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
