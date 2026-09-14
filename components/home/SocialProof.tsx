import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight, Google, Star } from "@/components/ui/Icons";
import { testimonials } from "@/lib/content";
import { business } from "@/lib/site";

const leads = testimonials.filter((item) => item.lead);
const rest = testimonials.filter((item) => !item.lead).slice(0, 3);

function Stars() {
  return (
    <span className="proof__stars" role="img" aria-label="Avaliação de cinco estrelas">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} size={13} />
      ))}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section className="section" id="avaliacoes">
      <div className="shell">
        <div className="section-head section-head--split">
          <Reveal>
            <p className="overline">Quem já esteve aqui</p>
            <h2 className="h2">
              {business.reviews.count} pessoas escreveram sobre <em>esta</em> hora
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <a
              className="link"
              href={business.reviews.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ler todas no Google
              <ArrowRight size={15} />
            </a>
          </Reveal>
        </div>

        <div className="proof__lead">
          {leads.map((item, index) => (
            <Reveal key={item.name} delay={index * 110}>
              <figure className="proof__quote">
                <Stars />
                <blockquote className="quote">“{item.quote}”</blockquote>
                <figcaption className="proof__author">
                  <Image
                    className="proof__avatar"
                    src={item.avatar.src}
                    alt=""
                    width={item.avatar.width}
                    height={item.avatar.height}
                    sizes="44px"
                  />
                  <span>
                    {item.name}
                    <br />
                    Avaliação verificada no Google
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="proof__rest">
          {rest.map((item, index) => (
            <Reveal key={item.name} delay={index * 80} className="proof__small">
              <Stars />
              <p>“{item.quote}”</p>
              <p className="proof__badge">
                <Google size={15} />
                {item.name}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
