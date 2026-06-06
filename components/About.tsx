"use client";

import { MapPin, Coffee, Heart } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "Fresher" },
    { label: "Projects Shipped", value: "10+" },
    { label: "Happy Clients", value: "10+" },
    { label: "Cups of Coffee", value: "∞" },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--border))" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-3 font-medium"
            style={{ color: "var(--accent)" }}
          >
            About Me
          </p>
          <h2
            className="font-display text-4xl md:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            The person behind
            <br />
            <span style={{ color: "var(--text-secondary)" }}>the keyboard</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Photo */}
          <div className="relative">
            <div
              className="relative w-full max-w-sm mx-auto lg:mx-0 aspect-square rounded-2xl overflow-hidden"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <img
                src="/profile.jpg"
                alt={portfolioConfig.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div
              className="absolute -bottom-4 -right-4 lg:right-8 px-4 py-3 rounded-xl flex items-center gap-2 shadow-xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <Heart size={16} style={{ color: "var(--accent)" }} fill="currentColor" />
              <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                Open to work
              </span>
            </div>
          </div>

          {/* Right: Bio */}
          <div>
            <div className="space-y-4 mb-8">
              {portfolioConfig.bio.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex items-center gap-2 mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
              <MapPin size={14} style={{ color: "var(--accent)" }} />
              {portfolioConfig.location}
              <span className="mx-2" style={{ color: "var(--border)" }}>·</span>
              <Coffee size={14} style={{ color: "var(--accent-2)" }} />
              <span>Coffee-driven development</span>
            </div>

            <div className="mb-8 h-px" style={{ background: "var(--border)" }} />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="font-display text-3xl mb-1" style={{ color: "var(--accent)" }}>
                    {value}
                  </div>
                  <div className="text-xs leading-tight" style={{ color: "var(--text-muted)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}