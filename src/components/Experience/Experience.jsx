import "./experience.css";
import { experience } from "../../data/siteData";

export default function Experience() {
  return (
    <section id="experience" className="container section">
      <div className="section-label">04 / EXPERIENCE</div>
      <div className="timeline glass">
        {experience.map((item) => (
          <article className="timeline-item" key={`${item.date}-${item.role}`}>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-node" />
            <div>
              <h4>{item.role}</h4>
              <b>{item.company}</b>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}