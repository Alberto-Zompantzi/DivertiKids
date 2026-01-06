export default function ContactItem({ label, value, href }) {
  return (
    <li className="contact__item">
      <a href={href} rel="noopener noreferrer" target="_blank">
        <strong className="contact__label-text">{label}:</strong>
        <span className="contact__value-text">{value}</span>
      </a>
    </li>
  );
}
