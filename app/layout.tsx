import type { Metadata } from "next";
import "./globals.css";
import { portfolioConfig } from "@/config/portfolio";

export const metadata: Metadata = {
  title: `${portfolioConfig.name} — ${portfolioConfig.role}`,
  description: portfolioConfig.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
