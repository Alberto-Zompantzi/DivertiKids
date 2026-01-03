import { useState } from "react";

const infoCards = {
  caballetes: {
    title: "Caballetes Artísticos",
    description:
      "Un espacio donde cada niño se convierte en un pequeño artista.",
    image: "/Divertikids.jpeg", // Puedes cambiar a la imagen específica
    detalles: ["Pinturas no tóxicas", "Mandiles incluidos", "Dibujos variados"],
    color: "red",
  },
  alcancias: {
    title: "Pinta Alcancías",
    description:
      "¡Creatividad y ahorro! Los niños personalizan su propia figura.",
    image: "/Divertikids.jpeg",
    detalles: ["Figuras de yeso", "Pinceles de calidad", "Se lo llevan a casa"],
    color: "green",
  },
  juegos: {
    title: "Juegos Educativos",
    description:
      "Diversión inteligente para desarrollar habilidades mientras juegan.",
    image: "/Divertikids.jpeg",
    detalles: [
      "Material didáctico",
      "Supervisión constante",
      "Retos divertidos",
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
          <button
            className="cta-button"
            onClick={() => setSelectedInfo(infoCards.juegos)}
          >
            Nuestros Servicios
          </button>
        </div>
      </div>

      <div className="hero-categories">
        {/* Usamos las clases originales 'cat-card red', 'cat-card green', etc. */}
        <button
          className="cat-card red"
          onClick={() => setSelectedInfo(infoCards.caballetes)}
        >
          <span className="icon">🎨</span> Caballetes
        </button>
        <button
          className="cat-card green"
          onClick={() => setSelectedInfo(infoCards.alcancias)}
        >
          <span className="icon">🐷</span> Pinta Alcancías
        </button>
        <button
          className="cat-card orange"
          onClick={() => setSelectedInfo(infoCards.juegos)}
        >
          <span className="icon">🎲</span> Juegos Educativos
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
