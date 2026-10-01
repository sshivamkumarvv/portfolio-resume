"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  ArrowRight,
  FileText,
  Sparkles,
  Layers,
  Code2,
  Cpu,
  ShieldCheck,
  Download,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/SocialIcons";
import { RESUME_DATA, RESUME_PDF_URL, getResumePdfUrl } from "@/data/resume-data";

interface HeroSectionProps {
  onSwitchToResume: () => void;
  onPrint: () => void;
}

export function HeroSection({ onSwitchToResume, onPrint }: HeroSectionProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string>(RESUME_PDF_URL);

  useEffect(() => {
    setPdfUrl(getResumePdfUrl());
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <section id="overview" className="relative pt-8 pb-12 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[250px] sm:h-[350px] bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-purple-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-10 right-2 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          {/* Availability Badge */}
          <div className="inline-flex items-center flex-wrap justify-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] sm:text-xs font-semibold text-sky-400 mb-5 sm:mb-6 shadow-sm">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Full Stack Developer • 4+ Years Exp</span>
            <span className="hidden xs:inline text-slate-500">|</span>
            <span className="text-slate-300">Open to Roles</span>
          </div>

          {/* Main Title & Subhead */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-teal-300 bg-clip-text text-transparent">
              {RESUME_DATA.personal.name}
            </span>
          </h1>

          <p className="mt-2.5 sm:mt-3 text-lg sm:text-2xl font-semibold text-slate-300">
            {RESUME_DATA.personal.title}{" "}
            <span className="hidden sm:inline text-slate-500 font-normal">|</span>{" "}
            <span className="block sm:inline text-sky-400 font-medium text-base sm:text-2xl mt-1 sm:mt-0">
              React • Next.js • NestJS • AI/LLM
            </span>
          </p>

          <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
            {RESUME_DATA.personal.summary}
          </p>

          {/* Interactive Contact & Social Pills */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
            {/* Email pill */}
            <div className="flex items-center rounded-xl bg-slate-900/90 border border-slate-800 p-1 shadow-sm max-w-full">
              <a
                href={`mailto:${RESUME_DATA.personal.email}`}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-200 hover:text-sky-400 transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
                <span className="truncate">{RESUME_DATA.personal.email}</span>
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard(RESUME_DATA.personal.email, "email")}
                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors shrink-0"
                title="Copy email to clipboard"
              >
                {copiedItem === "email" ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Phone pill */}
            <div className="flex items-center rounded-xl bg-slate-900/90 border border-slate-800 p-1 shadow-sm">
              <a
                href={`tel:${RESUME_DATA.personal.phone}`}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span>{RESUME_DATA.personal.phoneDisplay}</span>
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard(RESUME_DATA.personal.phone, "phone")}
                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors shrink-0"
                title="Copy phone to clipboard"
              >
                {copiedItem === "phone" ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-400">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 shrink-0" />
              <span>{RESUME_DATA.personal.location}</span>
            </div>

            {/* LinkedIn */}
            <a
              href={RESUME_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 text-xs sm:text-sm font-medium text-slate-200 hover:text-sky-400 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-200 shrink-0" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Copy feedback notification */}
          {copiedItem && (
            <p className="mt-2 text-xs text-emerald-400 flex items-center justify-center md:justify-start gap-1 font-medium">
              <Check className="w-3.5 h-3.5" /> Copied {copiedItem} to clipboard!
            </p>
          )}

          {/* Call to action buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 transition-all"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onSwitchToResume}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>View ATS Resume Page</span>
            </button>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Shivam_Kumar_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm border border-slate-800 hover:border-slate-700 transition-all"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          <div className="p-3.5 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="p-2 sm:p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold text-white leading-tight">4+ Years</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Professional Exp</div>
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold text-white leading-tight">10+ Apps</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Enterprise Systems</div>
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold text-white leading-tight">99.9%</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Uptime & Reliability</div>
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="p-2 sm:p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold text-white leading-tight">AI-Driven</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Modern Architecture</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
