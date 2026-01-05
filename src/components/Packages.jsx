import React, { useState, useEffect } from "react";
import { pricingData } from "../data/pricingData"; // Asegúrate de que la ruta sea correcta

export default function Packages() {
  const [ninos, setNinos] = useState(10);
  const [actividades, setActividades] = useState(5);
  const [currentData, setCurrentData] = useState(pricingData[0]);

  // Cada vez que cambie el número de niños, buscamos la fila correspondiente
  useEffect(() => {
    const found = pricingData.find((item) => item.n_n === ninos);
    if (found) setCurrentData(found);
  }, [ninos]);

  const total = currentData.paquetes[actividades];

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
              <label>¿Cuántos niños asistirán?</label>
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
              <label>
                ¿Cuántas actividades quieres? <span>({actividades})</span>
              </label>
              <input
                type="range"
                min="5"
                max="9"
                step="1"
                value={actividades}
                onChange={(e) => setActividades(parseInt(e.target.value))}
                className="activity-slider"
              />
              <div className="slider-labels">
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: TARJETA DE RESULTADO */}
          <div className="packages__result">
            <div className="result-card">
              <div className="result-header">
                <span className="badge">Recomendado</span>
                <h3>Resumen del Plan</h3>
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
                <li>
                  <span>💰</span> ${currentData.costoActividadIndividual} por
                  actividad/niño
                </li>
              </ul>

              <button
                className="btn-quote"
                onClick={() =>
                  window.open(
                    `https://wa.me/522311048087?text=Hola! Me interesa el paquete de ${actividades} actividades para ${ninos} niños ($${total})`,
                    "_blank"
                  )
                }
              >
                Reservar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
