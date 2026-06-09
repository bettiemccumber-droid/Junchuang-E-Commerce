import AnimateOnScroll from "./AnimateOnScroll";
import AnimatedCounter from "./AnimatedCounter";
import SectionHeading from "./SectionHeading";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Products Listed",
    icon: "🛍️",
    color: "text-brand-400",
  },
  {
    value: 48,
    suffix: "",
    label: "Active Ad Campaigns",
    icon: "📢",
    color: "text-violet-400",
  },
  {
    value: 127,
    suffix: "%",
    label: "Avg. ROI Growth",
    icon: "📈",
    color: "text-emerald-400",
  },
  {
    value: 15,
    suffix: "+",
    label: "Platform Integrations",
    icon: "🔗",
    color: "text-accent-400",
  },
];

/**
 * Animated stats section for the homepage
 */
export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-slate-900 px-4 py-20 text-white sm:px-6">
      <div className="hero-mesh absolute inset-0 opacity-60" />
      <div className="hero-dot-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          title="Driving Results Through Data"
          subtitle="Measurable growth across our e-commerce and advertising operations."
          dark
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 100}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
                <span className="text-2xl">{stat.icon}</span>
                <p className={`mt-4 text-4xl font-bold ${stat.color}`}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-400 to-violet-400 transition-all duration-700 group-hover:w-full"
                    style={{ width: `${60 + i * 10}%` }}
                  />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
