interface SkillsProps {
  skills: Record<string, string[]>;
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="section" aria-label="Skills">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">What I work with</h2>

        <div style={styles.grid}>
          {Object.entries(skills).map(([category, tags]) => (
            <div key={category} style={styles.group}>
              <h3 style={styles.category}>{category}</h3>
              <div style={styles.tagCloud} aria-label={`${category} skills`}>
                {tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "36px",
  },
  group: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  category: {
    fontSize: "0.72rem",
    fontFamily: "monospace",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#888",
    fontWeight: 600,
  },
  tagCloud: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
};
