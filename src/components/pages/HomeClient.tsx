"use client";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
// import { StatsSection } from "@/components/StatsSection"; // TODO: Uncomment when we have real stats
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
// import { PortfolioSection } from "@/components/PortfolioSection"; // TODO: Uncomment when we have public clients
// import { TestimonialsSection } from "@/components/TestimonialsSection"; // TODO: Uncomment when we have public testimonials
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { OrganizationSchema } from "@/components/seo/JsonLd";

const HomeClient = () => {
    return (
        <div className="min-h-screen bg-background">
            <OrganizationSchema />
            <Navbar />
            <main>
                <HeroSection />
                {/* <StatsSection /> */}{/* TODO: Uncomment when we have real stats */}
                <AboutSection />
                <ServicesSection />
                <ProcessSection />
                {/* <PortfolioSection /> */}{/* TODO: Uncomment when we have public clients */}
                {/* <TestimonialsSection /> */}{/* TODO: Uncomment when we have public testimonials */}
                <FAQSection />
                <ContactSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default HomeClient;
