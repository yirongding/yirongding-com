// Replace CALENDLY_URL with your actual Calendly link before going live.
const CALENDLY_URL = "https://calendly.com/yirongding";

const LINKEDIN_URL = "https://www.linkedin.com/in/yirongding/";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Problems />
        <Services />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold tracking-tight text-[var(--foreground)]">
          Yirong Ding
        </span>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium px-4 py-2 bg-[var(--accent)] text-white rounded-full hover:opacity-85 transition-opacity"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-6 overflow-hidden">
      {/* Abstract background shapes */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="g1" cx="70%" cy="30%" r="50%">
            <stop offset="0%" stopColor="#bfd4ec" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#bfd4ec" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="g2" cx="15%" cy="75%" r="40%">
            <stop offset="0%" stopColor="#a5c4e0" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#a5c4e0" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g1)" />
        <rect width="100%" height="100%" fill="url(#g2)" />
        {/* Decorative circles */}
        <circle cx="82%" cy="20%" r="180" fill="none" stroke="#3b6fa0" strokeWidth="1" strokeOpacity="0.1" />
        <circle cx="82%" cy="20%" r="280" fill="none" stroke="#3b6fa0" strokeWidth="1" strokeOpacity="0.06" />
        <circle cx="10%" cy="85%" r="120" fill="none" stroke="#3b6fa0" strokeWidth="1" strokeOpacity="0.08" />
      </svg>

      <div className="relative max-w-5xl mx-auto">
        <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-6">
          AI Systems for Operators
        </p>
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.1] text-[var(--foreground)] max-w-3xl mb-8">
          Your business is leaking time and leads.
        </h1>
        <p className="text-xl text-[var(--muted)] max-w-2xl leading-relaxed mb-10">
          I build AI workflows that handle the follow-up, the busywork, and the
          handoffs — so you can focus on what actually grows your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[var(--accent)] text-white rounded-full font-medium hover:opacity-85 transition-opacity"
          >
            Book a discovery call
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-6 py-3 border border-[var(--border)] text-[var(--foreground)] rounded-full font-medium hover:border-[var(--muted)] transition-colors"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

const problems = [
  {
    title: "Lead follow-up slips",
    description:
      "New leads go cold while you're working with current clients. By the time you circle back, they've already moved on.",
  },
  {
    title: "Repetitive tasks eat your day",
    description:
      "Updating the CRM, sending the same messages, copy-pasting between tools — hours gone to work that should take minutes.",
  },
  {
    title: "Your tools don't talk to each other",
    description:
      "Leads come in from five places, nothing syncs automatically, and things fall through the cracks no matter how organized you try to be.",
  },
  {
    title: "AI feels out of reach",
    description:
      "You know it can help. Everyone says so. But knowing where to start — and what's actually useful for your business — is a different problem.",
  },
];

function Problems() {
  return (
    <section className="py-24 px-6 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">
          Who I work with
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Real estate agents and teams, mostly.
        </h2>
        <p className="text-lg text-[var(--muted)] max-w-2xl mb-16">
          Also founders and operators in other industries who are growing faster
          than their current systems can handle. If any of this sounds familiar,
          we should talk.
        </p>
        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10">
          {problems.map((p) => (
            <div key={p.title} className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-[var(--muted)] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    name: "Workflow Audit",
    tagline: "Find where time and leads are slipping.",
    description:
      "A focused 1–2 hour session where we map your current workflows, identify the biggest bottlenecks, and figure out exactly where AI can have the most impact. You leave with a clear picture of what to fix first.",
    cta: "Start here",
  },
  {
    name: "Custom AI System Build",
    tagline: "Get the system built for you.",
    description:
      "I design and build automations and AI agents tailored to your specific workflows — from lead intake and follow-up to client communication and reporting. Built to work with the tools you already use.",
    cta: "Book a call",
  },
  {
    name: "Ongoing Support",
    tagline: "Keep it working as your business grows.",
    description:
      "Your workflows will evolve. I stay on to help you adapt, expand, and get more out of the systems we build together — without you needing to learn how any of it works under the hood.",
    cta: "Book a call",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-white border-t border-[var(--border)]"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">
          How I can help
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-16">
          Three ways to work together.
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="flex flex-col gap-4 p-6 border border-[var(--border)] rounded-2xl"
            >
              <div>
                <h3 className="font-semibold text-lg mb-1">{s.name}</h3>
                <p className="text-sm text-[var(--muted)] font-medium">
                  {s.tagline}
                </p>
              </div>
              <p className="text-[var(--muted)] text-sm leading-relaxed flex-1">
                {s.description}
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--accent)] hover:opacity-70 transition-opacity"
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

function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Hi, I&rsquo;m Yirong.
          </h2>
        </div>
        <div className="flex flex-col gap-5 text-[var(--muted)] leading-relaxed">
          <p>
            I build AI systems for small businesses and operators — practical,
            working automations that solve real problems, not proof-of-concept
            demos.
          </p>
          <p>
            I started this work because I kept watching smart, busy people lose
            hours every week to tasks that AI could handle. The tools exist. The
            hard part is knowing which ones to use, how to connect them, and how
            to make them actually fit the way a real business operates.
          </p>
          <p>
            I&rsquo;m building this practice in public — sharing what I&rsquo;m
            learning and testing along the way. If you want to follow along,
            I&rsquo;m on{" "}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[var(--accent)] text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-semibold tracking-tight mb-4">
          Not sure where to start?
        </h2>
        <p className="text-lg opacity-70 max-w-xl mx-auto mb-10">
          Book a free 30-minute call. No pitch, no pressure — just a
          conversation about your workflows and whether AI can genuinely help.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--accent)] rounded-full font-medium text-lg hover:opacity-90 transition-opacity"
        >
          Book a discovery call
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[var(--muted)]">
        <span>© {new Date().getFullYear()} Yirong Ding</span>
        <div className="flex gap-6">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yirong@yirongding.com"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
