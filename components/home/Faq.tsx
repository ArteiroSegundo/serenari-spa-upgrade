import Reveal from "@/components/ui/Reveal";
import { Plus } from "@/components/ui/Icons";
import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section className="section" id="duvidas">
      <div className="shell shell--narrow">
        <div className="section-head">
          <Reveal>
            <p className="overline">Dúvidas frequentes</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h2">Antes de agendar</h2>
          </Reveal>
        </div>

        <div className="faq">
          {faqs.map((faq, index) => (
            <Reveal as="details" key={faq.question} delay={index * 40} className="faq__item">
              <summary>
                {faq.question}
                <Plus size={20} className="faq__icon" />
              </summary>
              <p className="faq__answer">{faq.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
