import "./testimonials.css";

const testimonials = [
  {
    name: "Jessie Jg",
    rating: 5,
    text: "Gardez ce garage dans votre liste de contacts ! Une excellente expérience et un service professionnel.",
  },
  {
    name: "Gabriel Cuny",
    rating: 5,
    text: "Un service exceptionnel ! Très impressionné par le professionnalisme, la rapidité et la qualité du travail effectué.",
  },
  {
    name: "Mehdi Berrehouma",
    rating: 5,
    text: "Un garagiste sérieux, ponctuel et compétent. Il prend le temps d'expliquer, de conseiller et de faire les choses dans les règles de l'art.",
  },
  {
    name: "Samahir Albasha",
    rating: 5,
    text: "Les prix sont très attractifs et le service est impeccable. Une équipe réactive et efficace.",
  },
  {
    name: "Aykut Anlasbay",
    rating: 5,
    text: "Amazing experience getting my tires replaced and my car serviced. Excellent service!",
  },
  {
    name: "Isabelle Brewerton",
    rating: 5,
    text: "Vraiment honnête et flexible. Les prix sont raisonnables. C'est ce garage qu'il faut choisir si vous voulez éviter les mauvaises surprises.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">

        {/* HEADER */}
        <div className="testimonials-header">

          <div className="testimonials-heading">
            <p className="testimonials-eyebrow">
              AVIS CLIENTS
            </p>

            <h2>
              La confiance de nos{" "}
              <span>clients.</span>
            </h2>

            <p className="testimonials-description">
              Découvrez ce que nos clients pensent de leur
              expérience chez W&Y Service Auto.
            </p>
          </div>

          {/* RATING */}
          <div className="rating-summary">
            <div className="rating-score">
              4.9
            </div>

            <div className="rating-info">
              <div className="rating-stars" aria-label="4.9 sur 5">
                ★★★★★
              </div>

              <p>61 avis Google</p>
            </div>
          </div>

        </div>


        {/* TESTIMONIALS */}
        <div className="testimonials-grid">

          {testimonials.map((testimonial, index) => (
            <article
              className="testimonial-card"
              key={`${testimonial.name}-${index}`}
            >

              <div className="testimonial-card-top">
                <span className="quote-mark">“</span>

                <div className="card-stars" aria-label="5 étoiles">
                  {"★".repeat(testimonial.rating)}
                </div>
              </div>

              <p className="testimonial-text">
                {testimonial.text}
              </p>

              <div className="testimonial-author">
                <span className="author-line"></span>

                <div>
                  <h3>{testimonial.name}</h3>
                  <p>Client</p>
                </div>
              </div>

              <span className="google-review">
                Google Review
              </span>

            </article>
          ))}

        </div>


        {/* CTA */}
        <div className="testimonials-action">
          <a
            href="#appointment"
            className="testimonials-button"
          >
            Prendre rendez-vous
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;