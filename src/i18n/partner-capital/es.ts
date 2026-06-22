import type { PartnerCapitalChrome } from "./types";

/**
 * ES — espejo en español neutro (LATAM) de las páginas Partner Network +
 * GovDecision Capital (SITE-015, refresco visual). Refleja exactamente la
 * estructura de en-US.ts.
 *
 * Revisión de seguridad de contenido: no se garantiza la colocación de socios,
 * ni financiamiento, ni préstamos directos, ni aprobación de crédito, ni acceso
 * garantizado al mercado o adjudicaciones. El lenguaje sobre socios y fondeo se
 * mantiene condicional ("rutas", "cuando corresponda", "puede ser relevante",
 * "debe validarse").
 */
export const es = {
  promo: {
    eyebrow: "Rutas y capital",
    title: "Encontrar la oportunidad es solo la mitad de la decisión.",
    lead: "Perseguir negocios con el gobierno suele requerir la ruta de socio adecuada y un caso financiero creíble. Vea cómo GovDecision y Sax Global ayudan a los proveedores a preparar ambos.",
    partner: {
      title: "Partner Network",
      lead: "Directo, socio local, distribuidor o subcontratación: comprenda la ruta antes de avanzar.",
      cta: "Explorar rutas de socio",
    },
    capital: {
      title: "GovDecision Capital",
      lead: "Capital de trabajo, garantías y tiempos de pago: estructure el caso financiero, no un préstamo.",
      cta: "Explorar preparación de capital",
    },
  },

  partners: {
    meta: {
      title: "GovDecision Partner Network — Rutas de acceso al mercado",
      description:
        "Explore cómo GovDecision y Sax Global ayudan a los proveedores a evaluar rutas directas, de distribuidor, de representante, de subcontratación y de socios para los negocios con el gobierno.",
    },
    breadcrumbName: "Partner Network",
    hero: {
      eyebrow: "Red de socios",
      title:
        "Los negocios con el gobierno suelen necesitar la ruta adecuada, no solo la oportunidad adecuada.",
      subtitle:
        "Sepa cuándo ir directo, asociarse localmente, usar un distribuidor, subcontratar o prepararse primero. Sax Global apoya la planificación de la ruta de socio cuando la ejecución transfronteriza es importante.",
      primaryCta: "Hablar con Sax Global",
      secondaryCta: "Explorar Market Access",
    },
    heroMockup: {
      windowTitle: "govdecision · Ruteo de socios",
      routeLabel: "Señal de ruta",
      routes: ["Directo", "Ruta de socio", "Prepararse primero"],
      recommended: "Recomendado",
      dependencyLabel: "Dependencia de socio",
      dependencyValue: "Media",
      illustrative: "Ilustrativo",
    },
    why: {
      eyebrow: "Por qué importa la estrategia de socios",
      title: "El software encuentra la oportunidad. La ruta la gana.",
      lead: "Una oportunidad calificada todavía necesita una forma de llegar al comprador: directamente, a través de un socio, o aún no.",
      points: [
        {
          title: "Más que software",
          description:
            "A menudo se necesita presencia, representación o un canal antes de poder entregar.",
        },
        {
          title: "Lo transfronterizo agrega dependencia",
          description:
            "Otro país puede implicar primero un representante, importador o distribuidor.",
        },
        {
          title: "La ruta equivocada es costosa",
          description:
            "Ir directo cuando necesitaba un socio se nota tarde, y caro.",
        },
      ],
    },
    routes: {
      eyebrow: "Opciones de ruta",
      title: "Siete formas de entrar a un mercado gubernamental.",
      lead: "La mayoría de las búsquedas se resuelven en una de unas pocas rutas. El trabajo está en elegir —y validar— la correcta.",
      options: [
        { title: "Venta directa", description: "Venda directamente al comprador." },
        { title: "Representante local", description: "Presencia y seguimiento en el terreno." },
        { title: "Distribuidor / revendedor", description: "Llegue al comprador por un canal existente." },
        { title: "Importador / trading", description: "Mueva bienes a través de un socio importador." },
        { title: "Subcontratista", description: "Suministre bajo un contratista principal." },
        { title: "Consorcio", description: "Asóciese para cumplir tamaño o contenido local." },
        { title: "Integrador técnico", description: "Entregue a través de un integrador de sistemas." },
      ],
    },
    matrix: {
      eyebrow: "Cuándo importa un socio",
      title: "Lea las señales antes de elegir.",
      lead: "Algunos contextos empujan hacia un socio, o hacia validar primero. Una lectura rápida, no un veredicto.",
      columns: {
        direct: "Ruta directa",
        partner: "Ruta de socio",
        validate: "Validar primero",
      },
      cellLabels: {
        strong: "Más fuerte",
        harder: "Más difícil",
        check: "Validar",
        none: "—",
      },
      rows: [
        "Comprador en el extranjero",
        "Requisito de entrega local",
        "Fricción de idioma / documentación",
        "Complejidad de registro en portal",
        "Ejecución posadjudicación",
        "Soporte de garantía / servicio",
      ],
    },
    categories: {
      eyebrow: "Categorías de socios",
      title: "El ecosistema que una búsqueda puede necesitar.",
      lead: "Según el mercado y el contrato, una ruta puede involucrar varias de estas posibles categorías de socios.",
      items: [
        "Representantes locales",
        "Distribuidores / revendedores",
        "Importadores / empresas de trading",
        "Integradores técnicos",
        "Especialistas en cumplimiento / regulación",
        "Asesoría legal / de contratación pública",
        "Traductores / soporte de localización",
        "Socios de logística / fulfillment",
        "Bancos / fintechs / factoring",
        "Socios de seguros / fianza / performance bond",
        "Socios de trade finance / FX",
      ],
      note: "Posibles categorías de socios a evaluar, no una lista de socios contratados. La búsqueda de socios se ofrece cuando corresponda, y cualquier ruta debe validarse.",
    },
    timeline: {
      eyebrow: "Pensar la ruta de socio",
      title: "Cómo se decide una ruta.",
      lead: "GovDecision y Sax Global estructuran la pregunta de ruta de socio paso a paso.",
      steps: [
        { title: "Señal de oportunidad", description: "Aparece una oportunidad calificada." },
        { title: "Hipótesis de ruta", description: "¿Directo, socio o prepararse primero?" },
        { title: "Chequeo de preparación", description: "Brechas de registro, presencia, entrega." },
        { title: "Categoría de socio", description: "Qué tipo de socio necesita la ruta." },
        { title: "Validación", description: "Confirmar que la ruta es real." },
        { title: "Decisión de búsqueda", description: "Avanzar, asociarse o esperar." },
      ],
    },
    govDecision: {
      eyebrow: "Dónde ayuda GovDecision",
      title: "La elección de la ruta parte de hechos.",
      lead: "La plataforma convierte una oportunidad en una pregunta de ruta estructurada.",
      points: [
        "Supplier Passport encuadra capacidades, certificaciones y mercados habilitados.",
        "Opportunity Qualification y la extracción de requisitos asistida por IA señalan dónde es probable que se requiera un socio.",
        "La detección de bloqueadores revela brechas de registro, elegibilidad y presencia.",
        "Los Country Packs explican las expectativas de ruta y socio específicas de cada país.",
        "El memo Go/No-Go y el Deal Room capturan la ruta de socio recomendada.",
        "Las notas de ruta de socio se trasladan a Post-Award Enablement.",
      ],
    },
    sax: {
      eyebrow: "Dónde ayuda Sax Global",
      title: "Planificación de rutas transfronterizas, donde importa.",
      lead: "Cuando una oportunidad cruza una frontera, Sax Global agrega contexto de mercado sobre la plataforma.",
      points: [
        "Planificación de la ruta de socio para la ejecución transfronteriza.",
        "Contexto sobre estructuras de representación local, distribución e importación.",
        "Un encuadre de acceso al mercado que conecta la oportunidad con una ruta real.",
        "Búsqueda de socios cuando corresponda: categorías a evaluar, no colocaciones garantizadas.",
        "Una segunda lectura sobre si avanzar ahora, asociarse primero o prepararse.",
      ],
    },
    mockup: {
      eyebrow: "Salida de ejemplo",
      title: "Cómo se ve una lectura de ruta de socio.",
      lead: "Una vista breve y estructurada de la pregunta de ruta para una sola oportunidad.",
      windowTitle: "govdecision · Brief de ruta de socio",
      illustrative: "Ilustrativo",
      briefTitle: "Brief de ruta de socio",
      fields: [
        { label: "Recorrido", value: "Brasil → Estados Unidos" },
        { label: "Tipo de oportunidad", value: "Suministros técnicos" },
        { label: "Ruta recomendada", value: "Distribuidor + checklist de preparación" },
        { label: "Dependencia de socio", value: "Media" },
        { label: "Riesgo de ejecución", value: "Medio" },
      ],
      validationLabel: "Validación necesaria",
      validationItems: [
        "Ruta de registro local",
        "Capacidad de entrega / servicio",
        "Soporte de garantía",
        "Idioma de la documentación",
      ],
      decisionLabel: "Decisión",
      decisionValue: "Validar la ruta antes de avanzar",
      caption: "Ilustrativo: no es un caso real de cliente.",
    },
    disclaimer:
      "GovDecision y Sax Global pueden apoyar la planificación de la ruta de socio y el contexto de acceso al mercado cuando corresponda. No garantizan la colocación de socios, la elegibilidad, el acceso al mercado, las adjudicaciones, el financiamiento ni los resultados de los contratos.",
    finalCta: {
      eyebrow: "Rutas de socio",
      title: "Decida la ruta antes de perseguir la oportunidad.",
      subtitle:
        "Hable con Sax Global sobre cómo podría funcionar una ruta de socio para su mercado: directo, socio local, distribuidor o prepararse primero.",
      primary: "Hablar con Sax Global",
      secondary: "Explorar Market Access",
    },
  },

  capital: {
    meta: {
      title: "GovDecision Capital — Preparación financiera para negocios con el gobierno",
      description:
        "GovDecision Capital ayuda a los proveedores a estructurar la preparación financiera, las necesidades de capital de trabajo, las garantías y las rutas de fondeo con socios para oportunidades del sector público.",
    },
    breadcrumbName: "GovDecision Capital",
    hero: {
      eyebrow: "GovDecision Capital",
      title: "Ganar es solo el comienzo. La ejecución necesita preparación de capital.",
      subtitle:
        "Estime las necesidades de capital de trabajo, entienda los tiempos de pago, organice la preparación financiera y prepare un caso más sólido para las rutas de fondeo con socios cuando corresponda.",
      primaryCta: "Conversar sobre preparación de capital",
      secondaryCta: "Explorar la plataforma",
    },
    heroMockup: {
      windowTitle: "govdecision · Preparación financiera",
      scoreLabel: "Preparación financiera",
      scoreValue: "Media",
      stageLabel: "Etapa",
      stageValue: "Preadjudicación",
      timingLabel: "Tiempos de pago",
      timingValue: "Riesgo alto",
      illustrative: "Ilustrativo",
    },
    why: {
      eyebrow: "Por qué importa la preparación de capital",
      title: "Una adjudicación es un evento de flujo de caja.",
      lead: "Los contratos públicos a menudo le piden entregar, garantizar y esperar, antes de que le paguen.",
      points: [
        {
          title: "Tiempos, no viabilidad",
          description:
            "Los costos y las garantías vencen mucho antes de que llegue la cuenta por cobrar.",
        },
        {
          title: "Las finanzas pertenecen a la búsqueda",
          description: "Una visión clara hace que un Go/No-Go sea honesto desde el inicio.",
        },
        {
          title: "La preparación viaja bien",
          description: "El trabajo transfronterizo agrega tiempos de FX, importación e impuestos.",
        },
      ],
    },
    cashflow: {
      eyebrow: "Línea de tiempo del flujo de caja",
      title: "Dónde un contrato público tensiona la caja.",
      lead: "Mapee la brecha entre cuándo llegan los costos y cuándo llega el pago.",
      steps: [
        "Revisión de oportunidad",
        "Oferta / propuesta",
        "Adjudicación",
        "Compra / producción",
        "Entrega",
        "Facturación",
        "Pago",
      ],
      pressureLabel: "Dónde puede aparecer la presión de capital",
      pressures: [
        "Inventario",
        "Logística",
        "Garantías",
        "Mano de obra",
        "FX",
        "Demora de pago",
      ],
    },
    gaps: {
      eyebrow: "Brechas de capital",
      title: "Las brechas que aparecen una y otra vez.",
      lead: "Nombrarlas temprano convierte una preocupación en una pregunta que puede planificar.",
      items: [
        "Capital de trabajo",
        "Inventario / producción",
        "Importación y logística",
        "Garantía de oferta / garantía",
        "Tiempos de pago",
        "Exposición cambiaria",
        "Demora en la cobranza",
      ],
      note: "Qué brechas aplican depende de la oportunidad y debe validarse caso por caso.",
    },
    fundingRoute: {
      eyebrow: "Mapa de rutas de fondeo",
      title: "De la preparación a un caso financiero.",
      lead: "GovDecision Capital ayuda a estructurar el caso financiero y a conectar situaciones calificadas con rutas de socios cuando corresponda. No es un préstamo directo.",
      flow: [
        {
          title: "Score de preparación financiera",
          description: "Derivado de Opportunity Qualification y la detección de bloqueadores.",
        },
        {
          title: "Caso financiero",
          description: "Estructurado en el Readiness Workspace y el Deal Room.",
        },
        {
          title: "Ruta de socio",
          description: "Qué rutas de fondeo con socios pueden ser relevantes.",
        },
        {
          title: "Revisión",
          description: "Validar los supuestos antes de comprometer nada.",
        },
        {
          title: "Soporte de ejecución",
          description: "Trasladado a Post-Award Enablement.",
        },
      ],
      routesLabel: "Posibles rutas de socios",
      routes: [
        "Capital de trabajo",
        "Factoring / cuentas por cobrar",
        "Financiamiento de exportación",
        "Trade finance",
        "Fianza / performance bond",
        "FX / pagos transfronterizos",
      ],
      note: "Posibles rutas de socios a evaluar. Cuáles pueden ser relevantes depende de la oportunidad y debe validarse: GovDecision Capital no es un prestamista y no provee financiamiento.",
    },
    beforeAfter: {
      eyebrow: "Antes y después de la adjudicación",
      title: "Las preguntas que responde la preparación de capital.",
      lead: "Útil dos veces: una decisión clara antes de la adjudicación y una ejecución limpia después de ella.",
      beforeLabel: "Antes de la adjudicación",
      beforePoints: [
        "¿Podemos perseguir esto?",
        "¿Qué garantías pueden requerirse?",
        "¿Qué brecha de caja podría aparecer?",
        "¿Qué ruta de socio deberíamos preparar?",
      ],
      afterLabel: "Después de la adjudicación",
      afterPoints: [
        "¿Podemos entregar?",
        "¿Cuándo nos pagan?",
        "¿Qué necesita financiarse?",
        "¿Qué documentos necesita un socio financiero?",
      ],
    },
    mockup: {
      eyebrow: "Salida de ejemplo",
      title: "Cómo se ve una lectura de preparación financiera.",
      lead: "Una vista breve y estructurada de la pregunta de capital para una sola oportunidad.",
      windowTitle: "govdecision · Brief de preparación financiera",
      illustrative: "Ilustrativo",
      briefTitle: "Brief de preparación financiera",
      fields: [
        { label: "Etapa de la oportunidad", value: "Preadjudicación" },
        { label: "Brecha de capital de trabajo", value: "Media" },
        { label: "Riesgo de tiempos de pago", value: "Alto" },
        { label: "Requisito de garantía", value: "Validar" },
        { label: "Exposición cambiaria", value: "Depende" },
        { label: "Ruta de fondeo", value: "Revisión de financiamiento con socio" },
      ],
      nextStepLabel: "Siguiente paso",
      nextStepValue: "Estructurar el caso financiero",
      caption: "Ilustrativo: no es un caso real de cliente ni una oferta de financiamiento.",
    },
    disclaimer:
      "GovDecision Capital apoya la preparación financiera, la estructuración del caso y la preparación de la ruta de socio cuando corresponda. No es un préstamo directo y no garantiza financiamiento, aprobación de crédito, adjudicaciones ni resultados de los contratos.",
    finalCta: {
      eyebrow: "Preparación de capital",
      title: "Construya el caso financiero antes de necesitarlo.",
      subtitle:
        "Converse sobre preparación de capital con nuestro equipo: capital de trabajo, garantías, tiempos de pago y qué rutas de fondeo con socios pueden ser relevantes.",
      primary: "Conversar sobre preparación de capital",
      secondary: "Explorar la plataforma",
    },
  },
} satisfies PartnerCapitalChrome;

export default es;
