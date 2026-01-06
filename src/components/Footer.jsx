export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__rainbow"></div>
      <div className="container footer__content">
        <div className="footer__info">
          <h3 className="footer__brand">
            Diverti<span>Kids</span>
          </h3>
          <p className="footer__copy">
            © {new Date().getFullYear()} DivertiKids · Todos los derechos
            reservados
          </p>
        </div>

        <div className="footer__message">
          <p>Hecho con ❤️ para eventos inolvidables</p>
        </div>
      </div>
    </footer>
  );
}
