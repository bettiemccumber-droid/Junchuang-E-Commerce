import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ArticleBody from "@/components/ArticleBody";
import BlogCard from "@/components/BlogCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import {
  getAllPostSlugs,
  getPostBySlug,
  getSortedPosts,
} from "@/lib/blog";

/**
 * 生成所有博客文章的静态路由参数
 */
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

/**
 * 生成文章页 SEO 元数据
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage.src, alt: post.coverImage.alt }],
    },
  };
}

/**
 * 博客文章详情页
 */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getSortedPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        title={post.title}
        subtitle={post.excerpt}
        image={post.coverImage.src}
        badge={post.category}
      />

      <ArticleBody post={post} />

      {relatedPosts.length > 0 && (
        <section className="border-t border-slate-100 bg-slate-50/50 px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              title="Related Articles"
              subtitle="Continue reading more insights from our team."
            />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related, i) => (
                <AnimateOnScroll key={related.slug} delay={i * 100}>
                  <BlogCard post={related} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
