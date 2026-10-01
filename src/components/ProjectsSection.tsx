"use client";

import React from "react";
import { FolderGit2, Sparkles, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Engineering Projects
          </h2>
          <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
            Architected and delivered high-impact enterprise applications, digital signage drag-and-drop editors, and compliance management platforms.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {RESUME_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden group"
            >
              {/* Card Header Top */}
              <div className="p-6 pb-4 border-b border-slate-800/80 bg-slate-900/40">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <Sparkles className="w-3 h-3" />
                    {project.role}
                  </span>
                  {project.metrics && (
                    <span className="text-[11px] font-medium text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700/50">
                      {project.metrics}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-indigo-400 font-medium mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Key Highlights
                    </div>
                    {project.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
