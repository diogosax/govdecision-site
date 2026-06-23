import type { LegalChrome } from "./types";

/**
 * ES — español neutro / LATAM internacional. Evita expresiones de España y no
 * sobre-afirma cumplimiento de regímenes específicos por jurisdicción. Espeja el
 * contenido EN-US. Los nombres de producto no se traducen: GovDecision, Sax
 * Group LLC, Sax Global, GovDecision Capital, Supplier Passport, Deal Room.
 */
export const es = {
  updated: "Última actualización: junio de 2026",
  note: "Esta página se ofrece como información general sobre el sitio y las prácticas de la plataforma GovDecision. Puede actualizarse periódicamente.",
  contactEmailLabel: "Correo",
  contactWhatsappLabel: "WhatsApp Business",

  terms: {
    meta: {
      title: "Términos de Uso — GovDecision",
      description:
        "Términos para usar el sitio público y el contenido de GovDecision. GovDecision es una plataforma de Sax Group LLC y no está afiliada a ningún gobierno.",
    },
    breadcrumbName: "Términos de Uso",
    eyebrow: "Legal",
    title: "Términos de Uso",
    lead: "Estos términos explican cómo puedes usar el sitio público de GovDecision y la información que publicamos en él. GovDecision es una plataforma global de government business de Sax Group LLC, con sede en Orlando, Florida.",
    sections: [
      {
        heading: "Acerca de GovDecision",
        body: [
          "GovDecision es una plataforma de Sax Group LLC. Ayuda a los proveedores a calificar oportunidades del sector público, construir readiness y entender el acceso a mercados en distintos países.",
          "Sax Global, el brazo internacional de Sax Group, puede ofrecer planificación, contexto y orientación cuando corresponda.",
        ],
      },
      {
        heading: "Uso del sitio",
        body: [
          "Puedes usar este sitio para conocer GovDecision, Sax Global y nuestro enfoque del sector público. Aceptas usar el sitio de forma lícita y no interrumpirlo, usarlo de manera indebida ni intentar acceder sin autorización a él o a sus sistemas.",
        ],
      },
      {
        heading: "Sin afiliación gubernamental",
        body: [
          "GovDecision no está afiliada, avalada ni actúa en nombre de ningún gobierno, comprador público, portal de contratación pública, institución multilateral o fuente oficial, salvo que lo indiquemos expresamente por escrito. Las referencias a organismos, programas o fuentes públicas son solo de contexto.",
        ],
      },
      {
        heading: "Sin garantía de oportunidades ni resultados",
        body: [
          "Las oportunidades del sector público cambian constantemente. No garantizamos que una oportunidad esté vigente, disponible o sea adecuada para tu empresa, y no garantizamos elegibilidad, habilitación, aprobación de registro, aceptación de ofertas, adjudicaciones, financiamiento, asignación de socios, acceso a mercados ni ningún resultado de contrato.",
        ],
      },
      {
        heading: "Ejemplos de oportunidades públicas y briefs",
        body: [
          "Los Government Opportunity Briefs y el contenido similar son ejemplos de oportunidades públicas y señales de mercado. Son ilustrativos — no son casos de clientes, oportunidades garantizadas ni una promesa de resultados. Confirma siempre los detalles en la fuente oficial antes de actuar.",
        ],
      },
      {
        heading: "No es asesoría legal, de contratación, financiera, fiscal ni de inversión",
        body: [
          "El contenido de este sitio se ofrece como información general. No es asesoría legal, de contratación pública, financiera, fiscal ni de inversión, y no debe usarse en lugar de asesoría profesional específica para tu situación.",
        ],
      },
      {
        heading: "Contenido y apoyo a la decisión con IA",
        body: [
          "Partes de la plataforma y de nuestro contenido usan análisis asistido por IA para ayudar a extraer requisitos, resumir oportunidades y estructurar decision briefs. El resultado de la IA puede ser incompleto o impreciso y sirve para apoyar — no reemplazar — la revisión humana y el juicio profesional.",
        ],
      },
      {
        heading: "Acceso a mercados y apoyo de Sax Global",
        body: [
          "Cuando corresponda, Sax Global puede apoyar la planificación de acceso a mercados, la estrategia de socios locales y el contexto de ejecución internacional. Este apoyo es consultivo y no garantiza acceso a mercados, asignación de socios ni resultados de contrato.",
        ],
      },
      {
        heading: "Posicionamiento de GovDecision Capital",
        body: [
          "GovDecision Capital es un posicionamiento de finance-readiness. No es préstamo directo ni una decisión de crédito. Cuando corresponda, apoya el finance-readiness, la estructuración del caso y la preparación de rutas con socios. Cualquier financiamiento lo otorgan terceros, según sus propias condiciones.",
        ],
      },
      {
        heading: "Información que envías",
        body: [
          "Si nos contactas o completas un formulario, eres responsable de la exactitud de lo que proporcionas y de tener el derecho de compartirlo. No envíes información confidencial o sensible por el sitio público, salvo que sea necesario.",
        ],
      },
      {
        heading: "Propiedad intelectual",
        body: [
          "Los nombres, logotipos, contenidos y el diseño de GovDecision y Sax Group pertenecen a Sax Group LLC o a sus licenciantes. No puedes copiarlos, reproducirlos ni reutilizarlos sin autorización, salvo para consulta personal o interna normal.",
        ],
      },
      {
        heading: "Enlaces de terceros y fuentes públicas",
        body: [
          "Este sitio puede enlazar a sitios de terceros y referirse a fuentes públicas. No controlamos ese contenido ni somos responsables de él. Seguir un enlace externo queda a tu criterio.",
        ],
      },
      {
        heading: "Límites de confianza en el contenido",
        body: [
          'Este sitio se ofrece "tal cual", como información general. En la medida permitida por la ley, Sax Group LLC no es responsable de decisiones tomadas únicamente con base en este sitio. Sigues siendo responsable de validar requisitos y resultados antes de actuar.',
        ],
      },
      {
        heading: "Actualizaciones de estos términos",
        body: [
          "Podemos actualizar estos términos periódicamente. La versión vigente siempre se aplica a tu uso del sitio.",
        ],
      },
    ],
    contact: {
      heading: "Contacto",
      body: "¿Dudas sobre estos términos? Comunícate con el equipo de GovDecision por los canales de abajo.",
    },
  },

  privacy: {
    meta: {
      title: "Aviso de Privacidad — GovDecision",
      description:
        "Qué puede recopilar el sitio de GovDecision mediante formularios y analytics, y cómo buscamos tratarlo. GovDecision es una plataforma de Sax Group LLC.",
    },
    breadcrumbName: "Aviso de Privacidad",
    eyebrow: "Privacidad",
    title: "Aviso de Privacidad",
    lead: "Este aviso explica, en lenguaje claro, qué información puede recopilar el sitio de GovDecision y cómo buscamos usarla. GovDecision es una plataforma de Sax Group LLC.",
    sections: [
      {
        heading: "Resumen",
        body: [
          "Buscamos recopilar solo la información necesaria para responderte y para operar y mejorar el sitio. Este aviso describe el sitio y las prácticas públicas de la plataforma; no es una descripción completa de cada proceso interno.",
        ],
      },
      {
        heading: "Información que proporcionas",
        body: [
          "Cuando eliges contactarnos, puedes compartir información sobre ti y tu empresa. Tú controlas lo que envías y puedes optar por no proporcionar los datos opcionales.",
        ],
      },
      {
        heading: "Envíos del formulario de contacto",
        body: [
          "Nuestro formulario de contacto puede recopilar la información de abajo. También podemos capturar un contexto básico de la página de origen — como un valor de path o type en la URL — para enrutar tu solicitud al equipo correcto.",
        ],
        bullets: [
          "Nombre",
          "Empresa",
          "Correo corporativo",
          "País",
          "Mercados objetivo",
          "Mensaje",
          "Contexto de página o path desde la URL",
        ],
      },
      {
        heading: "Contacto por WhatsApp",
        body: [
          "Si nos contactas por WhatsApp, esa conversación se gestiona a través de WhatsApp Business y está sujeta a los términos y prácticas de privacidad del propio WhatsApp. El contacto por WhatsApp es opcional.",
        ],
      },
      {
        heading: "Analytics y datos de uso del sitio",
        body: [
          "Usamos Vercel Analytics y Speed Insights para entender, de forma agregada, cómo se usa el sitio y cómo se comporta. Estos analytics están diseñados para evitar la recopilación intencional de información que te identifique personalmente.",
        ],
      },
      {
        heading: "Cookies / seguimiento",
        body: [
          "El sitio busca mantener el seguimiento al mínimo. Cuando se usan analytics o tecnologías similares, sirven para medición agregada y no para construir perfiles individuales.",
        ],
      },
      {
        heading: "Cómo puede usarse la información",
        body: [
          "Podemos usar la información que proporcionas para responder a tu solicitud, enrutarla al equipo correcto, dar seguimiento a una conversación de readiness o de acceso a mercados y mejorar nuestro contenido y servicios, cuando corresponda.",
        ],
      },
      {
        heading: "Compartir con Sax Group / Sax Global",
        body: [
          "Podemos compartir tu solicitud internamente dentro de Sax Group y con Sax Global cuando sea relevante para atender tu consulta — por ejemplo, una pregunta de acceso a mercados internacionales. No vendemos tu información personal.",
        ],
      },
      {
        heading: "Proveedores de servicio",
        body: [
          "Nos apoyamos en proveedores de servicio confiables — por ejemplo, alojamiento, envío de correo y analytics — para operar el sitio. Ellos tratan la información en nuestro nombre para prestar sus servicios.",
        ],
      },
      {
        heading: "Contexto internacional",
        body: [
          "GovDecision atiende a proveedores y mercados en distintos países, por lo que la información puede tratarse en países diferentes al tuyo, dependiendo del contexto.",
        ],
      },
      {
        heading: "Retención de datos",
        body: [
          "Buscamos conservar la información solo el tiempo necesario para el fin con que se recopiló, o lo que resulte adecuado para la comunicación en curso, y luego eliminarla o archivarla. La retención puede variar dependiendo del contexto.",
        ],
      },
      {
        heading: "Tus opciones",
        body: [
          "Puedes elegir qué compartir, consultarnos sobre la información que proporcionaste o pedir que la actualicemos o eliminemos, cuando corresponda. Evita enviar información sensible o confidencial por el formulario público, salvo que sea necesario.",
        ],
      },
      {
        heading: "Actualizaciones",
        body: [
          "Podemos actualizar este aviso periódicamente. La versión vigente siempre se aplica.",
        ],
      },
    ],
    contact: {
      heading: "Contacto",
      body: "¿Dudas sobre privacidad o sobre la información que compartiste? Comunícate con el equipo de GovDecision por los canales de abajo.",
    },
  },

  compliance: {
    meta: {
      title: "Compliance — GovDecision",
      description:
        "Cómo aborda GovDecision el government business responsable: sin afiliación, responsabilidad del proveedor, análisis con IA y revisión humana, y participación ética.",
    },
    breadcrumbName: "Compliance",
    eyebrow: "Compliance",
    title: "Compliance",
    lead: "GovDecision es una plataforma de apoyo a la decisión y readiness para el sector público. Esta página explica cómo abordamos la participación responsable y ética en la contratación pública — y qué sigue siendo responsabilidad del proveedor.",
    sections: [
      {
        heading: "Government business responsable",
        body: [
          "GovDecision ayuda a los proveedores a tomar mejores decisiones sobre oportunidades del sector público: qué perseguir, qué resolver primero y qué ruta de mercado tiene sentido. Apoyamos la decisión; el proveedor es dueño de la participación.",
        ],
      },
      {
        heading: "Sin afiliación gubernamental",
        body: [
          "GovDecision no está afiliada, avalada ni actúa en nombre de ningún gobierno, comprador público o fuente oficial, salvo que se indique expresamente. No influimos en decisiones ni resultados de contratación pública.",
        ],
      },
      {
        heading: "Fuentes públicas y datos de oportunidades",
        body: [
          "Los ejemplos y datos de oportunidades provienen de fuentes públicas y de mercado, cuando están disponibles. Las fuentes cambian y los detalles pueden estar incompletos o desactualizados — valida siempre en la fuente oficial antes de actuar.",
        ],
      },
      {
        heading: "Análisis asistido por IA",
        body: [
          "El análisis asistido por IA puede ayudar a extraer requisitos, resumir oportunidades, detectar posibles bloqueos y estructurar decision briefs. Es una herramienta de apoyo, no un sustituto de la revisión profesional, y su resultado debe validarse siempre.",
        ],
      },
      {
        heading: "Sin garantía de resultados",
        body: [
          "No garantizamos elegibilidad, habilitación, aprobación de registro, aceptación de ofertas, adjudicaciones, financiamiento, asignación de socios ni acceso a mercados. GovDecision apoya readiness y decisiones, no resultados.",
        ],
      },
      {
        heading: "Anticorrupción y conducta ética",
        body: [
          "Fomentamos la participación lícita, ética y transparente en la contratación pública. GovDecision no debe usarse para facilitar soborno, fraude, colusión ni ningún intento de influir indebidamente en un proceso público.",
        ],
      },
      {
        heading: "Responsabilidad del proveedor",
        body: [
          "Los proveedores siguen siendo responsables de validar requisitos, elegibilidad, plazos, registros, presentaciones y obligaciones de compliance en cada mercado.",
          "GovDecision no debe usarse para tergiversar capacidades, elegibilidad, certificaciones, documentación o estado de compliance.",
        ],
      },
      {
        heading: "Acceso a mercados y rutas con socios",
        body: [
          "Cuando corresponda, Sax Global puede apoyar la planificación de acceso a mercados y la preparación de rutas con socios. Este apoyo es consultivo y no garantiza acceso a mercados, asignación de socios, financiamiento, adjudicaciones ni resultados de contrato.",
        ],
      },
      {
        heading: "GovDecision Capital y finance-readiness",
        body: [
          "GovDecision Capital apoya el finance-readiness, la estructuración del caso y la preparación de rutas con socios, cuando corresponda. No es préstamo directo ni una decisión de crédito; cualquier financiamiento lo otorgan terceros, según sus propias condiciones.",
        ],
      },
      {
        heading: "Revisión humana y validación",
        body: [
          "Las decisiones sobre si perseguir una oportunidad, y cómo, deben involucrar siempre revisión humana. GovDecision está hecha para informar ese juicio, no para reemplazarlo.",
        ],
      },
    ],
    contact: {
      heading: "Reportar inquietudes",
      body: "Si tienes una pregunta o quieres plantear una inquietud sobre el uso responsable o estas prácticas, comunícate con el equipo de GovDecision por los canales de abajo.",
    },
  },
} satisfies LegalChrome;

export default es;
