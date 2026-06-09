import Image from "next/image";
import Link from "next/link";

/**
 * 内页 Hero — 与首页风格统一的渐变 + 网格 + 玻璃卡片
 */
export default function PageHeader({
  title,
  subtitle,
  image,
  badge,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  badge?: string;
}) {
  return (
    <section className="relative overflow-hidden px-4 py-16 text-white sm:px-6 sm:py-20">
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover brightness-[1.05] contrast-[1.05] saturate-[1.05]"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/92 via-brand-900/72 to-brand-900/20" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700" />
      )}

      <div className="hero-mesh absolute inset-0" />
      <div className="hero-dot-grid absolute inset-0" />
      <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <nav className="mb-6 flex items-center gap-2 text-sm text-brand-200">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="text-white">{title}</span>
        </nav>

        <div className="max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
          {badge && (
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium">
              {badge}
            </span>
          )}
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
