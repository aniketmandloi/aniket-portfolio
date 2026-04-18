export type SkillGroup = {
  label: string;
  items: string[];
};

export type Experience = {
  company: string;
  project?: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export type Project = {
  name: string;
  tagline: string;
  period: string;
  summary: string;
  stack: string[];
  image: string;
  link?: { label: string; href: string };
  featured?: boolean;
};

export const profile = {
  name: "Aniket Mandloi",
  role: "Software Engineer",
  locationLine: "Based in India · Working globally",
  issue: "VOL. 01 / ISSUE 04.2026",
  bio: [
    "A software engineer who builds across domains that rarely share a stack — decentralized exchanges, telemedicine, humanitarian field tooling, and enterprise AI verification.",
    "The through-line is the boring one: picking the right primitive, shipping on a schedule, and making the system legible to whoever has to maintain it next.",
  ],
  pullQuote:
    "I trade cleverness for clarity, and latency budgets for the one next to them.",
  contacts: {
    email: "aniketmandloi900@gmail.com",
    phone: "+91 78984 46115",
    phoneDigits: "+917898446115",
    linkedin: "https://www.linkedin.com/in/aniketmandloi",
    github: "https://github.com/aniketmandloi",
  },
  timezone: "Asia/Kolkata",
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "Python", "Go", "SQL", "JavaScript", "Java", "HTML/CSS", "C++"],
  },
  {
    label: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "React Native",
      "Express / Fastify",
      "Shadcn UI",
      "Material UI",
    ],
  },
  {
    label: "Platforms & Services",
    items: [
      "AWS",
      "GCP",
      "Vercel",
      "Supabase",
      "Neon",
      "Cloudflare",
      "Convex",
      "Stripe",
      "Docker",
      "Clerk",
      "Polar",
    ],
  },
  {
    label: "Databases & APIs",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "tRPC",
      "gRPC",
      "Protobufs",
      "Prisma",
      "Drizzle",
      "Typesense",
    ],
  },
  {
    label: "Core Concepts",
    items: [
      "Distributed Systems",
      "Scalability",
      "API Design",
      "Async & Sync Patterns",
      "Caching",
    ],
  },
];

export const experience: Experience[] = [
  {
    company: "Black Wallet LTD",
    project: "Avalon",
    role: "Software Engineer",
    period: "Nov 2023 — Present",
    location: "Remote, IN · HQ USA",
    highlights: [
      "Engineered a cryptocurrency DEX supporting multi-chain operations across Solana and Ethereum.",
      "Cut portfolio-aggregation query times by 50% via Prisma indexing and connection pooling — across 1,000+ token balances and transaction records.",
      "Owned the real-time swap quote engine end-to-end: sub-500ms responses via RTK Query caching, multi-chain swaps at 24×7 internet-scale throughput, 30-second refresh cycles.",
    ],
  },
  {
    company: "Cofiato",
    project: "2careAI",
    role: "Software Engineer",
    period: "Apr 2025 — Sep 2025",
    location: "Remote, IN",
    highlights: [
      "Led full-stack delivery of a telemedicine booking system with Google Calendar integration — serving 100+ medical POCs and 500+ patients monthly.",
      "Shipped an agentic clinical check-in powered by a multi-LLM orchestration layer (GPT-4, Claude, Gemini), routing tasks to the best model per context. Cut documentation time 50% for 500+ patients/month.",
      "Architected the OAuth 2.0 flow and automatic Meet link generation — 60% less manual scheduling overhead.",
    ],
  },
  {
    company: "Manabu Method",
    project: "NGO Field App",
    role: "Software Engineer (Hourly Contract)",
    period: "Apr 2024 — Present",
    location: "Remote, IN · HQ USA",
    highlights: [
      "Led an offline-first humanitarian data app — three user roles collecting and syncing location, needs, and media across regions. Unit-tested and CI/CD-delivered.",
      "Built a conflict-free asynchronous sync engine using distributed-systems patterns across 6 data models — 70% less data-entry time for field workers.",
      "Chose serverless AWS (Terraform, Lambda, API Gateway, RDS) over containers — 40% cost reduction for 1,000+ location records and 10GB+ media.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "HallGuard.AI",
    tagline: "Enterprise AI verification — hallucinations, compliance, factual errors.",
    period: "Mar 2026 — Present",
    summary:
      "A verification layer for AI output used in legal and financial workflows — with multi-tenant infrastructure, SSE-streamed verification, ephemeral document storage, and a benchmarking harness for measuring detection quality over time.",
    stack: [
      "TypeScript",
      "Next.js",
      "Express",
      "Monorepo",
      "SSE",
      "Multi-tenant",
      "Background jobs",
    ],
    image: "/project-hallguard.jpg",
    featured: true,
  },
  {
    name: "Avalon DEX",
    tagline: "Multi-chain swap engine across Solana and Ethereum.",
    period: "2023 — Present",
    summary:
      "Real-time quotes in under 500ms. Portfolio aggregation for 1,000+ token balances with carefully indexed Postgres and RTK Query caching.",
    stack: ["TypeScript", "Solana", "Ethereum", "Prisma", "Postgres", "RTK Query"],
    image: "/project-avalon.jpg",
  },
  {
    name: "2careAI",
    tagline: "Agentic clinical check-in with multi-LLM orchestration.",
    period: "2025",
    summary:
      "Telemedicine booking + AI intake routing between GPT-4, Claude, and Gemini. OAuth 2.0 + Google Meet generation served 500+ patients a month.",
    stack: ["Next.js", "OAuth 2.0", "GPT-4", "Claude", "Gemini", "Google Calendar"],
    image: "/project-2careai.jpg",
  },
  {
    name: "Manabu Field",
    tagline: "Offline-first humanitarian data collection.",
    period: "2024 — Present",
    summary:
      "A conflict-free sync engine across six data models for NGO field workers. Serverless AWS backend traded containerization for 40% cost savings.",
    stack: ["React Native", "AWS Lambda", "Terraform", "RDS", "API Gateway"],
    image: "/project-manabu.jpg",
  },
];

export const education = {
  school: "Prestige Institute of Engineering Management and Research",
  degree: "B.Tech, Mechanical Engineering",
  period: "Aug 2019 — May 2023",
  location: "Indore, India",
  courses: [
    "Data Structures & Algorithms",
    "Object Oriented Design",
    "Computer Architecture",
  ],
};
