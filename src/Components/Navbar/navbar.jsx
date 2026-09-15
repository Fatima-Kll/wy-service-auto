import { useState } from "react";
import "./navbar.css";
import logo from "../../assets/images/14.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <img
            src={logo}
            alt="W&Y Service Auto"
            className="logo-image"
          />
        </a>

        {/* NAVIGATION */}
        <nav
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
          id="primary-navigation"
        >
          <a href="#home" onClick={closeMenu}>
            Accueil
          </a>

          <a href="#about" onClick={closeMenu}>
            À propos
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#testimonials" onClick={closeMenu}>
            Avis
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          {/* Bouton dans le menu mobile */}
          <a
            href="#appointment"
            className="nav-button mobile-button"
            onClick={closeMenu}
          >
            Prendre rendez-vous
          </a>
        </nav>

        {/* Bouton desktop */}
        <a
          href="#appointment"
          className="nav-button desktop-button"
        >
          Prendre rendez-vous
        </a>

        {/* HAMBURGER MOBILE */}
        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={
            menuOpen ? "Fermer le menu" : "Ouvrir le menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;