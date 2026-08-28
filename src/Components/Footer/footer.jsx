import "./footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>W&Y <span>SERVICE AUTO</span></h2>

          <p>
            Votre garage de confiance pour l'entretien,
            le diagnostic et la réparation de votre véhicule.
          </p>

          <a href="#appointment" className="footer-button">
            Prendre rendez-vous
          </a>

        </div>


        <div className="footer-links">

          <h3>Navigation</h3>

          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Avis</a>
          <a href="#contact">Contact</a>

        </div>


        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📍 Trois-Rivières, Québec</p>
         <p>
  📞 <a href="tel:+18193703330">819-370-3330</a>
</p>

<p>
  ✉️ <a href="mailto:meca.gms@gmail.com">meca.gms@gmail.com</a>
</p>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} W&Y Service Auto.
          Tous droits réservés.
        </p>

        <a href="#home">
          Retour en haut ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;