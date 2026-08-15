import "./stats.css";

const stats = [
  ["3", "Target career roles"],
  ["7.72", "B.Tech CGPA"],
  ["4", "Featured projects"],
  ["100%", "Relocation flexibility"],
];

export default function Stats() {
  return (
    <section className="container stats" aria-label="Career highlights">
      {stats.map(([value, label], index) => (
        <div className="stat" key={label}>
          <span className="stat-icon">{["⌘", "◈", "★", "↗"][index]}</span>
          <div><strong>{value}</strong><small>{label}</small></div>
        </div>
      ))}
    </section>
  );
}