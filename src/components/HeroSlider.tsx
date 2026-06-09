"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { images } from "@/lib/images";

const slides = [
  {
    image: images.hero[0],
    tag: "E-commerce Retail",
    title: "Fashion & Footwear Online Store",
    desc: "Quality clothing and shoes delivered to customers worldwide.",
    stat: { label: "Products Listed", value: "500+" },
  },
  {
    image: images.hero[1],
    tag: "Digital Marketing",
    title: "Data-Driven Advertising",
    desc: "Optimize campaigns with analytics and performance insights.",
    stat: { label: "Active Campaigns", value: "48" },
  },
  {
    image: images.hero[2],
    tag: "Google Ads API",
    title: "Automated Campaign Management",
    desc: "Internal tools powered by Google Ads API for efficient operations.",
    stat: { label: "Campaign ROI", value: "+127%" },
  },
];

/**
 * 首页 Hero — 全幅背景图 + 渐变融接 + 玻璃质感内容区
 */
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        setAnimKey((k) => k + 1);
        return next;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
    setAnimKey((k) => k + 1);
  };

  const slide = slides[current];

  return (
    <section className="relative min-h-[580px] overflow-hidden bg-brand-950 sm:min-h-[640px]">
      {/* 全幅背景轮播 */}
      {slides.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 ${i === current ? "animate-ken-burns" : ""}`}
          >
            <Image
              src={s.image.src}
              alt={s.image.alt}
              fill
              priority={i === 0}
              className="object-cover brightness-[1.05] contrast-[1.05] saturate-[1.08]"
              style={{ objectPosition: s.image.position }}
              sizes="100vw"
              quality={95}
            />
          </div>
        </div>
      ))}

      {/* 渐变遮罩：左侧深、右侧透，自然过渡 */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-900/75 to-brand-900/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-brand-950/20" />
      <div className="hero-mesh absolute inset-0" />
      <div className="hero-dot-grid absolute inset-0" />

      {/* 装饰光晕 */}
      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute right-1/4 top-1/3 h-48 w-48 rounded-full bg-violet-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[580px] max-w-6xl items-center px-4 py-16 sm:min-h-[640px] sm:px-6">
        <div className="grid w-full items-center gap-10 lg:grid-cols-12">
          {/* 左侧内容 — 玻璃卡片 */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
              <div key={animKey} className="animate-slide-up-fade">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-accent-400" />
                  {slide.tag}
                </span>

                <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                  {slide.title}
                </h1>

                <p className="mt-4 max-w-md text-base leading-relaxed text-slate-200 sm:text-lg">
                  {slide.desc}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-900 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Contact Us
                </Link>
                <Link
                  href="/ad-tech"
                  className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/15"
                >
                  Google Ads API
                </Link>
              </div>

              {/* 缩略图导航 */}
              <div className="mt-8 flex items-center gap-3">
                {slides.map((s, i) => (
                  <button
                    key={s.title}
                    type="button"
                    aria-label={`View slide: ${s.title}`}
                    onClick={() => goTo(i)}
                    className={`group relative h-14 w-20 overflow-hidden rounded-lg ring-2 transition-all sm:h-16 sm:w-24 ${
                      i === current
                        ? "ring-white shadow-lg"
                        : "ring-white/20 opacity-60 hover:opacity-90"
                    }`}
                  >
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                      sizes="96px"
                    />
                    {i === current && (
                      <div className="absolute inset-0 border-2 border-white/50" />
                    )}
                  </button>
                ))}
                <div className="ml-2 hidden text-xs text-slate-400 sm:block">
                  {current + 1} / {slides.length}
                </div>
              </div>
            </div>
          </div>

          {/* 右侧浮动数据卡片 */}
          <div className="hidden lg:col-span-6 lg:block xl:col-span-7">
            <div className="relative flex justify-end">
              <div
                key={`stat-${animKey}`}
                className="animate-slide-up-fade rounded-2xl border border-white/20 bg-black/30 p-6 backdrop-blur-xl"
                style={{ animationDelay: "0.1s" }}
              >
                <p className="text-sm text-slate-300">{slide.stat.label}</p>
                <p className="mt-1 text-4xl font-bold text-white">
                  {slide.stat.value}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brand-400 to-emerald-400" />
                  </div>
                  <span className="text-xs text-emerald-300">Growing</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-8 animate-float rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                <p className="text-xs text-brand-200">Platforms</p>
                <p className="text-sm font-semibold text-white">Google Ads API</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
