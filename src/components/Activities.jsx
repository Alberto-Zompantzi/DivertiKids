import { activities } from "../data/activities";
import ActivityCard from "./ActivityCard";

export default function Activities() {
  return (
    <section className="activities" id="activities">
      <div className="activities__wrapper">
        <div className="activities__about">
          <div className="activities__divider"></div>
          <div className="about__sticky-note">
            <span className="about__label">¿Quiénes somos?</span>
          </div>
          <p className="about__description">
            En <strong>DivertiKids</strong>, nos apasiona crear momentos
            mágicos. Somos un equipo dedicado a brindar entretenimiento
            educativo y diversión sin límites para los más pequeños,
            transformando cada evento en una aventura inolvidable.
          </p>

          <div className="about__photo-placeholder">
            <img src="src\assets\Quienes somos.jpeg" alt="Quienes-somos" />
          </div>
        </div>

        <div className="activities__content">
          <h2 className="activities__title">Nuestras actividades</h2>

          <div className="activities__grid">
            {activities.map((activity) => (
              <ActivityCard
                key={activity.id}
                title={activity.title}
                description={activity.description}
                color={activity.color}
                image={activity.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
