"use client";

import { useState } from "react";
import { ExternalLink, ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { GithubIcon } from "@/components/SocialIcons";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const featured = portfolioConfig.projects.filter((p) => p.featured);
  const rest = portfolioConfig.projects.filter((p) => !p.featured);
  const visible = showAll ? portfolioConfig.projects : featured;

  const tagColors: Record<string, string> = {
    "Next.js": "#7c6af5",
    React: "#61dafb",
    TypeScript: "#3178c6",
    "Node.js": "#6ca35e",
    PostgreSQL: "#336791",
    Redis: "#dc382d",
    Docker: "#2496ed",
    AWS: "#ff9900",
    Go: "#00add8",
    WebGL: "#990000",
    Prisma: "#2d3748",
  };

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 20% 60%, rgba(52, 211, 153, 0.04) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-3 font-medium"
              style={{ color: "var(--accent)" }}
            >
              Selected Work
            </p>
            <h2
              className="font-display text-4xl md:text-5xl"
              style={{ color: "var(--text-primary)" }}
            >
              Things I've
              <br />
              <span style={{ color: "var(--text-secondary)" }}>built & shipped</span>
            </h2>
          </div>
          <p
            className="text-sm max-w-xs leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            A collection of projects ranging from side experiments to production applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project, index) => (
            <article
              key={project.title}
              className="project-card group rounded-2xl flex flex-col overflow-hidden"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                animationDelay: `${index * 60}ms`,
              }}
            >
              {/* Image area */}
              <div
                className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{
                  background: "var(--bg-secondary)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="flex flex-col items-center gap-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <ImageIcon size={28} />
                    <span className="text-xs">Project Screenshot</span>
                  </div>
                )}

                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: "rgba(12, 13, 16, 0.8)" }}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 hover:scale-105"
                    style={{ background: "var(--accent)", color: "white" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={12} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 hover:scale-105"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GithubIcon size={12} />
                    GitHub
                  </a>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div
                    className="absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-medium"
                    style={{
                      background: "rgba(124, 106, 245, 0.15)",
                      border: "1px solid rgba(124, 106, 245, 0.3)",
                      color: "var(--accent)",
                    }}
                  >
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3
                    className="font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 ml-2 transition-all duration-200 hover:scale-110"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")}
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs font-medium"
                      style={{
                        background: tagColors[tag]
                          ? `color-mix(in srgb, ${tagColors[tag]} 12%, transparent)`
                          : "var(--bg-secondary)",
                        color: tagColors[tag] || "var(--text-muted)",
                        border: `1px solid ${tagColors[tag]
                          ? `color-mix(in srgb, ${tagColors[tag]} 20%, transparent)`
                          : "var(--border)"}`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Show more / less toggle */}
        {rest.length > 0 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
              }}
            >
              {showAll ? `Show Less` : `View All Projects (${rest.length} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
