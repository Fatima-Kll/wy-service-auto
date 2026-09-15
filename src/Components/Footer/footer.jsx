import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>
            W&Y <span>SERVICE AUTO</span>
          </h2>

          <p>
            Votre garage de confiance pour l'entretien,
            le diagnostic et la réparation de votre véhicule.
          </p>

          <a href="#appointment" className="footer-button">
            Prendre rendez-vous
          </a>
        </div>

        {/* NAVIGATION */}
        <div className="footer-links">
          <h3>Navigation</h3>

          <a href="#home">Accueil</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Avis clients</a>
          <a href="#appointment">Rendez-vous</a>
          <a href="#contact">Contact</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <a
            href="https://www.google.com/maps/place/W+Y+service+auto/@46.3631392,-72.5147138,582m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4cc7c7a462fae60b:0xf39d75ca2ebc01df!8m2!3d46.3631392!4d-72.5147138!16s%2Fg%2F11x14hqktg!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-location"
          >
            📍 <span>Trois-Rivières, Québec</span>
          </a>

          <p>
            📞{" "}
            <a href="tel:+18193703330">
              819-370-3330
            </a>
          </p>

          <p>
            ✉️{" "}
            <a href="mailto:info@whc.ca">
              info@whc.ca
            </a>
          </p>
        </div>

        {/* HORAIRES */}
        {/* HORAIRES */}
{/* HORAIRES */}
<div className="footer-hours">
    <h3>Horaires</h3>

    <div className="footer-hours-content">

        <div className="hours-row">
            <span className="hours-day">Lundi</span>
            <span className="hours-time">08:00 – 17:00</span>
        </div>

        <div className="hours-row">
            <span className="hours-day">Mardi</span>
            <span className="hours-time">08:00 – 17:00</span>
        </div>

        <div className="hours-row">
            <span className="hours-day">Mercredi</span>
            <span className="hours-time">08:00 – 17:00</span>
        </div>

        <div className="hours-row">
            <span className="hours-day">Jeudi</span>
            <span className="hours-time">08:00 – 17:00</span>
        </div>

        <div className="hours-row">
            <span className="hours-day">Vendredi</span>
            <span className="hours-time">
                08:00 – 12:00<br />
                14:00 – 17:00
            </span>
        </div>

        <div className="hours-row">
            <span className="hours-day">Samedi</span>
            <span className="hours-time hours-closed">Fermé</span>
        </div>

        <div className="hours-row">
            <span className="hours-day">Dimanche</span>
            <span className="hours-time hours-closed">Fermé</span>
        </div>

    </div>
        </div>
        
        
      </div>

     {/* BOTTOM */}
<div className="footer-bottom">

  <p>
    © {new Date().getFullYear()} W&Y Service Auto.
    Tous droits réservés.
  </p>

  <div className="footer-bottom-right">

    <span className="footer-credit">
      Site web conçu & développé par{" "}
      <a
        href="https://www.linkedin.com/in/fatima-zahra-kellal/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fatima Zahra Kellal
      </a>
    </span>

    <a
      href="#home"
      className="footer-back-top"
    >
      Retour en haut ↑
    </a>

  </div>

</div>
    </footer>
  );
}

export default Footer;