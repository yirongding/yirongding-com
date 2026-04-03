import Image from "next/image";

// Replace CALENDLY_URL with your actual Calendly link before going live.
const CALENDLY_URL = "https://calendly.com/yirongding";

const LINKEDIN_URL = "https://www.linkedin.com/in/yirongding/";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Problems />
        <Services />
        <CommonStart />
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
        <circle cx="82%" cy="20%" r="180" fill="none" stroke="#3b6fa0" strokeWidth="1" strokeOpacity="0.1" />
        <circle cx="82%" cy="20%" r="280" fill="none" stroke="#3b6fa0" strokeWidth="1" strokeOpacity="0.06" />
        <circle cx="10%" cy="85%" r="120" fill="none" stroke="#3b6fa0" strokeWidth="1" strokeOpacity="0.08" />
      </svg>

      <div className="relative max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.1] text-[var(--foreground)] max-w-3xl mb-8">
          Let AI handle the repetitive work so your team can focus on the
          connections that matter.
        </h1>
        <p className="text-xl text-[var(--muted)] max-w-2xl leading-relaxed mb-10">
          I help real estate teams and growing businesses build better systems
          for lead capture, workflow organization, and manual admin.
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

function Intro() {
  return (
    <section className="py-24 px-6 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-16 items-start">
        <h2 className="text-3xl font-semibold tracking-tight leading-snug">
          Leads come in from everywhere.
          <br />
          The work behind them usually doesn&rsquo;t.
        </h2>
        <p className="text-lg text-[var(--muted)] leading-relaxed">
          When information is scattered, intake is manual, and too much depends
          on memory, good opportunities get harder to manage. I help businesses
          put cleaner systems in place so less gets missed and the day-to-day
          runs more smoothly.
        </p>
      </div>
    </section>
  );
}

const problems = [
  "Leads coming in from too many places",
  "Manual intake and repetitive admin",
  "Missed or delayed inquiries",
  "Scattered information across tools",
  "CRM processes that feel messy or inconsistent",
  "Workflows that rely too heavily on one person",
];

function Problems() {
  return (
    <section className="py-24 px-6 bg-white border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-10">
          Problems I solve
        </p>
        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-5">
          {problems.map((p) => (
            <div key={p} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
              <p className="text-lg text-[var(--foreground)]">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    name: "Workflow audit",
    description:
      "A focused review of your current process, tools, and bottlenecks so we can see where things are breaking down and what's worth fixing first.",
    cta: "Start here",
  },
  {
    name: "One-time system setup",
    description:
      "A done-for-you setup for a specific workflow, like lead capture, CRM routing, intake organization, or another process that's creating friction.",
    cta: "Book a call",
  },
  {
    name: "Ongoing support",
    description:
      "For businesses that want continued help improving systems, simplifying workflows, and building on what's already working.",
    cta: "Book a call",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 px-6 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">
          Ways to work together
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mt-10">
          {services.map((s) => (
            <div
              key={s.name}
              className="flex flex-col gap-4 p-6 border border-[var(--border)] rounded-2xl"
            >
              <h3 className="font-semibold text-lg">{s.name}</h3>
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

function CommonStart() {
  return (
    <section className="py-24 px-6 bg-[var(--accent-light)] border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-16 items-start">
        <h2 className="text-2xl font-semibold tracking-tight leading-snug">
          A common place to start
        </h2>
        <p className="text-lg text-[var(--muted)] leading-relaxed">
          For many businesses, the first issue is lead capture. Inquiries come
          in from different channels, but there&rsquo;s no clean system for
          collecting them, organizing them, and routing them where they need to
          go. Fixing that first creates a stronger foundation for everything that
          comes next.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div className="relative w-full max-w-sm mx-auto sm:mx-0">
          <div className="absolute inset-0 rounded-3xl bg-[var(--accent)] opacity-10 translate-x-3 translate-y-3" />
          <Image
            src="/yirong.jpg"
            alt="Yirong Ding"
            width={600}
            height={800}
            className="relative rounded-3xl object-cover w-full shadow-sm"
            priority
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">
              About
            </p>
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              Hi, I&rsquo;m Yirong.
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-[var(--muted)] leading-relaxed">
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
                className="text-[var(--accent)] underline underline-offset-2 hover:opacity-70 transition-opacity"
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

function CallToAction() {
  return (
    <section id="contact" className="py-24 px-6 bg-[var(--accent)] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-semibold tracking-tight mb-4">
          If your lead flow feels more manual than it should, let&rsquo;s talk.
        </h2>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center mt-8 px-8 py-4 bg-white text-[var(--accent)] rounded-full font-medium text-lg hover:opacity-90 transition-opacity"
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
