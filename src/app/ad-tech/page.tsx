import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import GoogleAdsApiSection from "@/components/GoogleAdsApiSection";
import WorkflowPipeline from "@/components/WorkflowPipeline";
import Accordion from "@/components/Accordion";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { googleAdsApi } from "@/lib/company";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Advertising Technology",
  description:
    "Google Ads API integration for campaign management, reporting, analytics, and workflow automation.",
};

const faqItems = [
  {
    question: "Why does your business need the Google Ads API?",
    answer:
      "As an e-commerce retailer, we manage multiple Google Ads campaigns for our clothing and footwear products. The API allows us to automate campaign management, generate performance reports, and optimize advertising spend at scale — tasks that would be impractical to perform manually.",
  },
  {
    question: "What types of Google Ads campaigns do you manage?",
    answer:
      "We manage Search campaigns for product keywords, Shopping campaigns for our apparel and footwear catalog, Display remarketing for returning visitors, and Performance Max campaigns for broad reach across Google's network.",
  },
  {
    question: "How do you use API data in your business?",
    answer:
      "API data feeds into our internal dashboards for daily performance monitoring, automated bid adjustments, budget pacing alerts, conversion attribution analysis, and weekly ROAS reporting for our product categories.",
  },
  {
    question: "Is the API used for client services or internal operations?",
    answer:
      "Primarily for our internal e-commerce advertising operations. Our tools help our team efficiently manage campaigns, reduce manual work, and make data-driven decisions to grow our online retail business.",
  },
  {
    question: "What compliance measures do you follow?",
    answer:
      "We comply with Google Ads API Terms of Service, maintain secure credential storage, limit API access to authorized team members, and use API data solely for legitimate advertising management purposes.",
  },
];

const techStack = [
  { icon: "🔍", name: "Search Ads API" },
  { icon: "🛍️", name: "Shopping Campaigns" },
  { icon: "📊", name: "Reporting API" },
  { icon: "🎯", name: "Conversion Tracking" },
  { icon: "👥", name: "Audience Management" },
  { icon: "⚡", name: "Batch Operations" },
];

/**
 * 广告技术页面
 */
export default function AdTechPage() {
  return (
    <>
      <PageHeader
        title="Advertising Technology"
        subtitle="Internal tools powered by Google Ads API for campaign management, reporting, and automation."
        image={images.technology}
        badge="Google Ads API"
      />

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateOnScroll>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Our company develops and maintains internal tools used for
                  advertising campaign management, reporting, analytics, and
                  workflow automation.
                </p>
                <p>
                  We utilize the{" "}
                  <strong className="text-slate-800">Google Ads API</strong> to
                  improve operational efficiency and provide data-driven marketing
                  services that support our e-commerce retail operations.
                </p>
                <p>
                  These technologies enable us to manage large-scale advertising
                  campaigns for our clothing and footwear product lines, track
                  conversion performance, generate automated reports, and
                  optimize marketing spend across digital channels.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span
                    key={t.name}
                    className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm"
                  >
                    <span>{t.icon}</span>
                    {t.name}
                  </span>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-slate-200">
                <Image
                  src={images.googleAds}
                  alt="Google Ads API technology"
                  width={600}
                  height={420}
                  className="h-80 w-full object-cover"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-xl border border-white/20 bg-black/40 p-4 backdrop-blur-md">
                    <p className="text-sm text-brand-200">Powered by</p>
                    <p className="text-xl font-bold text-white">Google Ads API</p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-brand-400 to-emerald-400" />
                    </div>
                    <p className="mt-1 text-xs text-slate-400">
                      80% campaign tasks automated
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <GoogleAdsApiSection compact />

      <section className="bg-slate-900 px-4 py-20 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="API Workflow Pipeline"
            subtitle="How we connect Google Ads data to our internal operations"
            dark
          />
          <WorkflowPipeline steps={googleAdsApi.workflow} dark />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common questions about our Google Ads API usage"
          />
          <div className="mt-10">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-brand-600 to-violet-600 p-8 text-center text-white sm:p-12">
            <h2 className="text-xl font-bold sm:text-2xl">
              Interested in Our Ad Technology?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-brand-100">
              Get in touch to learn how we use Google Ads API for e-commerce
              advertising.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-brand-900 transition-all hover:-translate-y-0.5"
            >
              Contact Our Team →
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
