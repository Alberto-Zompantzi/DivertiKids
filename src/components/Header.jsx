import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div
        className={`header__overlay ${isMenuOpen ? "is-visible" : ""}`}
        onClick={closeMenu}
      />

      <div className="header__container container">
        <a href="#" className="header__logo">
          <img src="/Logo.jpg" alt="DivertiKids Logo" />
        </a>

        <button
          type="button"
          className={`header__burger ${isMenuOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${isMenuOpen ? "is-open" : ""}`}>
          <a href="#" onClick={closeMenu}>
            Inicio
          </a>
          <a href="#activities" onClick={closeMenu}>
            Actividades
          </a>
          <a href="#paquetes" onClick={closeMenu}>
            Paquetes
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contacto
          </a>
        </nav>

        <div className="header__actions">
          <a href="#contact" className="header__cta">
            Contactanos
          </a>

          <a
            href="https://wa.me/522311048087"
            target="_blank"
            rel="noopener noreferrer"
            className="header__whatsapp"
            aria-label="WhatsApp"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M16 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.64 4.64 1.867 6.667L2 29.333l6.853-2.453A13.28 13.28 0 0016 29.333c7.36 0 13.333-5.973 13.333-13.333S23.36 2.667 16 2.667zm0 24c-2.187 0-4.333-.587-6.2-1.693l-.44-.253-4.067 1.453 1.48-3.96-.293-.453A11.27 11.27 0 014.667 16C4.667 9.747 9.747 4.667 16 4.667S27.333 9.747 27.333 16 22.253 27.333 16 27.333zm6.187-8.293c-.333-.167-1.973-.973-2.28-1.08-.307-.113-.533-.167-.76.167-.227.333-.88 1.08-1.08 1.307-.2.227-.4.253-.733.08-.333-.167-1.413-.52-2.693-1.667-.993-.88-1.667-1.973-1.867-2.307-.2-.333-.02-.513.147-.68.153-.153.333-.4.5-.6.167-.2.227-.333.333-.56.113-.227.06-.427-.02-.593-.08-.167-.76-1.827-1.04-2.507-.273-.653-.553-.567-.76-.58l-.647-.013c-.227 0-.593.08-.907.427-.313.333-1.2 1.173-1.2 2.867s1.227 3.333 1.4 3.56c.167.227 2.413 3.693 5.84 5.173.813.347 1.447.553 1.94.707.813.26 1.553.227 2.133.14.653-.1 1.973-.807 2.253-1.587.28-.78.28-1.453.2-1.587-.08-.133-.307-.2-.64-.367z"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
