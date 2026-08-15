import "./projects.css";
import { projects } from "../../data/siteData";
import Icon from "../Icon/Icon";

export default function Projects() {
  return (
    <section id="projects" className="container section">
      <div className="section-heading">
        <div><div className="section-label">03 / PROJECTS</div><h3>Selected work</h3></div>
        <a className="text-link" href="https://github.com/" target="_blank" rel="noreferrer">
          View GitHub <Icon name="upRight" size={15} />
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card glass" key={project.title}>
            <div className={`project-art ${project.visual}`}>
              <span className="art-symbol">{project.symbol}</span>
              <span className="art-number">{project.number}</span>
            </div>
            <div className="project-content">
              <div className="project-category">{project.category}</div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">Source <Icon name="github" size={14} /></a>
                <a href={project.demo}>Live demo <Icon name="upRight" size={14} /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}