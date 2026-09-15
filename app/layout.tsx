import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WhatsAppFab from "@/components/site/WhatsAppFab";
import RevealObserver from "@/components/ui/RevealObserver";
import { business, SITE_URL } from "@/lib/site";
import { daySpaSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jost",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Serenari Spa | Massagem e massoterapia em Suzano/SP",
    template: "%s | Serenari Spa",
  },
  description:
    "Spa de massoterapia humanizada em Suzano/SP. Massagem relaxante, terapêutica, drenagem linfática e terapias corporais em um espaço de pausa e reconexão.",
  applicationName: business.name,
  authors: [{ name: business.legalName }],
  keywords: [
    "spa em Suzano",
    "massagem em Suzano",
    "massagem relaxante Suzano",
    "massagem terapêutica Suzano",
    "drenagem linfática Suzano",
    "massoterapia Suzano",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: business.name,
    url: SITE_URL,
    title: "Serenari Spa | Massagem e massoterapia em Suzano/SP",
    description:
      "Um espaço de pausa, cuidado e reconexão em Suzano/SP. Massagens, drenagem linfática e terapias corporais.",
    images: [
      {
        url: "/og/serenari-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sala de massagem dupla do Serenari Spa, preparada com enxoval branco e bandeja de boas-vindas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serenari Spa | Massagem e massoterapia em Suzano/SP",
    description:
      "Um espaço de pausa, cuidado e reconexão em Suzano/SP. Massagens, drenagem linfática e terapias corporais.",
    images: ["/og/serenari-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#f6f3ec",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <RevealObserver />
        {/* Content is revealed on scroll; without JS it must still be readable. */}
        <noscript>
          <style>{`.reveal,.reveal--mask,.reveal--mask>*{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>

        <a className="skip-link" href="#conteudo">
          Ir para o conteúdo
        </a>

        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFab />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(daySpaSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </body>
    </html>
  );
}
