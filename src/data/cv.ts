export type Link = {
  label: string;
  href: string;
  icon: string;
};

export enum SkillIcon {
  Ai = "ri-robot-2-line",
  Backend = "ri-server-line",
  Data = "ri-database-2-line",
  DevOps = "ri-cloud-line",
  Engineering = "ri-tools-line",
  English = "ri-chat-voice-line",
  Frontend = "ri-layout-4-line",
  Leadership = "ri-team-line",
  Messaging = "ri-exchange-2-line",
  Process = "ri-git-branch-line",
  Web3 = "ri-coin-line",
}

export type SkillGroup = {
  title: string;
  icon: SkillIcon;
  items: string[];
};

export type Metric = {
  label: string;
  value: string;
  note: string;
};

export type Role = {
  company: string;
  period: string;
  title: string;
  points: string[];
  tech: string[];
  metrics?: Metric[];
};

export type Project = {
  name: string;
  title: string;
  points: string[];
  tech: string[];
};

export type Award = {
  name: string;
  period: string;
};

export const profile = {
  name: "Nguyen Thai Bao",
  displayName: "Nguyễn Thái Bảo",
  handle: "0xj4m35",
  title: "Senior Full Stack Developer",
  location: "Hanoi, Vietnam",
  phone: "+84 35 375 4567",
  email: "baont35@gmail.com",
  github: "https://github.com/0xj4m35",
  cvHref: "/Nguyen-Thai-Bao-CV.pdf",
  intro:
    "I build reliable, scalable web products across frontend, backend, Web3, infrastructure, and AI-assisted engineering workflows.",
  objective:
    "Senior Full Stack Developer with 7+ years of experience building scalable, reliable, and maintainable web applications. Skilled in solving complex technical challenges and delivering high-quality solutions with real business impact. Continuously learning and staying current with emerging technologies, especially AI and modern software engineering practices. Seeking to leverage my experience and technical expertise to build impactful products and grow with a strong engineering team.",
};

export const publicLinks: Link[] = [
  {
    label: profile.email,
    href: `mailto:${profile.email}`,
    icon: "ri-mail-line",
  },
  {
    label: profile.github.replace("https://", ""),
    href: profile.github,
    icon: "ri-github-fill",
  },
  {
    label: profile.location,
    href: "https://www.google.com/maps/search/?api=1&query=Hanoi%2C%20Vietnam",
    icon: "ri-map-pin-line",
  },
];

export const navLinks = [
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    icon: SkillIcon.Frontend,
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "Jotai",
      "Context API",
      "Tailwind CSS",
      "Design Systems",
      "Performance optimization",
      "Scalable frontend architecture",
    ],
  },
  {
    title: "Backend",
    icon: SkillIcon.Backend,
    items: [
      "Node.js",
      "REST APIs",
      "GraphQL",
      "CronJobs",
      "Microservices",
      "Distributed systems",
    ],
  },
  {
    title: "Data Stores",
    icon: SkillIcon.Data,
    items: [
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
      "TimescaleDB",
      "Database design",
      "Query optimization",
    ],
  },
  {
    title: "Messaging",
    icon: SkillIcon.Messaging,
    items: ["Kafka", "RabbitMQ", "Event-driven architecture"],
  },
  {
    title: "Web3 / Cardano",
    icon: SkillIcon.Web3,
    items: [
      "Cardano ecosystem",
      "CIP-30 wallets",
      "Ledger integration",
      "DEX applications",
      "Trading applications",
      "On-chain/off-chain integration",
    ],
  },
  {
    title: "DevOps",
    icon: SkillIcon.DevOps,
    items: [
      "Docker",
      "CI/CD",
      "Bare-metal infrastructure",
      "Sentry",
      "Grafana",
      "Production monitoring",
      "Troubleshooting",
      "Performance optimization",
    ],
  },
  {
    title: "AI & Agents",
    icon: SkillIcon.Ai,
    items: ["Claude Code", "Codex", "MCP", "Agent skills"],
  },
  {
    title: "Engineering",
    icon: SkillIcon.Engineering,
    items: [
      "System design",
      "Scalable architecture",
      "Code review",
      "Debugging",
      "Testing",
      "Best practices",
    ],
  },
  {
    title: "Process",
    icon: SkillIcon.Process,
    items: ["Agile", "Scrum", "Jira", "Linear", "Git", "End-to-end delivery"],
  },
  {
    title: "Leadership",
    icon: SkillIcon.Leadership,
    items: [
      "Frontend leadership",
      "Technical decisions",
      "Mentoring",
      "Code reviews",
    ],
  },
  {
    title: "English",
    icon: SkillIcon.English,
    items: ["Working proficiency"],
  },
];

export const minswapMetrics: Metric[] = [
  {
    label: "Active traders",
    value: "262K+",
    note: "served by Cardano DEX platforms",
  },
  {
    label: "Successful trades",
    value: "6.4M+",
    note: "processed through production flows",
  },
  {
    label: "Trading volume",
    value: "10B+ ₳",
    note: "supported across high-volume DeFi workloads",
  },
  {
    label: "Bundle size",
    value: "50%",
    note: "reduction from architecture and flow optimization",
  },
  {
    label: "Build time",
    value: "7.5x",
    note: "reduced from 5 minutes to 40 seconds",
  },
];

