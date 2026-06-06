"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(12, 13, 16, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="font-display text-xl transition-colors duration-200 flex items-center gap-2 group"
            style={{ color: "var(--text-primary)" }}
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white transition-all duration-300 group-hover:scale-110"
              style={{ background: "var(--accent)" }}
            >
              {portfolioConfig.shortName}
            </span>
            <span
              className="hidden sm:block text-sm font-normal tracking-wide"
              style={{ color: "var(--text-secondary)" }}
            >
              {portfolioConfig.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {portfolioConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="nav-link text-sm transition-colors duration-200 cursor-pointer"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: "var(--accent)",
                color: "white",
                boxShadow: "0 4px 15px var(--accent-glow)",
              }}
            >
              <Download size={14} />
              Resume
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-200"
              style={{
                background: isOpen ? "var(--accent-glow)" : "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "all" : "none",
          background: "rgba(12, 13, 16, 0.97)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {portfolioConfig.navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-display text-3xl transition-all duration-300 cursor-pointer"
              style={{
                color: "var(--text-secondary)",
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={portfolioConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2 px-6 py-3 rounded-xl text-base font-medium"
            style={{ background: "var(--accent)", color: "white" }}
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}
