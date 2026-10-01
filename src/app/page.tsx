"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { SimpleResumeView } from "@/components/SimpleResumeView";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [currentView, setCurrentView] = useState<"portfolio" | "resume">("portfolio");
  const [isDark, setIsDark] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  // Initialize theme and view on mount
  useEffect(() => {
    setMounted(true);
    const hash = window.location.hash;
    const search = window.location.search;
    if (hash === "#resume" || search.includes("view=resume")) {
      setCurrentView("resume");
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.setAttribute("data-theme", "light");
      document.body.setAttribute("data-theme", "light");
    } else {
      setIsDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
      document.body.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      document.documentElement.setAttribute("data-theme", "light");
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      setIsDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const handlePrint = () => {
    if (currentView !== "resume") {
      setCurrentView("resume");
      setTimeout(() => {
        window.print();
      }, 200);
    } else {
      window.print();
    }
  };

  const activeTheme = mounted ? (isDark ? "dark" : "light") : "dark";

  return (
    <div
      data-theme={activeTheme}
      className={`min-h-screen flex flex-col transition-colors duration-200 ${
        activeTheme === "light"
          ? "bg-slate-50 text-slate-900"
          : "bg-slate-950 text-slate-100"
      }`}
    >
      <div className="no-print">
        <Navbar
          currentView={currentView}
          setCurrentView={setCurrentView}
          isDark={isDark}
          toggleTheme={toggleTheme}
          onPrint={handlePrint}
        />
      </div>

      <main className="flex-1">
        {currentView === "portfolio" ? (
          <>
            <HeroSection
              onSwitchToResume={() => setCurrentView("resume")}
              onPrint={handlePrint}
            />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <ContactSection />
          </>
        ) : (
          <SimpleResumeView
            onSwitchToPortfolio={() => setCurrentView("portfolio")}
            onPrint={handlePrint}
          />
        )}
      </main>

      <div className="no-print">
        <Footer />
      </div>
    </div>
  );
}
