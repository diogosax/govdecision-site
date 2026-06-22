import type { PartnerCapitalChrome } from "./types";

/**
 * PT-BR — espelha a estrutura de en-US.ts exatamente (SITE-015, refresh visual).
 *
 * Revisão de segurança de conteúdo: sem alocação garantida de parceiros, sem
 * financiamento garantido, sem empréstimo direto, sem aprovação de crédito, sem
 * acesso a mercado ou adjudicações garantidos. A linguagem sobre parceiros e
 * funding permanece condicional ("rotas", "quando aplicável", "pode ser
 * relevante", "deve ser validado").
 */
export const ptBR = {
  promo: {
    eyebrow: "Rotas e capital",
    title: "Encontrar a oportunidade é só metade da decisão.",
    lead: "Vender para o governo costuma exigir a rota de parceiro certa e um caso financeiro convincente. Veja como a GovDecision e a Sax Global ajudam fornecedores a preparar os dois.",
    partner: {
      title: "Partner Network",
      lead: "Direto, parceiro local, distribuidor ou subcontratado — entenda a rota antes de avançar.",
      cta: "Explorar rotas de parceiros",
    },
    capital: {
      title: "GovDecision Capital",
      lead: "Capital de giro, garantias e prazos de pagamento — estruture o caso financeiro, não um empréstimo.",
      cta: "Explorar prontidão de capital",
    },
  },

  partners: {
    meta: {
      title: "GovDecision Partner Network — Rotas de Acesso a Mercado",
      description:
        "Veja como a GovDecision e a Sax Global ajudam fornecedores a avaliar rotas diretas, de distribuidor, representante, subcontratação e parceiros para negócios com o governo.",
    },
    breadcrumbName: "Partner Network",
    hero: {
      eyebrow: "Rede de parceiros",
      title:
        "Negócios com o governo costumam exigir a rota certa, não só a oportunidade certa.",
      subtitle:
        "Saiba quando ir direto, formar parceria local, usar um distribuidor, subcontratar ou se preparar primeiro. A Sax Global apoia o planejamento da rota de parceiro onde a execução internacional importa.",
      primaryCta: "Falar com a Sax Global",
      secondaryCta: "Explorar Market Access",
    },
    heroMockup: {
      windowTitle: "govdecision · Roteamento de Parceiros",
      routeLabel: "Sinal de rota",
      routes: ["Direto", "Rota de parceiro", "Preparar primeiro"],
      recommended: "Recomendado",
      dependencyLabel: "Dependência de parceiro",
      dependencyValue: "Média",
      illustrative: "Ilustrativo",
    },
    why: {
      eyebrow: "Por que a estratégia de parceiros importa",
      title: "O software acha a oportunidade. A rota é que ganha.",
      lead: "Uma oportunidade qualificada ainda precisa de um caminho até o comprador — direto, por um parceiro ou ainda não.",
      points: [
        {
          title: "Mais do que software",
          description:
            "Presença, representação ou um canal costumam ser necessários antes de entregar.",
        },
        {
          title: "Cruzar fronteiras gera dependência",
          description:
            "Outro país pode exigir antes um representante, importador ou distribuidor.",
        },
        {
          title: "A rota errada custa caro",
          description:
            "Ir direto quando precisava de um parceiro aparece tarde — e caro.",
        },
      ],
    },
    routes: {
      eyebrow: "Opções de rota",
      title: "Sete formas de entrar em um mercado governamental.",
      lead: "A maioria dos negócios se resume a poucas rotas. O trabalho é escolher — e validar — a certa.",
      options: [
        { title: "Venda direta", description: "Venda direto ao comprador." },
        { title: "Representante local", description: "Presença e acompanhamento no local." },
        { title: "Distribuidor / revenda", description: "Chegue ao comprador por um canal existente." },
        { title: "Importador / trading", description: "Mova mercadorias por um parceiro de importação." },
        { title: "Subcontratado", description: "Forneça sob um contratante principal." },
        { title: "Consórcio", description: "Una forças para atender porte ou conteúdo local." },
        { title: "Integrador técnico", description: "Entregue por um integrador de sistemas." },
      ],
    },
    matrix: {
      eyebrow: "Quando um parceiro importa",
      title: "Leia os sinais antes de escolher.",
      lead: "Alguns contextos puxam para um parceiro — ou para validar primeiro. Uma leitura rápida, não um veredito.",
      columns: {
        direct: "Rota direta",
        partner: "Rota de parceiro",
        validate: "Validar primeiro",
      },
      cellLabels: {
        strong: "Mais forte",
        harder: "Mais difícil",
        check: "Validar",
        none: "—",
      },
      rows: [
        "Comprador estrangeiro",
        "Exigência de entrega local",
        "Atrito de idioma / documentação",
        "Complexidade de cadastro em portal",
        "Execução pós-adjudicação",
        "Suporte de garantia / serviço",
      ],
    },
    categories: {
      eyebrow: "Categorias de parceiros",
      title: "O ecossistema que um negócio pode exigir.",
      lead: "Conforme o mercado e o contrato, uma rota pode envolver várias dessas categorias potenciais de parceiros.",
      items: [
        "Representantes locais",
        "Distribuidores / revendas",
        "Importadores / tradings",
        "Integradores técnicos",
        "Especialistas em compliance / regulatório",
        "Assessoria jurídica / de licitações",
        "Tradutores / suporte de localização",
        "Parceiros de logística / fulfillment",
        "Bancos / fintechs / antecipação de recebíveis",
        "Parceiros de seguro / surety / performance bond",
        "Parceiros de trade finance / FX",
      ],
      note: "Categorias potenciais de parceiros a avaliar — não uma lista de parceiros contratados. O matching de parceiros é oferecido quando aplicável, e qualquer rota deve ser validada.",
    },
    timeline: {
      eyebrow: "Raciocínio de rota de parceiro",
      title: "Como uma rota é decidida.",
      lead: "A GovDecision e a Sax Global estruturam a questão da rota de parceiro passo a passo.",
      steps: [
        { title: "Sinal de oportunidade", description: "Surge uma oportunidade qualificada." },
        { title: "Hipótese de rota", description: "Direto, parceiro ou preparar primeiro?" },
        { title: "Checagem de prontidão", description: "Lacunas de cadastro, presença e entrega." },
        { title: "Categoria de parceiro", description: "Qual tipo de parceiro a rota exige." },
        { title: "Validação", description: "Confirme que a rota é real." },
        { title: "Decisão de avanço", description: "Avançar, parceiro primeiro ou esperar." },
      ],
    },
    govDecision: {
      eyebrow: "Onde a GovDecision ajuda",
      title: "A escolha da rota parte dos fatos.",
      lead: "A plataforma transforma uma oportunidade em uma questão de rota estruturada.",
      points: [
        "O Supplier Passport organiza capacidades, certificações e mercados habilitados.",
        "Opportunity Qualification e a extração de requisitos com IA indicam onde um parceiro é provavelmente necessário.",
        "A detecção de bloqueios revela lacunas de cadastro, elegibilidade e presença.",
        "Os Country Packs explicam expectativas de rota e parceiro específicas de cada país.",
        "O memo Go/No-Go e o Deal Room registram a rota de parceiro recomendada.",
        "As notas de rota de parceiro seguem para o Post-Award Enablement.",
      ],
    },
    sax: {
      eyebrow: "Onde a Sax Global ajuda",
      title: "Planejamento de rota internacional, onde importa.",
      lead: "Quando uma oportunidade cruza fronteiras, a Sax Global soma contexto de mercado à plataforma.",
      points: [
        "Planejamento de rota de parceiro para execução internacional.",
        "Contexto sobre representação local, distribuição e estruturas de importação.",
        "Enquadramento de market access que liga a oportunidade a uma rota real.",
        "Matching de parceiros quando aplicável — categorias a avaliar, não alocações garantidas.",
        "Uma segunda leitura sobre avançar agora, parceiro primeiro ou se preparar.",
      ],
    },
    mockup: {
      eyebrow: "Exemplo de saída",
      title: "Como é uma leitura de rota de parceiro.",
      lead: "Uma visão curta e estruturada da questão da rota para uma única oportunidade.",
      windowTitle: "govdecision · Briefing de Rota de Parceiro",
      illustrative: "Ilustrativo",
      briefTitle: "Briefing de Rota de Parceiro",
      fields: [
        { label: "Caminho", value: "Brasil → Estados Unidos" },
        { label: "Tipo de oportunidade", value: "Suprimentos técnicos" },
        { label: "Rota recomendada", value: "Distribuidor + checklist de prontidão" },
        { label: "Dependência de parceiro", value: "Média" },
        { label: "Risco de execução", value: "Médio" },
      ],
      validationLabel: "Validação necessária",
      validationItems: [
        "Caminho de cadastro local",
        "Capacidade de entrega / serviço",
        "Suporte de garantia",
        "Idioma da documentação",
      ],
      decisionLabel: "Decisão",
      decisionValue: "Validar a rota antes de avançar",
      caption: "Ilustrativo — não é um caso real de cliente.",
    },
    disclaimer:
      "A GovDecision e a Sax Global podem apoiar o planejamento de rota de parceiro e o contexto de market access quando aplicável. Elas não garantem alocação de parceiros, elegibilidade, acesso a mercado, adjudicações, financiamento ou resultados de contrato.",
    finalCta: {
      eyebrow: "Rotas de parceiros",
      title: "Decida a rota antes de correr atrás da oportunidade.",
      subtitle:
        "Fale com a Sax Global sobre como uma rota de parceiro pode funcionar no seu mercado — direto, parceiro local, distribuidor ou preparar primeiro.",
      primary: "Falar com a Sax Global",
      secondary: "Explorar Market Access",
    },
  },

  capital: {
    meta: {
      title: "GovDecision Capital — Prontidão Financeira para Negócios com o Governo",
      description:
        "A GovDecision Capital ajuda fornecedores a estruturar prontidão financeira, necessidades de capital de giro, garantias e rotas de funding com parceiros para oportunidades no setor público.",
    },
    breadcrumbName: "GovDecision Capital",
    hero: {
      eyebrow: "GovDecision Capital",
      title: "Ganhar é só o começo. A execução precisa de prontidão de capital.",
      subtitle:
        "Estime necessidades de capital de giro, entenda prazos de pagamento, organize a prontidão financeira e prepare um caso mais forte para rotas de funding com parceiros quando aplicável.",
      primaryCta: "Discutir prontidão de capital",
      secondaryCta: "Explorar a plataforma",
    },
    heroMockup: {
      windowTitle: "govdecision · Prontidão Financeira",
      scoreLabel: "Prontidão financeira",
      scoreValue: "Média",
      stageLabel: "Etapa",
      stageValue: "Pré-adjudicação",
      timingLabel: "Prazo de pagamento",
      timingValue: "Risco alto",
      illustrative: "Ilustrativo",
    },
    why: {
      eyebrow: "Por que a prontidão de capital importa",
      title: "Uma adjudicação é um evento de fluxo de caixa.",
      lead: "Contratos públicos costumam pedir que você entregue, garanta e espere — antes de ser pago.",
      points: [
        {
          title: "Prazo, não viabilidade",
          description:
            "Custos e garantias vencem muito antes de o recebível chegar.",
        },
        {
          title: "O financeiro faz parte do negócio",
          description: "Uma visão clara torna o Go/No-Go honesto desde o início.",
        },
        {
          title: "A prontidão viaja bem",
          description: "Operar fora do país soma FX, importação e prazos fiscais.",
        },
      ],
    },
    cashflow: {
      eyebrow: "Linha do tempo de fluxo de caixa",
      title: "Onde um contrato público pressiona o caixa.",
      lead: "Mapeie a lacuna entre quando os custos chegam e quando o pagamento entra.",
      steps: [
        "Análise da oportunidade",
        "Proposta / licitação",
        "Adjudicação",
        "Compra / produção",
        "Entrega",
        "Faturamento",
        "Pagamento",
      ],
      pressureLabel: "Onde a pressão de capital pode surgir",
      pressures: [
        "Estoque",
        "Logística",
        "Garantias",
        "Mão de obra",
        "FX",
        "Atraso no pagamento",
      ],
    },
    gaps: {
      eyebrow: "Lacunas de capital",
      title: "As lacunas que aparecem de novo e de novo.",
      lead: "Nomeá-las cedo transforma uma preocupação em uma questão que dá para planejar.",
      items: [
        "Capital de giro",
        "Estoque / produção",
        "Importação e logística",
        "Garantia de proposta / garantia",
        "Prazo de pagamento",
        "Exposição cambial",
        "Atraso no recebimento",
      ],
      note: "Quais lacunas se aplicam depende da oportunidade e deve ser validado caso a caso.",
    },
    fundingRoute: {
      eyebrow: "Mapa de rotas de funding",
      title: "Da prontidão a um caso financeiro.",
      lead: "A GovDecision Capital ajuda a estruturar o caso financeiro e a conectar situações qualificadas a rotas de parceiros quando aplicável. Não é empréstimo direto.",
      flow: [
        {
          title: "Score de prontidão financeira",
          description: "Derivado de Opportunity Qualification e detecção de bloqueios.",
        },
        {
          title: "Caso financeiro",
          description: "Estruturado no Readiness Workspace e no Deal Room.",
        },
        {
          title: "Rota de parceiro",
          description: "Quais rotas de funding com parceiros podem ser relevantes.",
        },
        {
          title: "Análise",
          description: "Valide premissas antes de qualquer compromisso.",
        },
        {
          title: "Suporte à execução",
          description: "Levado ao Post-Award Enablement.",
        },
      ],
      routesLabel: "Possíveis rotas de parceiros",
      routes: [
        "Capital de giro",
        "Antecipação de recebíveis / factoring",
        "Financiamento à exportação",
        "Trade finance",
        "Surety / performance bond",
        "FX / pagamentos internacionais",
      ],
      note: "Rotas potenciais de parceiros a avaliar. Quais podem ser relevantes depende da oportunidade e deve ser validado — a GovDecision Capital não é um credor e não fornece financiamento.",
    },
    beforeAfter: {
      eyebrow: "Antes e depois da adjudicação",
      title: "As perguntas que a prontidão de capital responde.",
      lead: "Útil duas vezes: uma decisão clara antes da adjudicação e uma execução limpa depois dela.",
      beforeLabel: "Antes da adjudicação",
      beforePoints: [
        "Podemos buscar isto?",
        "Que garantias podem ser exigidas?",
        "Que lacuna de caixa pode surgir?",
        "Que rota de parceiro devemos preparar?",
      ],
      afterLabel: "Depois da adjudicação",
      afterPoints: [
        "Conseguimos entregar?",
        "Quando seremos pagos?",
        "O que precisa ser financiado?",
        "Quais documentos um parceiro financeiro exige?",
      ],
    },
    mockup: {
      eyebrow: "Exemplo de saída",
      title: "Como é uma leitura de prontidão financeira.",
      lead: "Uma visão curta e estruturada da questão de capital para uma única oportunidade.",
      windowTitle: "govdecision · Briefing de Prontidão Financeira",
      illustrative: "Ilustrativo",
      briefTitle: "Briefing de Prontidão Financeira",
      fields: [
        { label: "Etapa da oportunidade", value: "Pré-adjudicação" },
        { label: "Lacuna de capital de giro", value: "Média" },
        { label: "Risco de prazo de pagamento", value: "Alto" },
        { label: "Exigência de garantia", value: "Validar" },
        { label: "Exposição cambial", value: "Depende" },
        { label: "Rota de funding", value: "Análise de financiamento com parceiro" },
      ],
      nextStepLabel: "Próximo passo",
      nextStepValue: "Estruturar o caso financeiro",
      caption: "Ilustrativo — não é um caso real de cliente nem uma oferta de financiamento.",
    },
    disclaimer:
      "A GovDecision Capital apoia a prontidão financeira, a estruturação do caso e a preparação de rota de parceiro quando aplicável. Não é empréstimo direto e não garante financiamento, aprovação de crédito, adjudicações ou resultados de contrato.",
    finalCta: {
      eyebrow: "Prontidão de capital",
      title: "Monte o caso financeiro antes de precisar dele.",
      subtitle:
        "Discuta a prontidão de capital com nosso time — capital de giro, garantias, prazos de pagamento e quais rotas de funding com parceiros podem ser relevantes.",
      primary: "Discutir prontidão de capital",
      secondary: "Explorar a plataforma",
    },
  },
} satisfies PartnerCapitalChrome;

export default ptBR;
