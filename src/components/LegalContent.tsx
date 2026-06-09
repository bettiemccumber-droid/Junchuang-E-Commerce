"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { company } from "@/lib/company";

export type LegalSection = {
  id: string;
  title: string;
  icon: string;
  content: React.ReactNode;
};

/**
 * Legal page layout with scroll-spy sidebar and document-style content
 */
export default function LegalContent({
  sections,
  type,
}: {
  sections: LegalSection[];
  type: "privacy" | "terms";
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(section.id);
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return (
    <section className="bg-gradient-to-b from-slate-50/80 to-white px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          {/* Sidebar */}
          <nav className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Contents
              </p>
              <ul className="mt-4 space-y-1">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                        activeId === s.id
                          ? "bg-brand-50 font-medium text-brand-700 shadow-sm ring-1 ring-brand-100"
                          : "text-slate-600 hover:bg-white hover:text-slate-900"
                      }`}
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs ${
                          activeId === s.id
                            ? "bg-brand-600 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="leading-snug">{s.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Document body */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50 ring-1 ring-slate-100">
            <div className="border-b border-slate-100 bg-gradient-to-r from-brand-50/80 to-violet-50/50 px-6 py-5 sm:px-8">
              <p className="text-sm text-slate-600">
                {type === "privacy"
                  ? "This policy explains how we collect, use, and protect your information."
                  : "Please read these terms carefully before using our website and services."}
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {sections.map((section, i) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 px-6 py-8 sm:px-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-lg ring-1 ring-slate-100">
                      {section.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-brand-500">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-lg font-semibold text-slate-900">
                          {section.title}
                        </h2>
                      </div>
                      <div className="prose-legal mt-4 text-[15px] leading-relaxed text-slate-600">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-slate-100 bg-slate-50/50 px-6 py-6 sm:px-8">
              <p className="text-sm text-slate-600">
                Have questions?{" "}
                <Link
                  href="/contact"
                  className="font-medium text-brand-600 hover:text-brand-700"
                >
                  Contact us
                </Link>{" "}
                or email{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="font-medium text-brand-600 hover:text-brand-700"
                >
                  {company.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile TOC */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 lg:hidden">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                activeId === s.id
                  ? "bg-brand-600 text-white"
                  : "bg-white text-slate-600 ring-1 ring-slate-200"
              }`}
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
