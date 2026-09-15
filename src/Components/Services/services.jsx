import "./services.css";

const services = [
  {
    number: "01",
    icon: "🔧",
    title: "Diagnostic & inspection",
    description:
      "Diagnostic mécanique et électronique, lecture des codes OBD, inspection générale et recherche de pannes.",
  },
  {
    number: "02",
    icon: "🛢️",
    title: "Entretien général",
    description:
      "Vidange, filtres, bougies, fluides et entretien périodique selon les recommandations du fabricant.",
  },
  {
    number: "03",
    icon: "⚙️",
    title: "Moteur & distribution",
    description:
      "Diagnostic et réparation moteur, système de refroidissement, chaîne et courroie de distribution.",
  },
  {
    number: "04",
    icon: "🛑",
    title: "Freins, suspension & direction",
    description:
      "Freins, ABS, amortisseurs, suspension, roulements et composants du système de direction.",
  },
  {
    number: "05",
    icon: "⚙️",
    title: "Transmission & groupe motopropulseur",
    description:
      "Transmission, embrayage, cardans, différentiel, système 4x4 / AWD et composants du groupe motopropulseur.",
  },
  {
    number: "06",
    icon: "🔌",
    title: "Électricité & électronique",
    description:
      "Diagnostic électrique et électronique, batterie, alternateur, démarreur, câblage, capteurs et systèmes informatisés.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">

        {/* HEADER */}
        <div className="services-header">
          <p className="section-tag">NOS SERVICES</p>

          <h2>
            Une expertise complète
            <span> pour votre véhicule.</span>
          </h2>

          <p className="services-intro">
            De l'entretien courant au diagnostic et à la réparation,
            notre garage vous accompagne pour assurer la fiabilité
            et la sécurité de votre véhicule.
          </p>
        </div>

        {/* SERVICES */}
        <div
          className="services-grid"
          role="region"
          aria-label="Nos services automobiles"
        >
          {services.map((service) => (
            <article
              className="service-card"
              key={service.number}
            >
              <div className="service-top">
                <span
                  className="service-icon"
                  aria-hidden="true"
                >
                  {service.icon}
                </span>

                <span className="service-number">
                  {service.number}
                </span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a
                href="#contact"
                className="service-link"
              >
                En savoir plus <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        {/* MOBILE CAROUSEL HINT */}
        <p className="services-swipe-hint">
          <span aria-hidden="true">←</span>
          Faites glisser pour découvrir nos services
          <span aria-hidden="true">→</span>
        </p>

        {/* CTA */}
        <div className="services-bottom">
          <a
            href="#contact"
            className="services-button"
          >
            Voir tous nos services
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* NOTICE */}
        <div className="services-notice">
          <strong>À noter :</strong> le service d'alignement et la
          climatisation automobile ne sont pas offerts.
        </div>

      </div>
    </section>
  );
}

export default Services;