const LINKEDIN_URL = "https://www.linkedin.com/in/yirongding/";

export function Footer() {
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
