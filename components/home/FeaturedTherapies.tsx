import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";
import { featuredServices } from "@/lib/services";

export default function FeaturedTherapies() {
  return (
    <section className="section section--warm" id="terapias">
      <div className="shell">
        <div className="section-head section-head--split">
          <Reveal>
            <p className="overline">Em destaque</p>
            <h2 className="h2">
              Quatro formas de <em>parar</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="body-soft">
              São as sessões mais procuradas da casa. O portfólio completo tem catorze — e a escolha certa
              depende menos do nome da técnica do que do que você está sentindo hoje.
            </p>
          </Reveal>
        </div>

        <div className="featured__list">
          {featuredServices.map((service, index) => (
            <article className="feature" key={service.slug}>
              <Reveal variant="mask" className="photo photo--arch feature__media">
                <Image
                  src={service.cover.src}
                  alt={service.cover.alt}
                  width={service.cover.width}
                  height={service.cover.height}
                  sizes="(min-width: 860px) 45vw, 100vw"
                  quality={76}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </Reveal>

              <Reveal delay={120} className="feature__body">
                <span className="feature__index">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="h3 feature__title">
                  <Link href={`/terapias/${service.slug}`}>{service.title}</Link>
                </h3>
                <p className="body-soft">{service.summary}</p>
                <p className="feature__feels">{service.feels}</p>
                <span className="link">
                  Conhecer a terapia
                  <ArrowRight size={15} />
                </span>
              </Reveal>
            </article>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="btn-row section-foot">
            <Link className="btn btn--ghost" href="/terapias">
              Explorar todas as 14 terapias
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
