"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build Your <span className="text-gradient">MVP</span>?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-10">
            Let's turn your idea into reality. Tell us about your project and discover
            how we can bring your vision to market.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="golden"
              size="xl"
              onClick={scrollToContact}
              className="group animate-pulse-glow"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-muted-foreground text-sm mt-8">
            No commitment required. Let's just talk about your project.
          </p>
        </div>
      </div>
    </section>
  );
}
