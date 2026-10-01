"use client";

import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function EducationSection() {
  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
        </div>

        <div className="max-w-3xl">
          {RESUME_DATA.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 font-medium mt-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-indigo-300 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.year}</span>
                </div>
              </div>

              {edu.note && (
                <div className="mt-3.5 sm:mt-4 pt-3.5 sm:pt-4 border-t border-slate-800/80 flex items-start gap-2 text-xs text-slate-400">
                  <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{edu.note}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
