"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/SocialIcons";

export default function Hero() {
  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(42, 45, 56, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(42, 45, 56, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Glowing orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124, 106, 245, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      {/* Floating orbit decoration */}
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
        <div className="relative w-48 h-48 opacity-30">
          <div
            className="absolute inset-0 rounded-full"
            style={{ border: "1px dashed var(--border)" }}
          />
          <div
            className="absolute inset-8 rounded-full"
            style={{ border: "1px dashed var(--border)" }}
          />
          <div
            className="w-3 h-3 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ background: "var(--accent)", boxShadow: "0 0 12px var(--accent)" }}
          />
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: "var(--accent-2)",
              position: "absolute",
              top: "50%",
              left: "50%",
              marginLeft: "-1px",
              marginTop: "-1px",
              animation: "orbit2 15s linear infinite",
              boxShadow: "0 0 8px var(--accent-2)",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          {/* Available badge */}
          {portfolioConfig.availableForWork && (
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 animate-fade-in-up"
              style={{
                background: "rgba(52, 211, 153, 0.08)",
                border: "1px solid rgba(52, 211, 153, 0.2)",
                color: "var(--accent-2)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "var(--accent-2)",
                  boxShadow: "0 0 6px var(--accent-2)",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              Available for new opportunities
            </div>
          )}

          {/* Main heading */}
          <h1
            className="font-display leading-tight mb-6 animate-fade-in-up delay-100"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "var(--text-primary)" }}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{portfolioConfig.name}</span>
            <br />
            <span style={{ color: "var(--text-secondary)" }}>
              {portfolioConfig.role}
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="text-lg mb-10 max-w-xl leading-relaxed animate-fade-in-up delay-200"
            style={{ color: "var(--text-secondary)" }}
          >
            {portfolioConfig.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up delay-300">
            <button
              onClick={() => handleScrollTo("#projects")}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: "var(--accent)",
                color: "white",
                boxShadow: "0 4px 20px var(--accent-glow)",
              }}
            >
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={() => handleScrollTo("#contact")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: "transparent",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLButtonElement).style.background = "var(--accent-glow)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              }}
            >
              <Sparkles size={16} />
              Contact Me
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 animate-fade-in-up delay-400">
            <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
              Follow
            </span>
            <div className="w-8 border-t" style={{ borderColor: "var(--text-muted)" }} />
            {[
              { href: portfolioConfig.social.github, Icon: GithubIcon, label: "GitHub" },
              { href: portfolioConfig.social.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
              { href: portfolioConfig.social.twitter, Icon: XIcon, label: "X / Twitter" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up delay-600"
        style={{ color: "var(--text-muted)" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div
          className="w-px h-8 rounded-full"
          style={{
            background: "linear-gradient(to bottom, var(--text-muted), transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
