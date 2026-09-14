import type { ReactNode } from "react";
import Link from "next/link";

type LegalPageProps = {
  title: string;
  updatedAt: string;
  children: ReactNode;
};

export default function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <section className="legal">
      <div className="shell">
        <nav className="breadcrumb" aria-label="Você está aqui">
          <Link href="/">Início</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>

        <div className="legal__body">
          <h1>{title}</h1>
          <p className="legal__updated">Atualizado em {updatedAt}.</p>
          {children}
        </div>
      </div>
    </section>
  );
}
