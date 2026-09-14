export type Photo = { src: string; width: number; height: number };

export const CATEGORIES = [
  "Massagens",
  "Terapias integrativas",
  "Corpo",
  "Rosto e pele",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Service = {
  slug: string;
  title: string;
  category: Category;
  /** Short editorial line used as an overline on cards and headers. */
  tagline: string;
  /** One sentence. Used on cards, lists and meta descriptions. */
  summary: string;
  /** Body copy for the therapy page. */
  intro: string[];
  /** Who tends to look for this session — written in everyday language, never as a diagnosis. */
  forWho: string[];
  /** How the session feels, in one sentence. */
  feels: string;
  featured?: boolean;
  cover: Photo & { alt: string };
  gallery: Photo[];
};

export const services: Service[] = [
  {
    slug: "massagem-relaxante",
    title: "Massagem Relaxante",
    category: "Massagens",
    tagline: "O silêncio que o corpo pedia",
    summary:
      "Movimentos longos e contínuos, feitos para desacelerar a respiração e soltar o que a rotina apertou.",
    intro: [
      "É a sessão de quem chega com a cabeça cheia. O ritmo é lento e previsível de propósito: manobras longas, pressão constante, óleo morno e um ambiente preparado para que você não precise pensar em mais nada durante o tempo em que estiver aqui.",
      "Trabalhamos o corpo inteiro, com atenção especial às costas, ombros e pescoço — as regiões onde o dia costuma se acumular primeiro. O objetivo não é forçar nada, é devolver a sensação de leveza.",
    ],
    forWho: [
      "Quem está em uma fase de rotina intensa e dorme mal",
      "Quem sente o corpo travado no fim do expediente",
      "Quem quer uma primeira experiência de spa, sem pressão forte",
    ],
    feels: "Calor, ritmo lento e a respiração diminuindo sozinha.",
    featured: true,
    cover: {
      src: "/services/massagem-relaxante/01.jpg",
      width: 1600,
      height: 1667,
      alt: "Massoterapeuta do Serenari Spa aplicando massagem relaxante nos ombros de um cliente em sala com luz verde",
    },
    gallery: [
      { src: "/services/massagem-relaxante/02.jpg", width: 1600, height: 1794 },
      { src: "/services/massagem-relaxante/03.jpg", width: 1600, height: 2027 },
      { src: "/services/massagem-relaxante/04.jpg", width: 1600, height: 1792 },
      { src: "/services/massagem-relaxante/05.jpg", width: 1600, height: 1828 },
    ],
  },
  {
    slug: "massagem-terapeutica",
    title: "Massagem Terapêutica",
    category: "Massagens",
    tagline: "Presença firme, ponto a ponto",
    summary:
      "Pressão mais profunda e direcionada às áreas de tensão acumulada, respeitando o limite do seu corpo.",
    intro: [
      "Aqui a conversa começa antes do toque: entender onde incomoda, há quanto tempo e em que movimentos aparece. A partir disso a sessão é construída — não existe roteiro fixo.",
      "A pressão é mais profunda que a da relaxante e trabalha as regiões de tensão com manobras específicas. Firme, nunca agressiva: a intensidade é ajustada com você durante toda a sessão.",
    ],
    forWho: [
      "Quem passa muitas horas na mesma posição, sentado ou em pé",
      "Quem sente rigidez recorrente em costas, lombar e trapézio",
      "Quem já conhece massagem e prefere pressão mais intensa",
    ],
    feels: "Uma pressão que encontra exatamente o ponto — e depois solta.",
    featured: true,
    cover: {
      src: "/services/massagem-terapeutica/01.jpg",
      width: 1600,
      height: 2133,
      alt: "Sessão de massagem terapêutica nas costas em sala do Serenari Spa",
    },
    gallery: [
      { src: "/services/massagem-terapeutica/02.jpg", width: 1600, height: 1667 },
      { src: "/services/massagem-terapeutica/03.jpg", width: 1600, height: 1794 },
      { src: "/services/massagem-terapeutica/04.jpg", width: 1600, height: 2027 },
      { src: "/services/massagem-terapeutica/05.jpg", width: 1600, height: 1792 },
      { src: "/services/massagem-terapeutica/06.jpg", width: 1600, height: 1828 },
    ],
  },
  {
    slug: "drenagem-linfatica-corporal",
    title: "Drenagem Linfática Corporal",
    category: "Corpo",
    tagline: "Leveza que se sente ao levantar",
    summary:
      "Toque leve, rítmico e no sentido do sistema linfático, para uma sensação de corpo mais leve e menos inchado.",
    intro: [
      "Diferente do que muita gente espera, a drenagem é uma das sessões mais suaves do Serenari. O toque é leve e repetitivo, seguindo o trajeto do sistema linfático — força não faz a técnica funcionar melhor.",
      "É uma sessão silenciosa, quase hipnótica pelo ritmo. A sensação mais relatada por quem faz é de corpo mais leve e pernas mais soltas ao final.",
    ],
    forWho: [
      "Quem sente as pernas pesadas no fim do dia",
      "Quem passa longos períodos sentado ou em pé no trabalho",
      "Quem procura uma sessão suave, sem pressão profunda",
    ],
    feels: "Um toque leve e constante, como água correndo na direção certa.",
    featured: true,
    cover: {
      src: "/services/drenagem-corporal/01.jpg",
      width: 1600,
      height: 2296,
      alt: "Drenagem linfática corporal sendo aplicada em cliente com máscara de olhos no Serenari Spa",
    },
    gallery: [
      { src: "/services/drenagem-corporal/02.jpg", width: 1600, height: 1927 },
      { src: "/services/drenagem-corporal/03.jpg", width: 1600, height: 2252 },
      { src: "/services/drenagem-corporal/04.jpg", width: 1600, height: 1990 },
      { src: "/services/drenagem-corporal/05.jpg", width: 1600, height: 2026 },
      { src: "/services/drenagem-corporal/06.jpg", width: 1600, height: 2133 },
      { src: "/services/drenagem-corporal/07.jpg", width: 1600, height: 2133 },
      { src: "/services/drenagem-corporal/08.jpg", width: 1600, height: 2133 },
      { src: "/services/drenagem-corporal/09.jpg", width: 1600, height: 1840 },
      { src: "/services/drenagem-corporal/10.jpg", width: 1600, height: 1917 },
      { src: "/services/drenagem-corporal/11.jpg", width: 1600, height: 2021 },
    ],
  },
  {
    slug: "massagem-pedras-quentes",
    title: "Massagem com Pedras Quentes",
    category: "Massagens",
    tagline: "Calor que entra devagar",
    summary:
      "Pedras vulcânicas aquecidas deslizam pelo corpo e preparam a musculatura antes das mãos chegarem.",
    intro: [
      "O calor faz metade do trabalho. As pedras basálticas são aquecidas e posicionadas ao longo das costas, aquecendo a musculatura de fora para dentro antes que qualquer pressão aconteça.",
      "Depois, as próprias pedras deslizam com óleo, alternando com as mãos. É uma das sessões mais envolventes do Serenari — e uma das preferidas nos dias frios.",
    ],
    forWho: [
      "Quem sente frio com facilidade e gosta de calor",
      "Quem tem a musculatura das costas sempre rígida",
      "Quem quer uma experiência sensorial diferente da massagem tradicional",
    ],
    feels: "Peso morno nas costas e uma vontade imediata de não se mexer.",
    featured: true,
    cover: {
      src: "/services/pedras-quentes/01.jpg",
      width: 1600,
      height: 1544,
      alt: "Massagem com pedras quentes aplicada nas costas de um cliente no Serenari Spa",
    },
    gallery: [
      { src: "/services/pedras-quentes/02.jpg", width: 1600, height: 2133 },
      { src: "/services/pedras-quentes/03.jpg", width: 1600, height: 1544 },
    ],
  },
  {
    slug: "massagem-localizada",
    title: "Massagem Localizada",
    category: "Massagens",
    tagline: "Só onde está pedindo",
    summary:
      "Sessão concentrada em uma região específica — pescoço, ombros ou lombar — quando o tempo é curto.",
    intro: [
      "Nem sempre dá para parar o dia inteiro. A localizada existe para esses dias: toda a sessão concentrada na região que está incomodando, sem passar pelo corpo todo.",
      "É a escolha mais comum de quem trabalha na região e consegue uma janela no meio do expediente.",
    ],
    forWho: [
      "Quem tem pouco tempo e um ponto específico incomodando",
      "Quem sente o pescoço e os ombros travados por telas e celular",
      "Quem quer complementar o cuidado entre sessões maiores",
    ],
    feels: "Objetiva e direta, sem deixar de ser cuidadosa.",
    cover: {
      src: "/services/massagem-localizada/01.jpg",
      width: 1600,
      height: 1947,
      alt: "Massagem localizada aplicada na região das costas no Serenari Spa",
    },
    gallery: [
      { src: "/services/massagem-localizada/02.jpg", width: 1600, height: 2066 },
      { src: "/services/massagem-localizada/03.jpg", width: 1600, height: 1911 },
      { src: "/services/massagem-localizada/04.jpg", width: 1600, height: 1840 },
      { src: "/services/massagem-localizada/05.jpg", width: 1600, height: 1917 },
      { src: "/services/massagem-localizada/06.jpg", width: 1600, height: 2021 },
    ],
  },
  {
    slug: "massagem-desportiva",
    title: "Massagem Desportiva",
    category: "Massagens",
    tagline: "Antes, depois e entre treinos",
    summary:
      "Manobras vigorosas voltadas para quem treina e quer cuidar da recuperação muscular com regularidade.",
    intro: [
      "Pensada para corpos que se exigem. As manobras são mais rápidas e vigorosas, com foco nos grupos musculares mais acionados pelo seu esporte.",
      "Funciona tanto na preparação quanto na recuperação — conte para a gente em que momento do seu ciclo de treinos você está e a sessão se ajusta a isso.",
    ],
    forWho: [
      "Quem treina com frequência e sente a musculatura sobrecarregada",
      "Quem está em preparação para uma prova ou competição",
      "Quem quer manter uma rotina de recuperação muscular",
    ],
    feels: "Ritmo mais acelerado, com a musculatura respondendo na hora.",
    cover: {
      src: "/services/massagem-desportiva/01.jpg",
      width: 1600,
      height: 2133,
      alt: "Massagem desportiva sendo aplicada na perna de um cliente no Serenari Spa",
    },
    gallery: [
      { src: "/services/massagem-desportiva/02.jpg", width: 1600, height: 1827 },
      { src: "/services/massagem-desportiva/03.jpg", width: 1600, height: 1850 },
    ],
  },
  {
    slug: "liberacao-miofascial",
    title: "Liberação Miofascial",
    category: "Terapias integrativas",
    tagline: "A camada que envolve tudo",
    summary:
      "Pressão sustentada sobre a fáscia — o tecido que envolve os músculos — para devolver amplitude ao movimento.",
    intro: [
      "A fáscia é a membrana que envolve músculos e órgãos. Quando ela perde deslizamento, a sensação é de um corpo mais curto, mais preso, mesmo sem dor evidente.",
      "A sessão trabalha com pressão sustentada e movimentos lentos, esperando o tecido responder no próprio tempo. Exige paciência — e é justamente por isso que funciona.",
    ],
    forWho: [
      "Quem sente o corpo encurtado e com pouca amplitude",
      "Quem já fez massagem convencional e sente que a tensão sempre volta",
      "Quem tem uma rotina muito estática ou muito repetitiva",
    ],
    feels: "Uma pressão paciente que vai cedendo aos poucos.",
    cover: {
      src: "/services/liberacao-miofascial/01.jpg",
      width: 1600,
      height: 2046,
      alt: "Técnica de liberação miofascial aplicada nas costas de uma cliente no Serenari Spa",
    },
    gallery: [
      { src: "/services/liberacao-miofascial/02.jpg", width: 1600, height: 2512 },
      { src: "/services/liberacao-miofascial/03.jpg", width: 1600, height: 2497 },
      { src: "/services/liberacao-miofascial/04.jpg", width: 1600, height: 2624 },
      { src: "/services/liberacao-miofascial/05.jpg", width: 1600, height: 1631 },
      { src: "/services/liberacao-miofascial/06.jpg", width: 1600, height: 1670 },
      { src: "/services/liberacao-miofascial/07.jpg", width: 1600, height: 2133 },
    ],
  },
  {
    slug: "ventosaterapia",
    title: "Ventosaterapia",
    category: "Terapias integrativas",
    tagline: "Técnica antiga, sensação nova",
    summary:
      "Ventosas criam sucção sobre a pele e trabalham a musculatura em um movimento oposto ao da massagem.",
    intro: [
      "Em vez de comprimir, a ventosa puxa. A sucção levanta a pele e os tecidos logo abaixo dela, criando um estímulo diferente de tudo que a massagem convencional faz.",
      "As ventosas podem ficar paradas em pontos específicos ou deslizar com óleo pelas costas. É comum que fiquem marcas circulares por alguns dias — parte esperada da técnica, e sempre explicada antes de começar.",
    ],
    forWho: [
      "Quem tem curiosidade por técnicas orientais",
      "Quem sente as costas constantemente pesadas",
      "Quem já experimentou massagem e quer um estímulo diferente",
    ],
    feels: "Uma tração morna e firme, estranha nos primeiros segundos e agradável depois.",
    cover: {
      src: "/services/ventosa-terapia/01.jpg",
      width: 1600,
      height: 2133,
      alt: "Ventosas aplicadas nas costas de um cliente durante sessão de ventosaterapia no Serenari Spa",
    },
    gallery: [
      { src: "/services/ventosa-terapia/02.jpg", width: 1600, height: 2133 },
      { src: "/services/ventosa-terapia/03.jpg", width: 1600, height: 2133 },
      { src: "/services/ventosa-terapia/04.jpg", width: 1600, height: 2133 },
      { src: "/services/ventosa-terapia/05.jpg", width: 1600, height: 2133 },
      { src: "/services/ventosa-terapia/06.jpg", width: 1600, height: 2133 },
      { src: "/services/ventosa-terapia/07.jpg", width: 1600, height: 2133 },
      { src: "/services/ventosa-terapia/08.jpg", width: 1600, height: 2133 },
    ],
  },
  {
    slug: "shiatsu",
    title: "Shiatsu",
    category: "Terapias integrativas",
    tagline: "Pressão, pausa, respiração",
    summary:
      "Pressões sustentadas com os dedos ao longo de pontos e linhas do corpo, na tradição japonesa.",
    intro: [
      "O shiatsu não desliza: ele pressiona e espera. Os dedos e as palmas aplicam pressão perpendicular em pontos específicos, sincronizada com a sua respiração.",
      "É uma sessão de ritmo muito particular, com pausas que fazem parte da técnica. Quem gosta costuma não querer outra coisa.",
    ],
    forWho: [
      "Quem prefere pressão a deslizamento",
      "Quem busca uma sessão com foco em respiração e presença",
      "Quem se interessa por terapias de tradição oriental",
    ],
    feels: "Pressões que chegam fundo e recuam no tempo da respiração.",
    cover: {
      src: "/services/shiatsu/01.jpg",
      width: 1600,
      height: 2133,
      alt: "Sessão de shiatsu com pressão dos dedos nas costas de um cliente no Serenari Spa",
    },
    gallery: [
      { src: "/services/shiatsu/02.jpg", width: 1600, height: 2133 },
      { src: "/services/shiatsu/03.jpg", width: 1600, height: 1840 },
      { src: "/services/shiatsu/04.jpg", width: 1600, height: 1667 },
      { src: "/services/shiatsu/05.jpg", width: 1600, height: 1794 },
      { src: "/services/shiatsu/06.jpg", width: 1600, height: 1792 },
      { src: "/services/shiatsu/07.jpg", width: 1600, height: 1828 },
    ],
  },
  {
    slug: "reflexologia-podal",
    title: "Reflexologia Podal",
    category: "Terapias integrativas",
    tagline: "Começa pelos pés",
    summary:
      "Estímulo de pontos específicos dos pés, em uma das técnicas mais antigas de relaxamento profundo.",
    intro: [
      "Toda a sessão acontece nos pés. A reflexologia trabalha pontos e regiões da planta, do peito do pé e dos dedos com pressões precisas, seguindo mapas usados há séculos.",
      "Quem experimenta costuma se surpreender: é uma das sessões que mais relaxam o corpo inteiro, sem que ele precise ser tocado.",
    ],
    forWho: [
      "Quem passa o dia em pé ou caminhando muito",
      "Quem não se sente à vontade com massagem no corpo todo",
      "Quem tem dificuldade para desligar a cabeça à noite",
    ],
    feels: "Pressões precisas nos pés e um relaxamento que sobe sozinho.",
    cover: {
      src: "/services/reflexologia-podal/01.jpg",
      width: 1215,
      height: 1295,
      alt: "Sessão de reflexologia podal com estímulo dos pontos do pé no Serenari Spa",
    },
    gallery: [{ src: "/services/reflexologia-podal/02.jpg", width: 1600, height: 1888 }],
  },
  {
    slug: "esfoliacao-corporal",
    title: "Esfoliação Corporal",
    category: "Corpo",
    tagline: "Pele renovada ao toque",
    summary:
      "Renovação da superfície da pele, deixando o corpo macio e preparado para receber hidratação.",
    intro: [
      "A esfoliação remove as células mortas da superfície da pele com movimentos circulares e produto de textura granulada. É um ritual curto e muito sensorial.",
      "Costuma ser combinada com uma massagem na sequência: a pele recém-renovada recebe o óleo de uma forma completamente diferente.",
    ],
    forWho: [
      "Quem sente a pele áspera, especialmente nas pernas e braços",
      "Quem quer preparar o corpo antes de uma ocasião especial",
      "Quem gosta de combinar cuidado com a pele e relaxamento",
    ],
    feels: "Textura, calor e uma pele visivelmente mais macia ao final.",
    cover: {
      src: "/esfoliacao-corporal.png",
      width: 1024,
      height: 1024,
      alt: "Ilustração de esfoliação corporal com sais e texturas naturais",
    },
    gallery: [],
  },
  {
    slug: "drenagem-linfatica-facial",
    title: "Drenagem Linfática Facial",
    category: "Rosto e pele",
    tagline: "Um rosto mais descansado",
    summary:
      "Toque delicado no rosto e pescoço, com foco na sensação de leveza e no aspecto descansado da pele.",
    intro: [
      "Mesma lógica da drenagem corporal, em escala miniatura e com toque ainda mais leve: manobras suaves no rosto, mandíbula, pescoço e região dos olhos.",
      "É uma das sessões mais silenciosas da casa. Muita gente marca no fim do dia, justamente para sair daqui direto para casa.",
    ],
    forWho: [
      "Quem acorda com o rosto inchado com frequência",
      "Quem aperta a mandíbula em momentos de tensão",
      "Quem quer um cuidado facial suave e sem agulhas",
    ],
    feels: "Um toque quase imperceptível — e um rosto mais leve no espelho.",
    cover: {
      src: "/services/drenagem-facial/01.jpg",
      width: 1600,
      height: 1612,
      alt: "Drenagem linfática facial aplicada no rosto de uma cliente no Serenari Spa",
    },
    gallery: [
      { src: "/services/drenagem-facial/02.jpg", width: 1600, height: 2133 },
      { src: "/services/drenagem-facial/03.jpg", width: 1600, height: 1934 },
      { src: "/services/drenagem-facial/04.jpg", width: 1600, height: 1880 },
    ],
  },
  {
    slug: "revitalizacao-facial",
    title: "Revitalização Facial",
    category: "Rosto e pele",
    tagline: "Nutrição e brilho",
    summary:
      "Ritual de hidratação profunda para devolver viço e conforto à pele do rosto.",
    intro: [
      "Um protocolo de nutrição e hidratação, aplicado em camadas, com massagem facial entre as etapas. A pele recebe o produto enquanto a musculatura do rosto relaxa.",
      "O resultado mais imediato é de conforto: pele menos repuxada, com aspecto mais viçoso e uniforme.",
    ],
    forWho: [
      "Quem sente a pele do rosto ressecada ou sem viço",
      "Quem passa muito tempo em ambientes com ar-condicionado",
      "Quem quer um cuidado facial relaxante, não invasivo",
    ],
    feels: "Camadas mornas, aroma suave e massagem facial lenta.",
    cover: {
      src: "/services/revitalizacao-facial/03.jpg",
      width: 1600,
      height: 1934,
      alt: "Ritual de revitalização facial aplicado em cliente no Serenari Spa",
    },
    gallery: [
      { src: "/services/revitalizacao-facial/01.jpg", width: 1600, height: 1612 },
      { src: "/services/revitalizacao-facial/02.jpg", width: 1600, height: 2133 },
      { src: "/services/revitalizacao-facial/04.jpg", width: 1600, height: 1880 },
    ],
  },
  {
    slug: "limpeza-de-pele-natural",
    title: "Limpeza de Pele Natural",
    category: "Rosto e pele",
    tagline: "Limpar sem agredir",
    summary:
      "Higienização profunda com produtos de base natural, respeitando a sensibilidade da pele.",
    intro: [
      "Uma limpeza completa feita em etapas calmas: higienização, amolecimento, extração cuidadosa e finalização com ativos de base natural.",
      "O ritmo é propositalmente sem pressa. A proposta é limpar a pele sem deixá-la irritada ao final.",
    ],
    forWho: [
      "Quem tem a pele congestionada e pouco tempo de cuidado em casa",
      "Quem prefere produtos de base natural",
      "Quem quer retomar uma rotina de cuidados com o rosto",
    ],
    feels: "Vapor morno, aroma vegetal e um rosto limpo sem ardência.",
    cover: {
      src: "/limpeza-de-pele-natural.png",
      width: 777,
      height: 707,
      alt: "Ilustração de limpeza de pele natural com ativos vegetais",
    },
    gallery: [],
  },
];

export const featuredServices = services.filter((service) => service.featured);

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

/** Ordered category list containing only categories that actually have services. */
export const activeCategories = CATEGORIES.filter((category) =>
  services.some((service) => service.category === category)
);
