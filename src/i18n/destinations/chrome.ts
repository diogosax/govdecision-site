/**
 * Shared section labels / chrome for the destination briefing template, one
 * object per locale.
 *
 * EN-US mirrors the strings that were previously hard-coded in the destination
 * components verbatim, so the default site renders byte-for-byte the same. The
 * `{market}` token is replaced at render time with the localized target name.
 */
import type { Locale } from "@/i18n/config";
import type { DestinationChrome } from "./types";

const enUS: DestinationChrome = {
  pathTypeLabels: {
    local: "Local",
    "cross-border": "Cross-border",
    multilateral: "Multilateral",
    regional: "Regional",
  },
  statusLabels: {
    "active-focus": "Active focus",
    "in-development": "In development",
    targeted: "Targeted",
  },
  checklistStatusLabels: {
    "usually-needed": "Usually needed",
    depends: "Depends",
    validate: "Validate",
    "not-usually-required": "Not usually required",
  },

  pathSuffix: "path",
  seeReadiness: "See readiness",
  brief: "Market access brief",
  windowTitle: "govdecision · Market access brief",
  sample: "Sample",
  origin: "Origin",
  target: "Target",
  pathTypeLabel: "Path type",
  readinessPriorityLabel: "Readiness priority",
  recommendedFirstStep: "Recommended first step",
  marketType: "Market type",
  startWithGov: "Start with GovDecision",
  govPlusSax: "GovDecision + Sax Global",

  snapshotEyebrow: "Market snapshot",
  snapshotTitle: "{market} at a glance.",
  snapshotLead:
    "A short, sourced read on the market — not an exhaustive report. Figures use the latest available official or authoritative data.",
  dataSources: "Market data sources",

  whyEyebrow: "Why this market matters",
  whyTitle: "Why {market} matters.",
  allPaths: "All market access paths",

  checklistEyebrow: "Basic readiness checklist",
  checklistTitle: "What this market may ask of you.",
  checklistLead:
    "A market-specific starting point — not legal advice. Requirements vary by buyer, category, procurement method, and opportunity, so validate each one before pursuing.",
  routeOptions: "Route-to-market options to weigh",

  blockersEyebrow: "Common blockers",
  blockersTitle: "What usually blocks suppliers.",
  blockersLead:
    "Most missed opportunities don't fail at the bid — they fail earlier, on readiness. These are the patterns worth catching first.",

  govEyebrow: "Where GovDecision becomes critical",
  govTitle: "Where GovDecision becomes critical.",
  govLead:
    "GovDecision turns interest in this market into a decision you can defend — pursue now, or prepare first — with the reasoning written down.",
  aiAssistNote:
    "AI-assisted analysis helps extract requirements, detect blockers, summarize opportunity logic, and prepare executive decision briefs — while the workflow keeps every decision structured and auditable. Requirements vary by buyer, category, procurement method, and opportunity, so validate before pursuing.",
  windowConsoleTitle: "govdecision · Readiness Console",
  console: "Readiness console",
  marketFit: "Market fit",
  supplierPassport: "Supplier Passport",
  criticalBlockers: "Critical blockers",
  recommendedRouteLabel: "Recommended route",
  decisionLabel: "Decision",
  consoleNote:
    "Decision support and readiness workflows — illustrative values, not a guarantee of any outcome.",

  saxEntersEyebrow: "Where Sax Global enters",
  saxOptionalEyebrow: "Sax Global (optional)",
  saxEntersTitle: "Sax Global supports the market access journey.",
  saxOptionalTitle: "Sax Global, if and when you need it.",
  scoreWindowTitle: "Sax Global · Market Access Score",
  businessWindowTitle: "Sax Global · Business Plan Snapshot",
  marketAccessScore: "Market access score",
  directionalRead:
    "A directional read across attractiveness, readiness, route, and risk.",
  attractiveness: "Attractiveness",
  readinessGapLabel: "Readiness gap",
  routeComplexityLabel: "Route complexity",
  partnerDependencyLabel: "Partner dependency",
  executionRiskLabel: "Execution risk",
  firstMovePrefix: "Recommended first move:",
  businessPlanTitle: "Business plan snapshot",
  businessPlanSubtitle: "A structured starting outline — built with you, not for you.",
  illustrative: "Illustrative",
  saxDisclaimer:
    "Sax Global provides planning, context, and guidance. It does not guarantee market access, eligibility, registration approval, partner placement, financing, or contract outcomes. Sample figures are illustrative.",
};

