import Image from "next/image";
import Link from "next/link";
import HeroVideo from "@/components/home/HeroVideo";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight, Clock, MapPin, Star } from "@/components/ui/Icons";
import { business, whatsappLink, whatsappMessages } from "@/lib/site";

/**
 * The hero copy renders at first paint on purpose — fading it in would push the
 * Largest Contentful Paint a full second past the first paint. The same applies to
 * the lead media, so only the small inset image animates in.
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
            Um espaço de massoterapia humanizada, feito para devolver o que a rotina tira: tempo, silêncio e
            presença.
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

        <div className="hero__media" data-media-kind="video">
          <div className="photo photo--arch hero__figure">
            <HeroVideo />
          </div>

          <Reveal variant="mask" delay={260} className="photo hero__figure-secondary">
            <Image
              src="/sobre-nos/09.jpg"
              alt="Bandeja de boas-vindas com frutas e chá servida na sala de massagem"
              width={1600}
              height={2133}
              sizes="14vw"
              quality={70}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
