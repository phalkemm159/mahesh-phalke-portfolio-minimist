import "./footer.css";
import Icon from "../Icon/Icon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand"><span className="brand-mark small">M</span><b>Mahesh Phalke</b></div>
        <span>© 2026 Mahesh Phalke Portfolio.</span>
        <div className="footer-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer"><Icon name="github" size={15} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Icon name="linkedin" size={15} /></a>
          <a href="#home" aria-label="Back to top"><span>↑</span></a>
        </div>
      </div>
    </footer>
  );
}