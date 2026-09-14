import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";
import { activeCategories, services } from "@/lib/services";
import { wellnessDisclaimer } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";
import { whatsappLink, whatsappMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terapias e massagens em Suzano/SP",
  description:
    "As 14 terapias do Serenari Spa em Suzano/SP: massagem relaxante, terapêutica, desportiva, pedras quentes, drenagem linfática, shiatsu, reflexologia e cuidados faciais.",
  alternates: { canonical: "/terapias" },
  openGraph: {
    title: "Terapias e massagens em Suzano/SP | Serenari Spa",
    description:
      "Massagens, drenagem linfática, terapias integrativas e cuidados faciais no Serenari Spa, em Suzano/SP.",
    url: "/terapias",
  },
};

export default function TherapiesPage() {
  return (
    <>
      <section className="page-head">
        <div className="shell">
          <nav className="breadcrumb" aria-label="Você está aqui">
            <Link href="/">Início</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Terapias</span>
          </nav>

          <div className="section-head">
            <Reveal>
              <p className="overline">Portfólio completo</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="h1">
                Catorze maneiras de <em>cuidar</em> de um corpo
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="lede">
                Da massagem mais suave à pressão mais profunda. Se a escolha não estiver clara, comece pelo que
                você está sentindo — a gente indica o resto.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="btn-row">
                <a
                  className="btn"
                  href={whatsappLink(whatsappMessages.guidance)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Não sei qual escolher
                </a>
                <Link className="btn btn--ghost" href="/#escolher">
                  Ver o guia por sensação
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell">
          {activeCategories.map((category) => {
            const group = services.filter((service) => service.category === category);

            return (
              <div className="therapy-group" key={category}>
                <h2 className="therapy-group__title">
                  {category}
                  <span className="therapy-group__count">
                    {group.length.toString().padStart(2, "0")}
                  </span>
                </h2>

                <div className="therapy-list">
                  {group.map((service, index) => (
                    <Reveal key={service.slug} delay={index * 50} className="therapy-row">
                      <div className="photo therapy-row__media">
                        <Image
                          src={service.cover.src}
                          alt=""
                          width={service.cover.width}
                          height={service.cover.height}
                          sizes="88px"
                          quality={60}
                        />
                      </div>
                      <div>
                        <h3 className="therapy-row__title">
                          <Link href={`/terapias/${service.slug}`}>{service.title}</Link>
                        </h3>
                        <p className="therapy-row__summary">{service.summary}</p>
                      </div>
                      <ArrowRight size={20} className="therapy-row__cue" />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}

          <p className="disclaimer">{wellnessDisclaimer}</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", path: "/" },
              { name: "Terapias", path: "/terapias" },
            ])
          ),
        }}
      />
    </>
  );
}
