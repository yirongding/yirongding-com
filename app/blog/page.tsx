import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { AnimateIn } from "../components/AnimateIn";
import { getAllPosts, formatPostDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Yirong Ding",
  description:
    "Short, practical notes on business systems, AI, and the quiet craft of making operations run smoothly.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section
      className="px-6 pt-32 pb-24"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <div className="flex items-center gap-3 mb-10">
            <div
              className="w-8 h-px"
              style={{ background: "var(--accent)" }}
            />
            <p
              className="font-body text-xs uppercase tracking-[0.18em]"
              style={{ color: "var(--muted)" }}
            >
              Blog
            </p>
          </div>

          <h1
            className="font-display font-light mb-6"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
              color: "var(--foreground)",
              letterSpacing: "-0.032em",
              lineHeight: 1.05,
            }}
          >
            Field Notes
          </h1>

          <p
            className="font-body text-lg max-w-xl mb-20"
            style={{
              color: "var(--muted)",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            What I&rsquo;m learning while helping small businesses automate the
            right things — so they can stay close to their clients.
          </p>
        </AnimateIn>

        {posts.length === 0 ? (
          <AnimateIn>
            <p
              className="font-body"
              style={{ color: "var(--muted)", fontWeight: 300 }}
            >
              Nothing here yet. Check back soon.
            </p>
          </AnimateIn>
        ) : (
          <ul className="flex flex-col">
            {posts.map((post, i) => (
              <AnimateIn key={post.slug} delay={i * 60}>
                <li
                  className="border-t"
                  style={{ borderColor: "var(--border)" }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col sm:flex-row gap-6 sm:gap-8 py-10 transition-opacity hover:opacity-80"
                  >
                    {post.cover && (
                      <div
                        className="relative w-full sm:w-64 aspect-[3/2] shrink-0 overflow-hidden"
                        style={{
                          borderRadius: "8px",
                          background: "var(--surface)",
                        }}
                      >
                        <Image
                          src={post.cover}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 100vw, 256px"
                          className="object-cover transition-transform duration-[700ms] group-hover:scale-[1.02]"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <time
                        className="font-body text-xs uppercase tracking-[0.18em]"
                        style={{ color: "var(--muted)" }}
                      >
                        {formatPostDate(post.date)}
                      </time>
                      <h2
                        className="font-display font-light mt-3 mb-3"
                        style={{
                          fontSize: "clamp(1.5rem, 2.5vw, 1.9rem)",
                          color: "var(--foreground)",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.2,
                        }}
                      >
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p
                          className="font-body"
                          style={{
                            color: "var(--muted)",
                            fontWeight: 300,
                            lineHeight: 1.7,
                            fontSize: "1rem",
                          }}
                        >
                          {post.excerpt}
                        </p>
                      )}
                      <span
                        className="font-body text-xs uppercase tracking-[0.18em] inline-flex items-center gap-2 mt-5"
                        style={{ color: "var(--accent)" }}
                      >
                        Read
                        <span
                          className="transition-transform group-hover:translate-x-0.5"
                          aria-hidden
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </li>
              </AnimateIn>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
