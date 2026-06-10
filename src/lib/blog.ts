import { images } from "@/lib/images";

/**
 * 博客文章内嵌图片
 */
export type BlogImage = {
  src: string;
  alt: string;
  caption?: string;
};

/**
 * 博客文章章节
 */
export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
  image?: BlogImage;
};

/**
 * 博客文章完整数据结构
 */
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: BlogImage;
  publishedAt: string;
  category: string;
  author: string;
  readTimeMinutes: number;
  sections: BlogSection[];
};

/**
 * 全站博客文章数据
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "google-shopping-campaigns-footwear-sales",
    title: "How Google Shopping Campaigns Drive Footwear Sales",
    excerpt:
      "A practical guide to structuring Shopping campaigns, optimizing product feeds, and scaling profitable footwear sales through Google Ads.",
    coverImage: {
      src: images.blog.shoppingFootwear,
      alt: "Premium athletic footwear displayed for online retail",
    },
    publishedAt: "2026-03-15",
    category: "Google Ads",
    author: "Junchuang Marketing Team",
    readTimeMinutes: 9,
    sections: [
      {
        id: "why-shopping-matters",
        title: "Why Shopping Campaigns Matter for Footwear",
        paragraphs: [
          "Footwear is one of the most competitive categories in e-commerce. Shoppers compare styles, sizes, and prices across dozens of retailers before making a purchase. Google Shopping campaigns place your products directly in front of high-intent buyers at the exact moment they are searching for sneakers, boots, sandals, or specialty shoes.",
          "Unlike standard Search ads that rely on text headlines, Shopping ads show product images, prices, brand names, and star ratings. For footwear retailers, this visual format is a significant advantage. A shopper searching for \"white leather sneakers size 42\" can immediately see whether your listing matches their needs without clicking through to a generic landing page.",
          "At Junchuang E-Commerce, we manage Shopping campaigns across multiple footwear product lines. Our experience shows that well-structured Shopping campaigns consistently deliver lower cost-per-acquisition than broad Search campaigns for product-specific queries, especially when product feeds are maintained with accurate size, color, and material attributes.",
        ],
      },
      {
        id: "feed-foundation",
        title: "Building a High-Quality Product Feed",
        paragraphs: [
          "The product feed is the foundation of every Shopping campaign. Google uses feed data to determine which products appear for which queries, so feed quality directly impacts visibility and click-through rates. For footwear, the most critical attributes are size, color, gender, age group, brand, GTIN, and material.",
          "Size mapping is particularly important. Different markets use different sizing conventions — EU, US, UK, and CM measurements must be clearly labeled. Missing or inconsistent size data causes products to be disapproved or shown to the wrong audience. We recommend maintaining a master size chart and mapping every SKU to standardized values in the feed.",
          "Product titles should follow a consistent formula: Brand + Product Type + Key Attribute + Color + Size Range. For example, \"Nike Air Max 90 Men's Running Shoes White EU 40-46\" performs better than a vague title like \"Great Running Shoes.\" High-resolution images with a white or neutral background improve approval rates and click-through performance.",
        ],
        image: {
          src: images.blog.shoppingProductFeed,
          alt: "E-commerce product catalog and footwear inventory management",
          caption:
            "Accurate product feeds with size, color, and GTIN data are essential for Shopping ad approval and visibility.",
        },
      },
      {
        id: "campaign-structure",
        title: "Campaign Structure and Bidding Strategy",
        paragraphs: [
          "A common mistake is running all footwear SKUs in a single Shopping campaign with one bid. This approach treats bestsellers and slow-moving inventory identically, wasting budget on low-margin products while underfunding proven winners. We structure campaigns by performance tier: Hero Products, Core Catalog, and Long-Tail/New Arrivals.",
          "Hero Products — your top 20% of SKUs by revenue — get dedicated campaigns with higher target ROAS thresholds and more aggressive budgets. Core Catalog items run in a standard Shopping campaign segmented by category (sneakers, boots, sandals, accessories). Long-Tail and New Arrivals use lower bids with Performance Max or standard Shopping to gather conversion data before promotion.",
          "For bidding, we start with Maximize Conversion Value with a target ROAS once sufficient conversion history exists (typically 30+ conversions per month per campaign). Before that threshold, Maximize Clicks with a CPC cap helps gather data. Seasonal footwear — winter boots in Q4, sandals in Q2 — requires proactive budget shifts rather than reactive adjustments after performance drops.",
        ],
      },
      {
        id: "optimization-tactics",
        title: "Optimization Tactics That Move the Needle",
        paragraphs: [
          "Search terms reporting in Shopping campaigns reveals the actual queries triggering your ads. Negative keywords are essential for filtering out irrelevant traffic such as \"free shoes,\" \"shoe repair,\" or competitor brand names you do not carry. We review search terms weekly and add negatives at the campaign level to prevent budget leakage.",
          "Product-level performance data helps identify which SKUs deserve more exposure. Items with high click volume but zero conversions may have pricing, landing page, or sizing issues. Items with strong ROAS but low impressions may need bid increases or feed title improvements. This product-level analysis is where the Google Ads API becomes invaluable — automated daily reports surface these patterns without manual spreadsheet work.",
          "Promotion feeds and sale price annotations can boost click-through rates during seasonal events. Aligning Shopping promotions with on-site discounts ensures consistency and builds shopper trust. We also test custom labels in feeds (margin tier, season, stock level) to enable granular bid adjustments through campaign priorities or feed rules.",
        ],
      },
      {
        id: "measuring-success",
        title: "Measuring Success Beyond Click-Through Rate",
        paragraphs: [
          "Click-through rate alone does not determine Shopping campaign health. The metrics that matter most for footwear are conversion rate, average order value, return rate, and ROAS — measured at the product and category level, not just the campaign level.",
          "Integrate Google Ads conversion tracking with your e-commerce platform's purchase events. Enhanced conversions and cart data sharing improve attribution accuracy, especially on mobile where cookie limitations affect tracking. We also import offline return data where possible to calculate true ROAS after refunds and exchanges.",
          "A healthy footwear Shopping program typically achieves ROAS between 400% and 800% depending on margin structure and brand positioning. The goal is not maximizing ROAS at the expense of volume, but finding the optimal balance where incremental spend still generates profitable revenue. Regular feed audits, search term reviews, and product-level bid tuning keep campaigns performing at that equilibrium.",
        ],
      },
    ],
  },
  {
    slug: "data-driven-ppc-strategy-fashion-retail",
    title: "Building a Data-Driven PPC Strategy for Fashion Retail",
    excerpt:
      "Learn how fashion retailers can use audience insights, seasonal planning, and structured testing to build PPC campaigns that scale profitably.",
    coverImage: {
      src: images.blog.ppcFashion,
      alt: "Fashion retail clothing display in a modern boutique",
    },
    publishedAt: "2026-03-08",
    category: "E-commerce",
    author: "Junchuang Marketing Team",
    readTimeMinutes: 10,
    sections: [
      {
        id: "fashion-ppc-landscape",
        title: "The Fashion PPC Landscape in 2026",
        paragraphs: [
          "Fashion retail presents unique challenges for paid search. Trends shift quickly, inventory turns over seasonally, and customer preferences vary widely by demographics, geography, and occasion. A data-driven PPC strategy accounts for these variables by grounding every decision — from keyword selection to budget allocation — in measurable performance data.",
          "The fashion buyer journey is rarely linear. A customer might discover your brand through a Shopping ad, research reviews through a brand Search ad, and convert days later through a remarketing Display ad. Understanding this multi-touch journey is critical for setting appropriate attribution windows and avoiding premature budget cuts on upper-funnel campaigns.",
          "At Junchuang, we operate PPC across clothing and footwear categories. Our approach combines Google Search, Shopping, Performance Max, and Display remarketing into a coordinated system where each channel has a defined role rather than competing for the same conversions.",
        ],
      },
      {
        id: "keyword-intent",
        title: "Keyword Strategy and Intent Segmentation",
        paragraphs: [
          "Fashion keywords fall into distinct intent categories. Navigational queries (\"your brand name + dress\") indicate existing brand awareness. Category queries (\"women's linen blouse\") signal browsing intent. Transactional queries (\"buy black cocktail dress size M\") indicate readiness to purchase. Each category requires different ad copy, landing pages, and bid levels.",
          "We build keyword architectures that mirror the product catalog structure. Top-level ad groups align with product categories (dresses, outerwear, accessories), while sub-groups target specific attributes (material, occasion, style). This structure improves Quality Score by ensuring tight alignment between keywords, ads, and landing pages.",
          "Negative keyword management is ongoing work in fashion PPC. Generic terms like \"fashion\" or \"style\" attract low-intent traffic. Seasonal negatives prevent wasted spend — there is no reason to show ads for \"summer dresses\" in December unless you operate in the Southern Hemisphere or carry year-round inventory.",
        ],
        image: {
          src: images.blog.ppcDashboard,
          alt: "Marketing analytics dashboard showing campaign performance metrics",
          caption:
            "Segmenting campaigns by intent and category makes performance data actionable for fashion retailers.",
        },
      },
      {
        id: "seasonal-planning",
        title: "Seasonal Planning and Budget Pacing",
        paragraphs: [
          "Fashion PPC is inherently seasonal. Spring collections launch in January-February, back-to-school peaks in August, and holiday gifting drives November-December spend. A data-driven strategy maps budget allocation to these cycles months in advance, using historical year-over-year data as the baseline.",
          "We create quarterly budget plans with weekly pacing targets. During peak seasons, campaigns switch from target ROAS bidding to maximize conversion value to capture demand. During off-peak periods, focus shifts to brand building, new customer acquisition, and clearing remaining inventory with adjusted ROAS targets.",
          "Weather-driven demand adds another layer. Unseasonably warm autumns reduce jacket sales; unexpected cold snaps boost outerwear demand. Monitoring weather patterns alongside campaign data helps adjust bids proactively. Automated rules can increase budgets when conversion rates exceed thresholds and decrease spend when performance drops below guardrails.",
        ],
      },
      {
        id: "creative-testing",
        title: "Creative Testing and Ad Copy Frameworks",
        paragraphs: [
          "In fashion, creative is as important as targeting. Responsive Search Ads should include variations that speak to different motivations: quality and craftsmanship, affordability, sustainability, trend relevance, and urgency (limited stock, sale ending). Each motivation resonates with different audience segments.",
          "We run structured creative tests with one variable changed at a time — headline angle, description focus, or call-to-action phrasing. Statistical significance requires sufficient impression volume, so tests run for at least two weeks or 1,000 impressions per variant, whichever comes first.",
          "Ad extensions enhance visibility and relevance. Sitelinks to new arrivals, sale pages, and size guides improve click-through rates. Price extensions work well for fashion when sale items are highlighted. Image extensions showcase flagship products directly in Search results, bridging the gap between text ads and the visual nature of fashion shopping.",
        ],
      },
      {
        id: "data-infrastructure",
        title: "Building the Data Infrastructure",
        paragraphs: [
          "A data-driven PPC strategy requires reliable data infrastructure. At minimum, you need conversion tracking with transaction values, enhanced conversions for improved accuracy, Google Analytics 4 linked to Google Ads, and a consistent UTM parameter scheme for non-Google channels.",
          "We pull daily campaign data through the Google Ads API into internal dashboards that combine ad spend with e-commerce platform revenue, return rates, and margin data. This unified view reveals true profitability — a campaign with 600% ROAS on ad platform data might drop to 350% after accounting for 25% return rates on certain categories.",
          "The ultimate goal is a feedback loop: data informs strategy, strategy produces campaigns, campaigns generate data, and the cycle repeats with increasing precision. Fashion retailers who invest in this infrastructure outperform competitors who manage PPC reactively, adjusting bids only when performance visibly deteriorates.",
        ],
      },
    ],
  },
  {
    slug: "automating-campaign-reports-google-ads-api",
    title: "Automating Campaign Reports with the Google Ads API",
    excerpt:
      "Discover how to replace manual spreadsheet exports with automated Google Ads API pipelines for daily reporting, alerts, and bulk operations.",
    coverImage: {
      src: images.blog.apiAutomation,
      alt: "Developer workspace with code for API integration",
    },
    publishedAt: "2026-02-28",
    category: "Ad Technology",
    author: "Junchuang Marketing Team",
    readTimeMinutes: 11,
    sections: [
      {
        id: "manual-reporting-limits",
        title: "The Limits of Manual Campaign Reporting",
        paragraphs: [
          "Most e-commerce teams start with manual reporting: log into Google Ads, export CSV files, paste into spreadsheets, and build pivot tables. This approach works when you manage one or two accounts with a handful of campaigns. It breaks down quickly as account complexity grows.",
          "Manual exports are point-in-time snapshots. By the time a weekly report is compiled, the data is already seven days stale. Bid adjustments, budget reallocation, and creative refreshes happen in real time, but reporting lag means decisions are always based on outdated information. For fast-moving e-commerce categories like fashion and footwear, this lag directly costs revenue.",
          "Human error compounds the problem. Copy-paste mistakes, formula breaks, and inconsistent metric definitions across team members lead to conflicting numbers and eroded trust in the data. Automation through the Google Ads API eliminates these issues by pulling standardized metrics on a fixed schedule.",
        ],
      },
      {
        id: "api-capabilities",
        title: "What the Google Ads API Enables",
        paragraphs: [
          "The Google Ads API provides programmatic access to nearly every function available in the web interface. For reporting, the Google Ads Query Language (GAQL) lets you SELECT specific fields FROM resources like campaign, ad_group, keyword_view, and shopping_performance_view WHERE conditions filter the results.",
          "Beyond read operations, the API supports write operations: creating campaigns, updating bids, pausing underperforming ads, adding negative keywords, and modifying budgets. This read-write capability enables full workflow automation — not just reporting, but action based on report findings.",
          "Authentication uses OAuth 2.0 with a developer token, client ID, client secret, and refresh token. For internal tools used by a single organization, the standard access level is sufficient. The API has daily operation limits, but these are generous enough for most e-commerce operations running hourly or daily sync jobs.",
        ],
        image: {
          src: images.blog.apiReporting,
          alt: "Business analytics charts and performance reporting on screen",
          caption:
            "API-driven reports can combine Google Ads metrics with internal e-commerce data in a single dashboard.",
        },
      },
      {
        id: "reporting-pipeline",
        title: "Designing an Automated Reporting Pipeline",
        paragraphs: [
          "Our internal reporting pipeline follows a four-stage architecture: Extract, Transform, Store, and Present. The Extract stage runs scheduled GAQL queries against connected Google Ads accounts. The Transform stage normalizes metrics, calculates derived values (ROAS, CPA, profit margin), and joins ad data with e-commerce revenue.",
          "The Store stage writes processed data to a database or data warehouse. We use daily granularity with campaign, ad group, and product-level dimensions. Historical data retention of at least 13 months enables year-over-year comparisons for seasonal businesses.",
          "The Present stage renders dashboards and sends automated alerts. Daily email summaries highlight campaigns that exceeded or fell below ROAS targets. Weekly deep-dive reports break down performance by product category, device, and geography. Monthly executive summaries track trend lines and budget utilization.",
        ],
      },
      {
        id: "bulk-operations",
        title: "Bulk Operations and Workflow Automation",
        paragraphs: [
          "Reporting is only half the value. The Google Ads API enables bulk operations that would take hours manually. Examples include: pausing all keywords with zero conversions and spend above a threshold, applying seasonal bid modifiers across campaign sets, updating ad copy across multiple ad groups, and creating new Shopping campaigns from product feed segments.",
          "We implement guardrails for automated write operations. Every automated change is logged with a timestamp, the rule that triggered it, and the before/after values. Changes that exceed defined thresholds — such as bid adjustments greater than 20% — require human approval before execution.",
          "Scheduled reports also trigger workflow actions. If a campaign's ROAS drops below target for three consecutive days, an alert notifies the account manager and a draft optimization recommendation is generated based on search term and product-level data. This human-in-the-loop approach balances automation speed with strategic oversight.",
        ],
      },
      {
        id: "getting-started",
        title: "Getting Started with API Integration",
        paragraphs: [
          "Start with read-only reporting before enabling write operations. Identify the five to ten metrics your team checks daily — impressions, clicks, cost, conversions, conversion value, ROAS, and CPA — and build a single automated report that delivers them every morning.",
          "Use the official Google Ads API client libraries (available for Python, Java, PHP, Ruby, and .NET) rather than building raw HTTP requests. The libraries handle authentication refresh, protobuf serialization, and error parsing. Python is our choice for its ecosystem of data processing libraries.",
          "Apply for a developer token through your Google Ads manager account. Document your use cases clearly — campaign management, reporting, and automation — as Google reviews applications based on intended API usage. Once operational, the time saved on manual reporting typically pays back the development investment within the first month.",
        ],
      },
    ],
  },
  {
    slug: "remarketing-strategies-apparel-ecommerce",
    title: "Remarketing Strategies for Apparel E-commerce",
    excerpt:
      "Turn browsers into buyers with segmented remarketing audiences, dynamic product ads, and frequency strategies tailored to fashion shoppers.",
    coverImage: {
      src: images.blog.remarketingApparel,
      alt: "Shoppers browsing apparel in a modern clothing store",
    },
    publishedAt: "2026-02-18",
    category: "Google Ads",
    author: "Junchuang Marketing Team",
    readTimeMinutes: 9,
    sections: [
      {
        id: "why-remarketing",
        title: "Why Remarketing Is Essential for Apparel",
        paragraphs: [
          "Fashion shoppers are notorious for browsing without buying. Studies consistently show that over 90% of first-time visitors leave an apparel site without purchasing. They comparison-shop across brands, wait for sales, or simply need time to decide. Remarketing keeps your brand visible during this consideration period.",
          "Apparel purchases are emotional and visual. A shopper who viewed a specific dress or jacket has expressed concrete interest. Showing them that exact product — or a complementary item — through remarketing ads re-engages them with relevant creative rather than generic brand messaging.",
          "Remarketing also addresses cart abandonment, one of the highest-impact opportunities in apparel e-commerce. Industry averages suggest 70% of shopping carts are abandoned. A well-timed remarketing sequence reminding shoppers of their cart contents, offering free shipping, or highlighting limited stock can recover 10-15% of those abandoned carts.",
        ],
      },
      {
        id: "audience-segmentation",
        title: "Audience Segmentation Framework",
        paragraphs: [
          "Not all remarketing audiences should receive the same message. We segment audiences by behavior depth: Homepage Visitors (low intent), Category Browsers (medium intent), Product Viewers (high intent), Cart Abandoners (highest intent), and Past Purchasers (retention/upsell).",
          "Each segment gets tailored ad creative and bid levels. Homepage visitors see brand story and bestseller carousel ads. Product viewers receive dynamic product ads showing the exact items they viewed. Cart abandoners get urgency-driven messaging with the specific cart contents. Past purchasers see new arrivals and cross-sell recommendations.",
          "Membership duration matters in fashion. Product viewer audiences use 7-14 day windows because fashion interest decays quickly. Cart abandoner audiences use 3-7 day windows with aggressive bidding. Past purchaser audiences extend to 180-365 days for seasonal re-engagement and loyalty campaigns.",
        ],
        image: {
          src: images.blog.remarketingAudience,
          alt: "Customer segmentation and targeted marketing audience analysis",
          caption:
            "Behavior-based audience segments allow tailored messaging for each stage of the apparel purchase journey.",
        },
      },
      {
        id: "dynamic-product-ads",
        title: "Dynamic Product Ads and Feed Integration",
        paragraphs: [
          "Dynamic Remarketing ads automatically populate with products a user previously viewed on your site. For apparel, this means showing the exact dress, jacket, or shoes the shopper browsed, complete with current price, sale status, and product image. This relevance dramatically outperforms static banner ads.",
          "Implementation requires the Google Ads remarketing tag on all product pages, a linked Google Merchant Center feed, and audience lists configured in Google Ads. The tag captures product IDs (matching feed IDs), page type, and total value. Google matches this data against your feed to generate personalized ads.",
          "Feed freshness is critical for dynamic remarketing. If a product goes out of stock but still appears in remarketing ads, shoppers click through to a dead page — wasting spend and damaging brand trust. Automated feed updates synced with inventory management prevent this issue.",
        ],
      },
      {
        id: "frequency-creative",
        title: "Frequency Management and Creative Rotation",
        paragraphs: [
          "Showing the same ad too many times leads to banner blindness and negative brand perception. We set frequency caps of 3-5 impressions per user per day for remarketing campaigns, with lower caps for broader audiences and slightly higher caps for cart abandoners.",
          "Creative rotation prevents ad fatigue. Maintain at least three to five ad variants per audience segment, rotating messaging angles: social proof (\"Join 10,000+ happy customers\"), urgency (\"Only 3 left in your size\"), incentive (\"Free shipping on orders over $50\"), and newness (\"Just dropped: Spring Collection\").",
          "Exclude recent converters from remarketing campaigns to avoid wasting impressions on customers who already purchased. A 14-day exclusion window is standard, with past purchasers moved to a separate upsell/remarketing campaign promoting complementary products rather than items they just bought.",
        ],
      },
      {
        id: "measuring-remarketing",
        title: "Measuring Remarketing Performance",
        paragraphs: [
          "Evaluate remarketing campaigns on assisted conversions and view-through conversions in addition to last-click metrics. Remarketing often closes the loop on awareness campaigns that get no direct conversion credit. A shopper who first clicked a Shopping ad and later converted through a remarketing Display ad illustrates this multi-touch reality.",
          "Compare remarketing CPA and ROAS against new customer acquisition campaigns. Remarketing should deliver significantly lower CPA because the audience has already expressed interest. If remarketing CPA approaches prospecting CPA, audience segmentation or creative relevance needs improvement.",
          "Incrementality testing — pausing remarketing for a holdout group and measuring the revenue difference — provides the true lift of your remarketing program. While not every team has the volume for formal holdout tests, periodic remarketing pauses in low-traffic periods can reveal baseline conversion rates without remarketing support.",
        ],
      },
    ],
  },
  {
    slug: "optimizing-roas-multi-channel-ecommerce",
    title: "Optimizing ROAS Across Multi-Channel E-commerce",
    excerpt:
      "A framework for measuring, comparing, and improving return on ad spend when selling clothing and footwear across multiple advertising channels.",
    coverImage: {
      src: images.blog.roasOptimization,
      alt: "Team analyzing return on ad spend metrics in a meeting",
    },
    publishedAt: "2026-02-05",
    category: "E-commerce",
    author: "Junchuang Marketing Team",
    readTimeMinutes: 10,
    sections: [
      {
        id: "roas-fundamentals",
        title: "ROAS Fundamentals for E-commerce Operators",
        paragraphs: [
          "Return on Ad Spend (ROAS) is the ratio of revenue generated to advertising cost. A ROAS of 500% — often expressed as 5:1 — means every dollar spent on ads generated five dollars in revenue. For e-commerce businesses, ROAS is the primary efficiency metric, but it must be interpreted alongside profit margins.",
          "A 500% ROAS on a product with 20% gross margin means you are losing money on every ad-driven sale. A 300% ROAS on a product with 60% margin is highly profitable. This is why product-level margin data must be combined with campaign-level ROAS to make sound budget decisions.",
          "Multi-channel e-commerce adds complexity because each platform — Google Search, Google Shopping, Performance Max, social media, marketplace ads — reports ROAS using its own attribution model and conversion window. Comparing these numbers directly without normalization leads to misallocated budgets.",
        ],
      },
      {
        id: "unified-measurement",
        title: "Building a Unified Measurement Framework",
        paragraphs: [
          "The first step toward multi-channel ROAS optimization is a unified measurement framework. Choose one source of truth for revenue — typically your e-commerce platform's order data — and attribute ad spend from all channels against it. Google Analytics 4's data-driven attribution model provides a reasonable cross-channel view.",
          "Standardize conversion windows across channels. Google Ads defaults to 30-day click attribution, while social platforms may use 7-day click or 1-day view windows. Aligning these windows — or at least documenting the differences — prevents systematically overvaluing channels with longer attribution windows.",
          "Incorporate returns and cancellations into ROAS calculations. Fashion and footwear have return rates of 20-30%, significantly higher than other e-commerce categories. A campaign showing 600% ROAS at purchase time may drop to 400% after returns. Adjusting for historical return rates by category provides a more honest efficiency picture.",
        ],
        image: {
          src: images.blog.roasChannels,
          alt: "Multi-channel e-commerce payment and sales across platforms",
          caption:
            "Unified measurement across channels prevents budget misallocation based on inconsistent attribution models.",
        },
      },
      {
        id: "channel-role",
        title: "Defining Each Channel's Role",
        paragraphs: [
          "Not every channel should be optimized for the same ROAS target. We assign roles: Google Shopping handles high-intent product searches with a target ROAS of 500-700%. Brand Search protects navigational queries at 800%+ ROAS. Performance Max scales discovery and broad reach at 400-500% ROAS. Display remarketing recaptures abandoners at 600-900% ROAS.",
          "These targets reflect the different costs and values of each funnel stage. Upper-funnel channels naturally show lower ROAS but contribute to brand awareness that downstream channels convert. Cutting Performance Max budget because its ROAS is lower than Shopping ROAS often reduces total revenue, not just inefficient spend.",
          "Review channel roles quarterly. As campaigns mature and accumulate conversion data, targets adjust upward. New channels start with lower targets during learning phases and tighten as algorithms optimize delivery.",
        ],
      },
      {
        id: "budget-allocation",
        title: "Dynamic Budget Allocation",
        paragraphs: [
          "Static monthly budgets fail in e-commerce where demand fluctuates daily. We implement dynamic allocation rules: campaigns exceeding ROAS targets by 20% or more receive incremental budget (capped at 15% daily increases to avoid volatility). Campaigns below target for five or more consecutive days trigger investigation and potential budget reduction.",
          "Marginal ROAS analysis determines where the next dollar should go. If Shopping campaigns are at target ROAS with unspent daily budget, that is the first allocation priority. If Shopping is budget-capped and performing well, overflow goes to Performance Max or remarketing based on their marginal returns.",
          "Seasonal overrides suspend standard rules during peak periods. During Black Friday or seasonal launches, all performing campaigns receive expanded budgets regardless of marginal ROAS, because the opportunity cost of missing peak demand exceeds the efficiency loss from slightly lower ROAS.",
        ],
      },
      {
        id: "continuous-improvement",
        title: "Continuous Improvement and Reporting Cadence",
        paragraphs: [
          "ROAS optimization is not a one-time exercise. We maintain three reporting cadences: daily monitoring for anomalies (sudden ROAS drops, spend spikes), weekly optimization (bid adjustments, negative keywords, budget shifts), and monthly strategic review (channel mix, target recalibration, new test proposals).",
          "Automated reporting through the Google Ads API powers the daily and weekly cadences. Dashboards highlight campaigns deviating from targets, products with declining efficiency, and channels gaining or losing share of total conversions. Monthly reviews add business context — margin changes, new product launches, competitive moves.",
          "The objective is not maximizing ROAS in isolation but maximizing profitable revenue. A campaign at 400% ROAS generating $50,000 in monthly revenue is more valuable than one at 800% ROAS generating $5,000. The framework balances efficiency with scale, ensuring advertising investment grows the business sustainably across every channel.",
        ],
      },
    ],
  },
];

/**
 * 根据 slug 获取单篇博客文章
 * @param slug - 文章 URL 标识
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/**
 * 获取所有博客 slug（用于静态路由生成）
 */
export function getAllPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

/**
 * 按发布日期倒序排列的博客列表
 */
export function getSortedPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * 格式化发布日期为可读字符串
 * @param dateStr - ISO 日期字符串
 */
export function formatPublishDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
