export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
] as const;

export const profileData = {
  name: "Aniket Mandloi",
  role: "Software Engineer",
  headline:
    "I build resilient full-stack systems where scale, correctness, and delivery speed all matter.",
  summary:
    "Full-stack engineer with 2+ years of experience shipping backend-heavy platforms, offline-capable mobile workflows, and multi-tenant SaaS architecture.",
  location: "Indore, India",
  education: {
    school: "Prestige Institute of Engineering Management and Research",
    degree: "Bachelor of Technology in Mechanical Engineering",
    duration: "Aug 2019 - May 2023",
  },
} as const;

export const contactData = {
  email: "aniketmandloi900@gmail.com",
  phone: "+91-78984-46115",
  linkedin: "https://www.linkedin.com/in/aniketmandloi/",
  github: "https://github.com/aniketmandloi",
  portfolio: "https://aniket-mandloi-portfolio.vercel.app/",
  resumePath: "/AniketMandloi.pdf",
} as const;

export const introStats = [
  {
    label: "Experience",
    value: "2+ years",
    detail: "Backend and product engineering",
  },
  {
    label: "Bandwidth reduction",
    value: "80%",
    detail: "Offline-first NGO sync optimization",
  },
  {
    label: "Latency",
    value: "<500ms",
    detail: "Optimized serverless API paths",
  },
  {
    label: "Domains",
    value: "Fintech · Healthcare · NGO · SaaS",
    detail: "Production experience across multiple sectors",
  },
] as const;

export const aboutParagraphs = [
  "I transitioned from Mechanical Engineering into software to build systems that hold up under real production constraints, not demo assumptions.",
  "My recent work spans multi-chain wallet infrastructure, healthcare workflows, and offline-first mobile products, with a focus on integrity, reliability, and maintainability.",
] as const;

export const operatingPrinciples = [
  "Define contracts and invariants before implementation.",
  "Use transactions and strict validation for data integrity.",
  "Design for unreliable networks and constrained environments.",
  "Instrument critical paths with logs, metrics, and alerts.",
] as const;

export const technicalSkills = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "Go", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Frameworks",
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "React Native",
      "Express.js",
      "Fastify.js",
      "ShadcnUI",
      "MaterialUI",
    ],
  },
  {
    category: "Platforms & Services",
    items: [
      "AWS",
      "GCP",
      "Vercel",
      "Supabase",
      "Neon",
      "Cloudflare",
      "Convex",
      "Stripe",
      "Git",
      "Docker",
      "Clerk",
      "Polar",
    ],
  },
  {
    category: "Databases & APIs",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "tRPC",
      "gRPC",
      "Protobuf",
      "Prisma",
      "Drizzle",
      "Typesense",
    ],
  },
  {
    category: "Core Concepts",
    items: [
      "Data Structures and Algorithms",
      "Distributed Systems",
      "API Design",
      "Caching",
      "Scalability",
      "Consistency",
      "RBAC",
    ],
  },
] as const;

export const experiencesData = [
  {
    role: "Software Engineer",
    company: "Black Wallet LTD",
    project: "Avalon Project",
    location: "Remote, IN (HQ - USA)",
    period: "Nov 2023 - Present",
    highlights: [
      "Owned end-to-end backend for a multi-chain DEX (TypeScript/Fastify), enforcing schema-validated auth and wallet/token flows with hardened session management (JWT, HttpOnly cookies).",
      "Designed PostgreSQL/Prisma data models with DB-enforced invariants and big-number-safe accounting to prevent duplicate transaction state and balance drift.",
      "Built a cross-platform client (React Native/Expo) that maintains consistent portfolio and transaction state across flaky networks using cached flows, polling, and persisted wallet sessions.",
    ],
    stack: ["TypeScript", "Fastify", "PostgreSQL", "Prisma", "React Native"],
  },
  {
    role: "Software Engineer",
    company: "Cofiato",
    project: "2careAI Project",
    location: "Remote, IN (HQ - IN)",
    period: "Apr 2025 - Sep 2025",
    highlights: [
      "Engineered end-to-end patient check-in and prescription workflows, enforcing atomic database transactions and strict validation to eliminate partial or invalid clinical state.",
      "Built secure integrations handling OAuth token lifecycles, webhook ingestion, and presigned file uploads with strict validation and test coverage for high-risk edge cases.",
    ],
    stack: ["TypeScript", "Node.js", "OAuth", "Webhooks", "Testing"],
  },
  {
    role: "Software Engineer",
    company: "Manabu Method",
    project: "NGO Project (Hourly Contract)",
    location: "Remote, IN (HQ - USA)",
    period: "Apr 2024 - Present",
    highlights: [
      "Engineered an offline-first mobile app with a serverless backend, reducing sync bandwidth by 80% via timestamp-based differential updates for low-connectivity field environments.",
      "Achieved sub-500ms API latency by optimizing Lambda connection pooling, edge caching, and proactive observability.",
      "Designed and enforced a 3-tier RBAC system with ownership verification to eliminate cross-tenant data exposure risk.",
    ],
    stack: ["React Native", "AWS Lambda", "Caching", "RBAC", "Observability"],
  },
  {
    role: "Software Engineer Intern",
    company: "BitCot Technologies",
    project: "Python Team",
    location: "Indore, IN (HQ - USA)",
    period: "Jul 2023 - Aug 2023",
    highlights: [
      "Developed an AI chatbot integrating OpenAI/LangChain with FastAPI, implementing S3-based persistence for conversation continuity.",
    ],
    stack: ["Python", "FastAPI", "OpenAI", "LangChain", "S3"],
  },
] as const;

export const projectsData = [
  {
    title: "Clear-to-Hire",
    label: "SaaS Product",
    description:
      "Designed and operationalized IaC and CI/CD for a full-stack monorepo, enabling reproducible environments and safe automated deployments.",
    impact: [
      "Built a contract-first backend using Protobuf and gRPC.",
      "Shared schemas across Go and TypeScript clients for integration safety and consistent workflows across web and mobile.",
    ],
    tags: ["Go", "TypeScript", "gRPC", "Protobuf", "Docker", "CI/CD"],
  },
  {
    title: "Field-Intel",
    label: "SaaS Product",
    description:
      "Engineered a multi-tenant, cross-platform SaaS foundation with end-to-end type safety, shared contracts, RBAC, and integrated billing.",
    impact: [
      "Designed an event-driven workflow engine for transcription, AI processing, CRM sync, and notifications using queued execution.",
      "Added retries, observability, and analytics across asynchronous pipelines.",
    ],
    tags: [
      "TypeScript",
      "Next.js",
      "React Native",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Clerk",
    ],
  },
] as const;
