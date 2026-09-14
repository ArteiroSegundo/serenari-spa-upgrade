import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Leia os Termos de Uso do Serenari Spa. Informações importantes sobre a utilização de nossos serviços e site.",
  alternates: { canonical: "/termos" },
  openGraph: {
    title: "Termos de Uso | Serenari Spa",
    description: "Informações importantes sobre a utilização de nossos serviços e site.",
    type: "article",
  },
  twitter: {
    title: "Termos de Uso | Serenari Spa",
    description: "Informações importantes sobre a utilização de nossos serviços e site.",
  },
};

export default function TermosPage() {
  return (
    <LegalPage title="Termos de Uso" updatedAt="29 de maio de 2024">

      <h2>1. Introdução</h2>
      <p>
        Bem-vindo ao Serenari Spa. Estes Termos de Uso regem o uso de nosso website e a contratação de nossos
        serviços de massoterapia e terapias corporais. Ao acessar e utilizar este site, você concorda em cumprir e
        estar vinculado a estes termos. Se você não concordar com qualquer parte destes termos, por favor, não
        utilize nosso site ou serviços.
      </p>

      <h2>2. Definições</h2>
      <ul>
        <li>
          <strong>&quot;Serenari Spa&quot;</strong>, <strong>&quot;nós&quot;</strong>, <strong>&quot;nosso&quot;</strong> ou{" "}
          <strong>&quot;nossa&quot;</strong> refere-se a SERENARI SPA LTDA, com CNPJ 59.668.646/0001-94.
        </li>
        <li>
          <strong>&quot;Usuário&quot;</strong>, <strong>&quot;você&quot;</strong> ou <strong>&quot;seu&quot;</strong> refere-se a
          qualquer indivíduo que acessa ou utiliza nosso site e/ou serviços.
        </li>
        <li>
          <strong>&quot;Serviços&quot;</strong> refere-se às massagens e terapias corporais oferecidas pelo Serenari
          Spa.
        </li>
        <li>
          <strong>&quot;Site&quot;</strong> refere-se ao website oficial do Serenari Spa.
        </li>
      </ul>

      <h2>3. Uso do Site</h2>
      <h3>3.1. Acesso e Disponibilidade</h3>
      <p>
        O Serenari Spa se esforça para manter o site disponível 24 horas por dia, 7 dias por semana. No entanto, não
        garantimos que o site estará sempre disponível ou livre de interrupções. O acesso ao site pode ser suspenso
        temporariamente e sem aviso prévio em caso de falha do sistema, manutenção, reparo ou por razões além do
        nosso controle.
      </p>

      <h3>3.2. Propriedade Intelectual</h3>
      <p>
        Todo o conteúdo presente no site, incluindo textos, gráficos, logotipos, ícones, imagens, áudios, vídeos,
        compilações de dados e software, é propriedade do Serenari Spa ou de seus fornecedores de conteúdo e é
        protegido pelas leis de direitos autorais brasileiras e internacionais. Você não pode copiar, reproduzir,
        distribuir, publicar, exibir, executar, modificar, criar obras derivadas, transmitir ou explorar qualquer
        parte do conteúdo do site sem a permissão expressa por escrito do Serenari Spa.
      </p>

      <h3>3.3. Comportamento do Usuário</h3>
      <p>Ao usar nosso site, você concorda em não:</p>
      <ul>
        <li>
          Publicar ou transmitir qualquer material ilegal, difamatório, obsceno, ofensivo, discriminatório ou
          ameaçador.
        </li>
        <li>Realizar atividades que violem os direitos de propriedade intelectual de terceiros.</li>
        <li>Tentar obter acesso não autorizado a sistemas de computador ou redes conectadas ao site.</li>
        <li>Interferir ou perturbar o funcionamento normal do site ou de qualquer serviço oferecido.</li>
      </ul>

      <h2>4. Contratação de Serviços</h2>
      <h3>4.1. Agendamento</h3>
      <p>
        Os serviços do Serenari Spa podem ser agendados através dos contatos disponibilizados em nosso site,
        especialmente via WhatsApp. Ao agendar um serviço, você concorda em fornecer informações precisas e
        completas.
      </p>

      <h3>4.2. Pagamento</h3>
      <p>
        Os valores dos serviços serão informados no momento do agendamento. O pagamento deve ser realizado conforme
        as opções e políticas de pagamento estabelecidas pelo Serenari Spa. Reservamo-nos o direito de alterar os
        preços a qualquer momento, mas tais alterações não afetarão agendamentos já confirmados.
      </p>

      <h3>4.3. Cancelamento e Reagendamento</h3>
      <p>
        As políticas de cancelamento e reagendamento de serviços serão informadas no momento do agendamento.
        Geralmente, solicitamos aviso prévio para cancelamentos ou reagendamentos. O não comparecimento sem aviso
        pode resultar na cobrança total ou parcial do valor do serviço.
      </p>

      <h2>5. Isenção de Responsabilidade</h2>
      <p>
        O Serenari Spa não se responsabiliza por quaisquer danos ou perdas decorrentes do uso de nosso site ou
        serviços, incluindo, mas não se limitando a:
      </p>
      <ul>
        <li>Interrupções no acesso ao site.</li>
        <li>Erros ou omissões no conteúdo do site.</li>
        <li>Danos causados por vírus ou outros componentes maliciosos.</li>
        <li>Quaisquer perdas ou danos que não sejam diretamente causados por nossa negligência grave ou dolo.</li>
      </ul>
      <p>
        Nossos serviços são para fins de bem-estar e relaxamento e não substituem o aconselhamento ou tratamento
        médico. Se você tiver alguma condição de saúde preexistente, consulte um profissional de saúde antes de
        utilizar nossos serviços.
      </p>

      <h2>6. Links para Terceiros</h2>
      <p>
        Nosso site pode conter links para sites de terceiros que não são operados ou controlados pelo Serenari Spa.
        Não somos responsáveis pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites de terceiros. A
        inclusão de qualquer link não implica endosso do Serenari Spa ao site vinculado.
      </p>

      <h2>7. Alterações nos Termos de Uso</h2>
      <p>
        O Serenari Spa reserva-se o direito de modificar estes Termos de Uso a qualquer momento, sem aviso prévio.
        Quaisquer alterações entrarão em vigor imediatamente após sua publicação no site. É sua responsabilidade
        revisar periodicamente estes termos para estar ciente de quaisquer modificações. O uso continuado do site
        após a publicação de alterações constitui sua aceitação dos termos modificados.
      </p>

      <h2>8. Lei Aplicável e Foro</h2>
      <p>
        Estes Termos de Uso serão regidos e interpretados de acordo com as leis da República Federativa do Brasil.
        Qualquer disputa decorrente ou relacionada a estes Termos de Uso será submetida ao foro da comarca de Suzano,
        Estado de São Paulo, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
      </p>

      <h2>9. Contato</h2>
      <p>Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco:</p>
      <p>
        <strong>SERENARI SPA LTDA</strong>
        <br />
        CNPJ: 59.668.646/0001-94
        <br />
        Email: <a href="mailto:atendimento@serenarispa.com.br">atendimento@serenarispa.com.br</a>
        <br />
        Telefone/WhatsApp: (11) 5108-1983
      </p>
    </LegalPage>
  );
}
