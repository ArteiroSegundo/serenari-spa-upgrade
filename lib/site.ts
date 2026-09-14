/**
 * Single source of truth for the Serenari Spa business data (NAP, hours, channels).
 * Every value here comes from the real business — never fill it with placeholders.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.serenarispa.com.br";

export const business = {
  name: "Serenari Spa",
  legalName: "SERENARI SPA LTDA",
  cnpj: "59.668.646/0001-94",
  tagline: "Massoterapia humanizada em Suzano/SP",
  phoneDisplay: "(11) 5108-1983",
  phoneE164: "+551151081983",
  email: "atendimento@serenarispa.com.br",
  address: {
    street: "R. Mal. Rondon, 192",
    district: "Jardim Santa Helena",
    city: "Suzano",
    state: "SP",
    country: "BR",
    full: "R. Mal. Rondon, 192 — Jardim Santa Helena, Suzano/SP",
  },
  geo: {
    latitude: -23.5467350,
    longitude: -46.3198807,
  },
  maps: {
    place: "https://maps.app.goo.gl/J1rNn4WwhbDD5uqx9",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Serenari+Spa+R.+Mal.+Rondon%2C+192+Jardim+Santa+Helena+Suzano+SP",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6041738319855!2d-46.319880727688655!3d-23.546735014200387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7bd80060d1db%3A0xeff5eecc8a2157e1!2sSERENARI%20SPA%20-%20MASSAGENS!5e0!3m2!1sen!2sbr!4v1761682751052!5m2!1sen!2sbr",
  },
  social: {
    instagram: "https://www.instagram.com/serenarispa",
    facebook: "https://www.facebook.com/profile.php?id=61571599336923",
  },
  reviews: {
    url: "https://maps.app.goo.gl/J1rNn4WwhbDD5uqx9",
    count: 139,
  },
  hours: [
    { label: "Segunda a sábado", time: "09h — 19h", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "19:00" },
    { label: "Domingo", time: "Fechado", days: ["Sunday"], opens: null, closes: null },
  ],
} as const;

const WHATSAPP_BASE = "https://wa.me/551151081983";

export function whatsappLink(text: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

/** Reusable conversation openers, so every CTA arrives with useful context. */
export const whatsappMessages = {
  general: "Olá! Vim pelo site do Serenari e gostaria de agendar uma sessão.",
  guidance:
    "Olá! Vim pelo site do Serenari e não sei qual terapia escolher. Podem me ajudar?",
  hours: "Olá! Vim pelo site do Serenari e gostaria de saber os horários disponíveis.",
  service: (title: string) =>
    `Olá! Vim pelo site do Serenari e gostaria de agendar ${title}.`,
};
