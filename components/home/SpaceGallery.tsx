"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Plus } from "@/components/ui/Icons";
import type { SpacePhoto } from "@/lib/content";

/**
 * Opens the full set of room photos inside a native <dialog>, which gives us the
 * focus trap, the backdrop and Escape-to-close without a single line of extra JS.
 */
export default function SpaceGallery({ photos }: { photos: SpacePhoto[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const stripRef = useRef<HTMLUListElement>(null);
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    const next = (index + photos.length) % photos.length;
    setCurrent(next);
    stripRef.current?.children[next]?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [photos.length]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (!dialog.open) return;
      if (event.key === "ArrowLeft") goTo(current - 1);
      if (event.key === "ArrowRight") goTo(current + 1);
    };

    dialog.addEventListener("keydown", onKeyDown);
    return () => dialog.removeEventListener("keydown", onKeyDown);
  }, [current, goTo]);

  const openGallery = () => {
    setCurrent(0);
    dialogRef.current?.showModal();
  };

  const syncCurrentSlide = () => {
    const strip = stripRef.current;
    if (!strip?.clientWidth) return;
    setCurrent(Math.round(strip.scrollLeft / strip.clientWidth));
  };

  return (
    <>
      <button type="button" className="btn btn--ghost" onClick={openGallery}>
        Ver as {photos.length} fotos do espaço
        <Plus size={15} />
      </button>

      <dialog className="lightbox" ref={dialogRef} aria-label="Fotos do espaço do Serenari Spa">
        <div className="lightbox__bar">
          <p aria-live="polite">
            O espaço Serenari · foto {current + 1} de {photos.length}
          </p>
          <div className="lightbox__actions">
            <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => goTo(current - 1)}>
              <ArrowRight size={17} />
              <span className="visually-hidden">Foto anterior</span>
            </button>
            <button type="button" className="lightbox__nav" onClick={() => goTo(current + 1)}>
              <ArrowRight size={17} />
              <span className="visually-hidden">Próxima foto</span>
            </button>
            <button type="button" className="lightbox__close" onClick={() => dialogRef.current?.close()}>
              Fechar
            </button>
          </div>
        </div>

        <ul className="lightbox__strip" ref={stripRef} onScroll={syncCurrentSlide}>
          {photos.map((photo, index) => (
            <li className="lightbox__slide" key={photo.src} aria-hidden={index !== current}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 900px) 70vw, 92vw"
                quality={72}
              />
              <p>{photo.alt}</p>
            </li>
          ))}
        </ul>
      </dialog>
    </>
  );
}
