import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import projectFintech from "@/assets/project-fintech.png";
import projectHealth from "@/assets/project-health.png";
import projectEcommerce from "@/assets/project-ecommerce.png";

const projects = [
  {
    image: projectFintech,
    title: "FinFlow",
    description: "A mobile-first fintech app that helps users track investments and manage portfolios with real-time analytics.",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    result: "Raised $1.2M seed round",
  },
  {
    image: projectHealth,
    title: "MediConnect",
    description: "Telemedicine platform connecting patients with healthcare providers through video consultations and appointment scheduling.",
    tags: ["React", "AWS", "WebRTC"],
    result: "50K+ active users",
  },
  {
    image: projectEcommerce,
    title: "ShopVerse",
    description: "Multi-vendor marketplace with AI-powered recommendations and seamless checkout experience.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    result: "$500K GMV in 3 months",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-mono mb-4 block">// our work</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real projects, real results. See how we've helped startups launch and scale.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl bg-card border border-border overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} project mockup`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Result */}
                <div className="pt-4 border-t border-border">
                  <span className="text-sm text-primary font-semibold">
                    {project.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
