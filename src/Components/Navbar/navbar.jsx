import "./navbar.css";
function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo">
          W&Y SERVICE AUTO
        </a>

        <nav className="nav-links">
          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Avis</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#appointment" className="nav-button">
          Prendre rendez-vous
        </a>

      </div>
    </header>
  );
}

export default Navbar;