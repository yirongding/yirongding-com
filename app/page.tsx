import Image from "next/image";
import { ContactForm } from "./components/ContactForm";

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
          className="font-display font-light leading-[1.05] mb-6"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            color: "var(--foreground)",
            letterSpacing: "-0.02em",
          }}
        >
          <span className="block">Better systems.</span>
          <span className="block" style={{ color: "var(--accent)" }}>
            Less manual work.
          </span>
        </h1>

        {/* Clear descriptor — answers "what is this?" in one line */}
        <p
          className="font-body font-medium mb-8"
          style={{ color: "var(--foreground)", fontSize: "1.05rem", letterSpacing: "0.01em" }}
        >
          Done-for-you business setup, systems &amp; AI support — for small service businesses.
        </p>

        {/* Subtext */}
        <p
          className="font-body text-lg leading-relaxed mb-12 max-w-xl"
          style={{ color: "var(--muted)", fontWeight: 300 }}
        >
          I help you get the right foundations in place, clean up your workflows,
          and use AI in ways that actually save time — so your business runs more
          smoothly and you can focus on your clients.
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
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-16 items-center">
        {/* List */}
        <div>
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

        {/* Image — swap /yirong.jpg for a relevant image when available */}
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src="/yirong.jpg"
            alt="Working on business systems"
            fill
            className="object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 60%, rgba(243,244,243,0.25))",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Services ────────────────────────────────────────────────────── */

const services = [
  {
    name: "Foundation setup",
    forWho: "Just starting out, or building on a shaky base",
    description:
      "Get the right pieces in place from the start — brand direction, website, CRM, lead capture, email setup, and the core systems that support a more professional, organized business.",
    cta: "Start here",
  },
  {
    name: "Systems setup",
    forWho: "Already running, but workflows feel messy or inconsistent",
    description:
      "Clean up what's behind the scenes — lead routing, CRM organization, workflow design, tool connections, and practical AI support that reduces manual work and improves consistency.",
    cta: "Book a call",
  },
  {
    name: "Ongoing support",
    forWho: "Want continued help as your business grows",
    description:
      "Refine and expand your systems over time — ongoing optimization, workflow updates, troubleshooting, and additional automation or AI support as the business evolves.",
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
              className="flex flex-col gap-4 p-7 rounded-2xl"
              style={{ background: "var(--surface)" }}
            >
              <div>
                <h3
                  className="font-display font-medium mb-2"
                  style={{ fontSize: "1.35rem", color: "var(--foreground)" }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-body text-xs font-medium uppercase tracking-[0.1em]"
                  style={{ color: "var(--accent)" }}
                >
                  {s.forWho}
                </p>
              </div>
              <div
                className="w-full h-px"
                style={{ background: "var(--border)" }}
              />
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
        <div className="flex flex-col gap-6">
          <p
            className="font-body text-lg leading-relaxed"
            style={{ color: "var(--muted)", fontWeight: 300 }}
          >
            That means the goal isn&rsquo;t more software. It&rsquo;s a
            business that feels more organized, more efficient, and easier to
            grow.
          </p>
          <div
            className="font-body text-sm leading-relaxed p-5 rounded-xl"
            style={{
              borderLeft: "2px solid var(--accent)",
              background: "var(--background)",
              color: "var(--muted)",
              fontWeight: 300,
            }}
          >
            <span
              className="font-medium block mb-1"
              style={{ color: "var(--foreground)", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              For example
            </span>
            Instead of manually copying new inquiries from your inbox into a
            spreadsheet or CRM, an automated system can capture every lead,
            tag it by source, and trigger a follow-up sequence — without you
            doing anything.
          </div>
        </div>
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

/* ─── Contact ─────────────────────────────────────────────────────── */

function CallToAction() {
  return (
    <section
      id="contact"
      className="px-6 py-24"
      style={{ background: "var(--dark)" }}
    >
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-16 items-start">
        {/* Left: heading + Calendly option */}
        <div className="flex flex-col gap-8 sm:pt-2">
          <p
            className="font-body text-xs uppercase tracking-[0.18em]"
            style={{ color: "var(--accent)" }}
          >
            Let&rsquo;s talk
          </p>
          <h2
            className="font-display font-light leading-[1.1]"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#F3F4F3",
              letterSpacing: "-0.01em",
            }}
          >
            If your business feels more manual than it should, let&rsquo;s
            talk.
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ color: "rgba(243,244,243,0.5)", fontWeight: 300, fontSize: "0.95rem" }}
          >
            Send a message and I&rsquo;ll get back to you within a couple of
            days. Or, if you&rsquo;d rather talk directly —
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center justify-center self-start px-6 py-3 rounded-full font-medium transition-opacity hover:opacity-80"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#F3F4F3",
              fontSize: "0.9rem",
              letterSpacing: "0.02em",
            }}
          >
            Book a discovery call
          </a>
        </div>

        {/* Right: contact form */}
        <ContactForm />
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
