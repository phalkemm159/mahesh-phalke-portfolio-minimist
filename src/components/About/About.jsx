import "./about.css";
import Icon from "../Icon/Icon";
import { education, profile } from "../../data/siteData";

export default function About() {
  return (
    <section id="about" className="container section">
      <div className="about-layout">
        <div className="section-label">01 / ABOUT</div>
        <div className="about-card glass">
          <div>
            <div className="mini-label">PROFILE</div>
            <h3>Data + software<br /><span>builder mindset.</span></h3>
            <p>{profile.summary}</p>
            <div className="about-points">
              <span><Icon name="check" size={15} /> Analytical thinking</span>
              <span><Icon name="check" size={15} /> Agile collaboration</span>
              <span><Icon name="check" size={15} /> Technical documentation</span>
              <span><Icon name="check" size={15} /> Unit testing</span>
            </div>
          </div>

          <div className="about-profile">
            <div className="profile-head">
              <div className="profile-avatar">MP</div>
              <div><b>{profile.name}</b><small>B.Tech Computer Engineering • 2026</small></div>
            </div>
            <div className="profile-info"><Icon name="map" size={15} /> {profile.location}</div>
            <div className="profile-info"><Icon name="mail" size={15} /> {profile.email}</div>
            <div className="profile-info"><Icon name="phone" size={15} /> {profile.phone}</div>
            <div className="profile-info"><Icon name="check" size={15} /> {profile.availability}</div>
            <div className="profile-info"><Icon name="check" size={15} /> Data Analyst • Data Scientist • Full Stack Developer</div>
            <div className="education-mini">
              <b>Education</b>
              {education.map((item) => (
                <div key={item.degree}><strong>{item.degree}</strong><small>{item.institute} • {item.score}</small></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}