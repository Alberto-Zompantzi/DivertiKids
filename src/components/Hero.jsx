import { useState } from "react";

const infoCards = {
  arte: {
    title: "Talleres de Creación Artística",
    description:
      "¡Donde la imaginación toma forma! En nuestras estaciones de arte, cada niño se convierte en autor de su propia obra. Diseñamos un espacio seguro y equipado con materiales de alta calidad para que exploren texturas y colores, fomentando la concentración, la motricidad fina y el orgullo de crear algo con sus propias manos. Al finalizar, ¡se llevan su creación a casa como el mejor recuerdo de la fiesta!",
    image: "/Divertikids.jpeg", // Puedes cambiar a la imagen específica
    detalles: [
      "Pintura de Alcancías",
      "Pintura en Caballetes",
      "Fábrica de Plastilina",
      "Fábrica de Marionetas",
    ],
    color: "red",
  },
  destreza: {
    title: "Circuito de Desafíos & Destreza",
    description:
      "¡Diversión clásica con un toque de adrenalina! Revivimos los mejores juegos de feria y dinámicas de habilidad en un entorno vibrante y competitivo de forma sana. Este circuito está diseñado para poner a prueba la puntería, la paciencia y el trabajo en equipo de los pequeños invitados. Es la opción ideal para mantener la energía al máximo, donde cada acierto es celebrado y el esfuerzo siempre tiene recompensa.",
    image: "/Divertikids.jpeg",
    detalles: [
      "Pesca Deportiva",
      "Tiro al Blanco",
      "Lanzamiento de Minipufs",
      "Lotería Mexicana Tradicional",
      "Canicas",
    ],
    color: "green",
  },
  bienestar: {
    title: "Estaciones de Bienestar & Fantasía",
    description:
      "¡Un viaje al mundo de los sueños! Creamos una atmósfera de relajación y magia donde los niños pueden transformarse en sus personajes favoritos o disfrutar de un momento de cuidado especial. Desde un maquillaje artístico profesional hasta una experiencia de spa diseñada para su edad, esta categoría se enfoca en la autoexpresión y el consentimiento, logrando que cada pequeño se sienta la estrella del evento.",
    image: "/Divertikids.jpeg",
    detalles: [
      "Kids Beauty & Relax Experience (Mini Spa)",
      "Maquillaje de Fantasía & Caracterización ",
    ],
    color: "orange",
  },
};

export default function Hero() {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const closeMenu = () => setSelectedInfo(null);

  return (
    <section className="hero-container" id="hero">
      <div className="hero-content">
        <div className="hero-visual">
          <div className="hero-main-card">
            <img
              src="\Divertikids.jpeg"
              alt="Niños aprendiendo"
              className="main-char-img"
            />
          </div>
        </div>

        <div className="hero-text-side">
          <h1 className="hero-title">
            ¡Diversión <br /> <span>y aprendizaje!</span>
          </h1>
          <p className="hero-description">
            Entretenimiento infantil para fiestas, donde los niños pueden jugar,
            pintar y aprender.
          </p>
          <button className="cta-button">
            <a href="#packages">Nuestros Servicios</a>
          </button>
        </div>
      </div>

      <div className="hero-categories">
        <button
          className="cat-card red"
          onClick={() => setSelectedInfo(infoCards.arte)}
        >
          <span className="icon">🎨</span> Talleres De Creación Artística
        </button>
        <button
          className="cat-card green"
          onClick={() => setSelectedInfo(infoCards.destreza)}
        >
          <span className="icon">🏆</span> Circuito De Desafíos & Destreza
        </button>
        <button
          className="cat-card orange"
          onClick={() => setSelectedInfo(infoCards.bienestar)}
        >
          <span className="icon">✨</span> Estación De Bienestar & Fantasía
        </button>
      </div>

      {/* --- MODAL REACTIVO (Pestaña emergente) --- */}
      {selectedInfo && (
        <div className="modal-overlay" onClick={closeMenu}>
          <div
            className={`modal-content border-${selectedInfo.color}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeMenu}>
              ×
            </button>

            <div className="modal-body">
              <img
                src={selectedInfo.image}
                alt={selectedInfo.title}
                className="modal-img"
              />
              <h2 className={`modal-title-${selectedInfo.color}`}>
                {selectedInfo.title}
              </h2>
              <p className="modal-text">{selectedInfo.description}</p>

              <ul className="modal-list">
                {selectedInfo.detalles.map((det, i) => (
                  <li key={i}>⭐ {det}</li>
                ))}
              </ul>

              <button className="cta-button" onClick={closeMenu}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
