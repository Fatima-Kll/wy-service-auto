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

      <div className="testimonials-header">

        <p className="testimonials-tag">
          AVIS CLIENTS
        </p>

        <h2>
          La confiance de nos
          <span> clients.</span>
        </h2>

        <p className="testimonials-description">
          Découvrez ce que nos clients pensent de leur expérience
          chez W&Y Service Auto.
        </p>

        <div className="rating-summary">

          <strong>4.9</strong>

          <div>
            <div className="stars">★★★★★</div>
            <p>61 avis Google</p>
          </div>

        </div>

      </div>


      <div className="testimonials-grid">

        {testimonials.map((testimonial, index) => (

          <article
            className="testimonial-card"
            key={index}
          >

            <div className="testimonial-top">

              <div className="avatar">
                {testimonial.name.charAt(0)}
              </div>

              <div>

                <h3>{testimonial.name}</h3>

                <div className="card-stars">
                  {"★".repeat(testimonial.rating)}
                </div>

              </div>

            </div>


            <p className="testimonial-text">
              "{testimonial.text}"
            </p>


            <span className="google-review">
              Google Review
            </span>

          </article>

        ))}

      </div>


      <div className="testimonials-action">

        <a
  href="#appointment"
  className="testimonials-button">
  Prendre rendez-vous
      </a>

      </div>

    </section>
  );
}

export default Testimonials;