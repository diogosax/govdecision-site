import type { Dictionary } from "./types";

/**
 * PT-BR — natural Brazilian Portuguese for business owners and executives.
 * Tone: strategic, commercial, premium. Brand and product-architecture names
 * (GovDecision, Sax Group, Sax Global, the plan names, and the six platform
 * modules — Supplier Passport, Opportunity Qualification, Readiness Workspace,
 * Country Packs, Deal Room, Post-Award Enablement) stay in English and are
 * explained in Portuguese. "Government business" is rendered as "negócios
 * governamentais" in positioning labels, and as "negócios com o governo" /
 * "vendas ao governo" in sentences where that reads clearer. Copy is
 * deliberately tight to protect the approved layout — labels and CTAs stay
 * short, headlines stay compact.
 */
export const ptBR = {
  common: {
    nav: {
      platform: "Plataforma",
      marketAccess: "Mercados",
      pricing: "Preços",
      company: "Empresa",
      contact: "Contato",
    },
    cta: {
      startReadiness: "Iniciar readiness",
      explorePlatform: "Conhecer a plataforma",
      viewCorridors: "Ver corredores",
      viewPricing: "Ver preços",
      talkToSax: "Falar com a Sax Global",
      seeFullPlatform: "Ver a plataforma completa",
      allPaths: "Todos os caminhos",
      aboutSax: "Sobre o Sax Group",
      talkToTeam: "Falar com o time",
    },
    login: "Entrar",
    skipToContent: "Pular para o conteúdo",
    languageSelector: {
      label: "Selecionar idioma",
      current: "Atual",
    },
    footer: {
      tagline: "Inteligência em vendas ao setor público",
      blurb:
        "A GovDecision é uma plataforma do Sax Group, criada em Orlando, Flórida. A Sax Global apoia o acesso a mercados internacionais para fornecedores que vendem a governos.",
      platformHeading: "Plataforma",
      getStartedHeading: "Comece agora",
      startReadiness: "Iniciar readiness",
      legalDisclaimer:
        "A GovDecision oferece apoio à decisão, fluxos de prontidão e orientação de acesso a mercados. Não garante elegibilidade, habilitação, aceitação de propostas, financiamento, contratos ou resultados em compras públicas.",
      copyright: "Uma plataforma do Sax Group.",
      madeWith: "Feito com",
      inFlorida: "na Flórida",
    },
  },

  home: {
    meta: {
      title: "GovDecision — Plataforma global de negócios governamentais",
      description:
        "A GovDecision ajuda fornecedores a qualificar oportunidades públicas, organizar readiness e acessar mercados governamentais com decisões melhores em vários países.",
    },
    eyebrow: "Plataforma global de negócios governamentais",
    title:
      "Oportunidades públicas existem em muitos mercados. O difícil é saber onde competir.",
    subtitle:
      "A GovDecision ajuda fornecedores a qualificar oportunidades, organizar readiness e acessar mercados governamentais com decisões melhores, em vários países.",
    slogan: "Less Clipping, More Decision",
    strategicLead: "Vendas ao governo, com decisões melhores.",
    strategicRest: "Da prontidão ao contrato.",
    journey: [
      "Ruído de oportunidades",
      "Clareza de decisão",
      "Prontidão",
      "Rota de mercado",
      "Execução do contrato",
    ],
    problem: {
      eyebrow: "O problema real",
      title: "Mais oportunidades não geram mais vitórias. Decisões melhores, sim.",
      lead: "O mercado está cheio de portais, alertas, PDFs e requisitos fragmentados. A dor real não é encontrar oportunidades — é decidir o que vale a pena perseguir e o que precisa ser resolvido antes de competir.",
      paragraph:
        "A maioria dos fornecedores não perde negócios com o governo por não ter visto a oportunidade. Perde porque foi atrás da errada, descobriu um requisito crítico tarde demais ou não tinha os documentos, registros ou parceiro local que o mercado exigia.",
      withoutLayer: "Sem uma camada de decisão",
      noise: [
        "Alerta de edital · baixa aderência",
        "Portal de licitação · expirado",
        "Conjunto de requisitos em PDF",
        "Notificação de portal",
        "E-mail encaminhado · pouco claro",
      ],
      decisionTitle: "1 oportunidade que merece uma decisão de verdade",
      decisionMeta: "Aderência 84 · Prontidão 72% · Perseguir com ressalvas",
    },
    capabilities: {
      eyebrow: "O que a GovDecision faz",
      title: "Um sistema operacional de negócios com o governo para fornecedores.",
      lead: "Seis capacidades levam você do ruído das oportunidades a uma decisão defensável, um plano de prontidão executável e uma rota de mercado.",
      cards: [
        {
          title: "Qualificar oportunidades",
          description:
            "Avalie aderência, complexidade e esforço para o time investir tempo no que dá para ganhar.",
        },
        {
          title: "Detectar bloqueios",
          description:
            "Identifique registros, certidões, garantias e exigências de parceiro antes que os prazos cobrem.",
        },
        {
          title: "Construir prontidão",
          description:
            "Transforme requisitos em tarefas com responsáveis e prazos, e acompanhe a prontidão subir.",
        },
        {
          title: "Recomendar rota de mercado",
          description:
            "Direto, distribuidor, parceiro local, subcontrato, consórcio ou preparar primeiro — guiado por aderência e mercado.",
        },
        {
          title: "Estruturar decisões",
          description:
            "Reúna estratégia, risco, preço e aprovações em uma decisão que a liderança pode sustentar.",
        },
        {
          title: "Preparar o pós-contrato",
          description:
            "Planeje entrega, garantias, marcos e prazos financeiros para a vitória virar contrato executado.",
        },
      ],
    },
    corridors: {
      eyebrow: "Corredores globais",
      title: "Uma plataforma global para corredores de negócios com o governo.",
      lead: "Negócios globais com o governo, com apoio da Sax Global.",
      coverage:
        "A cobertura evolui conforme pacotes por país, fontes disponíveis, demanda dos clientes e validação operacional.",
    },
    ai: {
      eyebrow: "Apoiado por IA, conduzido por decisões",
      title: "A IA elimina o trabalho repetitivo. As pessoas decidem.",
      lead: "A GovDecision usa IA para reduzir desperdício operacional e apoiar decisões de negócio calibradas por pessoas — nunca para substituir o seu julgamento.",
      cardLabel: "Apoio de IA · resumo executivo",
      cardLines: [
        "14 requisitos extraídos de 38 páginas",
        "3 bloqueios detectados · 1 crítico",
        "Prazo interpretado · 19 dias restantes",
        "Decisão: perseguir com ressalvas",
      ],
      points: [
        "Extrair requisitos de documentos longos e fragmentados",
        "Resumir oportunidades em briefings claros",
        "Detectar bloqueios e itens de prontidão faltantes",
        "Apoiar a análise de prontidão e a decisão Go/No-Go",
      ],
    },
    sax: {
      eyebrow: "Apoio da Sax Global",
      title: "O software estrutura o processo. A Sax Global apoia a rota.",
      lead: "A GovDecision conta com a Sax Global, o braço de negócios internacionais do Sax Group. Quando se aplica, a Sax Global apoia acesso a mercados, estratégia de parceiro local, contexto de estruturação, execução internacional e orientação de prontidão.",
      cards: [
        {
          title: "Acesso a mercados",
          description: "Rotas de entrada práticas por país e corredor.",
        },
        {
          title: "Estratégia de parceiro local",
          description: "Quando fazer parceria, distribuir ou ir direto.",
        },
        {
          title: "Contexto de estruturação",
          description: "O que a execução internacional realmente exige.",
        },
        {
          title: "Orientação de prontidão",
          description: "Apoio calibrado para fechar as lacunas.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Da prontidão ao contrato",
      title: "Torne-se um fornecedor pronto para o governo.",
      subtitle:
        "Comece pela prontidão. Persiga com método. Cresça em mercados do setor público com decisões melhores.",
    },
  },

  platform: {
    meta: {
      title: "Plataforma",
      description:
        "A camada de decisão para vendas ao governo: Supplier Passport, Opportunity Qualification, Readiness Workspace, Country Packs, Deal Room e Post-Award Enablement.",
    },
    eyebrow: "A plataforma",
    title: "A camada de decisão para vendas ao governo.",
    lead: "Seis módulos conectados levam o fornecedor do ruído das oportunidades a uma decisão Go/No-Go defensável, um plano de prontidão executável e uma rota de mercado — em vários países.",
    moduleLabel: "Módulo",
    modules: [
      {
        name: "Supplier Passport",
        tagline: "O perfil estruturado do que sua empresa entrega de verdade.",
        description:
          "Um perfil vivo da sua empresa que toda decisão consulta — para avaliar aderência, bloqueios e rotas contra a realidade, não no achismo.",
        points: [
          "Dados da empresa",
          "Produtos e capacidades",
          "Certificações e documentos",
          "Países e limites comerciais",
          "Prontidão para exportar",
          "Restrições operacionais",
        ],
      },
      {
        name: "Opportunity Qualification",
        tagline: "Saiba o que vale a pena antes de gastar uma semana nisso.",
        description:
          "Cada oportunidade recebe nota de aderência, complexidade e esforço, com bloqueios e requisitos críticos antecipados e uma recomendação Go/No-Go clara.",
        points: [
          "Nota de aderência",
          "Nota de complexidade",
          "Nota de esforço",
          "Detecção de bloqueios",
          "Extração de prazos",
          "Requisitos críticos",
          "Recomendação Go/No-Go",
        ],
      },
      {
        name: "Readiness Workspace",
        tagline: "Transforme requisitos faltantes em um plano com responsáveis e prazos.",
        description:
          "Checklists de documentos, país e oportunidade viram tarefas acompanhadas, com responsáveis e prazos — a prontidão vira progresso mensurável, não correria.",
        points: [
          "Checklist de documentos",
          "Checklist por país",
          "Checklist da oportunidade",
          "Tarefas, responsáveis e prazos",
          "Progresso da prontidão",
        ],
      },
      {
        name: "Country Packs",
        tagline: "As regras locais do jogo, estruturadas por mercado.",
        description:
          "Lógica específica de cada país para fontes, registro, elegibilidade, parceiros locais, formas de submissão e o atrito operacional que pega o fornecedor de surpresa.",
        points: [
          "Fontes específicas do país",
          "Lógica de registro",
          "Elegibilidade",
          "Exigências de parceiro local",
          "Caminho de submissão",
          "Documentos comuns",
          "Atrito operacional",
          "Notas de moeda e idioma",
        ],
      },
      {
        name: "Deal Room",
        tagline: "Onde a decisão de perseguir é tomada e aprovada.",
        description:
          "Uma decisão estruturada reúne estratégia, escolha de rota, riscos, premissas de preço e necessidades de parceiro em um fluxo de aprovação que a liderança assina.",
        points: [
          "Memorando de decisão",
          "Estratégia de proposta",
          "Escolha de rota",
          "Riscos",
          "Premissas de preço",
          "Necessidades de parceiro",
          "Fluxo de aprovação",
        ],
      },
      {
        name: "Post-Award Enablement",
        tagline: "Ganhar é o começo — a execução é onde está a margem.",
        description:
          "Prontidão de entrega, garantias, marcos e prazos financeiros são estruturados antes de virarem problema, para que vitórias virem contratos executados.",
        points: [
          "Prontidão de entrega",
          "Garantias",
          "Marcos",
          "Prazos de pagamento",
          "Necessidade de capital de giro",
          "Prontidão financeira",
        ],
      },
    ],
    finalCta: {
      title: "Veja a camada de decisão nas suas próprias oportunidades.",
      subtitle:
        "Comece pela prontidão e qualifique oportunidades reais com método — em cada corredor que você quer atacar.",
      secondaryLabel: "Ver preços",
    },
  },

  marketAccess: {
    meta: {
      title: "Acesso a mercados — GovDecision",
      description:
        "Escolha onde sua empresa está e para onde quer vender a governos. A GovDecision ajuda fornecedores a entender caminhos locais e internacionais com mais prontidão e decisões melhores.",
    },
    hero: {
      eyebrow: "Caminhos de acesso a mercados",
      title:
        "Encontre os mercados governamentais que sua empresa pode realmente atacar.",
      subtitle:
        "Escolha onde sua empresa está e para onde quer vender. A GovDecision ajuda você a entender o caminho, os bloqueios, a prontidão e a rota de mercado.",
      slogan:
        "Local ou internacional, vender ao governo começa com decisões melhores.",
      primaryCta: "Iniciar readiness",
      secondaryCta: "Ver caminhos",
    },
    twoPaths: {
      eyebrow: "Dois caminhos",
      title: "Duas formas de entrar em negócios com o governo.",
      lead: "Todo fornecedor começa em um de dois lugares: vendendo no próprio país ou cruzando uma fronteira. A GovDecision estrutura os dois — e a Sax Global apoia onde a jornada sai do software.",
      examplesLabel: "Exemplos",
      modes: [
        {
          label: "Negócios governamentais locais",
          copy: "Venda a compradores públicos no seu mercado com qualificação mais clara, prontidão documental e disciplina na decisão de propor.",
          helpsLabel: "Onde a GovDecision ajuda",
          helps: [
            "Achar o que vale a pena",
            "Detectar documentos faltantes",
            "Organizar a prontidão",
            "Estruturar decisões Go/No-Go",
            "Preparar a execução pós-contrato",
          ],
        },
        {
          label: "Negócios governamentais internacionais",
          copy: "Avalie oportunidades em mercados estrangeiros ou multilaterais com prontidão específica por país, lógica de rota de mercado e apoio da Sax Global.",
          helpsLabel: "Onde GovDecision + Sax Global ajudam",
          helps: [
            "Caminho de acesso ao mercado",
            "Lógica do pacote por país",
            "Estratégia de parceiro local",
            "Contexto de registro e prontidão",
            "Planejamento de execução internacional",
            "Decisão estruturada antes de propor",
          ],
        },
      ],
    },
    finder: {
      eyebrow: "Buscador de caminhos",
      title: "Escolha o seu caminho.",
      lead: "Defina onde sua empresa está e para onde quer vender. Mostramos o tipo de caminho, o que ele costuma exigir e o primeiro passo certo.",
    },
    selector: {
      originPrompt: "Onde sua empresa está sediada?",
      targetPrompt: "Para onde você quer vender a governos?",
      selectedPath: "Caminho selecionado",
      pathType: "Tipo de caminho",
      requires: "O que isso costuma exigir",
      recommendedFirstStepLabel: "Primeiro passo recomendado",
      recommendedFirstStep: "Comece com um diagnóstico de prontidão da GovDecision.",
      startReadiness: "Iniciar readiness",
      requirements: {
        Local: [
          "qualificação de oportunidades",
          "prontidão documental do fornecedor",
          "disciplina Go/No-Go",
          "prontidão de execução pós-contrato",
        ],
        "Cross-border": [
          "prontidão do fornecedor",
          "requisitos específicos do país",
          "validação da rota de mercado",
          "estratégia de parceiro local/comercial",
          "prontidão de execução e financeira",
        ],
        Multilateral: [
          "registro de fornecedor",
          "elegibilidade internacional",
          "prontidão documental",
          "qualificação de oportunidades",
          "decisão estruturada antes de propor",
        ],
        Regional: [
          "prontidão para expansão regional",
          "validação do pacote por país",
          "estratégia de rota local",
          "avaliação de prontidão",
        ],
      },
    },
    pathTypeLabels: {
      Local: "Local",
      "Cross-border": "Internacional",
      Multilateral: "Multilateral",
      Regional: "Regional",
    },
    statusLabels: {
      "Active focus": "Foco ativo",
      "In development": "Em desenvolvimento",
      Targeted: "Mapeado",
    },
    paths: {
      eyebrow: "Caminhos de acesso a mercados",
      title: "Caminhos que estamos construindo.",
      lead: "Um conjunto crescente de caminhos locais e internacionais. Comece qualquer um deles com uma conversa de prontidão hoje — as páginas detalhadas estão a caminho.",
      corridorPrompt:
        "Procurando o mapa completo? Explore cada corredor em que a GovDecision atua hoje.",
      corridorLink: "Ver corredores",
      cards: {
        "brazil-brazil": {
          title:
            "Venda a compradores públicos no Brasil com mais qualificação e prontidão.",
          summary:
            "Traga disciplina às compras públicas brasileiras — de achar o que vale a pena a organizar os documentos e decisões por trás de cada proposta.",
          focusAreas: [
            "Fontes oficiais/públicas de oportunidades",
            "Documentação do fornecedor",
            "Extração de requisitos",
            "Disciplina Go/No-Go",
            "Fluxos assistidos",
          ],
          ctaLabel: "Ver caminho local Brasil",
        },
        "united-states-united-states": {
          title: "Estruture sua abordagem às oportunidades do governo dos EUA.",
          summary:
            "Transforme a escala das compras públicas dos EUA em um plano focado — os registros, as categorias e as oportunidades certas.",
          focusAreas: [
            "Cenário de oportunidades federais",
            "Caminhos de registro de fornecedor",
            "Requisitos de prontidão",
            "Aderência de categoria",
            "Disciplina na busca",
          ],
          ctaLabel: "Ver caminho local EUA",
        },
        "brazil-united-states": {
          title:
            "Apoie fornecedores brasileiros a avaliar a entrada no governo dos EUA.",
          summary:
            "Entenda o que uma entrada crível no setor público dos EUA exige antes de investir — prontidão, registro e rota.",
          focusAreas: [
            "Prontidão para exportar",
            "Estratégia de rota local",
            "Contexto do caminho de registro",
            "Opções de parceiro/distribuidor",
            "Apoio da Sax Global",
          ],
          ctaLabel: "Ver caminho Brasil → EUA",
        },
        "brazil-un-world-bank": {
          title:
            "Prepare-se para compras multilaterais com mais prontidão e documentação.",
          summary:
            "Fique pronto em registro e documentação para compras da ONU e do Banco Mundial, e qualifique o que vale a pena.",
          focusAreas: [
            "Registro de fornecedor",
            "Elegibilidade internacional",
            "Documentação",
            "Qualificação de oportunidades",
            "Decisão estruturada",
          ],
          ctaLabel: "Ver caminho multilateral",
        },
        "united-states-brazil": {
          title:
            "Avalie como fornecedores dos EUA podem abordar as compras públicas no Brasil.",
          summary:
            "Leia com clareza a complexidade das compras públicas brasileiras e decida se representa, faz parceria ou espera.",
          focusAreas: [
            "Complexidade do mercado local",
            "Entendimento de compradores/fontes",
            "Estratégia de representação ou parceria",
            "Prontidão documental",
            "Contexto da Sax Global",
          ],
          ctaLabel: "Ver caminho EUA → Brasil",
        },
        "brazil-paraguay": {
          title:
            "Explore a expansão regional em negócios com o governo com um caminho estruturado.",
          summary:
            "Cresça em mercados governamentais vizinhos com um pacote por país validado e uma rota clara, sem achismo.",
          focusAreas: [
            "Expansão regional",
            "Validação do pacote por país",
            "Estratégia de rota local",
            "Avaliação de prontidão",
          ],
          ctaLabel: "Ver caminho regional",
        },
      },
    },
    enters: {
      eyebrow: "Onde a GovDecision entra",
      title: "A GovDecision transforma interesse de mercado em um caminho pronto para decidir.",
      lead: "Seis passos levam o fornecedor do interesse de mercado a uma decisão defensável — perseguir agora ou preparar primeiro.",
      note: "Em vez de correr atrás de toda oportunidade pública, a GovDecision ajuda fornecedores a entender o que dá para perseguir, o que precisa ser resolvido primeiro e qual rota faz sentido para cada mercado.",
      journey: [
        {
          title: "Perfil do fornecedor",
          description:
            "Registre o que sua empresa é, vende e está pronta para comprovar.",
        },
        {
          title: "Lógica de mercado/país",
          description:
            "Aplique as regras, fontes e requisitos de cada mercado-alvo.",
        },
        {
          title: "Qualificação de oportunidades",
          description: "Avalie a aderência e filtre o que não vale a pena.",
        },
        {
          title: "Lacunas de prontidão",
          description:
            "Revele os documentos, registros e bloqueios a resolver primeiro.",
        },
        {
          title: "Recomendação de rota",
          description:
            "Veja se vai direto, faz parceria, representa ou distribui.",
        },
        {
          title: "Decisão: perseguir ou preparar",
          description:
            "Decida perseguir agora ou preparar primeiro — com os motivos registrados.",
        },
      ],
    },
    sax: {
      eyebrow: "Onde a Sax Global entra",
      title: "A Sax Global apoia o caminho além do software.",
      lead: "Em caminhos internacionais, o software é só parte da jornada. A Sax Global pode apoiar o planejamento de acesso a mercados, o contexto de estruturação internacional, discussões de rota com parceiros e orientação prática de execução, quando se aplica.",
      cta: "Falar com a Sax Global",
      disclaimer:
        "A Sax Global oferece planejamento, contexto e orientação. Não garante acesso a mercados, elegibilidade, indicação de parceiros, financiamento ou resultados em contratos.",
      services: [
        {
          title: "Planejamento de acesso a mercados",
          description:
            "Desenhe uma abordagem de entrada realista para os mercados que você quer atacar.",
        },
        {
          title: "Estratégia de parceiro local",
          description:
            "Pense quando fazer parceria, representar, distribuir ou ir direto.",
        },
        {
          title: "Contexto de negócios internacionais",
          description:
            "Entenda o que negócios internacionais com o governo costumam envolver.",
        },
        {
          title: "Prontidão de execução internacional",
          description:
            "Prepare a base operacional que uma busca no exterior pode exigir.",
        },
        {
          title: "Validação de rota comercial",
          description:
            "Teste a rota de mercado antes de comprometer recursos.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Comece o caminho",
      title: "Comece pelo caminho. Depois construa a prontidão.",
      subtitle:
        "Diga onde sua empresa está e para onde quer vender. Ajudamos você a entender o primeiro passo.",
      primary: "Iniciar readiness",
      secondary: "Falar com a Sax Global",
    },
  },

  pricing: {
    meta: {
      title: "Preços",
      description:
        "Duas formas de trabalhar com a GovDecision: GovDecision One (com foco na plataforma, self-service) e GovDecision Assisted (com foco em serviço, com apoio da Sax Global). Preços para o Brasil (BRL) e internacional (USD).",
    },
    eyebrow: "Preços",
    title: "Uma plataforma premium para quem leva o governo a sério.",
    lead: "A GovDecision One é focada na plataforma, para times que querem estrutura e velocidade. A GovDecision Assisted é focada em serviço, com apoio da Sax Global para construir acesso real a mercados. Não é uma ferramenta de clipping — é uma plataforma de crescimento.",
    note: "Os preços podem variar por país, corredor, perfil da empresa, nível de apoio assistido e volume de oportunidades ativas.",
    serviceLedBadge: "Com serviço",
    brazilLabel: "Brasil · BRL",
    internationalLabel: "Internacional · USD",
    plans: [
      {
        market: "Inteligência via plataforma",
        badge: "Plataforma",
        description:
          "Para fornecedores que querem uma plataforma estruturada para qualificar oportunidades, organizar a prontidão e decidir onde competir.",
        features: [
          "Supplier Passport",
          "Espaço de qualificação de oportunidades",
          "Checklist de prontidão",
          "Acesso aos pacotes por país",
          "Modelos de briefing de decisão",
          "Organização básica do pipeline",
        ],
        cta: "Começar a GovDecision One",
        priceBrazil: "R$ 379,00 / mês",
        priceInternational: "US$ 99.90 / mês",
        noteBrazil: "Para fornecedores sediados no Brasil.",
        noteInternational: "Para os EUA e outros mercados atendidos.",
      },
      {
        market: "Acesso a mercados com serviço",
        badge: "Com a Sax Global",
        description:
          "Para fornecedores que querem o apoio da Sax Global para estruturar a prontidão, avaliar oportunidades e construir rotas práticas de negócios com o governo.",
        features: [
          "Tudo da GovDecision One",
          "Onboarding assistido",
          "Calibração de prontidão",
          "Apoio na análise de oportunidades",
          "Orientação por corredor de país",
          "Apoio em rota de parceiros",
          "Memorandos executivos de decisão",
          "Apoio prioritário da Sax Global",
        ],
        cta: "Falar com a Sax Global",
        priceBrazil: "Consulte-nos",
        priceInternational: "Preço USD sob consulta",
        noteBrazil: "Acesso a mercados com serviço da Sax Global.",
        noteInternational: "Definido pelo seu corredor, perfil e nível de apoio.",
      },
    ],
    compare: {
      eyebrow: "Comparar",
      title: "O que está incluído em cada plano.",
      lead: "Os dois planos compartilham a plataforma. O Assisted adiciona o apoio, a calibração e a orientação executiva da Sax Global.",
      capability: "Recurso",
      guided: "Assistido",
      rows: [
        "Supplier Passport",
        "Qualificação de oportunidades",
        "Readiness Workspace",
        "Acesso aos pacotes por país",
        "Modelos de briefing de decisão",
        "Organização do pipeline",
        "Onboarding assistido",
        "Calibração de prontidão",
        "Apoio na análise de oportunidades",
        "Orientação de parceiro/rota",
        "Memorandos executivos de decisão",
        "Apoio prioritário da Sax Global",
      ],
      values: {
        Standard: "Padrão",
        Guided: "Assistido",
        Basic: "Básico",
        Advanced: "Avançado",
      },
    },
    finalCta: {
      eyebrow: "Comece agora",
      title: "Vamos desenhar o plano certo para a sua empresa.",
      subtitle:
        "O preço depende do seu país, corredor, perfil e do nível de apoio assistido que você precisa. Diga onde quer competir.",
      primary: "Falar com a Sax Global",
      secondary: "Conhecer a plataforma",
    },
  },

  company: {
    meta: {
      title: "Empresa",
      description:
        "A GovDecision é uma plataforma do Sax Group, criada em Orlando, Flórida. A Sax Global apoia desenvolvimento de negócios internacionais, internacionalização e acesso a mercados para fornecedores que vendem a governos.",
    },
    eyebrow: "Empresa",
    title: "Criada pelo Sax Group, na Flórida, para fornecedores que querem ir além das fronteiras.",
    lead: "A GovDecision é uma plataforma do Sax Group, nascida de uma tese simples: fornecedores precisam de mais do que alertas de edital. Precisam de prontidão, qualificação, apoio à decisão e estrutura de execução para ganhar negócios com o governo entre países.",
    facts: [
      { label: "Controladora", value: "Sax Group" },
      { label: "Braço internacional", value: "Sax Global" },
      { label: "Sediada em", value: "Orlando, Flórida" },
      { label: "Foco", value: "Vendas globais ao setor público" },
    ],
    ownership: {
      eyebrow: "Controle e contexto",
      title: "Uma plataforma do Sax Group, com apoio da Sax Global.",
      lead: "O Sax Group está sediado em Orlando, Flórida. A Sax Global, seu braço de negócios internacionais, apoia desenvolvimento de negócios, internacionalização e acesso a mercados para empresas que entram em novos países.",
      p1: "A GovDecision fica no encontro entre software e serviço. A plataforma estrutura o processo de decisão e prontidão; a Sax Global adiciona apoio humano e prático onde o acesso a mercados e a execução internacional exigem.",
      p2: "Essa combinação é proposital. As vendas ao setor público recompensam empresas que se preparam com método e avançam com confiança — não as que correm atrás de cada notificação.",
    },
    why: {
      eyebrow: "Por que criamos",
      title: "Por que o Sax Group criou a GovDecision",
      lead: "As vendas ao setor público são fragmentadas, complexas e difíceis de navegar entre países. A GovDecision existe para ajudar fornecedores a transformar a complexidade das compras públicas em clareza comercial.",
      beliefs: [
        {
          title: "Decisões superam alertas",
          description:
            "Fornecedores precisam saber onde competir e onde não — não de mais um feed de notificações de baixa aderência.",
        },
        {
          title: "Prontidão é o trabalho de verdade",
          description:
            "A maioria das derrotas vem de documentos, registros ou parceiros descobertos tarde demais.",
        },
        {
          title: "Rota de mercado é estratégia",
          description:
            "Direto, distribuidor, parceiro, subcontrato, consórcio ou preparar primeiro — a rota muda tudo.",
        },
      ],
    },
    madeWith: {
      localLabelSuffix: "Sax Group · Orlando, Flórida",
      heading: "Feito com",
      inFlorida: "na Flórida",
      body: "Less Clipping, More Decision — uma plataforma para empresas que querem crescer com negócios com o governo, feita com cuidado para quem a usa.",
      cta: "Falar com o time",
    },
    finalCta: {
      title: "Faça seu negócio com o governo crescer com método.",
      subtitle:
        "Comece pela prontidão. Persiga com método. Cresça em mercados do setor público com decisões melhores.",
      secondary: "Conhecer a plataforma",
    },
  },

  contact: {
    meta: {
      title: "Contato",
      description:
        "Comece sua conversa de prontidão para vender ao governo com a GovDecision. Conte o que você vende e onde quer competir.",
    },
    eyebrow: "Contato",
    title: "Comece sua conversa de prontidão para vender ao governo.",
    lead: "Conte o que você vende e onde quer competir. Vamos ajudar a decidir onde focar, qual prontidão você precisa e qual rota de mercado faz sentido.",
    aside: [
      {
        title: "Qualifique antes de comprometer",
        description:
          "Ajudamos a enxergar aderência, bloqueios e esforço antes de você investir uma semana na oportunidade errada.",
      },
      {
        title: "Construa prontidão com método",
        description:
          "Transforme requisitos faltantes em um plano com responsáveis e prazos nos mercados que você quer atacar.",
      },
      {
        title: "Encontre sua rota de mercado",
        description:
          "Direto, distribuidor, parceiro local, subcontrato, consórcio — ou preparar primeiro.",
      },
    ],
    preferEmail: "Prefere e-mail?",
    alreadyCustomer: "Já é cliente?",
    loginCta: "Entrar no app",
    disclaimer:
      "A GovDecision oferece apoio à decisão, fluxos de prontidão e orientação de acesso a mercados. Não garante elegibilidade, habilitação, aceitação de propostas, financiamento, contratos ou resultados em compras públicas.",
    context: {
      local: "Você está perguntando sobre um caminho de prontidão local com a GovDecision.",
      cross: "Você está perguntando sobre um caminho de acesso a mercados com a Sax Global.",
      localWithTarget:
        "Você está perguntando sobre um caminho de prontidão local com a GovDecision: {target}.",
      crossWithPair:
        "Você está perguntando sobre um caminho de acesso a mercados com a Sax Global: {origin} → {target}.",
    },
    form: {
      name: "Nome",
      namePlaceholder: "Seu nome completo",
      companyLabel: "Empresa",
      companyPlaceholder: "Nome da empresa",
      email: "E-mail profissional",
      emailPlaceholder: "voce@empresa.com",
      country: "País",
      countryPlaceholder: "Onde você está sediado",
      markets: "Mercados de interesse",
      marketsPlaceholder: "ex.: Estados Unidos, Brasil, ONU e Banco Mundial",
      message: "Mensagem",
      messagePlaceholder: "O que você vende e onde quer competir?",
      submit: "Solicitar uma conversa de prontidão",
      submitting: "Enviando…",
      consent:
        "Ao entrar em contato, você concorda em ser contatado sobre sua conversa de prontidão. Sem spam.",
      successTitle: "Solicitação recebida.",
      successBody:
        "Obrigado — sua solicitação foi recebida. Entraremos em contato em breve.",
      sendAnother: "Enviar outra solicitação",
      errorMessage:
        "Não conseguimos enviar sua solicitação agora. Tente novamente ou escreva para contact@govdecision.com.",
    },
  },

  corridors: {
    meta: {
      title: "Corredores",
      description:
        "Corredores de negócios com o governo, estruturados por país: Estados Unidos, Brasil, Paraguai, México, Canadá, mercados africanos selecionados, além de ONU e Banco Mundial.",
    },
    eyebrow: "Corredores globais",
    title: "Corredores de negócios com o governo, estruturados por país.",
    lead: "A GovDecision combina um motor global de decisão com pacotes específicos por país para acesso a mercados, prontidão, fontes, registro, documentos e rotas de mercado.",
    globalLine: "Negócios globais com o governo, com apoio da Sax Global.",
    coverage:
      "A cobertura evolui conforme pacotes por país, fontes disponíveis, demanda dos clientes e validação operacional.",
    legend: {
      active: "Foco ativo",
      inDev: "Em desenvolvimento",
      multilateral: "Multilateral",
      hub: "Hub Sax Global",
    },
    combinesEyebrow: "Como funciona",
    combinesTitle: "Um motor global de decisão, fundamentado na realidade de cada país.",
    combinesLead:
      "A GovDecision une uma lógica de decisão a pacotes específicos por país, para que cada recomendação reflita método global e regras locais.",
    combines: [
      "Lógica global de decisão",
      "Pacotes específicos por país",
      "Fontes oficiais/públicas onde disponíveis",
      "Fluxos de prontidão do fornecedor",
      "Estratégia de rota de mercado",
      "Apoio da Sax Global para acesso internacional",
    ],
    marketsEyebrow: "Mercados",
    marketsTitle: "Onde a GovDecision atua hoje.",
    marketsLead:
      "Cada corredor combina fontes, lógica de registro, requisitos de prontidão e orientação de rota de mercado.",
    coverageNote:
      "A cobertura é construída de forma progressiva, por meio de pacotes por país, validação operacional, disponibilidade de fontes e demanda dos clientes.",
    corridorById: {
      us: {
        name: "Estados Unidos",
        summary:
          "Oportunidades federais, caminhos de registro de fornecedor e estratégia de rota comercial para o maior comprador público do mundo.",
        focus: [
          "Oportunidades federais",
          "Caminhos de registro de fornecedor",
          "Requisitos de prontidão",
          "Estratégia de rota local/comercial",
        ],
      },
      brazil: {
        name: "Brasil",
        summary:
          "Oportunidades em compras públicas com fontes oficiais, documentação e fluxos assistidos de prontidão.",
        focus: [
          "Oportunidades em compras públicas",
          "Fontes oficiais",
          "Prontidão do fornecedor",
          "Documentação",
          "Fluxos assistidos",
        ],
      },
      paraguay: {
        name: "Paraguai",
        summary:
          "Corredor de expansão regional com desenvolvimento do pacote por país e validação de rota local.",
        focus: [
          "Expansão regional",
          "Desenvolvimento do pacote por país",
          "Validação de rota local",
        ],
      },
      mexico: {
        name: "México",
        summary:
          "Acesso a mercados e preparação do fornecedor com validação da rota de mercado.",
        focus: [
          "Acesso a mercados",
          "Preparação do fornecedor",
          "Validação da rota de mercado",
        ],
      },
      canada: {
        name: "Canadá",
        summary:
          "Oportunidades federais e prontidão do fornecedor com um pacote por país em evolução.",
        focus: [
          "Oportunidades federais",
          "Prontidão do fornecedor",
          "Evolução do pacote por país",
        ],
      },
      africa: {
        name: "Mercados africanos selecionados",
        summary:
          "Oportunidades do setor público e ligadas a desenvolvimento, validadas país a país com lógica de parceiro local.",
        focus: [
          "Oportunidades públicas e de desenvolvimento",
          "Validação país a país",
          "Lógica de parceiro local",
        ],
      },
      multilateral: {
        name: "ONU e Banco Mundial",
        summary:
          "Compras multilaterais com registro de fornecedor, elegibilidade internacional, prontidão e documentação.",
        focus: [
          "Compras multilaterais",
          "Registro de fornecedor",
          "Elegibilidade internacional",
          "Prontidão e documentação",
        ],
      },
    },
    statusLabels: {
      "Active focus": "Foco ativo",
      "In development": "Em desenvolvimento",
      Targeted: "Mapeado",
      Multilateral: "Multilateral",
    },
    finalCta: {
      title: "Planeje sua rota para um novo mercado.",
      subtitle:
        "Diga onde quer competir. Ajudamos a decidir qual prontidão e rota fazem sentido.",
      primary: "Iniciar readiness",
      secondary: "Conhecer a plataforma",
    },
  },
} satisfies Dictionary;

export default ptBR;
