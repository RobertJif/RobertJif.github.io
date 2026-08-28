interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

interface ExperienceProps {
  experience: ExperienceEntry[];
  totalExperienceNote: string;
}

export default function Experience({
  experience,
  totalExperienceNote,
}: ExperienceProps) {
  return (
    <section id="experience" className="section" aria-label="Work experience">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've worked</h2>

        <ol style={styles.timeline} aria-label="Work history">
          {experience.map((job, index) => (
            <li key={index} style={styles.item}>
              {/* Timeline dot */}
              <div style={styles.dotColumn} aria-hidden="true">
                <div style={index === 0 ? styles.dotActive : styles.dot} />
                {index < experience.length - 1 && <div style={styles.line} />}
              </div>

              {/* Content */}
              <div style={styles.content}>
                <div style={styles.header}>
                  <div>
                    <h3 style={styles.jobTitle}>{job.title}</h3>
                    <span style={styles.company}>{job.company}</span>
                  </div>
                  <span style={styles.period}>{job.period}</span>
                </div>

                <ul
                  style={styles.bullets}
                  aria-label={`Responsibilities at ${job.company}`}
                >
                  {job.bullets.map((bullet, bi) => (
                    <li key={bi} style={styles.bullet}>
                      <span style={styles.bulletDot} aria-hidden="true">
                        —
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <p style={styles.note}>{totalExperienceNote}</p>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  timeline: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    display: "flex",
    gap: "20px",
    marginBottom: "48px",
  },
  dotColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexShrink: 0,
    paddingTop: "6px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#2a2a2a",
    border: "2px solid #444",
    flexShrink: 0,
  },
  dotActive: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#ffffff",
    flexShrink: 0,
  },
  line: {
    width: "1px",
    flex: 1,
    background: "#2a2a2a",
    marginTop: "6px",
  },
  content: {
    flex: 1,
    paddingBottom: "8px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "16px",
    marginBottom: "16px",
    flexWrap: "wrap",
  },
  jobTitle: {
    color: "#ffffff",
    fontWeight: 700,
    fontSize: "1.05rem",
    marginBottom: "4px",
  },
  company: {
    fontSize: "0.875rem",
    color: "#888",
  },
  period: {
    fontSize: "0.78rem",
    color: "#555",
    fontFamily: "monospace",
    whiteSpace: "nowrap",
    flexShrink: 0,
    paddingTop: "3px",
  },
  bullets: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  bullet: {
    fontSize: "0.9rem",
    color: "#c0c0c0",
    lineHeight: 1.65,
    display: "flex",
    gap: "10px",
  },
  bulletDot: {
    color: "#444",
    flexShrink: 0,
    marginTop: "1px",
  },
  note: {
    fontSize: "0.85rem",
    color: "#555",
    fontStyle: "italic",
    marginTop: "8px",
    maxWidth: "none",
  },
};
