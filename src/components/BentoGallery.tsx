import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";

const cards = [
  {
    span: "sm:col-span-2",
    type: "image" as const,
    src: images.fashion,
    alt: "Fashion retail",
    tag: "Core Business",
    tagColor: "text-orange-300",
    title: "Fashion & Footwear Retail",
    height: "h-72 sm:h-80",
  },
  {
    span: "",
    type: "gradient" as const,
    gradient: "from-brand-600 to-brand-800",
    tag: "Technology",
    title: "Google Ads API Tools",
    desc: "Internal campaign management, automated reporting, and bid optimization.",
    link: "/ad-tech",
    height: "h-72 sm:h-80",
  },
  {
    span: "",
    type: "image" as const,
    src: images.analytics,
    alt: "Analytics dashboard",
    overlay: "bg-brand-900/50",
    title: "Real-Time Analytics",
    height: "h-56",
  },
  {
    span: "",
    type: "image" as const,
    src: images.team,
    alt: "Professional team",
    overlay: "bg-violet-900/50",
    title: "Expert Team",
    height: "h-56",
  },
  {
    span: "",
    type: "image" as const,
    src: images.ecommerce,
    alt: "E-commerce growth",
    overlay: "bg-emerald-900/50",
    title: "Growth Marketing",
    height: "h-56",
  },
];

/**
 * Bento-style image grid for the homepage
 */
export default function BentoGallery() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white px-4 py-20 sm:px-6">
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-100/40 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="What We Do"
          subtitle="From online retail to advanced advertising automation — a complete e-commerce growth stack."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <AnimateOnScroll
              key={card.title}
              delay={i * 80}
              className={card.span}
            >
              {card.type === "gradient" ? (
                <div
                  className={`flex ${card.height} flex-col justify-between rounded-2xl bg-gradient-to-br ${card.gradient} p-6 text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div>
                    <p className="text-sm text-brand-200">{card.tag}</p>
                    <h3 className="mt-2 text-xl font-bold">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-100">
                      {card.desc}
                    </p>
                  </div>
                  <Link
                    href={card.link!}
                    className="inline-flex w-fit items-center gap-1 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur transition-colors hover:bg-white/30"
                  >
                    Explore →
                  </Link>
                </div>
              ) : (
                <div
                  className={`group relative ${card.height} overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200/80 transition-all hover:-translate-y-1 hover:shadow-xl`}
                >
                  <Image
                    src={card.src!}
                    alt={card.alt!}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    quality={90}
                  />
                  <div
                    className={`absolute inset-0 ${
                      card.overlay
                        ? card.overlay
                        : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    }`}
                  />
                  <div className="absolute bottom-0 left-0 p-5 text-white">
                    {card.tag && (
                      <p className={`text-sm font-medium ${card.tagColor}`}>
                        {card.tag}
                      </p>
                    )}
                    <h3
                      className={`font-bold ${card.tag ? "mt-1 text-2xl" : "text-lg"}`}
                    >
                      {card.title}
                    </h3>
                  </div>
                </div>
              )}
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
