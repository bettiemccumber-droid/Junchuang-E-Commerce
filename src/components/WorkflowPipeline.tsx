import AnimateOnScroll from "./AnimateOnScroll";

/**
 * API 工作流管道可视化
 */
export default function WorkflowPipeline({
  steps,
  dark = false,
}: {
  steps: readonly string[];
  dark?: boolean;
}) {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, i) => (
        <AnimateOnScroll key={step} delay={i * 100}>
          <div className="relative">
            <div
              className={`rounded-2xl border p-5 transition-all hover:-translate-y-1 ${
                dark
                  ? "border-white/10 bg-white/5 backdrop-blur hover:bg-white/10"
                  : "border-slate-200 bg-white shadow-sm hover:shadow-md"
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 text-sm font-bold text-white shadow">
                {i + 1}
              </div>
              <p
                className={`mt-4 text-sm font-medium leading-snug ${
                  dark ? "text-slate-200" : "text-slate-700"
                }`}
              >
                {step}
              </p>
            </div>
            {i < steps.length - 1 && (
              <span
                className={`absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-lg lg:block ${
                  dark ? "text-brand-400" : "text-brand-300"
                }`}
                aria-hidden
              >
                →
              </span>
            )}
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
}
