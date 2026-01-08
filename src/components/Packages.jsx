import React, { useState, useMemo } from "react";
import { pricingData } from "../data/pricingData";

export default function Packages() {
  const [ninos, setNinos] = useState(10);
  const [actividades, setActividades] = useState(5);

  // Buscamos la data correspondiente a los niños seleccionados de forma eficiente
  const currentData = useMemo(() => {
    return pricingData.find((item) => item.n_n === ninos) || pricingData[0];
  }, [ninos]);

  const total = currentData.paquetes[actividades];

  const handleWhatsApp = () => {
    const message = `¡Hola! Me interesa el paquete de ${actividades} actividades para ${ninos} niños ($${total}).`;
    window.open(
      `https://wa.me/522311048087?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="packages" id="paquetes">
      <div className="packages__container">
        <h2 className="packages__title">Calcula tu Paquete 🎈</h2>
        <p className="packages__subtitle">
          Personaliza la diversión según tus invitados
        </p>

        <div className="packages__grid">
          {/* LADO IZQUIERDO: CONTROLES */}
          <div className="packages__controls">
            <div className="control-group">
              <label className="control-label">¿Cuántos niños asistirán?</label>
              <div className="ninos-selector">
                {pricingData.map((item) => (
                  <button
                    key={item.n_n}
                    className={`nino-btn ${ninos === item.n_n ? "active" : ""}`}
                    onClick={() => setNinos(item.n_n)}
                  >
                    {item.n_n}
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label">
                ¿Cuántas actividades quieres?{" "}
                <span className="highlight-text">({actividades})</span>
              </label>
              <input
                className="activity-slider"
                max="9"
                min="5"
                onChange={(e) => setActividades(parseInt(e.target.value))}
                step="1"
                type="range"
                value={actividades}
              />
              <div className="slider-labels">
                {[5, 6, 7, 8, 9].map((num) => (
                  <span key={num}>{num}</span>
                ))}
              </div>
            </div>
          </div>

          {/* LADO DERECHO: TARJETA DE RESULTADO */}
          <div className="packages__result">
            <div className="result-card">
              <div className="result-header">
                <span className="badge">¡Mejor Precio!</span>
                <h3 className="result-card-title">Resumen del Plan</h3>
              </div>

              <div className="result-price">
                <span className="currency">$</span>
                <span className="amount">{total.toLocaleString()}</span>
              </div>

              <ul className="result-details">
                <li>
                  <span>📍</span> {ninos} Niños invitados
                </li>
                <li>
                  <span>🎨</span> {actividades} Actividades incluidas
                </li>
                <li>
                  <span>⏰</span> {currentData.horas} Horas de servicio
                </li>
                {/* <li>
                  <span>💰</span> ${currentData.costoActividadIndividual} por
                  actividad/niño
                </li> */}
              </ul>

              <button className="btn-quote" onClick={handleWhatsApp}>
                Reservar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
