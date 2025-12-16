"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "/#about", isRoute: false },
  { name: "Services", href: "/#services", isRoute: false },
  { name: "Process", href: "/#process", isRoute: false },
  { name: "Portfolio", href: "/#portfolio", isRoute: false },
  { name: "Blog", href: "/blog", isRoute: true },
  { name: "Contact", href: "/#contact", isRoute: false },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMobileMenuOpen(false);
    if (!isRoute && href.startsWith("/#")) {
      const targetId = href.substring(2);
      if (pathname === "/") {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-golden-amber to-golden-deep flex items-center justify-center">
            <span className="font-display font-bold text-background text-lg">G</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground">
            Golden<span className="text-primary">Glow</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href, link.isRoute)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium cursor-pointer"
              >
                {link.name}
              </a>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="golden" size="lg">
            Start Your Project
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-4 mx-4 rounded-2xl p-6 animate-scale-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground py-2 text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground py-2 text-lg font-medium cursor-pointer"
                  onClick={() => handleNavClick(link.href, link.isRoute)}
                >
                  {link.name}
                </a>
              )
            )}
            <Button variant="golden" size="lg" className="mt-4">
              Start Your Project
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
