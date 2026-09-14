import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { ArchMark } from "@/components/ui/Brand";
import { ArrowRight, WhatsApp } from "@/components/ui/Icons";
import { business, whatsappLink, whatsappMessages } from "@/lib/site";

export default function Finale() {
  return (
    <section className="section section--ink finale" id="agendar">
      <ArchMark className="finale__mark" />

      <div className="shell">
        <div className="finale__inner">
          <Reveal>
            <p className="overline overline--plain">Sua pausa</p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="h1">
              Reserve uma hora <em>para você</em>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="lede">
              Conte o que está sentindo. A gente indica a terapia, confirma o horário e prepara a sala antes de
              você chegar.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="btn-row">
              <a
                className="btn btn--light"
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp size={18} />
                Agendar pelo WhatsApp
              </a>
              <Link className="btn btn--outline-light" href="/terapias">
                Ver todas as terapias
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="finale__note">
              {business.address.full} · Seg a sáb, 09h — 19h ·{" "}
              <a href={`tel:${business.phoneE164}`}>{business.phoneDisplay}</a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
