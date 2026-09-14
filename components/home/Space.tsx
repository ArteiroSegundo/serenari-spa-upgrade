import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SpaceGallery from "@/components/home/SpaceGallery";
import { spacePhotos } from "@/lib/content";

const showcase = spacePhotos.slice(0, 5);

export default function Space() {
  return (
    <section className="section" id="espaco">
      <div className="shell">
        <div className="section-head section-head--split">
          <Reveal>
            <p className="overline">O espaço</p>
            <h2 className="h2">Silêncio, madeira e luz baixa</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="body-soft">
              Salas individuais e duplas, lounge de espera e uma estação de boas-vindas. Tudo preparado antes
              de você chegar — inclusive a temperatura da sala.
            </p>
          </Reveal>
        </div>

        <div className="space__grid">
          {showcase.map((photo, index) => (
            <Reveal
              key={photo.src}
              variant="mask"
              delay={index * 70}
              className="photo space__item"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 780px) 40vw, 50vw"
                quality={72}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="section-foot">
          <SpaceGallery photos={spacePhotos} />
        </Reveal>
      </div>
    </section>
  );
}
