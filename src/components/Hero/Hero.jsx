import "./hero.css";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { profile } from "../../data/siteData";

export default function Hero() {
  return (
    <section id="home" className="container hero section">
      <div className="hero-copy">
        <div className="eyebrow">👋 Hello, I'm</div>
        <h1>Mahesh <span>Phalke</span></h1>
        <h2>Data Analyst <b>•</b> Data Scientist <b>•</b> Full Stack Developer</h2>
        <p>
          {profile.summary}
        </p>

        <div className="hero-buttons">
          <Button href="#projects" icon="down">Explore My Work</Button>
          <Button variant="secondary" href="/resumes/Mahesh_Phalke_Data_Science_Resume.pdf" download icon="download">
            Data Analyst / Data Scientist Resume
          </Button>
          <Button variant="secondary" href="/resumes/Mahesh_Phalke_Developer_L1_Resume.pdf" download icon="download">
            Developers Resume
          </Button>
        </div>

        <div className="hero-meta">
          <span>📍 {profile.location}</span>
          <span>✉ {profile.email}</span>
        </div>

        <div className="social-links">
          <a href="https://github.com/phalkemm159/" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={18} /></a>
          <a href="https://www.linkedin.com/in/mahesh-phalke159/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" size={18} /></a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Professional portrait of Mahesh Phalke">
        <div className="hero-halo" />
        <div className="hero-ring ring-one" />
        <div className="hero-ring ring-two" />

        <div className="hero-photo-frame">
          <div className="hero-photo-glow" />
          <img
            className="hero-photo"
            src="/images/mahesh-profile.png"
            alt="Mahesh Phalke"
          />
        </div>

        <div className="availability"><span /> Willing to relocate anywhere in India</div>
        <div className="floating-card floating-top">⚡ Full Stack<br /><b>+ AI / ML</b></div>
        <div className="floating-card floating-bottom">Python • Java • SQL<br /><b>RAG • ETL • React</b></div>
      </div>
    </section>
  );
}