import "./cta.css";

function CTA() {
  return (
    <section className="cta">

      <div className="cta-decoration cta-decoration-one"></div>
      <div className="cta-decoration cta-decoration-two"></div>

      <div className="cta-content">

        <p className="cta-tag">W&Y SERVICE AUTO</p>

        <h2>
          Votre véhicule mérite
          <span> le meilleur.</span>
        </h2>

        <p className="cta-description">
          Besoin d'un diagnostic, d'un entretien ou d'une réparation ?
          Notre équipe est là pour vous accompagner.
        </p>

        <div className="cta-buttons">

          <a href="#quote" className="cta-primary">
            Demander un devis
          </a>

          <a href="#contact" className="cta-secondary">
            Nous contacter
          </a>

        </div>

      </div>

    </section>
  );
}

export default CTA;