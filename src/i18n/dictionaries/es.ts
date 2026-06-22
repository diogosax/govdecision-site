import type { Dictionary } from "./types";

/**
 * ES — neutral LATAM / international Spanish (not tied to one country).
 *
 * Tone: strategic, commercial, premium, founder-led where it helps. The whole
 * surface uses the informal "tú" register, kept consistent throughout (no
 * usted/tú mixing), which reads modern and direct without sounding casual.
 *
 * Conventions (SITE-010):
 *   - Brand and product-architecture names stay in English and are explained in
 *     Spanish: GovDecision, Sax Group, Sax Global, the plan names (GovDecision
 *     One / Assisted) and the six platform modules (Supplier Passport,
 *     Opportunity Qualification, Readiness Workspace, Country Packs, Deal Room,
 *     Post-Award Enablement). This keeps the product vocabulary consistent
 *     across locales (matching PT-BR).
 *   - "readiness" is used as the signature product concept (the recurring
 *     "Iniciar readiness" CTA, "organizar readiness"); "preparación" / "preparar"
 *     / "listo" are used for plain Spanish in flowing copy. Awkward combinations
 *     like "preparación de readiness" are avoided.
 *   - "Go/No-Go" is kept as concise business language.
 *   - "Government business" is rendered as "negocios gubernamentales" in
 *     positioning labels and "negocios con el gobierno" / "ventas al gobierno"
 *     where that reads clearer. USD figures use the US decimal convention.
 *   - Copy is deliberately tight to protect the approved layout — labels and
 *     CTAs stay short, headlines stay compact.
 */
