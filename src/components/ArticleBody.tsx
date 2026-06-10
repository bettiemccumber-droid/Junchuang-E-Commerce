"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { type BlogPost, formatPublishDate } from "@/lib/blog";

/**
 * 博客文章正文布局（含目录导航与章节内容）
 */
export default function ArticleBody({ post }: { post: BlogPost }) {
  const [activeId, setActiveId] = useState(post.sections[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    post.sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(section.id);
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [post.sections]);

  return (
    <section className="bg-gradient-to-b from-slate-50/80 to-white px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span className="rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-700">
            {post.category}
          </span>
          <time dateTime={post.publishedAt}>
            {formatPublishDate(post.publishedAt)}
          </time>
          <span aria-hidden>·</span>
          <span>{post.readTimeMinutes} min read</span>
          <span aria-hidden>·</span>
          <span>{post.author}</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <nav className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Contents
              </p>
              <ul className="mt-4 space-y-1">
                {post.sections.map((section, i) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                        activeId === section.id
                          ? "bg-brand-50 font-medium text-brand-700 shadow-sm ring-1 ring-brand-100"
                          : "text-slate-600 hover:bg-white hover:text-slate-900"
                      }`}
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs ${
                          activeId === section.id
                            ? "bg-brand-600 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="leading-snug">{section.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <article className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50 ring-1 ring-slate-100">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={post.coverImage.src}
                alt={post.coverImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            </div>

            <div className="divide-y divide-slate-100">
              {post.sections.map((section, i) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 px-6 py-8 sm:px-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-brand-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl font-semibold text-slate-900">
                      {section.title}
                    </h2>
                  </div>

                  <div className="prose-blog mt-5">
                    {section.paragraphs.map((paragraph, pi) => (
                      <p key={pi}>{paragraph}</p>
                    ))}
                  </div>

                  {section.image && (
                    <figure className="mt-6 overflow-hidden rounded-xl border border-slate-100">
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={section.image.src}
                          alt={section.image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 896px) 100vw, 768px"
                        />
                      </div>
                      {section.image.caption && (
                        <figcaption className="bg-slate-50 px-4 py-3 text-sm text-slate-500">
                          {section.image.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </section>
              ))}
            </div>

            <div className="border-t border-slate-100 bg-slate-50/50 px-6 py-6 sm:px-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700"
              >
                <span aria-hidden>←</span>
                Back to all articles
              </Link>
            </div>
          </article>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 lg:hidden">
          {post.sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                activeId === section.id
                  ? "bg-brand-600 text-white"
                  : "bg-white text-slate-600 ring-1 ring-slate-200"
              }`}
            >
              {section.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
