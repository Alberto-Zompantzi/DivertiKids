import { contactInfo } from "../data/contact";
import ContactItem from "./ContactItem";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Contacto</h2>

      <ul className="contact__list">
        <ContactItem
          href={`https://wa.me/52${contactInfo.whatsapp}`}
          label="WhatsApp"
          value={contactInfo.whatsapp}
        />
        <ContactItem
          href={`tel:${contactInfo.phone}`}
          label="Teléfono"
          value={contactInfo.phone}
        />
        <ContactItem
          href={contactInfo.facebook}
          label="Facebook"
          value="DivertiKids"
        />
        <ContactItem
          href={contactInfo.instagram}
          label="Instagram"
          value="@divertikids"
        />
        <ContactItem
          href={contactInfo.tiktok}
          label="TikTok"
          value="@divertikids"
        />
      </ul>
    </section>
  );
}
