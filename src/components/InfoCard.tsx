import AnimateOnScroll from "./AnimateOnScroll";

/**
 * 信息卡片（联系页、关于页复用）
 */
export default function InfoCard({
  icon,
  label,
  children,
  delay = 0,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <AnimateOnScroll delay={delay}>
      <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-xl transition-transform group-hover:scale-110">
            {icon}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {label}
            </p>
            <div className="mt-2 text-sm text-slate-700 leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
