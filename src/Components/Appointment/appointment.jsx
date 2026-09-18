import "./appointment.css";
import { useState } from "react";

function Appointment() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);

  // Date minimale = aujourd'hui
  const today = new Date().toISOString().split("T")[0];

  // Génère les créneaux de 30 minutes
  // Exemple : 08:00 -> 16:30
  const generateTimeSlots = (startHour, endHour) => {
    const slots = [];

    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(
        `${String(hour).padStart(2, "0")}:00`
      );

      slots.push(
        `${String(hour).padStart(2, "0")}:30`
      );
    }

    return slots;
  };

  // Détermine les horaires disponibles selon le jour choisi
  const handleDateChange = (e) => {
    const date = e.target.value;

    setSelectedDate(date);
    setAvailableTimes([]);

    if (!date) {
      return;
    }

    // On utilise midi pour éviter les problèmes de fuseau horaire
    const day = new Date(`${date}T12:00:00`).getDay();

    let times = [];

    /*
      0 = Dimanche
      1 = Lundi
      2 = Mardi
      3 = Mercredi
      4 = Jeudi
      5 = Vendredi
      6 = Samedi
    */

    // Lundi → Jeudi
    // 08:00 → 17:00
    // Dernier rendez-vous : 16:30
    if (day >= 1 && day <= 4) {
      times = generateTimeSlots(8, 17);
    }

    // Vendredi
    // 08:00 → 12:00
    // 14:00 → 17:00
    // Derniers rendez-vous : 11:30 et 16:30
    else if (day === 5) {
      times = [
        ...generateTimeSlots(8, 12),
        ...generateTimeSlots(14, 17),
      ];
    }

    // Samedi et dimanche
    // Garage fermé
    else {
      times = [];
    }

    setAvailableTimes(times);
  };

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
      "Nouvelle demande de rendez-vous - W&Y Garage"
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
        "Votre demande de rendez-vous a bien été envoyée. Nous vous contacterons pour confirmer votre rendez-vous."
      );

      setStatusType("success");

      form.reset();

      setSelectedDate("");
      setAvailableTimes([]);

      setTimeout(() => {
        setStatus("");
        setStatusType("");
      }, 5000);
    } catch (error) {
      console.error(
        "Erreur FormSubmit - rendez-vous :",
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
      className="appointment"
      id="appointment"
    >
      <div className="appointment-container">

        {/* =========================================================
            FORMULAIRE
        ========================================================= */}

        <div className="appointment-form-wrapper">

          <form
            className="appointment-form"
            onSubmit={handleSubmit}
          >

            <p className="appointment-tag">
              PRENDRE RENDEZ-VOUS
            </p>

            <h2>
              Réservez votre
              <span> visite.</span>
            </h2>

            <p className="appointment-description">
              Choisissez une date et indiquez-nous le service dont vous
              avez besoin. Notre équipe vous contactera pour confirmer
              la disponibilité.
            </p>

            {/* NOM + TÉLÉPHONE */}

            <div className="appointment-form-row">

              <div className="appointment-form-group">

                <label htmlFor="appointment-name">
                  Nom complet <span>*</span>
                </label>

                <input
                  id="appointment-name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  autoComplete="name"
                  required
                />

              </div>

              <div className="appointment-form-group">

                <label htmlFor="appointment-phone">
                  Téléphone <span>*</span>
                </label>

                <input
                  id="appointment-phone"
                  name="phone"
                  type="tel"
                  placeholder="Votre numéro"
                  autoComplete="tel"
                  required
                />

              </div>

            </div>

            {/* EMAIL */}

            <div className="appointment-form-group">

              <label htmlFor="appointment-email">
                Email
              </label>

              <input
                id="appointment-email"
                name="email"
                type="email"
                placeholder="Votre adresse email"
                autoComplete="email"
              />

            </div>

            {/* VÉHICULE + SERVICE */}

            <div className="appointment-form-row">

              <div className="appointment-form-group">

                <label htmlFor="appointment-vehicle">
                  Marque et modèle
                </label>

                <input
                  id="appointment-vehicle"
                  name="vehicle"
                  type="text"
                  placeholder="Ex. Honda Civic"
                />

              </div>

              <div className="appointment-form-group">

                <label htmlFor="appointment-service">
                  Service souhaité <span>*</span>
                </label>

                <select
                  id="appointment-service"
                  name="service"
                  required
                  defaultValue=""
                >

                  <option value="" disabled>
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

            </div>

            {/* DATE + HEURE */}

            <div className="appointment-form-row">

              <div className="appointment-form-group">

                <label htmlFor="appointment-date">
                  Date souhaitée <span>*</span>
                </label>

                <input
                  id="appointment-date"
                  name="date"
                  type="date"
                  min={today}
                  value={selectedDate}
                  onChange={handleDateChange}
                  required
                />

                {selectedDate &&
                  availableTimes.length === 0 && (
                    <p className="appointment-closed-message">
                      Garage fermé ce jour. Veuillez choisir une autre date.
                    </p>
                  )}

              </div>

              <div className="appointment-form-group">

                <label htmlFor="appointment-time">
                  Heure souhaitée <span>*</span>
                </label>

                <select
                  id="appointment-time"
                  name="time"
                  required
                  disabled={
                    !selectedDate ||
                    availableTimes.length === 0
                  }
                  defaultValue=""
                >

                  <option value="" disabled>
                    {!selectedDate
                      ? "Sélectionnez d'abord une date"
                      : availableTimes.length === 0
                      ? "Garage fermé ce jour"
                      : "Sélectionnez une heure"}
                  </option>

                  {availableTimes.map((time) => (
                    <option
                      key={time}
                      value={time}
                    >
                      {time}
                    </option>
                  ))}

                </select>

              </div>

            </div>

            {/* INFORMATIONS COMPLÉMENTAIRES */}

            <div className="appointment-form-group">

              <label htmlFor="appointment-message">
                Informations complémentaires
              </label>

              <textarea
                id="appointment-message"
                name="message"
                rows="4"
                placeholder="Décrivez brièvement votre besoin..."
              ></textarea>

            </div>

            {/* BOUTON */}

            <button
              type="submit"
              disabled={isSubmitting}
            >

              {isSubmitting
                ? "Envoi en cours..."
                : "Demander un rendez-vous"}

              {!isSubmitting && (
                <span className="appointment-button-arrow">
                  →
                </span>
              )}

            </button>

            {/* MESSAGE DE STATUT */}

            {status && (
              <p
                className={`appointment-status ${statusType}`}
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            )}

          </form>

        </div>

        {/* =========================================================
            INFORMATIONS
        ========================================================= */}

        <div className="appointment-info">

          <p className="appointment-info-tag">
            SIMPLE ET RAPIDE
          </p>

          <h2>
            Votre véhicule,
            <span> notre priorité.</span>
          </h2>

          <p className="appointment-info-description">
            Envoyez votre demande de rendez-vous et notre équipe
            vous contactera pour confirmer la disponibilité.
          </p>

          <div className="appointment-steps">

            <div className="appointment-step">

              <div className="appointment-step-number">
                01
              </div>

              <div>

                <h3>
                  Envoyez votre demande
                </h3>

                <p>
                  Indiquez le service, la date et l'heure souhaitées.
                </p>

              </div>

            </div>

            <div className="appointment-step">

              <div className="appointment-step-number">
                02
              </div>

              <div>

                <h3>
                  Nous vérifions la disponibilité
                </h3>

                <p>
                  Notre équipe examine votre demande.
                </p>

              </div>

            </div>

            <div className="appointment-step">

              <div className="appointment-step-number">
                03
              </div>

              <div>

                <h3>
                  Confirmation du rendez-vous
                </h3>

                <p>
                  Nous vous contactons pour confirmer votre visite.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Appointment;