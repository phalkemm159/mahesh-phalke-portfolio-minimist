import "./skills.css";
import Icon from "../Icon/Icon";
import { skills, roleHighlights } from "../../data/siteData";

export default function Skills() {
  return (
    <section id="skills" className="container section">
      <div className="section-heading">
        <div><div className="section-label">02 / SKILLS</div><h3>My technical toolbox</h3></div>
        <span className="muted">Projects • coursework • continuous practice</span>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <article className={`skill-card glass ${index === 3 ? "skill-wide" : ""}`} key={skill.title}>
            <div className="skill-title"><span><Icon name={skill.icon} size={17} /></span>{skill.title}</div>
            <div className="tags">{skill.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}