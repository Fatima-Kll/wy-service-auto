import "./about.css";

import aboutMainImage from "../../assets/images/12.png";
import aboutImage2 from "../../assets/images/5.png";
import aboutImage3 from "../../assets/images/7.png";
import aboutImage4 from "../../assets/images/3.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* =========================
            VISUAL / PHOTOS
        ========================= */}
        <div className="about-media">

          {/* Main photo */}
          <div className="about-main-image">
            <img
              src={aboutMainImage}
              alt="W&Y Service Auto"
            />

            <div className="about-image-caption">
              <span></span>
              <p>W&Y SERVICE AUTO</p>
            </div>
          </div>

          {/* Additional photos */}
          <div className="about-gallery">

            <div className="about-gallery-item">
              <img
                src={aboutImage2}
                alt="Atelier W&Y Service Auto"
                 loading="lazy"
              />
            </div>

            <div className="about-gallery-item">
              <img
                src={aboutImage3}
                alt="Intervention mécanique chez W&Y Service Auto"
                 loading="lazy"
              />
            </div>

            <div className="about-gallery-item">
              <img
                src={aboutImage4}
                alt="Équipement automobile de W&Y Service Auto"
                 loading="lazy"
              />
            </div>

          </div>
        </div>

        {/* =========================
            CONTENT
        ========================= */}
        <div className="about-content">

          <p className="about-eyebrow">
            À PROPOS DE NOUS
          </p>

          <h2>
            Une expertise automobile{" "}
            <span>au service de votre véhicule.</span>
          </h2>

          <div className="about-text">
            <p>
              W&Y Service Auto propose des services complets de
              mécanique automobile pour voitures, VUS, camions
              légers et véhicules utilitaires.
            </p>

            <p>
              Du diagnostic à la réparation, notre garage vous
              accompagne pour préserver la fiabilité et la sécurité
              de votre véhicule.
            </p>
          </div>

          {/* =========================
              EXPERTISE LIST
          ========================= */}
          <div className="about-list">

            <div className="about-item">
              <span className="about-number">01</span>

              <div className="about-item-content">
                <h3>Diagnostic mécanique</h3>
                <p>
                  Diagnostic mécanique et électronique
                </p>
              </div>
            </div>

            <div className="about-item">
              <span className="about-number">02</span>

              <div className="about-item-content">
                <h3>Entretien & réparation</h3>
                <p>
                  Un accompagnement pour votre véhicule
                </p>
              </div>
            </div>

            <div className="about-item">
              <span className="about-number">03</span>

              <div className="about-item-content">
                <h3>Plusieurs types de véhicules</h3>
                <p>
                  Voitures, VUS, camions légers et utilitaires
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;