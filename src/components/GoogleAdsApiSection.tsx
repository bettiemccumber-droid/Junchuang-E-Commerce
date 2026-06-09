"use client";

import Image from "next/image";
import Link from "next/link";
import { googleAdsApi } from "@/lib/company";
import { images } from "@/lib/images";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";

/**
 * Google Ads API showcase section (reused across pages)
 */
export default function GoogleAdsApiSection({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section
      className={`relative overflow-hidden ${compact ? "py-14" : "py-20"} px-4 sm:px-6`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50/80 via-white to-violet-50/30" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateOnScroll>
            <span className="inline-block rounded-full bg-brand-100 px-4 py-1 text-sm font-semibold text-brand-700">
              Google Ads API
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              {googleAdsApi.title}
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              {googleAdsApi.summary}
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              As an e-commerce business, we rely on the Google Ads API to manage
              advertising campaigns for our clothing and footwear products at
              scale. Our internal tools connect directly to Google Ads accounts
              to automate reporting, optimize bids, and improve return on ad
              spend.
            </p>

            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {googleAdsApi.workflow.map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm shadow-sm backdrop-blur"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-violet-500 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>

            {!compact && (
              <Link
                href="/ad-tech"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg"
              >
                Learn About Our Ad Technology
                <span aria-hidden>→</span>
              </Link>
            )}
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-slate-200">
                <Image
                  src={images.googleAds}
                  alt="Advertising technology and data analytics"
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover sm:h-80"
                  quality={90}
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-xl border border-slate-100 bg-white p-4 shadow-xl">
                <p className="text-xs text-slate-500">API Requests / Day</p>
                <p className="text-2xl font-bold text-brand-700">2,400+</p>
              </div>
              <div className="absolute -right-4 -top-4 rounded-xl bg-gradient-to-br from-violet-500 to-brand-600 p-4 text-white shadow-xl">
                <p className="text-xs opacity-80">Active Campaigns</p>
                <p className="text-2xl font-bold">48</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="mt-16">
          {!compact && (
            <SectionHeading
              title="API Use Cases"
              subtitle="How we apply the Google Ads API across our advertising operations."
            />
          )}
          <div
            className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${compact ? "" : "mt-10"}`}
          >
            {googleAdsApi.useCases.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-2xl transition-colors group-hover:bg-brand-50">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900 group-hover:text-brand-700">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
