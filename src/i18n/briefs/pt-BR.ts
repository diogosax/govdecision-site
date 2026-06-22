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
};
