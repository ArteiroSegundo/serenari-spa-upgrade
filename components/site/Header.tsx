"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Brand";
import { ArrowRight, WhatsApp } from "@/components/ui/Icons";
import { business, whatsappLink, whatsappMessages } from "@/lib/site";

const NAV = [
  { label: "Terapias", href: "/terapias" },
  { label: "O espaço", href: "/#espaco" },
  { label: "Avaliações", href: "/#avaliacoes" },
  { label: "A Serenari", href: "/#sobre" },
  { label: "Onde estamos", href: "/#localizacao" },
];

export default function Header() {
  const [pinned, setPinned] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setPinned(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";

    const drawerFocusable = drawerRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const focusable = drawerFocusable ? [...drawerFocusable, toggleRef.current].filter(Boolean) as HTMLElement[] : [];
    const focusFrame = window.requestAnimationFrame(() => focusable[0]?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }

      if (event.key === "Tab" && focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isCurrent = (href: string) => href === pathname || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <header className="header" data-pinned={pinned || open ? "true" : "false"} data-open={open ? "true" : "false"}>
        <div className="shell header__inner">
          <Link href="/" className="header__logo" aria-label="Serenari Spa — página inicial">
            <Logo />
          </Link>

          <nav className="header__nav" aria-label="Navegação principal">
            <ul className="header__links">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="header__link"
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <a
              className="btn btn--copper header__cta"
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="header__toggle"
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
              <span className="visually-hidden">{open ? "Fechar menu" : "Abrir menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <div
        ref={drawerRef}
        id="menu-mobile"
        className="drawer"
        data-open={open ? "true" : "false"}
        inert={!open}
      >
        <nav aria-label="Navegação mobile">
          <ul className="drawer__links">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="drawer__link" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="drawer__foot">
          <a
            className="btn btn--copper"
            href={whatsappLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp size={18} />
            Agendar uma experiência
            <ArrowRight size={16} />
          </a>
          <p className="drawer__meta">
            {business.address.full}
            <br />
            Seg a sáb, 09h — 19h · {business.phoneDisplay}
          </p>
        </div>
      </div>
    </>
  );
}
