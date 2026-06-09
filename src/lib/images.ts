/**
 * 网站图片资源（Unsplash 免费图库）
 * Hero 图统一暖色调、高分辨率，风格一致
 */
const heroBase = "w=2400&q=95&auto=format&fit=crop";

export const images = {
  hero: [
    {
      src: `https://images.unsplash.com/photo-1441986300917-64674bd600d8?${heroBase}`,
      alt: "Modern fashion retail boutique",
      position: "center",
    },
    {
      src: `https://images.unsplash.com/photo-1542291026-7eec264c27ff?${heroBase}`,
      alt: "Premium footwear e-commerce",
      position: "center right",
    },
    {
      src: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?${heroBase}`,
      alt: "Marketing analytics and campaign data",
      position: "center",
    },
  ],
  ecommerce:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=90&auto=format&fit=crop",
  fashion:
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=90&auto=format&fit=crop",
  analytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=90&auto=format&fit=crop",
  technology:
    "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=90&auto=format&fit=crop",
  googleAds:
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=90&auto=format&fit=crop",
} as const;
