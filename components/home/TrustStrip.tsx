import { Clock, MapPin, Sparkle, Star } from "@/components/ui/Icons";
import { serviceCount } from "@/lib/services";
import { business } from "@/lib/site";

/**
 * Carries the practical facts for the whole top of the page — the hero above
 * deliberately leaves address, hours and rating to this strip instead of
 * printing them twice in one screen.
 */
const items = [
  {
    icon: <Star size={16} />,
    title: `${business.reviews.count}+ avaliações`,
    text: "Cinco estrelas no Google, escritas por quem já esteve aqui.",
    href: business.reviews.url,
  },
  {
    icon: <Sparkle size={16} />,
    title: `${serviceCount} terapias`,
    text: "Massagens, drenagem, terapias integrativas e cuidados faciais.",
  },
  {
    icon: <MapPin size={16} />,
    title: `${business.address.city} — ${business.address.state}`,
    text: `${business.address.street}, ${business.address.district}.`,
    href: business.maps.place,
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
          {items.map((item) => {
            const body = (
              <>
                {item.icon}
                <span>
                  <strong>{item.title}</strong>
                  {item.text}
                </span>
              </>
            );

            return (
              <li key={item.title}>
                {item.href ? (
                  <a
                    className="trust__body"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {body}
                  </a>
                ) : (
                  <span className="trust__body">{body}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
