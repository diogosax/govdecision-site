/**
 * Shared section labels / chrome for the Government Opportunity Briefs index +
 * detail templates, one object per locale (SITE-013).
 *
 * EN-US is the source of truth. The `{market}` token is replaced at render time
 * with the localized market name. PT-BR and ES follow the established glossary:
 * brand and product-architecture names (GovDecision, Sax Global, Supplier
 * Passport, Opportunity Qualification, Readiness Workspace, Country Packs, Deal
 * Room, Post-Award) stay in English; "readiness" and "Go/No-Go" are kept.
 */
import type { Locale } from "@/i18n/config";
import {
  briefsAiAssistNote,
  briefsAvailabilityNote,
  briefsDisclaimer,
  briefsSaxDisclaimer,
} from "@/data/opportunity-briefs";
import type { BriefChrome } from "./types";

const enUS: BriefChrome = {
  statusLabels: {
    "real-world-example": "Real-world example",
    "historical-example": "Past opportunity example",
    "market-signal": "Market signal",
    "pending-validation": "Pending validation",
  },
  pathTypeLabels: {
    local: "Local",
    "cross-border": "Cross-border",
    multilateral: "Multilateral",
    regional: "Regional",
  },
  fitSignalLabels: {
    low: "Low",
    medium: "Medium",
    "medium-high": "Medium / High",
    high: "High",
  },
  riskLabels: { low: "Low", medium: "Medium", high: "High" },
  routeLabels: {
    direct: "Direct",
    partner: "Partner",
    "prepare-first": "Prepare first",
    "direct-or-partner": "Direct / Partner",
  },
  decisionLabels: {
    "review-before-pursuit": "Review before pursuit",
    "qualify-first": "Qualify first",
    "prepare-first": "Prepare first",
    "conditional-go": "Conditional go",
  },

  indexMetaTitle: "Government Opportunity Briefs",
  indexMetaDescription:
    "Real-world public-sector opportunity examples across markets — and why suppliers need fit, readiness, blocker detection, and a clear route before pursuing.",

  indexEyebrow: "Government opportunity briefs",
  indexTitle: "Real public-sector opportunities, translated into better decisions.",
  indexSubtitle:
    "Explore examples of government demand across markets — and see why suppliers need fit analysis, readiness, blocker detection, and a clear route before pursuing.",
  indexPrimaryCta: "Explore opportunity briefs",
  indexSecondaryCta: "Start readiness",
  indexNote:
    "These are real-world public opportunity examples and market signals, not GovDecision customer case studies or guaranteed opportunities.",

  featuredEyebrow: "Featured briefs",
  featuredTitle: "Opportunity examples across the markets we cover.",
  featuredLead:
    "Each brief takes a real category of public-sector demand and shows what a supplier would need to understand before pursuing it.",
  filterAll: "All markets",
  filterLabel: "Filter by market",
  resultsNone: "No briefs match this market yet.",

  howToEyebrow: "How to read a brief",
  howToTitle: "Every brief follows the same decision logic.",
  howToLead:
    "These are not tender alerts. Each brief moves from demand signal to a structured readiness and route question.",
  howToSteps: [
    {
      title: "The opportunity",
      body: "What the buyer needs, who they are, and the official source the example is drawn from.",
    },
    {
      title: "Why it may matter",
      body: "The commercial reason an SME supplier might look at this and say it could be relevant.",
    },
    {
      title: "What makes it hard",
      body: "The requirements and blockers that decide whether pursuing is realistic — or premature.",
    },
    {
      title: "The decision",
      body: "What GovDecision would analyze, where Sax Global may matter, and the readiness questions to answer first.",
    },
  ],

  whereGovEyebrow: "Where GovDecision helps",
  whereGovTitle: "Opportunity discovery alone is not enough.",
  whereGovLead:
    "Finding the opportunity is the easy part. GovDecision turns a public demand signal into a decision you can defend.",
  whereGovPoints: [
    "Compare each opportunity against the Supplier Passport to judge fit fast.",
    "Extract requirements and detect blockers with AI assistance — before any bid effort.",
    "Estimate readiness gaps and a fit signal instead of reacting to every alert.",
    "Prepare a Go / No-Go decision brief: pursue now, prepare first, or pass.",
  ],

  whereSaxEyebrow: "Where Sax Global helps",
  whereSaxTitle: "When the path is cross-border, route matters.",
  whereSaxLead:
    "For cross-border, regional, and multilateral examples, getting to market is its own problem.",
  whereSaxPoints: [
    "Market-access planning and route validation for cross-border paths.",
    "Testing partner / distributor and local-representation assumptions where required.",
    "Practical execution context — language, logistics, currency — scoped before commitment.",
  ],

  indexFinalEyebrow: "Turn opportunity noise into a decision",
  indexFinalTitle: "See whether an opportunity is worth pursuing.",
  indexFinalSubtitle:
    "Start a readiness pass and let GovDecision help you decide what to pursue, prepare for, or pass on.",
  indexFinalPrimary: "Start readiness",
  indexFinalSecondary: "Talk to the team",

  cardCta: "Read brief",
  cardWhyLabel: "Why it matters",

  marketField: "Market",
  buyerField: "Buyer type",
  opportunityField: "Opportunity type",
  sourceField: "Public source",
  valueField: "Value",
  deadlineField: "Deadline",
  statusField: "Status",
  relatedField: "Related Market Access path",
  currencyField: "Currency",
  notSpecified: "Not specified in the public brief",

  briefsCrumb: "Opportunity Briefs",
  seeAnalysis: "See the analysis",
  mockupWindowTitle: "govdecision · Decision Brief",
  mockupTitle: "Opportunity Decision Brief",
  sample: "Sample",
  illustrative: "Illustrative",
  fitSignalLabel: "Fit signal",
  readinessRiskLabel: "Readiness risk",
  blockersDetectedLabel: "Blockers detected",
  routeLabel: "Route",
  decisionLabel: "Decision",

  snapshotEyebrow: "Opportunity snapshot",
  snapshotTitle: "What this opportunity looks like.",
  snapshotLead:
    "Only sourced or factual fields are shown. Missing fields are marked rather than invented.",

  whyEyebrow: "Why suppliers may care",
  whyTitle: "Why a supplier might look at this.",
  whyLead:
    "This example illustrates real public demand a relevant supplier could find commercially interesting.",

  hardEyebrow: "What usually makes this hard",
  hardTitle: "Requirements and blockers to validate first.",
  hardLead:
    "These vary by buyer, country, category, and opportunity, so a supplier would need to validate each one before pursuing.",
  requirementsHeading: "What it may require",
  blockersHeading: "What usually blocks suppliers",

  govEyebrow: "What GovDecision would analyze",
  govTitle: "GovDecision would not treat this as another alert.",
  govLead:
    "It would compare the opportunity against the Supplier Passport, extract requirements, detect blockers, estimate readiness gaps, and prepare a Go / No-Go decision brief.",
  aiAssistNote: briefsAiAssistNote,

  saxEyebrow: "Where Sax Global may matter",
  saxTitle: "For cross-border paths, route and execution matter.",
  saxLead:
    "Sax Global may support market-access planning, route validation, and practical execution context where applicable.",
  saxDisclaimer: briefsSaxDisclaimer,

  readinessEyebrow: "Readiness questions",
  readinessTitle: "Questions a supplier should answer before pursuing.",
  readinessLead:
    "Honest answers here decide whether to pursue now, prepare first, or pass.",

  relatedEyebrow: "Related Market Access path",
  relatedTitle: "Go deeper on this market.",
  relatedLead:
    "Each brief connects to a Market Access path with readiness, route, and a structured plan.",
  viewRelated: "Open market access path",

  sourceEyebrow: "Source & disclaimer",
  sourceTitle: "Where this example comes from.",
  sourceLead:
    "This brief is built from public, authoritative procurement sources. We keep source links stable and figures honest.",
  publicSourceLabel: "Primary public source",
  additionalRefsLabel: "Additional references",
  availabilityNote: briefsAvailabilityNote,
  disclaimerLabel: "Disclaimer",
  disclaimer: briefsDisclaimer,

  ctaEyebrow: "Turn this into a decision",
  ctaTitleLocal: "Decide whether this is worth pursuing.",
  ctaTitleCross: "Plan the route before you pursue.",
  ctaSubtitleLocal:
    "Start a GovDecision readiness pass on this kind of opportunity and get a Go / No-Go you can defend.",
  ctaSubtitleCross:
    "Cross-border paths need route validation. Talk to Sax Global about getting to this market.",
  ctaLocalLabel: "Start GovDecision readiness",
  ctaCrossLabel: "Talk to Sax Global",
  ctaSecondaryLabel: "Explore all briefs",
};

