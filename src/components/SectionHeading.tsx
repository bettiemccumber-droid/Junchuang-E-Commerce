import AnimateOnScroll from "./AnimateOnScroll";

/**
 * 区块标题组件
 */
export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <AnimateOnScroll>
      <div className={align === "center" ? "text-center" : ""}>
        <h2
          className={`text-2xl font-bold sm:text-3xl ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-3 leading-relaxed ${
              dark ? "text-slate-400" : "text-slate-600"
            } ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </AnimateOnScroll>
  );
}
