"use client";

import { useState } from "react";
import { MapPin } from "@/components/ui/Icons";
import { business } from "@/lib/site";

/**
 * Google Maps costs ~900KB of third-party JavaScript. We show a quiet placeholder
 * and only mount the iframe when someone actually asks for the map.
 */
export default function MapCard() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="map">
      {loaded ? (
        <iframe
          src={business.maps.embed}
          title={`Mapa com a localização do ${business.name} em ${business.address.city}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="map__facade">
          <MapPin size={26} />
          <p>
            {business.address.street} — {business.address.district}, {business.address.city}/
            {business.address.state}
          </p>
          <button type="button" className="btn btn--ghost" onClick={() => setLoaded(true)}>
            Carregar o mapa
          </button>
          <p>
            Ao carregar, o conteúdo é fornecido pelo Google Maps.
          </p>
        </div>
      )}
    </div>
  );
}
