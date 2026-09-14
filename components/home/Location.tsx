import Reveal from "@/components/ui/Reveal";
import MapCard from "@/components/home/MapCard";
import { ArrowRight } from "@/components/ui/Icons";
import { business, whatsappLink, whatsappMessages } from "@/lib/site";

export default function Location() {
  return (
    <section className="section section--warm" id="localizacao">
      <div className="shell">
        <div className="section-head section-head--split">
          <Reveal>
            <p className="overline">Onde estamos</p>
            <h2 className="h2">Serenari Spa, Suzano — SP</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="body-soft">
              Ficamos no Jardim Santa Helena, a poucos minutos do centro de Suzano, com atendimento de segunda
              a sábado.
            </p>
          </Reveal>
        </div>

        <div className="location__grid">
          <Reveal className="location__facts">
            <div className="fact">
              <p className="fact__label">Endereço</p>
              <p className="fact__value">
                <a href={business.maps.place} target="_blank" rel="noopener noreferrer">
                  {business.address.street}
                  <br />
                  {business.address.district}
                  <br />
                  {business.address.city}/{business.address.state}
                </a>
              </p>
            </div>

            <div className="fact">
              <p className="fact__label">Horários</p>
              <div className="fact__list">
                {business.hours.map((slot) => (
                  <p className="fact__row" key={slot.label}>
                    <span>{slot.label}</span>
                    <span>{slot.time}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="fact">
              <p className="fact__label">Contato</p>
              <p className="fact__value">
                <a href={`tel:${business.phoneE164}`}>{business.phoneDisplay}</a>
                <br />
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </p>
            </div>

            <div className="btn-row">
              <a
                className="btn btn--ghost"
                href={business.maps.directions}
                target="_blank"
                rel="noopener noreferrer"
              >
                Traçar rota
                <ArrowRight size={16} />
              </a>
              <a
                className="btn"
                href={whatsappLink(whatsappMessages.hours)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver horários
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <MapCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
