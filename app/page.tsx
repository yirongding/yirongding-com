import Image from "next/image";

// Replace with your actual Calendly link before going live.
const CALENDLY_URL = "https://calendly.com/yirongding";
const LINKEDIN_URL = "https://www.linkedin.com/in/yirongding/";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Intro />
        <WhatYouGet />
        <Services />
        <WhyDifferent />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

/* ─── Nav ─────────────────────────────────────────────────────────── */

function Nav() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "rgba(243,244,243,0.88)",
        backdropFilter: "blur(12px)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span
          className="font-display text-xl tracking-wide"
          style={{ color: "var(--foreground)", fontWeight: 400 }}
        >
          Yirong Ding
        </span>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm font-medium px-5 py-2 rounded-full transition-opacity hover:opacity-75"
          style={{
            background: "var(--foreground)",
            color: "var(--background)",
            letterSpacing: "0.03em",
          }}
        >
          Book a call
        </a>
      </div>
    </header>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center px-6 pt-32 pb-24 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Soft accent glow — top right */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(142,164,184,0.18) 0%, transparent 65%)",
        }}
      />
      {/* Soft glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(142,164,184,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <div
            className="w-8 h-px"
            style={{ background: "var(--accent)" }}
          />
          <p
            className="font-body text-xs uppercase tracking-[0.18em]"
            style={{ color: "var(--muted)" }}
          >
            AI-powered business setup &amp; systems
          </p>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-light leading-[1.05] mb-10 max-w-4xl"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            color: "var(--foreground)",
            letterSpacing: "-0.01em",
          }}
        >
          Better systems.{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            Less manual work.
          </em>
        </h1>

        {/* Subtext */}
        <p
          className="font-body text-lg leading-relaxed mb-12 max-w-xl"
          style={{ color: "var(--muted)", fontWeight: 300 }}
        >
          I help small service businesses get set up properly, streamline their
          workflows, and use AI in ways that save time and support growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center justify-center px-7 py-3.5 rounded-full font-medium transition-opacity hover:opacity-80"
            style={{
              background: "var(--foreground)",
              color: "var(--background)",
              fontSize: "0.9rem",
              letterSpacing: "0.02em",
            }}
          >
            Book a discovery call
          </a>
          <a
            href="#about"
            className="font-body inline-flex items-center justify-center px-7 py-3.5 rounded-full font-medium transition-colors"
            style={{
              border: "1px solid var(--border)",
              color: "var(--foreground)",
              fontSize: "0.9rem",
              letterSpacing: "0.02em",
            }}
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Intro ───────────────────────────────────────────────────────── */

