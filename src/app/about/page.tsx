import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { company } from "@/lib/company";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${company.shortName} and our e-commerce business.`,
};

const pillars = [
  {
    icon: "🏪",
    title: "E-commerce Retail",
    desc: "Online sales of clothing, apparel, and footwear with a focus on quality and customer satisfaction.",
  },
  {
    icon: "📊",
    title: "Digital Advertising",
    desc: "Google Ads campaigns managed with data-driven optimization and performance tracking.",
  },
  {
    icon: "⚡",
    title: "API Technology",
    desc: "Internal tools powered by Google Ads API for campaign automation and reporting.",
  },
];

const milestones = [
  { year: "2026", event: "Founded as an e-commerce retail business" },
  { year: "2026", event: "Launched Google Ads API integration tools" },
  { year: "Now", event: "Managing multi-channel advertising campaigns at scale" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Our Company"
        subtitle="A modern e-commerce business combining retail expertise with digital advertising technology."
        image={images.team}
        badge={`Est. ${company.founded}`}
      />

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateOnScroll>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900">{company.shortName}</strong> is
                  an e-commerce business specializing in the retail of clothing,
                  apparel, and footwear through online channels.
                </p>
                <p>
                  Beyond our core retail operations, we have built internal
                  advertising technology capabilities powered by the{" "}
                  <strong className="text-slate-800">Google Ads API</strong>.
                  These tools help us manage advertising campaigns, analyze
                  performance data, automate reporting, and optimize marketing
                  spend for our product lines.
                </p>
                <p>
                  Our team combines hands-on e-commerce experience with
                  data-driven advertising expertise to deliver measurable results
                  and sustainable business growth.
                </p>
                <Link
                  href="/ad-tech"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-700"
                >
                  Explore Our Ad Technology →
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-slate-200">
                  <Image
                    src={images.fashion}
                    alt="Our e-commerce business"
                    width={560}
                    height={400}
                    className="h-72 w-full object-cover sm:h-80"
                    quality={90}
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
                  <p className="text-xs text-slate-400">Business Focus</p>
                  <p className="text-sm font-semibold text-slate-800">
                    Fashion & Footwear Retail
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 100}>
                <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md">
                  <span className="text-3xl">{p.icon}</span>
                  <h3 className="mt-3 font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones in building our e-commerce and advertising capabilities."
          />
          <div className="mt-10 space-y-4">
            {milestones.map((m, i) => (
              <AnimateOnScroll key={m.event} delay={i * 80}>
                <div className="flex items-center gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-sm font-bold text-brand-700">
                    {m.year}
                  </span>
                  <p className="text-slate-700">{m.event}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Business Overview"
            subtitle="General information about our company and operations."
            align="left"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: "🏢",
                label: "Company",
                content: <p>{company.shortName}</p>,
              },
              {
                icon: "📋",
                label: "Business Type",
                content: <p>{company.type}</p>,
              },
              {
                icon: "🛍️",
                label: "Business Scope",
                content: <p>{company.scope}</p>,
              },
              {
                icon: "📍",
                label: "Region",
                content: <p>{company.region}</p>,
              },
              {
                icon: "✉️",
                label: "Contact Email",
                content: (
                  <a
                    href={`mailto:${company.email}`}
                    className="text-brand-600 hover:text-brand-700"
                  >
                    {company.email}
                  </a>
                ),
              },
              {
                icon: "🕐",
                label: "Business Hours",
                content: <p>{company.businessHours}</p>,
              },
            ].map((item, i) => (
              <InfoCard
                key={item.label}
                icon={item.icon}
                label={item.label}
                delay={i * 60}
              >
                {item.content}
              </InfoCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