const ptBR: DestinationChrome = {
  pathTypeLabels: {
    local: "Local",
    "cross-border": "Cross-border",
    multilateral: "Multilateral",
    regional: "Regional",
  },
  statusLabels: {
    "active-focus": "Foco ativo",
    "in-development": "Em desenvolvimento",
    targeted: "Mapeado",
  },
  checklistStatusLabels: {
    "usually-needed": "Costuma ser exigido",
    depends: "Depende",
    validate: "Validar",
    "not-usually-required": "Geralmente não exigido",
  },

  pathSuffix: "",
  seeReadiness: "Ver readiness",
  brief: "Brief de acesso a mercado",
  windowTitle: "govdecision · Brief de acesso a mercado",
  sample: "Exemplo",
  origin: "Origem",
  target: "Destino",
  pathTypeLabel: "Tipo de acesso",
  readinessPriorityLabel: "Prioridade de readiness",
  recommendedFirstStep: "Primeiro passo recomendado",
  marketType: "Tipo de mercado",
  startWithGov: "Comece pela GovDecision",
  govPlusSax: "GovDecision + Sax Global",

  snapshotEyebrow: "Visão do mercado",
  snapshotTitle: "{market} em resumo.",
  snapshotLead:
    "Uma leitura curta e referenciada do mercado — não um relatório completo. As cifras usam os dados oficiais ou de fontes reconhecidas mais recentes disponíveis.",
  dataSources: "Fontes de dados do mercado",

  whyEyebrow: "Por que este mercado importa",
  whyTitle: "Por que {market} importa.",
  allPaths: "Todos os caminhos de acesso a mercados",

  checklistEyebrow: "Checklist básico de readiness",
  checklistTitle: "O que este mercado pode exigir de você.",
  checklistLead:
    "Um ponto de partida específico do mercado — não é orientação jurídica. Os requisitos variam por comprador, país, categoria, modalidade e oportunidade, então valide cada item antes de avançar.",
  routeOptions: "Opções de rota para o mercado a considerar",

  blockersEyebrow: "Bloqueios comuns",
  blockersTitle: "O que costuma bloquear fornecedores.",
  blockersLead:
    "A maioria das oportunidades perdidas não falha na proposta — falha antes, na readiness. Estes são os padrões que vale a pena identificar primeiro.",

  govEyebrow: "Onde a GovDecision se torna crítica",
  govTitle: "Onde a GovDecision se torna crítica.",
  govLead:
    "A GovDecision transforma o interesse neste mercado em uma decisão que você consegue defender — avançar agora ou preparar primeiro — com o racional registrado.",
  aiAssistNote:
    "A análise assistida por IA ajuda a extrair requisitos, detectar bloqueios, resumir a lógica da oportunidade e preparar briefs executivos de decisão — enquanto o workflow mantém cada decisão estruturada e auditável. Os requisitos variam por comprador, país, categoria, modalidade e oportunidade, então valide antes de avançar.",
  windowConsoleTitle: "govdecision · Readiness Console",
  console: "Console de readiness",
  marketFit: "Aderência ao mercado",
  supplierPassport: "Supplier Passport",
  criticalBlockers: "Bloqueios críticos",
  recommendedRouteLabel: "Rota recomendada",
  decisionLabel: "Decisão",
  consoleNote:
    "Suporte à decisão e workflows de readiness — valores ilustrativos, não uma garantia de qualquer resultado.",

  saxEntersEyebrow: "Onde a Sax Global entra",
  saxOptionalEyebrow: "Sax Global (opcional)",
  saxEntersTitle: "A Sax Global apoia a jornada de acesso a mercado.",
  saxOptionalTitle: "Sax Global, se e quando você precisar.",
  scoreWindowTitle: "Sax Global · Market Access Score",
  businessWindowTitle: "Sax Global · Business Plan Snapshot",
  marketAccessScore: "Market access score",
  directionalRead:
    "Uma leitura direcional de atratividade, readiness, rota e risco.",
  attractiveness: "Atratividade",
  readinessGapLabel: "Gap de readiness",
  routeComplexityLabel: "Complexidade da rota",
  partnerDependencyLabel: "Dependência de parceiro",
  executionRiskLabel: "Risco de execução",
  firstMovePrefix: "Primeiro movimento recomendado:",
  businessPlanTitle: "Resumo do plano de negócios",
  businessPlanSubtitle: "Um roteiro inicial estruturado — feito com você, não por você.",
  illustrative: "Ilustrativo",
  saxDisclaimer:
    "A Sax Global oferece planejamento, contexto e orientação. Não garante acesso a mercado, elegibilidade, aprovação de registro, indicação de parceiro, financiamento ou resultados em contratos. As cifras de exemplo são ilustrativas.",
};

