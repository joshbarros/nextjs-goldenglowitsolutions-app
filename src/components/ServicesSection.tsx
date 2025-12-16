import { Lightbulb, Palette, Code2, TestTube, Rocket, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Discovery & Strategy",
    description: "We dive deep into your vision, market, and users to create a roadmap for success.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that convert visitors into loyal users.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Clean, scalable code using modern technologies that grow with your business.",
  },
  {
    icon: TestTube,
    title: "Testing & QA",
    description: "Rigorous testing to ensure your MVP is polished and production-ready.",
  },
  {
    icon: Rocket,
    title: "Launch Support",
    description: "Seamless deployment and launch assistance to get you to market fast.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Iteration",
    description: "Post-launch support and iterative improvements based on user feedback.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-mono mb-4 block">// what we do</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            End-to-End <span className="text-gradient">MVP Development</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to launch, we handle every aspect of building your minimum viable product.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
