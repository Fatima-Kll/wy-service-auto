import "./about.css";
import aboutImage from "../../assets/images/12.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
           <img
      src={aboutImage}
      alt="Atelier W&Y Service Auto"
    />
        </div>

        <div className="about-content">

          <p className="section-tag">À PROPOS DE NOUS</p>

          <h2>
            Une expertise automobile
            <span> au service de votre véhicule.</span>
          </h2>

          <p className="about-text">
            W&Y Service Auto propose des services complets de mécanique
            automobile pour voitures, VUS, camions légers et véhicules
            utilitaires.
          </p>

          <p className="about-text">
            Du diagnostic à l'entretien et à la réparation, notre garage
            répond à différents besoins mécaniques et électroniques afin
            de vous accompagner dans l'entretien de votre véhicule.
          </p>

          <div className="about-features">

            <div className="about-feature">
              <span>✓</span>
              <p>Diagnostic mécanique et électronique</p>
            </div>

            <div className="about-feature">
              <span>✓</span>
              <p>Entretien et réparation automobile</p>
            </div>

            <div className="about-feature">
              <span>✓</span>
              <p>Services pour plusieurs types de véhicules</p>
                      </div>
            

                      
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;