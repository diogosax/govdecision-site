/**
 * ES overlay for Government Opportunity Briefs (SITE-013).
 *
 * Neutral LATAM / international Spanish, informal "tú" register kept consistent.
 * Brand and product-architecture names stay in English (GovDecision, Sax Global,
 * Supplier Passport); "readiness", "Go/No-Go", and "cross-border" are kept as
 * the established product vocabulary. Arrays are index-aligned with the
 * canonical data in `src/data/opportunity-briefs.ts`.
 */
import type { BriefCopyMap } from "./types";

export const esBriefs: BriefCopyMap = {
  "united-states-facilities-mro": {
    marketLabel: "Estados Unidos",
    opportunityType: "Mantenimiento, reparación y operaciones (MRO) de instalaciones",
    buyerType: "Agencias federales de EE. UU., instalaciones y compradores vía GSA",
    shortTitle: "Suministros federales de MRO",
    heroEyebrow: "Estados Unidos · Mercado local",
    heroTitle: "Demanda federal recurrente de mantenimiento y suministros de instalaciones.",
    heroSubtitle:
      "Las agencias de EE. UU. compran productos de mantenimiento, reparación y operaciones (MRO) de forma continua — HVAC, plomería, eléctricos, limpieza e higiene — a través de SAM.gov y de vehículos gubernamentales. El volumen recurrente es real; calificar para él es el trabajo.",
    summary:
      "El gobierno de EE. UU. es uno de los mayores compradores recurrentes de suministros de mantenimiento, reparación y operaciones del mundo. La demanda es constante y amplia — pero el registro, las reglas de set-aside y los vehículos de contrato definen quién compite realmente.",
    whySuppliersCare: [
      "Los suministros de MRO e instalaciones son una categoría recurrente y de alta frecuencia — no una licitación única — así que un proveedor calificado construye ingresos repetibles.",
      "Distribuidores y fabricantes de productos de HVAC, plomería, eléctricos y limpieza mapean directamente la demanda federal existente.",
      "Los vehículos gubernamentales (p. ej., strategic sourcing de GSA) pueden convertir a muchos compradores dispersos en una sola ruta, una vez posicionado.",
    ],
    commonRequirements: [
      "Registro activo en SAM.gov con UEI y los códigos NAICS / PSC correctos para la categoría.",
      "La elegibilidad para el set-aside relevante (small business y similares) suele definir quién puede ofertar.",
      "El ingreso a un vehículo de contrato o schedule es, a menudo, la ruta práctica hacia pedidos recurrentes.",
    ],
    commonBlockers: [
      "Registro y mapeo de códigos hechos de forma incorrecta o incompleta, y el proveedor nunca aparece para los compradores correctos.",
      "Las reglas de set-aside y la elegibilidad socioeconómica se leen mal, y se gasta tiempo en oportunidades que no se pueden ganar.",
      "Las reglas de entrega, empaque y preferencia doméstica se subestiman y deben validarse por solicitación.",
    ],
    govDecisionAnalysis: [
      "Compara la categoría de la oportunidad con el Supplier Passport para ver dónde la empresa ya tiene fit y dónde no.",
      "Usa extracción de requisitos asistida por IA para sacar del aviso las exigencias de registro, código, set-aside y entrega.",
      "Detecta bloqueos — registro ausente, códigos errados, set-aside inelegible — antes de invertir tiempo en una oferta.",
      "Produce un brief de decisión Go / No-Go: avanzar ahora, posicionarte primero en un vehículo, o descartar.",
    ],
    saxGlobalAngle: [],
    readinessQuestions: [
      "¿Vendemos categorías de MRO / instalaciones que un comprador federal realmente pide?",
      "¿Nuestro registro en SAM.gov está activo, con UEI, NAICS y PSC correctos?",
      "¿Somos elegibles para los set-asides a los que se reservan estas oportunidades?",
      "¿Podemos cumplir términos federales de entrega, empaque y preferencia doméstica?",
      "¿La ruta realista es oferta directa o ingreso primero a un vehículo de contrato?",
    ],
    relatedLabel: "Brief de market access de Estados Unidos",
    metaTitle: "Suministros Federales de MRO en EE. UU. — Brief de Oportunidad Pública",
    metaDescription:
      "Un ejemplo real de demanda pública en EE. UU.: mantenimiento federal recurrente y suministros de MRO, y por qué los proveedores necesitan fit, readiness y ruta antes de avanzar.",
  },

  "brazil-facilities-maintenance": {
    marketLabel: "Brasil",
    opportunityType: "Mantenimiento de edificios y suministros operativos / de consumo",
    buyerType: "Compradores federales, estatales, municipales y estatales de Brasil",
    shortTitle: "Mantenimiento de edificios y suministros",
    heroEyebrow: "Brasil · Mercado local",
    heroTitle: "Demanda pública continua entre miles de compradores brasileños.",
    heroSubtitle:
      "Bajo la Ley 14.133/2021, los compradores públicos brasileños publican oportunidades de mantenimiento y suministros operativos en el PNCP y en Compras.gov.br todos los días. El volumen es enorme; decidir qué vale la pena perseguir es la parte difícil.",
    summary:
      "Brasil opera uno de los mayores entornos de compras públicas del mundo, ahora centralizado en el PNCP. La demanda de mantenimiento de edificios y suministros operativos es constante entre compradores federales, estatales y municipales — pero el registro y la disciplina de oferta definen quién compite.",
    whySuppliersCare: [
      "Las categorías de mantenimiento y material de consumo se repiten entre miles de compradores, así que proveedores calificados persiguen un pipeline estable.",
      "Fabricantes y distribuidores locales de suministros operativos mapean directamente la demanda pública diaria.",
      "La publicación centralizada en el PNCP hace la demanda descubrible — el reto pasa de encontrar a calificar.",
    ],
    commonRequirements: [
      "Registro en el padrón de proveedores relevante (p. ej., SICAF) y documentos de habilitación suelen exigirse.",
      "Certificados de regularidad fiscal, laboral y técnica a menudo deben estar vigentes para ofertar.",
      "La modalidad y los términos del edital varían por comprador y deben leerse con cuidado antes de comprometerse.",
    ],
    commonBlockers: [
      "Los documentos de habilitación vencen o quedan incompletos, descalificando a proveedores competitivos.",
      "Los requisitos del edital se leen mal, y el esfuerzo va a oportunidades que la empresa no cumple a tiempo.",
      "Garantías, ventanas de entrega y reglas de formación de precio se subestiman y deben validarse por edital.",
    ],
    govDecisionAnalysis: [
      "Empareja la oportunidad con el Supplier Passport para confirmar fit de categoría y habilitación rápido.",
      "Usa extracción asistida por IA para sacar del edital exigencias de habilitación, certificados y entrega.",
      "Detecta bloqueos — certificados vencidos, padrón ausente, plazos ajustados — antes de que cierre la ventana.",
      "Prepara un brief de decisión Go / No-Go en lugar de reaccionar a cada edital publicado.",
    ],
    saxGlobalAngle: [],
    readinessQuestions: [
      "¿Suministramos una categoría de mantenimiento u operativa que los compradores brasileños realmente piden?",
      "¿Nuestro SICAF y los certificados de habilitación están vigentes?",
      "¿Podemos cumplir entrega, garantía y reglas de formación de precio del edital?",
      "¿Tenemos la disciplina de oferta para responder antes de los plazos, de forma repetida?",
      "¿Vale la pena avanzar ahora o deberíamos organizar la readiness primero?",
    ],
    relatedLabel: "Brief de market access de Brasil",
    metaTitle:
      "Mantenimiento de Edificios y Suministros en Brasil — Brief de Oportunidad Pública",
    metaDescription:
      "Un ejemplo real de demanda pública brasileña: mantenimiento recurrente de edificios y suministros operativos en el PNCP, y por qué los proveedores necesitan fit, readiness y disciplina de oferta.",
  },

  "paraguay-operational-supplies": {
    marketLabel: "Paraguay",
    opportunityType: "Suministros operativos e industriales (incl. lotes MIPYME)",
    buyerType: "Ministerios, municipios y entidades públicas de Paraguay",
    shortTitle: "Suministros operativos e industriales",
    heroEyebrow: "Paraguay · Ruta regional",
    heroTitle: "Un mercado vecino con demanda pública estructurada y amigable para pymes.",
    heroSubtitle:
      "Paraguay centraliza la contratación pública en la DNCP, con canales específicos para MIPYMES (micro, pequeñas y medianas empresas). Para un proveedor regional — sobre todo de Brasil — la proximidad es una ventaja, pero las reglas de participación local deben validarse.",
    summary:
      "Paraguay publica licitaciones a través de la DNCP, incluidas oportunidades orientadas a MIPYMES. El mercado es cercano y estructurado, pero la elegibilidad, la representación local y los términos de moneda definen si un proveedor regional puede competir de verdad.",
    whySuppliersCare: [
      "La proximidad geográfica y los lazos del Mercosur hacen de Paraguay un primer paso cross-border lógico para muchos proveedores brasileños.",
      "Un portal centralizado (DNCP) y canales MIPYME dedicados hacen visible la demanda y, en parte, accesible para pymes.",
      "Las categorías de suministros operativos e industriales se repiten entre ministerios y municipios.",
    ],
    commonRequirements: [
      "El registro como proveedor del Estado (SIPE) en el sistema de la DNCP suele exigirse.",
      "Un representante local, agente o presencia establecida puede exigirse según el procedimiento.",
      "La documentación de la oferta en español y el cumplimiento de términos locales deben validarse por licitación.",
    ],
    commonBlockers: [
      "Los proveedores cross-border subestiman las exigencias de registro y representación locales.",
      "El idioma, la moneda y la logística de entrega cruzando la frontera añaden riesgo de ejecución a planificar.",
      "La elegibilidad para lotes reservados a MIPYME depende de definiciones locales que deben verificarse, no presumirse.",
    ],
    govDecisionAnalysis: [
      "Compara la oportunidad con el Supplier Passport y señala dónde la elegibilidad cross-border es incierta.",
      "Extrae requisitos de registro, representación y documentación de la licitación con apoyo de IA.",
      "Detecta bloqueos — falta de presencia local, brechas de moneda y logística — antes de avanzar.",
      "Enmarca un Go / No-Go: avanzar directo, avanzar vía socio local, o preparar primero.",
    ],
    saxGlobalAngle: [
      "Para una ruta Brasil → Paraguay, Sax Global puede apoyar la planificación de acceso a mercado y la validación de ruta cruzando la frontera.",
      "Sax Global puede ayudar a probar supuestos de socio / distribuidor y representación local cuando el procedimiento lo exige.",
      "El contexto práctico de ejecución — idioma, logística, moneda — puede dimensionarse antes de cualquier compromiso.",
    ],
    readinessQuestions: [
      "¿Vendemos una categoría que los compradores públicos paraguayos piden, y a la escala correcta?",
      "¿Estamos preparados para registrarnos como proveedor del Estado y cumplir términos locales?",
      "¿Necesitamos un representante o distribuidor local para este procedimiento?",
      "¿Podemos manejar entrega, moneda y documentación cross-border?",
      "¿Una ruta directa es realista, o una ruta de socio / preparar-primero es más inteligente?",
    ],
    relatedLabel: "Brief de market access Brasil → Paraguay",
    metaTitle:
      "Suministros Operativos e Industriales en Paraguay — Brief de Oportunidad Pública",
    metaDescription:
      "Un ejemplo real de demanda pública paraguaya vía DNCP, incluidos canales MIPYME — y por qué un proveedor regional necesita fit, readiness y una ruta validada.",
  },

  "mexico-it-infrastructure": {
    marketLabel: "México",
    opportunityType: "Infraestructura de TI y equipos técnicos",
    buyerType: "Entidades de la administración pública federal mexicana",
    shortTitle: "Infraestructura de TI y equipos",
    heroEyebrow: "México · Ruta cross-border",
    heroTitle: "Un gran comprador federal modernizando cómo compra.",
    heroSubtitle:
      "El gobierno federal mexicano publica licitaciones en ComprasMX (la plataforma que reemplazó a CompraNet), incluida la demanda de infraestructura de TI y equipos técnicos. Para un proveedor cross-border, la oportunidad es considerable — y las reglas de registro y representación son decisivas.",
    summary:
      "Las compras federales de México pasan por ComprasMX, una plataforma digital modernizada. Las categorías de infraestructura de TI y equipos técnicos son una necesidad recurrente, pero los proveedores cross-border deben validar registro, representación y cumplimiento antes de competir.",
    whySuppliersCare: [
      "Un gran comprador federal con necesidades continuas de tecnología y equipos es un mercado adyacente relevante para proveedores técnicos.",
      "Una plataforma modernizada y centralizada (ComprasMX) hace la demanda federal más transparente y buscable.",
      "Categorías como infraestructura de TI y equipos técnicos mapean líneas de producto B2B ya existentes en muchos proveedores.",
    ],
    commonRequirements: [
      "El registro en el padrón de proveedores y contratistas (RUPC) en ComprasMX suele exigirse para participar.",
      "Una presencia local, representante o registro fiscal (RFC) puede exigirse según el procedimiento.",
      "La documentación de la oferta en español y el cumplimiento de reglas federales deben validarse por licitación.",
    ],
    commonBlockers: [
      "Los proveedores cross-border subestiman las exigencias de registro, fiscales y de representación local.",
      "Las especificaciones técnicas y los términos de cumplimiento son propios del comprador y deben validarse, no presumirse.",
      "La entrega, la garantía y las obligaciones de soporte cruzando la frontera añaden riesgo de ejecución.",
    ],
    govDecisionAnalysis: [
      "Compara la oportunidad con el Supplier Passport y revela brechas de elegibilidad cross-border.",
      "Extrae requisitos de registro, representación y técnicos con apoyo de IA.",
      "Detecta bloqueos — registro RUPC, RFC, soporte local — antes de invertir en una oferta.",
      "Produce un brief de decisión Go / No-Go: directo, vía socio, o preparar primero.",
    ],
    saxGlobalAngle: [
      "Para una ruta cross-border hacia México, Sax Global puede apoyar la planificación de acceso a mercado y la validación de ruta.",
      "Sax Global puede ayudar a probar supuestos de representación local, presencia fiscal y socio cuando se requiere.",
      "El contexto de ejecución — idioma, garantía, soporte en el país — puede dimensionarse antes del compromiso.",
    ],
    readinessQuestions: [
      "¿Nuestras categorías de TI / equipos coinciden con lo que piden los compradores federales mexicanos?",
      "¿Estamos listos para registrarnos (RUPC) y cumplir reglas locales de impuestos / representación?",
      "¿Necesitamos un socio o presencia de soporte en el país para esta categoría?",
      "¿Podemos cumplir entrega, garantía y soporte cruzando la frontera?",
      "¿Una ruta directa es realista, o deberíamos preparar o buscar socio primero?",
    ],
    relatedLabel: "Todas las rutas de market access",
    metaTitle:
      "Infraestructura de TI y Equipos en México — Brief de Oportunidad Pública",
    metaDescription:
      "Un ejemplo real de demanda federal mexicana vía ComprasMX de infraestructura de TI y equipos técnicos — y por qué los proveedores cross-border necesitan fit, readiness y una ruta validada.",
  },

  "canada-goods-services": {
    marketLabel: "Canadá",
    opportunityType: "Bienes operativos y servicios técnicos",
    buyerType: "Departamentos y agencias del Gobierno de Canadá (vía PSPC)",
    shortTitle: "Bienes y servicios federales",
    heroEyebrow: "Canadá · Ruta cross-border",
    heroTitle: "Un mercado federal transparente con una única puerta de entrada.",
    heroSubtitle:
      "Canadá consolidó las licitaciones federales en CanadaBuys, el portal oficial operado por PSPC. La demanda de bienes y servicios se publica abiertamente — pero las reglas de acuerdos comerciales, el registro y los términos de entrega definen quién puede competir de verdad.",
    summary:
      "El gobierno federal de Canadá publica licitaciones a través de CanadaBuys, un portal moderno y transparente. Las categorías de bienes operativos y servicios técnicos tienen demanda continua, pero los proveedores deben validar registro, cobertura de acuerdos comerciales y términos de entrega.",
    whySuppliersCare: [
      "Un portal federal abierto, en inglés / francés, hace la demanda canadiense excepcionalmente fácil de monitorear.",
      "Las categorías de bienes y servicios técnicos se repiten entre muchos departamentos y agencias.",
      "Los acuerdos comerciales pueden abrir las compras canadienses a proveedores extranjeros calificados — una señal cross-border real que vale entender.",
    ],
    commonRequirements: [
      "El registro de proveedor en CanadaBuys suele ser necesario para ofertar.",
      "La compra puede regirse por acuerdos comerciales cuya cobertura y reglas deben validarse.",
      "Documentación bilingüe y términos de entrega canadienses pueden aplicar según el comprador.",
    ],
    commonBlockers: [
      "Los proveedores presumen elegibilidad sin verificar la cobertura de acuerdos comerciales y las reglas de set-aside.",
      "Los términos bilingües y de cumplimiento propios de Canadá se subestiman.",
      "La entrega cross-border, el soporte y las exigencias de garantía (bonding) deben validarse por licitación.",
    ],
    govDecisionAnalysis: [
      "Compara la oportunidad con el Supplier Passport y señala dudas de elegibilidad cross-border.",
      "Extrae requisitos de registro, acuerdos comerciales y entrega con apoyo de IA.",
      "Detecta bloqueos — registro, garantía, cumplimiento bilingüe — antes de comprometerse.",
      "Prepara un brief de decisión Go / No-Go en lugar de perseguir cada aviso.",
    ],
    saxGlobalAngle: [
      "Para una ruta cross-border hacia Canadá, Sax Global puede apoyar la planificación de acceso a mercado y la validación de ruta.",
      "Sax Global puede ayudar a interpretar acuerdos comerciales y supuestos de socio cuando aplican.",
      "El contexto de ejecución — entrega, soporte, garantía — puede dimensionarse antes del compromiso.",
    ],
    readinessQuestions: [
      "¿Nuestras categorías coinciden con lo que piden los compradores federales canadienses?",
      "¿Estamos registrados en CanadaBuys y claros sobre la cobertura de acuerdos comerciales?",
      "¿Podemos cumplir exigencias bilingües, de entrega y de garantía?",
      "¿Necesitamos un socio o presencia canadiense para esta categoría?",
      "¿Una ruta directa es realista, o deberíamos preparar o buscar socio primero?",
    ],
    relatedLabel: "Todas las rutas de market access",
    metaTitle: "Bienes y Servicios Federales en Canadá — Brief de Oportunidad Pública",
    metaDescription:
      "Un ejemplo real de demanda federal canadiense vía CanadaBuys de bienes y servicios técnicos — y por qué los proveedores cross-border necesitan fit, readiness y claridad sobre acuerdos comerciales.",
  },

  "un-world-bank-supplies": {
    marketLabel: "ONU / Banco Mundial",
    opportunityType: "Suministros operativos y técnicos para programas de desarrollo",
    buyerType:
      "Agencias de la ONU e implementadores de proyectos financiados por el Banco Mundial",
    shortTitle: "Suministros ONU y Banco Mundial",
    heroEyebrow: "ONU / Banco Mundial · Ruta multilateral",
    heroTitle: "Demanda financiada globalmente, publicada por una única ventanilla.",
    heroSubtitle:
      "Las agencias de la ONU y los proyectos financiados por el Banco Mundial compran bienes y servicios en todo el mundo, con las licitaciones del sistema ONU agregadas en UNGM. La demanda es real y amplia — pero el registro multilateral, los estándares y las reglas de proceso son una disciplina aparte.",
    summary:
      "El sistema ONU y los proyectos financiados por el Banco Mundial representan compras grandes y distribuidas globalmente. UNGM es la puerta de entrada única para licitaciones de la ONU; las compras del Banco Mundial fluyen por unidades de proyecto de los prestatarios. La elegibilidad y la disciplina de proceso definen quién compite.",
    whySuppliersCare: [
      "La demanda multilateral es grande, recurrente y amplia — de suministros operativos a equipos técnicos.",
      "Un único registro en UNGM abre visibilidad a muchas agencias de la ONU a la vez.",
      "Los programas financiados por desarrollo alcanzan mercados a los que un proveedor quizá no accede directamente, ampliando el mapa de oportunidades.",
    ],
    commonRequirements: [
      "El registro gratuito de proveedor en UNGM es el punto de entrada para oportunidades del sistema ONU.",
      "Se espera cumplimiento con estándares de compra de la ONU / IFIs, elegibilidad y reglas de ética.",
      "Las ofertas financiadas por el Banco Mundial siguen reglas de proyecto del prestatario que deben leerse por oportunidad.",
    ],
    commonBlockers: [
      "Los proveedores tratan la compra multilateral como licitación doméstica y se pierden exigencias de proceso y estándares.",
      "Los pasos de registro, documentación y cumplimiento se subestiman.",
      "La entrega a ubicaciones de programa, los incoterms y los plazos añaden complejidad de ejecución a planificar.",
    ],
    govDecisionAnalysis: [
      "Compara la oportunidad con el Supplier Passport y señala brechas de elegibilidad multilateral.",
      "Extrae requisitos de registro, estándares y entrega del aviso con apoyo de IA.",
      "Detecta bloqueos — registro, cumplimiento, logística — antes de avanzar.",
      "Produce un brief de decisión Go / No-Go ajustado a la disciplina de proceso multilateral.",
    ],
    saxGlobalAngle: [
      "Para rutas multilaterales, Sax Global puede apoyar la planificación de acceso a mercado y la validación de ruta.",
      "Sax Global puede ayudar a probar supuestos de socio, logística y cumplimiento cuando aplica.",
      "El contexto de ejecución para la entrega de programa puede dimensionarse antes del compromiso.",
    ],
    readinessQuestions: [
      "¿Nuestras categorías coinciden con lo que compran realmente las agencias de la ONU y los proyectos de IFIs?",
      "¿Estamos registrados en UNGM y claros sobre los estándares relevantes?",
      "¿Podemos cumplir exigencias multilaterales de cumplimiento, documentación y ética?",
      "¿Podemos entregar a ubicaciones de programa en los términos exigidos?",
      "¿Una ruta directa es realista, o deberíamos preparar o buscar socio primero?",
    ],
    relatedLabel: "Brief de market access Brasil → ONU y Banco Mundial",
    metaTitle: "Suministros ONU y Banco Mundial — Brief de Oportunidad Pública",
    metaDescription:
      "Un ejemplo real de demanda multilateral vía UNGM y proyectos financiados por el Banco Mundial — y por qué los proveedores necesitan fit, readiness y disciplina de proceso antes de avanzar.",
  },

  "africa-water-sanitation": {
    marketLabel: "Mercados africanos seleccionados",
    opportunityType:
      "Suministros, equipos y obras de agua y saneamiento (financiados por donantes)",
    buyerType: "Agencias públicas africanas vía proyectos financiados por el AfDB",
    shortTitle: "Agua y saneamiento (financiado por donantes)",
    heroEyebrow: "Mercados africanos seleccionados · Ruta multilateral",
    heroTitle: "Demanda de infraestructura financiada por donantes en todo el continente.",
    heroSubtitle:
      "El Banco Africano de Desarrollo financia programas de agua, saneamiento e infraestructura por toda África, publicando avisos de compra para obras, equipos y suministros. La demanda es significativa — y la elegibilidad multilateral y las reglas de ejecución son centrales.",
    summary:
      "Los proyectos financiados por el AfDB — incluida la Rural Water Supply and Sanitation Initiative — generan compras de tuberías, accesorios, equipos electromecánicos y obras civiles por toda África. La demanda es real, pero la elegibilidad, las reglas de la agencia ejecutora y la capacidad de ejecución definen la participación.",
    whySuppliersCare: [
      "Los programas de agua y saneamiento financiados por donantes crean demanda sostenida de suministros, equipos y obras.",
      "Las compras del AfDB están abiertas a empresas de países miembros, ampliando quién puede participar.",
      "Proveedores de tuberías, accesorios, bombas y equipos electromecánicos mapean directamente las necesidades de los proyectos.",
    ],
    commonRequirements: [
      "La elegibilidad suele depender de las reglas de países miembros del AfDB y del método de compra del proyecto específico.",
      "Las ofertas siguen reglas de la agencia ejecutora y del AfDB que deben leerse por aviso.",
      "Especificaciones técnicas, entrega a los sitios del proyecto y presencia local pueden exigirse.",
    ],
    commonBlockers: [
      "Los proveedores juzgan mal la elegibilidad y las exigencias de la agencia ejecutora, que varían por proyecto.",
      "La logística a las ubicaciones del proyecto, los plazos de entrega y la presencia local se subestiman.",
      "Las garantías de desempeño, los estándares y la documentación deben validarse por oportunidad.",
    ],
    govDecisionAnalysis: [
      "Compara la oportunidad con el Supplier Passport y señala brechas de elegibilidad y capacidad.",
      "Extrae requisitos de elegibilidad, especificación y entrega del aviso con apoyo de IA.",
      "Detecta bloqueos — elegibilidad, logística, garantías — antes de comprometer recursos.",
      "Prepara un brief de decisión Go / No-Go adecuado a la ejecución financiada por donantes.",
    ],
    saxGlobalAngle: [
      "Para rutas multilaterales financiadas por donantes, Sax Global puede apoyar la planificación de acceso a mercado y la validación de ruta.",
      "Sax Global puede ayudar a probar supuestos de socio, logística y capacidad de ejecución cuando aplica.",
      "El contexto práctico de ejecución para la entrega del proyecto puede dimensionarse antes del compromiso.",
    ],
    readinessQuestions: [
      "¿Nuestros productos u obras encajan en proyectos de agua y saneamiento financiados por el AfDB?",
      "¿Somos elegibles bajo las reglas de países miembros y de compra del proyecto?",
      "¿Podemos entregar a las ubicaciones del proyecto y cumplir especificaciones técnicas?",
      "¿Podemos ofrecer las garantías y la documentación que estos proyectos exigen?",
      "¿Una ruta directa es realista, o deberíamos buscar socio o preparar primero?",
    ],
    relatedLabel: "Todas las rutas de market access",
    metaTitle: "Agua y Saneamiento en África (AfDB) — Brief de Oportunidad Pública",
    metaDescription:
      "Un ejemplo real de demanda financiada por donantes: compras de agua y saneamiento financiadas por el AfDB por toda África — y por qué los proveedores necesitan fit, readiness y una ruta validada.",
  },
};
