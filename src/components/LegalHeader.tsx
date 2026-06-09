import Link from "next/link";

/**
 * Compact header for legal pages (Privacy, Terms)
 */
export default function LegalHeader({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle?: string;
  icon: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-brand-50/40">
      <div className="absolute inset-0 hero-dot-grid opacity-30" />
      <div className="absolute -right-24 top-0 h-48 w-48 rounded-full bg-brand-100/50 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-40 w-40 rounded-full bg-violet-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-14">
        <nav className="flex items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="transition-colors hover:text-brand-600">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="text-slate-600">{title}</span>
        </nav>

        <div className="mt-6 flex items-start gap-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-violet-500 text-2xl shadow-lg shadow-brand-200/50">
            {icon}
          </span>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
