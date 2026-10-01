"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/SocialIcons";
import { RESUME_DATA } from "@/data/resume-data";

interface HeroSectionProps {
  onSwitchToResume: () => void;
  onPrint: () => void;
}

export function HeroSection({ onSwitchToResume, onPrint }: HeroSectionProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <section id="overview" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-purple-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-sky-400 mb-6 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Full Stack Developer • 4+ Years Experience</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Open to Roles & Opportunities</span>
          </div>

          {/* Main Title & Subhead */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-teal-300 bg-clip-text text-transparent">
              {RESUME_DATA.personal.name}
            </span>
          </h1>

          <p className="mt-3 text-xl sm:text-2xl font-semibold text-slate-300">
            {RESUME_DATA.personal.title}{" "}
            <span className="text-slate-500 font-normal">|</span>{" "}
            <span className="text-sky-400 font-medium">React • Next.js • NestJS • AI/LLM</span>
          </p>

          <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
            {RESUME_DATA.personal.summary}
          </p>

          {/* Interactive Contact & Social Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
            {/* Email pill */}
            <div className="flex items-center rounded-xl bg-slate-900/90 border border-slate-800 p-1 shadow-sm">
              <a
                href={`mailto:${RESUME_DATA.personal.email}`}
                className="flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-200 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>{RESUME_DATA.personal.email}</span>
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard(RESUME_DATA.personal.email, "email")}
                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
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
                className="flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{RESUME_DATA.personal.phoneDisplay}</span>
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard(RESUME_DATA.personal.phone, "phone")}
                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
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
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>{RESUME_DATA.personal.location}</span>
            </div>

            {/* LinkedIn */}
            <a
              href={RESUME_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 text-xs sm:text-sm font-medium text-slate-200 hover:text-sky-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-400" />
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-slate-200" />
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
          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onSwitchToResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>View ATS Resume Page</span>
            </button>

            <button
              type="button"
              onClick={onPrint}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm border border-slate-800 hover:border-slate-700 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Save / Print PDF</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">4+ Years</div>
                <div className="text-xs text-slate-400">Professional Exp</div>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">10+ Apps</div>
                <div className="text-xs text-slate-400">Enterprise Systems</div>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">99.9%</div>
                <div className="text-xs text-slate-400">Uptime & Reliability</div>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">AI-Driven</div>
                <div className="text-xs text-slate-400">Modern Architecture</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
