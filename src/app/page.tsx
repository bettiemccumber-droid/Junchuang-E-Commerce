import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import PlatformMarquee from "@/components/PlatformMarquee";
import BentoGallery from "@/components/BentoGallery";
import GoogleAdsApiSection from "@/components/GoogleAdsApiSection";
import StatsSection from "@/components/StatsSection";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";

const advantages = [
  {
    icon: "🏪",
    title: "E-commerce Expertise",
    desc: "Hands-on experience in clothing and footwear online retail with a customer-first approach.",
    accent: "from-orange-500 to-amber-400",
  },
  {
    icon: "📊",
    title: "Data-Driven Ads",
    desc: "Google Ads campaigns optimized with real-time performance analytics and reporting.",
    accent: "from-brand-500 to-blue-400",
  },
  {
    icon: "🔗",
    title: "API-Powered Tools",
    desc: "Internal automation via Google Ads API for reporting and campaign management.",
    accent: "from-violet-500 to-purple-400",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnership",
    desc: "Committed to sustainable growth and transparent business practices.",
    accent: "from-emerald-500 to-teal-400",
  },
];

const process = [
  { step: "01", title: "Retail & Catalog", desc: "Manage product listings across e-commerce channels." },
  { step: "02", title: "Launch Campaigns", desc: "Deploy targeted Google Ads for product categories." },
  { step: "03", title: "Track & Analyze", desc: "Monitor conversions, ROAS, and audience performance." },
  { step: "04", title: "Optimize & Scale", desc: "Automate bids, budgets, and reporting via API tools." },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <PlatformMarquee />

      <BentoGallery />

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Why Choose Us"
            subtitle="A unique blend of e-commerce operations and advertising technology expertise."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {advantages.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 100}>
                <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className={`h-1.5 bg-gradient-to-r ${item.accent}`} />
                  <div className="flex gap-4 p-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-2xl transition-transform group-hover:scale-110">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="How We Work"
            subtitle="Our end-to-end process from product retail to automated campaign optimization."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <AnimateOnScroll key={item.step} delay={i * 100}>
                <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <span className="text-3xl font-bold text-brand-100">{item.step}</span>
                  <h3 className="mt-2 font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                  {i < process.length - 1 && (
                    <span
                      className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-brand-300 lg:block"
                      aria-hidden
                    >
                      →
                    </span>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <GoogleAdsApiSection />
      <StatsSection />

      <section className="px-4 py-20 sm:px-6">
        <AnimateOnScroll>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-accent-500 via-orange-500 to-amber-500 p-8 text-center text-white shadow-2xl sm:p-14">
            <div className="hero-dot-grid absolute inset-0 opacity-20" />
            <div className="relative">
              <h2 className="text-3xl font-bold">Ready to Grow Your Business?</h2>
              <p className="mx-auto mt-4 max-w-xl text-orange-100">
                Whether you need e-commerce solutions or advertising technology
                expertise — we are here to help.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-orange-600 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="rounded-xl border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
