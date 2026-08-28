interface HeroProps {
  name: string;
  title: string;
  location: string;
  yearsExperience: number;
  contact: {
    linkedin: string;
    github: string;
    email: string;
  };
  cvUrl: string;
}

export default function Hero({
  name,
  title,
  location,
  yearsExperience,
  contact,
  cvUrl,
}: HeroProps) {
  return (
    <section id="hero" style={styles.section} aria-label="Introduction">
      <div className="container">
        {/* Badge row */}
        <div style={styles.badgeRow}>
          <span style={styles.badge}>{yearsExperience}+ years</span>
          <span style={styles.location}>📍 {location}</span>
        </div>

        {/* Name */}
        <h1 style={styles.name}>{name}</h1>

        {/* Title */}
        <p style={styles.title}>{title}</p>

        {/* CTA buttons */}
        <div style={styles.cta}>
          <a href={cvUrl} download style={styles.btnPrimary}>
            Download CV
          </a>
          <a href="#contact" style={styles.btnSecondary}>
            Get in touch
          </a>
        </div>

        {/* Social links */}
        <div style={styles.social} aria-label="Social links">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
            aria-label="LinkedIn"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
            aria-label="GitHub"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </a>
          <a href={contact.email} style={styles.socialLink} aria-label="Email">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "88px 0 80px",
  },
  badgeRow: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "20px",
  },
  badge: {
    display: "inline-block",
    background: "#1f1f1f",
    border: "1px solid #2a2a2a",
    borderRadius: "4px",
    padding: "2px 10px",
    fontSize: "0.78rem",
    fontFamily: "monospace",
    color: "#c8c8c8",
    letterSpacing: "0.06em",
  },
  location: {
    fontSize: "0.85rem",
    color: "#888",
  },
  name: {
    fontSize: "clamp(2.4rem, 6vw, 4rem)",
    fontWeight: 800,
    color: "#ffffff",
    letterSpacing: "-0.02em",
    marginBottom: "12px",
    lineHeight: 1.1,
  },
  title: {
    fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
    color: "#888888",
    marginBottom: "36px",
    fontWeight: 400,
    maxWidth: "none",
  },
  cta: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "40px",
  },
  btnPrimary: {
    display: "inline-block",
    background: "#ffffff",
    color: "#0d0d0d",
    borderRadius: "6px",
    padding: "10px 22px",
    fontWeight: 600,
    fontSize: "0.9rem",
    textDecoration: "none",
    letterSpacing: "0.02em",
  },
  btnSecondary: {
    display: "inline-block",
    background: "transparent",
    color: "#e8e8e8",
    border: "1px solid #2a2a2a",
    borderRadius: "6px",
    padding: "10px 22px",
    fontWeight: 500,
    fontSize: "0.9rem",
    textDecoration: "none",
    letterSpacing: "0.02em",
  },
  social: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  socialLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    color: "#888888",
    textDecoration: "none",
    fontSize: "0.875rem",
  },
};
