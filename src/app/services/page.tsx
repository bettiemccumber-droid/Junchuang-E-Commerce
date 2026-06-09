import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ServiceTabs from "@/components/ServiceTabs";
import GoogleAdsApiSection from "@/components/GoogleAdsApiSection";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "E-commerce retail, Google Ads management, marketing analytics, and API automation services.",
};

const highlights = [
  { icon: "🛒", value: "500+", label: "Products" },
  { icon: "📢", value: "48", label: "Campaigns" },
  { icon: "📈", value: "127%", label: "ROI Growth" },
  { icon: "⚡", value: "2.4k", label: "API Calls/Day" },
];

/**
 * 服务页面
 */
export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive e-commerce and digital marketing solutions — from retail to Google Ads API automation."
        image={images.ecommerce}
        badge="Full-Stack E-commerce"
      />

      <section className="border-b border-slate-100 bg-white px-4 py-10 sm:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-4">
          {highlights.map((h, i) => (
            <AnimateOnScroll key={h.label} delay={i * 80}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center transition-all hover:-translate-y-0.5 hover:shadow-md">
                <span className="text-2xl">{h.icon}</span>
                <p className="mt-2 text-2xl font-bold text-brand-700">{h.value}</p>
                <p className="text-xs text-slate-500">{h.label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Service Categories"
            subtitle="We offer a full range of services from online retail operations to advanced advertising technology integration."
          />
          <div className="mt-12">
            <ServiceTabs />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-slate-900 px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <AnimateOnScroll>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm">
                Google Ads API
              </span>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                API & Automation Services
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                A core part of our advertising operations. We integrate with the
                Google Ads API to automate campaign reporting, manage bids and
                budgets programmatically, sync product data for Shopping
                campaigns, and track e-commerce conversions.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Automated daily performance reports",
                  "Bulk campaign & ad group management",
                  "Keyword performance analysis",
                  "Shopping feed & product ad optimization",
                  "Conversion tracking & attribution",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg bg-white/5 px-4 py-2.5 text-sm backdrop-blur-sm"
                  >
                    <span className="text-emerald-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/ad-tech"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-900 transition-all hover:-translate-y-0.5"
              >
                Learn More →
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                <Image
                  src={images.analytics}
                  alt="Marketing analytics"
                  width={560}
                  height={380}
                  className="h-72 w-full object-cover lg:h-80"
                  quality={90}
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <GoogleAdsApiSection compact />
    </>
  );
}
