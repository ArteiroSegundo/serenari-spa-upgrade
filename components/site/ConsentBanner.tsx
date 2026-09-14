"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "serenariSpaConsent";

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }
    const timer = setTimeout(() => setShow(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  function accept() {
    setShow(false);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      /* storage unavailable — the notice simply returns on the next visit */
    }
  }

  if (!show) return null;

  return (
    <aside className="consent" aria-label="Aviso de cookies">
      <p>
        Usamos cookies para entender como o site é utilizado e melhorar sua experiência. Ao continuar, você
        concorda com nossos <Link href="/termos">Termos de Uso</Link> e com a{" "}
        <Link href="/privacidade">Política de Privacidade</Link>.
      </p>
      <button type="button" className="btn" onClick={accept}>
        Entendi
      </button>
    </aside>
  );
}
