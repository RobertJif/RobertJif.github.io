interface Project {
  name: string;
  companyRef: string;
  stack: string[];
  description: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  // Group projects by companyRef to build the employment-linked timeline
  const grouped = projects.reduce<Record<string, Project[]>>((acc, project) => {
    if (!acc[project.companyRef]) acc[project.companyRef] = [];
    acc[project.companyRef].push(project);
    return acc;
  }, {});

  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I've built</h2>

        <div style={styles.timeline}>
          {Object.entries(grouped).map(([company, companyProjects]) => (
            <div key={company} style={styles.group}>
              {/* Employer label */}
              <div style={styles.employerRow}>
                <div style={styles.employerDot} aria-hidden="true" />
                <span style={styles.employerName}>{company}</span>
              </div>

              {/* Projects for this employer */}
              <div style={styles.projectsContainer}>
                <div style={styles.verticalLine} aria-hidden="true" />
                <div style={styles.projectCards}>
                  {companyProjects.map((project, pi) => (
                    <article
                      key={pi}
                      style={styles.card}
                      aria-label={project.name}
                    >
                      <h3 style={styles.projectName}>{project.name}</h3>
                      <p style={styles.description}>{project.description}</p>
                      <div style={styles.stack} aria-label="Tech stack">
                        {project.stack.map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "0",
  },
  group: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "40px",
  },
  employerRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  },
  employerDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#ffffff",
    flexShrink: 0,
  },
  employerName: {
    fontSize: "0.8rem",
    fontFamily: "monospace",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#666",
    fontWeight: 600,
  },
  projectsContainer: {
    display: "flex",
    gap: "20px",
    paddingLeft: "4px",
  },
  verticalLine: {
    width: "1px",
    background: "#2a2a2a",
    flexShrink: 0,
    marginLeft: "4px",
  },
  projectCards: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    paddingLeft: "16px",
    paddingBottom: "8px",
  },
  card: {
    background: "#161616",
    border: "1px solid #2a2a2a",
    borderRadius: "8px",
    padding: "20px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  projectName: {
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#e8e8e8",
  },
  description: {
    fontSize: "0.875rem",
    color: "#888",
    lineHeight: 1.65,
    maxWidth: "none",
  },
  stack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginTop: "4px",
  },
};
