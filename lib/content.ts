import { business } from "@/lib/site";

export type Testimonial = {
  name: string;
  quote: string;
  avatar: { src: string; width: number; height: number };
  /** Highlighted reviews get the editorial, large-type treatment. */
  lead?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Dyana Dyh",
    lead: true,
    quote:
      "O ambiente é extremamente agradável, limpo e acolhedor, transmitindo uma sensação de tranquilidade desde a chegada. A massagem foi simplesmente excelente, muito atenciosa e profissional. Saí renovada e com certeza voltarei mais vezes.",
    avatar: { src: "/avatars/dyana-dyh.png", width: 144, height: 144 },
  },
  {
    name: "Gabrielle Fernandes",
    lead: true,
    quote:
      "O atendimento foi impecável, atencioso e com aquele cuidado que faz a gente se sentir especial. O ambiente é lindo, tranquilo e muito aconchegante. Fiz uma massagem relaxante e saí sem sentir absolutamente nada das dores.",
    avatar: { src: "/avatars/gabrielle-fernandes.png", width: 144, height: 144 },
  },
  {
    name: "Thauani Cris",
    quote:
      "Eu amei a experiência! Foi incrível, sem dúvidas voltarei mais vezes, recomendo muito. Ambiente super agradável, fui muito bem atendida.",
    avatar: { src: "/avatars/thauani-cris.png", width: 144, height: 144 },
  },
  {
    name: "Junior Nascimento",
    quote:
      "Atendimento impecável, muito atencioso, educado e extremamente competente. A sessão foi ao mesmo tempo relaxante e revigorante. Recomendo sem medo!",
    avatar: { src: "/avatars/junior-nascimento.png", width: 144, height: 144 },
  },
  {
    name: "Amanda Fernandes",
    quote:
      "Sem dúvidas, o lugar mais aconchegante e acolhedor que já estive. Profissionais extremamente qualificados, tratamento ímpar, ambiente aconchegante e lindo!",
    avatar: { src: "/avatars/amanda-fernandes.png", width: 144, height: 144 },
  },
  {
    name: "Fernando Comitre",
    quote:
      "A massagem foi certeira nos pontos de tensão e ajudou demais a aliviar a dor nas costas. Com certeza retornarei.",
    avatar: { src: "/avatars/fernando-comitre.png", width: 144, height: 144 },
  },
  {
    name: "Maxwell da Cruz Santos",
    quote: "Local aconchegante, ótimo atendimento e serviço super profissional.",
    avatar: { src: "/avatars/maxwell-santos.png", width: 144, height: 144 },
  },
];

export type SpacePhoto = { src: string; width: number; height: number; alt: string };

export const spacePhotos: SpacePhoto[] = [
  { src: "/sobre-nos/01.jpg", width: 1086, height: 1448, alt: "Lounge de espera do Serenari Spa, com poltronas claras e iluminação indireta" },
  { src: "/sobre-nos/05.jpg", width: 1600, height: 2133, alt: "Sala de massagem dupla preparada, com enxoval branco e bandeja de boas-vindas" },
  { src: "/sobre-nos/08.jpg", width: 1600, height: 2134, alt: "Óleos essenciais e flores sobre bancada de madeira no Serenari Spa" },
  { src: "/sobre-nos/12.jpg", width: 1600, height: 2133, alt: "Sala dupla do Serenari Spa com toalhas dobradas em formato de cisnes" },
  { src: "/sobre-nos/02.jpg", width: 1201, height: 1309, alt: "Recepção do Serenari Spa" },
  { src: "/sobre-nos/03.jpg", width: 1600, height: 2133, alt: "Estação de café e boas-vindas do Serenari Spa" },
  { src: "/sobre-nos/07.jpg", width: 1600, height: 2133, alt: "Sala de massagem individual do Serenari Spa" },
  { src: "/sobre-nos/09.jpg", width: 1600, height: 2133, alt: "Bandeja de boas-vindas com frutas servida no Serenari Spa" },
  { src: "/sobre-nos/10.jpg", width: 1600, height: 2134, alt: "Sala de massagem individual preparada para a sessão" },
  { src: "/sobre-nos/11.jpg", width: 1600, height: 1717, alt: "Sala de massagem dupla do Serenari Spa vista pelo espelho" },
  { src: "/sobre-nos/04.jpg", width: 1600, height: 2181, alt: "Espaço de espera com o símbolo Serenari na parede" },
  { src: "/sobre-nos/06.jpg", width: 1600, height: 2133, alt: "Detalhe da bandeja de boas-vindas do Serenari Spa" },
];

