export default function ActivityCard({ title, description, color, image }) {
  return (
    <article className="activity-card" style={{ backgroundColor: color }}>
      <div className="activity-card__image-container">
        <img src={image} alt={title} className="activity-card__img" />
      </div>
      <div className="activity-card__body">
        <h3 className="activity-card__title">{title}</h3>
        <p className="activity-card__description">{description}</p>
      </div>
    </article>
  );
}
