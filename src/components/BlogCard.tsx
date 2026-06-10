import Image from "next/image";
import Link from "next/link";
import { type BlogPost, formatPublishDate } from "@/lib/blog";

/**
 * 博客列表卡片
 */
export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.coverImage.src}
          alt={post.coverImage.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <time dateTime={post.publishedAt}>
            {formatPublishDate(post.publishedAt)}
          </time>
          <span aria-hidden>·</span>
          <span>{post.readTimeMinutes} min read</span>
        </div>

        <h2 className="mt-3 text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-brand-700 sm:text-xl">
          {post.title}
        </h2>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
          {post.excerpt}
        </p>

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition-colors group-hover:text-brand-700">
          Read article
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
