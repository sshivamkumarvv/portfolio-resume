export interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "database" | "ai_llm" | "ai_tools" | "devops";
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  points: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  technologies: string[];
  description: string;
  highlights: string[];
  metrics?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  note?: string;
}

export function getResumePdfUrl(): string {
  if (typeof window !== "undefined") {
    if (window.location.pathname.startsWith("/portfolio-resume")) {
      return "/portfolio-resume/Shivam_Kumar_Resume.pdf";
    }
    const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
    if (envBasePath && envBasePath.length > 0) {
      return `${envBasePath}/Shivam_Kumar_Resume.pdf`;
    }
    return "/Shivam_Kumar_Resume.pdf";
  }
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ??
    (process.env.GITHUB_ACTIONS === "true" ? "/portfolio-resume" : "");
  return `${basePath}/Shivam_Kumar_Resume.pdf`;
}

const defaultBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.GITHUB_ACTIONS === "true" ? "/portfolio-resume" : "");
export const RESUME_PDF_URL = `${defaultBasePath}/Shivam_Kumar_Resume.pdf`;

export const RESUME_DATA = {
  personal: {
    name: "Shivam Kumar",
    title: "Full Stack Developer",
    subtitle: "React.js • Next.js • TypeScript • NestJS • AI & LLM Integration",
    phone: "+91 8198978095",
    phoneDisplay: "+91 8198978095",
    email: "shivamgcs9@gmail.com",
    pdfUrl: RESUME_PDF_URL,
    location: "Gurugram / Noida, India",
    linkedin: "https://linkedin.com/in/sshivamkumarvv",
    linkedinDisplay: "linkedin.com/in/sshivamkumarvv",
    github: "https://github.com/sshivamkumarvv",
    githubDisplay: "github.com/sshivamkumarvv",
    summary:
      "Full Stack Developer with 4 years of experience designing and developing scalable web applications using React.js, Next.js, TypeScript, NestJS, Node.js, and modern databases. Skilled in building responsive user interfaces, high-performance SSR/CSR architectures, RESTful APIs, authentication and authorization systems (JWT, RBAC), and database-driven applications. Experienced in developing enterprise applications, admin dashboards, CMS platforms, and logistics management systems with a strong focus on performance, security, scalability, and user experience. Proficient in modern frontend architecture, AI-assisted development (LLMs, Cursor, Copilot), and cross-functional Agile collaboration to deliver high-impact software solutions.",
    stats: [
      { label: "Years Experience", value: "4+" },
      { label: "Production Platforms", value: "10+" },
      { label: "Code Quality & Uptime", value: "99.9%" },
      { label: "Core Stacks", value: "Full Stack & AI" },
    ],
  },

  skillsCategories: [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "ai_llm", label: "AI & LLM" },
    { id: "ai_tools", label: "AI & Dev Tools" },
    { id: "devops", label: "DevOps & Tools" },
  ] as const,

  skills: [
    // Frontend
    { name: "React.js", category: "frontend", highlight: true },
    { name: "Next.js", category: "frontend", highlight: true },
    { name: "TypeScript", category: "frontend", highlight: true },
    { name: "JavaScript (ES6+)", category: "frontend", highlight: true },
    { name: "React Native", category: "frontend", highlight: true },
    { name: "Redux Toolkit", category: "frontend", highlight: true },
    { name: "Zustand", category: "frontend" },
    { name: "React Query", category: "frontend", highlight: true },
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend", highlight: true },
    { name: "Material UI", category: "frontend" },
    { name: "Shadcn/UI", category: "frontend", highlight: true },

    // Backend
    { name: "Node.js", category: "backend", highlight: true },
    { name: "NestJS", category: "backend", highlight: true },
    { name: "Python", category: "backend", highlight: true },
    { name: "FastAPI", category: "backend", highlight: true },
    { name: "REST APIs", category: "backend", highlight: true },
    { name: "TypeORM", category: "backend" },
    { name: "JWT Authentication", category: "backend", highlight: true },
    { name: "RBAC", category: "backend", highlight: true },

    // Database
    { name: "PostgreSQL", category: "database", highlight: true },
    { name: "MySQL", category: "database", highlight: true },
    { name: "MongoDB", category: "database", highlight: true },

    // AI & LLM
    { name: "LLM API Integration", category: "ai_llm", highlight: true },
    { name: "Generative AI", category: "ai_llm", highlight: true },
    { name: "Prompt Engineering", category: "ai_llm", highlight: true },
    { name: "AI Application Development", category: "ai_llm", highlight: true },
    { name: "OpenAI", category: "ai_llm", highlight: true },
    { name: "Google Gemini", category: "ai_llm", highlight: true },
    { name: "Claude", category: "ai_llm", highlight: true },
    { name: "AI-assisted Development", category: "ai_llm", highlight: true },

    // AI / Developer Tools
    { name: "OpenAI Codex", category: "ai_tools" },
    { name: "Cursor AI", category: "ai_tools", highlight: true },
    { name: "ChatGPT", category: "ai_tools" },
    { name: "Claude", category: "ai_tools" },
    { name: "GitHub Copilot", category: "ai_tools", highlight: true },

    // DevOps & Tools
    { name: "Git", category: "devops", highlight: true },
    { name: "GitHub", category: "devops", highlight: true },
    { name: "GitHub Actions", category: "devops", highlight: true },
    { name: "Docker", category: "devops", highlight: true },
    { name: "Postman", category: "devops" },
    { name: "Swagger", category: "devops" },
    { name: "Firebase", category: "devops" },
    { name: "Figma", category: "devops" },
    { name: "CI/CD", category: "devops", highlight: true },
  ] as SkillItem[],

  experiences: [
    {
      id: "infox",
      role: "Software Developer (React Developer)",
      company: "Infox Software Technology Pvt. Ltd.",
      location: "Gurugram, India",
      period: "April 2026 – Present",
      isCurrent: true,
      points: [
        "Designed and developed a scalable Admin Panel from scratch using React.js, TypeScript, Redux Toolkit, and Tailwind CSS.",
        "Developed responsive dashboards, high-volume data tables, advanced forms, dynamic filters, and operational management modules for logistics operations and shipment tracking.",
        "Implemented centralized state management using Redux Toolkit, improving data consistency, predictability, and frontend maintainability.",
        "Integrated RESTful APIs from ASP.NET backend services with robust data caching, validation schemas, and resilient error recovery.",
        "Built modular UI components and reusable frontend architecture to accelerate feature delivery cycles and eliminate design debt.",
        "Optimized application performance, asset bundles, and layout responsiveness across modern web browsers and mobile screen factors.",
        "Collaborated with cross-functional engineering teams in Agile/Scrum environments to deliver high-quality production releases on schedule.",
      ],
      technologies: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "ASP.NET REST APIs", "Logistics Systems"],
    },
    {
      id: "harij",
      role: "Software Developer (FullStack Developer)",
      company: "Harij Softech Solutions",
      location: "Gurugram, India",
      period: "July 2024 – December 2025",
      points: [
        "Developed scalable and high-performance Next.js applications with a relentless focus on pixel-perfect UI and intuitive user experience.",
        "Implemented hybrid Server-Side Rendering (SSR) and Client-Side Rendering (CSR) architectures to optimize Core Web Vitals, initial load times, and SEO ranking.",
        "Architected frontend integration with NestJS REST APIs and asynchronous backend microservices.",
        "Implemented enterprise-level JWT authentication and Role-Based Access Control (RBAC) security guards across multi-tier user permissions.",
        "Collaborated closely with product managers and backend engineers in Agile sprints to ship end-to-end features.",
        "Conducted thorough peer code reviews, frontend debugging, unit testing, and memory optimization.",
      ],
      technologies: ["Next.js", "NestJS", "TypeScript", "REST APIs", "JWT", "RBAC", "Tailwind CSS", "MySQL"],
    },
    {
      id: "agicent",
      role: "Software Developer (React / React Native / Next.js)",
      company: "Agicent App Development Technology",
      location: "Noida, India",
      period: "December 2022 – July 2024",
      points: [
        "Built responsive, visually rich web and mobile applications using React, Next.js, and React Native (Expo).",
        "Developed reusable design systems, optimized virtualized list rendering, and elevated touch responsiveness for mobile devices.",
        "Integrated complex RESTful APIs and managed cross-platform state synchronization seamlessly.",
        "Resolved critical production issues, optimized runtime memory usage, and supported release cycles across App Store and Play Store.",
        "Worked in close synergy with backend teams to enforce robust data schemas and contract integrity.",
      ],
      technologies: ["React Native", "Expo", "Next.js", "React.js", "JavaScript (ES6+)", "REST APIs", "Redux"],
    },
    {
      id: "airygod",
      role: "Software Developer (React Developer)",
      company: "Airygod IT",
      location: "India",
      period: "June 2022 – November 2022",
      points: [
        "Engineered reusable and responsive UI components using React.js and modern CSS.",
        "Integrated REST APIs, streamlined JSON data parsing, and implemented smooth loading skeletons and error boundaries.",
        "Actively participated in sprint planning, testing, bug fixes, and continuous UI/UX enhancements.",
      ],
      technologies: ["React.js", "JavaScript", "HTML5/CSS3", "REST APIs", "Git"],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "shipez",
      title: "Shipez – Digital Logistics & Fleet Management",
      subtitle: "Enterprise Logistics & Real-Time Tracking Suite",
      role: "React Developer",
      technologies: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "ASP.NET", "Python"],
      description:
        "An enterprise-scale logistics management platform designed for end-to-end shipment lifecycle tracking, carrier status monitoring, fleet metrics, and operational record management.",
      highlights: [
        "Architected and deployed a high-performance Admin Panel from scratch using React.js, TypeScript, and Redux Toolkit.",
        "Created reusable UI dashboards, virtualized data tables, advanced filter builders, and shipment tracking timelines.",
        "Implemented centralized state management with Redux Toolkit for zero-latency UI synchronizations.",
        "Consumed RESTful APIs from ASP.NET services with resilient data validation and instant state updates.",
      ],
      metrics: "Logistics Operations & Real-Time Dispatch",
    },
    {
      id: "signfeed",
      title: "Signfeed – Cloud Digital Signage CMS",
      subtitle: "Multi-Screen Broadcast & Display Management Engine",
      role: "Full-Stack Developer",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "NestJS", "MySQL", "RBAC", "React Native"],
      description:
        "A comprehensive cloud CMS platform built to schedule, orchestrate, and broadcast interactive digital signage campaigns across Android devices, commercial displays, and TV networks.",
      highlights: [
        "Engineered full frontend architecture with Next.js utilizing SSR for fast boot and CSR for dynamic canvas operations.",
        "Constructed a custom visual canvas editor featuring drag-and-drop, real-time widget resizing, rotation, and positioning using React-RND.",
        "Designed and implemented NestJS backend with JWT auth, guards, granular RBAC, and MySQL relational schemas.",
        "Enabled multi-device synchronizations across Android displays and React Native companion apps.",
      ],
      metrics: "Cross-Device TV & Android Display CMS",
    },
    {
      id: "haldiram",
      title: "Haldiram – FSSAI Document Compliance Portal",
      subtitle: "Automated Enterprise Regulatory Compliance & Document Audit",
      role: "Full-Stack Developer",
      technologies: ["Next.js", "NestJS", "MySQL", "TypeScript", "Tailwind CSS"],
      description:
        "A secure compliance and regulatory document management system designed to handle statutory FSSAI food certification records with automated versioning and strict verification flows.",
      highlights: [
        "Built a full-stack admin portal to manage and audit FSSAI compliance documents with role-restricted permissions.",
        "Engineered automated version lifecycle logic: manages latest 5 revisions with strictly one document publicly certified at any time.",
        "Automated instant deprecation of previous document revisions upon verified release of newly published compliance PDFs.",
        "Architected relational MySQL schema with audit logging and public verification portal.",
      ],
      metrics: "Enterprise Compliance & Version Control",
    },
  ] as ProjectItem[],

  education: [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science",
      institution: "Sant Longowal Institute of Engineering & Technology",
      location: "Sangrur, Punjab (Ministry of Education)",
      year: "2022",
      note: "Specialized in Software Engineering, Data Structures, Web Technologies & Distributed Systems",
    },
  ] as EducationItem[],
};
