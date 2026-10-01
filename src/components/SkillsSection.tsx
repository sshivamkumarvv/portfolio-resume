"use client";

import React, { useState, useMemo } from "react";
import {
  Code,
  Server,
  Database,
  Brain,
  Wrench,
  Cpu,
  Search,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categoryIcons: Record<string, React.ReactNode> = {
    all: <Sparkles className="w-4 h-4 text-sky-400" />,
    frontend: <Code className="w-4 h-4 text-sky-400" />,
    backend: <Server className="w-4 h-4 text-emerald-400" />,
    database: <Database className="w-4 h-4 text-indigo-400" />,
    ai_llm: <Brain className="w-4 h-4 text-purple-400" />,
    ai_tools: <Cpu className="w-4 h-4 text-amber-400" />,
    devops: <Wrench className="w-4 h-4 text-rose-400" />,
  };

  const categoryLabels: Record<string, string> = {
    frontend: "Frontend Engineering",
    backend: "Backend & APIs",
    database: "Databases & Storage",
    ai_llm: "AI & LLM Specialization",
    ai_tools: "AI & Developer Tools",
    devops: "DevOps & Cloud Tools",
  };

  const filteredSkills = useMemo(() => {
    return RESUME_DATA.skills.filter((skill) => {
      const matchesCategory =
        selectedCategory === "all" || skill.category === selectedCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-16 md:py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Improved Technical Skills
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
              A comprehensive stack spanning scalable modern frontend systems, robust backend architectures, databases, and cutting-edge Generative AI & LLM tooling.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search skills (e.g. Next.js, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-900 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {RESUME_DATA.skillsCategories.map((cat) => {
            const count =
              cat.id === "all"
                ? RESUME_DATA.skills.length
                : RESUME_DATA.skills.filter((s) => s.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                    : "bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800"
                }`}
              >
                {categoryIcons[cat.id]}
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    selectedCategory === cat.id
                      ? "bg-sky-700/60 text-white"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        {selectedCategory === "all" && !searchQuery ? (
          /* Grouped by Category */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(["frontend", "backend", "database", "ai_llm", "ai_tools", "devops"] as const).map(
              (categoryKey) => {
                const categorySkills = RESUME_DATA.skills.filter(
                  (s) => s.category === categoryKey
                );

                const borderAccent =
                  categoryKey === "frontend"
                    ? "group-hover:border-sky-500/40"
                    : categoryKey === "backend"
                    ? "group-hover:border-emerald-500/40"
                    : categoryKey === "database"
                    ? "group-hover:border-indigo-500/40"
                    : categoryKey === "ai_llm"
                    ? "group-hover:border-purple-500/40"
                    : categoryKey === "ai_tools"
                    ? "group-hover:border-amber-500/40"
                    : "group-hover:border-rose-500/40";

                return (
                  <div
                    key={categoryKey}
                    className={`group p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${borderAccent}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                        {categoryIcons[categoryKey]}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">
                          {categoryLabels[categoryKey]}
                        </h3>
                        <span className="text-xs text-slate-500 font-medium">
                          {categorySkills.length} skills listed
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            skill.highlight
                              ? "bg-slate-800/90 text-slate-100 border border-slate-700/80 shadow-xs"
                              : "bg-slate-900/90 text-slate-300 border border-slate-800/80"
                          }`}
                        >
                          <CheckCircle2
                            className={`w-3 h-3 ${
                              skill.highlight ? "text-sky-400" : "text-slate-600"
                            }`}
                          />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        ) : (
          /* Filtered flat list */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center gap-2 hover:border-sky-500/40 hover:bg-slate-800/60 transition-all"
              >
                <div className="shrink-0">{categoryIcons[skill.category]}</div>
                <div className="overflow-hidden">
                  <div className="text-sm font-semibold text-slate-200 truncate">
                    {skill.name}
                  </div>
                  <div className="text-[11px] text-slate-500 capitalize">
                    {skill.category.replace("_", " ")}
                  </div>
                </div>
              </div>
            ))}

            {filteredSkills.length === 0 && (
              <div className="col-span-full py-12 text-center text-slate-500">
                No technical skills found matching &quot;{searchQuery}&quot;.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
