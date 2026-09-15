import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight, Sparkle, WhatsApp } from "@/components/ui/Icons";
import { getService, services } from "@/lib/services";
import { wellnessDisclaimer } from "@/lib/content";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { business, whatsappLink, whatsappMessages } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const title = `${service.title} em ${business.address.city}/${business.address.state}`;
  const description = `${service.summary} Sessões no Serenari Spa, em ${business.address.city}/${business.address.state}.`;

  return {
    title,
    description,
    alternates: { canonical: `/terapias/${service.slug}` },
    openGraph: {
      title: `${title} | Serenari Spa`,
      description,
      url: `/terapias/${service.slug}`,
      images: [
        { url: `/og/services/${service.slug}.jpg`, width: 1200, height: 630, alt: service.cover.alt },
      ],
    },
  };
}

export default async function TherapyPage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services
    .filter((item) => item.slug !== service.slug && item.category === service.category)
    .slice(0, 3);
  const suggestions = related.length
    ? related
    : services.filter((item) => item.featured && item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <article>
        <section className="page-head">
          <div className="shell">
            <nav className="breadcrumb" aria-label="Você está aqui">
              <Link href="/">Início</Link>
              <span aria-hidden="true">/</span>
              <Link href="/terapias">Terapias</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{service.title}</span>
            </nav>

            <div className="therapy-hero">
              <div className="photo photo--arch therapy-hero__media">
                <Image
                  src={service.cover.src}
                  alt={service.cover.alt}
                  width={service.cover.width}
                  height={service.cover.height}
                  sizes="(min-width: 900px) 45vw, 100vw"
                  quality={78}
                  priority
                  fetchPriority="high"
                />
              </div>

              <div className="therapy-hero__body">
                <Reveal>
                  <p className="overline">{service.category}</p>
                </Reveal>

                <Reveal delay={80}>
                  <h1 className="h1">{service.title}</h1>
                </Reveal>

                <Reveal delay={120}>
                  <p className="lede">{service.tagline}</p>
                </Reveal>

                <Reveal delay={160} className="prose">
                  {service.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </Reveal>

                <Reveal delay={200}>
                  <p className="therapy-hero__feels">{service.feels}</p>
                </Reveal>

                <Reveal delay={240}>
                  <h2 className="h3">Costuma ser escolhida por</h2>
                  <ul className="checklist section-foot">
                    {service.forWho.map((item) => (
                      <li key={item}>
                        <Sparkle size={13} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={280}>
                  <div className="btn-row section-foot">
                    <a
                      className="btn"
                      href={whatsappLink(whatsappMessages.service(service.title))}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsApp size={18} />
                      Agendar {service.title}
                    </a>
                    <a
                      className="btn btn--ghost"
                      href={whatsappLink(whatsappMessages.guidance)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tirar uma dúvida
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {service.gallery.length > 0 && (
          <section className="section section--tight section--warm">
            <div className="shell">
              <h2 className="h3">A sessão por dentro</h2>
              <div className="therapy-gallery">
                {service.gallery.map((photo, index) => (
                  <Reveal
                    key={photo.src}
                    variant="mask"
                    delay={index * 50}
                    className="photo"
                  >
                    <Image
                      src={photo.src}
                      alt={
                        photo.alt ??
                        `${service.title} no Serenari Spa — foto ${index + 1} de ${service.gallery.length}`
                      }
                      width={photo.width}
                      height={photo.height}
                      sizes="(min-width: 900px) 25vw, 50vw"
                      quality={68}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section section--tight">
          <div className="shell">
            <h2 className="h3">Talvez combine com você</h2>
            <div className="next-therapies">
              {suggestions.map((item) => (
                <article className="next-card" key={item.slug}>
                  <h3 className="next-card__title">
                    <Link href={`/terapias/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p className="body-soft">{item.summary}</p>
                </article>
              ))}
            </div>

            <div className="btn-row section-foot">
              <Link className="btn btn--ghost" href="/terapias">
                Ver todas as terapias
                <ArrowRight size={16} />
              </Link>
            </div>

            <p className="disclaimer">{wellnessDisclaimer}</p>
          </div>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", path: "/" },
              { name: "Terapias", path: "/terapias" },
              { name: service.title, path: `/terapias/${service.slug}` },
            ])
          ),
        }}
      />
    </>
  );
}