function Intro() {
  return (
    <section
      className="px-6 py-28"
      style={{
        background: "var(--background-alt)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-16 items-start">
        <h2
          className="font-display font-light leading-[1.15]"
          style={{
            fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
            color: "var(--foreground)",
            letterSpacing: "-0.01em",
          }}
        >
          Good businesses often outgrow their systems{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            before they realize it.
          </em>
        </h2>
        <div>
          <p
            className="font-body text-lg leading-relaxed"
            style={{ color: "var(--muted)", fontWeight: 300 }}
          >
            Leads come in from different places. Admin piles up. Important steps
            stay manual. I help clean that up with better setup, better systems,
            and practical AI support.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Problems ────────────────────────────────────────────────────── */

const outcomes = [
  "A stronger business foundation",
  "Cleaner lead capture and CRM workflows",
  "Less repetitive admin",
  "Better organization behind the scenes",
  "AI support that's actually useful",
];

function WhatYouGet() {
  return (
    <section
      className="px-6 py-28"
      style={{
        background: "var(--background)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="font-body text-xs uppercase tracking-[0.18em] mb-12"
          style={{ color: "var(--muted)" }}
        >
          What you get
        </p>
        <div>
          {outcomes.map((p, i) => (
            <div
              key={p}
              className="flex items-center gap-8 py-5"
              style={{
                borderTop: i === 0 ? "1px solid var(--border)" : undefined,
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span
                className="font-display font-light w-8 shrink-0 text-right"
                style={{ color: "var(--accent)", fontSize: "0.85rem" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p
                className="font-body text-lg"
                style={{ color: "var(--foreground)", fontWeight: 300 }}
              >
                {p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ────────────────────────────────────────────────────── */

const services = [
  {
    name: "Foundation setup",
    description:
      "For businesses that need the right pieces in place from the start. This can include brand direction, website setup, CRM setup, lead capture, email setup, and the core systems that support a more professional, organized business.",
    cta: "Start here",
  },
  {
    name: "Systems setup",
    description:
      "For businesses that are already running but need smoother workflows behind the scenes. This includes lead routing, CRM organization, workflow design, tool connections, and practical AI support that helps reduce manual work and improve consistency.",
    cta: "Book a call",
  },
  {
    name: "Ongoing support",
    description:
      "For businesses that want continued help refining and expanding their systems over time. This includes ongoing optimization, workflow updates, troubleshooting, and additional automation or AI support as the business evolves.",
    cta: "Book a call",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="px-6 py-28"
      style={{
        background: "var(--background-alt)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="font-body text-xs uppercase tracking-[0.18em] mb-12"
          style={{ color: "var(--muted)" }}
        >
          Ways to work together
        </p>
        <div className="grid sm:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.name}
              className="flex flex-col gap-5 p-7 rounded-2xl"
              style={{ background: "var(--surface)" }}
            >
              <h3
                className="font-display font-medium"
                style={{ fontSize: "1.35rem", color: "var(--foreground)" }}
              >
                {s.name}
              </h3>
              <p
                className="font-body text-sm leading-relaxed flex-1"
                style={{ color: "var(--muted)", fontWeight: 300 }}
              >
                {s.description}
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: "var(--accent)", letterSpacing: "0.01em" }}
              >
                {s.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Different ───────────────────────────────────────────────── */

function WhyDifferent() {
  return (
    <section
      className="px-6 py-28"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-16 items-start">
        <h2
          className="font-display font-light leading-[1.15]"
          style={{
            fontSize: "clamp(1.7rem, 3vw, 2.2rem)",
            color: "var(--foreground)",
            letterSpacing: "-0.01em",
          }}
        >
          Most people start with AI tools.{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            I start with how your business actually runs.
          </em>
        </h2>
        <p
          className="font-body text-lg leading-relaxed"
          style={{ color: "var(--muted)", fontWeight: 300 }}
        >
          That means the goal isn&rsquo;t more software. It&rsquo;s a business
          that feels more organized, more efficient, and easier to grow.
        </p>
      </div>
    </section>
  );
}

/* ─── About ───────────────────────────────────────────────────────── */

function About() {
  return (
    <section
      id="about"
      className="px-6 py-28"
      style={{
        background: "var(--background)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div className="relative w-full max-w-sm mx-auto sm:mx-0">
          <div
            className="absolute rounded-3xl"
            style={{
              inset: 0,
              background: "var(--accent)",
              opacity: 0.12,
              transform: "translate(10px, 10px)",
              borderRadius: "1.5rem",
            }}
          />
          <Image
            src="/yirong.jpg"
            alt="Yirong Ding"
            width={600}
            height={800}
            className="relative w-full object-cover"
            style={{ borderRadius: "1.5rem" }}
            priority
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-7">
          <div>
            <p
              className="font-body text-xs uppercase tracking-[0.18em] mb-5"
              style={{ color: "var(--muted)" }}
            >
              About
            </p>
            <h2
              className="font-display font-light"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                color: "var(--foreground)",
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              Hi, I&rsquo;m Yirong.
            </h2>
          </div>
          <div
            className="font-body flex flex-col gap-5 leading-relaxed"
            style={{ color: "var(--muted)", fontWeight: 300, fontSize: "1rem" }}
          >
            <p>
              My background is in marketing, content, and implementation. What
              interests me most is the operational side of the business — the
              places where time gets lost, processes get messy, and simple
              systems can make a real difference.
            </p>
            <p>
              I use AI where it&rsquo;s useful, but the goal is never more
              tools. It&rsquo;s better workflow, less friction, and more space
              for the work that actually needs a human.
            </p>
            <p>
              I&rsquo;m building this practice in public — sharing what
              I&rsquo;m learning and testing along the way. Follow along on{" "}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
                style={{
                  color: "var(--foreground)",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─────────────────────────────────────────────────────────── */

function CallToAction() {
  return (
    <section
      id="contact"
      className="px-6 py-32"
      style={{ background: "var(--dark)" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <p
          className="font-body text-xs uppercase tracking-[0.18em] mb-8"
          style={{ color: "var(--accent)" }}
        >
          Let&rsquo;s talk
        </p>
        <h2
          className="font-display font-light leading-[1.1] mb-10 mx-auto max-w-2xl"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            color: "#F3F4F3",
            letterSpacing: "-0.01em",
          }}
        >
          If your business feels more manual than it should, let&rsquo;s talk.
        </h2>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-opacity hover:opacity-85"
          style={{
            background: "var(--background)",
            color: "var(--foreground)",
            fontSize: "0.95rem",
            letterSpacing: "0.02em",
          }}
        >
          Book a discovery call
        </a>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer
      className="px-6 py-8"
      style={{
        background: "var(--dark)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 font-body text-sm"
        style={{ color: "rgba(243,244,243,0.35)" }}
      >
        <span>© {new Date().getFullYear()} Yirong Ding</span>
        <div className="flex gap-6">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
            style={{ color: "inherit" }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:yirong@yirongding.com"
            className="transition-colors hover:text-white"
            style={{ color: "inherit" }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
