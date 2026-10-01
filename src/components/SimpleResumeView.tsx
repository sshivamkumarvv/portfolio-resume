"use client";

import React, { useState } from "react";
import {
  Printer,
  Sparkles,
  Check,
  Copy,
  ArrowLeft,
  Mail,
  Phone,
  Share2,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/SocialIcons";
import { RESUME_DATA } from "@/data/resume-data";

interface SimpleResumeViewProps {
  onSwitchToPortfolio: () => void;
  onPrint: () => void;
}

export function SimpleResumeView({
  onSwitchToPortfolio,
  onPrint,
}: SimpleResumeViewProps) {
  const [copied, setCopied] = useState(false);

  const copyPageLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Group improved technical skills
  const frontendSkills = RESUME_DATA.skills
    .filter((s) => s.category === "frontend")
    .map((s) => s.name)
    .join(", ");

  const backendSkills = RESUME_DATA.skills
    .filter((s) => s.category === "backend")
    .map((s) => s.name)
    .join(", ");

  const databaseSkills = RESUME_DATA.skills
    .filter((s) => s.category === "database")
    .map((s) => s.name)
    .join(", ");

  const aiLlmSkills = RESUME_DATA.skills
    .filter((s) => s.category === "ai_llm")
    .map((s) => s.name)
    .join(", ");

  const aiToolsSkills = RESUME_DATA.skills
    .filter((s) => s.category === "ai_tools")
    .map((s) => s.name)
    .join(", ");

  const devopsSkills = RESUME_DATA.skills
    .filter((s) => s.category === "devops")
    .map((s) => s.name)
    .join(", ");

  return (
    <div className="min-h-screen bg-slate-900/40 py-4 sm:py-8 px-2.5 sm:px-6 print:p-0 print:bg-white transition-colors">
      {/* Top Floating Control Bar for Screen View */}
      <div className="max-w-4xl mx-auto mb-4 sm:mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4 no-print">
        <button
          type="button"
          onClick={onSwitchToPortfolio}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          <span>Switch to Interactive Portfolio</span>
        </button>

        <div className="grid grid-cols-2 sm:flex sm:items-center gap-2">
          <button
            type="button"
            onClick={copyPageLink}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-medium border border-slate-700 transition-colors"
            title="Copy URL"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 shrink-0" />
                <span>Share Link</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onPrint}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-sky-500/25 transition-all"
          >
            <Printer className="w-3.5 h-3.5 shrink-0" />
            <span>Print / PDF</span>
          </button>
        </div>
      </div>

      {/* Clean ATS Resume Paper Container */}
      <div className="resume-paper max-w-4xl mx-auto bg-white text-gray-900 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-8 md:p-12 border border-slate-200 font-sans print:shadow-none print:border-none print:p-0 print:rounded-none">
        {/* Header Section */}
        <header className="text-center border-b border-gray-300 pb-4 sm:pb-5 mb-5 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {RESUME_DATA.personal.name}
          </h1>

          {/* Contact Details with Clean Mobile Wrap */}
          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-medium text-gray-700">
            <a
              href={`tel:${RESUME_DATA.personal.phone}`}
              className="inline-flex items-center gap-1 text-gray-900 hover:text-blue-700 font-semibold"
            >
              <Phone className="w-3 h-3 text-emerald-600 shrink-0" />
              <span>{RESUME_DATA.personal.phone}</span>
            </a>

            <span className="hidden sm:inline text-gray-400">•</span>

            <a
              href={`mailto:${RESUME_DATA.personal.email}`}
              className="inline-flex items-center gap-1 text-blue-700 hover:underline break-all"
            >
              <Mail className="w-3 h-3 text-sky-600 shrink-0" />
              <span>{RESUME_DATA.personal.email}</span>
            </a>

            <span className="hidden sm:inline text-gray-400">•</span>

            <a
              href={RESUME_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-blue-700 hover:underline"
            >
              <LinkedinIcon className="w-3 h-3 text-sky-600 shrink-0" />
              <span>{RESUME_DATA.personal.linkedinDisplay}</span>
            </a>

            <span className="hidden sm:inline text-gray-400">•</span>

            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-blue-700 hover:underline"
            >
              <GithubIcon className="w-3 h-3 text-gray-800 shrink-0" />
              <span>{RESUME_DATA.personal.githubDisplay}</span>
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-5 sm:mb-6">
          <h2 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-gray-900 pb-0.5 mb-2">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed text-left sm:text-justify">
            {RESUME_DATA.personal.summary}
          </p>
        </section>

        {/* Improved Technical Skills */}
        <section className="mb-5 sm:mb-6">
          <h2 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-gray-900 pb-0.5 mb-2">
            Technical Skills
          </h2>
          <div className="space-y-1.5 text-xs sm:text-sm text-gray-800 leading-normal">
            <p className="break-words">
              <strong className="font-bold text-gray-900">• Frontend:</strong>{" "}
              {frontendSkills}
            </p>
            <p className="break-words">
              <strong className="font-bold text-gray-900">• Backend:</strong>{" "}
              {backendSkills}
            </p>
            <p className="break-words">
              <strong className="font-bold text-gray-900">• Database:</strong>{" "}
              {databaseSkills}
            </p>
            <p className="break-words">
              <strong className="font-bold text-gray-900">• AI &amp; LLM:</strong>{" "}
              {aiLlmSkills}
            </p>
            <p className="break-words">
              <strong className="font-bold text-gray-900">• AI / Developer Tools:</strong>{" "}
              {aiToolsSkills}
            </p>
            <p className="break-words">
              <strong className="font-bold text-gray-900">• DevOps &amp; Tools:</strong>{" "}
              {devopsSkills}
            </p>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-5 sm:mb-6">
          <h2 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-gray-900 pb-0.5 mb-2.5">
            Work Experience
          </h2>

          <div className="space-y-4 sm:space-y-5">
            {RESUME_DATA.experiences.map((exp) => (
              <div key={exp.id} className="avoid-break">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5 sm:gap-2 mb-1">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900">
                      {exp.role}
                    </h3>
                    <div className="text-[11px] sm:text-xs font-semibold text-gray-700">
                      {exp.company} | {exp.location}
                    </div>
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-gray-600 sm:text-right">
                    {exp.period}
                  </div>
                </div>

                <ul className="list-disc ml-4 sm:ml-5 space-y-1 text-xs text-gray-800 leading-normal mt-1">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="leading-snug">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-5 sm:mb-6">
          <h2 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-gray-900 pb-0.5 mb-2.5">
            Projects
          </h2>

          <div className="space-y-3.5 sm:space-y-4">
            {RESUME_DATA.projects.map((proj) => (
              <div key={proj.id} className="avoid-break">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5 sm:gap-2">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900">
                    {proj.title}
                  </h3>
                  <span className="text-[11px] sm:text-xs font-semibold text-gray-600">
                    Role: {proj.role}
                  </span>
                </div>
                <div className="text-[11px] sm:text-xs text-gray-700 font-semibold mb-1 break-words">
                  Tech Stack: {proj.technologies.join(", ")}
                </div>
                <ul className="list-disc ml-4 sm:ml-5 space-y-1 text-xs text-gray-800 leading-normal">
                  {proj.highlights.map((item, idx) => (
                    <li key={idx} className="leading-snug">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="avoid-break">
          <h2 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-gray-900 pb-0.5 mb-2">
            Education
          </h2>
          {RESUME_DATA.education.map((edu, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5 sm:gap-2 text-xs sm:text-sm"
            >
              <div>
                <span className="font-bold text-gray-900">
                  {edu.degree}, ( {edu.field} )
                </span>
                <div className="text-[11px] sm:text-xs text-gray-700">
                  {edu.institution}, {edu.location}
                </div>
              </div>
              <div className="font-semibold text-gray-700 text-[11px] sm:text-xs">
                {edu.year}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