export const es = {
  common: {
    nav: {
      platform: "Plataforma",
      marketAccess: "Mercados",
      opportunityBriefs: "Oportunidades",
      marketAccessOverview: "Acceso a mercados",
      partners: "Socios",
      capital: "Capital",
      pricing: "Precios",
      company: "Empresa",
      contact: "Contacto",
    },
    briefsPromo: {
      eyebrow: "Briefs de oportunidades públicas",
      title: "Mira cómo son las oportunidades públicas reales.",
      lead: "Ejemplos reales de demanda pública entre mercados — y por qué descubrir la oportunidad no alcanza.",
      cta: "Explorar los briefs",
    },
    cta: {
      startReadiness: "Iniciar readiness",
      headerStart: "Empezar",
      explorePlatform: "Conocer la plataforma",
      viewCorridors: "Ver corredores",
      viewPricing: "Ver precios",
      talkToSax: "Hablar con Sax Global",
      seeFullPlatform: "Ver la plataforma completa",
      allPaths: "Todas las rutas",
      aboutSax: "Sobre Sax Group",
      talkToTeam: "Hablar con el equipo",
    },
    login: "Entrar",
    skipToContent: "Saltar al contenido",
    languageSelector: {
      label: "Seleccionar idioma",
      current: "Actual",
    },
    footer: {
      tagline: "Inteligencia en ventas al sector público",
      blurb:
        "GovDecision es una plataforma de Sax Group, creada en Orlando, Florida. Sax Global apoya el acceso a mercados internacionales para proveedores que venden a gobiernos.",
      platformHeading: "Plataforma",
      getStartedHeading: "Comenzar",
      startReadiness: "Iniciar readiness",
      legalDisclaimer:
        "GovDecision ofrece apoyo a la decisión, flujos de preparación y orientación de acceso a mercados. No garantiza elegibilidad, habilitación, aceptación de ofertas, financiamiento, contratos ni resultados en compras públicas.",
      copyright: "Una plataforma de Sax Group.",
      madeWith: "Hecho con",
      inFlorida: "en Florida",
    },
  },

  home: {
    meta: {
      title: "GovDecision — Plataforma global de negocios gubernamentales",
      description:
        "GovDecision ayuda a proveedores a calificar oportunidades públicas, organizar readiness y acceder a mercados gubernamentales con mejores decisiones, en varios países.",
    },
    eyebrow: "Plataforma global de negocios gubernamentales",
    title:
      "Las oportunidades públicas existen en muchos mercados. Lo difícil es saber dónde competir.",
    subtitle:
      "GovDecision ayuda a proveedores a calificar oportunidades, organizar readiness y acceder a mercados gubernamentales con mejores decisiones, en varios países.",
    slogan: "Less Clipping, More Decision",
    strategicLead: "Ventas al gobierno, con mejores decisiones.",
    strategicRest: "De la preparación al contrato.",
    journey: [
      "Ruido de oportunidades",
      "Claridad de decisión",
      "Preparación",
      "Ruta de mercado",
      "Ejecución del contrato",
    ],
    problem: {
      eyebrow: "El problema real",
      title: "Más oportunidades no generan más victorias. Las mejores decisiones, sí.",
      lead: "El mercado está lleno de portales, alertas, PDFs y requisitos fragmentados. El dolor real no es encontrar oportunidades — es decidir qué vale la pena perseguir y qué resolver antes de poder competir.",
      paragraph:
        "La mayoría de los proveedores no pierde negocios con el gobierno por no haber visto la oportunidad. Pierde porque persiguió la equivocada, descubrió un requisito crítico demasiado tarde o le faltaron los documentos, registros o el socio local que el mercado exigía.",
      withoutLayer: "Sin una capa de decisión",
      noise: [
        "Alerta de licitación · baja afinidad",
        "Portal de licitación · vencido",
        "Conjunto de requisitos en PDF",
        "Notificación de portal",
        "Correo reenviado · poco claro",
      ],
      decisionTitle: "1 oportunidad que merece una decisión de verdad",
      decisionMeta: "Afinidad 84 · Preparación 72% · Perseguir con condiciones",
    },
    capabilities: {
      eyebrow: "Qué hace GovDecision",
      title: "Un sistema operativo de negocios con el gobierno para proveedores.",
      lead: "Seis capacidades te llevan del ruido de las oportunidades a una decisión defendible, un plan de preparación ejecutable y una ruta de mercado.",
      cards: [
        {
          title: "Calificar oportunidades",
          description:
            "Evalúa afinidad, complejidad y esfuerzo para que el equipo dedique tiempo a lo que sí puede ganar.",
        },
        {
          title: "Detectar bloqueos",
          description:
            "Identifica registros, certificados, garantías y requisitos de socio antes de que los plazos lo hagan.",
        },
        {
          title: "Construir preparación",
          description:
            "Convierte requisitos en tareas con responsables y fechas, y mira cómo sube la preparación.",
        },
        {
          title: "Recomendar ruta de mercado",
          description:
            "Directo, distribuidor, socio local, subcontrato, consorcio o preparar primero — guiado por afinidad y mercado.",
        },
        {
          title: "Estructurar decisiones",
          description:
            "Reúne estrategia, riesgo, precio y aprobaciones en una decisión que la dirección puede respaldar.",
        },
        {
          title: "Preparar el pos-contrato",
          description:
            "Planifica entrega, garantías, hitos y plazos financieros para que ganar se vuelva contrato ejecutado.",
        },
      ],
    },
    corridors: {
      eyebrow: "Corredores globales",
      title: "Una plataforma global para corredores de negocios con el gobierno.",
      lead: "Negocios globales con el gobierno, con apoyo de Sax Global.",
      coverage:
        "La cobertura evoluciona según los paquetes por país, las fuentes disponibles, la demanda de clientes y la validación operativa.",
    },
    ai: {
      eyebrow: "Con apoyo de IA, guiado por decisiones",
      title: "La IA elimina el trabajo repetitivo. Las personas deciden.",
      lead: "GovDecision usa IA para reducir el desperdicio operativo y apoyar decisiones de negocio calibradas por personas — nunca para reemplazar tu criterio.",
      cardLabel: "Apoyo de IA · resumen ejecutivo",
      cardLines: [
        "14 requisitos extraídos de 38 páginas",
        "3 bloqueos detectados · 1 crítico",
        "Plazo interpretado · 19 días restantes",
        "Decisión: perseguir con condiciones",
      ],
      points: [
        "Extraer requisitos de documentos largos y fragmentados",
        "Resumir oportunidades en briefings claros",
        "Detectar bloqueos y brechas de preparación",
        "Apoyar el análisis de preparación y la decisión Go/No-Go",
      ],
    },
    sax: {
      eyebrow: "Apoyo de Sax Global",
      title: "El software estructura el proceso. Sax Global apoya la ruta.",
      lead: "GovDecision cuenta con Sax Global, el brazo de negocios internacionales de Sax Group. Cuando corresponde, Sax Global puede apoyar acceso a mercados, estrategia de socio local, contexto de estructuración, ejecución internacional y orientación de preparación.",
      cards: [
        {
          title: "Acceso a mercados",
          description: "Rutas de entrada prácticas por país y corredor.",
        },
        {
          title: "Estrategia de socio local",
          description: "Cuándo asociarte, distribuir o ir directo.",
        },
        {
          title: "Contexto de estructuración",
          description: "Lo que la ejecución internacional realmente exige.",
        },
        {
          title: "Orientación de preparación",
          description: "Apoyo calibrado para cerrar las brechas.",
        },
      ],
    },
    finalCta: {
      eyebrow: "De la preparación al contrato",
      title: "Conviértete en un proveedor listo para el gobierno.",
      subtitle:
        "Comienza por la preparación. Persigue con método. Crece en mercados del sector público con mejores decisiones.",
    },
  },

  platform: {
    meta: {
      title: "Plataforma",
      description:
        "La capa de decisión para ventas al gobierno: Supplier Passport, Opportunity Qualification, Readiness Workspace, Country Packs, Deal Room y Post-Award Enablement.",
    },
    eyebrow: "La plataforma",
    title: "La capa de decisión para ventas al gobierno.",
    lead: "Seis módulos conectados llevan al proveedor del ruido de las oportunidades a una decisión Go/No-Go defendible, un plan de preparación ejecutable y una ruta de mercado — en varios países.",
    moduleLabel: "Módulo",
    modules: [
      {
        name: "Supplier Passport",
        tagline: "Un perfil estructurado de lo que tu empresa entrega de verdad.",
        description:
          "Un perfil vivo de tu empresa que toda decisión consulta — para evaluar afinidad, bloqueos y rutas contra la realidad, no por intuición.",
        points: [
          "Datos de la empresa",
          "Productos y capacidades",
          "Certificaciones y documentos",
          "Países y límites comerciales",
          "Preparación para exportar",
          "Restricciones operativas",
        ],
      },
      {
        name: "Opportunity Qualification",
        tagline: "Descubre qué vale la pena antes de invertir una semana en ello.",
        description:
          "Cada oportunidad recibe un puntaje de afinidad, complejidad y esfuerzo, con bloqueos y requisitos críticos detectados a tiempo y una recomendación Go/No-Go clara.",
        points: [
          "Puntaje de afinidad",
          "Puntaje de complejidad",
          "Puntaje de esfuerzo",
          "Detección de bloqueos",
          "Extracción de plazos",
          "Requisitos críticos",
          "Recomendación Go/No-Go",
        ],
      },
      {
        name: "Readiness Workspace",
        tagline: "Convierte requisitos faltantes en un plan con responsables y fechas.",
        description:
          "Las listas de documentos, país y oportunidad se vuelven tareas con responsables y plazos, para que la preparación sea progreso medible y no una carrera.",
        points: [
          "Lista de documentos",
          "Lista por país",
          "Lista de la oportunidad",
          "Tareas, responsables y plazos",
          "Progreso de preparación",
        ],
      },
      {
        name: "Country Packs",
        tagline: "Las reglas locales del juego, estructuradas por mercado.",
        description:
          "Lógica específica de cada país para fuentes, registro, elegibilidad, socios locales, vías de presentación y la fricción operativa que sorprende al proveedor.",
        points: [
          "Fuentes específicas del país",
          "Lógica de registro",
          "Elegibilidad",
          "Requisitos de socio local",
          "Vía de presentación",
          "Documentos comunes",
          "Fricción operativa",
          "Notas de moneda e idioma",
        ],
      },
      {
        name: "Deal Room",
        tagline: "Donde la decisión de perseguir se toma y se aprueba.",
        description:
          "Una decisión estructurada reúne estrategia, elección de ruta, riesgos, supuestos de precio y necesidades de socio en un flujo de aprobación que la dirección firma.",
        points: [
          "Memorando de decisión",
          "Estrategia de oferta",
          "Elección de ruta",
          "Riesgos",
          "Supuestos de precio",
          "Necesidades de socio",
          "Flujo de aprobación",
        ],
      },
      {
        name: "Post-Award Enablement",
        tagline: "Ganar es el comienzo — la ejecución es donde está el margen.",
        description:
          "Preparación de entrega, garantías, hitos y plazos financieros se estructuran antes de volverse problema, para que ganar se vuelva contrato ejecutado.",
        points: [
          "Preparación de entrega",
          "Garantías",
          "Hitos",
          "Plazos de pago",
          "Necesidad de capital de trabajo",
          "Preparación financiera",
        ],
      },
    ],
    finalCta: {
      title: "Mira la capa de decisión en tus propias oportunidades.",
      subtitle:
        "Comienza por la preparación y califica oportunidades reales con método — en cada corredor que quieras atacar.",
      secondaryLabel: "Ver precios",
    },
  },

  marketAccess: {
    meta: {
      title: "Acceso a mercados — GovDecision",
      description:
        "Elige dónde está tu empresa y a qué gobiernos quieres venderle. GovDecision ayuda a proveedores a entender rutas locales e internacionales con más preparación y mejores decisiones.",
    },
    hero: {
      eyebrow: "Rutas de acceso a mercados",
      title:
        "Encuentra los mercados públicos que tu empresa puede perseguir de verdad.",
      subtitle:
        "Elige dónde está tu empresa y a quién quieres venderle. GovDecision te ayuda a entender la ruta, los bloqueos, la preparación y la ruta de mercado.",
      slogan:
        "Local o internacional, vender al gobierno empieza con mejores decisiones.",
      primaryCta: "Iniciar readiness",
      secondaryCta: "Ver rutas",
    },
    twoPaths: {
      eyebrow: "Dos rutas",
      title: "Dos formas de entrar en negocios con el gobierno.",
      lead: "Todo proveedor empieza en uno de dos lugares: vendiendo en su propio país o cruzando una frontera. GovDecision estructura las dos rutas — y Sax Global apoya donde el recorrido va más allá del software.",
      examplesLabel: "Ejemplos",
      modes: [
        {
          label: "Negocios gubernamentales locales",
          copy: "Vende a compradores públicos en tu mercado con una calificación más clara, preparación documental y disciplina al decidir ofertar.",
          helpsLabel: "Dónde ayuda GovDecision",
          helps: [
            "Encontrar lo que vale la pena",
            "Detectar documentos faltantes",
            "Organizar la preparación",
            "Estructurar decisiones Go/No-Go",
            "Preparar la ejecución pos-contrato",
          ],
        },
        {
          label: "Negocios gubernamentales internacionales",
          copy: "Evalúa oportunidades en mercados extranjeros o multilaterales con preparación específica por país, lógica de ruta de mercado y apoyo de Sax Global.",
          helpsLabel: "Dónde ayudan GovDecision + Sax Global",
          helps: [
            "Ruta de acceso al mercado",
            "Lógica del paquete por país",
            "Estrategia de socio local",
            "Contexto de registro y preparación",
            "Planificación de ejecución internacional",
            "Decisión estructurada antes de ofertar",
          ],
        },
      ],
    },
    finder: {
      eyebrow: "Buscador de rutas",
      title: "Elige tu ruta.",
      lead: "Define dónde está tu empresa y a quién quieres venderle. Te mostramos el tipo de ruta, lo que suele exigir y el primer paso correcto.",
    },
    selector: {
      originPrompt: "¿Dónde está tu empresa?",
      targetPrompt: "¿A qué gobiernos quieres venderle?",
      selectedPath: "Ruta seleccionada",
      pathType: "Tipo de ruta",
      requires: "Lo que esto suele exigir",
      recommendedFirstStepLabel: "Primer paso recomendado",
      recommendedFirstStep: "Comienza con un diagnóstico de preparación de GovDecision.",
      startReadiness: "Iniciar readiness",
      requirements: {
        Local: [
          "calificación de oportunidades",
          "preparación documental del proveedor",
          "disciplina Go/No-Go",
          "preparación de ejecución pos-contrato",
        ],
        "Cross-border": [
          "preparación del proveedor",
          "requisitos específicos del país",
          "validación de la ruta de mercado",
          "estrategia de socio local/comercial",
          "preparación de ejecución y financiera",
        ],
        Multilateral: [
          "registro de proveedor",
          "elegibilidad internacional",
          "preparación documental",
          "calificación de oportunidades",
          "decisión estructurada antes de ofertar",
        ],
        Regional: [
          "preparación para expansión regional",
          "validación del paquete por país",
          "estrategia de ruta local",
          "evaluación de preparación",
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
      "Active focus": "Foco activo",
      "In development": "En desarrollo",
      Targeted: "Identificado",
    },
    paths: {
      eyebrow: "Rutas de acceso a mercados",
      title: "Rutas que estamos construyendo.",
      lead: "Un conjunto creciente de rutas locales e internacionales. Empieza cualquiera de ellas con una conversación de preparación hoy — las páginas detalladas están en camino.",
      corridorPrompt:
        "¿Buscas el mapa completo? Explora cada corredor donde GovDecision actúa hoy.",
      corridorLink: "Ver corredores",
      cards: {
        "brazil-brazil": {
          title:
            "Vende a compradores públicos de Brasil con más calificación y preparación.",
          summary:
            "Lleva disciplina a las compras públicas de Brasil — desde encontrar lo que vale la pena hasta organizar los documentos y decisiones de cada oferta.",
          focusAreas: [
            "Fuentes oficiales/públicas de oportunidades",
            "Documentación del proveedor",
            "Extracción de requisitos",
            "Disciplina Go/No-Go",
            "Flujos asistidos",
          ],
          ctaLabel: "Ver ruta local Brasil",
        },
        "united-states-united-states": {
          title: "Estructura tu enfoque a las oportunidades del gobierno de EE. UU.",
          summary:
            "Convierte la escala de las compras públicas de EE. UU. en un plan enfocado — los registros, las categorías y las oportunidades correctas.",
          focusAreas: [
            "Panorama de oportunidades federales",
            "Vías de registro de proveedor",
            "Requisitos de preparación",
            "Afinidad de categoría",
            "Disciplina en la búsqueda",
          ],
          ctaLabel: "Ver ruta local EE. UU.",
        },
        "brazil-united-states": {
          title:
            "Ayuda a proveedores brasileños a evaluar la entrada al gobierno de EE. UU.",
          summary:
            "Entiende qué exige una entrada creíble al sector público de EE. UU. antes de invertir — preparación, registro y ruta.",
          focusAreas: [
            "Preparación para exportar",
            "Estrategia de ruta local",
            "Contexto de la vía de registro",
            "Opciones de socio/distribuidor",
            "Apoyo de Sax Global",
          ],
          ctaLabel: "Ver ruta Brasil → EE. UU.",
        },
        "brazil-un-world-bank": {
          title:
            "Prepárate para las compras multilaterales con readiness y documentación más sólidas.",
          summary:
            "Queda listo en registro y documentación para las compras de la ONU y el Banco Mundial, y califica lo que vale la pena.",
          focusAreas: [
            "Registro de proveedor",
            "Elegibilidad internacional",
            "Documentación",
            "Calificación de oportunidades",
            "Decisión estructurada",
          ],
          ctaLabel: "Ver ruta multilateral",
        },
        "united-states-brazil": {
          title:
            "Evalúa cómo proveedores de EE. UU. pueden abordar las compras públicas de Brasil.",
          summary:
            "Lee con claridad la complejidad de las compras públicas de Brasil y decide si representar, asociarte o esperar.",
          focusAreas: [
            "Complejidad del mercado local",
            "Conocimiento de compradores y fuentes",
            "Estrategia de representación o socio",
            "Preparación documental",
            "Contexto de Sax Global",
          ],
          ctaLabel: "Ver ruta EE. UU. → Brasil",
        },
        "brazil-paraguay": {
          title:
            "Explora la expansión regional en negocios gubernamentales con una ruta estructurada.",
          summary:
            "Crece en mercados públicos vecinos con un paquete por país validado y una ruta clara, sin improvisar.",
          focusAreas: [
            "Expansión regional",
            "Validación del paquete por país",
            "Estrategia de ruta local",
            "Evaluación de preparación",
          ],
          ctaLabel: "Ver ruta regional",
        },
      },
    },
    enters: {
      eyebrow: "Dónde entra GovDecision",
      title: "GovDecision convierte el interés de mercado en una ruta lista para decidir.",
      lead: "Seis pasos llevan al proveedor del interés de mercado a una decisión defendible — perseguir ahora o preparar primero.",
      note: "En lugar de correr tras cada oportunidad pública, GovDecision ayuda a proveedores a entender qué pueden perseguir de verdad, qué resolver primero y qué ruta tiene sentido para cada mercado.",
      journey: [
        {
          title: "Perfil del proveedor",
          description:
            "Registra lo que tu empresa es, vende y está lista para comprobar.",
        },
        {
          title: "Lógica de mercado/país",
          description:
            "Aplica las reglas, fuentes y requisitos de cada mercado objetivo.",
        },
        {
          title: "Calificación de oportunidades",
          description: "Evalúa la afinidad y filtra lo que no vale la pena.",
        },
        {
          title: "Brechas de preparación",
          description:
            "Revela los documentos, registros y bloqueos a resolver primero.",
        },
        {
          title: "Recomendación de ruta",
          description:
            "Ve si vas directo, te asocias, representas o distribuyes.",
        },
        {
          title: "Decisión: perseguir o preparar",
          description:
            "Decide perseguir ahora o preparar primero — con los motivos registrados.",
        },
      ],
    },
    sax: {
      eyebrow: "Dónde entra Sax Global",
      title: "Sax Global apoya la ruta más allá del software.",
      lead: "En rutas internacionales, el software es solo parte del recorrido. Sax Global puede apoyar la planificación de acceso a mercados, el contexto de estructuración internacional, las discusiones de ruta con socios y la orientación práctica de ejecución, cuando corresponde.",
      cta: "Hablar con Sax Global",
      disclaimer:
        "Sax Global ofrece planificación, contexto y orientación. No garantiza acceso a mercados, elegibilidad, designación de socios, financiamiento ni resultados en contratos.",
      services: [
        {
          title: "Planificación de acceso a mercados",
          description:
            "Diseña un enfoque de entrada realista para los mercados que quieres atacar.",
        },
        {
          title: "Estrategia de socio local",
          description:
            "Define cuándo asociarte, representar, distribuir o ir directo.",
        },
        {
          title: "Contexto de negocios internacionales",
          description:
            "Entiende qué suele implicar el negocio internacional con el gobierno.",
        },
        {
          title: "Preparación de ejecución internacional",
          description:
            "Prepara la base operativa que puede exigir competir en el exterior.",
        },
        {
          title: "Validación de ruta comercial",
          description:
            "Pon a prueba la ruta de mercado antes de comprometer recursos.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Empieza la ruta",
      title: "Empieza por la ruta. Luego construye la preparación.",
      subtitle:
        "Dinos dónde está tu empresa y a quién quieres venderle. Te ayudamos a entender el primer paso.",
      primary: "Iniciar readiness",
      secondary: "Hablar con Sax Global",
    },
  },

  pricing: {
    meta: {
      title: "Precios",
      description:
        "Dos formas de trabajar con GovDecision: GovDecision One (con foco en la plataforma, autoservicio) y GovDecision Assisted (con foco en servicio, con apoyo de Sax Global). Precios para Brasil (BRL) e internacional (USD).",
    },
    eyebrow: "Precios",
    title: "Una plataforma premium para quien va en serio con el gobierno.",
    lead: "GovDecision One se centra en la plataforma, para equipos que quieren estructura y velocidad. GovDecision Assisted se centra en el servicio, con apoyo de Sax Global para construir acceso real a mercados. No es una herramienta de clipping — es una plataforma de crecimiento.",
    note: "Los precios pueden variar según país, corredor, perfil de la empresa, nivel de apoyo asistido y volumen de oportunidades activas.",
    serviceLedBadge: "Con servicio",
    brazilLabel: "Brasil · BRL",
    internationalLabel: "Internacional · USD",
    plans: [
      {
        market: "Inteligencia vía plataforma",
        badge: "Plataforma",
        description:
          "Para proveedores que buscan una plataforma estructurada para calificar oportunidades, organizar la preparación y decidir dónde competir.",
        features: [
          "Supplier Passport",
          "Espacio de calificación de oportunidades",
          "Lista de preparación",
          "Acceso a paquetes por país",
          "Plantillas de briefing de decisión",
          "Organización básica del pipeline",
        ],
        cta: "Comenzar GovDecision One",
        priceBrazil: "R$ 379,00 / mes",
        priceInternational: "US$ 99.90 / mes",
        noteBrazil: "Para proveedores con sede en Brasil.",
        noteInternational: "Para EE. UU. y otros mercados atendidos.",
      },
      {
        market: "Acceso a mercados con servicio",
        badge: "Con Sax Global",
        description:
          "Para proveedores que buscan el apoyo de Sax Global para estructurar la preparación, evaluar oportunidades y construir rutas prácticas de negocios con el gobierno.",
        features: [
          "Todo lo de GovDecision One",
          "Onboarding asistido",
          "Calibración de preparación",
          "Apoyo en el análisis de oportunidades",
          "Orientación por corredor de país",
          "Apoyo en ruta de socios",
          "Memorandos ejecutivos de decisión",
          "Apoyo prioritario de Sax Global",
        ],
        cta: "Hablar con Sax Global",
        priceBrazil: "Consúltanos",
        priceInternational: "Precio USD a medida",
        noteBrazil: "Acceso a mercados con servicio de Sax Global.",
        noteInternational: "Definido por tu corredor, perfil y nivel de apoyo.",
      },
    ],
    compare: {
      eyebrow: "Comparar",
      title: "Qué incluye cada plan.",
      lead: "Ambos planes comparten la plataforma. Assisted añade el apoyo, la calibración y la orientación ejecutiva de Sax Global.",
      capability: "Capacidad",
      guided: "Asistido",
      rows: [
        "Supplier Passport",
        "Calificación de oportunidades",
        "Readiness Workspace",
        "Acceso a paquetes por país",
        "Plantillas de briefing de decisión",
        "Organización del pipeline",
        "Onboarding asistido",
        "Calibración de preparación",
        "Apoyo en el análisis de oportunidades",
        "Orientación de socio/ruta",
        "Memorandos ejecutivos de decisión",
        "Apoyo prioritario de Sax Global",
      ],
      values: {
        Standard: "Estándar",
        Guided: "Asistido",
        Basic: "Básico",
        Advanced: "Avanzado",
      },
    },
    finalCta: {
      eyebrow: "Comenzar",
      title: "Definamos el plan correcto para tu empresa.",
      subtitle:
        "El precio depende de tu país, corredor, perfil y del nivel de apoyo asistido que necesitas. Dinos dónde quieres competir.",
      primary: "Hablar con Sax Global",
      secondary: "Conocer la plataforma",
    },
  },

  company: {
    meta: {
      title: "Empresa",
      description:
        "GovDecision es una plataforma de Sax Group, creada en Orlando, Florida. Sax Global apoya el desarrollo de negocios internacionales, la internacionalización y el acceso a mercados para proveedores que venden a gobiernos.",
    },
    eyebrow: "Empresa",
    title: "Creada por Sax Group, en Florida, para proveedores que cruzan fronteras.",
    lead: "GovDecision es una plataforma de Sax Group, nacida de una tesis simple: los proveedores necesitan más que alertas de licitación. Necesitan preparación, calificación, apoyo a la decisión y estructura de ejecución para ganar negocios con el gobierno entre países.",
    facts: [
      { label: "Matriz", value: "Sax Group" },
      { label: "Brazo internacional", value: "Sax Global" },
      { label: "Con sede en", value: "Orlando, Florida" },
      { label: "Foco", value: "Ventas globales al sector público" },
    ],
    ownership: {
      eyebrow: "Propiedad y contexto",
      title: "Una plataforma de Sax Group, con apoyo de Sax Global.",
      lead: "Sax Group tiene su sede en Orlando, Florida. Sax Global, su brazo de negocios internacionales, apoya el desarrollo de negocios, la internacionalización y el acceso a mercados para empresas que entran en nuevos países.",
      p1: "GovDecision está en el encuentro entre software y servicio. La plataforma estructura el proceso de decisión y preparación; Sax Global aporta apoyo humano y práctico donde el acceso a mercados y la ejecución internacional lo exigen.",
      p2: "Esa combinación es deliberada. Las ventas al sector público recompensan a las empresas que se preparan con método y avanzan con confianza — no a las que persiguen cada notificación.",
    },
    why: {
      eyebrow: "Por qué la creamos",
      title: "Por qué Sax Group creó GovDecision",
      lead: "Las ventas al sector público son fragmentadas, complejas y difíciles de navegar entre países. GovDecision existe para ayudar a proveedores a transformar la complejidad de las compras públicas en claridad comercial.",
      beliefs: [
        {
          title: "Las decisiones ganan a las alertas",
          description:
            "Los proveedores necesitan saber dónde competir y dónde no — no otro feed de notificaciones de baja afinidad.",
        },
        {
          title: "La preparación es el trabajo real",
          description:
            "La mayoría de las derrotas viene de documentos, registros o socios descubiertos demasiado tarde.",
        },
        {
          title: "La ruta de mercado es estrategia",
          description:
            "Directo, distribuidor, socio, subcontrato, consorcio o preparar primero — la ruta lo cambia todo.",
        },
      ],
    },
    madeWith: {
      localLabelSuffix: "Sax Group · Orlando, Florida",
      heading: "Hecho con",
      inFlorida: "en Florida",
      body: "Less Clipping, More Decision — una plataforma para empresas que quieren crecer en los negocios gubernamentales, hecha con cuidado para quienes la usan.",
      cta: "Hablar con el equipo",
    },
    finalCta: {
      title: "Haz crecer tu negocio con el gobierno, con método.",
      subtitle:
        "Comienza por la preparación. Persigue con método. Crece en mercados del sector público con mejores decisiones.",
      secondary: "Conocer la plataforma",
    },
  },

  contact: {
    meta: {
      title: "Contacto",
      description:
        "Comienza tu conversación de preparación para venderle al gobierno con GovDecision. Cuéntanos qué vendes y dónde quieres competir.",
    },
    eyebrow: "Contacto",
    title: "Comienza tu conversación de preparación para el gobierno.",
    lead: "Cuéntanos qué vendes y dónde quieres competir. Te ayudamos a decidir dónde enfocarte, qué preparación necesitas y qué ruta de mercado tiene sentido.",
    aside: [
      {
        title: "Califica antes de comprometerte",
        description:
          "Te ayudamos a ver afinidad, bloqueos y esfuerzo antes de invertir una semana en la oportunidad equivocada.",
      },
      {
        title: "Construye preparación con método",
        description:
          "Convierte requisitos faltantes en un plan con responsables y fechas en los mercados que quieres atacar.",
      },
      {
        title: "Encuentra tu ruta de mercado",
        description:
          "Directo, distribuidor, socio local, subcontrato, consorcio — o preparar primero.",
      },
    ],
    preferEmail: "¿Prefieres correo?",
    alreadyCustomer: "¿Ya eres cliente?",
    loginCta: "Entrar a la app",
    disclaimer:
      "GovDecision ofrece apoyo a la decisión, flujos de preparación y orientación de acceso a mercados. No garantiza elegibilidad, habilitación, aceptación de ofertas, financiamiento, contratos ni resultados en compras públicas.",
    context: {
      local: "Tu consulta es sobre una ruta de readiness local con GovDecision.",
      cross: "Tu consulta es sobre una ruta de acceso a mercados con Sax Global.",
      localWithTarget:
        "Tu consulta es sobre una ruta de readiness local con GovDecision: {target}.",
      crossWithPair:
        "Tu consulta es sobre una ruta de acceso a mercados con Sax Global: {origin} → {target}.",
    },
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre completo",
      companyLabel: "Empresa",
      companyPlaceholder: "Nombre de la empresa",
      email: "Correo profesional",
      emailPlaceholder: "tu@empresa.com",
      country: "País",
      countryPlaceholder: "Dónde estás ubicado",
      markets: "Mercados de interés",
      marketsPlaceholder: "ej.: Estados Unidos, Brasil, ONU y Banco Mundial",
      message: "Mensaje",
      messagePlaceholder: "¿Qué vendes y dónde quieres competir?",
      submit: "Solicitar una conversación de preparación",
      submitting: "Enviando…",
      consent:
        "Al escribirnos, aceptas ser contactado sobre tu conversación de preparación. Sin spam.",
      successTitle: "Solicitud recibida.",
      successBody:
        "Gracias — recibimos tu solicitud. Te contactaremos pronto.",
      sendAnother: "Enviar otra solicitud",
      errorMessage:
        "No pudimos enviar tu solicitud ahora. Inténtalo de nuevo o escribe a contact@govdecision.com.",
    },
  },

  corridors: {
    meta: {
      title: "Corredores",
      description:
        "Corredores de negocios con el gobierno, estructurados por país: Estados Unidos, Brasil, Paraguay, México, Canadá, mercados africanos seleccionados, además de ONU y Banco Mundial.",
    },
    eyebrow: "Corredores globales",
    title: "Corredores de negocios con el gobierno, estructurados por país.",
    lead: "GovDecision combina un motor global de decisión con paquetes específicos por país para acceso a mercados, preparación, fuentes, registro, documentos y rutas de mercado.",
    globalLine: "Negocios globales con el gobierno, con apoyo de Sax Global.",
    coverage:
      "La cobertura evoluciona según los paquetes por país, las fuentes disponibles, la demanda de clientes y la validación operativa.",
    legend: {
      active: "Foco activo",
      inDev: "En desarrollo",
      multilateral: "Multilateral",
      hub: "Hub Sax Global",
    },
    combinesEyebrow: "Cómo funciona",
    combinesTitle: "Un motor global de decisión, anclado en la realidad de cada país.",
    combinesLead:
      "GovDecision une una lógica de decisión con paquetes específicos por país, para que cada recomendación refleje método global y reglas locales.",
    combines: [
      "Lógica global de decisión",
      "Paquetes específicos por país",
      "Fuentes oficiales/públicas donde existan",
      "Flujos de preparación del proveedor",
      "Estrategia de ruta de mercado",
      "Apoyo de Sax Global para acceso internacional",
    ],
    marketsEyebrow: "Mercados",
    marketsTitle: "Dónde actúa GovDecision hoy.",
    marketsLead:
      "Cada corredor combina fuentes, lógica de registro, requisitos de preparación y orientación de ruta de mercado.",
    coverageNote:
      "La cobertura se construye de forma progresiva, mediante paquetes por país, validación operativa, disponibilidad de fuentes y demanda de clientes.",
    corridorById: {
      us: {
        name: "Estados Unidos",
        summary:
          "Oportunidades federales, vías de registro de proveedor y estrategia de ruta comercial para el mayor comprador público del mundo.",
        focus: [
          "Oportunidades federales",
          "Vías de registro de proveedor",
          "Requisitos de preparación",
          "Estrategia de ruta local/comercial",
        ],
      },
      brazil: {
        name: "Brasil",
        summary:
          "Oportunidades en compras públicas con fuentes oficiales, documentación y flujos asistidos de preparación.",
        focus: [
          "Oportunidades en compras públicas",
          "Fuentes oficiales",
          "Preparación del proveedor",
          "Documentación",
          "Flujos asistidos",
        ],
      },
      paraguay: {
        name: "Paraguay",
        summary:
          "Corredor de expansión regional con desarrollo del paquete por país y validación de ruta local.",
        focus: [
          "Expansión regional",
          "Desarrollo del paquete por país",
          "Validación de ruta local",
        ],
      },
      mexico: {
        name: "México",
        summary:
          "Acceso a mercados y preparación del proveedor con validación de la ruta de mercado.",
        focus: [
          "Acceso a mercados",
          "Preparación del proveedor",
          "Validación de la ruta de mercado",
        ],
      },
      canada: {
        name: "Canadá",
        summary:
          "Oportunidades federales y preparación del proveedor con un paquete por país en evolución.",
        focus: [
          "Oportunidades federales",
          "Preparación del proveedor",
          "Evolución del paquete por país",
        ],
      },
      africa: {
        name: "Mercados africanos seleccionados",
        summary:
          "Oportunidades del sector público y de desarrollo, validadas país por país con lógica de socio local.",
        focus: [
          "Oportunidades públicas y de desarrollo",
          "Validación país por país",
          "Lógica de socio local",
        ],
      },
      multilateral: {
        name: "ONU y Banco Mundial",
        summary:
          "Compras multilaterales con registro de proveedor, elegibilidad internacional, preparación y documentación.",
        focus: [
          "Compras multilaterales",
          "Registro de proveedor",
          "Elegibilidad internacional",
          "Preparación y documentación",
        ],
      },
    },
    statusLabels: {
      "Active focus": "Foco activo",
      "In development": "En desarrollo",
      Targeted: "Identificado",
      Multilateral: "Multilateral",
    },
    finalCta: {
      title: "Planifica tu ruta hacia un nuevo mercado.",
      subtitle:
        "Dinos dónde quieres competir. Te ayudamos a decidir qué preparación y ruta tienen sentido.",
      primary: "Iniciar readiness",
      secondary: "Conocer la plataforma",
    },
  },
} satisfies Dictionary;

export default es;
