import type { PartnerCapitalChrome } from "./types";

/**
 * ES — espejo en español neutro (LATAM) de las páginas Partner Network +
 * GovDecision Capital (SITE-015). Refleja exactamente la estructura de en-US.ts.
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
    lead: "Perseguir negocios con el gobierno suele requerir la ruta de socio adecuada y un caso financiero creíble. Descubra cómo GovDecision y Sax Global ayudan a los proveedores a preparar ambos.",
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
        "GovDecision ayuda a los proveedores a entender cuándo ir directo, asociarse localmente, usar un distribuidor, subcontratar o prepararse primero. Sax Global puede apoyar la planificación de la ruta de socio cuando la ejecución transfronteriza es importante.",
      primaryCta: "Hablar con Sax Global",
      secondaryCta: "Explorar Market Access",
    },
    why: {
      eyebrow: "Por qué importa la estrategia de socios",
      title: "El software encuentra la oportunidad. La ruta la gana.",
      lead: "Una oportunidad calificada todavía necesita una forma de llegar al comprador: directamente, a través de un socio, o aún de ninguna manera. La ruta suele ser el factor decisivo.",
      points: [
        {
          title: "Más que software",
          description:
            "Los proveedores a menudo necesitan presencia, representación o un canal en el terreno antes de poder entregar. Saber cuál de ellos —desde temprano— protege su presupuesto de búsqueda.",
        },
        {
          title: "Lo transfronterizo agrega dependencia",
          description:
            "Vender en otro país puede implicar un representante, importador o distribuidor incluso antes de que la entrega sea posible. La dependencia de la ruta es un insumo de planificación, no algo secundario.",
        },
        {
          title: "La ruta equivocada es costosa",
          description:
            "Ir directo cuando necesitaba un socio —o asociarse cuando podría haber ido directo— se nota tarde y cuesta más. La elección de la ruta pertenece a la decisión Go/No-Go.",
        },
      ],
    },
    routes: {
      eyebrow: "Opciones de ruta",
      title: "Cinco formas de entrar a un mercado gubernamental.",
      lead: "La mayoría de las búsquedas se resuelven en una de unas pocas rutas. El trabajo está en elegir —y validar— la correcta antes de comprometerse.",
      options: [
        {
          title: "Ir directo",
          description:
            "Venda directamente al comprador cuando el registro, la presencia y la entrega sean realistas por cuenta propia.",
        },
        {
          title: "Asociarse localmente",
          description:
            "Designe un representante local o socio que lleve la presencia, las relaciones y el seguimiento en el terreno.",
        },
        {
          title: "Usar un distribuidor",
          description:
            "Llegue al comprador a través de un distribuidor o revendedor que ya tenga el canal y el inventario.",
        },
        {
          title: "Subcontratar o formar un consorcio",
          description:
            "Únase a un contratista principal o consorcio como subcontratista cuando el contrato es grande o se requiere contenido local.",
        },
        {
          title: "Prepararse primero",
          description:
            "Espere, desarrolle preparación y valide la ruta antes de comprometer recursos de búsqueda en ella.",
        },
      ],
    },
    categories: {
      eyebrow: "Categorías de socios",
      title: "El ecosistema de socios que una búsqueda puede necesitar.",
      lead: "Según el mercado y el contrato, una ruta puede involucrar varias de estas posibles categorías de socios. GovDecision y Sax Global le ayudan a mapear cuáles son relevantes.",
      items: [
        "Representantes locales",
        "Distribuidores / revendedores",
        "Importadores / trading",
        "Integradores técnicos",
        "Especialistas en cumplimiento / regulación",
        "Asesoría legal / de contratación pública",
        "Traductores / soporte de localización",
        "Socios de logística / fulfillment",
        "Bancos / fintechs / factoring",
        "Socios de seguros / fianza / performance bond",
        "Socios de trade finance / FX",
      ],
      note: "Estas son posibles categorías de socios a evaluar, no una lista de socios contratados. La búsqueda de socios se ofrece cuando corresponda, y cualquier ruta debe validarse para la oportunidad específica.",
    },
    govDecision: {
      eyebrow: "Dónde ayuda GovDecision",
      title: "La elección de la ruta parte de hechos, no de conjeturas.",
      lead: "La plataforma convierte una oportunidad en una pregunta de ruta estructurada, para que directo vs. socio sea una decisión que pueda defender.",
      points: [
        "Supplier Passport organiza sus capacidades, certificaciones y mercados habilitados para que la decisión de ruta parta de hechos.",
        "Opportunity Qualification y la extracción de requisitos asistida por IA revelan dónde es probable que se requiera un socio local, representante o importador.",
        "La detección de bloqueadores señala las brechas de registro, elegibilidad y presencia que deciden directo vs. socio.",
        "Los Country Packs explican las expectativas de ruta específicas de cada país y las estructuras de socios que los proveedores usan comúnmente.",
        "El memo Go/No-Go y el Deal Room capturan la ruta de socio recomendada antes de comprometer recursos de búsqueda.",
        "Las recomendaciones de ruta de socio y las notas de preparación financiera se trasladan a Post-Award Enablement una vez que comienza el trabajo.",
      ],
    },
    sax: {
      eyebrow: "Dónde ayuda Sax Global",
      title: "Planificación de rutas transfronterizas, donde importa.",
      lead: "Cuando una oportunidad cruza una frontera, Sax Global agrega contexto de mercado y planificación de ruta de socio sobre la plataforma.",
      points: [
        "Planificación de la ruta de socio cuando la ejecución transfronteriza es importante.",
        "Contexto sobre estructuras de representación local, distribución e importación por mercado.",
        "Un encuadre de acceso al mercado que conecta la oportunidad con una ruta de mercado realista.",
        "Búsqueda de socios cuando corresponda: revelando posibles categorías de socios a evaluar, no colocaciones garantizadas.",
        "Una segunda lectura sobre si avanzar ahora, asociarse primero o prepararse antes de la búsqueda.",
      ],
    },
    mockup: {
      eyebrow: "Salida de ejemplo",
      title: "Cómo se ve una lectura de ruta de socio.",
      lead: "Una vista breve y estructurada de la pregunta de ruta para una sola oportunidad: el tipo de lectura que GovDecision y Sax Global le ayudan a alcanzar antes de comprometerse.",
      windowTitle: "govdecision · Brief de ruta de socio",
      illustrative: "Ilustrativo",
      briefTitle: "Brief de ruta de socio",
      fields: [
        { label: "Recorrido de la oportunidad", value: "Brasil → Estados Unidos" },
        { label: "Ruta recomendada", value: "Distribuidor local + checklist de preparación" },
        { label: "Dependencia de socio", value: "Media" },
        { label: "Riesgo de ejecución", value: "Media" },
      ],
      nextStepLabel: "Siguiente paso",
      nextStepValue: "Validar la ruta antes de avanzar",
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
        "GovDecision Capital ayuda a los proveedores a estimar las necesidades de capital de trabajo, entender los tiempos de pago, organizar la preparación financiera y preparar un caso más sólido para las rutas de fondeo con socios cuando corresponda.",
      primaryCta: "Conversar sobre preparación de capital",
      secondaryCta: "Explorar la plataforma",
    },
    why: {
      eyebrow: "Por qué importa la preparación de capital",
      title: "Una adjudicación es un evento de flujo de caja.",
      lead: "Los contratos públicos a menudo le piden entregar, garantizar y esperar, antes de que le paguen. La preparación de capital es lo que evita que una victoria se convierta en una tensión.",
      points: [
        {
          title: "Tiempos, no viabilidad",
          description:
            "Proveedores sólidos se estancan porque la producción, las garantías y la entrega vencen mucho antes que la cuenta por cobrar. Mapear esos tiempos temprano cambia la decisión.",
        },
        {
          title: "Las finanzas pertenecen a la búsqueda",
          description:
            "Una visión clara del capital de trabajo, las garantías y los tiempos de pago hace que un Go/No-Go sea honesto, y que una conversación de fondeo sea mucho más fácil cuando importa.",
        },
        {
          title: "La preparación viaja bien",
          description:
            "El trabajo transfronterizo agrega tiempos de FX, importación e impuestos. Un caso financiero estructurado mantiene esas piezas móviles visibles en lugar de sorprenderlo después de la adjudicación.",
        },
      ],
    },
    gaps: {
      eyebrow: "Brechas financieras comunes",
      title: "Dónde los contratos públicos tensionan el flujo de caja.",
      lead: "Las mismas brechas aparecen una y otra vez. Nombrarlas temprano convierte una preocupación vaga en una pregunta que puede planificar.",
      items: [
        "Capital de trabajo antes de la entrega",
        "Costo de inventario o producción",
        "Costos de importación / logística",
        "Garantías de cumplimiento",
        "Garantías de oferta",
        "Tiempos de pago",
        "Facturación por hitos",
        "Exposición cambiaria",
        "Tiempos de impuestos / importación",
        "Demora en la cobranza",
      ],
      note: "Qué brechas aplican depende de la oportunidad y debe validarse caso por caso.",
    },
    structures: {
      eyebrow: "Qué estructura GovDecision Capital",
      title: "De los requisitos a un caso financiero.",
      lead: "GovDecision Capital ayuda a estructurar el caso financiero y a conectar situaciones calificadas con rutas de socios cuando corresponda. No es un préstamo directo.",
      points: [
        {
          title: "El caso financiero",
          description:
            "Convierta los requisitos en una necesidad estimada de capital de trabajo, un panorama de garantías y una vista de tiempos de pago, a partir de Opportunity Qualification y la extracción de requisitos asistida por IA.",
        },
        {
          title: "Notas de preparación financiera",
          description:
            "Capture garantías, fianzas y supuestos de flujo de caja como notas de preparación financiera dentro del Readiness Workspace y el Deal Room.",
        },
        {
          title: "El mapa de tiempos",
          description:
            "Disponga cuándo llegan los costos frente a cuándo llega el pago, para que la facturación por hitos y la demora en la cobranza sean visibles mucho antes de la adjudicación.",
        },
        {
          title: "El brief de ruta de socio",
          description:
            "Resuma qué rutas de fondeo con socios pueden ser relevantes, para que una conversación de fondeo parta de un caso estructurado y no de una página en blanco.",
        },
      ],
    },
    routes: {
      eyebrow: "Rutas de fondeo con socios",
      title: "Rutas a evaluar, no un préstamo.",
      lead: "Cuando una situación es seria, GovDecision Capital puede señalar las rutas de fondeo con socios que pueden ser relevantes. Si alguna aplica depende de la oportunidad.",
      items: [
        "Capital de trabajo",
        "Factoring / anticipación de cuentas por cobrar",
        "Financiamiento de exportación",
        "Trade finance",
        "Socios de FX / pagos transfronterizos",
        "Socios de fianza / performance bond",
        "Financiamiento con socio local",
        "Ruta de socio bancario o fintech",
      ],
      note: "Estas son posibles rutas de socios a evaluar. Cuáles pueden ser relevantes depende de la oportunidad y debe validarse: GovDecision Capital no es un prestamista y no provee financiamiento.",
    },
    beforeAfter: {
      eyebrow: "Antes y después de la adjudicación",
      title: "Preparación financiera a lo largo de la búsqueda.",
      lead: "La preparación de capital es útil dos veces: para tomar una decisión clara antes de la adjudicación y para ejecutar sin sorpresas después de ella.",
      beforeLabel: "Antes de la adjudicación",
      beforePoints: [
        "Estime la necesidad de capital de trabajo que implica la oportunidad.",
        "Señale temprano los requisitos de garantías de oferta y de cumplimiento.",
        "Mapee los tiempos de pago frente a los costos de producción y entrega.",
        "Anote la exposición de FX, importación y tiempos de impuestos para el trabajo transfronterizo.",
        "Incorpore el panorama financiero al memo Go/No-Go.",
      ],
      afterLabel: "Después de la adjudicación",
      afterPoints: [
        "Organice el caso de preparación financiera para las rutas de fondeo con socios.",
        "Haga seguimiento de garantías, hitos y facturación en Post-Award Enablement.",
        "Revele la demora en la cobranza y la cobertura de capital de trabajo a medida que avanza la entrega.",
        "Prepare un caso estructurado para compartir con socios financieros cuando corresponda.",
      ],
    },
    mockup: {
      eyebrow: "Salida de ejemplo",
      title: "Cómo se ve una lectura de preparación financiera.",
      lead: "Una vista breve y estructurada de la pregunta de capital para una sola oportunidad: organizada, cautelosa y construida para ser validada.",
      windowTitle: "govdecision · Brief de preparación financiera",
      illustrative: "Ilustrativo",
      briefTitle: "Brief de preparación financiera",
      fields: [
        { label: "Etapa de la oportunidad", value: "Preadjudicación / Posadjudicación" },
        { label: "Brecha estimada de capital de trabajo", value: "Media" },
        { label: "Riesgo de tiempos de pago", value: "Alto" },
        { label: "Requisito de garantía", value: "Validar" },
        { label: "Ruta de fondeo", value: "Revisión de financiamiento con socio" },
      ],
      nextStepLabel: "Siguiente paso",
      nextStepValue: "Estructurar el caso financiero",
      caption: "Ilustrativo: no es un caso real de cliente ni una oferta de financiamiento.",
    },
    disclaimer:
      "GovDecision Capital apoya la preparación financiera, la estructuración del caso y la preparación de la ruta de socio cuando corresponda. No es un préstamo directo y no garantiza financiamiento, aprobación de crédito, adjudicaciones ni resultados de contratos.",
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
