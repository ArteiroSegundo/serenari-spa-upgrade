import Reveal from "@/components/ui/Reveal";
import { ArchMark } from "@/components/ui/Brand";

const moments = [
  {
    index: "01",
    title: "A chegada",
    text: "Você senta, respira e recebe a bandeja de boas-vindas. Nada começa até que o corpo entenda que pode parar.",
  },
  {
    index: "02",
    title: "A sessão",
    text: "Antes do toque, uma conversa curta: o que está pesando, onde incomoda, o que você prefere evitar. A sessão se ajusta a você — nunca o contrário.",
  },
  {
    index: "03",
    title: "O depois",
    text: "Ninguém é apressado para fora. O tempo de voltar ao mundo também faz parte da experiência.",
  },
];

export default function Experience() {
  return (
    <section className="section manifesto" id="experiencia">
      <ArchMark className="manifesto__mark" />

      <div className="shell">
        <div className="manifesto__body">
          <Reveal>
            <h2 className="overline">A experiência</h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="manifesto__statement">
              O Serenari não existe para vender massagem. Existe para criar um <em>intervalo</em> — entre o que
              você estava fazendo e o que ainda vai fazer. Uma hora em que ninguém precisa de você.
            </p>
          </Reveal>

          <ul className="chapters">
            {moments.map((moment, index) => (
              <Reveal as="li" key={moment.index} delay={index * 90} className="chapter">
                <span className="chapter__index">{moment.index}</span>
                <h3 className="chapter__title">{moment.title}</h3>
                <p className="body-soft">{moment.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
