"use client";

import React, { useState, useEffect } from "react";
import {
  Printer,
  Check,
  ArrowLeft,
  Share2,
  Download,
  ExternalLink,
  FileText,
  Eye,
  Smartphone,
} from "lucide-react";
import { RESUME_DATA, RESUME_PDF_URL, getResumePdfUrl } from "@/data/resume-data";

interface SimpleResumeViewProps {
  onSwitchToPortfolio: () => void;
  onPrint: () => void;
}

export function SimpleResumeView({
  onSwitchToPortfolio,
  onPrint,
}: SimpleResumeViewProps) {
  const [copied, setCopied] = useState(false);
  const [displayMode, setDisplayMode] = useState<"embedded" | "web">("embedded");
  const [pdfUrl, setPdfUrl] = useState<string>(RESUME_PDF_URL);

  useEffect(() => {
    setPdfUrl(getResumePdfUrl());
  }, []);

  const copyPageLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const skillsList = [
    {
      title: "Frontend",
      skills:
        "React.js, Next.js, TypeScript, JavaScript (ES6+), React Native, Redux Toolkit, Zustand, React Query, HTML5, CSS3, Tailwind CSS, Material UI, Shadcn/UI",
    },
    {
      title: "Backend",
      skills:
        "Node.js, NestJS, Python, FastAPI, REST APIs, TypeORM, JWT Authentication, RBAC",
    },
    {
      title: "Database",
      skills: "PostgreSQL, MySQL, MongoDB",
    },
    {
      title: "AI & LLM",
      skills:
        "LLM API Integration, Generative AI, Prompt Engineering, AI Application Development, OpenAI, Google Gemini, Claude, AI-assisted Development",
    },
    {
      title: "AI / Developer Tools",
      skills: "OpenAI Codex, Cursor AI, ChatGPT, Claude, GitHub Copilot",
    },
    {
      title: "DevOps & Tools",
      skills:
        "Git, GitHub, GitHub Actions, Docker, Postman, Swagger, Firebase, Figma, CI/CD",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1e232d] text-slate-100 flex flex-col print:bg-white print:text-black">
      {/* =========================================================================
          TOP PDF VIEWER TOOLBAR
          ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#161a22]/95 backdrop-blur-md border-b border-slate-700/80 px-3 py-2 sm:px-6 no-print shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          {/* Top Row on mobile: Back Button + Doc Title + PDF Download */}
          <div className="flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={onSwitchToPortfolio}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 transition-colors shrink-0"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span>Portfolio</span>
            </button>

            <span className="text-[11px] xs:text-xs font-medium text-slate-300 truncate max-w-[130px] xs:max-w-xs">
              Shivam_Kumar_Resume.pdf
            </span>

            {/* Mobile Actions: Share & Native PDF Open */}
            <div className="flex sm:hidden items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={copyPageLink}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                title="Share Resume Link"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Share2 className="w-4 h-4" />
                )}
              </button>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold shadow-md shadow-sky-500/25 transition-all"
                title="Open in Native PDF Viewer"
              >
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                <span>Open PDF</span>
              </a>
            </div>
          </div>

          {/* Bottom Row on mobile / Right Side on Desktop: View Mode + Actions */}
          <div className="flex items-center justify-between sm:justify-end gap-2 border-t border-slate-800/80 pt-1.5 sm:border-none sm:pt-0">
            {/* View Mode Switcher: Embedded PDF vs Web Document */}
            <div className="flex items-center bg-slate-800/90 border border-slate-700 rounded-lg p-0.5 text-xs text-slate-300">
              <button
                type="button"
                onClick={() => setDisplayMode("embedded")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                  displayMode === "embedded"
                    ? "bg-sky-600 text-white shadow-xs"
                    : "hover:text-white text-slate-400"
                }`}
              >
                <Eye className="w-3.5 h-3.5 shrink-0" />
                <span>Embedded PDF</span>
              </button>
              <button
                type="button"
                onClick={() => setDisplayMode("web")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                  displayMode === "web"
                    ? "bg-sky-600 text-white shadow-xs"
                    : "hover:text-white text-slate-400"
                }`}
              >
                <FileText className="w-3.5 h-3.5 shrink-0" />
                <span>Web View</span>
              </button>
            </div>

            {/* Desktop Action Buttons: Share, Open in Tab, Download */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={copyPageLink}
                className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition-colors"
                title="Copy Resume Link"
              >
                {copied ? (
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Check className="w-4 h-4" /> Copied!
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Share2 className="w-4 h-4" /> Share
                  </span>
                )}
              </button>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition-colors"
                title="Open in Full Native Window"
              >
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                <span>Open in Tab</span>
              </a>

              <a
                href={pdfUrl}
                download="Shivam_Kumar_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-sky-500/25 transition-all shrink-0"
                title="Download Original PDF"
              >
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          MAIN VIEWER AREA
          ========================================================================= */}
      <main className="flex-1 w-full flex flex-col items-center">
        {displayMode === "embedded" ? (
          /* =====================================================================
             EMBEDDED NATIVE PDF VIEWER
             ===================================================================== */
          <div className="w-full flex-1 flex flex-col items-center max-w-6xl px-2 sm:px-4 py-3 sm:py-6 h-[calc(100vh-65px)]">
            {/* Mobile Helper Callout */}
            <div className="sm:hidden w-full mb-2 p-2 rounded-lg bg-slate-800/90 border border-slate-700/80 flex items-center justify-between text-xs text-slate-300">
              <span className="truncate mr-2">📱 For fullscreen native zoom:</span>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 font-semibold underline shrink-0"
              >
                Open in Fullscreen
              </a>
            </div>

            {/* Embedded PDF Frame */}
            <div className="w-full flex-1 rounded-xl overflow-hidden shadow-2xl border border-slate-700/60 bg-white">
              <object
                data={`${pdfUrl}#view=FitH`}
                type="application/pdf"
                className="w-full h-full min-h-[75vh]"
              >
                {/* Fallback if browser blocks embedded PDF objects */}
                <iframe
                  src={`${pdfUrl}#view=FitH`}
                  className="w-full h-full min-h-[75vh] border-0"
                  title="Shivam Kumar Resume PDF"
                >
                  <div className="p-8 text-center bg-white text-slate-900">
                    <p className="text-base font-semibold mb-4">
                      Unable to display embedded PDF directly in this browser.
                    </p>
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 text-white font-semibold text-sm"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download or Open Resume PDF</span>
                    </a>
                  </div>
                </iframe>
              </object>
            </div>
          </div>
        ) : (
          /* =====================================================================
             WEB DOCUMENT VIEW (HTML/CSS EXACT 2-PAGE REPLICA)
             ===================================================================== */
          <div className="w-full py-4 sm:py-8 px-2 sm:px-4 flex flex-col items-center">
            {/* PAGE 1 */}
            <div
              id="resume-page-1"
              className="bg-white text-slate-900 shadow-2xl w-full max-w-[800px] p-4 sm:p-8 md:p-11 mb-6 rounded-md sm:rounded-lg"
              style={{
                fontFamily:
                  'var(--font-open-sans), Calibri, "Gill Sans", "Segoe UI", Roboto, sans-serif',
                boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
              }}
            >
              {/* Header: Name & Contact info */}
              <div className="text-center pb-2.5 mb-3">
                <h1 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0f2b5c] tracking-tight leading-tight mb-1">
                  Shivam kumar
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-x-2 text-[11px] sm:text-[13px] font-normal text-slate-800">
                  <a
                    href={`tel:${RESUME_DATA.personal.phone}`}
                    className="text-slate-900 hover:text-blue-700 font-medium"
                  >
                    {RESUME_DATA.personal.phone}
                  </a>
                  <span className="text-slate-400">|</span>
                  <a
                    href={`mailto:${RESUME_DATA.personal.email}`}
                    className="text-blue-700 hover:underline"
                  >
                    {RESUME_DATA.personal.email}
                  </a>
                  <span className="text-slate-400">|</span>
                  <a
                    href={RESUME_DATA.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    {RESUME_DATA.personal.linkedinDisplay}
                  </a>
                </div>
              </div>

              {/* PROFESSIONAL SUMMARY */}
              <div className="mb-3.5">
                <h2 className="text-[12px] sm:text-[13px] font-bold text-[#0f2b5c] uppercase tracking-wider border-b border-slate-400 pb-0.5 mb-1.5">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-[11px] sm:text-[12.5px] text-slate-800 leading-relaxed text-justify">
                  Full Stack Developer with 4 years of experience designing and developing
                  scalable web applications using React.js, Next.js, TypeScript, NestJS,
                  Node.js, and MySQL. Skilled in building responsive user interfaces, RESTful
                  APIs, authentication and authorization systems (JWT, RBAC), and
                  database-driven applications. Experienced in developing enterprise
                  applications, admin dashboards, CMS platforms, and logistics management
                  systems with a strong focus on performance, security, scalability, and user
                  experience. Proficient in Agile/Scrum methodologies, modern frontend
                  architecture, and cross-functional collaboration to deliver high-quality
                  software solutions.
                </p>
              </div>

              {/* SKILLS */}
              <div className="mb-3.5">
                <h2 className="text-[12px] sm:text-[13px] font-bold text-[#0f2b5c] uppercase tracking-wider border-b border-slate-400 pb-0.5 mb-1.5">
                  SKILLS
                </h2>
                <ul className="space-y-1 text-[11px] sm:text-[12.5px] text-slate-800 leading-snug">
                  {skillsList.map((item) => (
                    <li key={item.title} className="flex items-start">
                      <span className="mr-1.5 font-bold text-slate-900">•</span>
                      <span>
                        <strong className="font-bold text-slate-900">
                          {item.title} :
                        </strong>{" "}
                        {item.skills}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WORK EXPERIENCE */}
              <div className="mb-2">
                <h2 className="text-[12px] sm:text-[13px] font-bold text-[#0f2b5c] uppercase tracking-wider border-b border-slate-400 pb-0.5 mb-2">
                  WORK EXPERIENCE
                </h2>

                <div className="space-y-3 sm:space-y-3.5">
                  <div className="avoid-break">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-[11.5px] sm:text-[13px] font-bold text-slate-900">
                        Software Developer (React Developer)
                      </h3>
                      <span className="text-[10.5px] sm:text-[12px] font-semibold text-slate-700 shrink-0">
                        April 2026 – Present
                      </span>
                    </div>
                    <div className="text-[11px] sm:text-[12px] font-semibold text-[#0f2b5c] mb-1">
                      Infox Software Technology pvt. ltd. | Gurugram, India
                    </div>
                    <ul className="space-y-0.5 text-[10.5px] sm:text-[12px] text-slate-800 leading-normal pl-4 list-disc">
                      <li>
                        Designed and developed a scalable Admin Panel from scratch using
                        React.js, TypeScript, Redux Toolkit, and Tailwind CSS.
                      </li>
                      <li>
                        Developed responsive dashboards, data tables, advanced forms,
                        filters, and management modules for logistics operations and
                        shipment tracking.
                      </li>
                      <li>
                        Implemented centralized state management using Redux Toolkit,
                        improving data consistency and application maintainability.
                      </li>
                      <li>
                        Integrated RESTful APIs from ASP.NET backend services and implemented
                        efficient data fetching, validation, and error handling.
                      </li>
                      <li>
                        Built reusable UI components and frontend architecture to accelerate
                        feature development and ensure code reusability.
                      </li>
                      <li>
                        Optimized application performance, responsiveness, and user experience
                        across modern browsers and devices.
                      </li>
                      <li>
                        Collaborated with cross-functional teams in Agile/Scrum environments to
                        deliver high-quality frontend solutions.
                      </li>
                    </ul>
                  </div>

                  <div className="avoid-break">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-[11.5px] sm:text-[13px] font-bold text-slate-900">
                        Software Developer ( FullStack Developer )
                      </h3>
                      <span className="text-[10.5px] sm:text-[12px] font-semibold text-slate-700 shrink-0">
                        July 2024 – December 2025
                      </span>
                    </div>
                    <div className="text-[11px] sm:text-[12px] font-semibold text-[#0f2b5c] mb-1">
                      Harij Softech Solutions | Gurugram, India
                    </div>
                    <ul className="space-y-0.5 text-[10.5px] sm:text-[12px] text-slate-800 leading-normal pl-4 list-disc">
                      <li>
                        Developed scalable and high-performance Next.js applications with a
                        focus on pixel-perfect UI and user experience.
                      </li>
                      <li>
                        Implemented SSR and CSR strategies to improve application performance
                        and SEO.
                      </li>
                      <li>
                        Integrated Next.js frontend applications with NestJS REST APIs.
                      </li>
                      <li>
                        Implemented JWT authentication and Role-Based Access Control (RBAC).
                      </li>
                      <li>
                        Collaborated with cross-functional teams to deliver end-to-end
                        features in Agile environments.
                      </li>
                      <li>
                        Conducted code reviews, debugging, testing, and performance
                        optimization.
                      </li>
                    </ul>
                  </div>

                  <div className="avoid-break">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-[11.5px] sm:text-[13px] font-bold text-slate-900">
                        Software Developer (React / React Native / Next.js)
                      </h3>
                      <span className="text-[10.5px] sm:text-[12px] font-semibold text-slate-700 shrink-0">
                        December 2022 – July 2024
                      </span>
                    </div>
                    <div className="text-[11px] sm:text-[12px] font-semibold text-[#0f2b5c] mb-1">
                      Agicent App Development Technology | Noida, India
                    </div>
                    <ul className="space-y-0.5 text-[10.5px] sm:text-[12px] text-slate-800 leading-normal pl-4 list-disc">
                      <li>
                        Built responsive and visually rich web and mobile applications using
                        React, Next.js and React Native.
                      </li>
                      <li>
                        Developed reusable UI components and optimized UI performance.
                      </li>
                      <li>
                        Integrated RESTful APIs and managed application state efficiently.
                      </li>
                      <li>
                        Fixed production issues, optimized performance, and supported release
                        cycles.
                      </li>
                      <li>
                        Worked closely with backend teams to ensure seamless data flow.
                      </li>
                    </ul>
                  </div>

                  <div className="avoid-break">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-[11.5px] sm:text-[13px] font-bold text-slate-900">
                        Software Developer (React Developer)
                      </h3>
                      <span className="text-[10.5px] sm:text-[12px] font-semibold text-slate-700 shrink-0">
                        June 2022 – November 2022
                      </span>
                    </div>
                    <div className="text-[11px] sm:text-[12px] font-semibold text-[#0f2b5c] mb-1">
                      Airygod IT
                    </div>
                    <ul className="space-y-0.5 text-[10.5px] sm:text-[12px] text-slate-800 leading-normal pl-4 list-disc">
                      <li>Developed UI components using React.js.</li>
                      <li>Integrated REST APIs and handled data rendering.</li>
                      <li>Participated in bug fixing, testing and feature enhancements.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-right text-[10px] text-slate-400 pt-2 border-t border-slate-200 no-print">
                Page 1 of 2
              </div>
            </div>

            {/* PAGE 2 */}
            <div
              id="resume-page-2"
              className="bg-white text-slate-900 shadow-2xl w-full max-w-[800px] p-4 sm:p-8 md:p-11 mb-6 rounded-md sm:rounded-lg"
              style={{
                fontFamily:
                  'var(--font-open-sans), Calibri, "Gill Sans", "Segoe UI", Roboto, sans-serif',
                boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
              }}
            >
              {/* PROJECTS */}
              <div className="mb-4">
                <h2 className="text-[12px] sm:text-[13px] font-bold text-[#0f2b5c] uppercase tracking-wider border-b border-slate-400 pb-0.5 mb-2">
                  PROJECTS
                </h2>

                <div className="space-y-3.5 sm:space-y-4">
                  <div className="avoid-break">
                    <h3 className="text-[12px] sm:text-[13px] font-bold text-slate-900">
                      Shipez - Digital Logistics
                    </h3>
                    <div className="text-[11px] sm:text-[12px] font-bold text-[#0f2b5c]">
                      Role: React Developer
                    </div>
                    <div className="text-[11px] sm:text-[12px] font-bold text-[#0f2b5c] mb-1">
                      Tech Stack: React.js, Redux, Redux-Toolkit, Tailwind, ASP.NET, Python
                    </div>
                    <ul className="space-y-0.5 text-[10.5px] sm:text-[12px] text-slate-800 leading-normal pl-4 list-disc">
                      <li>
                        Developed and maintained a logistics management platform used for
                        shipment tracking, status monitoring, and operational record
                        management.
                      </li>
                      <li>
                        Designed and built a scalable Admin Panel from scratch using
                        React.js, Redux Toolkit, and Tailwind CSS.
                      </li>
                      <li>
                        Created reusable and responsive UI components, dashboards, data
                        tables, forms, and management modules to improve operational
                        efficiency.
                      </li>
                      <li>
                        Implemented centralized state management using Redux Toolkit for
                        efficient data handling and application scalability.
                      </li>
                      <li>
                        Integrated and consumed RESTful APIs from ASP.NET backend services,
                        ensuring seamless data flow and real-time information updates.
                      </li>
                    </ul>
                  </div>

                  <div className="avoid-break">
                    <h3 className="text-[12px] sm:text-[13px] font-bold text-slate-900">
                      Signfeed – Digital Signage CMS
                    </h3>
                    <div className="text-[11px] sm:text-[12px] font-bold text-[#0f2b5c]">
                      Role: Full-Stack Developer
                    </div>
                    <div className="text-[11px] sm:text-[12px] font-bold text-[#0f2b5c] mb-1">
                      Tech Stack: Next.js, TypeScript, Tailwind CSS, NestJS, MySQL, RBAC,
                      React Native
                    </div>
                    <ul className="space-y-0.5 text-[10.5px] sm:text-[12px] text-slate-800 leading-normal pl-4 list-disc">
                      <li>
                        Designed and developed a scalable CMS platform for managing digital
                        signage across Android apps and TV screens.
                      </li>
                      <li>
                        Built the complete frontend architecture using Next.js with SSR and
                        CSR.
                      </li>
                      <li>
                        Implemented Role-Based Access Control (RBAC) across the application.
                      </li>
                      <li>
                        Developed backend APIs using NestJS for authentication, user
                        management, and content handling.
                      </li>
                      <li>
                        Designed MySQL schemas and Implemented secure JWT-based authentication
                        and guards.
                      </li>
                      <li>
                        Built a custom canvas editor with drag, resize, widgets, and
                        positioning features using React-RND with Cross-browser compatibility.
                      </li>
                    </ul>
                  </div>

                  <div className="avoid-break">
                    <h3 className="text-[12px] sm:text-[13px] font-bold text-slate-900">
                      Haldiram – FSSAI Document Management System
                    </h3>
                    <div className="text-[11px] sm:text-[12px] font-bold text-[#0f2b5c]">
                      Role: Full-Stack Developer
                    </div>
                    <div className="text-[11px] sm:text-[12px] font-bold text-[#0f2b5c] mb-1">
                      Tech Stack: Next.js, NestJS, MySQL, TypeScript
                    </div>
                    <ul className="space-y-0.5 text-[10.5px] sm:text-[12px] text-slate-800 leading-normal pl-4 list-disc">
                      <li>
                        Built a full-stack admin panel to manage FSSAI compliance documents.
                      </li>
                      <li>
                        Implemented logic to upload and manage up to latest 5 documents with
                        only one document published at a time.
                      </li>
                      <li>
                        Automatically unpublished the previous document when a new PDF was
                        published.
                      </li>
                      <li>
                        Designed MySQL schema for document versioning and publish status.
                      </li>
                      <li>
                        Developed frontend to display published documents publicly with
                        restricted admin access.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* EDUCATION */}
              <div className="avoid-break mb-2">
                <h2 className="text-[12px] sm:text-[13px] font-bold text-[#0f2b5c] uppercase tracking-wider border-b border-slate-400 pb-0.5 mb-1.5">
                  EDUCATION
                </h2>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-[12px] sm:text-[13px] font-bold text-slate-900">
                    Bachelor of Engineering, ( Computer Science )
                  </h3>
                  <span className="text-[11px] sm:text-[12px] font-semibold text-slate-700 shrink-0">
                    2022
                  </span>
                </div>
                <div className="text-[11px] sm:text-[12px] italic text-[#0f2b5c]">
                  Sant Longowal Institute of Engineering &amp; Technology, Sangrur Punjab (
                  Ministry of Education )
                </div>
              </div>

              <div className="text-right text-[10px] text-slate-400 pt-3 border-t border-slate-200 no-print">
                Page 2 of 2
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
