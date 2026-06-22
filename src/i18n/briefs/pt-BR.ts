/**
 * PT-BR overlay for Government Opportunity Briefs (SITE-013).
 *
 * Natural Brazilian Portuguese for business owners and executives. Brand and
 * product-architecture names stay in English (GovDecision, Sax Global, Supplier
 * Passport); "readiness", "Go/No-Go", and "cross-border" are kept as the
 * established product vocabulary. Arrays are index-aligned with the canonical
 * data in `src/data/opportunity-briefs.ts`.
 */
import type { BriefCopyMap } from "./types";

export const ptBRBriefs: BriefCopyMap = {
  "united-states-facilities-mro": {
    marketLabel: "Estados Unidos",
    opportunityType: "Manutenção predial, reparos e operações (MRO)",
    buyerType: "Agências federais dos EUA, instalações e compradores via GSA",
    shortTitle: "Suprimentos federais de MRO",
    heroEyebrow: "Estados Unidos · Mercado local",
    heroTitle: "Demanda federal recorrente por manutenção e suprimentos prediais.",
    heroSubtitle:
      "As agências dos EUA compram produtos de manutenção, reparo e operações (MRO) continuamente — HVAC, hidráulica, elétrica, limpeza e higienização — pelo SAM.gov e por veículos governamentais. O volume recorrente é real; qualificar-se para ele é o trabalho.",
    summary:
      "O governo dos EUA é um dos maiores compradores recorrentes de suprimentos de manutenção, reparo e operações do mundo. A demanda é constante e ampla — mas registro, regras de set-aside e veículos de contrato definem quem realmente compete.",
    whySuppliersCare: [
      "Suprimentos de MRO e prediais são uma categoria recorrente e de alta frequência — não um pregão único — então um fornecedor qualificado constrói receita repetível.",
      "Distribuidores e fabricantes de produtos de HVAC, hidráulica, elétrica e limpeza mapeiam diretamente a demanda federal existente.",
      "Veículos governamentais (ex.: strategic sourcing da GSA) podem transformar muitos compradores dispersos em uma única rota, uma vez posicionado.",
    ],
    commonRequirements: [
      "Registro ativo no SAM.gov com UEI e os códigos NAICS / PSC corretos para a categoria.",
      "A elegibilidade para o set-aside relevante (small business e similares) costuma definir quem pode propor.",
      "A entrada em um veículo de contrato ou schedule é, com frequência, a rota prática para pedidos recorrentes.",
    ],
    commonBlockers: [
      "Registro e mapeamento de códigos feitos de forma incorreta ou incompleta, e o fornecedor nunca aparece para os compradores certos.",
      "Regras de set-aside e elegibilidade socioeconômica são mal lidas, e gasta-se tempo em oportunidades que não se pode vencer.",
      "Regras de entrega, embalagem e preferência doméstica são subestimadas e devem ser validadas por solicitação.",
    ],
    govDecisionAnalysis: [
      "Compara a categoria da oportunidade com o Supplier Passport para ver onde a empresa já tem fit e onde não tem.",
      "Usa extração de requisitos assistida por IA para tirar do edital exigências de registro, código, set-aside e entrega.",
      "Detecta bloqueios — registro ausente, códigos errados, set-aside inelegível — antes de qualquer tempo em uma proposta.",
      "Produz um brief de decisão Go / No-Go: avançar agora, posicionar-se em um veículo primeiro, ou descartar.",
    ],
    saxGlobalAngle: [],
    readinessQuestions: [
      "Vendemos categorias de MRO / prediais que um comprador federal realmente pede?",
      "Nosso registro no SAM.gov está ativo, com UEI, NAICS e PSC corretos?",
      "Somos elegíveis para os set-asides a que essas oportunidades são reservadas?",
      "Conseguimos atender prazos de entrega, embalagem e preferência doméstica federais?",
      "A rota realista é proposta direta ou entrada em um veículo de contrato primeiro?",
    ],
    relatedLabel: "Brief de market access dos Estados Unidos",
    metaTitle: "Suprimentos Federais de MRO nos EUA — Brief de Oportunidade Pública",
    metaDescription:
      "Um exemplo real de demanda pública nos EUA: manutenção federal recorrente e suprimentos de MRO, e por que fornecedores precisam de fit, readiness e rota antes de avançar.",
  },

  "brazil-facilities-maintenance": {
    marketLabel: "Brasil",
    opportunityType: "Manutenção predial e suprimentos operacionais / de consumo",
    buyerType: "Compradores federais, estaduais, municipais e estatais do Brasil",
    shortTitle: "Manutenção predial e suprimentos",
    heroEyebrow: "Brasil · Mercado local",
    heroTitle: "Demanda pública contínua entre milhares de compradores brasileiros.",
    heroSubtitle:
      "Sob a Lei 14.133/2021, compradores públicos brasileiros publicam oportunidades de manutenção e suprimentos operacionais no PNCP e no Compras.gov.br todos os dias. O volume é enorme; decidir o que vale a pena perseguir é a parte difícil.",
    summary:
      "O Brasil opera um dos maiores ambientes de compras públicas do mundo, agora centralizado no PNCP. A demanda por manutenção predial e suprimentos operacionais é constante entre compradores federais, estaduais e municipais — mas registro e disciplina de proposta definem quem compete.",
    whySuppliersCare: [
      "Categorias de manutenção e material de consumo se repetem entre milhares de compradores, então fornecedores qualificados perseguem um pipeline estável.",
      "Fabricantes e distribuidores locais de suprimentos operacionais mapeiam diretamente a demanda pública diária.",
      "A publicação centralizada no PNCP torna a demanda descobrível — o desafio passa de encontrar para qualificar.",
    ],
    commonRequirements: [
      "Registro no cadastro de fornecedores relevante (ex.: SICAF) e documentos de habilitação costumam ser exigidos.",
      "Certidões de regularidade fiscal, trabalhista e técnica frequentemente precisam estar vigentes para propor.",
      "Modalidade e termos do edital variam por comprador e devem ser lidos com atenção antes de se comprometer.",
    ],
    commonBlockers: [
      "Documentos de habilitação vencem ou ficam incompletos, desqualificando fornecedores competitivos.",
      "Requisitos do edital são mal lidos, e o esforço vai para oportunidades que a empresa não cumpre a tempo.",
      "Garantias, janelas de entrega e regras de formação de preço são subestimadas e devem ser validadas por edital.",
    ],
    govDecisionAnalysis: [
      "Combina a oportunidade ao Supplier Passport para confirmar fit de categoria e habilitação rapidamente.",
      "Usa extração assistida por IA para tirar do edital exigências de habilitação, certidões e entrega.",
      "Detecta bloqueios — certidões vencidas, cadastro ausente, prazos apertados — antes de a janela fechar.",
      "Prepara um brief de decisão Go / No-Go em vez de reagir a cada edital publicado.",
    ],
    saxGlobalAngle: [],
    readinessQuestions: [
      "Fornecemos uma categoria de manutenção ou operacional que compradores brasileiros realmente pedem?",
      "Nosso SICAF e as certidões de habilitação estão vigentes?",
      "Conseguimos atender entrega, garantia e regras de formação de preço do edital?",
      "Temos disciplina de proposta para responder antes dos prazos, repetidamente?",
      "Vale a pena avançar agora ou devemos organizar a readiness primeiro?",
    ],
    relatedLabel: "Brief de market access do Brasil",
    metaTitle:
      "Manutenção Predial e Suprimentos no Brasil — Brief de Oportunidade Pública",
    metaDescription:
      "Um exemplo real de demanda pública brasileira: manutenção predial recorrente e suprimentos operacionais no PNCP, e por que fornecedores precisam de fit, readiness e disciplina de proposta.",
  },

  "paraguay-operational-supplies": {
    marketLabel: "Paraguai",
    opportunityType: "Suprimentos operacionais e industriais (incl. lotes MIPYME)",
    buyerType: "Ministérios, municípios e entidades públicas do Paraguai",
    shortTitle: "Suprimentos operacionais e industriais",
    heroEyebrow: "Paraguai · Caminho regional",
    heroTitle: "Um mercado vizinho com demanda pública estruturada e amigável a PMEs.",
    heroSubtitle:
      "O Paraguai centraliza as compras públicas na DNCP, com canais específicos para MIPYMES (micro, pequenas e médias empresas). Para um fornecedor regional — especialmente do Brasil — a proximidade é uma vantagem, mas as regras de participação local devem ser validadas.",
    summary:
      "O Paraguai publica licitações pela DNCP, incluindo oportunidades voltadas a MIPYMES. O mercado é próximo e estruturado, mas elegibilidade, representação local e termos de moeda definem se um fornecedor regional consegue competir de verdade.",
    whySuppliersCare: [
      "A proximidade geográfica e os laços do Mercosul tornam o Paraguai um primeiro passo cross-border lógico para muitos fornecedores brasileiros.",
      "Um portal centralizado (DNCP) e canais MIPYME dedicados tornam a demanda visível e, em parte, acessível a PMEs.",
      "Categorias de suprimentos operacionais e industriais se repetem entre ministérios e municípios.",
    ],
    commonRequirements: [
      "Registro como fornecedor do Estado (SIPE) no sistema da DNCP costuma ser exigido.",
      "Um representante local, agente ou presença estabelecida pode ser exigido conforme o procedimento.",
      "Documentação da proposta em espanhol e conformidade com termos locais devem ser validadas por licitação.",
    ],
    commonBlockers: [
      "Fornecedores cross-border subestimam exigências de registro e representação locais.",
      "Idioma, moeda e logística de entrega através da fronteira adicionam risco de execução a planejar.",
      "A elegibilidade para lotes reservados a MIPYME depende de definições locais que devem ser checadas, não presumidas.",
    ],
    govDecisionAnalysis: [
      "Compara a oportunidade ao Supplier Passport e sinaliza onde a elegibilidade cross-border é incerta.",
      "Extrai requisitos de registro, representação e documentação da licitação com apoio de IA.",
      "Detecta bloqueios — falta de presença local, lacunas de moeda e logística — antes de avançar.",
      "Enquadra um Go / No-Go: avançar direto, avançar via parceiro local, ou preparar primeiro.",
    ],
    saxGlobalAngle: [
      "Para um caminho Brasil → Paraguai, a Sax Global pode apoiar planejamento de acesso a mercado e validação de rota através da fronteira.",
      "A Sax Global pode ajudar a testar premissas de parceiro / distribuidor e representação local quando o procedimento exige.",
      "O contexto prático de execução — idioma, logística, moeda — pode ser dimensionado antes de qualquer compromisso.",
    ],
    readinessQuestions: [
      "Vendemos uma categoria que compradores públicos paraguaios pedem, e na escala certa?",
      "Estamos preparados para nos registrar como fornecedor do Estado e atender termos locais?",
      "Precisamos de um representante ou distribuidor local para este procedimento?",
      "Conseguimos lidar com entrega, moeda e documentação cross-border?",
      "Uma rota direta é realista, ou uma rota de parceiro / preparar-antes é mais inteligente?",
    ],
    relatedLabel: "Brief de market access Brasil → Paraguai",
    metaTitle:
      "Suprimentos Operacionais e Industriais no Paraguai — Brief de Oportunidade Pública",
    metaDescription:
      "Um exemplo real de demanda pública paraguaia via DNCP, incluindo canais MIPYME — e por que um fornecedor regional precisa de fit, readiness e rota validada.",
  },

  "mexico-it-infrastructure": {
    marketLabel: "México",
    opportunityType: "Infraestrutura de TI e equipamentos técnicos",
    buyerType: "Entidades da administração pública federal mexicana",
    shortTitle: "Infraestrutura de TI e equipamentos",
    heroEyebrow: "México · Caminho cross-border",
    heroTitle: "Um grande comprador federal modernizando como compra.",
    heroSubtitle:
      "O governo federal mexicano publica licitações no ComprasMX (a plataforma que substituiu o CompraNet), incluindo demanda por infraestrutura de TI e equipamentos técnicos. Para um fornecedor cross-border, a oportunidade é considerável — e as regras de registro e representação são decisivas.",
    summary:
      "As compras federais do México passam pelo ComprasMX, uma plataforma digital modernizada. Categorias de infraestrutura de TI e equipamentos técnicos são uma necessidade recorrente, mas fornecedores cross-border devem validar registro, representação e conformidade antes de competir.",
    whySuppliersCare: [
      "Um grande comprador federal com necessidades contínuas de tecnologia e equipamentos é um mercado adjacente relevante para fornecedores técnicos.",
      "Uma plataforma modernizada e centralizada (ComprasMX) torna a demanda federal mais transparente e pesquisável.",
      "Categorias como infraestrutura de TI e equipamentos técnicos mapeiam linhas de produtos B2B já existentes em muitos fornecedores.",
    ],
    commonRequirements: [
      "Registro no cadastro de fornecedores e contratistas (RUPC) no ComprasMX costuma ser exigido para participar.",
      "Presença local, representante ou registro fiscal (RFC) podem ser exigidos conforme o procedimento.",
      "Documentação da proposta em espanhol e conformidade com regras federais devem ser validadas por licitação.",
    ],
    commonBlockers: [
      "Fornecedores cross-border subestimam exigências de registro, fiscais e de representação local.",
      "Especificações técnicas e termos de conformidade são específicos do comprador e devem ser validados, não presumidos.",
      "Entrega, garantia e obrigações de suporte através da fronteira adicionam risco de execução.",
    ],
    govDecisionAnalysis: [
      "Compara a oportunidade ao Supplier Passport e revela lacunas de elegibilidade cross-border.",
      "Extrai requisitos de registro, representação e técnicos com apoio de IA.",
      "Detecta bloqueios — registro RUPC, RFC, suporte local — antes de investir em uma proposta.",
      "Produz um brief de decisão Go / No-Go: direto, via parceiro, ou preparar primeiro.",
    ],
    saxGlobalAngle: [
      "Para um caminho cross-border ao México, a Sax Global pode apoiar planejamento de acesso a mercado e validação de rota.",
      "A Sax Global pode ajudar a testar premissas de representação local, presença fiscal e parceiro quando exigido.",
      "O contexto de execução — idioma, garantia, suporte no país — pode ser dimensionado antes do compromisso.",
    ],
    readinessQuestions: [
      "Nossas categorias de TI / equipamentos combinam com o que compradores federais mexicanos pedem?",
      "Estamos prontos para registrar (RUPC) e atender regras locais de impostos / representação?",
      "Precisamos de um parceiro ou presença de suporte no país para esta categoria?",
      "Conseguimos atender entrega, garantia e suporte através da fronteira?",
      "Uma rota direta é realista, ou devemos preparar ou buscar parceiro primeiro?",
    ],
    relatedLabel: "Todos os caminhos de market access",
    metaTitle:
      "Infraestrutura de TI e Equipamentos no México — Brief de Oportunidade Pública",
    metaDescription:
      "Um exemplo real de demanda federal mexicana via ComprasMX por infraestrutura de TI e equipamentos técnicos — e por que fornecedores cross-border precisam de fit, readiness e rota validada.",
  },

  "canada-goods-services": {
    marketLabel: "Canadá",
    opportunityType: "Bens operacionais e serviços técnicos",
    buyerType: "Departamentos e agências do Governo do Canadá (via PSPC)",
    shortTitle: "Bens e serviços federais",
    heroEyebrow: "Canadá · Caminho cross-border",
    heroTitle: "Um mercado federal transparente com uma única porta de entrada.",
    heroSubtitle:
      "O Canadá consolidou as licitações federais no CanadaBuys, o portal oficial operado pela PSPC. A demanda por bens e serviços é publicada abertamente — mas regras de acordos comerciais, registro e termos de entrega definem quem consegue competir de verdade.",
    summary:
      "O governo federal do Canadá publica licitações pelo CanadaBuys, um portal moderno e transparente. Categorias de bens operacionais e serviços técnicos estão em demanda contínua, mas fornecedores devem validar registro, cobertura de acordos comerciais e termos de entrega.",
    whySuppliersCare: [
      "Um portal federal aberto, em inglês / francês, torna a demanda canadense excepcionalmente fácil de monitorar.",
      "Categorias de bens e serviços técnicos se repetem entre muitos departamentos e agências.",
      "Acordos comerciais podem abrir as compras canadenses a fornecedores estrangeiros qualificados — um sinal cross-border real que vale entender.",
    ],
    commonRequirements: [
      "Registro de fornecedor no CanadaBuys costuma ser necessário para propor.",
      "A compra pode ser regida por acordos comerciais cuja cobertura e regras devem ser validadas.",
      "Documentação bilíngue e termos de entrega canadenses podem se aplicar conforme o comprador.",
    ],
    commonBlockers: [
      "Fornecedores presumem elegibilidade sem checar cobertura de acordos comerciais e regras de set-aside.",
      "Termos bilíngues e de conformidade específicos do Canadá são subestimados.",
      "Entrega cross-border, suporte e exigências de garantia (bonding) devem ser validados por licitação.",
    ],
    govDecisionAnalysis: [
      "Compara a oportunidade ao Supplier Passport e sinaliza dúvidas de elegibilidade cross-border.",
      "Extrai requisitos de registro, acordos comerciais e entrega com apoio de IA.",
      "Detecta bloqueios — registro, garantia, conformidade bilíngue — antes de se comprometer.",
      "Prepara um brief de decisão Go / No-Go em vez de perseguir cada aviso.",
    ],
    saxGlobalAngle: [
      "Para um caminho cross-border ao Canadá, a Sax Global pode apoiar planejamento de acesso a mercado e validação de rota.",
      "A Sax Global pode ajudar a interpretar acordos comerciais e premissas de parceiro quando se aplicam.",
      "O contexto de execução — entrega, suporte, garantia — pode ser dimensionado antes do compromisso.",
    ],
    readinessQuestions: [
      "Nossas categorias combinam com o que compradores federais canadenses realmente pedem?",
      "Estamos registrados no CanadaBuys e claros sobre a cobertura dos acordos comerciais?",
      "Conseguimos atender exigências bilíngues, de entrega e de garantia?",
      "Precisamos de um parceiro ou presença canadense para esta categoria?",
      "Uma rota direta é realista, ou devemos preparar ou buscar parceiro primeiro?",
    ],
    relatedLabel: "Todos os caminhos de market access",
    metaTitle: "Bens e Serviços Federais no Canadá — Brief de Oportunidade Pública",
    metaDescription:
      "Um exemplo real de demanda federal canadense via CanadaBuys por bens e serviços técnicos — e por que fornecedores cross-border precisam de fit, readiness e clareza sobre acordos comerciais.",
  },

  "un-world-bank-supplies": {
    marketLabel: "ONU / Banco Mundial",
    opportunityType:
      "Suprimentos operacionais e técnicos para programas de desenvolvimento",
    buyerType:
      "Agências da ONU e implementadores de projetos financiados pelo Banco Mundial",
    shortTitle: "Suprimentos ONU e Banco Mundial",
    heroEyebrow: "ONU / Banco Mundial · Caminho multilateral",
    heroTitle: "Demanda financiada globalmente, publicada por uma única janela.",
    heroSubtitle:
      "Agências da ONU e projetos financiados pelo Banco Mundial compram bens e serviços no mundo todo, com as licitações do sistema ONU agregadas no UNGM. A demanda é real e ampla — mas registro multilateral, padrões e regras de processo são uma disciplina à parte.",
    summary:
      "O sistema ONU e os projetos financiados pelo Banco Mundial representam compras grandes e distribuídas globalmente. O UNGM é a porta de entrada única para licitações da ONU; as compras do Banco Mundial fluem por unidades de projeto dos mutuários. Elegibilidade e disciplina de processo definem quem compete.",
    whySuppliersCare: [
      "A demanda multilateral é grande, recorrente e ampla — de suprimentos operacionais a equipamentos técnicos.",
      "Um único registro no UNGM abre visibilidade a muitas agências da ONU de uma vez.",
      "Programas financiados por desenvolvimento alcançam mercados que um fornecedor talvez não acesse diretamente, ampliando o mapa de oportunidades.",
    ],
    commonRequirements: [
      "O registro gratuito de fornecedor no UNGM é o ponto de entrada para oportunidades do sistema ONU.",
      "Espera-se conformidade com padrões de compra da ONU / IFIs, elegibilidade e regras de ética.",
      "Propostas financiadas pelo Banco Mundial seguem regras de projeto do mutuário que devem ser lidas por oportunidade.",
    ],
    commonBlockers: [
      "Fornecedores tratam a compra multilateral como licitação doméstica e perdem exigências de processo e padrões.",
      "Etapas de registro, documentação e conformidade são subestimadas.",
      "Entrega a locais de programa, incoterms e prazos adicionam complexidade de execução a planejar.",
    ],
    govDecisionAnalysis: [
      "Compara a oportunidade ao Supplier Passport e sinaliza lacunas de elegibilidade multilateral.",
      "Extrai requisitos de registro, padrões e entrega do aviso com apoio de IA.",
      "Detecta bloqueios — registro, conformidade, logística — antes de avançar.",
      "Produz um brief de decisão Go / No-Go ajustado à disciplina de processo multilateral.",
    ],
    saxGlobalAngle: [
      "Para caminhos multilaterais, a Sax Global pode apoiar planejamento de acesso a mercado e validação de rota.",
      "A Sax Global pode ajudar a testar premissas de parceiro, logística e conformidade quando aplicável.",
      "O contexto de execução para entrega de programa pode ser dimensionado antes do compromisso.",
    ],
    readinessQuestions: [
      "Nossas categorias combinam com o que agências da ONU e projetos de IFIs realmente compram?",
      "Estamos registrados no UNGM e claros sobre os padrões relevantes?",
      "Conseguimos atender exigências multilaterais de conformidade, documentação e ética?",
      "Conseguimos entregar a locais de programa nos termos exigidos?",
      "Uma rota direta é realista, ou devemos preparar ou buscar parceiro primeiro?",
    ],
    relatedLabel: "Brief de market access Brasil → ONU e Banco Mundial",
    metaTitle: "Suprimentos ONU e Banco Mundial — Brief de Oportunidade Pública",
    metaDescription:
      "Um exemplo real de demanda multilateral via UNGM e projetos financiados pelo Banco Mundial — e por que fornecedores precisam de fit, readiness e disciplina de processo antes de avançar.",
  },

  "africa-water-sanitation": {
    marketLabel: "Mercados africanos selecionados",
    opportunityType:
      "Suprimentos, equipamentos e obras de água e saneamento (financiados por doadores)",
    buyerType: "Agências públicas africanas via projetos financiados pelo AfDB",
    shortTitle: "Água e saneamento (financiado por doadores)",
    heroEyebrow: "Mercados africanos selecionados · Caminho multilateral",
    heroTitle: "Demanda de infraestrutura financiada por doadores em todo o continente.",
    heroSubtitle:
      "O Banco Africano de Desenvolvimento financia programas de água, saneamento e infraestrutura por toda a África, publicando avisos de compra para obras, equipamentos e suprimentos. A demanda é significativa — e a elegibilidade multilateral e as regras de execução são centrais.",
    summary:
      "Projetos financiados pelo AfDB — incluindo a Rural Water Supply and Sanitation Initiative — geram compras de tubos, conexões, equipamentos eletromecânicos e obras civis pela África. A demanda é real, mas elegibilidade, regras da agência executora e capacidade de execução definem a participação.",
    whySuppliersCare: [
      "Programas de água e saneamento financiados por doadores criam demanda sustentada por suprimentos, equipamentos e obras.",
      "As compras do AfDB são abertas a empresas de países-membros, ampliando quem pode participar.",
      "Fornecedores de tubos, conexões, bombas e equipamentos eletromecânicos mapeiam diretamente as necessidades dos projetos.",
    ],
    commonRequirements: [
      "A elegibilidade costuma depender das regras de países-membros do AfDB e da modalidade de compra do projeto específico.",
      "As propostas seguem regras da agência executora e do AfDB que devem ser lidas por aviso.",
      "Especificações técnicas, entrega aos locais do projeto e presença local podem ser exigidas.",
    ],
    commonBlockers: [
      "Fornecedores avaliam mal a elegibilidade e as exigências da agência executora, que variam por projeto.",
      "Logística até os locais do projeto, prazos de entrega e presença local são subestimados.",
      "Garantias de desempenho, padrões e documentação devem ser validados por oportunidade.",
    ],
    govDecisionAnalysis: [
      "Compara a oportunidade ao Supplier Passport e sinaliza lacunas de elegibilidade e capacidade.",
      "Extrai requisitos de elegibilidade, especificação e entrega do aviso com apoio de IA.",
      "Detecta bloqueios — elegibilidade, logística, garantias — antes de comprometer recursos.",
      "Prepara um brief de decisão Go / No-Go adequado à execução financiada por doadores.",
    ],
    saxGlobalAngle: [
      "Para caminhos multilaterais financiados por doadores, a Sax Global pode apoiar planejamento de acesso a mercado e validação de rota.",
      "A Sax Global pode ajudar a testar premissas de parceiro, logística e capacidade de execução quando aplicável.",
      "O contexto prático de execução para entrega do projeto pode ser dimensionado antes do compromisso.",
    ],
    readinessQuestions: [
      "Nossos produtos ou obras se encaixam em projetos de água e saneamento financiados pelo AfDB?",
      "Somos elegíveis sob as regras de países-membros e de compra do projeto?",
      "Conseguimos entregar aos locais do projeto e atender especificações técnicas?",
      "Conseguimos oferecer as garantias e a documentação que esses projetos exigem?",
      "Uma rota direta é realista, ou devemos buscar parceiro ou preparar primeiro?",
    ],
    relatedLabel: "Todos os caminhos de market access",
    metaTitle: "Água e Saneamento na África (AfDB) — Brief de Oportunidade Pública",
    metaDescription:
      "Um exemplo real de demanda financiada por doadores: compras de água e saneamento financiadas pelo AfDB pela África — e por que fornecedores precisam de fit, readiness e rota validada.",
  },

  /* ======================== SITE-016 — expansão da biblioteca ======================== */

  "united-states-it-infrastructure": {
    marketLabel: "Estados Unidos",
    opportunityType: "Infraestrutura de TI, hardware e equipamentos técnicos",
    buyerType: "Agências federais dos EUA e compradores via GSA (estaduais/locais via compras cooperativas)",
    shortTitle: "Infraestrutura e equipamentos de TI federais",
    heroEyebrow: "Estados Unidos · Mercado local",
    heroTitle: "Demanda federal contínua por hardware e infraestrutura de TI.",
    heroSubtitle:
      "As agências dos EUA compram infraestrutura de TI — servidores, redes, armazenamento, endpoints e equipamentos relacionados — por veículos de contrato da GSA e pelo SAM.gov. A demanda é recorrente e ampla; posicionar-se no veículo certo é o trabalho.",
    summary:
      "O governo dos EUA é um dos maiores compradores de tecnologia do mundo, e boa parte do hardware e da infraestrutura de TI passa pelo Multiple Award Schedule da GSA e pelo SAM.gov. A demanda é constante — mas registro, posicionamento de categoria e entrada em veículo de contrato definem quem compete.",
    whySuppliersCare: [
      "Infraestrutura de TI é uma categoria federal recorrente e de alta frequência, então um revendedor ou fabricante posicionado constrói receita repetível.",
      "Distribuidores e fabricantes (OEM) de servidores, redes, armazenamento e endpoints mapeiam diretamente a demanda federal existente.",
      "Veículos governamentais (ex.: o IT Schedule da GSA) podem transformar muitos compradores dispersos em uma única rota, uma vez sob contrato.",
    ],
    commonRequirements: [
      "Registro ativo no SAM.gov com UEI e os códigos NAICS / PSC corretos para produtos de TI.",
      "A entrada em um GSA Schedule ou outro veículo de contrato costuma ser a rota prática para pedidos recorrentes.",
      "Regras de cadeia de suprimentos, país de origem (ex.: Trade Agreements Act) e segurança frequentemente devem ser validadas por solicitação.",
    ],
    commonBlockers: [
      "Registro e mapeamento de códigos incompletos, e o fornecedor nunca aparece para os compradores de TI certos.",
      "Regras de país de origem e cadeia de suprimentos são subestimadas, e produtos não conformes acabam cotados.",
      "Entrada em schedule e disciplina de preço são tratadas como burocracia, não como decisão de posicionamento.",
    ],
    govDecisionAnalysis: [
      "Compara a categoria da oportunidade com o Supplier Passport para ver onde o portfólio de TI já tem fit.",
      "Usa extração de requisitos assistida por IA para tirar do edital exigências de registro, código, país de origem e segurança.",
      "Detecta bloqueios — registro ausente, origem não conforme, sem veículo — antes de qualquer esforço de proposta.",
      "Produz um brief de decisão Go / No-Go: avançar agora, entrar em um veículo primeiro, ou descartar.",
    ],
    saxGlobalAngle: [],
    readinessQuestions: [
      "Vendemos categorias de infraestrutura de TI que um comprador federal realmente pede?",
      "Nosso registro no SAM.gov está ativo, com UEI, NAICS e PSC corretos?",
      "Nossos produtos estão conformes às regras de país de origem e cadeia de suprimentos?",
      "Estamos em um GSA Schedule ou outro veículo — ou precisamos entrar em um primeiro?",
      "A rota realista é proposta direta ou entrada em um veículo de contrato?",
    ],
    relatedLabel: "Brief de market access dos Estados Unidos",
    metaTitle:
      "Infraestrutura e Equipamentos de TI Federais nos EUA — Brief de Oportunidade Pública",
    metaDescription:
      "Um exemplo real de demanda pública nos EUA: infraestrutura e equipamentos de TI federais via GSA e SAM.gov, e por que fornecedores precisam de fit, readiness e rota antes de avançar.",
  },

  "united-states-energy-efficiency": {
    marketLabel: "Estados Unidos",
    opportunityType: "Equipamentos de eficiência energética e sistemas prediais",
    buyerType: "Agências e instalações federais dos EUA",
    shortTitle: "Equipamentos federais de eficiência energética",
    heroEyebrow: "Estados Unidos · Mercado local",
    heroTitle: "Agências federais são orientadas a comprar equipamentos eficientes.",
    heroSubtitle:
      "As agências dos EUA são obrigadas a adquirir produtos eficientes em energia e água — iluminação LED, HVAC, controles prediais, motores e mais — sob regras federais de gestão de energia. O mandato cria demanda constante e ampla por equipamentos qualificados.",
    summary:
      "A legislação federal orienta as agências a comprar produtos eficientes em energia e água, e o Federal Energy Management Program (FEMP) do DOE define os requisitos de compra. Para fornecedores de equipamentos de sistemas prediais qualificados, o resultado é um sinal de demanda recorrente — mas registro, qualificação do produto e a rota de contrato certa ainda definem quem compete.",
    whySuppliersCare: [
      "Mandatos federais de eficiência tornam equipamentos eficientes uma categoria recorrente, orientada por política, e não uma compra única.",
      "Fabricantes e distribuidores de iluminação LED, HVAC, controles, motores e produtos eficientes em água mapeiam exigências existentes.",
      "Produtos ENERGY STAR / designados pelo FEMP carregam um sinal de qualificação que os compradores são orientados a preferir.",
    ],
    commonRequirements: [
      "Registro ativo no SAM.gov com UEI e códigos NAICS / PSC para a categoria do produto.",
      "Os produtos frequentemente precisam atender níveis de eficiência ENERGY STAR ou designados pelo FEMP para qualificar.",
      "A entrada em um veículo de contrato ou schedule é, com frequência, a rota prática para pedidos recorrentes.",
    ],
    commonBlockers: [
      "Os produtos não estão nas listas ENERGY STAR / designadas pelo FEMP que os compradores são orientados a preferir.",
      "Registro e mapeamento de códigos incompletos, e o fornecedor nunca aparece para os compradores certos.",
      "Entrega, instalação e termos de especificação são subestimados e devem ser validados por solicitação.",
    ],
    govDecisionAnalysis: [
      "Compara a oportunidade com o Supplier Passport para confirmar fit de produto e de qualificação de eficiência.",
      "Usa extração de requisitos assistida por IA para tirar do edital padrões de eficiência, registro e termos de entrega.",
      "Detecta bloqueios — produtos não qualificados, registro ausente, sem veículo — antes de qualquer esforço de proposta.",
      "Produz um brief de decisão Go / No-Go: avançar agora, qualificar produtos primeiro, ou descartar.",
    ],
    saxGlobalAngle: [],
    readinessQuestions: [
      "Nossos produtos atendem aos níveis de eficiência ENERGY STAR ou designados pelo FEMP?",
      "Nosso registro no SAM.gov está ativo, com UEI, NAICS e PSC corretos?",
      "Conseguimos comprovar as alegações de eficiência que um comprador federal é orientado a exigir?",
      "Conseguimos atender termos federais de entrega, instalação e especificação?",
      "A rota realista é proposta direta ou entrada em um veículo de contrato primeiro?",
    ],
    relatedLabel: "Brief de market access dos Estados Unidos",
    metaTitle:
      "Equipamentos de Eficiência Energética Federais nos EUA — Brief de Oportunidade Pública",
    metaDescription:
      "Um exemplo real de demanda pública nos EUA: equipamentos federais de eficiência energética e sistemas prediais sob regras do DOE FEMP, e por que fornecedores precisam de fit, qualificação de produto e readiness.",
  },

  "brazil-education-equipment": {
    marketLabel: "Brasil",
    opportunityType: "Mobiliário, equipamentos e suprimentos escolares",
    buyerType: "FNDE e redes estaduais e municipais de educação (adesão a atas de registro de preços)",
    shortTitle: "Equipamentos e mobiliário escolar",
    heroEyebrow: "Brasil · Mercado local",
    heroTitle: "Demanda nacional por equipamentos escolares, organizada pelo FNDE.",
    heroSubtitle:
      "O FNDE mantém atas nacionais de registro de preços para mobiliário, equipamentos, itens de cozinha e ônibus escolares dos quais milhares de municípios e estados podem comprar. A demanda é grande e padronizada — qualificar-se para ela é o trabalho.",
    summary:
      "O FNDE (autarquia de financiamento do Ministério da Educação) centraliza grandes volumes de demanda por mobiliário e equipamentos escolares em atas nacionais de registro de preços às quais estados e municípios aderem. Para fabricantes qualificados o volume é real — mas conformidade Inmetro, registro e capacidade de produção definem quem compete.",
    whySuppliersCare: [
      "As atas de registro de preços do FNDE agregam a demanda por equipamentos escolares de milhares de municípios em lotes padronizados.",
      "Fabricantes de mobiliário escolar, equipamentos de cozinha e itens de sala mapeiam diretamente a demanda pública recorrente da educação.",
      "A adesão por estados e municípios pode transformar um único registro em um pipeline amplo e repetível.",
    ],
    commonRequirements: [
      "A participação nos processos de registro de preços do FNDE (ex.: via SIGARP) e a habilitação relacionada costumam ser exigidas.",
      "Conformidade Inmetro e especificações técnicas frequentemente se aplicam a mobiliário e equipamentos escolares.",
      "Capacidade de produção, controle de qualidade e entrega em escala nacional deve ser validada por ata.",
    ],
    commonBlockers: [
      "Os produtos não atendem às especificações Inmetro e técnicas que as atas exigem.",
      "Fornecedores subestimam a capacidade de produção e entrega que os volumes de adesão podem demandar.",
      "Documentos de habilitação vencem ou ficam incompletos, desqualificando fabricantes competitivos.",
    ],
    govDecisionAnalysis: [
      "Combina a oportunidade ao Supplier Passport para confirmar fit de produto, conformidade e capacidade.",
      "Usa extração assistida por IA para tirar da ata exigências de conformidade, habilitação e entrega.",
      "Detecta bloqueios — conformidade Inmetro ausente, lacunas de capacidade, documentos vencidos — antes de se comprometer.",
      "Prepara um brief de decisão Go / No-Go em vez de reagir a cada ata publicada.",
    ],
    saxGlobalAngle: [],
    readinessQuestions: [
      "Fabricamos mobiliário ou equipamentos escolares que as atas do FNDE realmente cobrem?",
      "Nossos produtos têm a conformidade Inmetro e as especificações técnicas exigidas?",
      "Conseguimos produzir e entregar na escala que os volumes de adesão podem demandar?",
      "Nossos documentos de habilitação estão vigentes e completos?",
      "Vale a pena avançar agora ou devemos organizar conformidade e capacidade primeiro?",
    ],
    relatedLabel: "Brief de market access do Brasil",
    metaTitle:
      "Equipamentos e Mobiliário Escolar no Brasil (FNDE) — Brief de Oportunidade Pública",
    metaDescription:
      "Um exemplo real de demanda pública brasileira: mobiliário e equipamentos escolares via atas de registro de preços do FNDE, e por que fornecedores precisam de fit, conformidade e readiness.",
  },

  "mexico-electrical-industrial-supplies": {
    marketLabel: "México",
    opportunityType: "Componentes elétricos e suprimentos industriais / operacionais",
    buyerType: "Entidades da administração pública federal mexicana",
    shortTitle: "Suprimentos elétricos e industriais",
    heroEyebrow: "México · Caminho cross-border",
    heroTitle: "Um grande comprador federal com necessidade constante de suprimentos industriais.",
    heroSubtitle:
      "O governo federal mexicano publica licitações no ComprasMX (a plataforma que substituiu o CompraNet), incluindo componentes elétricos e suprimentos industriais / operacionais. Para um fornecedor cross-border — por exemplo do Brasil — a proximidade e os laços comerciais regionais ajudam, mas as regras de registro e representação são decisivas.",
    summary:
      "As compras federais do México passam pelo ComprasMX, com demanda contínua por componentes elétricos e suprimentos industriais. O mercado é considerável e adjacente para muitos fornecedores latino-americanos, mas participantes cross-border devem validar registro RUPC, representação e conformidade antes de competir.",
    whySuppliersCare: [
      "Um grande comprador federal com necessidades contínuas de suprimentos elétricos e industriais é um mercado adjacente relevante.",
      "Uma plataforma modernizada e centralizada (ComprasMX) torna a demanda federal mais transparente e pesquisável.",
      "Componentes elétricos e suprimentos industriais mapeiam linhas de produtos B2B já existentes em muitos fabricantes e distribuidores.",
    ],
    commonRequirements: [
      "Registro no cadastro de fornecedores e contratistas (RUPC) no ComprasMX costuma ser exigido para participar.",
      "Presença local, representante ou registro fiscal (RFC) podem ser exigidos conforme o procedimento.",
      "Documentação da proposta em espanhol, normas técnicas (ex.: NOM) e conformidade devem ser validadas por licitação.",
    ],
    commonBlockers: [
      "Fornecedores cross-border subestimam exigências de registro RUPC, fiscais e de representação local.",
      "Normas técnicas mexicanas (NOM) e especificações são específicas do comprador e devem ser validadas, não presumidas.",
      "Entrega, garantia e obrigações de suporte através da fronteira adicionam risco de execução.",
    ],
    govDecisionAnalysis: [
      "Compara a oportunidade ao Supplier Passport e revela lacunas de elegibilidade cross-border.",
      "Extrai requisitos de registro, representação e de normas técnicas com apoio de IA.",
      "Detecta bloqueios — registro RUPC, RFC, conformidade NOM — antes de investir em uma proposta.",
      "Produz um brief de decisão Go / No-Go: direto, via parceiro, ou preparar primeiro.",
    ],
    saxGlobalAngle: [
      "Para um caminho Brasil → México, a Sax Global pode apoiar planejamento de acesso a mercado e validação de rota através da fronteira.",
      "A Sax Global pode ajudar a testar premissas de representação local, presença fiscal e distribuidor quando exigido.",
      "O contexto de execução — idioma, garantia, suporte no país — pode ser dimensionado antes do compromisso.",
    ],
    readinessQuestions: [
      "Nossas categorias elétricas / industriais combinam com o que compradores federais mexicanos pedem?",
      "Estamos prontos para registrar (RUPC) e atender regras locais de impostos / representação?",
      "Nossos produtos atendem às normas técnicas mexicanas (NOM) quando se aplicam?",
      "Conseguimos atender entrega, garantia e suporte através da fronteira?",
      "Uma rota direta é realista, ou devemos preparar ou buscar parceiro primeiro?",
    ],
    relatedLabel: "Todos os caminhos de market access",
    metaTitle:
      "Suprimentos Elétricos e Industriais no México — Brief de Oportunidade Pública",
    metaDescription:
      "Um exemplo real de demanda federal mexicana via ComprasMX por componentes elétricos e suprimentos industriais — e por que fornecedores cross-border precisam de fit, readiness e rota validada.",
  },

  "canada-facilities-management": {
    marketLabel: "Canadá",
    opportunityType: "Facilities management, operação predial e manutenção",
    buyerType: "Departamentos e agências do Governo do Canadá (real property, via PSPC)",
    shortTitle: "Facilities management e operação",
    heroEyebrow: "Canadá · Caminho cross-border",
    heroTitle: "Imóveis federais que precisam de operação e manutenção contínuas.",
    heroSubtitle:
      "O governo federal do Canadá opera um grande portfólio imobiliário e contrata facilities management, operação predial e manutenção pelo CanadaBuys, operado pela PSPC. A demanda é publicada abertamente — mas regras de acordos comerciais, registro e termos de entrega definem quem compete.",
    summary:
      "A PSPC administra um grande portfólio imobiliário federal e publica demandas de facilities management e manutenção no CanadaBuys. A demanda é constante e transparente, mas fornecedores devem validar registro, cobertura de acordos comerciais, termos bilíngues e capacidade de entrega local.",
    whySuppliersCare: [
      "Um grande portfólio imobiliário federal cria demanda contínua por facilities management e manutenção.",
      "Um portal federal aberto, em inglês / francês (CanadaBuys), torna a demanda excepcionalmente fácil de monitorar.",
      "Acordos comerciais podem abrir as compras canadenses a fornecedores estrangeiros qualificados — um sinal cross-border real.",
    ],
    commonRequirements: [
      "Registro de fornecedor no CanadaBuys costuma ser necessário para propor.",
      "Serviços de facilities e manutenção geralmente exigem capacidade de entrega local e podem exigir garantia (bonding) ou seguro.",
      "A compra pode ser regida por acordos comerciais e termos bilíngues que devem ser validados.",
    ],
    commonBlockers: [
      "Serviços de facilities geralmente exigem presença local ou parceiros que fornecedores cross-border subestimam.",
      "Termos bilíngues e de conformidade específicos do Canadá são subestimados.",
      "Garantia (bonding), seguro e exigências de entrega devem ser validados por licitação.",
    ],
    govDecisionAnalysis: [
      "Compara a oportunidade ao Supplier Passport e sinaliza dúvidas de elegibilidade e capacidade cross-border.",
      "Extrai requisitos de registro, acordos comerciais, garantia e entrega com apoio de IA.",
      "Detecta bloqueios — presença local, garantia, conformidade bilíngue — antes de se comprometer.",
      "Prepara um brief de decisão Go / No-Go em vez de perseguir cada aviso.",
    ],
    saxGlobalAngle: [
      "Para um caminho cross-border ao Canadá, a Sax Global pode apoiar planejamento de acesso a mercado e validação de rota.",
      "A Sax Global pode ajudar a testar premissas de presença local, parceiro e acordos comerciais quando se aplicam.",
      "O contexto de execução — entrega local, garantia, suporte — pode ser dimensionado antes do compromisso.",
    ],
    readinessQuestions: [
      "Nossos serviços de facilities / manutenção combinam com o que compradores federais canadenses pedem?",
      "Estamos registrados no CanadaBuys e claros sobre a cobertura dos acordos comerciais?",
      "Conseguimos oferecer a capacidade de entrega local que serviços de facilities costumam exigir?",
      "Conseguimos atender exigências bilíngues, de garantia e de seguro?",
      "Uma rota direta é realista, ou precisamos de um parceiro canadense primeiro?",
    ],
    relatedLabel: "Todos os caminhos de market access",
    metaTitle:
      "Facilities Management e Operação no Canadá — Brief de Oportunidade Pública",
    metaDescription:
      "Um exemplo real de demanda federal canadense via CanadaBuys por facilities management e operação predial — e por que fornecedores cross-border precisam de fit, readiness e clareza sobre acordos comerciais.",
  },

  "colombia-operational-supplies": {
    marketLabel: "Colômbia",
    opportunityType: "Suprimentos de MRO, operacionais e industriais",
    buyerType: "Entidades públicas nacionais e territoriais da Colômbia",
    shortTitle: "Suprimentos de MRO e operacionais",
    heroEyebrow: "Colômbia · Caminho regional",
    heroTitle: "Um grande mercado latino-americano com portal centralizado e transacional.",
    heroSubtitle:
      "A Colômbia faz compras públicas pelo SECOP II, a plataforma transacional operada pela Colombia Compra Eficiente, onde entidades nacionais e territoriais compram suprimentos de MRO, operacionais e industriais. O portal é aberto a fornecedores nacionais e estrangeiros — mas registro e termos locais devem ser validados.",
    summary:
      "A Colômbia centraliza a contratação pública no SECOP II, uma plataforma totalmente transacional. A demanda por MRO e suprimentos operacionais se repete entre compradores nacionais e territoriais, e o sistema é formalmente aberto a fornecedores estrangeiros — mas a abertura de conta de fornecedor, a documentação e a representação local definem quem consegue competir de verdade.",
    whySuppliersCare: [
      "A Colômbia é um dos maiores mercados públicos da América Latina, com um portal centralizado e transacional (SECOP II).",
      "Categorias de MRO, operacionais e industriais se repetem entre entidades nacionais e territoriais.",
      "O sistema é formalmente aberto a fornecedores nacionais e estrangeiros, um sinal real para expansão regional.",
    ],
    commonRequirements: [
      "Uma conta de fornecedor no SECOP II, com a documentação legal e financeira exigida, costuma ser esperada.",
      "RUP (Registro Único de Proponentes) e um representante ou presença local podem se aplicar conforme o processo.",
      "Documentação da proposta em espanhol e conformidade com termos locais devem ser validadas por processo.",
    ],
    commonBlockers: [
      "Fornecedores estrangeiros subestimam exigências de conta de fornecedor, RUP e documentação.",
      "Representação local, moeda e logística adicionam risco de execução a planejar.",
      "Critérios de capacidade financeira e experiência são específicos do processo e devem ser validados, não presumidos.",
    ],
    govDecisionAnalysis: [
      "Compara a oportunidade ao Supplier Passport e sinaliza onde a elegibilidade cross-border é incerta.",
      "Extrai exigências de conta de fornecedor, RUP e documentação do processo com apoio de IA.",
      "Detecta bloqueios — registro ausente, presença local, lacunas de capacidade — antes de avançar.",
      "Enquadra um Go / No-Go: avançar direto, avançar via parceiro local, ou preparar primeiro.",
    ],
    saxGlobalAngle: [
      "Para um caminho regional à Colômbia, a Sax Global pode apoiar planejamento de acesso a mercado e validação de rota.",
      "A Sax Global pode ajudar a testar premissas de parceiro / distribuidor e representação local quando exigido.",
      "O contexto de execução — idioma, logística, moeda — pode ser dimensionado antes de qualquer compromisso.",
    ],
    readinessQuestions: [
      "Vendemos categorias que compradores públicos colombianos pedem, e na escala certa?",
      "Estamos preparados para abrir uma conta no SECOP II e atender regras de RUP / documentação?",
      "Precisamos de um representante ou distribuidor local para este processo?",
      "Conseguimos lidar com entrega, moeda e documentação cross-border?",
      "Uma rota direta é realista, ou uma rota de parceiro / preparar-antes é mais inteligente?",
    ],
    relatedLabel: "Todos os caminhos de market access",
    metaTitle:
      "Suprimentos de MRO e Operacionais na Colômbia — Brief de Oportunidade Pública",
    metaDescription:
      "Um exemplo real de demanda pública colombiana via SECOP II por suprimentos de MRO e operacionais — e por que um fornecedor regional precisa de fit, readiness e rota validada.",
  },

  "idb-development-equipment": {
    marketLabel: "BID",
    opportunityType: "Equipamentos técnicos e de infraestrutura para projetos de desenvolvimento",
    buyerType: "Agências executoras da América Latina e Caribe (projetos financiados pelo BID)",
    shortTitle: "Equipamentos de projetos do BID",
    heroEyebrow: "BID · Caminho multilateral",
    heroTitle: "Demanda financiada por banco de desenvolvimento na América Latina e no Caribe.",
    heroSubtitle:
      "O Banco Interamericano de Desenvolvimento financia milhares de projetos na América Latina e no Caribe, com agências executoras comprando bens, equipamentos e obras. As compras são abertas a empresas de países-membros do BID — mas elegibilidade e disciplina de processo são centrais.",
    summary:
      "Projetos financiados pelo BID geram dezenas de milhares de contratos por ano para bens, equipamentos e obras, comprados por agências executoras dos mutuários sob regras do BID. A demanda é ampla na região, e a participação é aberta a empresas de países-membros do BID — mas elegibilidade, processo e disciplina de execução definem quem compete.",
    whySuppliersCare: [
      "Projetos financiados pelo BID geram compras grandes e recorrentes de bens, equipamentos e obras na região.",
      "A participação é aberta a empresas de países-membros do BID, ampliando quem pode competir.",
      "Fornecedores de equipamentos técnicos e de infraestrutura mapeiam diretamente as necessidades dos projetos.",
    ],
    commonRequirements: [
      "A elegibilidade costuma depender das regras de países-membros do BID e da modalidade de compra do projeto.",
      "As propostas seguem políticas de compra da agência executora e do BID que devem ser lidas por aviso.",
      "Especificações técnicas, entrega aos locais do projeto e documentação devem ser validadas por oportunidade.",
    ],
    commonBlockers: [
      "Fornecedores tratam a compra do BID como licitação doméstica e perdem regras de elegibilidade e processo.",
      "Logística até os locais do projeto, prazos de entrega e presença local são subestimados.",
      "Garantias de desempenho, padrões e documentação devem ser validados por oportunidade.",
    ],
    govDecisionAnalysis: [
      "Compara a oportunidade ao Supplier Passport e sinaliza lacunas de elegibilidade e capacidade.",
      "Extrai requisitos de elegibilidade, especificação e entrega do aviso com apoio de IA.",
      "Detecta bloqueios — elegibilidade, logística, garantias — antes de comprometer recursos.",
      "Produz um brief de decisão Go / No-Go ajustado à disciplina de processo multilateral.",
    ],
    saxGlobalAngle: [
      "Para caminhos multilaterais financiados por banco de desenvolvimento, a Sax Global pode apoiar planejamento de acesso a mercado e validação de rota.",
      "A Sax Global pode ajudar a testar premissas de parceiro, logística e capacidade de execução quando aplicável.",
      "O contexto de execução para entrega do projeto pode ser dimensionado antes do compromisso.",
    ],
    readinessQuestions: [
      "Nossas categorias combinam com o que projetos financiados pelo BID realmente compram?",
      "Somos elegíveis sob as regras de países-membros e de compra do projeto do BID?",
      "Conseguimos entregar aos locais do projeto e atender especificações técnicas?",
      "Conseguimos oferecer as garantias e a documentação que esses projetos exigem?",
      "Uma rota direta é realista, ou devemos buscar parceiro ou preparar primeiro?",
    ],
    relatedLabel: "Todos os caminhos de market access",
    metaTitle: "Equipamentos de Projetos do BID — Brief de Oportunidade Pública",
    metaDescription:
      "Um exemplo real de demanda multilateral: equipamentos técnicos e de infraestrutura para projetos financiados pelo BID na América Latina e no Caribe — e por que fornecedores precisam de fit, readiness e disciplina de processo.",
  },

  "africa-energy-access": {
    marketLabel: "Mercados africanos selecionados",
    opportunityType:
      "Equipamentos de acesso à energia e eletrificação (financiados por doadores)",
    buyerType: "Agências públicas e concessionárias africanas via programas de energia financiados pelo AfDB",
    shortTitle: "Acesso à energia e eletrificação",
    heroEyebrow: "Mercados africanos selecionados · Caminho multilateral",
    heroTitle: "Demanda de acesso à energia financiada por doadores em todo o continente.",
    heroSubtitle:
      "O Banco Africano de Desenvolvimento financia programas de energia renovável e eletrificação — incluindo o Sustainable Energy Fund for Africa (SEFA) e a iniciativa Desert to Power — gerando compras de equipamentos solares, off-grid e de eletrificação. A demanda é significativa; a elegibilidade multilateral e as regras de execução são centrais.",
    summary:
      "Programas de energia financiados pelo AfDB — incluindo o SEFA e o Desert to Power — impulsionam compras de sistemas solares, kits off-grid, minirredes e equipamentos de eletrificação pela África. A demanda é real e crescente, mas elegibilidade, regras da agência executora e capacidade de execução definem a participação.",
    whySuppliersCare: [
      "Programas de acesso à energia financiados por doadores criam demanda sustentada por equipamentos solares, off-grid e de eletrificação.",
      "As compras do AfDB são abertas a empresas de países-membros, ampliando quem pode participar.",
      "Fornecedores de módulos solares, baterias, inversores e equipamentos de distribuição mapeiam diretamente as necessidades dos projetos.",
    ],
    commonRequirements: [
      "A elegibilidade costuma depender das regras de países-membros do AfDB e da modalidade de compra do projeto.",
      "As propostas seguem regras da agência executora e do AfDB que devem ser lidas por aviso.",
      "Especificações técnicas, entrega aos locais do projeto e suporte pós-venda podem ser exigidos.",
    ],
    commonBlockers: [
      "Fornecedores avaliam mal a elegibilidade e as exigências da agência executora, que variam por projeto.",
      "Logística até locais remotos do projeto, prazos de entrega e presença local são subestimados.",
      "Padrões de qualidade, garantias e documentação devem ser validados por oportunidade.",
    ],
    govDecisionAnalysis: [
      "Compara a oportunidade ao Supplier Passport e sinaliza lacunas de elegibilidade e capacidade.",
      "Extrai requisitos de elegibilidade, especificação e entrega do aviso com apoio de IA.",
      "Detecta bloqueios — elegibilidade, logística, garantias — antes de comprometer recursos.",
      "Prepara um brief de decisão Go / No-Go adequado à execução financiada por doadores.",
    ],
    saxGlobalAngle: [
      "Para caminhos multilaterais financiados por doadores, a Sax Global pode apoiar planejamento de acesso a mercado e validação de rota.",
      "A Sax Global pode ajudar a testar premissas de parceiro, logística e capacidade de execução quando aplicável.",
      "O contexto prático de execução para entrega do projeto pode ser dimensionado antes do compromisso.",
    ],
    readinessQuestions: [
      "Nossos produtos de energia se encaixam em projetos de eletrificação e energia renovável financiados pelo AfDB?",
      "Somos elegíveis sob as regras de países-membros e de compra do projeto?",
      "Conseguimos entregar a locais remotos do projeto e atender especificações técnicas?",
      "Conseguimos oferecer as garantias, o suporte e a documentação que esses projetos exigem?",
      "Uma rota direta é realista, ou devemos buscar parceiro ou preparar primeiro?",
    ],
    relatedLabel: "Todos os caminhos de market access",
    metaTitle:
      "Acesso à Energia e Eletrificação na África (AfDB) — Brief de Oportunidade Pública",
    metaDescription:
      "Um exemplo real de demanda financiada por doadores: equipamentos de acesso à energia e eletrificação financiados pelo AfDB pela África — e por que fornecedores precisam de fit, readiness e rota validada.",
  },
};
