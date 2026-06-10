import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import { getSortedPosts } from "@/lib/blog";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on e-commerce, Google Ads, and digital marketing from the Junchuang E-Commerce team.",
};

/**
 * 博客文章列表页
 */
export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Practical insights on e-commerce retail, Google Ads campaigns, and marketing automation."
        image={images.blog.blogHero}
        badge="Insights & Guides"
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Latest Articles"
            subtitle="In-depth guides on advertising strategy, campaign optimization, and e-commerce growth."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 100}>
                <BlogCard post={post} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
