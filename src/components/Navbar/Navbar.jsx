import "./navbar.css";
import { scrollToSection } from "../../utils/scrollToSection";
import Icon from "../Icon/Icon";

export default function Navbar({ navItems, activeId, dark, onThemeToggle, menuOpen, onMenuToggle }) {
  const scrollTo = (id) => {
    scrollToSection(id);
    onMenuToggle(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Go to home">
          <span className="brand-mark">MP</span>
          <span>Mahesh Phalke</span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activeId === item.id ? "active" : ""}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-button" onClick={onThemeToggle} aria-label="Toggle theme">
            <Icon name={dark ? "sun" : "moon"} size={17} />
          </button>

          <a className="cv-button" href="/resumes/Mahesh_Phalke_Developer_L1_Resume.pdf" download>
            Download CV <Icon name="download" size={15} />
          </a>

          <button className="mobile-menu icon-button" onClick={() => onMenuToggle(!menuOpen)} aria-label="Toggle menu">
            <Icon name={menuOpen ? "close" : "menu"} size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}