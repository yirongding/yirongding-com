import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AnimateIn } from "../../components/AnimateIn";
import { getAllPosts, getPostBySlug, formatPostDate } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Yirong Ding`,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <section
      className="px-6 pt-32 pb-32"
      style={{ background: "var(--background)" }}
    >
      <article className="max-w-2xl mx-auto">
        <AnimateIn>
          <Link
            href="/blog"
            className="font-body text-xs uppercase tracking-[0.18em] inline-flex items-center gap-2 mb-12 transition-opacity hover:opacity-70"
            style={{ color: "var(--muted)" }}
          >
            <span aria-hidden>←</span> All blog posts
          </Link>

          <time
            className="font-body text-xs uppercase tracking-[0.18em] block mb-5"
            style={{ color: "var(--muted)" }}
          >
            {formatPostDate(post.date)}
          </time>

          <h1
            className="font-display font-light mb-10"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              color: "var(--foreground)",
              letterSpacing: "-0.032em",
              lineHeight: 1.08,
            }}
          >
            {post.title}
          </h1>

          {post.cover && (
            <div
              className="relative w-full aspect-[16/9] mb-14 overflow-hidden"
              style={{
                borderRadius: "10px",
                background: "var(--surface)",
              }}
            >
              <Image
                src={post.cover}
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
            </div>
          )}
        </AnimateIn>

        <AnimateIn delay={120}>
          <div>
            <Post />
          </div>
        </AnimateIn>

        <AnimateIn delay={200}>
          <div
            className="mt-20 pt-10 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            <Link
              href="/blog"
              className="font-body text-xs uppercase tracking-[0.18em] inline-flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ color: "var(--muted)" }}
            >
              <span aria-hidden>←</span> All blog posts
            </Link>
          </div>
        </AnimateIn>
      </article>
    </section>
  );
}
