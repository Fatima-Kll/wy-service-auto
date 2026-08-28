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
      "Vidange, remplacement des filtres, bougies, fluides et entretien périodique selon les recommandations du fabricant.",
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
      "Entretien et réparation des freins, ABS, amortisseurs, suspension, roulements et système de direction.",
  },
  {
    number: "05",
    icon: "🔌",
    title: "Transmission & électronique",
    description:
      "Transmission, embrayage, cardans, différentiel, batterie, alternateur, démarreur et diagnostic électronique.",
  },
  {
    number: "06",
    icon: "🚗",
    title: "Pneus, échappement & sécurité",
    description:
      "Pneus et roues, échappement, émissions et diagnostic des systèmes électroniques de sécurité.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">

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

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>

              <div className="service-top">
                <span className="service-icon">{service.icon}</span>
                <span className="service-number">{service.number}</span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact" className="service-link">
                En savoir plus →
              </a>

            </article>
          ))}
        </div>

        <div className="services-bottom">
          <a href="#contact" className="services-button">
            Voir tous nos services
          </a>
        </div>

        <div className="services-notice">
          <strong>À noter :</strong> le service d'alignement et la
          climatisation automobile ne sont pas offerts.
        </div>

      </div>
    </section>
  );
}

export default Services;