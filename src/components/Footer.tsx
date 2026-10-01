"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/SocialIcons";
import { RESUME_DATA } from "@/data/resume-data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950 py-8 sm:py-10 print:hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2 font-bold text-white text-base">
            <span className="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center text-white text-xs">
              SK
            </span>
            <span>{RESUME_DATA.personal.name}</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Full Stack Developer • Ready for impactful engineering roles
          </p>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <a
            href={RESUME_DATA.personal.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors p-1.5"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={RESUME_DATA.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition-colors p-1.5"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${RESUME_DATA.personal.email}`}
            className="hover:text-emerald-400 transition-colors p-1.5"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="ml-1 sm:ml-2 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
