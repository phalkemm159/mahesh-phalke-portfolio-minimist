import "./contact.css";
import { useState } from "react";
import Icon from "../Icon/Icon";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="container section contact-section">
      <div className="contact-copy">
        <div className="section-label">06 / CONTACT</div>
        <h3>Let's build something<br /><span>meaningful.</span></h3>
        <p>I’m open to opportunities in Data Analytics, Data Science and Full Stack Development. Based in Pune, Maharashtra and willing to relocate anywhere in India.</p>

        <div className="contact-details">
          <a href="mailto:phalkhemm159@gmail.com"><Icon name="mail" size={16} /><span>Email<b>phalkemm159@gmail.com</b></span></a>
          <a href="tel:9834570499"><Icon name="phone" size={16} /><span>Phone<b>9834570499</b></span></a>
          <div><Icon name="map" size={16} /><span>Location<b>Maharashtra, India</b></span></div>
        </div>
      </div>

      <form className="contact-form glass" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Name<input required placeholder="Your name" /></label>
          <label>Email<input required type="email" placeholder="you@example.com" /></label>
        </div>
        <label>Subject<input required placeholder="How can I help?" /></label>
        <label>Message<textarea required rows="6" placeholder="Tell me about your project or opportunity..." /></label>
        <button className="primary-button full-width" type="submit">
          {sent ? "Message ready ✓" : "Send Message"} <Icon name="send" size={15} />
        </button>
        <small className="form-note">Connect this form to Formspree, Web3Forms or your own API before production.</small>
      </form>
    </section>
  );
}