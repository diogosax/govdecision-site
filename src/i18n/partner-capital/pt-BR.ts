import type { PartnerCapitalChrome } from "./types";

/**
 * PT-BR — espelha a estrutura de en-US.ts exatamente (SITE-015).
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
    title: "Encontrar a oportunidade é apenas metade da decisão.",
    lead: "Buscar negócios com o governo costuma exigir a rota de parceiro certa e um caso financeiro convincente. Veja como a GovDecision e a Sax Global ajudam fornecedores a preparar ambos.",
    partner: {
      title: "Partner Network",
      lead: "Direto, parceiro local, distribuidor ou subcontratar — entenda a rota antes de avançar.",
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
        "Explore como a GovDecision e a Sax Global ajudam fornecedores a avaliar rotas diretas, de distribuidor, de representante, de subcontratação e de parceria para negócios com o governo.",
    },
    breadcrumbName: "Partner Network",
    hero: {
      eyebrow: "Rede de parceiros",
      title:
        "Negócios com o governo costumam exigir a rota certa, não apenas a oportunidade certa.",
      subtitle:
        "A GovDecision ajuda fornecedores a entender quando ir direto, fazer parceria local, usar um distribuidor, subcontratar ou formar consórcio, ou se preparar primeiro. A Sax Global pode apoiar o planejamento da rota de parceiro quando a execução transfronteiriça é relevante.",
      primaryCta: "Falar com a Sax Global",
      secondaryCta: "Explorar Acesso a Mercado",
    },
    why: {
      eyebrow: "Por que a estratégia de parceiros importa",
      title: "O software encontra a oportunidade. A rota a conquista.",
      lead: "Uma oportunidade qualificada ainda precisa de um caminho para chegar ao comprador — diretamente, por meio de um parceiro, ou ainda não. A rota costuma ser o fator decisivo.",
      points: [
        {
          title: "Mais do que software",
          description:
            "Fornecedores costumam precisar de presença, representação ou um canal no local antes de poderem entregar. Saber qual deles — cedo — protege o seu orçamento de prospecção.",
        },
        {
          title: "O transfronteiriço acrescenta dependência",
          description:
            "Vender para outro país pode significar um representante, importador ou distribuidor antes que a entrega seja sequer possível. A dependência de rota é uma variável de planejamento, não um detalhe deixado para depois.",
        },
        {
          title: "A rota errada é cara",
          description:
            "Ir direto quando você precisava de um parceiro — ou fazer parceria quando poderia ter ido direto — aparece tarde e custa o mais caro. A escolha da rota faz parte da decisão Go/No-Go.",
        },
      ],
    },
    routes: {
      eyebrow: "Opções de rota",
      title: "Cinco caminhos para entrar em um mercado governamental.",
      lead: "A maioria das prospecções se resolve em uma de poucas rotas. O trabalho é escolher — e validar — a rota certa antes de se comprometer.",
      options: [
        {
          title: "Ir direto",
          description:
            "Venda diretamente ao comprador quando registro, presença e entrega forem realistas por conta própria.",
        },
        {
          title: "Fazer parceria local",
          description:
            "Nomeie um representante local ou parceiro para sustentar presença, relacionamentos e acompanhamento no local.",
        },
        {
          title: "Usar um distribuidor",
          description:
            "Alcance o comprador por meio de um distribuidor ou revenda que já detém o canal e o estoque.",
        },
        {
          title: "Subcontratar ou formar consórcio",
          description:
            "Junte-se a um prime ou consórcio como subcontratado quando o contrato é grande ou há exigência de conteúdo local.",
        },
        {
          title: "Preparar-se primeiro",
          description:
            "Aguarde, desenvolva prontidão e valide a rota antes de comprometer recursos de prospecção nela.",
        },
      ],
    },
    categories: {
      eyebrow: "Categorias de parceiros",
      title: "O ecossistema de parceiros que uma prospecção pode exigir.",
      lead: "Dependendo do mercado e do contrato, uma rota pode envolver várias destas categorias potenciais de parceiros. A GovDecision e a Sax Global ajudam você a mapear quais são relevantes.",
      items: [
        "Representantes locais",
        "Distribuidores / revendas",
        "Importadores / tradings",
        "Integradores técnicos",
        "Especialistas em compliance / regulatório",
        "Assessoria jurídica / de compras",
        "Tradutores / suporte de localização",
        "Parceiros de logística / fulfillment",
        "Bancos / fintechs / factoring",
        "Parceiros de seguro / seguro-garantia / performance bond",
        "Parceiros de trade finance / FX",
      ],
      note: "Estas são categorias potenciais de parceiros a avaliar — não uma lista de parceiros contratados. O matching de parceiros é oferecido quando aplicável, e qualquer rota deve ser validada para a oportunidade específica.",
    },
    govDecision: {
      eyebrow: "Onde a GovDecision ajuda",
      title: "A escolha da rota parte de fatos, não de suposições.",
      lead: "A plataforma transforma uma oportunidade em uma questão de rota estruturada — para que direto vs. parceiro seja uma decisão que você possa defender.",
      points: [
        "O Supplier Passport organiza suas capacidades, certificações e mercados habilitados para que a decisão de rota parta de fatos.",
        "A Opportunity Qualification e a extração de requisitos assistida por IA revelam onde um parceiro local, representante ou importador provavelmente será exigido.",
        "A detecção de bloqueadores sinaliza as lacunas de registro, elegibilidade e presença que decidem direto vs. parceiro.",
        "Os Country Packs explicam as expectativas de rota específicas de cada país e as estruturas de parceria que os fornecedores costumam usar.",
        "O memo Go/No-Go e a Deal Room capturam a rota de parceiro recomendada antes que os recursos de prospecção sejam comprometidos.",
        "As recomendações de rota de parceiro e as notas de prontidão financeira seguem para o Post-Award Enablement quando o trabalho começa.",
      ],
    },
    sax: {
      eyebrow: "Onde a Sax Global ajuda",
      title: "Planejamento de rota transfronteiriça, onde importa.",
      lead: "Quando uma oportunidade cruza uma fronteira, a Sax Global acrescenta contexto de mercado e planejamento de rota de parceiro sobre a plataforma.",
      points: [
        "Planejamento de rota de parceiro quando a execução transfronteiriça é relevante.",
        "Contexto sobre estruturas de representação local, distribuição e importadores por mercado.",
        "Enquadramento de acesso a mercado que conecta a oportunidade a uma rota de mercado realista.",
        "Matching de parceiros quando aplicável — revelando categorias potenciais de parceiros a avaliar, não alocações garantidas.",
        "Uma segunda leitura sobre ir agora, fazer parceria primeiro ou se preparar antes de avançar.",
      ],
    },
    mockup: {
      eyebrow: "Exemplo de saída",
      title: "Como é uma leitura de rota de parceiro.",
      lead: "Uma visão curta e estruturada da questão de rota para uma única oportunidade — o tipo de leitura que a GovDecision e a Sax Global ajudam você a alcançar antes de se comprometer.",
      windowTitle: "govdecision · Brief de rota de parceiro",
      illustrative: "Ilustrativo",
      briefTitle: "Brief de rota de parceiro",
      fields: [
        { label: "Caminho da oportunidade", value: "Brasil → Estados Unidos" },
        { label: "Rota recomendada", value: "Distribuidor local + checklist de prontidão" },
        { label: "Dependência de parceiro", value: "Média" },
        { label: "Risco de execução", value: "Média" },
      ],
      nextStepLabel: "Próximo passo",
      nextStepValue: "Validar a rota antes de avançar",
      caption: "Ilustrativo — não é um caso real de cliente.",
    },
    disclaimer:
      "A GovDecision e a Sax Global podem apoiar o planejamento de rota de parceiro e o contexto de acesso a mercado quando aplicável. Elas não garantem alocação de parceiros, elegibilidade, acesso a mercado, adjudicações, financiamento ou resultados de contrato.",
    finalCta: {
      eyebrow: "Rotas de parceiros",
      title: "Decida a rota antes de correr atrás da oportunidade.",
      subtitle:
        "Fale com a Sax Global sobre como uma rota de parceiro poderia funcionar para o seu mercado — direto, parceiro local, distribuidor ou preparar-se primeiro.",
      primary: "Falar com a Sax Global",
      secondary: "Explorar Acesso a Mercado",
    },
  },

  capital: {
    meta: {
      title: "GovDecision Capital — Prontidão Financeira para Negócios com o Governo",
      description:
        "A GovDecision Capital ajuda fornecedores a estruturar prontidão financeira, necessidades de capital de giro, garantias e rotas de funding com parceiros para oportunidades do setor público.",
    },
    breadcrumbName: "GovDecision Capital",
    hero: {
      eyebrow: "GovDecision Capital",
      title: "Vencer é apenas o começo. A execução precisa de prontidão de capital.",
      subtitle:
        "A GovDecision Capital ajuda fornecedores a estimar necessidades de capital de giro, entender prazos de pagamento, organizar a prontidão financeira e preparar um caso mais sólido para rotas de funding com parceiros quando aplicável.",
      primaryCta: "Falar sobre prontidão de capital",
      secondaryCta: "Explorar a plataforma",
    },
    why: {
      eyebrow: "Por que a prontidão de capital importa",
      title: "Uma adjudicação é um evento de fluxo de caixa.",
      lead: "Contratos públicos muitas vezes pedem que você entregue, garanta e espere — antes de ser pago. A prontidão de capital é o que evita que uma vitória vire um aperto.",
      points: [
        {
          title: "Prazo, não viabilidade",
          description:
            "Fornecedores fortes empacam porque produção, garantias e entrega vencem muito antes do recebível. Mapear esse prazo cedo muda a decisão.",
        },
        {
          title: "As finanças fazem parte da prospecção",
          description:
            "Uma visão clara de capital de giro, garantias e prazos de pagamento torna um Go/No-Go honesto — e uma conversa sobre funding muito mais fácil quando importa.",
        },
        {
          title: "A prontidão viaja bem",
          description:
            "O trabalho transfronteiriço acrescenta prazos de câmbio, importação e impostos. Um caso financeiro estruturado mantém essas variáveis visíveis em vez de surpreender você após a adjudicação.",
        },
      ],
    },
    gaps: {
      eyebrow: "Lacunas financeiras comuns",
      title: "Onde os contratos públicos pressionam o fluxo de caixa.",
      lead: "As mesmas lacunas aparecem repetidas vezes. Nomeá-las cedo transforma uma preocupação vaga em uma questão que você pode planejar.",
      items: [
        "Capital de giro antes da entrega",
        "Custo de estoque ou produção",
        "Custos de importação / logística",
        "Garantias de execução",
        "Garantias de proposta",
        "Prazos de pagamento",
        "Faturamento por marcos",
        "Exposição cambial",
        "Prazos de impostos / importação",
        "Atraso no recebimento",
      ],
      note: "Quais lacunas se aplicam depende da oportunidade e deve ser validado caso a caso.",
    },
    structures: {
      eyebrow: "O que a GovDecision Capital estrutura",
      title: "Dos requisitos a um caso financeiro.",
      lead: "A GovDecision Capital ajuda a estruturar o caso financeiro e conectar situações qualificadas a rotas de parceiros quando aplicável. Não é empréstimo direto.",
      points: [
        {
          title: "O caso financeiro",
          description:
            "Transforme requisitos em uma necessidade estimada de capital de giro, um panorama de garantias e uma visão de prazos de pagamento — extraídos da Opportunity Qualification e da extração de requisitos assistida por IA.",
        },
        {
          title: "Notas de prontidão financeira",
          description:
            "Capture garantias, seguros-garantia e premissas de fluxo de caixa como notas de prontidão financeira dentro do Readiness Workspace e da Deal Room.",
        },
        {
          title: "O mapa de prazos",
          description:
            "Mostre quando os custos chegam versus quando o pagamento chega, para que o faturamento por marcos e o atraso no recebimento fiquem visíveis bem antes da adjudicação.",
        },
        {
          title: "O brief de rota de parceiro",
          description:
            "Resuma quais rotas de funding com parceiros podem ser relevantes, para que uma conversa sobre funding comece de um caso estruturado — não de uma página em branco.",
        },
      ],
    },
    routes: {
      eyebrow: "Rotas de funding com parceiros",
      title: "Rotas a avaliar — não um empréstimo.",
      lead: "Quando uma situação é séria, a GovDecision Capital pode apontar as rotas de funding com parceiros que podem ser relevantes. Se alguma se aplica depende da oportunidade.",
      items: [
        "Capital de giro",
        "Factoring / antecipação de recebíveis",
        "Export finance",
        "Trade finance",
        "Parceiros de FX / pagamento transfronteiriço",
        "Parceiros de seguro-garantia / performance bond",
        "Financiamento com parceiro local",
        "Rota com parceiro bancário ou fintech",
      ],
      note: "Estas são rotas potenciais de parceiros a avaliar. Qual pode ser relevante depende da oportunidade e deve ser validado — a GovDecision Capital não é um credor e não fornece financiamento.",
    },
    beforeAfter: {
      eyebrow: "Antes e depois da adjudicação",
      title: "Prontidão financeira ao longo da prospecção.",
      lead: "A prontidão de capital é útil duas vezes: para tomar uma decisão lúcida antes da adjudicação e para executar sem surpresas depois dela.",
      beforeLabel: "Antes da adjudicação",
      beforePoints: [
        "Estime a necessidade de capital de giro implícita na oportunidade.",
        "Sinalize cedo as exigências de garantia de proposta e garantia de execução.",
        "Mapeie os prazos de pagamento contra os custos de produção e entrega.",
        "Anote a exposição a câmbio, importação e prazos de impostos no trabalho transfronteiriço.",
        "Incorpore o panorama financeiro ao memo Go/No-Go.",
      ],
      afterLabel: "Depois da adjudicação",
      afterPoints: [
        "Organize o caso de prontidão financeira para rotas de funding com parceiros.",
        "Acompanhe garantias, marcos e faturamento no Post-Award Enablement.",
        "Revele a cobertura de atraso no recebimento e de capital de giro à medida que a entrega avança.",
        "Prepare um caso estruturado para compartilhar com parceiros financeiros quando aplicável.",
      ],
    },
    mockup: {
      eyebrow: "Exemplo de saída",
      title: "Como é uma leitura de prontidão financeira.",
      lead: "Uma visão curta e estruturada da questão de capital para uma única oportunidade — organizada, cautelosa e feita para ser validada.",
      windowTitle: "govdecision · Brief de prontidão financeira",
      illustrative: "Ilustrativo",
      briefTitle: "Brief de prontidão financeira",
      fields: [
        { label: "Estágio da oportunidade", value: "Pré-adjudicação / Pós-adjudicação" },
        { label: "Lacuna estimada de capital de giro", value: "Média" },
        { label: "Risco de prazo de pagamento", value: "Alto" },
        { label: "Exigência de garantia", value: "Validar" },
        { label: "Rota de funding", value: "Análise de financiamento com parceiro" },
      ],
      nextStepLabel: "Próximo passo",
      nextStepValue: "Estruturar o caso financeiro",
      caption: "Ilustrativo — não é um caso real de cliente nem uma oferta de financiamento.",
    },
    disclaimer:
      "A GovDecision Capital apoia a prontidão financeira, a estruturação do caso e a preparação de rotas de parceiros quando aplicável. Não é empréstimo direto e não garante financiamento, aprovação de crédito, adjudicações ou resultados de contrato.",
    finalCta: {
      eyebrow: "Prontidão de capital",
      title: "Construa o caso financeiro antes de precisar dele.",
      subtitle:
        "Fale sobre prontidão de capital com nossa equipe — capital de giro, garantias, prazos de pagamento e quais rotas de funding com parceiros podem ser relevantes.",
      primary: "Falar sobre prontidão de capital",
      secondary: "Explorar a plataforma",
    },
  },
} satisfies PartnerCapitalChrome;

export default ptBR;
