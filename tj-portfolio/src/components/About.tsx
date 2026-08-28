interface AboutProps {
  about: string;
}

export default function About({ about }: AboutProps) {
  return (
    <section id="about" className="section" aria-label="About">
      <div className="container">
        <p className="section-label">About</p>
        <p style={styles.text}>{about}</p>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  text: {
    fontSize: "clamp(1rem, 2vw, 1.15rem)",
    color: "#c8c8c8",
    lineHeight: 1.8,
    maxWidth: "68ch",
  },
};
