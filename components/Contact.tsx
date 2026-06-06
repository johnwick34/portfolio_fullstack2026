"use client";

import { useState, FormEvent } from "react";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/SocialIcons";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submit — wire up your own form handler (e.g., Resend, Formspree) here
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioConfig.email,
      href: `mailto:${portfolioConfig.email}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: portfolioConfig.location,
      href: null,
    },
  ];

  const socials = [
    { Icon: GithubIcon, href: portfolioConfig.social.github, label: "GitHub" },
    { Icon: LinkedinIcon, href: portfolioConfig.social.linkedin, label: "LinkedIn" },
    { Icon: XIcon, href: portfolioConfig.social.twitter, label: "X / Twitter" },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
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
            Contact
          </p>
          <h2
            className="font-display text-4xl md:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            Let&apos;s build something
            <br />
            <span style={{ color: "var(--text-secondary)" }}>great together</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-8">
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Whether you have a project in mind, want to collaborate, or just want to say hi —
              my inbox is always open. I&apos;ll try my best to get back to you!
            </p>

            <div className="space-y-4">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      color: "var(--accent)",
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium transition-colors duration-150"
                        style={{ color: "var(--text-primary)" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)")}
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs mb-4 tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                Find me online
              </p>
              <div className="flex gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 hover:scale-110"
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

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(52, 211, 153, 0.1)", color: "var(--accent-2)" }}
                  >
                    <CheckCircle size={32} />
                  </div>
                  <h3
                    className="font-display text-2xl mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Message sent!
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Thanks for reaching out. I&apos;ll get back to you within 24–48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", message: "" });
                    }}
                    className="mt-6 text-xs underline underline-offset-2 transition-colors"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium mb-1.5 tracking-wide"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="form-input w-full px-4 py-2.5 rounded-xl text-sm"
                        style={{
                          background: "var(--bg-secondary)",
                          border: "1px solid var(--border)",
                          color: "var(--text-primary)",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium mb-1.5 tracking-wide"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="form-input w-full px-4 py-2.5 rounded-xl text-sm"
                        style={{
                          background: "var(--bg-secondary)",
                          border: "1px solid var(--border)",
                          color: "var(--text-primary)",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium mb-1.5 tracking-wide"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Hi Alex, I'd love to talk about..."
                      className="form-input w-full px-4 py-2.5 rounded-xl text-sm resize-none"
                      style={{
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background: loading ? "var(--bg-secondary)" : "var(--accent)",
                      color: "white",
                      boxShadow: loading ? "none" : "0 4px 20px var(--accent-glow)",
                    }}
                  >
                    {loading ? (
                      <>
                        <div
                          className="w-4 h-4 rounded-full border-2 border-transparent"
                          style={{
                            borderTopColor: "white",
                            animation: "spin-slow 0.8s linear infinite",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
