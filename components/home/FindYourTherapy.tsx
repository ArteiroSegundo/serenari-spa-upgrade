import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";
import { paths } from "@/lib/content";
import { getService } from "@/lib/services";
import { whatsappLink, whatsappMessages } from "@/lib/site";

export default function FindYourTherapy() {
  return (
    <section className="section section--ink" id="escolher">
      <div className="shell">
        <div className="section-head section-head--split">
          <Reveal>
            <p className="overline">Como escolher</p>
            <h2 className="h2">Comece pelo que você está sentindo</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="body-soft">
              Ninguém precisa chegar sabendo o nome da técnica. Encontre a frase que mais se parece com o seu
              dia — e siga por ali.
            </p>
          </Reveal>
        </div>

        <div className="paths">
          {paths.map((path, index) => (
            <Reveal key={path.need} delay={index * 70} className="path">
              <div className="path__head">
                <h3 className="path__need">{path.need}</h3>
                <p className="path__detail">{path.detail}</p>
              </div>
              <ul className="path__options">
                {path.slugs.map((slug) => {
                  const service = getService(slug);
                  if (!service) return null;
                  return (
                    <li key={slug}>
                      <Link className="chip" href={`/terapias/${slug}`}>
                        {service.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="section-foot btn-row">
            <a
              className="btn btn--light"
              href={whatsappLink(whatsappMessages.guidance)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ainda em dúvida? Fale com a Serenari
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
