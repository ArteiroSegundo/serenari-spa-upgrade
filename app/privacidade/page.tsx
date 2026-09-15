import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Leia a Política de Privacidade do Serenari Spa. Entenda como coletamos, usamos e protegemos seus dados pessoais.",
  alternates: { canonical: "/privacidade" },
  openGraph: {
    title: "Política de Privacidade | Serenari Spa",
    description: "Entenda como coletamos, usamos e protegemos seus dados pessoais.",
    type: "article",
  },
  twitter: {
    title: "Política de Privacidade | Serenari Spa",
    description: "Entenda como coletamos, usamos e protegemos seus dados pessoais.",
  },
};

export default function PrivacidadePage() {
  return (
    <LegalPage title="Política de Privacidade" updatedAt="15 de setembro de 2026">

      <h2>1. Introdução</h2>
      <p>
        A presente Política de Privacidade descreve como o Serenari Spa (&quot;nós&quot;, &quot;nosso&quot;,
        &quot;nossa&quot;) coleta, usa, armazena e protege as informações pessoais dos usuários (&quot;você&quot;,
        &quot;seu&quot;) que acessam nosso website e utilizam nossos serviços de massoterapia e terapias corporais. A
        privacidade e a segurança dos seus dados são de extrema importância para nós. Ao utilizar nosso site e
        serviços, você concorda com as práticas descritas nesta política.
      </p>
      <p>
        O Serenari Spa é operado pela <strong>SERENARI SPA LTDA</strong>, com CNPJ 59.668.646/0001-94, e-mail de
        contato: <a href="mailto:atendimento@serenarispa.com.br">atendimento@serenarispa.com.br</a>.
      </p>

      <h2>2. Coleta de Dados Pessoais</h2>
      <p>
        Coletamos diferentes tipos de informações para diversas finalidades, a fim de fornecer e melhorar nossos
        serviços a você:
      </p>
      <h3>2.1. Dados Fornecidos por Você</h3>
      <ul>
        <li>
          <strong>Informações de Contato:</strong> Nome completo, número de telefone (especialmente WhatsApp) e
          endereço de e-mail, quando você entra em contato conosco para agendamentos, dúvidas ou informações.
        </li>
        <li>
          <strong>Informações de Agendamento:</strong> Detalhes sobre o serviço desejado, datas e horários
          preferenciais, e quaisquer informações relevantes para a personalização da sua sessão.
        </li>
        <li>
          <strong>Comunicações:</strong> Registros de conversas por telefone, WhatsApp, e-mail ou outros meios de
          comunicação.
        </li>
      </ul>

      <h3>2.2. Dados Coletados Automaticamente</h3>
      <p>
        Este site <strong>não utiliza ferramentas de análise, métricas ou publicidade</strong> e não monta perfis de
        navegação. A única coleta automática é a que qualquer servidor web registra para manter o site no ar:
      </p>
      <ul>
        <li>
          <strong>Registros de Servidor:</strong> Nosso provedor de hospedagem mantém logs técnicos com endereço IP,
          data e hora do acesso, página solicitada e identificação do navegador. Esses registros são usados apenas
          para segurança, diagnóstico de falhas e prevenção de abuso, e são retidos por prazo limitado pelo
          provedor.
        </li>
      </ul>

      <h2>3. Cookies</h2>
      <p>
        <strong>Não utilizamos cookies próprios neste site.</strong> Não há cookies de análise, de publicidade ou de
        preferência, e por isso não exibimos banner de consentimento — não existe rastreamento para você aceitar ou
        recusar.
      </p>
      <h3>3.1. Conteúdo de Terceiros</h3>
      <p>
        O mapa da página inicial é fornecido pelo Google Maps e <strong>só é carregado se você clicar em
        &quot;Carregar o mapa&quot;</strong>. Até esse clique, nenhuma requisição é feita ao Google. A partir dele, o
        Google pode definir cookies próprios e tratar seus dados conforme as políticas dele. As fontes tipográficas
        do site são servidas pelo nosso próprio domínio, sem requisições a terceiros.
      </p>
      <p>
        Links para WhatsApp, Instagram, Facebook e Google Maps levam você para fora deste site. A partir do momento
        em que você sai daqui, valem as políticas de privacidade dessas plataformas (veja a seção 9).
      </p>

      <h2>4. Uso dos Seus Dados Pessoais</h2>
      <p>Utilizamos os dados coletados para diversas finalidades:</p>
      <ul>
        <li>Para fornecer e manter nossos serviços, incluindo o processamento de agendamentos.</li>
        <li>Para gerenciar seu agendamento e contato com você.</li>
        <li>Para responder às suas perguntas e fornecer suporte ao cliente.</li>
        <li>
          Para enviar comunicações relevantes sobre nossos serviços, promoções ou informações importantes (com seu
          consentimento).
        </li>
        <li>Para detectar, prevenir e resolver problemas técnicos ou de segurança.</li>
        <li>Para cumprir obrigações legais e regulatórias.</li>
      </ul>

      <h2>5. Compartilhamento de Dados Pessoais</h2>
      <p>
        O Serenari Spa não compartilha, vende, aluga ou divulga suas informações pessoais a terceiros, exceto nas
        seguintes situações:
      </p>
      <ul>
        <li>
          <strong>Com Prestadores de Serviços:</strong> Podemos empregar empresas terceirizadas para viabilizar
          nossos serviços — hospedagem do site e ferramentas de comunicação, como o WhatsApp. Estes terceiros terão
          acesso aos seus dados pessoais apenas para executar essas tarefas em nosso nome e são obrigados a não
          divulgá-los ou usá-los para qualquer outra finalidade.
        </li>
        <li>
          <strong>Por Exigência Legal:</strong> Podemos divulgar seus dados pessoais se exigido por lei ou em
          resposta a solicitações válidas de autoridades públicas (ex: um tribunal ou agência governamental).
        </li>
        <li>
          <strong>Com Seu Consentimento:</strong> Poderemos compartilhar suas informações com terceiros para
          qualquer outra finalidade com seu consentimento expresso.
        </li>
      </ul>

      <h2>6. Segurança dos Dados</h2>
      <p>
        A segurança dos seus dados é importante para nós. Empregamos medidas de segurança administrativas, técnicas
        e físicas para proteger suas informações pessoais contra acesso não autorizado, divulgação, alteração ou
        destruição. No entanto, lembre-se que nenhum método de transmissão pela internet ou método de armazenamento
        eletrônico é 100% seguro e não podemos garantir a segurança absoluta dos dados.
      </p>

      <h2>7. Retenção de Dados</h2>
      <p>
        Reteremos seus dados pessoais apenas pelo tempo necessário para as finalidades estabelecidas nesta Política
        de Privacidade. Retemos e utilizamos seus dados pessoais na medida necessária para cumprir nossas obrigações
        legais, resolver disputas e fazer cumprir nossos acordos e políticas.
      </p>

      <h2>8. Seus Direitos de Privacidade (LGPD)</h2>
      <p>
        De acordo com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), você possui os seguintes direitos
        relativos aos seus dados pessoais:
      </p>
      <ul>
        <li>
          <strong>Acesso:</strong> Obter confirmação de que seus dados estão sendo tratados e acessá-los.
        </li>
        <li>
          <strong>Retificação:</strong> Corrigir dados incompletos, inexatos ou desatualizados.
        </li>
        <li>
          <strong>Anonimização, Bloqueio ou Eliminação:</strong> Solicitar a anonimização, bloqueio ou eliminação de
          dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.
        </li>
        <li>
          <strong>Portabilidade:</strong> Solicitar a portabilidade dos dados a outro fornecedor de serviço ou
          produto, mediante requisição expressa.
        </li>
        <li>
          <strong>Eliminação:</strong> Excluir dados pessoais tratados com o seu consentimento, exceto nas hipóteses
          previstas em lei.
        </li>
        <li>
          <strong>Informação:</strong> Ser informado sobre as entidades públicas e privadas com as quais o Serenari
          Spa realizou uso compartilhado de dados.
        </li>
        <li>
          <strong>Revogação do Consentimento:</strong> Revogar o consentimento a qualquer momento, sem comprometer a
          legalidade do tratamento realizado antes da revogação.
        </li>
      </ul>
      <p>
        Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail{" "}
        <a href="mailto:atendimento@serenarispa.com.br">atendimento@serenarispa.com.br</a>.
      </p>

      <h2>9. Links para Outros Sites</h2>
      <p>
        Nosso site pode conter links para outros sites que não são operados por nós. Se você clicar em um link de
        terceiros, será direcionado para o site desse terceiro. Aconselhamos vivamente que reveja a Política de
        Privacidade de todos os sites que visitar. Não temos controle e não assumimos responsabilidade pelo
        conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.
      </p>

      <h2>10. Alterações a Esta Política de Privacidade</h2>
      <p>
        Podemos atualizar nossa Política de Privacidade periodicamente. Iremos notificá-lo de quaisquer alterações,
        publicando a nova Política de Privacidade nesta página. Aconselhamos que revise esta Política de Privacidade
        periodicamente para quaisquer alterações. As alterações a esta Política de Privacidade são eficazes quando
        são publicadas nesta página.
      </p>

      <h2>11. Contato</h2>
      <p>Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco:</p>
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
