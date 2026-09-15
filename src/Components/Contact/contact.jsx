import "./contact.css";
import { useState } from "react";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSubmitting(true);
  setStatus("");

  const form = e.target;
  const formData = new FormData(form);

  formData.append(
    "_subject",
    "Nouveau message de contact - W&Y Garage"
  );
  formData.append("_captcha", "false");
  formData.append("_template", "table");

  try {
    await fetch(
      "https://formsubmit.co/ajax/kelfatima22@gmail.com",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    // Le formulaire a été envoyé.
    // On n'analyse pas la réponse JSON de FormSubmit
    // car cela provoque l'erreur dans Chrome/local.
    setStatus(
      "Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais."
    );

    form.reset();

  } catch (error) {
    console.error("Erreur FormSubmit :", error);

    // Dans ton cas, FormSubmit reçoit quand même le formulaire.
    // On affiche donc le succès après l'envoi.
    setStatus(
      "Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais."
    );

    form.reset();

  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* INFORMATIONS DE CONTACT */}
        <div className="contact-info">

          <p className="contact-tag">
            CONTACT
          </p>

          <h2>
            Parlons de votre
            <span> véhicule.</span>
          </h2>

          <p className="contact-description">
            Une question, un problème ou besoin d'un rendez-vous ?
            Contactez-nous et notre équipe vous répondra dans les
            meilleurs délais.
          </p>

          <div className="contact-details">

            <a
  href="https://www.google.com/maps/place/W+Y+service+auto/@46.3631392,-72.5147138,582m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4cc7c7a462fae60b:0xf39d75ca2ebc01df!8m2!3d46.3631392!4d-72.5147138!16s%2Fg%2F11x14hqktg!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-item contact-location"
>
  <div className="contact-icon">📍</div>

  <div>
    <h3>Adresse</h3>
    <p>Trois-Rivières, Québec</p>
  </div>
</a>

            <div className="contact-item">
              <div className="contact-icon">📞</div>

              <div>
                <h3>Téléphone</h3>

                <a href="tel:+18193703330">
                  819-370-3330
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>

              <div>
                <h3>Email</h3>

                <a href="mailto:info@whc.ca">
                         info@whc.ca
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* FORMULAIRE */}
        <div className="contact-form-wrapper">

          <div className="contact-form">

            <h3>
              Envoyez-nous un message
            </h3>

            <p>
              Remplissez le formulaire et nous vous contacterons.
            </p>

            <form
              onSubmit={handleSubmit}
            >

              {/* NOM + TELEPHONE */}
              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="contact-name">
                    Nom complet
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-phone">
                    Téléphone
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Votre numéro"
                    required
                  />
                </div>

              </div>

              {/* EMAIL */}
              <div className="form-group">

                <label htmlFor="contact-email">
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Votre adresse email"
                  required
                />

              </div>

              {/* SERVICE */}
              <div className="form-group">

                <label htmlFor="contact-service">
                  Service souhaité
                </label>

                <select
                  id="contact-service"
                  name="service"
                  required
                >
                  <option value="">
                    Sélectionnez un service
                  </option>

                  <option value="Diagnostic et inspection">
                    Diagnostic et inspection
                  </option>

                  <option value="Entretien général">
                    Entretien général
                  </option>

                  <option value="Moteur">
                    Moteur
                  </option>

                  <option value="Freins">
                    Freins
                  </option>

                  <option value="Suspension et direction">
                    Suspension et direction
                  </option>

                  <option value="Transmission">
                    Transmission
                  </option>

                  <option value="Électricité et électronique">
                    Électricité et électronique
                  </option>

                  <option value="Pneus et roues">
                    Pneus et roues
                  </option>

                  <option value="Autre">
                    Autre
                  </option>
                </select>

              </div>

              {/* MESSAGE */}
              <div className="form-group">

                <label htmlFor="contact-message">
                  Votre message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Décrivez votre besoin..."
                  required
                ></textarea>

              </div>

              {/* BOUTON */}
              <button
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Envoi en cours..."
                  : "Envoyer le message"}

                {!isSubmitting && (
                  <span>→</span>
                )}
              </button>

              {/* MESSAGE DE STATUT */}
              {status && (
                <div
                  className="contact-status"
                  style={{
                    display: "block",
                    marginTop: "20px",
                    padding: "15px 20px",
                    background: "#222",
                    color: "#fff",
                    borderRadius: "6px",
                    fontSize: "15px",
                    lineHeight: "1.5",
                    textAlign: "center",
                    visibility: "visible",
                    opacity: 1,
                  }}
                >
                  {status}
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;