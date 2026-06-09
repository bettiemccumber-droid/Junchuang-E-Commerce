const platforms = [
  { name: "Google Ads", icon: "🔍" },
  { name: "Google Ads API", icon: "⚡" },
  { name: "Shopping Campaigns", icon: "🛍️" },
  { name: "Search Ads", icon: "📢" },
  { name: "Display Network", icon: "🖼️" },
  { name: "Conversion Tracking", icon: "📊" },
  { name: "Performance Max", icon: "🚀" },
  { name: "Remarketing", icon: "🎯" },
  { name: "E-commerce Analytics", icon: "📈" },
  { name: "Campaign Automation", icon: "🤖" },
];

/**
 * 平台标签滚动跑马灯（两侧渐隐）
 */
export default function PlatformMarquee() {
  const doubled = [...platforms, ...platforms];

  return (
    <div className="relative overflow-hidden border-y border-slate-200/80 bg-gradient-to-r from-slate-50 via-white to-slate-50 py-5">
      <div className="marquee-fade overflow-hidden">
        <div className="flex w-max animate-marquee gap-4">
          {doubled.map((item, i) => (
            <span
              key={`${item.name}-${i}`}
              className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-slate-200/80 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-base">{item.icon}</span>
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
