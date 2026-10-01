"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle, Building } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            Career History
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-2 text-slate-400 max-w-2xl text-xs sm:text-sm md:text-base">
            4 years of proven track record engineering scalable web applications, enterprise logistics suites, digital signage systems, and cross-platform mobile apps.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-5 sm:pl-8 border-l-2 border-slate-800 space-y-8 sm:space-y-12">
          {RESUME_DATA.experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker node */}
              <div
                className={`absolute -left-[29px] sm:-left-[41px] top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-4 ${
                  exp.isCurrent
                    ? "bg-sky-400 border-sky-950 ring-4 ring-sky-500/20"
                    : "bg-slate-700 border-slate-950 group-hover:bg-indigo-400"
                } transition-colors`}
              />

              {/* Main Card */}
              <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium mt-1">
                      <Building className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 sm:gap-2 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-5 sm:mb-6 text-xs sm:text-sm text-slate-300">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0 mt-0.5 sm:mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-3.5 sm:pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-400 mr-1">
                    Tech Stack:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs font-medium rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
