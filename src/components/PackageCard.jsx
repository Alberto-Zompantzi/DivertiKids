export default function PackageCard({ name, price, description, highlight }) {
  return (
    <article className={`package-card ${highlight ? "is-featured" : ""}`}>
      <h3 className="package-card__title">{name}</h3>

      <p className="package-card__price">{price}</p>

      <p className="package-card__description">{description}</p>

      <a
        href="https://wa.me/522311048087"
        target="_blank"
        rel="noopener noreferrer"
        className="package-card__cta"
      >
        Cotizar por WhatsApp
      </a>
    </article>
  );
}
