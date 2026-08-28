import "./quote.css";

function Quote() {
  return (
    <section className="quote" id="quote">
      <div className="quote-container">

        <div className="quote-intro">
          <p className="quote-tag">DEMANDE DE DEVIS</p>

          <h2>
            Parlons de votre
            <span> véhicule.</span>
          </h2>

          <p className="quote-description">
            Décrivez-nous votre besoin et notre équipe vous contactera
            pour discuter de votre véhicule et vous proposer une solution adaptée.
          </p>

          <div className="quote-info">
            <div className="quote-info-item">
              <span>01</span>
              <p>Décrivez votre besoin</p>
            </div>

            <div className="quote-info-item">
              <span>02</span>
              <p>Nous analysons votre demande</p>
            </div>

            <div className="quote-info-item">
              <span>03</span>
              <p>Nous vous recontactons</p>
            </div>
          </div>
        </div>

        <div className="quote-form-wrapper">
          <form className="quote-form">

            <div className="quote-form-row">

              <div className="quote-form-group">
                <label htmlFor="quote-name">
                  Nom complet *
                </label>

                <input
                  id="quote-name"
                  type="text"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div className="quote-form-group">
                <label htmlFor="quote-phone">
                  Téléphone *
                </label>

                <input
                  id="quote-phone"
                  type="tel"
                  placeholder="Votre numéro"
                  required
                />
              </div>

            </div>

            <div className="quote-form-group">
              <label htmlFor="quote-email">
                Email
              </label>

              <input
                id="quote-email"
                type="email"
                placeholder="Votre adresse email"
              />
            </div>

            <div className="quote-form-row">

              <div className="quote-form-group">
                <label htmlFor="quote-vehicle">
                  Marque et modèle
                </label>

                <input
                  id="quote-vehicle"
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
                  type="number"
                  placeholder="Ex. 2020"
                />
              </div>

            </div>

            <div className="quote-form-group">
              <label htmlFor="quote-service">
                Service souhaité *
              </label>

              <select id="quote-service" required>
                <option value="">
                  Sélectionnez un service
                </option>

                <option>Diagnostic et inspection</option>
                <option>Entretien général</option>
                <option>Moteur</option>
                <option>Freins</option>
                <option>Suspension et direction</option>
                <option>Transmission</option>
                <option>Électricité et électronique</option>
                <option>Pneus et roues</option>
                <option>Autre</option>
              </select>
            </div>

            <div className="quote-form-group">
              <label htmlFor="quote-message">
                Décrivez votre besoin *
              </label>

              <textarea
                id="quote-message"
                rows="5"
                placeholder="Décrivez le problème ou le service dont vous avez besoin..."
                required
              ></textarea>
            </div>

            <button type="submit">
              Envoyer ma demande
              <span>→</span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Quote;