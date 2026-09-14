"use client";

import { useRef } from "react";
import Image from "next/image";
import { Plus } from "@/components/ui/Icons";
import type { SpacePhoto } from "@/lib/content";

/**
 * Opens the full set of room photos inside a native <dialog>, which gives us the
 * focus trap, the backdrop and Escape-to-close without a single line of extra JS.
 */
export default function SpaceGallery({ photos }: { photos: SpacePhoto[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button type="button" className="btn btn--ghost" onClick={() => dialogRef.current?.showModal()}>
        Ver as {photos.length} fotos do espaço
        <Plus size={15} />
      </button>

      <dialog className="lightbox" ref={dialogRef} aria-label="Fotos do espaço do Serenari Spa">
        <div className="lightbox__bar">
          <p>O espaço Serenari · {photos.length} fotos</p>
          <button type="button" className="lightbox__close" onClick={() => dialogRef.current?.close()}>
            Fechar
          </button>
        </div>

        <ul className="lightbox__strip">
          {photos.map((photo) => (
            <li className="lightbox__slide" key={photo.src}>
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
