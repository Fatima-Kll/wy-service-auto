import "./appointment.css";
import { useState } from "react";

function Appointment() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);

  const today = new Date().toISOString().split("T")[0];

  // Génère les créneaux de 30 minutes
  const generateTimeSlots = (startHour, endHour) => {
    const slots = [];

    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(`${String(hour).padStart(2, "0")}:00`);
      slots.push(`${String(hour).padStart(2, "0")}:30`);
    }

    slots.push(`${String(endHour).padStart(2, "0")}:00`);

    return slots;
  };

  // Détermine les horaires disponibles selon le jour choisi
  const handleDateChange = (e) => {
    const date = e.target.value;

    setSelectedDate(date);

    if (!date) {
      setAvailableTimes([]);
      return;
    }

    // 0 = dimanche
    // 1 = lundi
    // 2 = mardi
    // 3 = mercredi
    // 4 = jeudi
    // 5 = vendredi
    // 6 = samedi
    const day = new Date(`${date}T12:00:00`).getDay();

    let times = [];

    // Lundi → Jeudi : 08:00 - 17:00
    if (day >= 1 && day <= 4) {
      times = generateTimeSlots(8, 17);
    }

    // Vendredi : 08:00 - 12:00 + 14:00 - 17:00
    else if (day === 5) {
      times = [
        ...generateTimeSlots(8, 12),
        ...generateTimeSlots(14, 17),
      ];
    }

    // Samedi et dimanche : fermé
    else {
      times = [];
    }

    setAvailableTimes(times);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSubmitting(true);
  setStatus("");

  const form = e.target;
  const formData = new FormData(form);

  formData.append(
    "_subject",
    "Nouvelle demande de rendez-vous - W&Y Garage"
  );

  formData.append("_captcha", "false");
  formData.append("_template", "table");

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/kelfatima22@gmail.com",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    const data = await response.json();

    console.log("Réponse FormSubmit :", data);

    if (data.success === "true" || data.success === true) {
      setStatus(
        "Votre demande a bien été envoyée. Nous vous contacterons pour confirmer votre rendez-vous."
      );

      form.reset();
      setSelectedDate("");
      setAvailableTimes([]);
    } else {
      setStatus(
        "Votre demande n'a pas pu être confirmée. Veuillez réessayer."
      );
    }
  } catch (error) {
    console.error("Erreur FormSubmit :", error);

    setStatus(
      "Une erreur technique est survenue. Veuillez réessayer."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="appointment" id="appointment">
      <div className="appointment-container">

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
              Choisissez une date et indiquez-nous le service dont vous avez
              besoin. Notre équipe vous contactera pour confirmer la
              disponibilité.
            </p>

            <div className="appointment-form-row">

              <div className="appointment-form-group">
                <label htmlFor="appointment-name">
                  Nom complet *
                </label>

                <input
                  id="appointment-name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div className="appointment-form-group">
                <label htmlFor="appointment-phone">
                  Téléphone *
                </label>

                <input
                  id="appointment-phone"
                  name="phone"
                  type="tel"
                  placeholder="Votre numéro"
                  required
                />
              </div>

            </div>

            <div className="appointment-form-group">
              <label htmlFor="appointment-email">
                Email
              </label>

              <input
                id="appointment-email"
                name="email"
                type="email"
                placeholder="Votre adresse email"
              />
            </div>

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
                  Service souhaité *
                </label>

                <select
                  id="appointment-service"
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

            </div>

            <div className="appointment-form-row">

              <div className="appointment-form-group">
                <label htmlFor="appointment-date">
                  Date souhaitée *
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
              </div>

              <div className="appointment-form-group">
                <label htmlFor="appointment-time">
                  Heure souhaitée *
                </label>

                <select
                  id="appointment-time"
                  name="time"
                  required
                  disabled={
                    !selectedDate ||
                    availableTimes.length === 0
                  }
                >
                  <option value="">
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

            <button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Envoi en cours..."
                : "Demander un rendez-vous"}

              {!isSubmitting && <span>→</span>}
            </button>

            {status && (
              <p className="appointment-status">
                {status}
              </p>
            )}
          </form>
        </div>

        <div className="appointment-info">

          <p className="appointment-info-tag">
            SIMPLE ET RAPIDE
          </p>

          <h2>
            Votre véhicule,
            <span> notre priorité.</span>
          </h2>

          <p>
            Envoyez votre demande de rendez-vous et notre équipe vous
            contactera pour confirmer la disponibilité.
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