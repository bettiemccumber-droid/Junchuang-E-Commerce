"use client";

import { useState } from "react";
import { company } from "@/lib/company";

/**
 * 联系表单
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = (name: string) =>
    `mt-2 w-full rounded-xl border bg-slate-50/50 px-4 py-3 text-sm transition-all outline-none ${
      focused === name
        ? "border-brand-400 bg-white ring-4 ring-brand-100"
        : "border-slate-200 hover:border-slate-300"
    }`;

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 p-8 text-center">
        <span className="text-4xl">✅</span>
        <p className="mt-4 text-lg font-semibold text-emerald-900">
          Thank you for your message!
        </p>
        <p className="mt-2 text-sm text-emerald-700">
          We will respond within 1–2 business days. Or email us at{" "}
          <a
            href={`mailto:${company.email}`}
            className="font-medium underline hover:text-emerald-900"
          >
            {company.email}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-slate-700">
          Name <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          className={inputClass("name")}
          onFocus={() => setFocused("name")}
          onBlur={() => setFocused(null)}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputClass("email")}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="How can we help you?"
          className={inputClass("message")}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
      >
        Send Message →
      </button>
    </form>
  );
}
