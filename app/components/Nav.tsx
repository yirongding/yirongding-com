"use client";

import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/yirongding/30min";
const NAV_LINKS = [
  ["Services", "/#services"],
  ["About", "/#about"],
  ["Blog", "/blog"],
  ["Contact", "/#contact"],
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "rgba(245,244,242,0.88)",
        backdropFilter: "blur(12px)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="/"
          className="font-display text-xl tracking-wide transition-opacity hover:opacity-70"
          style={{ color: "var(--foreground)", fontWeight: 400 }}
        >
          Yirong Ding
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-8">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-body text-sm transition-opacity hover:opacity-60"
              style={{ color: "var(--muted)" }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right side: CTA always visible + hamburger on mobile */}
        <div className="flex items-center gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium px-5 py-2 transition-opacity hover:opacity-75"
            style={{
              background: "var(--foreground)",
              color: "var(--background)",
              borderRadius: "8px",
              letterSpacing: "0.02em",
            }}
          >
            Book a call
          </a>

          <button
            className="sm:hidden p-2 -mr-2"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            style={{ color: "var(--foreground)" }}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 4L16 16M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3 5H17M3 10H17M3 15H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel — links only, no CTA (already in nav bar) */}
      {open && (
        <div
          className="sm:hidden border-t px-6 pt-4 pb-6 flex flex-col gap-1"
          style={{
            background: "rgba(245,244,242,0.96)",
            backdropFilter: "blur(12px)",
            borderColor: "var(--border)",
            animation: "fadeUp 0.2s ease-out both",
          }}
        >
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-body text-base py-3 border-b transition-opacity hover:opacity-60"
              style={{
                color: "var(--foreground)",
                borderColor: "var(--border)",
              }}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