const ptBR: BriefChrome = {
  statusLabels: {
    "real-world-example": "Exemplo real",
    "historical-example": "Exemplo de oportunidade passada",
    "market-signal": "Sinal de mercado",
    "pending-validation": "A validar",
  },
  pathTypeLabels: {
    local: "Local",
    "cross-border": "Cross-border",
    multilateral: "Multilateral",
    regional: "Regional",
  },
  fitSignalLabels: {
    low: "Baixa",
    medium: "Média",
    "medium-high": "Média / Alta",
    high: "Alta",
  },
  riskLabels: { low: "Baixo", medium: "Médio", high: "Alto" },
  routeLabels: {
    direct: "Direta",
    partner: "Parceiro",
    "prepare-first": "Preparar antes",
    "direct-or-partner": "Direta / Parceiro",
  },
  decisionLabels: {
    "review-before-pursuit": "Revisar antes de avançar",
    "qualify-first": "Qualificar primeiro",
    "prepare-first": "Preparar primeiro",
    "conditional-go": "Avançar com condições",
  },

  indexMetaTitle: "Briefs de oportunidades públicas",
  indexMetaDescription:
    "Exemplos reais de oportunidades públicas entre mercados — e por que fornecedores precisam de fit, readiness, detecção de bloqueios e uma rota clara antes de avançar.",

  indexEyebrow: "Briefs de oportunidades públicas",
  indexTitle: "Oportunidades públicas reais, traduzidas em decisões melhores.",
  indexSubtitle:
    "Explore exemplos de demanda pública entre mercados — e veja por que fornecedores precisam de análise de fit, readiness, detecção de bloqueios e uma rota clara antes de avançar.",
  indexPrimaryCta: "Explorar os briefs",
  indexSecondaryCta: "Iniciar readiness",
  indexNote:
    "Estes são exemplos reais de oportunidades públicas e sinais de mercado, não cases de clientes da GovDecision nem oportunidades garantidas.",

  featuredEyebrow: "Briefs em destaque",
  featuredTitle: "Exemplos de oportunidade nos mercados que cobrimos.",
  featuredLead:
    "Cada brief parte de uma categoria real de demanda pública e mostra o que um fornecedor precisaria entender antes de avançar.",
  filterAll: "Todos os mercados",
  filterLabel: "Filtrar por mercado",
  resultsNone: "Nenhum brief para este mercado ainda.",

  howToEyebrow: "Como ler um brief",
  howToTitle: "Todo brief segue a mesma lógica de decisão.",
  howToLead:
    "Não são alertas de licitação. Cada brief vai do sinal de demanda a uma pergunta estruturada de readiness e rota.",
  howToSteps: [
    {
      title: "A oportunidade",
      body: "O que o comprador precisa, quem é, e a fonte oficial de onde o exemplo vem.",
    },
    {
      title: "Por que pode importar",
      body: "A razão comercial pela qual um fornecedor SME olharia para isso e diria que pode ser relevante.",
    },
    {
      title: "O que torna difícil",
      body: "Os requisitos e bloqueios que definem se avançar é realista — ou prematuro.",
    },
    {
      title: "A decisão",
      body: "O que a GovDecision analisaria, onde a Sax Global pode importar e as perguntas de readiness a responder primeiro.",
    },
  ],

  whereGovEyebrow: "Onde a GovDecision ajuda",
  whereGovTitle: "Descobrir a oportunidade não basta.",
  whereGovLead:
    "Encontrar a oportunidade é a parte fácil. A GovDecision transforma um sinal de demanda pública em uma decisão que você consegue defender.",
  whereGovPoints: [
    "Compara cada oportunidade com o Supplier Passport para avaliar o fit rapidamente.",
    "Extrai requisitos e detecta bloqueios com apoio de IA — antes de qualquer esforço de proposta.",
    "Estima gaps de readiness e um sinal de fit, em vez de reagir a cada alerta.",
    "Prepara um brief de decisão Go / No-Go: avançar agora, preparar primeiro ou descartar.",
  ],

  whereSaxEyebrow: "Onde a Sax Global ajuda",
  whereSaxTitle: "Quando o caminho é cross-border, a rota importa.",
  whereSaxLead:
    "Para exemplos cross-border, regionais e multilaterais, chegar ao mercado é um problema à parte.",
  whereSaxPoints: [
    "Planejamento de acesso a mercado e validação de rota para caminhos cross-border.",
    "Teste de premissas de parceiro / distribuidor e representação local quando exigido.",
    "Contexto prático de execução — idioma, logística, moeda — dimensionado antes do compromisso.",
  ],

  indexFinalEyebrow: "Transforme ruído em decisão",
  indexFinalTitle: "Veja se uma oportunidade vale a pena.",
  indexFinalSubtitle:
    "Inicie um readiness e deixe a GovDecision ajudar a decidir o que perseguir, preparar ou descartar.",
  indexFinalPrimary: "Iniciar readiness",
  indexFinalSecondary: "Falar com o time",

  cardCta: "Ler o brief",
  cardWhyLabel: "Por que importa",

  marketField: "Mercado",
  buyerField: "Tipo de comprador",
  opportunityField: "Tipo de oportunidade",
  sourceField: "Fonte pública",
  valueField: "Valor",
  deadlineField: "Prazo",
  statusField: "Status",
  relatedField: "Caminho de Market Access relacionado",
  currencyField: "Moeda",
  notSpecified: "Não especificado no brief público",

  briefsCrumb: "Oportunidades",
  seeAnalysis: "Ver a análise",
  mockupWindowTitle: "govdecision · Decision Brief",
  mockupTitle: "Opportunity Decision Brief",
  sample: "Exemplo",
  illustrative: "Ilustrativo",
  fitSignalLabel: "Sinal de fit",
  readinessRiskLabel: "Risco de readiness",
  blockersDetectedLabel: "Bloqueios detectados",
  routeLabel: "Rota",
  decisionLabel: "Decisão",

  snapshotEyebrow: "Resumo da oportunidade",
  snapshotTitle: "Como esta oportunidade se apresenta.",
  snapshotLead:
    "Mostramos apenas campos com fonte ou factuais. Campos ausentes são marcados, não inventados.",

  whyEyebrow: "Por que fornecedores se interessam",
  whyTitle: "Por que um fornecedor olharia para isso.",
  whyLead:
    "Este exemplo ilustra demanda pública real que um fornecedor relevante poderia achar comercialmente interessante.",

  hardEyebrow: "O que costuma tornar isso difícil",
  hardTitle: "Requisitos e bloqueios para validar primeiro.",
  hardLead:
    "Variam por comprador, país, categoria e oportunidade, então um fornecedor precisaria validar cada um antes de avançar.",
  requirementsHeading: "O que pode exigir",
  blockersHeading: "O que costuma bloquear fornecedores",

  govEyebrow: "O que a GovDecision analisaria",
  govTitle: "A GovDecision não trataria isto como mais um alerta.",
  govLead:
    "Compararia a oportunidade com o Supplier Passport, extrairia requisitos, detectaria bloqueios, estimaria gaps de readiness e prepararia um brief de decisão Go / No-Go.",
  aiAssistNote:
    "A análise assistida por IA ajuda a extrair requisitos, detectar bloqueios, resumir a lógica da oportunidade e preparar briefs executivos de decisão — enquanto o workflow mantém cada decisão estruturada e auditável. Os requisitos variam por comprador, categoria, modalidade e oportunidade, então valide antes de avançar.",

  saxEyebrow: "Onde a Sax Global pode importar",
  saxTitle: "Em caminhos cross-border, rota e execução importam.",
  saxLead:
    "A Sax Global pode apoiar planejamento de acesso a mercado, validação de rota e contexto prático de execução quando aplicável.",
  saxDisclaimer:
    "A Sax Global oferece planejamento, contexto e orientação. Não garante acesso a mercado, elegibilidade, aprovação de registro, indicação de parceiro, financiamento ou resultados em contratos. As cifras de exemplo são ilustrativas.",

  readinessEyebrow: "Perguntas de readiness",
  readinessTitle: "Perguntas a responder antes de avançar.",
  readinessLead:
    "Respostas honestas aqui definem se avançar agora, preparar primeiro ou descartar.",

  relatedEyebrow: "Caminho de Market Access relacionado",
  relatedTitle: "Aprofunde-se neste mercado.",
  relatedLead:
    "Cada brief se conecta a um caminho de Market Access com readiness, rota e um plano estruturado.",
  viewRelated: "Abrir caminho de market access",

  sourceEyebrow: "Fonte e aviso",
  sourceTitle: "De onde vem este exemplo.",
  sourceLead:
    "Este brief é construído a partir de fontes públicas e oficiais de compras. Mantemos links estáveis e cifras honestas.",
  publicSourceLabel: "Fonte pública principal",
  additionalRefsLabel: "Referências adicionais",
  availabilityNote:
    "Disponibilidade, prazos, elegibilidade e requisitos variam por comprador, país, categoria e oportunidade.",
  disclaimerLabel: "Aviso",
  disclaimer:
    "Estes briefs são baseados em exemplos de oportunidades públicas e sinais de mercado. Eles não são cases de clientes da GovDecision, aconselhamento jurídico, determinação de elegibilidade ou garantia de disponibilidade, habilitação, contratação, financiamento ou resultado.",

  ctaEyebrow: "Transforme isto em decisão",
  ctaTitleLocal: "Decida se vale a pena avançar.",
  ctaTitleCross: "Planeje a rota antes de avançar.",
  ctaSubtitleLocal:
    "Inicie um readiness da GovDecision para este tipo de oportunidade e tenha um Go / No-Go que você consegue defender.",
  ctaSubtitleCross:
    "Caminhos cross-border exigem validação de rota. Fale com a Sax Global sobre chegar a este mercado.",
  ctaLocalLabel: "Iniciar readiness GovDecision",
  ctaCrossLabel: "Falar com a Sax Global",
  ctaSecondaryLabel: "Ver todos os briefs",
};

