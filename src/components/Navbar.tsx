"use client";

import React, { useState } from "react";
import {
  FileText,
  Sparkles,
  Printer,
  Moon,
  Sun,
  Menu,
  X,
  ExternalLink,
  Mail,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/SocialIcons";
import { RESUME_DATA } from "@/data/resume-data";

interface NavbarProps {
  currentView: "portfolio" | "resume";
  setCurrentView: (view: "portfolio" | "resume") => void;
  isDark: boolean;
  toggleTheme: () => void;
  onPrint: () => void;
}

export function Navbar({
  currentView,
  setCurrentView,
  isDark,
  toggleTheme,
  onPrint,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 transition-colors dark:bg-slate-950/85">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <a
              href="#overview"
              onClick={() => setCurrentView("portfolio")}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
                SK
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-100 group-hover:text-sky-400 transition-colors text-base tracking-tight">
                  {RESUME_DATA.personal.name}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Roles
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          {currentView === "portfolio" && (
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* View Mode Switcher Button */}
            <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-xl shadow-inner">
              <button
                type="button"
                onClick={() => setCurrentView("portfolio")}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  currentView === "portfolio"
                    ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/25"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                title="Switch to Interactive Portfolio"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Portfolio</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentView("resume")}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  currentView === "resume"
                    ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/25"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                title="Switch to Clean ATS Resume View"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>

            {/* Print / Save PDF Button */}
            <button
              type="button"
              onClick={onPrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white border border-slate-700/60 rounded-lg transition-all shadow-sm"
              title="Print or Save Resume as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle theme"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-400" />}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 space-y-2">
            <div className="grid grid-cols-2 gap-2 mb-3">
              <button
                type="button"
                onClick={() => {
                  setCurrentView("portfolio");
                  setMobileMenuOpen(false);
                }}
                className={`py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 ${
                  currentView === "portfolio"
                    ? "bg-sky-600 text-white"
                    : "bg-slate-800 text-slate-300"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Portfolio View
              </button>
              <button
                type="button"
                onClick={() => {
                  setCurrentView("resume");
                  setMobileMenuOpen(false);
                }}
                className={`py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 ${
                  currentView === "resume"
                    ? "bg-sky-600 text-white"
                    : "bg-slate-800 text-slate-300"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                ATS Resume View
              </button>
            </div>

            {currentView === "portfolio" &&
              navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg"
                >
                  {link.label}
                </a>
              ))}

            <div className="pt-2 flex items-center gap-3 text-slate-400 px-3">
              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 p-1"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white p-1"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${RESUME_DATA.personal.email}`}
                className="hover:text-emerald-400 p-1"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
