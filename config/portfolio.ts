// ============================================================
// PORTFOLIO CONFIGURATION
// Edit this file to customize all your personal information.
// ============================================================

export const portfolioConfig = {
  // --- Personal Info ---
  name: "Razaul Ibna Bari",
  shortName: "Ifty",
  role: "Full-Stack Developer",
  tagline: "I craft digital experiences that are fast, accessible, and beautiful.",
  bio: [
  "I'm a Full-Stack Web Developer and final-year Computer Science and Engineering student passionate about building modern, responsive, and user-friendly web applications. I enjoy transforming ideas into functional digital products by working across both front-end and back-end technologies.",
  "My experience includes developing websites and web applications using HTML, CSS, JavaScript, React, Node.js, Express.js, and databases such as MongoDB and MySQL. I focus on creating clean, efficient, and scalable solutions while continuously improving my skills in software development, system design, and modern web technologies.",
  "When I'm not coding, I enjoy exploring new technologies, contributing to personal projects, learning about cybersecurity, and expanding my technical knowledge through hands-on practice and continuous learning.",
   ],
  location: "Cumilla, Bangladesh",
  email: "razaulbari360@gmail.com",
  resumeUrl: "/resume.pdf",
  availableForWork: true,

  // --- Social Links ---
  social: {
    github: "https://github.com/johnwick34",
    linkedin: "https://www.linkedin.com/in/razaul-bari-939243402?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    twitter: "https://twitter.com/#",
  },

  // --- Skills ---
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GraphQL"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "Redis", "REST APIs", "Prisma"],
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Figma"],
    },
  ],

 // --- Projects ---
  projects: [
    {
      title: "Phishing Identification Site",
      description:
        "A cybersecurity web tool created to actively identify and flag phishing attempts across emails, malicious URLs, and SMS messages.",
      tags: ["Cybersecurity", "Web", "Phishing Detection"],
      image: null, // Replace with image path, e.g., "/projects/luminary.png"
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "Student Performance Data Analyzer",
      description:
        "A lab project focused on data mining and visualization, analyzing averages and plotting the correlation between student attendance and marks using CDF/PDF plotting.",
      tags: ["Python", "Pandas", "Seaborn", "Data Mining"],
      image: null,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "Medical Dataset Classification",
      description:
        "A data science and machine intelligence project utilizing Weka to classify, process, and analyze medical datasets.",
      tags: ["Weka", "Machine Learning", "Data Classification"],
      image: null,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "BPC Constitution & Operations",
      description:
        "Authored the official 22-article constitution and defined the chain of command for the BAIUST Photography Club, while coordinating major seminars and workshops.",
      tags: ["Leadership", "Management", "Event Organization"],
      image: null,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      title: "Unisex Streetwear Brand Identity",
      description:
        "Developed the core brand identity, conceptualized Korean and abstract phonetic naming conventions, and directed aesthetic styling for a modern streetwear label.",
      tags: ["Branding", "Fashion", "Design"],
      image: null,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      title: "MIET Conference Research",
      description:
        "Academic research, formatting, and preparation of a technical submission for the MIET 2026 conference.",
      tags: ["Research", "Academic Writing", "Machine Intelligence"],
      image: null,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
  ],

  // --- Navigation Links ---
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};

export type PortfolioConfig = typeof portfolioConfig;
