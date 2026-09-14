import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";

export const metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="shell notfound">
      <p className="overline overline--plain">Erro 404</p>
      <h1 className="h1">Esta página saiu para respirar</h1>
      <p className="lede">
        O endereço que você abriu não existe mais — ou nunca existiu. Podemos recomeçar pelo início.
      </p>
      <div className="btn-row">
        <Link className="btn" href="/">
          Voltar ao início
        </Link>
        <Link className="btn btn--ghost" href="/terapias">
          Ver as terapias
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
