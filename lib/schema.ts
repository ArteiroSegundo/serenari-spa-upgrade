import { business, SITE_URL } from "@/lib/site";
import { services, type Service } from "@/lib/services";
import { faqs } from "@/lib/content";

const BUSINESS_ID = `${SITE_URL}/#spa`;

function openingHours() {
  return business.hours
    .filter((slot) => slot.opens && slot.closes)
    .map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days.map((day) => `https://schema.org/${day}`),
      opens: slot.opens,
      closes: slot.closes,
    }));
}

export function daySpaSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "@id": BUSINESS_ID,
    name: business.name,
    legalName: business.legalName,
    description: `Spa de massoterapia humanizada em ${business.address.city}/${business.address.state}. Massagens, drenagem linfática e terapias corporais em um espaço pensado para pausa e reconexão.`,
    url: SITE_URL,
    image: `${SITE_URL}/sobre-nos/01.jpg`,
    logo: `${SITE_URL}/brand/serenari-mark.png`,
    telephone: business.phoneE164,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${business.address.street}`,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    hasMap: business.maps.place,
    openingHoursSpecification: openingHours(),
    sameAs: [business.social.instagram, business.social.facebook, business.maps.place],
    areaServed: [
      { "@type": "City", name: "Suzano" },
      { "@type": "City", name: "Mogi das Cruzes" },
      { "@type": "City", name: "Poá" },
      { "@type": "City", name: "Itaquaquecetuba" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Terapias do Serenari Spa",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${SITE_URL}/terapias/${service.slug}`,
          description: service.summary,
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: business.name,
    inLanguage: "pt-BR",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.summary,
    url: `${SITE_URL}/terapias/${service.slug}`,
    image: `${SITE_URL}${service.cover.src}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "City", name: business.address.city },
    category: service.category,
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
