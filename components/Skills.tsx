"use client";

import { portfolioConfig } from "@/config/portfolio";
import { Monitor, Server, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Monitor size={16} />,
  Backend: <Server size={16} />,
  "Tools & DevOps": <Wrench size={16} />,
};

const categoryColors: Record<string, string> = {
  Frontend: "var(--accent)",
  Backend: "var(--accent-2)",
  "Tools & DevOps": "var(--accent-3)",
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 80% 50%, rgba(124, 106, 245, 0.04) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-3 font-medium"
            style={{ color: "var(--accent)" }}
          >
            Technical Skills
          </p>
          <h2
            className="font-display text-4xl md:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            Tools I build
            <br />
            <span style={{ color: "var(--text-secondary)" }}>with every day</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {portfolioConfig.skills.map((group) => {
            const accentColor = categoryColors[group.category] || "var(--accent)";
            return (
              <div
                key={group.category}
                className="skill-card rounded-2xl p-6"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: `color-mix(in srgb, ${accentColor} 12%, transparent)`,
                      color: accentColor,
                      border: `1px solid color-mix(in srgb, ${accentColor} 25%, transparent)`,
                    }}
                  >
                    {categoryIcons[group.category] || <Monitor size={16} />}
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {group.category}
                    </h3>
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {group.items.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="tech-tag px-3 py-1.5 rounded-lg text-xs font-medium cursor-default"
                      style={{
                        background: "var(--bg-secondary)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom accent bar */}
                <div
                  className="mt-6 h-px"
                  style={{
                    background: `linear-gradient(to right, ${accentColor}, transparent)`,
                    opacity: 0.4,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Decorative element */}
        <div
          className="mt-16 flex items-center justify-center gap-4"
          style={{ color: "var(--text-muted)" }}
        >
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          <span className="text-xs tracking-widest uppercase">and always learning</span>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
