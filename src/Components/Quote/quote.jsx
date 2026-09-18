import "./quote.css";
import { useState } from "react";

function Quote() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("");
    setStatusType("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append(
  "_subject",
  "Demande de devis - W&Y Service Auto"
);

    formData.append("_template", "table");
    formData.append("_captcha", "false");

    const clientEmail = formData.get("email");

    if (clientEmail) {
      formData.append("_replyto", clientEmail);
    }

    try {
      await fetch(
        "https://formsubmit.co/ajax/info@wy-auto.ca",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      setStatus(
        "Votre demande de devis a bien été envoyée. Nous vous contacterons prochainement."
      );

      setStatusType("success");

      form.reset();

      setTimeout(() => {
        setStatus("");
        setStatusType("");
      }, 5000);
    } catch (error) {
      console.error(
        "Erreur FormSubmit - devis :",
        error
      );

      setStatus(
        "Une erreur est survenue. Veuillez réessayer ou nous contacter directement."
      );

      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="quote"
      id="quote"
    >
      <div className="quote-container">

        {/* =========================================================
            INTRO
        ========================================================= */}

        <div className="quote-info">

          <p className="quote-info-tag">
            DEMANDE DE DEVIS
          </p>

          <h2>
            Parlons de votre
            <span> véhicule.</span>
          </h2>

          <p className="quote-info-description">
            Décrivez-nous votre besoin et notre équipe vous contactera
            pour discuter de votre véhicule et vous proposer une solution
            adaptée.
          </p>

          {/* STEPS */}

          <div className="quote-highlights">

            <div className="quote-highlight">

              <span className="quote-highlight-number">
                01
              </span>

              <div>

                <h3>
                  Décrivez votre besoin
                </h3>

                <p>
                  Expliquez-nous le problème ou le service recherché.
                </p>

              </div>

            </div>

            <div className="quote-highlight">

              <span className="quote-highlight-number">
                02
              </span>

              <div>

                <h3>
                  Nous analysons votre demande
                </h3>

                <p>
                  Notre équipe étudie les informations de votre véhicule.
                </p>

              </div>

            </div>

            <div className="quote-highlight">

              <span className="quote-highlight-number">
                03
              </span>

              <div>

                <h3>
                  Nous vous recontactons
                </h3>

                <p>
                  Nous revenons vers vous avec les prochaines étapes.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =========================================================
            FORM
        ========================================================= */}

        <div className="quote-form-wrapper">

          <form
            className="quote-form"
            onSubmit={handleSubmit}
          >

            <p className="quote-tag">
              VOTRE DEMANDE
            </p>

            <h2>
              Parlons de votre
              <span> véhicule.</span>
            </h2>

            <p className="quote-description">
              Décrivez-nous votre besoin et notre équipe vous contactera
              pour discuter de votre véhicule et vous proposer une solution
              adaptée.
            </p>


            {/* NOM + TÉLÉPHONE */}

            <div className="quote-form-row">

              <div className="quote-form-group">

                <label htmlFor="quote-name">
                  Nom complet <span>*</span>
                </label>

                <input
                  id="quote-name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  autoComplete="name"
                  required
                />

              </div>

              <div className="quote-form-group">

                <label htmlFor="quote-phone">
                  Téléphone <span>*</span>
                </label>

                <input
                  id="quote-phone"
                  name="phone"
                  type="tel"
                  placeholder="Votre numéro"
                  autoComplete="tel"
                  required
                />

              </div>

            </div>


            {/* EMAIL */}

            <div className="quote-form-group">

              <label htmlFor="quote-email">
                Email
              </label>

              <input
                id="quote-email"
                name="email"
                type="email"
                placeholder="Votre adresse email"
                autoComplete="email"
              />

            </div>


            {/* VÉHICULE + ANNÉE */}

            <div className="quote-form-row">

              <div className="quote-form-group">

                <label htmlFor="quote-vehicle">
                  Marque et modèle
                </label>

                <input
                  id="quote-vehicle"
                  name="vehicle"
                  type="text"
                  placeholder="Ex. Toyota Corolla"
                />

              </div>

              <div className="quote-form-group">

                <label htmlFor="quote-year">
                  Année
                </label>

                <input
                  id="quote-year"
                  name="year"
                  type="number"
                  placeholder="Ex. 2020"
                  min="1900"
                  max="2100"
                />

              </div>

            </div>


            {/* SERVICE */}

            <div className="quote-form-group">

              <label htmlFor="quote-service">
                Service souhaité <span>*</span>
              </label>

              <select
                id="quote-service"
                name="service"
                defaultValue=""
                required
              >

                <option
                  value=""
                  disabled
                >
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

            <div className="quote-form-group">

              <label htmlFor="quote-message">
                Décrivez votre besoin <span>*</span>
              </label>

              <textarea
                id="quote-message"
                name="message"
                rows="5"
                placeholder="Décrivez le problème ou le service dont vous avez besoin..."
                required
              ></textarea>

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              disabled={isSubmitting}
            >

              {isSubmitting ? (
                <>
                  <span className="quote-loader"></span>
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer ma demande
                  <span className="quote-button-arrow">
                    →
                  </span>
                </>
              )}

            </button>


            {/* STATUS */}

            {status && (
              <div
                className={`quote-status ${statusType}`}
                role="status"
                aria-live="polite"
              >
                {status}
              </div>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Quote;