/** Mission, vision and values — told as three chapters instead of three cards. */
export const chapters = [
  {
    index: "I",
    title: "O que nos move",
    text: "Transformar o toque em bem-estar. Cada sessão é construída para que alguém saia daqui mais leve do que entrou — no corpo e no que veio pensando.",
  },
  {
    index: "II",
    title: "Onde queremos chegar",
    text: "Ser, no Alto Tietê, o lugar em que as pessoas pensam quando precisam de uma pausa de verdade. Não apenas de uma massagem: de cuidado integral e reconexão.",
  },
  {
    index: "III",
    title: "O que não abrimos mão",
    text: "Presença e escuta. Cuidado humano. Qualidade contínua. Parceria local. Autenticidade em cada detalhe do atendimento.",
  },
];

/** Need-first navigation: how someone actually decides which session to book. */
export const paths = [
  {
    need: "Quero desacelerar",
    detail: "Dias longos, cabeça cheia, sono ruim.",
    slugs: ["massagem-relaxante", "massagem-pedras-quentes", "reflexologia-podal"],
  },
  {
    need: "Tenho um ponto de tensão",
    detail: "Costas, pescoço ou lombar reclamando há dias.",
    slugs: ["massagem-terapeutica", "massagem-localizada", "liberacao-miofascial"],
  },
  {
    need: "Sinto o corpo pesado",
    detail: "Pernas cansadas, sensação de inchaço no fim do dia.",
    slugs: ["drenagem-linfatica-corporal", "esfoliacao-corporal"],
  },
  {
    need: "Treino e quero recuperar",
    detail: "Rotina de exercícios, musculatura sempre exigida.",
    slugs: ["massagem-desportiva", "liberacao-miofascial", "ventosaterapia"],
  },
  {
    need: "Quero cuidar do rosto",
    detail: "Pele cansada, rosto inchado, mandíbula tensa.",
    slugs: ["drenagem-linfatica-facial", "revitalizacao-facial", "limpeza-de-pele-natural"],
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Onde fica o Serenari Spa?",
    answer: `O Serenari Spa fica na ${business.address.street}, ${business.address.district}, em ${business.address.city}/${business.address.state}.`,
  },
  {
    question: "Qual o horário de funcionamento?",
    answer:
      "Atendemos de segunda a sábado, das 09h às 19h. Aos domingos permanecemos fechados.",
  },
  {
    question: "Como faço para agendar uma sessão?",
    answer: `O agendamento é feito pelo WhatsApp ou pelo telefone ${business.phoneDisplay}. Você diz a terapia (ou conta o que está sentindo) e combinamos o melhor horário.`,
  },
  {
    question: "Preciso agendar com antecedência?",
    answer:
      "Recomendamos combinar o horário antes pelo WhatsApp. Assim garantimos a sala e o profissional disponíveis no dia e no horário que você preferir.",
  },
  {
    question: "Quanto tempo dura uma sessão?",
    answer:
      "A duração varia conforme a terapia escolhida e a combinação de sessões. Confirmamos o tempo exato no momento do agendamento.",
  },
  {
    question: "Quais são os valores?",
    answer:
      "Os valores variam conforme a terapia e a duração. Enviamos a tabela atualizada pelo WhatsApp — é a forma mais rápida de receber a informação correta.",
  },
  {
    question: "Não sei qual terapia escolher. Vocês ajudam?",
    answer:
      "Sim, e é o mais comum. Conte pelo WhatsApp o que você está sentindo e como está a sua rotina, e indicamos a sessão mais adequada antes de qualquer agendamento.",
  },
  {
    question: "O Serenari atende homens?",
    answer:
      "Sim. O Serenari Spa atende homens e mulheres, com o mesmo cuidado e acolhimento em todas as terapias do nosso portfólio.",
  },
  {
    question: "Quais terapias o Serenari oferece?",
    answer:
      "Massagem relaxante, terapêutica, localizada, desportiva e com pedras quentes; drenagem linfática corporal e facial; shiatsu, reflexologia podal, ventosaterapia e liberação miofascial; além de esfoliação corporal, revitalização facial e limpeza de pele natural.",
  },
];

export const wellnessDisclaimer =
  "As terapias do Serenari Spa têm finalidade de relaxamento e bem-estar e não substituem avaliação, diagnóstico ou tratamento médico.";
