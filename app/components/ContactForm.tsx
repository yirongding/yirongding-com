"use client";

// To activate this form:
// 1. Go to https://formspree.io and create a free account
// 2. Create a new form and copy the form ID
// 3. Replace REPLACE_WITH_YOUR_FORMSPREE_ID below with your form ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojprerq";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.75rem",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    color: "#F3F4F3",
    fontFamily: "var(--font-body), system-ui, sans-serif",
    fontSize: "0.9rem",
    outline: "none",
  };

  if (status === "sent") {
    return (
      <div
        className="flex items-center justify-center rounded-2xl p-10"
        style={{ border: "1px solid rgba(255,255,255,0.1)" }}
      >
        <p
          className="font-body text-center"
          style={{ color: "rgba(243,244,243,0.7)", fontSize: "1rem" }}
        >
          Thanks — I&rsquo;ll get back to you within a couple of days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="font-body text-xs uppercase tracking-[0.12em]"
            style={{ color: "rgba(243,244,243,0.4)" }}
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            style={inputStyle}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-body text-xs uppercase tracking-[0.12em]"
            style={{ color: "rgba(243,244,243,0.4)" }}
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            style={inputStyle}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="business"
          className="font-body text-xs uppercase tracking-[0.12em]"
          style={{ color: "rgba(243,244,243,0.4)" }}
        >
          Type of business
        </label>
        <input
          id="business"
          name="business"
          type="text"
          placeholder="e.g. real estate, photography, consulting…"
          style={inputStyle}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-body text-xs uppercase tracking-[0.12em]"
          style={{ color: "rgba(243,244,243,0.4)" }}
        >
          What are you working on?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell me a bit about your business and what's feeling manual or messy right now."
          style={{ ...inputStyle, resize: "none" }}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="font-body font-medium rounded-full transition-opacity hover:opacity-80 disabled:opacity-50"
        style={{
          padding: "0.85rem 2rem",
          background: "var(--background)",
          color: "var(--foreground)",
          fontSize: "0.9rem",
          letterSpacing: "0.02em",
          cursor: status === "sending" ? "wait" : "pointer",
          border: "none",
          alignSelf: "center",
        }}
      >
        {status === "sending" ? "Sending…" : "Send inquiry"}
      </button>
      {status === "error" && (
        <p
          className="font-body text-sm"
          style={{ color: "rgba(243,244,243,0.5)" }}
        >
          Something went wrong. Try emailing directly at dingyirongdyr@gmail.com
        </p>
      )}
    </form>
  );
}
