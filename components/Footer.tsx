"use client";

import { Heart } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { Icon: GithubIcon, href: portfolioConfig.social.github, label: "GitHub" },
    { Icon: LinkedinIcon, href: portfolioConfig.social.linkedin, label: "LinkedIn" },
    { Icon: XIcon, href: portfolioConfig.social.twitter, label: "X / Twitter" },
  ];

  return (
    <footer
      className="py-10 relative"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px pointer-events-none"
        style={{
          background: "linear-gradient(to right, transparent, var(--accent), transparent)",
          opacity: 0.4,
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
              style={{ background: "var(--accent)" }}
            >
              {portfolioConfig.shortName}
            </span>
            <div>
              <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                {portfolioConfig.name}
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                {portfolioConfig.role}
              </p>
            </div>
          </div>

          <p
            className="text-xs text-center flex items-center gap-1"
            style={{ color: "var(--text-muted)" }}
          >
            © {year} {portfolioConfig.name}. Built with{" "}
            <Heart size={11} style={{ color: "var(--accent)", display: "inline" }} fill="currentColor" />
            {" "}using Next.js &amp; Tailwind.
          </p>

          <div className="flex items-center gap-2">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  color: "var(--text-muted)",
                  border: "1px solid transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "transparent";
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
