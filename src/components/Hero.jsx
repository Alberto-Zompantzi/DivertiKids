import { useState } from "react";
import { infoCards } from "../data/infoCards";

export default function Hero() {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const closeMenu = () => setSelectedInfo(null);

  return (
    <section className="hero-container" id="hero">
      <div className="hero-content">
        <div className="hero-visual">
          <div className="hero-main-card">
            <img
              src="/Divertikids.jpeg"
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
          <a href="#paquetes" className="cta-button">
            Nuestros Paquetes
          </a>
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
