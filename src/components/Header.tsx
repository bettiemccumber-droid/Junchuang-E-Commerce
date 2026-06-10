"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company } from "@/lib/company";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ad-tech", label: "Ad Technology" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

/**
 * 全站顶部导航栏
 */
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-violet-500 text-sm font-bold text-white shadow-md transition-transform group-hover:scale-105">
            JC
          </span>
          <div className="flex flex-col">
            <span className="text-base font-bold text-brand-800">
              {company.shortName}
            </span>
            <span className="hidden text-[11px] text-slate-500 sm:block">
              E-commerce & Google Ads API
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                pathname === item.href ||
                (item.href === "/blog" && pathname.startsWith("/blog"))
                  ? "bg-brand-50 text-brand-700"
                  : "text-slate-600 hover:bg-slate-100 hover:text-brand-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          Contact Us
        </Link>
      </div>

      <nav className="flex gap-1 overflow-x-auto border-t border-slate-100 px-4 py-2 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium ${
              pathname === item.href ||
              (item.href === "/blog" && pathname.startsWith("/blog"))
                ? "bg-brand-100 text-brand-700"
                : "text-slate-600"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
