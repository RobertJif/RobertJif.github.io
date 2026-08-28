interface NavProps {
  name: string;
}

export default function Nav({ name }: NavProps) {
  return (
    <>
      {/* Agent/crawler profile bar */}
      <div
        style={styles.agentBar}
        role="complementary"
        aria-label="Machine-readable profile"
      >
        <span style={styles.agentLabel}>🤖</span>
        <a
          href="/downloads/Robert_CV_Agent.md"
          style={styles.agentLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Machine-readable Markdown profile for AI agents and crawlers"
        >
          Agent &amp; crawler profile available →
        </a>
      </div>

      <header style={styles.header}>
        <nav style={styles.nav} aria-label="Main navigation">
          <span style={styles.brand}>{name}</span>
          <ul style={styles.links}>
            <li>
              <a href="#about" style={styles.link}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" style={styles.link}>
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" style={styles.link}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" style={styles.link}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" style={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  agentBar: {
    width: "100%",
    backgroundColor: "#111111",
    borderBottom: "1px solid #1e1e1e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "6px 24px",
  },
  agentLabel: {
    fontSize: "0.78rem",
    lineHeight: 1,
  },
  agentLink: {
    fontSize: "0.72rem",
    fontFamily: "monospace",
    letterSpacing: "0.05em",
    color: "#555555",
    textDecoration: "none",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "rgba(13,13,13,0.92)",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid #2a2a2a",
    height: "56px",
    display: "flex",
    alignItems: "center",
  },
  nav: {
    width: "100%",
    maxWidth: "860px",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    fontWeight: 700,
    fontSize: "1rem",
    color: "#ffffff",
    letterSpacing: "0.02em",
  },
  links: {
    display: "flex",
    gap: "28px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    fontSize: "0.85rem",
    color: "#888888",
    textDecoration: "none",
    letterSpacing: "0.03em",
  },
};
