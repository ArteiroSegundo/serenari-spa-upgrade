import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Serenari Spa",
    short_name: "Serenari",
    description: "Massoterapia humanizada em Suzano/SP.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f3ec",
    theme_color: "#f6f3ec",
    lang: "pt-BR",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