const es: BriefChrome = {
  statusLabels: {
    "real-world-example": "Ejemplo real",
    "historical-example": "Ejemplo de oportunidad pasada",
    "market-signal": "Señal de mercado",
    "pending-validation": "Por validar",
  },
  pathTypeLabels: {
    local: "Local",
    "cross-border": "Transfronterizo",
    multilateral: "Multilateral",
    regional: "Regional",
  },
  fitSignalLabels: {
    low: "Bajo",
    medium: "Medio",
    "medium-high": "Medio / Alto",
    high: "Alto",
  },
  riskLabels: { low: "Bajo", medium: "Medio", high: "Alto" },
  routeLabels: {
    direct: "Directa",
    partner: "Socio",
    "prepare-first": "Preparar antes",
    "direct-or-partner": "Directa / Socio",
  },
  decisionLabels: {
    "review-before-pursuit": "Revisar antes de avanzar",
    "qualify-first": "Calificar primero",
    "prepare-first": "Preparar primero",
    "conditional-go": "Avanzar con condiciones",
  },

  indexMetaTitle: "Briefs de oportunidades públicas",
  indexMetaDescription:
    "Ejemplos reales de oportunidades públicas entre mercados — y por qué los proveedores necesitan fit, readiness, detección de bloqueos y una ruta clara antes de avanzar.",

  indexEyebrow: "Briefs de oportunidades públicas",
  indexTitle: "Oportunidades públicas reales, traducidas en mejores decisiones.",
  indexSubtitle:
    "Explora ejemplos de demanda pública entre mercados — y descubre por qué los proveedores necesitan análisis de fit, readiness, detección de bloqueos y una ruta clara antes de avanzar.",
  indexPrimaryCta: "Explorar los briefs",
  indexSecondaryCta: "Iniciar readiness",
  indexNote:
    "Estos son ejemplos reales de oportunidades públicas y señales de mercado, no casos de clientes de GovDecision ni oportunidades garantizadas.",

  featuredEyebrow: "Briefs destacados",
  featuredTitle: "Ejemplos de oportunidad en los mercados que cubrimos.",
  featuredLead:
    "Cada brief parte de una categoría real de demanda pública y muestra lo que un proveedor necesitaría entender antes de avanzar.",
  filterAll: "Todos los mercados",
  filterLabel: "Filtrar por mercado",
  resultsNone: "Aún no hay briefs para este mercado.",

  howToEyebrow: "Cómo leer un brief",
  howToTitle: "Cada brief sigue la misma lógica de decisión.",
  howToLead:
    "No son alertas de licitación. Cada brief va de la señal de demanda a una pregunta estructurada de readiness y ruta.",
  howToSteps: [
    {
      title: "La oportunidad",
      body: "Qué necesita el comprador, quién es, y la fuente oficial de la que proviene el ejemplo.",
    },
    {
      title: "Por qué puede importar",
      body: "La razón comercial por la que un proveedor pyme lo miraría y diría que podría ser relevante.",
    },
    {
      title: "Qué lo hace difícil",
      body: "Los requisitos y bloqueos que definen si avanzar es realista — o prematuro.",
    },
    {
      title: "La decisión",
      body: "Qué analizaría GovDecision, dónde puede importar Sax Global y las preguntas de readiness a responder primero.",
    },
  ],

  whereGovEyebrow: "Dónde ayuda GovDecision",
  whereGovTitle: "Descubrir la oportunidad no alcanza.",
  whereGovLead:
    "Encontrar la oportunidad es lo fácil. GovDecision convierte una señal de demanda pública en una decisión que puedes defender.",
  whereGovPoints: [
    "Compara cada oportunidad con el Supplier Passport para evaluar el fit rápido.",
    "Extrae requisitos y detecta bloqueos con apoyo de IA — antes de cualquier esfuerzo de oferta.",
    "Estima brechas de readiness y una señal de fit, en lugar de reaccionar a cada alerta.",
    "Prepara un brief de decisión Go / No-Go: avanzar ahora, preparar primero o descartar.",
  ],

  whereSaxEyebrow: "Dónde ayuda Sax Global",
  whereSaxTitle: "Cuando la ruta es transfronteriza, importa.",
  whereSaxLead:
    "Para ejemplos transfronterizos, regionales y multilaterales, llegar al mercado es un problema aparte.",
  whereSaxPoints: [
    "Planificación de acceso a mercado y validación de ruta para caminos transfronterizos.",
    "Prueba de supuestos de socio / distribuidor y representación local cuando se requiere.",
    "Contexto práctico de ejecución — idioma, logística, moneda — dimensionado antes del compromiso.",
  ],

  indexFinalEyebrow: "Convierte el ruido en decisión",
  indexFinalTitle: "Descubre si una oportunidad vale la pena.",
  indexFinalSubtitle:
    "Inicia un readiness y deja que GovDecision te ayude a decidir qué perseguir, preparar o descartar.",
  indexFinalPrimary: "Iniciar readiness",
  indexFinalSecondary: "Hablar con el equipo",

  cardCta: "Leer el brief",
  cardWhyLabel: "Por qué importa",

  marketField: "Mercado",
  buyerField: "Tipo de comprador",
  opportunityField: "Tipo de oportunidad",
  sourceField: "Fuente pública",
  valueField: "Valor",
  deadlineField: "Plazo",
  statusField: "Estado",
  relatedField: "Ruta de Market Access relacionada",
  currencyField: "Moneda",
  notSpecified: "No especificado en el brief público",

  briefsCrumb: "Oportunidades",
  seeAnalysis: "Ver el análisis",
  mockupWindowTitle: "govdecision · Decision Brief",
  mockupTitle: "Opportunity Decision Brief",
  sample: "Ejemplo",
  illustrative: "Ilustrativo",
  fitSignalLabel: "Señal de fit",
  readinessRiskLabel: "Riesgo de readiness",
  blockersDetectedLabel: "Bloqueos detectados",
  routeLabel: "Ruta",
  decisionLabel: "Decisión",

  snapshotEyebrow: "Resumen de la oportunidad",
  snapshotTitle: "Cómo se ve esta oportunidad.",
  snapshotLead:
    "Solo mostramos campos con fuente o factuales. Los campos ausentes se marcan, no se inventan.",

  whyEyebrow: "Por qué le interesa a los proveedores",
  whyTitle: "Por qué un proveedor miraría esto.",
  whyLead:
    "Este ejemplo ilustra demanda pública real que un proveedor relevante podría encontrar comercialmente interesante.",

  hardEyebrow: "Qué suele hacerlo difícil",
  hardTitle: "Requisitos y bloqueos a validar primero.",
  hardLead:
    "Varían por comprador, país, categoría y oportunidad, así que un proveedor necesitaría validar cada uno antes de avanzar.",
  requirementsHeading: "Qué puede requerir",
  blockersHeading: "Qué suele bloquear a los proveedores",

  govEyebrow: "Qué analizaría GovDecision",
  govTitle: "GovDecision no trataría esto como una alerta más.",
  govLead:
    "Compararía la oportunidad con el Supplier Passport, extraería requisitos, detectaría bloqueos, estimaría brechas de readiness y prepararía un brief de decisión Go / No-Go.",
  aiAssistNote:
    "El análisis asistido por IA ayuda a extraer requisitos, detectar bloqueos, resumir la lógica de la oportunidad y preparar briefs ejecutivos de decisión — mientras el workflow mantiene cada decisión estructurada y auditable. Los requisitos varían por comprador, categoría, modalidad y oportunidad, así que valida antes de avanzar.",

  saxEyebrow: "Dónde puede importar Sax Global",
  saxTitle: "En rutas transfronterizas, la ruta y la ejecución importan.",
  saxLead:
    "Sax Global puede apoyar la planificación de acceso a mercado, la validación de ruta y el contexto práctico de ejecución cuando aplique.",
  saxDisclaimer:
    "Sax Global ofrece planificación, contexto y orientación. No garantiza acceso a mercado, elegibilidad, aprobación de registro, asignación de socio, financiamiento ni resultados contractuales. Las cifras de ejemplo son ilustrativas.",

  readinessEyebrow: "Preguntas de readiness",
  readinessTitle: "Preguntas a responder antes de avanzar.",
  readinessLead:
    "Respuestas honestas aquí definen si avanzar ahora, preparar primero o descartar.",

  relatedEyebrow: "Ruta de Market Access relacionada",
  relatedTitle: "Profundiza en este mercado.",
  relatedLead:
    "Cada brief se conecta a una ruta de Market Access con readiness, ruta y un plan estructurado.",
  viewRelated: "Abrir ruta de market access",

  sourceEyebrow: "Fuente y aviso",
  sourceTitle: "De dónde viene este ejemplo.",
  sourceLead:
    "Este brief se construye a partir de fuentes públicas y oficiales de compras. Mantenemos enlaces estables y cifras honestas.",
  publicSourceLabel: "Fuente pública principal",
  additionalRefsLabel: "Referencias adicionales",
  availabilityNote:
    "La disponibilidad, los plazos, la elegibilidad y los requisitos varían por comprador, país, categoría y oportunidad.",
  disclaimerLabel: "Aviso",
  disclaimer:
    "Estos briefs se basan en ejemplos de oportunidades públicas y señales de mercado. No son casos de clientes de GovDecision, asesoría legal, determinaciones de elegibilidad ni garantías de disponibilidad, calificación, adjudicación, financiamiento o resultados contractuales.",

  ctaEyebrow: "Convierte esto en decisión",
  ctaTitleLocal: "Decide si vale la pena avanzar.",
  ctaTitleCross: "Planifica la ruta antes de avanzar.",
  ctaSubtitleLocal:
    "Inicia un readiness de GovDecision para este tipo de oportunidad y obtén un Go / No-Go que puedas defender.",
  ctaSubtitleCross:
    "Las rutas transfronterizas necesitan validación. Habla con Sax Global sobre llegar a este mercado.",
  ctaLocalLabel: "Iniciar readiness GovDecision",
  ctaCrossLabel: "Hablar con Sax Global",
  ctaSecondaryLabel: "Ver todos los briefs",
};

export const briefChrome: Record<Locale, BriefChrome> = {
  "en-US": enUS,
  "pt-BR": ptBR,
  es,
};
