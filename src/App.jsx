import { useState } from "react";
import "./styles/core/global.css";
import "./styles/core/theme.css";
import { navItems } from "./data/siteData";
import { useScrollSpy } from "./hooks/useScrollSpy/useScrollSpy";
import {
  Navbar,
  Hero,
  Stats,
  About,
  Skills,
  Projects,
  Experience,
  Certifications,
  Contact,
  Footer,
} from "./components";

export default function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(navItems.map((item) => item.id));

  return (
    <div className={`app ${dark ? "theme-dark" : "theme-light"}`}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <Navbar
        navItems={navItems}
        activeId={activeId}
        dark={dark}
        onThemeToggle={() => setDark((value) => !value)}
        menuOpen={menuOpen}
        onMenuToggle={setMenuOpen}
      />

      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
