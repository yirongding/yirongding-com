import Image from "next/image";
import { ContactForm } from "./components/ContactForm";

// Replace with your actual Calendly link before going live.
const CALENDLY_URL = "https://calendly.com/yirongding/30min";
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
        <CaseStudies />
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
        <div className="hidden sm:flex items-center gap-8">
          {[["Services", "#services"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
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
            href="#services"
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
  "A business foundation that holds together — website, CRM, and email working as one",
  "Every lead captured, tagged, and followed up without manual effort",
  "Fewer steps between an inquiry and your first response",
  "Tools and workflows that connect, so nothing slips through the cracks",
  "Routine admin handled automatically — so you stay focused on client work",
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

        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src="/what-you-get.jpg"
            alt="Working on business systems"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Services ────────────────────────────────────────────────────── */

const services = [
  {
    name: "Foundation Setup",
    forWho: "For businesses building from the ground up or starting fresh",
    description:
      "Set up the essentials properly from the beginning — brand direction, website structure, CRM, lead capture, email setup, and the core systems that support a more organized business.",
  },
  {
    name: "Workflow Design",
    forWho: "For businesses with messy processes or operational friction",
    description:
      "Improve the way work moves behind the scenes — from lead handling and CRM organization to tool connections, admin workflows, and practical AI support that reduces manual work.",
  },
  {
    name: "Ongoing Support",
    forWho: "For businesses that need continued operational help as they grow",
    description:
      "Refine and strengthen your systems over time with ongoing updates, workflow improvements, troubleshooting, and thoughtful support across the moving parts of the business.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative px-6 py-40 overflow-hidden"
      style={{
        background: "#16191C",
        borderTop: "1px solid rgba(142,164,184,0.12)",
      }}
    >
      {/* Subtle warm accent glow — top left */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top left, rgba(142,164,184,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="mb-24">
          <p
            className="font-body text-xs uppercase tracking-[0.22em] mb-6"
            style={{ color: "#8EA4B8" }}
          >
            Ways to work together
          </p>
          <h2
            className="font-display font-light"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
              color: "#F7F4F0",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            Support for different{" "}
            <em style={{ fontStyle: "italic", color: "#8EA4B8" }}>
              stages of growth
            </em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="flex flex-col pt-10 pb-12 sm:py-0 sm:px-10"
              style={i > 0 ? { borderLeft: "1px solid rgba(142,164,184,0.15)" } : undefined}
            >
              {/* Service name — warm white, strong */}
              <h3
                className="font-display font-medium leading-tight mb-5"
                style={{
                  fontSize: "clamp(1.45rem, 2.1vw, 1.8rem)",
                  color: "#F7F4F0",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.name}
              </h3>

              {/* For who — accent-tinted pill with real fill */}
              <p
                className="font-body self-start mb-9 px-4 py-2 rounded-2xl"
                style={{
                  fontSize: "0.75rem",
                  color: "#A8C0D0",
                  background: "rgba(142,164,184,0.11)",
                  border: "1px solid rgba(142,164,184,0.22)",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  letterSpacing: "0.01em",
                }}
              >
                {s.forWho}
              </p>

              {/* Description */}
              <p
                className="font-body"
                style={{
                  color: "rgba(247,244,240,0.52)",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  lineHeight: 1.85,
                }}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-24">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium transition-opacity hover:opacity-70"
            style={{
              border: "1px solid rgba(142,164,184,0.45)",
              color: "#A8C0D0",
              fontSize: "0.875rem",
              letterSpacing: "0.03em",
              background: "rgba(142,164,184,0.07)",
            }}
          >
            Book a discovery call
          </a>
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
          That means the goal isn&rsquo;t more software. It&rsquo;s a
          business that feels more organized, more efficient, and easier to
          grow.
        </p>
      </div>
    </section>
  );
}

/* ─── Case Studies ────────────────────────────────────────────────── */

const caseStudies = [
  {
    title: "Lead Follow-Up",
    description:
      "Built a workflow to capture inquiries, organize key details, and support faster follow-up so fewer leads go cold.",
  },
  {
    title: "Inbox Overload",
    description:
      "Created a system to sort incoming messages, flag priorities, and make next steps easier to manage.",
  },
  {
    title: "Scattered Operations",
    description:
      "Connected forms, messages, and internal systems so information flows more smoothly and the team spends less time chasing details.",
  },
];

function CaseStudies() {
  return (
    <section
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
          How this can look in practice
        </p>
        <div className="grid sm:grid-cols-3 gap-5">
          {caseStudies.map((c, i) => (
            <div
              key={c.title}
              className="flex flex-col gap-4 p-7 rounded-2xl"
              style={{ background: "var(--surface)" }}
            >
              <span
                className="font-display font-light"
                style={{ color: "var(--accent)", fontSize: "0.85rem" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="font-display font-medium"
                style={{ fontSize: "1.2rem", color: "var(--foreground)" }}
              >
                {c.title}
              </h3>
              <div
                className="w-full h-px"
                style={{ background: "var(--border)" }}
              />
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "var(--muted)", fontWeight: 300 }}
              >
                {c.description}
              </p>
            </div>
          ))}
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
              My background is in marketing, content, and implementation, with
              a growing focus on the operational side of the business — the
              places where time gets lost, processes get messy, and better
              systems can make a real difference.
            </p>
            <p>
              I&rsquo;m especially interested in helping businesses improve the
              way work flows behind the scenes: reducing friction, creating
              clearer processes, and using AI where it&rsquo;s genuinely
              useful.
            </p>
            <p>
              The goal is never more tools for the sake of it. It&rsquo;s
              better workflow, smoother operations, and more space for the work
              that actually needs a human.
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
      className="px-6 py-32"
      style={{
        background: "var(--dark)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
        {/* Preheader */}
        <p
          className="font-body text-xs uppercase tracking-[0.22em] mb-6"
          style={{ color: "rgba(142,164,184,0.75)" }}
        >
          Let&rsquo;s Talk
        </p>

        {/* Headline */}
        <h2
          className="font-display font-light mb-5"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#F7F4F0",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
          }}
        >
          If your business feels more manual than it should
        </h2>

        {/* Supporting line */}
        <p
          className="font-body mb-10 max-w-md"
          style={{
            color: "rgba(243,244,240,0.52)",
            fontWeight: 300,
            fontSize: "1rem",
            lineHeight: 1.7,
          }}
        >
          Tell me what&rsquo;s feeling manual, messy, or disconnected, and
          I&rsquo;ll be in touch.
        </p>

        {/* Primary CTA */}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium transition-opacity hover:opacity-70 mb-14"
          style={{
            background: "#F7F4F0",
            color: "#16191C",
            fontSize: "0.9rem",
            letterSpacing: "0.02em",
          }}
        >
          Book a call
        </a>

        {/* Divider */}
        <div className="flex items-center gap-5 w-full mb-14">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          <span
            className="font-body text-xs uppercase tracking-[0.18em]"
            style={{ color: "rgba(243,244,243,0.25)" }}
          >
            or send a note
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
        </div>

        {/* Form — left-aligned inside centered container */}
        <div className="w-full text-left">
          <ContactForm />
        </div>
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
            href="mailto:dingyirongdyr@gmail.com"
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
