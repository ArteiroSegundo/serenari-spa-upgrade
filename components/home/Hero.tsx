import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight, Clock, MapPin, Star } from "@/components/ui/Icons";
import { business, whatsappLink, whatsappMessages } from "@/lib/site";

/**
 * The hero copy renders at first paint on purpose — fading it in would push the
 * Largest Contentful Paint a full second past the first paint. The same applies to
 * the lead photograph, so only the small inset image animates in.
 */
export default function Hero() {
  return (
    <section className="hero">
      <div className="shell hero__grid">
        <div className="hero__content">
          <p className="overline">Spa de massoterapia · Suzano — SP</p>

          <h1 className="display hero__title">
            O toque <em>transforma</em>.
          </h1>

          <p className="lede hero__lede">
            Um espaço de massoterapia humanizada em Suzano, feito para devolver o que a rotina tira: tempo,
            silêncio e presença.
          </p>

          <div className="btn-row">
            <a
              className="btn"
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar uma experiência
            </a>
            <Link className="btn btn--ghost" href="/terapias">
              Explorar terapias
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="hero__meta">
            <span className="hero__meta-item">
              <MapPin size={16} />
              {business.address.district}, {business.address.city}/{business.address.state}
            </span>
            <span className="hero__meta-item">
              <Clock size={16} />
              Seg a sáb, 09h — 19h
            </span>
            <a
              className="hero__meta-item"
              href={business.reviews.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star size={14} />
              {business.reviews.count}+ avaliações no Google
            </a>
          </div>
        </div>

        <div className="hero__media">
          <div className="photo photo--arch hero__figure">
            <Image
              src="/services/massagem-relaxante/01.jpg"
              alt="Massoterapeuta do Serenari Spa conduzindo uma sessão de massagem relaxante"
              width={1600}
              height={1667}
              sizes="(min-width: 900px) 46vw, 100vw"
              quality={78}
              priority
            />
          </div>

          <Reveal variant="mask" delay={260} className="photo hero__figure-secondary">
            <Image
              src="/sobre-nos/01.jpg"
              alt="Lounge de espera do Serenari Spa"
              width={1086}
              height={1448}
              sizes="14vw"
              quality={70}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
