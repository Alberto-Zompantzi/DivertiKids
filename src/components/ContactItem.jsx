export default function ContactItem({ label, value, href }) {
  return (
    <li className="contact__item">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <strong>{label}:</strong> {value}
      </a>
    </li>
  );
}
