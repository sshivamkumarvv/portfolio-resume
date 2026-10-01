"use client";

import React, { useState } from "react";
import { Printer, Sparkles, Download, Check, Copy, ArrowLeft } from "lucide-react";
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
    <div className="min-h-screen bg-slate-900/40 py-8 px-4 sm:px-6 print:p-0 print:bg-white">
      {/* Top Floating Control Bar for Screen View */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-3 no-print">
        <button
          type="button"
          onClick={onSwitchToPortfolio}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Switch to Modern Portfolio</span>
        </button>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={copyPageLink}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-medium border border-slate-700 transition-colors"
            title="Copy URL"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied Link!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Share Link</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onPrint}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-sky-500/25 transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Clean ATS Resume Paper Container */}
      <div className="resume-paper max-w-4xl mx-auto bg-white text-gray-900 rounded-2xl shadow-2xl p-8 sm:p-12 border border-slate-200 font-sans print:shadow-none print:border-none print:p-0 print:rounded-none">
        {/* Header Section */}
        <header className="text-center border-b border-gray-300 pb-5 mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {RESUME_DATA.personal.name}
          </h1>
          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-gray-700">
            <a
              href={`tel:${RESUME_DATA.personal.phone}`}
              className="text-gray-900 hover:text-blue-700 font-semibold"
            >
              {RESUME_DATA.personal.phone}
            </a>
            <span className="text-gray-400">|</span>
            <a
              href={`mailto:${RESUME_DATA.personal.email}`}
              className="text-blue-700 hover:underline"
            >
              {RESUME_DATA.personal.email}
            </a>
            <span className="text-gray-400">|</span>
            <a
              href={RESUME_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:underline"
            >
              {RESUME_DATA.personal.linkedinDisplay}
            </a>
            <span className="text-gray-400">|</span>
            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:underline"
            >
              {RESUME_DATA.personal.githubDisplay}
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-gray-900 pb-0.5 mb-2.5">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed text-justify">
            {RESUME_DATA.personal.summary}
          </p>
        </section>

        {/* Improved Technical Skills */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-gray-900 pb-0.5 mb-2.5">
            Technical Skills
          </h2>
          <div className="space-y-1.5 text-xs sm:text-sm text-gray-800 leading-normal">
            <p>
              <strong className="font-bold text-gray-900">• Frontend:</strong>{" "}
              {frontendSkills}
            </p>
            <p>
              <strong className="font-bold text-gray-900">• Backend:</strong>{" "}
              {backendSkills}
            </p>
            <p>
              <strong className="font-bold text-gray-900">• Database:</strong>{" "}
              {databaseSkills}
            </p>
            <p>
              <strong className="font-bold text-gray-900">• AI &amp; LLM:</strong>{" "}
              {aiLlmSkills}
            </p>
            <p>
              <strong className="font-bold text-gray-900">• AI / Developer Tools:</strong>{" "}
              {aiToolsSkills}
            </p>
            <p>
              <strong className="font-bold text-gray-900">• DevOps &amp; Tools:</strong>{" "}
              {devopsSkills}
            </p>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-gray-900 pb-0.5 mb-3">
            Work Experience
          </h2>

          <div className="space-y-5">
            {RESUME_DATA.experiences.map((exp) => (
              <div key={exp.id} className="avoid-break">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{exp.role}</h3>
                    <div className="text-xs font-semibold text-gray-700">
                      {exp.company} | {exp.location}
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-gray-600 sm:text-right">
                    {exp.period}
                  </div>
                </div>

                <ul className="list-disc ml-5 space-y-1 text-xs text-gray-800 leading-normal mt-1.5">
                  {exp.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-gray-900 pb-0.5 mb-3">
            Projects
          </h2>

          <div className="space-y-4">
            {RESUME_DATA.projects.map((proj) => (
              <div key={proj.id} className="avoid-break">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="text-sm font-bold text-gray-900">
                    {proj.title}
                  </h3>
                  <span className="text-xs font-semibold text-gray-600">
                    Role: {proj.role}
                  </span>
                </div>
                <div className="text-xs text-gray-700 font-semibold mb-1">
                  Tech Stack: {proj.technologies.join(", ")}
                </div>
                <ul className="list-disc ml-5 space-y-1 text-xs text-gray-800 leading-normal">
                  {proj.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="avoid-break">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b-2 border-gray-900 pb-0.5 mb-2.5">
            Education
          </h2>
          {RESUME_DATA.education.map((edu, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
              <div>
                <span className="font-bold text-gray-900">
                  {edu.degree}, ( {edu.field} )
                </span>
                <div className="text-xs text-gray-700">
                  {edu.institution}, {edu.location}
                </div>
              </div>
              <div className="font-semibold text-gray-700 mt-1 sm:mt-0">
                {edu.year}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
