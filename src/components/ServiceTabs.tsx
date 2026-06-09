"use client";

import Image from "next/image";
import { useState } from "react";
import { images } from "@/lib/images";

const tabs = [
  {
    id: "retail",
    label: "E-commerce",
    icon: "🏪",
    color: "from-orange-500 to-amber-500",
    image: images.fashion,
    title: "E-commerce Retail",
    desc: "Online retail of clothing, apparel, and footwear.",
    items: [
      "Clothing & Apparel Sales",
      "Footwear Retail",
      "Online Store Operations",
      "Product Catalog Management",
    ],
  },
  {
    id: "ads",
    label: "Advertising",
    icon: "📢",
    color: "from-brand-600 to-blue-400",
    image: images.ecommerce,
    title: "Digital Advertising",
    desc: "Google Ads campaigns for product visibility and sales.",
    items: [
      "Google Ads Campaign Planning",
      "Campaign Optimization",
      "Shopping & Search Ads",
      "Audience Targeting",
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: "📊",
    color: "from-emerald-500 to-teal-400",
    image: images.analytics,
    title: "Marketing Analytics",
    desc: "Data-driven insights for smarter marketing decisions.",
    items: [
      "Performance Data Reporting",
      "Conversion Tracking",
      "ROAS & ROI Analysis",
      "A/B Testing Insights",
    ],
  },
  {
    id: "api",
    label: "API & Automation",
    icon: "⚡",
    color: "from-violet-500 to-purple-400",
    image: images.technology,
    title: "API & Automation",
    desc: "Google Ads API integration for campaign automation.",
    items: [
      "Google Ads API Integration",
      "Automated Reporting",
      "Bid & Budget Automation",
      "Workflow Optimization",
    ],
  },
];

/**
 * 服务 Tab 切换面板（带动画过渡）
 */
export default function ServiceTabs() {
  const [active, setActive] = useState("retail");
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              active === tab.id
                ? "bg-brand-600 text-white shadow-lg shadow-brand-200"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-brand-300"
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div
        key={active}
        className="mt-8 animate-slide-up-fade overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200"
      >
        <div className="grid lg:grid-cols-2">
          <div
            className={`relative min-h-[280px] bg-gradient-to-br ${current.color} p-8 lg:min-h-[360px]`}
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover opacity-25"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />
            <div className="relative">
              <span className="text-3xl">{current.icon}</span>
              <h3 className="mt-3 text-2xl font-bold text-white">{current.title}</h3>
              <p className="mt-2 text-sm text-white/80">{current.desc}</p>
              <ul className="mt-6 space-y-3">
                {current.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-sm"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/25 text-xs">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative min-h-[240px] lg:min-h-[360px]">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
              sizes="50vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}