export const roles: Role[] = [
  {
    company: "Minswap",
    period: "Dec 2021 - Jul 2026",
    title: "Senior Full Stack Developer / Front-end Lead",
    metrics: minswapMetrics,
    points: [
      "Led frontend engineering for one of Cardano's largest DEX platforms, serving 262K+ active traders, 6.4M+ successful trades, and 10B+ ADA in trading volume.",
      "Built the Minswap frontend application from scratch, establishing the initial architecture, core trading flows, and reusable frontend foundations.",
      "Architected and developed the core trading interface using Next.js, React.js, Jotai, Context API, and Tailwind CSS, with a focus on performance, scalability, and maintainability.",
      "Built advanced trading experiences including TradingView charts, trading terminal platform, Ledger hardware wallet, and CIP-30 wallet integrations.",
      "Designed reusable Trading Widget libraries and SDKs, enabling partners to embed Minswap trading functionality directly into their own sites.",
      "Contributed across the full stack, building and optimizing backend services, GraphQL, RESTful API, PostgreSQL, and CronJobs for high-volume DeFi workloads.",
      "Led the Frontend team while actively contributing to backend architecture, technical decisions, code reviews, and cross-team delivery.",
      "Managed bare-metal infrastructure, containerized applications with Docker, maintained CI/CD pipelines, and monitored production health with Sentry.",
      "Optimized application architecture and critical user flows, achieving a 50% reduction in bundle size and reducing build time from 5 minutes to 40 seconds.",
      "Leveraged Claude Code, Codex, agent skills, and MCP integrations to streamline development workflows and improve engineering productivity.",
    ],
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Jotai",
      "Tailwind CSS",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "Node.js",
      "TradingView",
      "Cardano/CIP-30",
      "Ledger",
      "Sentry",
      "Bare-metal Infrastructure",
      "Docker",
      "CI/CD",
      "Claude Code",
      "Codex",
    ],
  },
  {
    company: "One Mount Group",
    period: "Jun 2021 - Nov 2021",
    title: "Front-end Developer",
    points: [
      "Developed key e-commerce applications, including Merchant Ops and B2B2C platforms.",
      "Designed scalable, maintainable solutions and integrated complex internal and external services.",
      "Drove code quality, performance optimization, technical decisions, and engineering best practices.",
      "Collaborated with Product, Design, QA, and engineering teams to deliver high-quality features.",
    ],
    tech: ["React.js", "Next.js", "TypeScript"],
  },
  {
    company: "Teko Vietnam",
    period: "Oct 2020 - May 2021",
    title: "Front-end Developer",
    points: [
      "Built reusable UI components and a shared library based on Teko's Design System.",
      "Developed features for large e-commerce products including Phong Vu and VnShop.",
      "Integrated VnShop payments with 20 banking partners.",
      "Improved application performance, UX, and code maintainability.",
    ],
    tech: ["React.js", "Next.js", "JavaScript", "TypeScript"],
  },
  {
    company: "BraveBits Company",
    period: "Oct 2018 - Sep 2020",
    title: "Intern & Front-end Developer",
    points: [
      "Developed core features for PageFly, a popular Shopify page builder.",
      "Built drag-and-drop functionality and reusable page-building components.",
      "Improved editor performance and integrated third-party Shopify applications.",
      "Contributed across frontend and backend development.",
    ],
    tech: ["React.js", "JavaScript", "Node.js", "Shopify"],
  },
];

export const projects: Project[] = [
  {
    name: "CloudBook",
    title: "E-Learning Platform - Front-end Lead",
    points: [
      "Designed and developed an interactive e-learning platform for creating and reading digital books.",
      "Built a drag-and-drop book editor supporting interactive elements such as exercises, videos, and audio.",
      "Took ownership of core application functionality and delivered interactive book-reading experiences.",
      "Implemented an activation-code system for controlling user access to published books.",
    ],
    tech: ["React.js", "Java Spring Boot", "AWS"],
  },
  {
    name: "FPT Education Recruitment System",
    title: "Full Stack Developer",
    points: [
      "Developed a recruitment management system for FPT Education HR as a university capstone project.",
      "Worked directly with HR stakeholders to gather and translate business requirements into technical solutions.",
      "Designed the system architecture and application structure from requirements through implementation.",
      "Built and maintained the application with a focus on clean, maintainable code and usability.",
    ],
    tech: ["ASP.NET", "JavaScript", "HTML", "CSS"],
  },
];

export const education = {
  school: "FPT University",
  period: "2016 - 2020",
  major: "Software Engineering",
  gpa: "8.2/10",
};

export const awards: Award[] = [
  {
    name: "First Prize in IBM track of AngelHack Hackathon 2019",
    period: "2019",
  },
  {
    name: "First Prize in Algorithm Competition in province",
    period: "2016",
  },
  {
    name: "Participant in National Algorithm Competition",
    period: "2016",
  },
  {
    name: "Honorable Student in FPT University",
    period: "2016 - 2020",
  },
];
