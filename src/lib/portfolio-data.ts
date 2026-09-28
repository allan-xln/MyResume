export type PortfolioLanguage = "pt" | "en";

export type Project = {
  name: string;
  category: string;
  status: string;
  href?: string;
  description: string;
  role: string;
  highlights: string[];
  stack: string[];
};

export type EngineeringItem = {
  name: string;
  category: string;
  stack: string;
  description: string;
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  contributions: string[];
};

export type ProjectExperience = {
  title: string;
  description: string;
  examples: string[];
};

export type Capability = {
  title: string;
  description: string;
  tools: string[];
};

export type PortfolioContent = {
  locale: string;
  nav: {
    about: string;
    work: string;
    experience: string;
    capabilities: string;
    education: string;
    contact: string;
  };
  actions: {
    work: string;
    resume: string;
    source: string;
    email: string;
    switchLanguage: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    focus: string;
    summary: string;
    location: string;
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    role: string;
    projects: Project[];
    indexEyebrow: string;
    indexTitle: string;
    indexIntro: string;
    index: EngineeringItem[];
    ctaTitle: string;
    ctaText: string;
    ctaLabel: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Experience[];
    projectsLabel: string;
    projectsIntro: string;
    projects: ProjectExperience[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    intro: string;
    coreLabel: string;
    foundationLabel: string;
    core: Capability[];
    foundation: Capability[];
  };
  education: {
    eyebrow: string;
    title: string;
    items: Array<{ label: string; value: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    location: string;
    rights: string;
  };
};

const content: Record<PortfolioLanguage, PortfolioContent> = {
  pt: {
    locale: "pt-BR",
    nav: {
      about: "Sobre",
      work: "Projetos",
      experience: "Experiência",
      capabilities: "Competências",
      education: "Formação",
      contact: "Contato",
    },
    actions: {
      work: "Ver projetos",
      resume: "Baixar currículo",
      source: "GitHub",
      email: "Enviar e-mail",
      switchLanguage: "Ver em inglês",
    },
    hero: {
      eyebrow: "Portfólio pessoal · 2026",
      role: "Engenheiro de Software",
      focus: "IA, automação e infraestrutura.",
      summary:
        "Construo software e sistemas com IA para operações reais. Minha experiência em TI corporativa conecta código, redes, dados e pessoas.",
      location: "São José dos Pinhais, PR · Brasil",
    },
    work: {
      eyebrow: "Construções",
      title: "Software que saiu da ideia.",
      intro:
        "Produtos próprios e sistemas feitos para resolver operações reais.",
      role: "Minha atuação",
      projects: [
        {
          name: "LanChat",
          category: "IA aplicada",
          status: "Produto do ecossistema LanFuture",
          href: "https://lanfuture.dev/lanchat",
          description:
            "Plataforma de atendimento por WhatsApp para múltiplas empresas. A IA interpreta contexto e intenção dentro de fluxos comerciais, com áudio, CRM e controle humano.",
          role:
            "Concepção e desenvolvimento ponta a ponta: produto, serviços, motor conversacional, interface e operação.",
          highlights: [
            "Contexto e estado de conversa",
            "Transcrição e respostas por voz",
            "Transferência para atendimento humano e integrações",
          ],
          stack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "OpenAI", "Whisper"],
        },
        {
          name: "LanFuture",
          category: "Ecossistema de produtos",
          status: "lanfuture.dev",
          href: "https://lanfuture.dev",
          description:
            "Base pública que reúne meus produtos e serviços de software, automação e IA — incluindo LanChat e Vulcan.",
          role:
            "Concepção, identidade, experiência, desenvolvimento e evolução dos produtos.",
          highlights: [
            "Produtos e projetos próprios",
            "Software e automação sob medida",
            "Estratégia, desenvolvimento e operação",
          ],
          stack: ["React", "Vite", "Motion", "Three.js", "Vercel"],
        },
      ],
      indexEyebrow: "Outras construções",
      indexTitle: "Um índice do que também ganhou forma.",
      indexIntro:
        "Produtos e sistemas que construí entre operações, IA, automação, infraestrutura e dispositivos.",
      index: [
        {
          name: "Vulcan",
          category: "Inteligência operacional",
          stack: "Next.js · FastAPI · PostgreSQL · Go",
          description:
            "Ingestão de eventos, métricas rastreáveis e agentes Windows/Linux em uma plataforma para múltiplos clientes.",
        },
        {
          name: "Central de Sistemas",
          category: "Plataforma interna",
          stack: "Python · JavaScript · PostgreSQL · Microsoft 365",
          description:
            "Central de sistemas corporativos com autenticação unificada, permissões por aplicação e uma experiência única de acesso.",
        },
        {
          name: "Portal de Compras",
          category: "ERP e operação",
          stack: "Python · PostgreSQL · KMM · OCR",
          description:
            "Fluxo de solicitações, orçamentos, fornecedores, pedidos e estoque, com rastreabilidade e integração ao KMM.",
        },
        {
          name: "Monitoramento de Placas",
          category: "Visão computacional",
          stack: "Python · LPR · OCR · PostgreSQL",
          description:
            "Consulta e monitoramento de placas com captura de câmeras, segunda leitura por OCR, sincronização de frota e notificações.",
        },
        {
          name: "Sistema de Balança",
          category: "Operação rodoviária",
          stack: "Python · PostgreSQL · Web · Tempo real",
          description:
            "Sistema de pesagem rodoviária com comprovantes, histórico operacional e acompanhamento de indicadores em tempo real.",
        },
        {
          name: "Confirma Fácil",
          category: "Fluxo operacional",
          stack: "Python · Web · Evidências · Automação",
          description:
            "Fluxo controlado para confirmações operacionais, registro de evidências e acompanhamento de cada etapa.",
        },
        {
          name: "Monitoramento Operacional",
          category: "Operação e integrações",
          stack: "Python · APIs · Alertas · Observabilidade",
          description:
            "Acompanhamento de integrações e rotinas operacionais, com alertas e contexto para tratar ocorrências.",
        },
        {
          name: "Automação SASCar",
          category: "Automação de frota",
          stack: "Python · APIs · Automação · Frota",
          description:
            "Automação de rotinas e acesso integrado a recursos da SASCar dentro do ambiente operacional.",
        },
        {
          name: "Autorização de Embarque (AE)",
          category: "Automação de frota",
          stack: "Python · Automação em navegador · Evidências",
          description:
            "Geração automatizada de autorizações de embarque com execução centralizada e evidências do processo.",
        },
        {
          name: "Assistente Operacional com IA",
          category: "IA aplicada",
          stack: "IA · Dados operacionais · Relatórios",
          description:
            "Interface em evolução para consultar a operação e apoiar a criação de relatórios a partir de dados autorizados.",
        },
        {
          name: "Portal de TI",
          category: "TI corporativa",
          stack: "Python · PowerShell · AD · Microsoft 365 · GLPI",
          description:
            "Portal para usuários, inventário, estoque de TI, impressoras, documentação, registros e automações administrativas.",
        },
        {
          name: "Automação Empresarial",
          category: "ERP e automação em navegador",
          stack: "Python · Oracle · Selenium · Docker",
          description:
            "Ferramentas em torno de KMM/Oracle e sistemas web, com reconciliação, pontos de controle e evidências de execução.",
        },
        {
          name: "WhatsApp + Dados do ERP",
          category: "Integração de IA",
          stack: "TypeScript · WhatsApp · Oracle · PostgreSQL",
          description:
            "Conversas com IA conectadas a dados operacionais autorizados e consultados em tempo real.",
        },
        {
          name: "Monitoramento de Refrigeração",
          category: "IA operacional",
          stack: "Python · FastAPI · Supabase · GPT",
          description:
            "Telemetria e alarmes convertidos em métricas determinísticas, explicações controladas por IA e notificações.",
        },
        {
          name: "Selenoid / Grade de Automação em Navegador",
          category: "Automação",
          stack: "Selenoid · Selenium · Chrome · Docker · VNC",
          description:
            "Execuções centralizadas em sessões Chrome isoladas, com VNC, vídeo e evidências por operação.",
        },
        {
          name: "Integra Condomínio",
          category: "Produto móvel",
          stack: "Expo · React Native · Supabase",
          description:
            "Aplicativo para múltiplos condomínios com mapa interativo, ocorrências, documentos e acesso por perfil.",
        },
        {
          name: "Regador automático",
          category: "Eletrônica e IoT",
          stack: "ESP32 · C++ · Sensores · MQTT",
          description:
            "Protótipo de irrigação automática com ESP32, leitura de sensores e comunicação remota por MQTT.",
        },
        {
          name: "Cidade Tranquila",
          category: "Tecnologia cívica",
          stack: "React Native · Mapas · Supabase",
          description:
            "Aplicativo cartográfico para ocorrências, alertas e fluxos distintos para cidadãos e gestão pública.",
        },
        {
          name: "Fluxo com Bafômetro",
          category: "Aplicação local e dispositivos",
          stack: "Python · Comunicação serial · Windows · PyInstaller",
          description:
            "Automação resiliente entre bafômetro, software legado e impressora térmica, com detecção dinâmica de portas.",
        },
      ],
      ctaTitle: "Há mais por trás dessas linhas.",
      ctaText:
        "Quer entender como algum desses sistemas foi pensado ou ver outras construções? Fale comigo.",
      ctaLabel: "Descobrir mais no WhatsApp",
    },
    experience: {
      eyebrow: "Experiência profissional",
      title: "Código com contexto de operação.",
      intro:
        "Atuação em software e TI corporativa, com responsabilidade sobre sistemas, infraestrutura e continuidade operacional.",
      items: [
        {
          period: "2024 — atual",
          role: "Analista de TI · PJ",
          company: "PCNet",
          contributions: [
            "Atendimento aos clientes da PCNet, incluindo alocações dedicadas com responsabilidade direta pela TI.",
            "Infraestrutura, redes, servidores, segurança, usuários e análise de incidentes.",
            "Automações, integrações e ferramentas internas para operações logísticas e ambientes corporativos.",
          ],
        },
        {
          period: "2021 — 2024",
          role: "Aprendiz → Analista de TI",
          company: "Cotrasa Scania",
          contributions: [
            "Progressão por quatro funções entre aprendizagem e análise.",
            "Implantação técnica do ERP Senior, testes e integrações.",
            "Automações, dados operacionais e capacitação de usuários.",
          ],
        },
      ],
      projectsLabel: "Experiência em projetos",
      projectsIntro:
        "Três frentes presentes de forma contínua no que projeto, desenvolvo e opero.",
      projects: [
        {
          title: "Automação",
          description:
            "Processos repetitivos transformados em fluxos executáveis, observáveis e recuperáveis.",
          examples: [
            "ERP, Oracle e automação de navegador",
            "Selenoid, filas e execução remota",
            "Integrações, pontos de controle, evidências e alertas",
          ],
        },
        {
          title: "Desenvolvimento",
          description:
            "Produtos e ferramentas completas, da interface à lógica de negócio e aos dados.",
          examples: [
            "Aplicações para web e dispositivos móveis, APIs e serviços",
            "IA conversacional, OCR e visão computacional",
            "Sistemas para múltiplos clientes e portais internos",
          ],
        },
        {
          title: "Infraestrutura",
          description:
            "Ambientes que precisam permanecer disponíveis, seguros e simples de manter.",
          examples: [
            "Linux, Windows Server, Docker e implantação",
            "Active Directory, Microsoft 365, redes e VPN",
            "Monitoramento, cópias de segurança e continuidade operacional",
          ],
        },
      ],
    },
    capabilities: {
      eyebrow: "Competências",
      title: "O que sustenta meu trabalho.",
      intro:
        "Capacidades principais primeiro; ferramentas entram como apoio.",
      coreLabel: "Principal",
      foundationLabel: "Base técnica",
      core: [
        {
          title: "Engenharia de Software",
          description: "Aplicações completas, APIs, serviços e interfaces com tipagem e testes.",
          tools: ["TypeScript", "React", "Next.js", "Node.js", "FastAPI", "Kotlin"],
        },
        {
          title: "Sistemas de IA",
          description: "Contexto, agentes, classificação, extração, voz e controle do modelo.",
          tools: ["OpenAI", "LLMs", "Whisper", "Python", "Visão computacional"],
        },
        {
          title: "Automação",
          description: "Integrações e fluxos que conectam dados, sistemas e decisões.",
          tools: ["APIs REST", "Webhooks", "Selenium", "Filas", "Docker"],
        },
      ],
      foundation: [
        {
          title: "Infraestrutura e Redes",
          description: "Redes, identidade, segurança, servidores e diagnóstico ponta a ponta.",
          tools: ["Linux", "Windows Server", "Active Directory", "FortiGate", "MikroTik", "VPN"],
        },
        {
          title: "Sistemas Empresariais",
          description: "Ambientes corporativos, ERP, Microsoft 365 e suporte avançado.",
          tools: ["KMM", "ERP Senior", "Oracle", "Microsoft 365", "Power BI"],
        },
        {
          title: "Dados e Integrações",
          description: "Persistência, isolamento, consultas e integrações operacionais.",
          tools: ["PostgreSQL", "Prisma", "Supabase / RLS", "SQL"],
        },
      ],
    },
    education: {
      eyebrow: "Formação",
      title: "Formação e idioma.",
      items: [
        { label: "Graduação", value: "Engenharia de Software · em andamento" },
        { label: "Curso", value: "Neurociência Computacional · em andamento" },
        { label: "Formação técnica", value: "Técnico em Desenvolvimento de Sistemas" },
        { label: "Idioma", value: "Inglês intermediário · em desenvolvimento" },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar.",
      text: "Projetos, oportunidades e problemas técnicos que exigem visão de software e operação.",
      location: "São José dos Pinhais, Paraná · Brasil",
      rights: "Projetado e desenvolvido por Allan Pereira.",
    },
  },
  en: {
    locale: "en-US",
    nav: {
      about: "About",
      work: "Work",
      experience: "Experience",
      capabilities: "Capabilities",
      education: "Education",
      contact: "Contact",
    },
    actions: {
      work: "View work",
      resume: "Download résumé",
      source: "GitHub",
      email: "Send an email",
      switchLanguage: "View in Portuguese",
    },
    hero: {
      eyebrow: "Personal portfolio · 2026",
      role: "Software Engineer",
      focus: "AI, automation, and infrastructure.",
      summary:
        "I build software and AI systems for real-world operations. My corporate IT background connects code, networks, data, and people.",
      location: "São José dos Pinhais, PR · Brazil",
    },
    work: {
      eyebrow: "Things I have built",
      title: "Software that made it past the idea stage.",
      intro:
        "Original products and systems built to solve real operational problems.",
      role: "My role",
      projects: [
        {
          name: "LanChat",
          category: "Applied AI",
          status: "A LanFuture ecosystem product",
          href: "https://lanfuture.dev/lanchat",
          description:
            "A multi-tenant WhatsApp customer-service platform. AI interprets context and intent inside commercial workflows, with audio, CRM, and human control.",
          role:
            "End-to-end product and engineering: backend, conversational engine, interface, infrastructure, and operations.",
          highlights: [
            "Conversation context and state",
            "Transcription and voice replies",
            "Human handoff and integrations",
          ],
          stack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "OpenAI", "Whisper"],
        },
        {
          name: "LanFuture",
          category: "Product ecosystem",
          status: "lanfuture.dev",
          href: "https://lanfuture.dev",
          description:
            "The public home for my software, automation, and AI products and services — including LanChat and Vulcan.",
          role:
            "Concept, identity, product experience, development, and ongoing evolution.",
          highlights: [
            "Original products and projects",
            "Custom software and automation",
            "Strategy, engineering, and operations",
          ],
          stack: ["React", "Vite", "Motion", "Three.js", "Vercel"],
        },
      ],
      indexEyebrow: "Other builds",
      indexTitle: "An index of what else took shape.",
      indexIntro:
        "Products and systems I built across operations, AI, automation, infrastructure, and hardware.",
      index: [
        {
          name: "Vulcan",
          category: "Operational intelligence",
          stack: "Next.js · FastAPI · PostgreSQL · Go",
          description:
            "Event ingestion, traceable metrics, and Windows/Linux agents in a multi-tenant platform.",
        },
        {
          name: "Systems Hub",
          category: "Internal platform",
          stack: "Python · JavaScript · PostgreSQL · Microsoft 365",
          description:
            "A corporate systems hub with centralized authentication, per-application permissions, and a unified access experience.",
        },
        {
          name: "Purchasing Portal",
          category: "ERP and operations",
          stack: "Python · PostgreSQL · KMM · OCR",
          description:
            "Requests, quotations, suppliers, orders, and inventory in a traceable workflow integrated with KMM.",
        },
        {
          name: "License Plate Monitoring",
          category: "Computer vision",
          stack: "Python · LPR · OCR · PostgreSQL",
          description:
            "License-plate lookup and monitoring with camera ingestion, secondary OCR, fleet synchronization, and notifications.",
        },
        {
          name: "Weighbridge System",
          category: "Road operations",
          stack: "Python · PostgreSQL · Web · Real-time",
          description:
            "Road-weighing software with receipts, operational history, and live indicator tracking.",
        },
        {
          name: "Confirmation Workflow",
          category: "Operational workflow",
          stack: "Python · Web · Evidence · Automation",
          description:
            "A controlled workflow for operational confirmations, evidence capture, and step-by-step tracking.",
        },
        {
          name: "Operational Monitoring",
          category: "Operations and integrations",
          stack: "Python · APIs · Alerts · Observability",
          description:
            "Monitoring for integrations and operational routines, with alerts and context for handling incidents.",
        },
        {
          name: "SASCar Automation",
          category: "Fleet automation",
          stack: "Python · APIs · Automation · Fleet",
          description:
            "Automated routines and integrated access to SASCar resources within the operational environment.",
        },
        {
          name: "Boarding Authorization (AE)",
          category: "Fleet automation",
          stack: "Python · Browser Automation · Evidence",
          description:
            "Automated boarding-authorization generation with centralized execution and process evidence.",
        },
        {
          name: "AI Operations Assistant",
          category: "Applied AI",
          stack: "AI · Operational data · Reports",
          description:
            "An evolving interface for querying operations and assisting report creation from authorized data.",
        },
        {
          name: "IT Operations Portal",
          category: "Corporate IT",
          stack: "Python · PowerShell · AD · Microsoft 365 · GLPI",
          description:
            "A portal for users, device inventory, IT stock, printers, documentation, logs, and administrative automation.",
        },
        {
          name: "Enterprise Automation",
          category: "ERP and browser automation",
          stack: "Python · Oracle · Selenium · Docker",
          description:
            "Tooling around KMM/Oracle and browser systems, with reconciliation, checkpoints, and execution evidence.",
        },
        {
          name: "WhatsApp + ERP Data",
          category: "AI integration",
          stack: "TypeScript · WhatsApp · Oracle · PostgreSQL",
          description:
            "AI conversations connected to authorized operational data queried in real time.",
        },
        {
          name: "Refrigeration Monitor",
          category: "Operational AI",
          stack: "Python · FastAPI · Supabase · GPT",
          description:
            "Telemetry and alarms converted into deterministic metrics, controlled AI explanations, and notifications.",
        },
        {
          name: "Selenoid / Browser Automation Grid",
          category: "Automation",
          stack: "Selenoid · Selenium · Chrome · Docker · VNC",
          description:
            "Centralized runs in isolated Chrome sessions with VNC, video, and per-operation evidence.",
        },
        {
          name: "Condominium Integration",
          category: "Mobile product",
          stack: "Expo · React Native · Supabase",
          description:
            "A multi-condominium app with interactive maps, incident reports, documents, and role-based access.",
        },
        {
          name: "Automatic Plant Watering",
          category: "Electronics and IoT",
          stack: "ESP32 · C++ · Sensors · MQTT",
          description:
            "An ESP32-based automatic irrigation prototype with sensor input and remote MQTT communication.",
        },
        {
          name: "Peaceful City",
          category: "Civic technology",
          stack: "React Native · Maps · Supabase",
          description:
            "A map-based app for reports, alerts, and separate citizen and local-government workflows.",
        },
        {
          name: "Breathalyzer Workflow",
          category: "Desktop and hardware",
          stack: "Python · Serial · Windows · PyInstaller",
          description:
            "Resilient automation between a breathalyzer, legacy software, and a thermal printer, with dynamic port detection.",
        },
      ],
      ctaTitle: "There is more behind these lines.",
      ctaText:
        "Want to understand how one of these systems was designed or see other work? Get in touch.",
      ctaLabel: "Discover more on WhatsApp",
    },
    experience: {
      eyebrow: "Professional experience",
      title: "Code with operational context.",
      intro:
        "Software and corporate IT work spanning systems, infrastructure, and operational continuity.",
      items: [
        {
          period: "2024 — Present",
          role: "IT Analyst · Contractor",
          company: "PCNet",
          contributions: [
            "Support PCNet clients, including dedicated assignments with direct responsibility for their IT environments.",
            "Infrastructure, networks, servers, security, users, and incident analysis.",
            "Automation, integrations, and internal tools for logistics operations and corporate environments.",
          ],
        },
        {
          period: "2021 — 2024",
          role: "Apprentice → IT Analyst",
          company: "Cotrasa Scania",
          contributions: [
            "Progressed through four roles from apprentice to analyst.",
            "Supported Senior ERP implementation, testing, and integrations.",
            "Built automations, worked with operational data, and trained users.",
          ],
        },
      ],
      projectsLabel: "Project experience",
      projectsIntro:
        "Three disciplines that consistently shape what I design, build, and operate.",
      projects: [
        {
          title: "Automation",
          description:
            "Repetitive processes turned into executable, observable, and recoverable workflows.",
          examples: [
            "ERP, Oracle, and browser automation",
            "Selenoid, queues, and remote execution",
            "Integrations, checkpoints, evidence, and alerts",
          ],
        },
        {
          title: "Software Development",
          description:
            "Complete products and tools spanning interfaces, business logic, and data.",
          examples: [
            "Web and mobile applications, APIs, and services",
            "Conversational AI, OCR, and computer vision",
            "Multi-tenant systems and internal portals",
          ],
        },
        {
          title: "Infrastructure",
          description:
            "Environments designed to remain available, secure, and straightforward to maintain.",
          examples: [
            "Linux, Windows Server, Docker, and deployment",
            "Active Directory, Microsoft 365, networks, and VPN",
            "Monitoring, backup, and operational continuity",
          ],
        },
      ],
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "What supports my work.",
      intro: "Core capabilities first; tools provide the supporting detail.",
      coreLabel: "Core",
      foundationLabel: "Technical foundation",
      core: [
        {
          title: "Software Engineering",
          description: "Complete applications, APIs, services, and interfaces backed by types and tests.",
          tools: ["TypeScript", "React", "Next.js", "Node.js", "FastAPI", "Kotlin"],
        },
        {
          title: "AI Systems",
          description: "Context, agents, classification, extraction, voice, and model control.",
          tools: ["OpenAI", "LLMs", "Whisper", "Python", "Computer vision"],
        },
        {
          title: "Automation",
          description: "Integrations and workflows connecting data, systems, and decisions.",
          tools: ["REST APIs", "Webhooks", "Selenium", "Queues", "Docker"],
        },
      ],
      foundation: [
        {
          title: "Infrastructure & Networking",
          description: "Networks, identity, security, servers, and end-to-end troubleshooting.",
          tools: ["Linux", "Windows Server", "Active Directory", "FortiGate", "MikroTik", "VPN"],
        },
        {
          title: "Enterprise Systems",
          description: "Corporate environments, ERP, Microsoft 365, and advanced support.",
          tools: ["KMM", "Senior ERP", "Oracle", "Microsoft 365", "Power BI"],
        },
        {
          title: "Data & Integration",
          description: "Persistence, isolation, queries, and operational integrations.",
          tools: ["PostgreSQL", "Prisma", "Supabase / RLS", "SQL"],
        },
      ],
    },
    education: {
      eyebrow: "Education",
      title: "Education and language.",
      items: [
        { label: "Degree", value: "Software Engineering · in progress" },
        { label: "Course", value: "Computational Neuroscience · in progress" },
        { label: "Technical education", value: "Systems Development Technician" },
        { label: "Language", value: "Intermediate English · actively improving" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk.",
      text: "Projects, opportunities, and technical problems that require both software and operational thinking.",
      location: "São José dos Pinhais, Paraná · Brazil",
      rights: "Designed and built by Allan Pereira.",
    },
  },
};

export function getPortfolioContent(lang: PortfolioLanguage): PortfolioContent {
  return content[lang];
}