const es: DestinationChrome = {
  pathTypeLabels: {
    local: "Local",
    "cross-border": "Transfronterizo",
    multilateral: "Multilateral",
    regional: "Regional",
  },
  statusLabels: {
    "active-focus": "Foco activo",
    "in-development": "En desarrollo",
    targeted: "Mapeado",
  },
  checklistStatusLabels: {
    "usually-needed": "Suele requerirse",
    depends: "Depende",
    validate: "Validar",
    "not-usually-required": "Por lo general no se requiere",
  },

  pathSuffix: "",
  seeReadiness: "Ver readiness",
  brief: "Brief de acceso a mercado",
  windowTitle: "govdecision · Brief de acceso a mercado",
  sample: "Ejemplo",
  origin: "Origen",
  target: "Destino",
  pathTypeLabel: "Tipo de acceso",
  readinessPriorityLabel: "Prioridad de readiness",
  recommendedFirstStep: "Primer paso recomendado",
  marketType: "Tipo de mercado",
  startWithGov: "Empieza por GovDecision",
  govPlusSax: "GovDecision + Sax Global",

  snapshotEyebrow: "Visión del mercado",
  snapshotTitle: "{market} en resumen.",
  snapshotLead:
    "Una lectura breve y referenciada del mercado — no un informe exhaustivo. Las cifras usan los datos oficiales o de fuentes reconocidas más recientes disponibles.",
  dataSources: "Fuentes de datos del mercado",

  whyEyebrow: "Por qué este mercado importa",
  whyTitle: "Por qué {market} importa.",
  allPaths: "Todas las rutas de acceso a mercados",

  checklistEyebrow: "Checklist básico de readiness",
  checklistTitle: "Qué puede exigirte este mercado.",
  checklistLead:
    "Un punto de partida específico del mercado — no es asesoría legal. Los requisitos varían por comprador, país, categoría, modalidad y oportunidad, así que valida cada uno antes de avanzar.",
  routeOptions: "Opciones de ruta al mercado a considerar",

  blockersEyebrow: "Bloqueos comunes",
  blockersTitle: "Qué suele bloquear a los proveedores.",
  blockersLead:
    "La mayoría de las oportunidades perdidas no fallan en la oferta — fallan antes, en la readiness. Estos son los patrones que conviene detectar primero.",

  govEyebrow: "Dónde GovDecision se vuelve crítico",
  govTitle: "Dónde GovDecision se vuelve crítico.",
  govLead:
    "GovDecision convierte el interés en este mercado en una decisión que puedes defender — avanzar ahora o prepararte primero — con el razonamiento por escrito.",
  aiAssistNote:
    "El análisis asistido por IA ayuda a extraer requisitos, detectar bloqueos, resumir la lógica de la oportunidad y preparar briefs ejecutivos de decisión — mientras el workflow mantiene cada decisión estructurada y auditable. Los requisitos varían por comprador, país, categoría, modalidad y oportunidad, así que valida antes de avanzar.",
  windowConsoleTitle: "govdecision · Readiness Console",
  console: "Consola de readiness",
  marketFit: "Ajuste al mercado",
  supplierPassport: "Supplier Passport",
  criticalBlockers: "Bloqueos críticos",
  recommendedRouteLabel: "Ruta recomendada",
  decisionLabel: "Decisión",
  consoleNote:
    "Soporte de decisión y workflows de readiness — valores ilustrativos, no una garantía de ningún resultado.",

  saxEntersEyebrow: "Dónde entra Sax Global",
  saxOptionalEyebrow: "Sax Global (opcional)",
  saxEntersTitle: "Sax Global acompaña el recorrido de acceso a mercado.",
  saxOptionalTitle: "Sax Global, si y cuando lo necesites.",
  scoreWindowTitle: "Sax Global · Market Access Score",
  businessWindowTitle: "Sax Global · Business Plan Snapshot",
  marketAccessScore: "Market access score",
  directionalRead:
    "Una lectura direccional de atractivo, readiness, ruta y riesgo.",
  attractiveness: "Atractivo",
  readinessGapLabel: "Brecha de readiness",
  routeComplexityLabel: "Complejidad de la ruta",
  partnerDependencyLabel: "Dependencia de socio",
  executionRiskLabel: "Riesgo de ejecución",
  firstMovePrefix: "Primer movimiento recomendado:",
  businessPlanTitle: "Resumen del plan de negocio",
  businessPlanSubtitle: "Un esquema inicial estructurado — hecho contigo, no por ti.",
  illustrative: "Ilustrativo",
  saxDisclaimer:
    "Sax Global ofrece planificación, contexto y orientación. No garantiza acceso a mercado, elegibilidad, aprobación de registro, asignación de socio, financiamiento ni resultados contractuales. Las cifras de ejemplo son ilustrativas.",
};

export const destinationChrome: Record<Locale, DestinationChrome> = {
  "en-US": enUS,
  "pt-BR": ptBR,
  es,
};
