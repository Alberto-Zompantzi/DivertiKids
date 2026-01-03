import { contactInfo } from "../data/contact";
import ContactItem from "./ContactItem";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>

      <ul className="contact__list">
        <ContactItem
          label="WhatsApp"
          value={contactInfo.whatsapp}
          href={`https://wa.me/52${contactInfo.whatsapp}`}
        />

        <ContactItem
          label="Teléfono"
          value={contactInfo.phone}
          href={`tel:${contactInfo.phone}`}
        />

        <ContactItem
          label="Facebook"
          value="DivertiKids"
          href={contactInfo.facebook}
        />

        <ContactItem
          label="Instagram"
          value="@divertikids"
          href={contactInfo.instagram}
        />

        <ContactItem
          label="TikTok"
          value="@divertikids"
          href={contactInfo.tiktok}
        />
      </ul>
    </section>
  );
}
