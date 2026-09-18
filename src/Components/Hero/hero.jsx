import "./hero.css";
import heroImage from "../../assets/images/1.png";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ "--hero-image": `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text">

          <p className="hero-tag">
            WY SERVICE AUTO
          </p>

          <h1>
            Votre véhicule entre
            <span> de bonnes mains.</span>
          </h1>

          <p className="hero-description">
            Un service automobile professionnel, fiable et adapté à vos besoins.
          </p>

          <div className="hero-buttons">
            <a
              href="#quote"
              className="btn-primary"
            >
              Demander un devis
            </a>

            <a
              href="#appointment"
              className="btn-secondary"
            >
              Prendre rendez-vous
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;