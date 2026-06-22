/**
 * ES destination overlays (SITE-012).
 *
 * Neutral LATAM / international Spanish — commercial, premium, practical. Metric
 * *values* preserve the canonical figures (only magnitude words are translated:
 * billion = "mil millones", trillion = "billones"); source names stay official.
 * Cautious / non-guarantee wording is preserved.
 */
import type { DestinationCopyMap } from "./types";

/** Shared 7-step business-plan snapshot (index-aligned with `businessPlanSnapshot`). */
const businessPlan = [
  "Hipótesis de entrada al mercado",
  "Registros necesarios",
  "Ajuste de producto / categoría",
  "Opciones de ruta al mercado",
  "Supuestos de socio / distribuidor",
  "Plan de readiness de los primeros 90 días",
  "Consideraciones de ejecución y financiamiento",
];

export const esDestinations: DestinationCopyMap = {
  /* --------------------------------------------------------- Brazil (local) */
  brazil: {
    originLabel: "Brasil",
    targetLabel: "Brasil",
    heroEyebrow: "Mercado local · Brasil",
    heroTitle: "Negocios públicos en Brasil, con mejores decisiones.",
    heroSubtitle:
      "Brasil tiene uno de los mayores entornos de contratación pública del mundo — entre compradores federales, estatales, municipales, empresas estatales y del sistema de servicios sociales. Lo difícil es decidir qué vale la pena perseguir y organizar la readiness antes de los plazos.",
    readinessPriority: "Registro + disciplina de oferta",
    firstStep: "Supplier Passport + calificación de oportunidades",
    metaTitle: "Negocios públicos en Brasil — GovDecision",
    metaDescription:
      "Conoce cómo los proveedores pueden abordar la contratación pública brasileña con mejor calificación de oportunidades, readiness y workflows de decisión.",
    metrics: [
      { label: "Población", value: "≈ 212 millones", note: "World Bank · 2024" },
      { label: "PIB", value: "≈ US$2.18 billones", note: "World Bank · 2024" },
      {
        label: "Contratación pública",
        value: "≈ 12–14% del PIB",
        note: "Estimación · contexto OECD",
      },
      { label: "Moneda", value: "Real brasileño (BRL)" },
      { label: "Idioma principal", value: "Portugués" },
      {
        label: "Acceso a contratación",
        value: "PNCP · Compras.gov.br",
        note: "Portal federal + nacional",
      },
    ],
    marketOverview:
      "La contratación pública brasileña es grande y continua, pero está fragmentada entre niveles de comprador y modalidades. Para el proveedor, la oportunidad es real — y el ruido también. La disciplina que gana es calificar lo que vale la pena perseguir y, luego, organizar los documentos y las decisiones detrás de cada licitación antes de que el plazo fuerce una decisión apresurada.",
    whyItMatters: [
      "Los compradores federales, estatales, municipales, empresas estatales y del sistema de servicios sociales siguen ritmos y reglas propios.",
      "La regularidad fiscal y los documentos de habilitación deben estar siempre al día, no armados a último momento.",
      "La ventaja está en la disciplina de participar / no participar — perseguir menos oportunidades, con mejor ajuste y readiness completa.",
    ],
    checklist: [
      {
        item: "Perfil del proveedor",
        description:
          "Un perfil claro y estructurado de lo que tu empresa vende y puede comprobar.",
      },
      {
        item: "Registro empresarial y fiscal (CNPJ, regularidad)",
        description:
          "CNPJ activo y prueba actual de regularidad fiscal, laboral y de seguridad social.",
      },
      {
        item: "Registro en los portales de contratación (SICAF / PNCP)",
        description:
          "El SICAF es estándar para compradores federales, con registros en portales que varían según el nivel del comprador.",
      },
      {
        item: "Ajuste a la categoría / objeto",
        description:
          "Confirma que tus productos correspondan al objeto de la licitación y a las especificaciones técnicas exigidas.",
      },
      {
        item: "Documentos técnicos y de habilitación",
        description:
          "Certificados de capacidad y documentos de calificación exigidos por cada pliego.",
      },
      {
        item: "Certificaciones de sector / producto",
        description:
          "La aplicación de certificaciones específicas depende del objeto y de las reglas del comprador.",
      },
      {
        item: "Garantía / caución (garantia)",
        description:
          "Algunos pliegos exigen garantías de oferta o de ejecución; valida por oportunidad.",
      },
      {
        item: "Entidad local",
        description:
          "Los proveedores nacionales ya operan como persona jurídica brasileña.",
      },
      {
        item: "Readiness de ejecución y entrega",
        description:
          "Planifica capacidad, entrega y obligaciones posteriores a la adjudicación antes de participar.",
      },
    ],
    commonBlockers: [
      "Ver la oportunidad demasiado tarde para prepararse",
      "Certificados de regularidad fiscal ausentes o vencidos",
      "Registro incompleto en SICAF o en los portales",
      "Documentos de habilitación que no cumplen el pliego",
      "Brechas de garantía o de capital de trabajo",
      "Falta de disciplina de participar / no participar",
      "Subestimar la ejecución posterior a la adjudicación",
    ],
    routeOptions: [
      "Participación directa como proveedor brasileño",
      "Consorcio para objetos mayores",
      "Suministro o subcontratación a licitantes principales",
    ],
    govDecisionRole: [
      "El Supplier Passport convierte datos dispersos de la empresa en un perfil estructurado.",
      "La Calificación de Oportunidades puntúa el ajuste y filtra lo que no vale la pena perseguir.",
      "La extracción de requisitos asistida por IA lee el pliego y revela lo que exige.",
      "La detección de bloqueos señala temprano registros, documentos o certificados faltantes.",
      "El Readiness Workspace convierte las brechas en responsables y fechas antes del plazo.",
      "Un memo de decisión go / no-go registra por qué avanzaste — o elegiste prepararte primero.",
    ],
    recommendedRoute: "Oferta directa + readiness",
    decision: "Avanzar con condiciones",
    sax: {
      intro:
        "Para una ruta local en Brasil, GovDecision hace la mayor parte del trabajo. Sax Global es opcional aquí — útil sobre todo para estructurar una entidad, organizar un plan de crecimiento o poner a prueba una disputa mayor.",
      role: [
        "Contexto de constitución y estructuración de negocio donde ayude",
        "Planificación de crecimiento para una disputa mayor en el sector público",
        "Revisión opcional de una decisión de oferta de alto valor",
      ],
      score: {
        readinessGap: "Media",
        routeComplexity: "Baja–Media",
        partnerDependency: "Baja",
        executionRisk: "Medio",
        firstMove: "Reforzar registro + disciplina de oferta",
      },
      businessPlan,
    },
    cta: {
      eyebrow: "Comienza la readiness",
      title: "Comienza tu readiness para el sector público en este mercado.",
      subtitle:
        "Arma tu Supplier Passport, califica oportunidades reales y aporta disciplina a cada licitación pública brasileña.",
      primaryLabel: "Iniciar readiness en GovDecision",
      secondaryLabel: "Abrir la app GovDecision",
    },
  },

  /* -------------------------------------------------- United States (local) */
  "united-states": {
    originLabel: "Estados Unidos",
    targetLabel: "Estados Unidos",
    heroEyebrow: "Mercado local · Estados Unidos",
    heroTitle: "Las oportunidades públicas en EE. UU. exigen más que alertas.",
    heroSubtitle:
      "El sector público de EE. UU. es uno de los mayores entornos de compra gubernamental del mundo. La oportunidad es significativa — pero el registro, el ajuste de categoría, las reglas del comprador y las elecciones de ruta al mercado necesitan estructura, no solo un feed de avisos.",
    readinessPriority: "Registro + ajuste de categoría",
    firstStep: "Supplier Passport + revisión de readiness",
    metaTitle: "Negocios públicos en Estados Unidos — GovDecision",
    metaDescription:
      "Conoce cómo los proveedores pueden abordar la contratación pública de EE. UU. con mejor calificación de oportunidades, readiness de registro y workflows de decisión.",
    metrics: [
      {
        label: "Población",
        value: "≈ 340 millones",
        note: "U.S. Census Bureau · 2024",
      },
      { label: "PIB", value: "≈ US$29.2 billones", note: "U.S. BEA · 2024" },
      {
        label: "Compromisos contractuales federales",
        value: "≈ US$755 mil millones",
        note: "GAO · FY2024",
      },
      { label: "Moneda", value: "Dólar estadounidense (USD)" },
      { label: "Idioma principal", value: "Inglés" },
      {
        label: "Acceso a contratación",
        value: "Registro en SAM.gov",
        note: "Puerta de entrada federal",
      },
    ],
    marketOverview:
      "La compra del sector público de EE. UU. es enorme, pero recompensa a los proveedores registrados, posicionados en las categorías correctas y disciplinados sobre qué oportunidades persiguen. Solo los compromisos contractuales federales suman cientos de miles de millones por año — estados, municipios y educación agregan mucho más. La estructura supera al volumen de alertas.",
    whyItMatters: [
      "Un registro válido en SAM.gov y un Unique Entity ID son la puerta de entrada a los contratos federales.",
      "El posicionamiento de categoría (NAICS / PSC) y el historial de desempeño definen qué oportunidades puedes ganar de forma realista.",
      "Las reglas de set-aside y de compliance varían por comprador — hay que leerlas, no presumirlas.",
    ],
    checklist: [
      {
        item: "Perfil del proveedor",
        description:
          "Un capability statement claro de lo que vendes y puedes comprobar.",
      },
      {
        item: "Registro de la entidad (SAM.gov UEI)",
        description:
          "Un registro activo en SAM.gov con Unique Entity ID es obligatorio para recibir contratos federales.",
      },
      {
        item: "Readiness fiscal y financiera",
        description:
          "Tax ID, registros financieros y contabilidad que resistan una auditoría.",
      },
      {
        item: "Ajuste de categoría (NAICS / PSC)",
        description:
          "Mapea tu oferta a los códigos correctos y confirma demanda real del comprador.",
      },
      {
        item: "Certificaciones y estatus de set-aside",
        description:
          "La elegibilidad a set-aside de pequeñas empresas o socioeconómico depende de tu empresa; valídala.",
      },
      {
        item: "Documentos técnicos e historial de desempeño",
        description:
          "Un capability statement y evidencia de desempeño previo fortalecen ofertas competitivas.",
      },
      {
        item: "Compliance (representations del FAR)",
        description:
          "Las representations y certifications federales deben completarse y mantenerse vigentes.",
      },
      {
        item: "Bonding / garantías",
        description:
          "Los bonds de oferta, de ejecución o de pago dependen del tipo y tamaño del contrato.",
      },
      {
        item: "Entidad local",
        description:
          "Los proveedores nacionales ya tienen una entidad en EE. UU.; la entrada extranjera es distinta.",
      },
      {
        item: "Readiness de ejecución y entrega",
        description:
          "Planifica entrega, equipo y compliance posterior a la adjudicación antes de avanzar.",
      },
    ],
    commonBlockers: [
      "Ver la oportunidad demasiado tarde",
      "Sin registro activo en SAM.gov",
      "Posicionamiento de NAICS / PSC incorrecto o ausente",
      "Historial de desempeño débil o inexistente",
      "Representations y compliance desactualizados",
      "Brechas de bonding o de capital de trabajo",
      "Ruta al mercado poco clara para el comprador",
    ],
    routeOptions: [
      "Participación directa como entidad registrada",
      "Teaming o subcontratación con un prime",
      "Reventa / canal donde encaje",
      "Elegibilidad a set-aside cuando aplique",
    ],
    govDecisionRole: [
      "El Supplier Passport consolida tu perfil, códigos e historial de desempeño.",
      "Los Country Packs aplican las rutas de registro de EE. UU., las reglas del comprador y la lógica de elegibilidad.",
      "La Calificación de Oportunidades puntúa el ajuste para que persigas la demanda correcta de NAICS / PSC.",
      "La extracción de requisitos asistida por IA lee las solicitations y revela las obligaciones.",
      "La detección de bloqueos señala temprano brechas de registro, compliance y bonding.",
      "Un memo go / no-go y el Deal Room mantienen la decisión estructurada y auditable.",
    ],
    recommendedRoute: "Registrar + preparar",
    decision: "Preparar y luego avanzar",
    sax: {
      intro:
        "Para una ruta doméstica en EE. UU., GovDecision lleva el trabajo de readiness. Sax Global es opcional aquí — útil para estructurar crecimiento, estrategia de canal o un plan de expansión mayor.",
      role: [
        "Planificación de crecimiento y de canal para la expansión en el sector público",
        "Contexto de estructuración para disputas mayores",
        "Revisión opcional de una decisión de oferta de alto valor",
      ],
      score: {
        readinessGap: "Media",
        routeComplexity: "Media",
        partnerDependency: "Baja–Media",
        executionRisk: "Medio",
        firstMove: "Confirmar registro + ajuste de categoría",
      },
      businessPlan,
    },
    cta: {
      eyebrow: "Comienza la readiness",
      title: "Comienza tu readiness para el sector público en este mercado.",
      subtitle:
        "Arma tu Supplier Passport, confirma el registro y califica las oportunidades de EE. UU. que valen la pena.",
      primaryLabel: "Iniciar readiness en GovDecision",
      secondaryLabel: "Abrir la app GovDecision",
    },
  },

  /* ------------------------------ Brazil → United States (cross-border) */
  "brazil-to-united-states": {
    originLabel: "Brasil",
    targetLabel: "Estados Unidos",
    heroEyebrow: "Ruta transfronteriza · Brasil → Estados Unidos",
    heroTitle:
      "Una ruta práctica para que proveedores brasileños entren en los negocios públicos de EE. UU.",
    heroSubtitle:
      "Los negocios públicos de EE. UU. pueden ser atractivos para proveedores brasileños — pero la readiness transfronteriza importa. Ruta de registro, ruta local, documentación, capacidad de exportación, supuestos de entrega y estructura de soporte deben entenderse antes de avanzar.",
    readinessPriority: "Registro + validación de ruta",
    firstStep: "Supplier Passport + revisión de Sax Global",
    metaTitle: "Negocios públicos de Brasil a Estados Unidos — GovDecision",
    metaDescription:
      "Explora cómo los proveedores brasileños pueden evaluar una ruta hacia los negocios públicos de EE. UU. con los workflows de readiness de GovDecision y el soporte de acceso a mercado de Sax Global.",
    metrics: [
      {
        label: "Población objetivo",
        value: "≈ 340 millones",
        note: "U.S. Census Bureau · 2024",
      },
      { label: "PIB objetivo", value: "≈ US$29.2 billones", note: "U.S. BEA · 2024" },
      {
        label: "Compromisos contractuales federales",
        value: "≈ US$755 mil millones",
        note: "GAO · FY2024",
      },
      { label: "Moneda", value: "Dólar estadounidense (USD)" },
      { label: "Idioma de trabajo", value: "Inglés" },
      {
        label: "Tipo de mercado",
        value: "Entrada transfronteriza",
        note: "Registro + ruta",
      },
    ],
    marketOverview:
      "El mercado de EE. UU. es lo bastante grande como para justificar una mirada seria, pero entrar desde Brasil es una cuestión de readiness antes que de ventas. La ruta realista pasa por un enfoque claro de registro, una ruta al mercado creíble y supuestos honestos de entrega y compliance — validados antes de comprometer recursos.",
    whyItMatters: [
      "El registro en el sistema de EE. UU., y cómo lo estructuras, define todo lo que viene después.",
      "La ruta al mercado — directa, representante, distribuidor o entidad local — depende de la categoría y del comprador.",
      "La documentación, las normas y las condiciones de entrega suelen necesitar localización, no solo traducción.",
    ],
    checklist: [
      {
        item: "Perfil del proveedor y readiness de exportación",
        description:
          "Un perfil estructurado más una visión honesta de tu capacidad de exportación y entrega.",
      },
      {
        item: "Ruta de registro en EE. UU. (SAM.gov UEI)",
        description:
          "Un registro en SAM.gov es obligatorio para recibir contratos federales; cómo te registras depende de tu estructura.",
      },
      {
        item: "Requisito de empresa local",
        description:
          "Si se necesita una entidad en EE. UU. depende del comprador, la categoría y la modalidad — valida por oportunidad.",
      },
      {
        item: "Representante / distribuidor / socio local",
        description:
          "A menudo útil y, a veces, efectivamente exigido por la ruta o el contexto del comprador.",
      },
      {
        item: "Stock local / capacidad de entrega",
        description:
          "Depende del producto, las condiciones de entrega y las expectativas de plazo.",
      },
      {
        item: "Requisito de producción / contenido local",
        description:
          "Las reglas de contenido nacional no son universales; valida las reglas del comprador y la categoría antes de presumir.",
      },
      {
        item: "Readiness fiscal, bancaria y de pago",
        description:
          "La facturación transfronteriza, la banca y las condiciones de pago deben resolverse con anticipación.",
      },
      {
        item: "Localización / traducción de documentos",
        description:
          "Los documentos suelen necesitar adaptación al inglés y al formato de EE. UU., no solo traducción.",
      },
      {
        item: "Normas y certificaciones",
        description:
          "Las normas o certificaciones de EE. UU. pueden aplicar según la categoría.",
      },
      {
        item: "Compliance (representations del FAR)",
        description:
          "Las representations y certifications federales deben completarse y mantenerse vigentes.",
      },
      {
        item: "Garantía / bonding",
        description:
          "Los bonds de oferta, de ejecución o de pago dependen del tipo y tamaño del contrato.",
      },
      {
        item: "Ejecución y obligaciones posteriores a la adjudicación",
        description:
          "Planifica entrega, soporte y obligaciones de compliance antes de avanzar.",
      },
    ],
    commonBlockers: [
      "Ver la oportunidad demasiado tarde",
      "Ruta de registro poco clara en el sistema de EE. UU.",
      "Incertidumbre sobre socio local o representación",
      "Brechas de traducción y de localización para EE. UU.",
      "Supuestos de stock, plazo y entrega",
      "Brechas de garantía o de capital de trabajo",
      "No comprender las obligaciones de ejecución y compliance",
    ],
    routeOptions: [
      "Participación directa una vez registrado",
      "Representante o distribuidor local",
      "Subsidiaria o sucursal en EE. UU.",
      "Teaming o subcontratación con un prime de EE. UU.",
      "Prepararse primero, luego entrar",
    ],
    govDecisionRole: [
      "El Supplier Passport captura la readiness de exportación y lo que puedes entregar con credibilidad.",
      "Los Country Packs aplican las rutas de registro de EE. UU., las reglas del comprador y la lógica de ruta.",
      "La extracción de requisitos asistida por IA revela obligaciones ocultas en las solicitations.",
      "La detección de bloqueos señala brechas de registro, localización y entrega antes de que cuesten caro.",
      "La puntuación de ajuste y readiness muestra si conviene avanzar ahora o prepararse primero.",
      "Un memo go / no-go y el Deal Room mantienen auditable una decisión transfronteriza.",
    ],
    recommendedRoute: "Preparar + validar socio",
    decision: "Avanzar con condiciones",
    sax: {
      intro:
        "La entrada transfronteriza es donde el software se encuentra con el mundo real. Sax Global acompaña el recorrido de acceso a mercado — estrategia de ruta de registro, conversaciones de ruta al mercado y de socios, contexto de constitución de negocio y orientación práctica de ejecución donde aplica.",
      role: [
        "Estrategia de ruta de registro y de entrada al sistema de EE. UU.",
        "Conversaciones de ruta al mercado y de socio / distribuidor",
        "Contexto de constitución de negocio para una presencia en EE. UU. donde aplica",
        "Orientación práctica de ejecución transfronteriza y de financiamiento",
      ],
      score: {
        readinessGap: "Media",
        routeComplexity: "Alta",
        partnerDependency: "Media",
        executionRisk: "Medio",
        firstMove: "Validar ruta de registro + ruta local",
      },
      businessPlan,
    },
    cta: {
      eyebrow: "Planifica la ruta",
      title: "Planifica esta ruta de entrada al mercado con Sax Global.",
      subtitle:
        "Valida la ruta de registro, la ruta al mercado y las brechas de readiness antes de comprometer recursos en los negocios públicos de EE. UU.",
      primaryLabel: "Hablar con Sax Global",
      secondaryLabel: "Explorar GovDecision",
    },
  },

  /* ----------------------- Brazil → UN & World Bank (multilateral) */
  "brazil-to-un-world-bank": {
    originLabel: "Brasil",
    targetLabel: "ONU y Banco Mundial",
    heroEyebrow: "Ruta multilateral · Brasil → ONU y Banco Mundial",
    heroTitle: "Prepárate para la contratación multilateral con más readiness.",
    heroSubtitle:
      "Las agencias de la ONU y los proyectos financiados por el Banco Mundial compran una amplia gama de bienes y servicios en todo el mundo. Para un proveedor brasileño, la ruta empieza con registro, elegibilidad y documentación — y luego calificar qué licitaciones realmente valen la pena.",
    readinessPriority: "Registro + elegibilidad",
    firstStep: "Supplier Passport + registro en UNGM",
    metaTitle: "Contratación de la ONU y el Banco Mundial desde Brasil — GovDecision",
    metaDescription:
      "Explora cómo los proveedores brasileños pueden prepararse para la contratación de la ONU y el Banco Mundial con los workflows de readiness de GovDecision y el soporte de acceso a mercado de Sax Global.",
    metrics: [
      {
        label: "Contratación del sistema ONU",
        value: "≈ US$24.9 mil millones",
        note: "UNOPS ASR · 2023",
      },
      {
        label: "Organizaciones de la ONU que reportan",
        value: "32 organizaciones",
        note: "UNOPS ASR · 2023",
      },
      {
        label: "Contratos financiados por el Banco Mundial",
        value: "≈ US$15 mil millones/año",
        note: "GAO · promedio FY2013–2022",
      },
      { label: "Moneda común", value: "Dólar estadounidense (USD)" },
      {
        label: "Idiomas de trabajo",
        value: "Inglés +",
        note: "Idiomas de trabajo de la ONU",
      },
      {
        label: "Acceso a registro",
        value: "UNGM · proyectos del Banco Mundial",
      },
    ],
    marketOverview:
      "La contratación multilateral es un juego distinto de la compra pública local. Las agencias de la ONU y los proyectos financiados por el Banco Mundial ejecutan procesos estructurados y guiados por elegibilidad, con sus propios sistemas de registro, reglas de integridad y códigos de categoría. El trabajo de readiness — registro, screening de elegibilidad, documentación — viene primero, y calificar las licitaciones correctas viene después.",
    whyItMatters: [
      "El registro pasa por sistemas como UNGM, mientras que las licitaciones del Banco Mundial las ejecutan los gobiernos prestatarios bajo las reglas del Banco.",
      "Los requisitos de elegibilidad, integridad y antifraude son estrictos y se verifican, no se eximen.",
      "Las expectativas de categoría y de normas difieren por agencia y licitación — deben validarse, no presumirse.",
    ],
    checklist: [
      {
        item: "Perfil del proveedor y elegibilidad",
        description:
          "Un perfil estructurado más una visión clara de tu elegibilidad para licitaciones multilaterales.",
      },
      {
        item: "Registro en UNGM",
        description:
          "El registro en el United Nations Global Marketplace abre acceso a muchas agencias de la ONU.",
      },
      {
        item: "Readiness de proveedor para proyectos del Banco Mundial",
        description:
          "Las licitaciones financiadas por el Banco las ejecutan los gobiernos prestatarios bajo reglas del Banco; el proceso varía por proyecto.",
      },
      {
        item: "Screening de elegibilidad y de exclusión",
        description:
          "Confirma que no estás en listas de sanciones / exclusión y que cumples los criterios de elegibilidad.",
      },
      {
        item: "Ajuste de categoría (UNSPSC)",
        description:
          "Mapea tu oferta a los códigos UNSPSC usados en las licitaciones de la ONU.",
      },
      {
        item: "Documentación y situación financiera",
        description:
          "Registros financieros y documentos de calificación exigidos por la licitación.",
      },
      {
        item: "Certificaciones / normas",
        description:
          "Las certificaciones de calidad, sostenibilidad o sector pueden fortalecer o ser exigidas según la licitación.",
      },
      {
        item: "Presencia local / capacidad de entrega",
        description:
          "Depende de dónde se entreguen los bienes o servicios y de los Incoterms usados.",
      },
      {
        item: "Readiness de idioma / documentos",
        description:
          "El inglés es común; algunas licitaciones usan otros idiomas de trabajo de la ONU.",
      },
      {
        item: "Garantías de ejecución",
        description:
          "Las garantías de oferta o de ejecución dependen de la licitación y del valor del contrato.",
      },
      {
        item: "Compliance de ética / antifraude",
        description:
          "La ONU y el Banco Mundial aplican requisitos estrictos de integridad y anticorrupción.",
      },
      {
        item: "Planificación de ejecución y entrega",
        description:
          "Planifica logística, entrega y obligaciones antes de perseguir una licitación.",
      },
    ],
    commonBlockers: [
      "Ver la licitación demasiado tarde",
      "Registro incompleto en UNGM o como proveedor",
      "Problemas de elegibilidad o de lista de exclusión",
      "Desajuste de categoría / UNSPSC",
      "Subestimar la documentación y las normas",
      "Brechas de entrega, logística e Incoterms",
      "Brechas de compliance de integridad / antifraude",
    ],
    routeOptions: [
      "Participación directa en licitaciones vía UNGM",
      "Licitaciones lideradas por prestatarios del Banco Mundial",
      "Socio o agente local en el país de entrega",
      "Consorcio para contratos mayores",
      "Preparar el registro primero",
    ],
    govDecisionRole: [
      "El Supplier Passport organiza tu perfil, elegibilidad y documentación.",
      "La lógica de país / mercado aplica las reglas de registro y elegibilidad de la ONU y el Banco Mundial.",
      "La Calificación de Oportunidades puntúa qué licitaciones valen el esfuerzo.",
      "La extracción de requisitos asistida por IA lee las licitaciones y revela lo que exigen.",
      "La detección de bloqueos señala temprano brechas de registro, elegibilidad e integridad.",
      "Un memo go / no-go registra la decisión de avanzar — o prepararse primero.",
    ],
    recommendedRoute: "Registrar + calificar",
    decision: "Prepararse primero",
    sax: {
      intro:
        "El acceso multilateral es un recorrido estructurado y guiado por elegibilidad. Sax Global acompaña la estrategia de registro y elegibilidad, las conversaciones de socio y de ruta de entrega y el contexto práctico de ejecución para trabajos financiados por la ONU y el Banco Mundial.",
      role: [
        "Estrategia de registro y elegibilidad para los sistemas de la ONU y el Banco Mundial",
        "Conversaciones de socio y de ruta de entrega en el país objetivo",
        "Contexto de integridad y documentación para licitaciones multilaterales",
        "Orientación práctica de ejecución y financiamiento donde aplica",
      ],
      score: {
        readinessGap: "Media–Alta",
        routeComplexity: "Alta",
        partnerDependency: "Media",
        executionRisk: "Medio–Alto",
        firstMove: "Validar registro + elegibilidad",
      },
      businessPlan,
    },
    cta: {
      eyebrow: "Planifica la ruta",
      title: "Planifica esta ruta multilateral con Sax Global.",
      subtitle:
        "Prepárate en registro y elegibilidad para la contratación de la ONU y el Banco Mundial y, luego, califica las licitaciones que valen la pena.",
      primaryLabel: "Hablar con Sax Global",
      secondaryLabel: "Explorar GovDecision",
    },
  },

  /* ------------------------------ United States → Brazil (cross-border) */
  "united-states-to-brazil": {
    originLabel: "Estados Unidos",
    targetLabel: "Brasil",
    heroEyebrow: "Acceso a mercado transfronterizo",
    heroTitle:
      "Una ruta práctica para que proveedores de EE. UU. aborden la contratación pública brasileña.",
    heroSubtitle:
      "Brasil puede ser un mercado relevante en el sector público, pero los proveedores extranjeros necesitan más que alertas de oportunidad. GovDecision ayuda a estructurar la decisión, mientras que Sax Global ayuda a evaluar la ruta de acceso a mercado.",
    readinessPriority: "Ruta local + validación de documentación",
    firstStep: "Revisión de acceso a mercado + Supplier Passport",
    metaTitle: "Negocios públicos de Estados Unidos a Brasil — GovDecision",
    metaDescription:
      "Explora cómo los proveedores de EE. UU. pueden evaluar una ruta hacia la contratación pública brasileña con los workflows de readiness de GovDecision y el soporte de acceso a mercado de Sax Global.",
    metrics: [
      {
        label: "Población objetivo",
        value: "≈ 212 millones",
        note: "World Bank · 2024",
      },
      {
        label: "PIB objetivo",
        value: "≈ US$2.18 billones",
        note: "World Bank · 2024",
      },
      {
        label: "Contratación pública",
        value: "≈ 12–14% del PIB",
        note: "Estimación · contexto OECD",
      },
      { label: "Moneda", value: "Real brasileño (BRL)" },
      { label: "Idioma principal", value: "Portugués" },
      {
        label: "Tipo de mercado",
        value: "Entrada transfronteriza",
        note: "Ruta local + documentación",
      },
    ],
    marketOverview:
      "Brasil opera uno de los mayores entornos de contratación pública del mundo — compradores federales, estatales y municipales, empresas estatales y servicios sociales autónomos (el contexto del Sistema S donde aplica) — en un portal nacional y en muchos portales específicos de comprador. Para un proveedor de EE. UU. la oportunidad es real, pero también la complejidad: registro y documentación, operaciones en portugués, consideraciones de ruta local y de representante, y cuestiones fiscales, de importación y de ejecución que deben validarse antes de avanzar. Los requisitos varían por comprador, categoría, modalidad, fuente y oportunidad.",
    whyItMatters: [
      "Los compradores y las fuentes están fragmentados entre contextos federal, estatal, municipal, de empresas estatales y del Sistema S — cada uno con sus propios portales y reglas.",
      "Las operaciones ocurren en portugués, y la documentación suele necesitar localización más una ruta de registro local validada, no solo traducción.",
      "La ruta al mercado y los supuestos fiscales, de importación y de entrega deben validarse antes de comprometer recursos.",
    ],
    checklist: [
      {
        item: "Supplier Passport",
        description:
          "Un perfil claro y estructurado de lo que tu empresa vende y puede comprobar en el exterior.",
      },
      {
        item: "Ajuste de producto / categoría",
        description:
          "Confirma que tu oferta corresponda a la demanda real de los compradores brasileños y a los objetos de licitación.",
      },
      {
        item: "Documentación en portugués",
        description:
          "Los pliegos y la comunicación ocurren en portugués; los documentos suelen necesitar localización, no solo traducción.",
      },
      {
        item: "Monitoreo de las fuentes de contratación brasileñas",
        description:
          "PNCP, Compras.gov.br y los portales específicos de comprador traen oportunidades distintas.",
      },
      {
        item: "Ruta de registro local",
        description:
          "Cómo se registra y habilita un proveedor extranjero depende del comprador, la categoría y la modalidad — valida antes de presumir.",
      },
      {
        item: "Contexto de representación fiscal / tributaria",
        description:
          "Las necesidades de representación fiscal y tributaria dependen de la ruta y de la naturaleza del suministro.",
      },
      {
        item: "Estrategia de representante / distribuidor local",
        description:
          "A menudo útil y, a veces, efectivamente exigida por la ruta o el contexto del comprador.",
      },
      {
        item: "Viabilidad de importación / logística",
        description:
          "La viabilidad de importación, aduana y entrega depende del producto y de las condiciones.",
      },
      {
        item: "Requisito de stock local",
        description:
          "Depende del producto, las condiciones de entrega y las expectativas del comprador.",
      },
      {
        item: "Requisito de producción / contenido local",
        description:
          "Las reglas de contenido nacional no son universales; valida las reglas de la categoría y del comprador antes de presumir.",
      },
      {
        item: "Certificación / documentación técnica",
        description:
          "Las certificaciones de sector o la documentación técnica pueden aplicar según el objeto y el comprador.",
      },
      {
        item: "Caución / garantía / condiciones de pago",
        description:
          "Las garantías, cauciones y plazos de pago varían por pliego — valida por oportunidad.",
      },
      {
        item: "Readiness de ejecución y posterior a la adjudicación",
        description:
          "Planifica entrega, soporte y obligaciones posteriores a la adjudicación antes de avanzar.",
      },
    ],
    commonBlockers: [
      "Malinterpretar la fragmentación de compradores y fuentes de Brasil",
      "Presumir que toda oportunidad es accesible desde el exterior",
      "Brechas de documentación y comunicación en portugués",
      "Complejidad fiscal y de importación",
      "Una ruta local poco clara",
      "Falta de estrategia de representante o distribuidor",
      "Supuestos de entrega y stock locales",
      "Sorpresas con garantías y plazos de pago",
      "Certificaciones específicas de la categoría faltantes",
      "Falta de disciplina de participar / no participar",
    ],
    routeOptions: [
      "Representante local o agente comercial",
      "Distribuidor o socio de canal",
      "Subsidiaria brasileña o entidad local",
      "Teaming o subcontratación con un proveedor local",
      "Prepararse primero, luego entrar",
    ],
    govDecisionRole: [
      "El Supplier Passport convierte datos dispersos de la empresa de EE. UU. en un perfil estructurado y reutilizable.",
      "La lógica de Country Pack aplica las reglas de comprador, fuente y registro de Brasil a tu situación.",
      "La Calificación de Oportunidades puntúa el ajuste y lee el comprador y la fuente detrás de cada aviso.",
      "La extracción de requisitos asistida por IA revela lo que exige un pliego, en términos claros.",
      "La detección de bloqueos señala temprano brechas de documentación, registro y ruta local.",
      "Un memo go / no-go y el Deal Room mantienen una decisión transfronteriza auditable y lista para la ejecución posterior a la adjudicación.",
    ],
    recommendedRoute: "Validar ruta + documentos locales",
    decision: "Preparar y luego avanzar",
    sax: {
      intro:
        "La entrada transfronteriza a Brasil es donde el software se encuentra con el mundo real. Sax Global acompaña el recorrido de acceso a mercado — contexto de entrada a Brasil, validación de ruta local y de ruta de registro, estrategia de socio y distribuidor, readiness de documentación y operativa, y conversación práctica de ejecución transfronteriza.",
      role: [
        "Planificación de acceso a mercado y contexto de entrada a Brasil",
        "Validación de ruta local y de ruta de registro",
        "Conversación de estrategia de socio / distribuidor",
        "Contexto de documentación y readiness operativa",
        "Conversación de ejecución transfronteriza y de ruta comercial",
      ],
      score: {
        readinessGap: "Media",
        routeComplexity: "Alta",
        partnerDependency: "Media–Alta",
        executionRisk: "Medio",
        firstMove: "Validar ruta en Brasil + contexto de documentación local",
      },
      businessPlan,
    },
    cta: {
      eyebrow: "Planifica la ruta",
      title: "Planifica esta ruta de entrada al mercado con Sax Global.",
      subtitle:
        "Valida la ruta en Brasil, el contexto de documentación local y las brechas de readiness antes de comprometer recursos en la contratación pública brasileña.",
      primaryLabel: "Hablar con Sax Global",
      secondaryLabel: "Explorar GovDecision",
    },
  },

  /* -------------------------------------- Brazil → Paraguay (regional) */
  "brazil-to-paraguay": {
    originLabel: "Brasil",
    targetLabel: "Paraguay",
    heroEyebrow: "Acceso a mercado regional",
    heroTitle:
      "Una ruta regional para que proveedores brasileños exploren la contratación pública de Paraguay.",
    heroSubtitle:
      "Paraguay puede ser una ruta práctica de expansión regional para proveedores brasileños, pero la ruta aún requiere validación de mercado, documentación, contexto local y planificación de ejecución.",
    readinessPriority: "Validación del country pack + ruta local",
    firstStep: "Revisión de readiness + planificación de acceso a mercado regional",
    metaTitle: "Negocios públicos de Brasil a Paraguay — GovDecision",
    metaDescription:
      "Explora cómo los proveedores brasileños pueden evaluar una ruta regional hacia la contratación pública de Paraguay con los workflows de readiness de GovDecision y el soporte de acceso a mercado de Sax Global.",
    metrics: [
      {
        label: "Población objetivo",
        value: "≈ 6.9 millones",
        note: "World Bank · 2024",
      },
      {
        label: "PIB objetivo",
        value: "≈ US$44.5 mil millones",
        note: "World Bank · 2024",
      },
      {
        label: "Contratación pública",
        value: "Validación pendiente",
        note: "DNCP · volumen consolidado no confirmado",
      },
      { label: "Moneda", value: "Guaraní paraguayo (PYG)" },
      { label: "Idioma principal", value: "Español · Guaraní cooficial" },
      {
        label: "Acceso a contratación",
        value: "DNCP · contrataciones.gov.py",
        note: "Portal nacional de contratación",
      },
    ],
    marketOverview:
      "Paraguay puede ser una ruta práctica de expansión regional para proveedores brasileños — la proximidad geográfica, la familiaridad con el Mercosur y con los negocios regionales y una vecindad compartida reducen parte de la fricción. Pero sigue siendo un mercado extranjero: las operaciones ocurren en español, los portales y reglas de contratación pública deben validarse, las necesidades de representación o socio local dependen de la oportunidad, y los supuestos de entrega, logística, documentación y compliance deben verificarse. Paraguay debe evaluarse corredor por corredor y categoría por categoría, con validación de fuentes y revisión de los supuestos de ruta local antes de avanzar.",
    whyItMatters: [
      "La proximidad geográfica y la familiaridad con el Mercosur pueden reducir la fricción, pero no eliminan la complejidad de la contratación.",
      "Las operaciones ocurren en español (el guaraní es cooficial), y la documentación puede requerir traducción o legalización según la oportunidad.",
      "La contratación pasa por el sistema nacional de la DNCP; las fuentes, las reglas del comprador y los supuestos de ruta local deben validarse corredor por corredor.",
    ],
    checklist: [
      {
        item: "Supplier Passport",
        description:
          "Un perfil claro y estructurado de lo que tu empresa vende y puede comprobar en un nuevo mercado.",
      },
      {
        item: "Ajuste de producto / categoría",
        description:
          "Confirma que tu oferta corresponda a la demanda real de los compradores paraguayos y a los objetos de licitación.",
      },
      {
        item: "Documentación en español",
        description:
          "Las licitaciones y la comunicación ocurren en español; los documentos suelen necesitar localización, no solo traducción.",
      },
      {
        item: "Validación de las fuentes de contratación paraguayas",
        description:
          "Valida el sistema de la DNCP y cualquier fuente específica de comprador antes de confiar en ellas.",
      },
      {
        item: "Requisitos de registro local",
        description:
          "Cómo se registra y califica un proveedor extranjero depende del comprador, la categoría y la modalidad — valida por oportunidad.",
      },
      {
        item: "Estrategia de representante / distribuidor local",
        description:
          "A menudo útil y, a veces, efectivamente exigida por la ruta o el contexto del comprador.",
      },
      {
        item: "Requisito de empresa local",
        description:
          "Si se necesita una empresa o presencia local depende de la oportunidad — valida antes de presumir.",
      },
      {
        item: "Requisito de stock local",
        description:
          "Depende de las condiciones de entrega y de las expectativas de plazo del comprador.",
      },
      {
        item: "Requisito de producción / contenido local",
        description:
          "Las reglas de contenido nacional no son universales; valida las reglas del comprador y la categoría antes de presumir.",
      },
      {
        item: "Viabilidad aduanera / logística",
        description:
          "La viabilidad aduanera, de transporte y de entrega depende del producto y de las condiciones.",
      },
      {
        item: "Garantías / condiciones de pago",
        description:
          "Las garantías de oferta o de ejecución y los plazos de pago varían por licitación — valida por oportunidad.",
      },
      {
        item: "Legalización / traducción de documentos",
        description:
          "La legalización o traducción certificada puede aplicar según los documentos y la licitación.",
      },
      {
        item: "Readiness de ejecución",
        description:
          "Planifica entrega, soporte y obligaciones posteriores a la adjudicación antes de avanzar.",
      },
    ],
    commonBlockers: [
      "Presumir que la proximidad regional elimina la complejidad de la contratación",
      "Falta de documentación en español o local",
      "Una ruta local poco clara",
      "Falta de validación de fuentes",
      "Requisitos específicos del comprador",
      "Supuestos de entrega y logística",
      "Sorpresas con garantías y plazos de pago",
      "Falta de soporte comercial local",
      "Sin checklist de readiness específico del país",
    ],
    routeOptions: [
      "Representante local o agente comercial",
      "Distribuidor o socio de canal",
      "Empresa local o presencia registrada donde se requiera",
      "Suministro transfronterizo bajo condiciones validadas",
      "Preparar el country pack primero, luego entrar",
    ],
    govDecisionRole: [
      "El Supplier Passport convierte el perfil de tu empresa brasileña en un perfil estructurado y reutilizable.",
      "La validación del Country Pack aplica las reglas de la DNCP, las fuentes y la lógica de registro de Paraguay.",
      "La Calificación de Oportunidades puntúa el ajuste y filtra qué oportunidades valen la pena.",
      "La detección de bloqueos señala temprano brechas de documentación, registro y ruta local.",
      "La recomendación de ruta muestra si conviene ir directo, representar, distribuir o prepararse primero.",
      "Un memo go / no-go y el Deal Room mantienen la decisión regional auditable y lista para la ejecución posterior a la adjudicación.",
    ],
    recommendedRoute: "Validar country pack + ruta",
    decision: "Prepararse primero",
    sax: {
      intro:
        "Un movimiento regional hacia Paraguay es más práctico que una entrada transfronteriza distante, pero sigue siendo un recorrido de acceso a mercado. Sax Global acompaña la planificación de acceso a mercado regional, la validación de ruta local, la conversación de ruta de socio y distribuidor, el contexto de documentación y readiness y un plan para los primeros 90 días.",
      role: [
        "Planificación de acceso a mercado regional",
        "Validación de ruta local",
        "Conversación de ruta de socio / distribuidor",
        "Contexto de documentación y readiness",
        "Plan para los primeros 90 días",
      ],
      score: {
        readinessGap: "Media",
        routeComplexity: "Media",
        partnerDependency: "Media",
        executionRisk: "Medio",
        firstMove: "Validar country pack + supuestos de ruta local",
      },
      businessPlan,
    },
    cta: {
      eyebrow: "Planifica la ruta",
      title: "Planifica esta ruta regional con Sax Global.",
      subtitle:
        "Valida el country pack, los supuestos de ruta local y las brechas de readiness antes de avanzar en la contratación pública de Paraguay.",
      primaryLabel: "Hablar con Sax Global",
      secondaryLabel: "Explorar GovDecision",
    },
  },
};
