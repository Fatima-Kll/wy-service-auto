import "./contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        <div className="contact-info">

          <p className="contact-tag">CONTACT</p>

          <h2>
            Parlons de votre
            <span> véhicule.</span>
          </h2>

          <p className="contact-description">
            Une question, un problème ou besoin d'un rendez-vous ?
            Contactez-nous et notre équipe vous répondra dans les meilleurs délais.
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Adresse</h3>
                <p>Trois-Rivières, Québec</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Téléphone</h3>
                <a href="tel:+18193703330">819-370-3330</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <a href="mailto:meca.gms@gmail.com">meca.gms@gmail.com</a>
              </div>
            </div>

          </div>

        </div>

        <div className="contact-form-wrapper">

          <div className="contact-form">

            <h3>Envoyez-nous un message</h3>

            <p>
              Remplissez le formulaire et nous vous contacterons.
            </p>

            <form>

              <div className="form-row">

                <div className="form-group">
                  <label>Nom complet</label>
                  <input
                    type="text"
                                      placeholder="Votre nom"
                                      required
                  />
                </div>

                <div className="form-group">
                  <label>Téléphone</label>
                  <input
                    type="tel"
                                      placeholder="Votre numéro"
                                      required
                  />
                </div>

              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                                  placeholder="Votre adresse email"
                                  required
                />
              </div>

              <div className="form-group">
                              <label>Service souhaité</label>
                              <textarea
  rows="5"
  placeholder="Décrivez votre besoin..."
  required
></textarea>

                <select>
                  <option value="">Sélectionnez un service</option>
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

              <div className="form-group">
                <label>Votre message</label>

                <textarea
                  rows="5"
                  placeholder="Décrivez votre besoin..."
                ></textarea>

              </div>

              <button type="submit">
                Envoyer le message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;