"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  MessageSquare,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/SocialIcons";
import { RESUME_DATA } from "@/data/resume-data";

export function ContactSection() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formName || "Recruiter/Client"}`);
    const body = encodeURIComponent(
      `Hi Shivam,\n\n${formMessage}\n\nFrom: ${formName} (${formEmail})`
    );
    window.location.href = `mailto:${RESUME_DATA.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
              <MessageSquare className="w-3.5 h-3.5" />
              Let&apos;s Connect
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Get In Touch
            </h2>
            <p className="mt-2 text-slate-400 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
              Whether you have an exciting full-time opportunity, a consulting project, or just want to discuss modern React and AI architectures, feel free to reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Details Column */}
            <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4 sm:space-y-6 flex flex-col justify-between">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-base sm:text-lg font-bold text-white">Contact Information</h3>

                {/* Email */}
                <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] sm:text-xs text-slate-400">Email</div>
                      <a
                        href={`mailto:${RESUME_DATA.personal.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-sky-400 transition-colors block truncate"
                      >
                        {RESUME_DATA.personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(RESUME_DATA.personal.email, "email")}
                    className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors shrink-0 ml-1"
                    title="Copy Email"
                  >
                    {copiedItem === "email" ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] sm:text-xs text-slate-400">Phone</div>
                      <a
                        href={`tel:${RESUME_DATA.personal.phone}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors block truncate"
                      >
                        {RESUME_DATA.personal.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(RESUME_DATA.personal.phone, "phone")}
                    className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors shrink-0 ml-1"
                    title="Copy Phone"
                  >
                    {copiedItem === "phone" ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {RESUME_DATA.personal.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-3 sm:pt-4 border-t border-slate-800/80 flex items-center gap-2 sm:gap-3">
                <a
                  href={RESUME_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={RESUME_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Quick Email Launcher Form */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 sm:p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3.5 sm:space-y-4"
            >
              <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Send a Quick Message</h3>

              <div>
                <label className="block text-[11px] sm:text-xs font-medium text-slate-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe / Tech Recruiter"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs sm:text-sm bg-slate-800/80 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-medium text-slate-400 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@company.com"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs sm:text-sm bg-slate-800/80 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-medium text-slate-400 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about the role, project, or opportunity..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs sm:text-sm bg-slate-800/80 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Open in Email App</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
