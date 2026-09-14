"use client";

import { useEffect, useState } from "react";
import { WhatsApp } from "@/components/ui/Icons";
import { whatsappLink, whatsappMessages } from "@/lib/site";

/**
 * The only floating element on the page. It stays out of the way until the visitor
 * has scrolled past the hero, where the primary CTAs already live.
 */
export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      className="fab"
      data-visible={visible ? "true" : "false"}
      href={whatsappLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <WhatsApp size={20} />
      <span className="fab__label">Agendar no WhatsApp</span>
      <span className="visually-hidden">Abrir conversa no WhatsApp</span>
    </a>
  );
}
