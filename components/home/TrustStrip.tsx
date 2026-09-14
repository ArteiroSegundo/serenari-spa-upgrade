import { Clock, MapPin, Sparkle, Star } from "@/components/ui/Icons";
import { business } from "@/lib/site";

const items = [
  {
    icon: <Star size={16} />,
    title: `${business.reviews.count}+ avaliações`,
    text: "Cinco estrelas no Google, escritas por quem já esteve aqui.",
  },
  {
    icon: <Sparkle size={16} />,
    title: "14 terapias",
    text: "Massagens, drenagem, terapias integrativas e cuidados faciais.",
  },
  {
    icon: <MapPin size={16} />,
    title: "Suzano — SP",
    text: `${business.address.street}, ${business.address.district}.`,
  },
  {
    icon: <Clock size={16} />,
    title: "Seg a sáb, 09h — 19h",
    text: "Agendamento pelo WhatsApp, com horário combinado antes.",
  },
];

export default function TrustStrip() {
  return (
    <section className="trust" aria-label="Informações rápidas sobre o Serenari Spa">
      <div className="shell">
        <ul className="trust__list">
          {items.map((item) => (
            <li key={item.title} className="trust__item">
              {item.icon}
              <span>
                <strong>{item.title}</strong>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
