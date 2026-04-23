import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1
      className="font-display font-light mt-16 mb-6"
      style={{
        fontSize: "clamp(2rem, 4vw, 2.75rem)",
        color: "var(--foreground)",
        letterSpacing: "-0.028em",
        lineHeight: 1.1,
      }}
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      className="font-display font-light mt-14 mb-5"
      style={{
        fontSize: "clamp(1.55rem, 2.6vw, 1.9rem)",
        color: "var(--foreground)",
        letterSpacing: "-0.02em",
        lineHeight: 1.2,
      }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      className="font-display mt-10 mb-3"
      style={{
        fontSize: "1.25rem",
        fontWeight: 500,
        color: "var(--foreground)",
        letterSpacing: "-0.012em",
        lineHeight: 1.3,
      }}
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p
      className="font-body mb-6"
      style={{
        fontSize: "1.0625rem",
        lineHeight: 1.75,
        color: "var(--foreground)",
        fontWeight: 300,
      }}
    >
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="font-body underline underline-offset-4 transition-opacity hover:opacity-70"
      style={{
        color: "var(--foreground)",
        textDecorationColor: "var(--accent)",
        textDecorationThickness: "1px",
      }}
      {...(href?.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul
      className="font-body mb-6 pl-6 list-disc"
      style={{
        fontSize: "1.0625rem",
        lineHeight: 1.75,
        color: "var(--foreground)",
        fontWeight: 300,
      }}
    >
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol
      className="font-body mb-6 pl-6 list-decimal"
      style={{
        fontSize: "1.0625rem",
        lineHeight: 1.75,
        color: "var(--foreground)",
        fontWeight: 300,
      }}
    >
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="mb-2 pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote
      className="font-body my-8 pl-6 italic"
      style={{
        borderLeft: "2px solid var(--accent)",
        color: "var(--muted)",
        fontSize: "1.125rem",
        lineHeight: 1.7,
        fontWeight: 300,
      }}
    >
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code
      className="font-mono"
      style={{
        background: "var(--surface)",
        color: "var(--foreground)",
        padding: "0.15em 0.4em",
        borderRadius: "4px",
        fontSize: "0.9em",
      }}
    >
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre
      className="font-mono my-8 overflow-x-auto"
      style={{
        background: "var(--dark)",
        color: "#F3F2EF",
        padding: "1.25rem 1.5rem",
        borderRadius: "10px",
        fontSize: "0.875rem",
        lineHeight: 1.65,
      }}
    >
      {children}
    </pre>
  ),
  hr: () => (
    <hr
      className="my-12 border-0"
      style={{ height: "1px", background: "var(--border)" }}
    />
  ),
  img: (props) => (
    <Image
      {...(props as ImageProps)}
      alt={props.alt ?? ""}
      width={1200}
      height={700}
      sizes="(max-width: 768px) 100vw, 720px"
      className="my-10 w-full h-auto"
      style={{ borderRadius: "8px" }}
    />
  ),
  strong: ({ children }) => (
    <strong style={{ color: "var(--foreground)", fontWeight: 600 }}>
      {children}
    </strong>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
