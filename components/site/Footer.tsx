import Link from "next/link";
import { Logo } from "@/components/ui/Brand";
import { Facebook, Instagram, WhatsApp } from "@/components/ui/Icons";
import { business, whatsappLink, whatsappMessages } from "@/lib/site";
import { services } from "@/lib/services";

const highlighted = services.filter((service) => service.featured).slice(0, 4);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo className="logo--lg" />
            <p>
              Massoterapia humanizada em {business.address.city}/{business.address.state}. Um espaço de pausa,
              cuidado e reconexão.
            </p>
            <ul className="footer__socials">
              <li>
                <a
                  className="footer__social"
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram do Serenari Spa"
                >
                  <Instagram />
                </a>
              </li>
              <li>
                <a
                  className="footer__social"
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook do Serenari Spa"
                >
                  <Facebook />
                </a>
              </li>
              <li>
                <a
                  className="footer__social"
                  href={whatsappLink(whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp do Serenari Spa"
                >
                  <WhatsApp />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__cols">
            <div>
              <h2 className="footer__title">Terapias</h2>
              <ul className="footer__list">
                {highlighted.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/terapias/${service.slug}`}>{service.title}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/terapias">Ver todas</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="footer__title">Navegar</h2>
              <ul className="footer__list">
                <li>
                  <Link href="/#espaco">O espaço</Link>
                </li>
                <li>
                  <Link href="/#avaliacoes">Avaliações</Link>
                </li>
                <li>
                  <Link href="/#sobre">A Serenari</Link>
                </li>
                <li>
                  <Link href="/#duvidas">Dúvidas frequentes</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="footer__title">Visite</h2>
              <ul className="footer__list">
                <li>
                  <a href={business.maps.place} target="_blank" rel="noopener noreferrer">
                    {business.address.street}
                    <br />
                    {business.address.district}
                    <br />
                    {business.address.city}/{business.address.state}
                  </a>
                </li>
                <li>Segunda a sábado, 09h — 19h</li>
                <li>Domingo, fechado</li>
              </ul>
            </div>

            <div>
              <h2 className="footer__title">Falar com a gente</h2>
              <ul className="footer__list">
                <li>
                  <a href={`tel:${business.phoneE164}`}>{business.phoneDisplay}</a>
                </li>
                <li>
                  <a href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {business.legalName} · CNPJ {business.cnpj}
          </p>
          <div className="footer__legal">
            <Link href="/privacidade">Política de Privacidade</Link>
            <Link href="/termos">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
