import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { chapters } from "@/lib/content";

const acrostic = [
  ["S", "antuário de paz onde o corpo encontra alívio,"],
  ["E", "quilíbrio entre mente, espírito e energia ativa."],
  ["R", "enascimento em cada toque, liberação de tensões,"],
  ["E", "ssência de serenidade em cada sessão."],
  ["N", "utrição da alma, espaço acolhedor e sagrado,"],
  ["A", "colhimento ao presente, na consciência focado."],
  ["R", "econexão com o ser, presença plena e liberta,"],
  ["I", "ntegração de harmonia, onde a cura é certa."],
];

export default function Philosophy() {
  return (
    <section className="section section--ink" id="sobre">
      <div className="shell">
        <div className="section-head">
          <Reveal>
            <p className="overline">A Serenari</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h2">
              Autocuidado é um <em>direito</em>, não um luxo
            </h2>
          </Reveal>
        </div>

        <div className="about__grid">
          <div className="about__aside">
            <Reveal delay={120} className="prose">
              <p>
                O Serenari Spa nasceu com um propósito claro: transformar o toque em bem-estar. Somos um
                espaço de massoterapia humanizada em Suzano, criado para oferecer mais do que um momento de
                alívio.
              </p>
              <p>
                Cada detalhe importa — o ambiente sensorial, o acolhimento respeitoso, os aromas terapêuticos e
                a escuta atenta das necessidades de cada corpo. É por isso que, aqui, ninguém recebe o mesmo
                protocolo que a pessoa anterior recebeu.
              </p>
              <p>
                O nome carrega a intenção. Serenari vem de serenidade — e é isso que tentamos devolver, sessão
                após sessão.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <ul className="acrostic">
                {acrostic.map(([letter, line]) => (
                  <li key={line}>
                    <b aria-hidden="true">{letter}</b>
                    <span>
                      <span className="visually-hidden">{letter}</span>
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal variant="mask" delay={160} className="photo photo--arch about__photo">
            <Image
              src="/sobre-nos/04.jpg"
              alt="Espaço de espera do Serenari Spa com o símbolo da marca na parede"
              width={1600}
              height={2181}
              sizes="(min-width: 900px) 38vw, 100vw"
              quality={72}
            />
          </Reveal>
        </div>

        <ul className="chapters section-foot">
          {chapters.map((chapter, index) => (
            <Reveal as="li" key={chapter.index} delay={index * 80} className="chapter">
              <span className="chapter__index">{chapter.index}</span>
              <h3 className="chapter__title">{chapter.title}</h3>
              <p className="body-soft">{chapter.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
