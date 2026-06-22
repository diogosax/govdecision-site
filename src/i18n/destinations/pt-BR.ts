/**
 * PT-BR destination overlays (SITE-012).
 *
 * Native Brazilian-Portuguese copy — commercial, premium, practical. Metric
 * *values* preserve the canonical figures exactly (only magnitude words are
 * translated); source names (World Bank, OECD, GAO, PNCP, SAM.gov, UNGM, DNCP…)
 * stay as their official names. Cautious / non-guarantee wording is preserved.
 */
import type { DestinationCopyMap } from "./types";

/** Shared 7-step business-plan snapshot (index-aligned with `businessPlanSnapshot`). */
const businessPlan = [
  "Hipótese de entrada no mercado",
  "Registros necessários",
  "Aderência de produto / categoria",
  "Opções de rota para o mercado",
  "Premissas de parceiro / distribuidor",
  "Plano de readiness dos primeiros 90 dias",
  "Considerações de execução e financiamento",
];

export const ptBRDestinations: DestinationCopyMap = {
  /* --------------------------------------------------------- Brazil (local) */
  brazil: {
    originLabel: "Brasil",
    targetLabel: "Brasil",
    heroEyebrow: "Mercado local · Brasil",
    heroTitle: "Negócios públicos no Brasil, com decisões melhores.",
    heroSubtitle:
      "O Brasil tem um dos maiores ambientes de compras públicas do mundo — entre compradores federais, estaduais, municipais, estatais e do sistema de serviços sociais. O difícil é decidir o que vale a pena perseguir e organizar a readiness antes dos prazos.",
    readinessPriority: "Registro + disciplina de proposta",
    firstStep: "Supplier Passport + qualificação de oportunidades",
    metaTitle: "Negócios públicos no Brasil — GovDecision",
    metaDescription:
      "Veja como fornecedores podem abordar as compras públicas brasileiras com melhor qualificação de oportunidades, readiness e workflows de decisão.",
    metrics: [
      { label: "População", value: "≈ 212 milhões", note: "World Bank · 2024" },
      { label: "PIB", value: "≈ US$2.18 trilhões", note: "World Bank · 2024" },
      {
        label: "Compras públicas",
        value: "≈ 12–14% do PIB",
        note: "Estimativa · contexto OECD",
      },
      { label: "Moeda", value: "Real brasileiro (BRL)" },
      { label: "Idioma principal", value: "Português" },
      {
        label: "Acesso a compras",
        value: "PNCP · Compras.gov.br",
        note: "Portal federal + nacional",
      },
    ],
    marketOverview:
      "As compras públicas brasileiras são grandes e contínuas, mas fragmentadas entre níveis de comprador e modalidades. Para o fornecedor, a oportunidade é real — e o ruído também. A disciplina que vence é qualificar o que vale a pena perseguir e, então, organizar os documentos e as decisões por trás de cada licitação antes que o prazo force uma decisão apressada.",
    whyItMatters: [
      "Compradores federais, estaduais, municipais, estatais e do sistema de serviços sociais seguem ritmos e regras próprios.",
      "A regularidade fiscal e os documentos de habilitação precisam estar sempre em dia, não montados na última hora.",
      "A vantagem está na disciplina de participar / não participar — perseguir menos oportunidades, com melhor aderência e readiness completa.",
    ],
    checklist: [
      {
        item: "Perfil do fornecedor",
        description:
          "Um perfil claro e estruturado do que sua empresa vende e consegue comprovar.",
      },
      {
        item: "Registro empresarial e fiscal (CNPJ, regularidade)",
        description:
          "CNPJ ativo e prova atual de regularidade fiscal, trabalhista e previdenciária.",
      },
      {
        item: "Cadastro nos portais de compras (SICAF / PNCP)",
        description:
          "O SICAF é padrão para compradores federais, com cadastros em portais que variam conforme o nível do comprador.",
      },
      {
        item: "Aderência à categoria / objeto",
        description:
          "Confirme que seus produtos correspondem ao objeto da licitação e às especificações técnicas exigidas.",
      },
      {
        item: "Documentos técnicos e de habilitação",
        description:
          "Atestados de capacidade e documentos de qualificação exigidos por cada edital.",
      },
      {
        item: "Certificações de setor / produto",
        description:
          "A aplicação de certificações específicas depende do objeto e das regras do comprador.",
      },
      {
        item: "Garantia / caução (garantia)",
        description:
          "Alguns editais exigem garantias de proposta ou de execução; valide por oportunidade.",
      },
      {
        item: "Entidade local",
        description:
          "Fornecedores nacionais já operam como pessoa jurídica brasileira.",
      },
      {
        item: "Readiness de execução e entrega",
        description:
          "Planeje capacidade, entrega e obrigações pós-adjudicação antes de participar.",
      },
    ],
    commonBlockers: [
      "Ver a oportunidade tarde demais para se preparar",
      "Certidões de regularidade fiscal ausentes ou vencidas",
      "Cadastro incompleto no SICAF ou nos portais",
      "Documentos de habilitação que não atendem ao edital",
      "Lacunas de garantia ou de capital de giro",
      "Falta de disciplina de participar / não participar",
      "Subestimar a execução pós-adjudicação",
    ],
    routeOptions: [
      "Participação direta como fornecedor brasileiro",
      "Consórcio para objetos maiores",
      "Fornecimento ou subcontratação para licitantes principais",
    ],
    govDecisionRole: [
      "O Supplier Passport transforma dados dispersos da empresa em um perfil estruturado.",
      "A Qualificação de Oportunidades pontua a aderência e filtra o que não vale a pena perseguir.",
      "A extração de requisitos assistida por IA lê o edital e revela o que ele exige.",
      "A detecção de bloqueios sinaliza cedo registros, documentos ou certidões em falta.",
      "O Readiness Workspace transforma lacunas em responsáveis e datas antes do prazo.",
      "Um memorando de decisão go / no-go registra por que você avançou — ou optou por preparar primeiro.",
    ],
    recommendedRoute: "Proposta direta + readiness",
    decision: "Avançar com ressalvas",
    sax: {
      intro:
        "Para um caminho local no Brasil, a GovDecision faz a maior parte do trabalho. A Sax Global é opcional aqui — útil principalmente para estruturar uma entidade, organizar um plano de crescimento ou testar uma disputa maior.",
      role: [
        "Contexto de constituição e estruturação de negócio onde ajudar",
        "Planejamento de crescimento para uma disputa maior no setor público",
        "Revisão opcional de uma decisão de proposta de alto valor",
      ],
      score: {
        readinessGap: "Médio",
        routeComplexity: "Baixa–Média",
        partnerDependency: "Baixa",
        executionRisk: "Médio",
        firstMove: "Reforçar registro + disciplina de proposta",
      },
      businessPlan,
    },
    cta: {
      eyebrow: "Comece a readiness",
      title: "Comece sua readiness para o setor público neste mercado.",
      subtitle:
        "Monte seu Supplier Passport, qualifique oportunidades reais e traga disciplina para cada licitação pública brasileira.",
      primaryLabel: "Iniciar readiness na GovDecision",
      secondaryLabel: "Abrir o app GovDecision",
    },
  },

  /* -------------------------------------------------- United States (local) */
  "united-states": {
    originLabel: "Estados Unidos",
    targetLabel: "Estados Unidos",
    heroEyebrow: "Mercado local · Estados Unidos",
    heroTitle: "Oportunidades públicas nos EUA exigem mais do que alertas.",
    heroSubtitle:
      "O setor público dos EUA é um dos maiores ambientes de compra governamental do mundo. A oportunidade é significativa — mas registro, aderência de categoria, regras do comprador e escolhas de rota para o mercado precisam de estrutura, não apenas de um feed de avisos.",
    readinessPriority: "Registro + aderência de categoria",
    firstStep: "Supplier Passport + revisão de readiness",
    metaTitle: "Negócios públicos nos Estados Unidos — GovDecision",
    metaDescription:
      "Veja como fornecedores podem abordar as compras públicas dos EUA com melhor qualificação de oportunidades, readiness de registro e workflows de decisão.",
    metrics: [
      {
        label: "População",
        value: "≈ 340 milhões",
        note: "U.S. Census Bureau · 2024",
      },
      { label: "PIB", value: "≈ US$29.2 trilhões", note: "U.S. BEA · 2024" },
      {
        label: "Compromissos contratuais federais",
        value: "≈ US$755 bilhões",
        note: "GAO · FY2024",
      },
      { label: "Moeda", value: "Dólar americano (USD)" },
      { label: "Idioma principal", value: "Inglês" },
      {
        label: "Acesso a compras",
        value: "Registro no SAM.gov",
        note: "Porta de entrada federal",
      },
    ],
    marketOverview:
      "A compra do setor público dos EUA é enorme, mas recompensa fornecedores registrados, posicionados nas categorias certas e disciplinados sobre quais oportunidades perseguem. Só os compromissos contratuais federais somam centenas de bilhões por ano — estados, municípios e educação acrescentam muito mais. Estrutura supera volume de alertas.",
    whyItMatters: [
      "Um registro válido no SAM.gov e um Unique Entity ID são a porta de entrada para contratos federais.",
      "O posicionamento de categoria (NAICS / PSC) e o histórico de desempenho definem quais oportunidades você consegue realmente vencer.",
      "Regras de set-aside e de compliance variam por comprador — precisam ser lidas, não presumidas.",
    ],
    checklist: [
      {
        item: "Perfil do fornecedor",
        description:
          "Um capability statement claro do que você vende e consegue comprovar.",
      },
      {
        item: "Registro da entidade (SAM.gov UEI)",
        description:
          "Um registro ativo no SAM.gov com Unique Entity ID é exigido para receber contratos federais.",
      },
      {
        item: "Readiness fiscal e financeira",
        description:
          "Tax ID, registros financeiros e contabilidade que resistam a auditoria.",
      },
      {
        item: "Aderência de categoria (NAICS / PSC)",
        description:
          "Mapeie sua oferta para os códigos certos e confirme demanda real do comprador.",
      },
      {
        item: "Certificações e status de set-aside",
        description:
          "A elegibilidade a set-aside de pequenas empresas ou socioeconômico depende da sua empresa; valide.",
      },
      {
        item: "Documentos técnicos e histórico de desempenho",
        description:
          "Um capability statement e evidências de desempenho anterior fortalecem propostas competitivas.",
      },
      {
        item: "Compliance (representations do FAR)",
        description:
          "As representations e certifications federais precisam ser preenchidas e mantidas atualizadas.",
      },
      {
        item: "Bonding / garantias",
        description:
          "Bonds de proposta, de execução ou de pagamento dependem do tipo e do porte do contrato.",
      },
      {
        item: "Entidade local",
        description:
          "Fornecedores nacionais já têm uma entidade nos EUA; a entrada estrangeira é diferente.",
      },
      {
        item: "Readiness de execução e entrega",
        description:
          "Planeje entrega, equipe e compliance pós-adjudicação antes de avançar.",
      },
    ],
    commonBlockers: [
      "Ver a oportunidade tarde demais",
      "Sem registro ativo no SAM.gov",
      "Posicionamento de NAICS / PSC errado ou ausente",
      "Histórico de desempenho fraco ou inexistente",
      "Representations e compliance desatualizados",
      "Lacunas de bonding ou de capital de giro",
      "Rota para o mercado pouco clara para o comprador",
    ],
    routeOptions: [
      "Participação direta como entidade registrada",
      "Teaming ou subcontratação com um prime",
      "Revenda / canal onde fizer sentido",
      "Elegibilidade a set-aside quando aplicável",
    ],
    govDecisionRole: [
      "O Supplier Passport consolida seu perfil, códigos e histórico de desempenho.",
      "Os Country Packs aplicam os caminhos de registro dos EUA, as regras do comprador e a lógica de elegibilidade.",
      "A Qualificação de Oportunidades pontua a aderência para você perseguir a demanda certa de NAICS / PSC.",
      "A extração de requisitos assistida por IA lê as solicitations e revela as obrigações.",
      "A detecção de bloqueios sinaliza cedo lacunas de registro, compliance e bonding.",
      "Um memorando go / no-go e o Deal Room mantêm a decisão estruturada e auditável.",
    ],
    recommendedRoute: "Registrar + preparar",
    decision: "Preparar e, então, avançar",
    sax: {
      intro:
        "Para um caminho doméstico nos EUA, a GovDecision conduz o trabalho de readiness. A Sax Global é opcional aqui — útil para estruturar crescimento, estratégia de canal ou um plano de expansão maior.",
      role: [
        "Planejamento de crescimento e de canal para expansão no setor público",
        "Contexto de estruturação para disputas maiores",
        "Revisão opcional de uma decisão de proposta de alto valor",
      ],
      score: {
        readinessGap: "Médio",
        routeComplexity: "Média",
        partnerDependency: "Baixa–Média",
        executionRisk: "Médio",
        firstMove: "Confirmar registro + aderência de categoria",
      },
      businessPlan,
    },
    cta: {
      eyebrow: "Comece a readiness",
      title: "Comece sua readiness para o setor público neste mercado.",
      subtitle:
        "Monte seu Supplier Passport, confirme o registro e qualifique as oportunidades dos EUA que valem a pena.",
      primaryLabel: "Iniciar readiness na GovDecision",
      secondaryLabel: "Abrir o app GovDecision",
    },
  },

  /* ------------------------------ Brazil → United States (cross-border) */
  "brazil-to-united-states": {
    originLabel: "Brasil",
    targetLabel: "Estados Unidos",
    heroEyebrow: "Caminho transfronteiriço · Brasil → Estados Unidos",
    heroTitle:
      "Um caminho prático para fornecedores brasileiros entrarem nos negócios públicos dos EUA.",
    heroSubtitle:
      "Os negócios públicos dos EUA podem ser atraentes para fornecedores brasileiros — mas a readiness transfronteiriça importa. Caminho de registro, rota local, documentação, capacidade de exportação, premissas de entrega e estrutura de suporte precisam ser compreendidos antes de avançar.",
    readinessPriority: "Registro + validação de rota",
    firstStep: "Supplier Passport + revisão da Sax Global",
    metaTitle: "Negócios públicos do Brasil para os Estados Unidos — GovDecision",
    metaDescription:
      "Explore como fornecedores brasileiros podem avaliar um caminho para os negócios públicos dos EUA com os workflows de readiness da GovDecision e o suporte de acesso a mercado da Sax Global.",
    metrics: [
      {
        label: "População-alvo",
        value: "≈ 340 milhões",
        note: "U.S. Census Bureau · 2024",
      },
      { label: "PIB-alvo", value: "≈ US$29.2 trilhões", note: "U.S. BEA · 2024" },
      {
        label: "Compromissos contratuais federais",
        value: "≈ US$755 bilhões",
        note: "GAO · FY2024",
      },
      { label: "Moeda", value: "Dólar americano (USD)" },
      { label: "Idioma de trabalho", value: "Inglês" },
      {
        label: "Tipo de mercado",
        value: "Entrada transfronteiriça",
        note: "Registro + rota",
      },
    ],
    marketOverview:
      "O mercado dos EUA é grande o suficiente para justificar um olhar sério, mas entrar nele a partir do Brasil é uma questão de readiness antes de ser uma questão de vendas. O caminho realista passa por uma abordagem clara de registro, uma rota para o mercado crível e premissas honestas de entrega e compliance — validadas antes de comprometer recursos.",
    whyItMatters: [
      "O registro no sistema dos EUA, e como você o estrutura, define tudo o que vem depois.",
      "A rota para o mercado — direta, representante, distribuidor ou entidade local — depende da categoria e do comprador.",
      "Documentação, normas e condições de entrega geralmente precisam de localização, não apenas de tradução.",
    ],
    checklist: [
      {
        item: "Perfil do fornecedor e readiness de exportação",
        description:
          "Um perfil estruturado mais uma visão honesta da sua capacidade de exportação e entrega.",
      },
      {
        item: "Caminho de registro nos EUA (SAM.gov UEI)",
        description:
          "Um registro no SAM.gov é exigido para receber contratos federais; como você se registra depende da sua estrutura.",
      },
      {
        item: "Exigência de empresa local",
        description:
          "Se uma entidade nos EUA é necessária depende do comprador, da categoria e da modalidade — valide por oportunidade.",
      },
      {
        item: "Representante / distribuidor / parceiro local",
        description:
          "Muitas vezes útil e, às vezes, efetivamente exigido pela rota ou pelo contexto do comprador.",
      },
      {
        item: "Estoque local / capacidade de entrega",
        description:
          "Depende do produto, das condições de entrega e das expectativas de prazo.",
      },
      {
        item: "Exigência de produção / conteúdo local",
        description:
          "Regras de conteúdo local não são universais; valide as regras do comprador e da categoria antes de presumir.",
      },
      {
        item: "Readiness fiscal, bancária e de pagamento",
        description:
          "Faturamento transfronteiriço, banco e condições de pagamento precisam ser definidos com antecedência.",
      },
      {
        item: "Localização / tradução de documentos",
        description:
          "Os documentos geralmente precisam de adaptação ao inglês e ao formato dos EUA, não apenas de tradução.",
      },
      {
        item: "Normas e certificações",
        description:
          "Normas ou certificações dos EUA podem se aplicar dependendo da categoria.",
      },
      {
        item: "Compliance (representations do FAR)",
        description:
          "As representations e certifications federais precisam ser preenchidas e mantidas atualizadas.",
      },
      {
        item: "Garantia / bonding",
        description:
          "Bonds de proposta, de execução ou de pagamento dependem do tipo e do porte do contrato.",
      },
      {
        item: "Execução e obrigações pós-adjudicação",
        description:
          "Planeje entrega, suporte e obrigações de compliance antes de avançar.",
      },
    ],
    commonBlockers: [
      "Ver a oportunidade tarde demais",
      "Caminho de registro pouco claro no sistema dos EUA",
      "Incerteza sobre parceiro local ou representação",
      "Lacunas de tradução e de localização para os EUA",
      "Premissas de estoque, prazo e entrega",
      "Lacunas de garantia ou de capital de giro",
      "Não compreender as obrigações de execução e compliance",
    ],
    routeOptions: [
      "Participação direta após o registro",
      "Representante ou distribuidor local",
      "Subsidiária ou filial nos EUA",
      "Teaming ou subcontratação com um prime dos EUA",
      "Preparar primeiro, depois entrar",
    ],
    govDecisionRole: [
      "O Supplier Passport captura a readiness de exportação e o que você consegue entregar com credibilidade.",
      "Os Country Packs aplicam os caminhos de registro dos EUA, as regras do comprador e a lógica de rota.",
      "A extração de requisitos assistida por IA revela obrigações escondidas nas solicitations.",
      "A detecção de bloqueios sinaliza lacunas de registro, localização e entrega antes que custem caro.",
      "A pontuação de aderência e readiness mostra se vale avançar agora ou preparar primeiro.",
      "Um memorando go / no-go e o Deal Room mantêm uma decisão transfronteiriça auditável.",
    ],
    recommendedRoute: "Preparar + validar parceiro",
    decision: "Avançar com ressalvas",
    sax: {
      intro:
        "A entrada transfronteiriça é onde o software encontra o mundo real. A Sax Global apoia a jornada de acesso a mercado — estratégia de caminho de registro, discussões de rota para o mercado e de parceiros, contexto de constituição de negócio e orientação prática de execução onde se aplica.",
      role: [
        "Estratégia de caminho de registro e de entrada no sistema dos EUA",
        "Discussões de rota para o mercado e de parceiro / distribuidor",
        "Contexto de constituição de negócio para uma presença nos EUA onde se aplica",
        "Orientação prática de execução transfronteiriça e de financiamento",
      ],
      score: {
        readinessGap: "Médio",
        routeComplexity: "Alta",
        partnerDependency: "Média",
        executionRisk: "Médio",
        firstMove: "Validar caminho de registro + rota local",
      },
      businessPlan,
    },
    cta: {
      eyebrow: "Planeje o caminho",
      title: "Planeje este caminho de entrada no mercado com a Sax Global.",
      subtitle:
        "Valide o caminho de registro, a rota para o mercado e as lacunas de readiness antes de comprometer recursos nos negócios públicos dos EUA.",
      primaryLabel: "Falar com a Sax Global",
      secondaryLabel: "Explorar a GovDecision",
    },
  },

  /* ----------------------- Brazil → UN & World Bank (multilateral) */
  "brazil-to-un-world-bank": {
    originLabel: "Brasil",
    targetLabel: "ONU e Banco Mundial",
    heroEyebrow: "Caminho multilateral · Brasil → ONU e Banco Mundial",
    heroTitle: "Prepare-se para compras multilaterais com mais readiness.",
    heroSubtitle:
      "Agências da ONU e projetos financiados pelo Banco Mundial compram uma ampla gama de bens e serviços no mundo todo. Para um fornecedor brasileiro, o caminho começa com registro, elegibilidade e documentação — e depois qualificar quais editais realmente valem a pena.",
    readinessPriority: "Registro + elegibilidade",
    firstStep: "Supplier Passport + registro no UNGM",
    metaTitle: "Compras da ONU e do Banco Mundial a partir do Brasil — GovDecision",
    metaDescription:
      "Explore como fornecedores brasileiros podem se preparar para as compras da ONU e do Banco Mundial com os workflows de readiness da GovDecision e o suporte de acesso a mercado da Sax Global.",
    metrics: [
      {
        label: "Compras do sistema ONU",
        value: "≈ US$24.9 bilhões",
        note: "UNOPS ASR · 2023",
      },
      {
        label: "Organizações da ONU que reportam",
        value: "32 organizações",
        note: "UNOPS ASR · 2023",
      },
      {
        label: "Contratos financiados pelo Banco Mundial",
        value: "≈ US$15 bilhões/ano",
        note: "GAO · média FY2013–2022",
      },
      { label: "Moeda comum", value: "Dólar americano (USD)" },
      {
        label: "Idiomas de trabalho",
        value: "Inglês +",
        note: "Idiomas de trabalho da ONU",
      },
      {
        label: "Acesso a registro",
        value: "UNGM · projetos do Banco Mundial",
      },
    ],
    marketOverview:
      "As compras multilaterais são um jogo diferente das compras públicas locais. Agências da ONU e projetos financiados pelo Banco Mundial conduzem processos estruturados e guiados por elegibilidade, com seus próprios sistemas de registro, regras de integridade e códigos de categoria. O trabalho de readiness — registro, triagem de elegibilidade, documentação — vem primeiro, e qualificar os editais certos vem depois.",
    whyItMatters: [
      "O registro passa por sistemas como o UNGM, enquanto os editais do Banco Mundial são conduzidos pelos governos mutuários sob as regras do Banco.",
      "Os requisitos de elegibilidade, integridade e antifraude são rígidos e verificados, não dispensados.",
      "As expectativas de categoria e de normas diferem por agência e edital — precisam ser validadas, não presumidas.",
    ],
    checklist: [
      {
        item: "Perfil do fornecedor e elegibilidade",
        description:
          "Um perfil estruturado mais uma visão clara da sua elegibilidade para editais multilaterais.",
      },
      {
        item: "Registro no UNGM",
        description:
          "O registro no United Nations Global Marketplace abre acesso a muitas agências da ONU.",
      },
      {
        item: "Readiness de fornecedor para projetos do Banco Mundial",
        description:
          "Editais financiados pelo Banco são conduzidos pelos governos mutuários sob regras do Banco; o processo varia por projeto.",
      },
      {
        item: "Triagem de elegibilidade e de exclusão",
        description:
          "Confirme que você não está em listas de sanções / exclusão e que atende aos critérios de elegibilidade.",
      },
      {
        item: "Aderência de categoria (UNSPSC)",
        description:
          "Mapeie sua oferta para os códigos UNSPSC usados nos editais da ONU.",
      },
      {
        item: "Documentação e situação financeira",
        description:
          "Registros financeiros e documentos de qualificação exigidos pelo edital.",
      },
      {
        item: "Certificações / normas",
        description:
          "Certificações de qualidade, sustentabilidade ou setor podem fortalecer ou ser exigidas conforme o edital.",
      },
      {
        item: "Presença local / capacidade de entrega",
        description:
          "Depende de onde os bens ou serviços são entregues e dos Incoterms usados.",
      },
      {
        item: "Readiness de idioma / documentos",
        description:
          "O inglês é comum; alguns editais usam outros idiomas de trabalho da ONU.",
      },
      {
        item: "Garantias de execução",
        description:
          "Garantias de proposta ou de execução dependem do edital e do valor do contrato.",
      },
      {
        item: "Compliance de ética / antifraude",
        description:
          "ONU e Banco Mundial aplicam requisitos rígidos de integridade e anticorrupção.",
      },
      {
        item: "Planejamento de execução e entrega",
        description:
          "Planeje logística, entrega e obrigações antes de perseguir um edital.",
      },
    ],
    commonBlockers: [
      "Ver o edital tarde demais",
      "Registro incompleto no UNGM ou como fornecedor",
      "Problemas de elegibilidade ou de lista de exclusão",
      "Descompasso de categoria / UNSPSC",
      "Subestimar documentação e normas",
      "Lacunas de entrega, logística e Incoterms",
      "Lacunas de compliance de integridade / antifraude",
    ],
    routeOptions: [
      "Participação direta em editais via UNGM",
      "Editais conduzidos por mutuários do Banco Mundial",
      "Parceiro ou agente local no país de entrega",
      "Consórcio para contratos maiores",
      "Preparar o registro primeiro",
    ],
    govDecisionRole: [
      "O Supplier Passport organiza seu perfil, elegibilidade e documentação.",
      "A lógica de país / mercado aplica as regras de registro e elegibilidade da ONU e do Banco Mundial.",
      "A Qualificação de Oportunidades pontua quais editais valem o esforço.",
      "A extração de requisitos assistida por IA lê os editais e revela o que eles exigem.",
      "A detecção de bloqueios sinaliza cedo lacunas de registro, elegibilidade e integridade.",
      "Um memorando go / no-go registra a decisão de avançar — ou preparar primeiro.",
    ],
    recommendedRoute: "Registrar + qualificar",
    decision: "Preparar primeiro",
    sax: {
      intro:
        "O acesso multilateral é uma jornada estruturada e guiada por elegibilidade. A Sax Global apoia a estratégia de registro e elegibilidade, as discussões de parceiro e de rota de entrega e o contexto prático de execução para trabalhos financiados pela ONU e pelo Banco Mundial.",
      role: [
        "Estratégia de registro e elegibilidade para os sistemas da ONU e do Banco Mundial",
        "Discussões de parceiro e de rota de entrega no país-alvo",
        "Contexto de integridade e documentação para editais multilaterais",
        "Orientação prática de execução e financiamento onde se aplica",
      ],
      score: {
        readinessGap: "Médio–Alto",
        routeComplexity: "Alta",
        partnerDependency: "Média",
        executionRisk: "Médio–Alto",
        firstMove: "Validar registro + elegibilidade",
      },
      businessPlan,
    },
    cta: {
      eyebrow: "Planeje o caminho",
      title: "Planeje este caminho multilateral com a Sax Global.",
      subtitle:
        "Fique pronto em registro e elegibilidade para as compras da ONU e do Banco Mundial e, então, qualifique os editais que valem a pena.",
      primaryLabel: "Falar com a Sax Global",
      secondaryLabel: "Explorar a GovDecision",
    },
  },

  /* ------------------------------ United States → Brazil (cross-border) */
  "united-states-to-brazil": {
    originLabel: "Estados Unidos",
    targetLabel: "Brasil",
    heroEyebrow: "Acesso a mercado transfronteiriço",
    heroTitle:
      "Um caminho prático para fornecedores dos EUA abordarem as compras públicas brasileiras.",
    heroSubtitle:
      "O Brasil pode ser um mercado relevante no setor público, mas fornecedores estrangeiros precisam de mais do que alertas de oportunidade. A GovDecision ajuda a estruturar a decisão, enquanto a Sax Global ajuda a avaliar o caminho de acesso a mercado.",
    readinessPriority: "Rota local + validação de documentação",
    firstStep: "Revisão de acesso a mercado + Supplier Passport",
    metaTitle: "Negócios públicos dos Estados Unidos para o Brasil — GovDecision",
    metaDescription:
      "Explore como fornecedores dos EUA podem avaliar um caminho para as compras públicas brasileiras com os workflows de readiness da GovDecision e o suporte de acesso a mercado da Sax Global.",
    metrics: [
      {
        label: "População-alvo",
        value: "≈ 212 milhões",
        note: "World Bank · 2024",
      },
      {
        label: "PIB-alvo",
        value: "≈ US$2.18 trilhões",
        note: "World Bank · 2024",
      },
      {
        label: "Compras públicas",
        value: "≈ 12–14% do PIB",
        note: "Estimativa · contexto OECD",
      },
      { label: "Moeda", value: "Real brasileiro (BRL)" },
      { label: "Idioma principal", value: "Português" },
      {
        label: "Tipo de mercado",
        value: "Entrada transfronteiriça",
        note: "Rota local + documentação",
      },
    ],
    marketOverview:
      "O Brasil opera um dos maiores ambientes de compras públicas do mundo — compradores federais, estaduais e municipais, empresas estatais e serviços sociais autônomos (o contexto do Sistema S onde se aplica) — em um portal nacional e em muitos portais específicos de comprador. Para um fornecedor dos EUA a oportunidade é real, mas a complexidade também: registro e documentação, operações em português, considerações de rota local e de representante, e questões fiscais, de importação e de execução que precisam ser validadas antes de avançar. Os requisitos variam por comprador, categoria, modalidade, fonte e oportunidade.",
    whyItMatters: [
      "Compradores e fontes são fragmentados entre contextos federal, estadual, municipal, estatal e do Sistema S — cada um com seus próprios portais e regras.",
      "As operações ocorrem em português, e a documentação geralmente precisa de localização mais um caminho de registro local validado, não apenas de tradução.",
      "A rota para o mercado e as premissas fiscais, de importação e de entrega devem ser validadas antes de comprometer recursos.",
    ],
    checklist: [
      {
        item: "Supplier Passport",
        description:
          "Um perfil claro e estruturado do que sua empresa vende e consegue comprovar no exterior.",
      },
      {
        item: "Aderência de produto / categoria",
        description:
          "Confirme que sua oferta corresponde à demanda real dos compradores brasileiros e aos objetos de licitação.",
      },
      {
        item: "Documentação em português",
        description:
          "Editais e comunicação ocorrem em português; os documentos geralmente precisam de localização, não apenas de tradução.",
      },
      {
        item: "Monitoramento das fontes de compras brasileiras",
        description:
          "PNCP, Compras.gov.br e portais específicos de comprador trazem oportunidades diferentes.",
      },
      {
        item: "Caminho de registro local",
        description:
          "Como um fornecedor estrangeiro se registra e se habilita depende do comprador, da categoria e da modalidade — valide antes de presumir.",
      },
      {
        item: "Contexto de representação fiscal / tributária",
        description:
          "As necessidades de representação fiscal e tributária dependem da rota e da natureza do fornecimento.",
      },
      {
        item: "Estratégia de representante / distribuidor local",
        description:
          "Muitas vezes útil e, às vezes, efetivamente exigida pela rota ou pelo contexto do comprador.",
      },
      {
        item: "Viabilidade de importação / logística",
        description:
          "A viabilidade de importação, alfândega e entrega depende do produto e das condições.",
      },
      {
        item: "Exigência de estoque local",
        description:
          "Depende do produto, das condições de entrega e das expectativas do comprador.",
      },
      {
        item: "Exigência de produção / conteúdo local",
        description:
          "Regras de conteúdo local não são universais; valide as regras da categoria e do comprador antes de presumir.",
      },
      {
        item: "Certificação / documentação técnica",
        description:
          "Certificações de setor ou documentação técnica podem se aplicar dependendo do objeto e do comprador.",
      },
      {
        item: "Caução / garantia / condições de pagamento",
        description:
          "Garantias, cauções e prazos de pagamento variam por edital — valide por oportunidade.",
      },
      {
        item: "Readiness de execução e pós-adjudicação",
        description:
          "Planeje entrega, suporte e obrigações pós-adjudicação antes de avançar.",
      },
    ],
    commonBlockers: [
      "Entender mal a fragmentação de compradores e fontes do Brasil",
      "Presumir que toda oportunidade é acessível do exterior",
      "Lacunas de documentação e comunicação em português",
      "Complexidade fiscal e de importação",
      "Uma rota local pouco clara",
      "Falta de estratégia de representante ou distribuidor",
      "Premissas de entrega e estoque locais",
      "Surpresas com garantias e prazos de pagamento",
      "Certificações específicas da categoria em falta",
      "Falta de disciplina de participar / não participar",
    ],
    routeOptions: [
      "Representante local ou agente comercial",
      "Distribuidor ou parceiro de canal",
      "Subsidiária brasileira ou entidade local",
      "Teaming ou subcontratação com um fornecedor local",
      "Preparar primeiro, depois entrar",
    ],
    govDecisionRole: [
      "O Supplier Passport transforma dados dispersos da empresa dos EUA em um perfil estruturado e reutilizável.",
      "A lógica de Country Pack aplica as regras de comprador, fonte e registro do Brasil à sua situação.",
      "A Qualificação de Oportunidades pontua a aderência e lê o comprador e a fonte por trás de cada aviso.",
      "A extração de requisitos assistida por IA revela o que um edital exige, em termos claros.",
      "A detecção de bloqueios sinaliza cedo lacunas de documentação, registro e rota local.",
      "Um memorando go / no-go e o Deal Room mantêm uma decisão transfronteiriça auditável e pronta para a execução pós-adjudicação.",
    ],
    recommendedRoute: "Validar rota + documentos locais",
    decision: "Preparar e, então, avançar",
    sax: {
      intro:
        "A entrada transfronteiriça no Brasil é onde o software encontra o mundo real. A Sax Global apoia a jornada de acesso a mercado — contexto de entrada no Brasil, validação de rota local e de caminho de registro, estratégia de parceiro e distribuidor, readiness de documentação e operacional, e discussão prática de execução transfronteiriça.",
      role: [
        "Planejamento de acesso a mercado e contexto de entrada no Brasil",
        "Validação de rota local e de caminho de registro",
        "Discussão de estratégia de parceiro / distribuidor",
        "Contexto de documentação e readiness operacional",
        "Discussão de execução transfronteiriça e de rota comercial",
      ],
      score: {
        readinessGap: "Médio",
        routeComplexity: "Alta",
        partnerDependency: "Média–Alta",
        executionRisk: "Médio",
        firstMove: "Validar rota no Brasil + contexto de documentação local",
      },
      businessPlan,
    },
    cta: {
      eyebrow: "Planeje o caminho",
      title: "Planeje este caminho de entrada no mercado com a Sax Global.",
      subtitle:
        "Valide a rota no Brasil, o contexto de documentação local e as lacunas de readiness antes de comprometer recursos nas compras públicas brasileiras.",
      primaryLabel: "Falar com a Sax Global",
      secondaryLabel: "Explorar a GovDecision",
    },
  },

  /* -------------------------------------- Brazil → Paraguay (regional) */
  "brazil-to-paraguay": {
    originLabel: "Brasil",
    targetLabel: "Paraguai",
    heroEyebrow: "Acesso a mercado regional",
    heroTitle:
      "Um caminho regional para fornecedores brasileiros explorarem as compras públicas do Paraguai.",
    heroSubtitle:
      "O Paraguai pode ser um caminho prático de expansão regional para fornecedores brasileiros, mas a rota ainda exige validação de mercado, documentação, contexto local e planejamento de execução.",
    readinessPriority: "Validação do country pack + rota local",
    firstStep: "Revisão de readiness + planejamento de acesso a mercado regional",
    metaTitle: "Negócios públicos do Brasil para o Paraguai — GovDecision",
    metaDescription:
      "Explore como fornecedores brasileiros podem avaliar um caminho regional para as compras públicas do Paraguai com os workflows de readiness da GovDecision e o suporte de acesso a mercado da Sax Global.",
    metrics: [
      {
        label: "População-alvo",
        value: "≈ 6.9 milhões",
        note: "World Bank · 2024",
      },
      {
        label: "PIB-alvo",
        value: "≈ US$44.5 bilhões",
        note: "World Bank · 2024",
      },
      {
        label: "Compras públicas",
        value: "Validação pendente",
        note: "DNCP · volume consolidado não confirmado",
      },
      { label: "Moeda", value: "Guarani paraguaio (PYG)" },
      { label: "Idioma principal", value: "Espanhol · Guarani cooficial" },
      {
        label: "Acesso a compras",
        value: "DNCP · contrataciones.gov.py",
        note: "Portal nacional de compras",
      },
    ],
    marketOverview:
      "O Paraguai pode ser um caminho prático de expansão regional para fornecedores brasileiros — proximidade geográfica, familiaridade com o Mercosul e com negócios regionais e uma vizinhança compartilhada reduzem parte do atrito. Mas ainda é um mercado estrangeiro: as operações ocorrem em espanhol, os portais e regras de compras públicas precisam ser validados, as necessidades de representação ou parceiro local dependem da oportunidade, e as premissas de entrega, logística, documentação e compliance precisam ser verificadas. O Paraguai deve ser avaliado corredor a corredor e categoria a categoria, com validação de fontes e revisão das premissas de rota local antes de avançar.",
    whyItMatters: [
      "A proximidade geográfica e a familiaridade com o Mercosul podem reduzir o atrito, mas não eliminam a complexidade das compras.",
      "As operações ocorrem em espanhol (o guarani é cooficial), e a documentação pode exigir tradução ou legalização dependendo da oportunidade.",
      "As compras passam pelo sistema nacional da DNCP; fontes, regras de comprador e premissas de rota local devem ser validadas corredor a corredor.",
    ],
    checklist: [
      {
        item: "Supplier Passport",
        description:
          "Um perfil claro e estruturado do que sua empresa vende e consegue comprovar em um novo mercado.",
      },
      {
        item: "Aderência de produto / categoria",
        description:
          "Confirme que sua oferta corresponde à demanda real dos compradores paraguaios e aos objetos de licitação.",
      },
      {
        item: "Documentação em espanhol",
        description:
          "Editais e comunicação ocorrem em espanhol; os documentos geralmente precisam de localização, não apenas de tradução.",
      },
      {
        item: "Validação das fontes de compras paraguaias",
        description:
          "Valide o sistema da DNCP e quaisquer fontes específicas de comprador antes de confiar nelas.",
      },
      {
        item: "Requisitos de registro local",
        description:
          "Como um fornecedor estrangeiro se registra e se qualifica depende do comprador, da categoria e da modalidade — valide por oportunidade.",
      },
      {
        item: "Estratégia de representante / distribuidor local",
        description:
          "Muitas vezes útil e, às vezes, efetivamente exigida pela rota ou pelo contexto do comprador.",
      },
      {
        item: "Exigência de empresa local",
        description:
          "Se uma empresa ou presença local é necessária depende da oportunidade — valide antes de presumir.",
      },
      {
        item: "Exigência de estoque local",
        description:
          "Depende das condições de entrega e das expectativas de prazo do comprador.",
      },
      {
        item: "Exigência de produção / conteúdo local",
        description:
          "Regras de conteúdo local não são universais; valide as regras do comprador e da categoria antes de presumir.",
      },
      {
        item: "Viabilidade aduaneira / logística",
        description:
          "A viabilidade aduaneira, de transporte e de entrega depende do produto e das condições.",
      },
      {
        item: "Garantias / condições de pagamento",
        description:
          "Garantias de proposta ou de execução e prazos de pagamento variam por edital — valide por oportunidade.",
      },
      {
        item: "Legalização / tradução de documentos",
        description:
          "Legalização ou tradução juramentada pode se aplicar dependendo dos documentos e do edital.",
      },
      {
        item: "Readiness de execução",
        description:
          "Planeje entrega, suporte e obrigações pós-adjudicação antes de avançar.",
      },
    ],
    commonBlockers: [
      "Presumir que a proximidade regional elimina a complexidade das compras",
      "Falta de documentação em espanhol ou local",
      "Uma rota local pouco clara",
      "Falta de validação de fontes",
      "Requisitos específicos do comprador",
      "Premissas de entrega e logística",
      "Surpresas com garantias e prazos de pagamento",
      "Falta de suporte comercial local",
      "Sem checklist de readiness específico do país",
    ],
    routeOptions: [
      "Representante local ou agente comercial",
      "Distribuidor ou parceiro de canal",
      "Empresa local ou presença registrada onde exigido",
      "Fornecimento transfronteiriço sob condições validadas",
      "Preparar o country pack primeiro, depois entrar",
    ],
    govDecisionRole: [
      "O Supplier Passport transforma o perfil da sua empresa brasileira em um perfil estruturado e reutilizável.",
      "A validação do Country Pack aplica as regras da DNCP, as fontes e a lógica de registro do Paraguai.",
      "A Qualificação de Oportunidades pontua a aderência e filtra quais oportunidades valem a pena.",
      "A detecção de bloqueios sinaliza cedo lacunas de documentação, registro e rota local.",
      "A recomendação de rota mostra se vale ir direto, representar, distribuir ou preparar primeiro.",
      "Um memorando go / no-go e o Deal Room mantêm a decisão regional auditável e pronta para a execução pós-adjudicação.",
    ],
    recommendedRoute: "Validar country pack + rota",
    decision: "Preparar primeiro",
    sax: {
      intro:
        "Um movimento regional para o Paraguai é mais prático do que uma entrada transfronteiriça distante, mas ainda é uma jornada de acesso a mercado. A Sax Global apoia o planejamento de acesso a mercado regional, a validação de rota local, a discussão de caminho de parceiro e distribuidor, o contexto de documentação e readiness e um plano para os primeiros 90 dias.",
      role: [
        "Planejamento de acesso a mercado regional",
        "Validação de rota local",
        "Discussão de caminho de parceiro / distribuidor",
        "Contexto de documentação e readiness",
        "Plano para os primeiros 90 dias",
      ],
      score: {
        readinessGap: "Médio",
        routeComplexity: "Média",
        partnerDependency: "Média",
        executionRisk: "Médio",
        firstMove: "Validar country pack + premissas de rota local",
      },
      businessPlan,
    },
    cta: {
      eyebrow: "Planeje o caminho",
      title: "Planeje este caminho regional com a Sax Global.",
      subtitle:
        "Valide o country pack, as premissas de rota local e as lacunas de readiness antes de avançar nas compras públicas do Paraguai.",
      primaryLabel: "Falar com a Sax Global",
      secondaryLabel: "Explorar a GovDecision",
    },
  },
};
