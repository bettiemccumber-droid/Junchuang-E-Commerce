/**
 * Public company information for the website (English only).
 * License-specific details are kept private and not displayed.
 */
export const company = {
  shortName: "Junchuang E-Commerce",
  tagline: "E-commerce & Google Ads API Solutions",
  type: "E-commerce Retail & Digital Marketing",
  region: "Wenzhou, Zhejiang, China",
  scope:
    "Retail of clothing and apparel; retail of shoes and hats; digital advertising management and marketing technology services.",
  founded: "2026",
  email: "bettiemccumber@gmail.com",
  privacyEmail: "bettiemccumber@gmail.com",
  businessHours: "Monday – Friday, 09:00 – 18:00 (UTC+8)",
} as const;

/**
 * Google Ads API business use cases for site display and API application.
 */
export const googleAdsApi = {
  title: "Google Ads API Integration",
  summary:
    "We use the Google Ads API to power internal campaign management tools that support our e-commerce advertising operations.",
  useCases: [
    {
      title: "Campaign Management",
      description:
        "Programmatically create, update, and pause Search, Shopping, and Display campaigns for our clothing and footwear product lines.",
      icon: "📊",
    },
    {
      title: "Performance Reporting",
      description:
        "Automated daily and weekly reports on impressions, clicks, conversions, and ROAS pulled directly from Google Ads accounts.",
      icon: "📈",
    },
    {
      title: "Keyword & Bid Optimization",
      description:
        "Data-driven keyword research, bid adjustments, and budget allocation based on real-time campaign performance data.",
      icon: "🎯",
    },
    {
      title: "Conversion Tracking",
      description:
        "Integration with e-commerce conversion tracking to measure product sales attributed to Google Ads campaigns.",
      icon: "🛒",
    },
    {
      title: "Audience Management",
      description:
        "Build and manage remarketing audiences for returning customers and high-intent shoppers across our product categories.",
      icon: "👥",
    },
    {
      title: "Workflow Automation",
      description:
        "Automated alerts, scheduled reports, and bulk operations to reduce manual campaign management overhead.",
      icon: "⚡",
    },
  ],
  workflow: [
    "Connect Google Ads accounts via API",
    "Sync campaign & product data",
    "Analyze performance metrics",
    "Optimize bids & budgets",
    "Generate automated reports",
  ],
} as const;
