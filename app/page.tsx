import Image from "next/image";
import { ContactForm } from "./components/ContactForm";
import { AnimateIn } from "./components/AnimateIn";
import { Nav } from "./components/Nav";

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


/* ─── Hero ────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center px-6 pt-32 pb-24 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Hero background texture */}
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        className="object-cover object-center pointer-events-none select-none"
        style={{ opacity: 0.35, mixBlendMode: "multiply" }}
        priority
      />

      <div className="relative max-w-5xl mx-auto w-full">
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-10"
          style={{ animation: "fadeUp 0.6s cubic-bezier(0.25,0.46,0.45,0.94) both" }}
        >
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
            letterSpacing: "-0.032em",
            animation: "fadeUp 0.6s cubic-bezier(0.25,0.46,0.45,0.94) 0.12s both",
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
          style={{ color: "var(--foreground)", fontSize: "1.05rem", letterSpacing: "0.01em", animation: "fadeUp 0.6s cubic-bezier(0.25,0.46,0.45,0.94) 0.24s both" }}
        >
          Done-for-you business setup, systems &amp; AI support — for small service businesses.
        </p>

        {/* Subtext */}
        <p
          className="font-body text-lg leading-relaxed mb-12 max-w-xl"
          style={{ color: "var(--muted)", fontWeight: 300, animation: "fadeUp 0.6s cubic-bezier(0.25,0.46,0.45,0.94) 0.34s both" }}
        >
          I help you get the right foundations in place, clean up your workflows,
          and use AI in ways that actually save time — so your business runs more
          smoothly and you can focus on your clients.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4" style={{ animation: "fadeUp 0.6s cubic-bezier(0.25,0.46,0.45,0.94) 0.44s both" }}>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center justify-center px-7 py-3.5 font-medium transition-opacity hover:opacity-80"
            style={{
              background: "var(--foreground)",
              color: "var(--background)",
              borderRadius: "8px",
              fontSize: "0.9rem",
              letterSpacing: "0.02em",
              boxShadow: "rgba(50,50,93,0.14) 0px 8px 24px -8px, rgba(0,0,0,0.08) 0px 4px 12px -4px",
            }}
          >
            Book a call
          </a>
          <a
            href="#services"
            className="font-body inline-flex items-center justify-center px-7 py-3.5 font-medium transition-opacity hover:opacity-70"
            style={{
              border: "1px solid rgba(0,0,0,0.15)",
              color: "var(--foreground)",
              borderRadius: "8px",
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
        <AnimateIn className="self-start">
          <h2
            className="font-display font-light leading-[1.15]"
            style={{
              fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
              color: "var(--foreground)",
              letterSpacing: "-0.022em",
            }}
          >
            Good businesses often outgrow their systems{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              before they realize it.
            </em>
          </h2>
        </AnimateIn>
        <AnimateIn delay={100} className="self-start">
          <p
            className="font-body text-lg leading-relaxed"
            style={{ color: "var(--muted)", fontWeight: 300 }}
          >
            Leads come in from different places. Admin piles up. Important steps
            stay manual. I help clean that up with better setup, better systems,
            and practical AI support.
          </p>
        </AnimateIn>
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
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-12 sm:gap-16 items-start">
        {/* List */}
        <div>
          <AnimateIn>
            <p
              className="font-body text-xs uppercase tracking-[0.18em] mb-12"
              style={{ color: "var(--muted)" }}
            >
              What you get
            </p>
          </AnimateIn>
          <div>
            {outcomes.map((p, i) => (
              <AnimateIn key={p} delay={i * 70}>
                <div
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
              </AnimateIn>
            ))}
          </div>
        </div>

        <div>
          <AnimateIn delay={200}>
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                height: "clamp(380px, 52vh, 560px)",
                boxShadow: "rgba(50,50,93,0.18) 0px 32px 64px -20px, rgba(0,0,0,0.12) 0px 16px 36px -16px",
              }}
            >
              <Image
                src="/what-you-get.png"
                alt="Working on business systems"
                fill
                className="object-cover object-top"
              />
            </div>
          </AnimateIn>
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
        <AnimateIn className="mb-24">
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
              letterSpacing: "-0.034em",
              lineHeight: 1.08,
            }}
          >
            Support for different
            <br className="sm:hidden" />
            {" "}<em style={{ fontStyle: "italic", color: "#8EA4B8" }}>
              stages of growth
            </em>
          </h2>
        </AnimateIn>

        <div className="grid sm:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <AnimateIn key={s.name} delay={i * 90}>
              <div
                className="flex flex-col p-9 rounded-xl h-full"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
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
            </AnimateIn>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-24">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center justify-center px-8 py-3.5 font-medium transition-opacity hover:opacity-70"
            style={{
              border: "1px solid rgba(142,164,184,0.35)",
              color: "#A8C0D0",
              borderRadius: "8px",
              fontSize: "0.875rem",
              letterSpacing: "0.02em",
              background: "rgba(142,164,184,0.06)",
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
        <AnimateIn className="self-start">
          <h2
            className="font-display font-light leading-[1.15]"
            style={{
              fontSize: "clamp(1.7rem, 3vw, 2.2rem)",
              color: "var(--foreground)",
              letterSpacing: "-0.022em",
            }}
          >
            <span className="block">Most people start with AI tools.</span>
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              I start with how your business actually runs.
            </em>
          </h2>
        </AnimateIn>
        <AnimateIn delay={100} className="self-start">
          <p
            className="font-body text-lg leading-relaxed"
            style={{ color: "var(--muted)", fontWeight: 300 }}
          >
            That means the goal isn&rsquo;t more software. It&rsquo;s a
            business that feels more organized, more efficient, and easier to
            grow.
          </p>
        </AnimateIn>
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
            <AnimateIn key={c.title} delay={i * 80}>
              <div
                className="flex flex-col gap-4 p-7 rounded-xl h-full"
                style={{
                  background: "var(--background)",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "rgba(50,50,93,0.07) 0px 12px 32px -12px, rgba(0,0,0,0.05) 0px 6px 16px -6px",
                }}
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
            </AnimateIn>
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
        <AnimateIn>
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
            style={{
              borderRadius: "1.5rem",
              boxShadow: "rgba(50,50,93,0.14) 0px 20px 48px -16px, rgba(0,0,0,0.1) 0px 10px 24px -10px",
            }}
            priority
          />
        </div>
        </AnimateIn>

        {/* Text */}
        <AnimateIn delay={120}>
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
                letterSpacing: "-0.025em",
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
        </AnimateIn>
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
      <AnimateIn className="max-w-2xl mx-auto flex flex-col items-center text-center">
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
            letterSpacing: "-0.034em",
            lineHeight: 1.08,
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
          Tell me what&rsquo;s feeling repetitive, messy, or disconnected, and
          I&rsquo;ll be in touch.
        </p>

        {/* Primary CTA */}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body inline-flex items-center justify-center px-8 py-3.5 font-medium transition-opacity hover:opacity-70 mb-14"
          style={{
            background: "#F7F4F0",
            color: "#16191C",
            borderRadius: "8px",
            fontSize: "0.9rem",
            letterSpacing: "0.02em",
            boxShadow: "rgba(0,0,0,0.2) 0px 4px 16px -4px",
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
      </AnimateIn>
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
