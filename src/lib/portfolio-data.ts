export type PortfolioLanguage = "pt" | "en";

export type Project = {
  name: string;
  category: string;
  status: string;
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
  };
  experience: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Experience[];
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
      switchLanguage: "View in English",
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
      eyebrow: "Trabalho selecionado",
      title: "Algumas coisas que construí.",
      intro:
        "Três trabalhos que mostram como atuo entre produto, software e operação.",
      role: "Minha atuação",
      projects: [
        {
          name: "LanChat",
          category: "Produto de IA",
          status: "Produto próprio",
          description:
            "Plataforma multi-tenant de atendimento por WhatsApp. A IA interpreta contexto e intenção dentro de fluxos comerciais, com áudio, CRM e controle humano.",
          role:
            "Concepção e desenvolvimento ponta a ponta: produto, backend, motor conversacional, interface e operação.",
          highlights: [
            "Contexto e estado de conversa",
            "Transcrição e respostas por voz",
            "Handoff humano e integrações",
          ],
          stack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "OpenAI", "Whisper"],
        },
        {
          name: "Camera OCR",
          category: "Computer vision",
          status: "Sistema interno",
          description:
            "Serviço que ingere eventos e imagens de uma câmera Dahua, executa detecção e OCR locais e registra leituras de placas em tempo real.",
          role:
            "Coleta, pipeline de OCR, regras de consenso e revisão, API, painel, banco e deployment.",
          highlights: [
            "Processamento local de imagens",
            "Persistência idempotente e auditável",
            "Atualização do painel via SSE",
          ],
          stack: ["Python", "FastAPI", "FastALPR", "PostgreSQL", "SSE", "Linux"],
        },
        {
          name: "Enterprise Automation",
          category: "ERP e browser automation",
          status: "Sistemas internos",
          description:
            "Ferramentas para compras e transporte em torno de KMM/Oracle e sistemas web, com importação de documentos, checkpoints e evidências de execução.",
          role:
            "Arquitetura, integrações, backend, automação e controles de segurança operacional.",
          highlights: [
            "Consultas Oracle e reconciliação de dados",
            "Execução remota com Selenium Grid",
            "Auditoria, vídeo e checkpoints humanos",
          ],
          stack: ["Python", "Oracle", "PostgreSQL", "Selenium Grid", "React", "Docker"],
        },
      ],
      indexEyebrow: "Engineering index",
      indexTitle: "Construído ao longo do caminho.",
      indexIntro:
        "Produtos, integrações e ferramentas com implementação verificável nos meus repositórios.",
      index: [
        {
          name: "Vulcan",
          category: "Inteligência operacional",
          stack: "Next.js · FastAPI · PostgreSQL · Go",
          description:
            "Ingestão de eventos, métricas rastreáveis e agentes Windows/Linux em uma plataforma multi-tenant.",
        },
        {
          name: "Refrigeration Monitor",
          category: "IA operacional",
          stack: "Python · FastAPI · Supabase · GPT",
          description:
            "Telemetria e alarmes convertidos em métricas determinísticas, explicações controladas por IA e notificações.",
        },
        {
          name: "WhatsApp + ERP Data",
          category: "Integração de IA",
          stack: "TypeScript · WhatsApp · Oracle · PostgreSQL",
          description:
            "Conversas com IA conectadas a dados operacionais autorizados e consultados em tempo real.",
        },
        {
          name: "Browser Automation Grid",
          category: "Automação",
          stack: "Selenium · Python · React · Docker",
          description:
            "Execuções centralizadas em sessões Chrome isoladas, com VNC, vídeo e evidências por operação.",
        },
        {
          name: "Integra Condomínio",
          category: "Produto mobile",
          stack: "Expo · React Native · Supabase",
          description:
            "Aplicativo multi-condomínio com mapa interativo, ocorrências, documentos e acesso por perfil.",
        },
        {
          name: "Cidade Tranquila",
          category: "Tecnologia cívica",
          stack: "React Native · Maps · Supabase",
          description:
            "Aplicativo cartográfico para ocorrências, alertas e fluxos distintos para cidadãos e gestão pública.",
        },
        {
          name: "Breathalyzer Workflow",
          category: "Desktop e hardware",
          stack: "Python · Serial · Windows · PyInstaller",
          description:
            "Automação resiliente entre bafômetro, software legado e impressora térmica, com detecção dinâmica de portas.",
        },
        {
          name: "First-party Analytics",
          category: "Dados e SEO",
          stack: "Node.js · SQLite · Search Console",
          description:
            "Analytics próprio com métricas por SQL, relatórios programados e integração de leitura com o Search Console.",
        },
      ],
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
            "Automações, integrações e ferramentas internas para operações como ERS Transportes e Jadimo.",
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
          title: "Software Engineering",
          description: "Aplicações completas, APIs, serviços e interfaces com tipagem e testes.",
          tools: ["TypeScript", "React", "Next.js", "Node.js", "FastAPI", "Kotlin"],
        },
        {
          title: "AI Systems",
          description: "Contexto, agentes, classificação, extração, voz e controle do modelo.",
          tools: ["OpenAI", "LLMs", "Whisper", "Python", "Computer vision"],
        },
        {
          title: "Automation",
          description: "Integrações e fluxos que conectam dados, sistemas e decisões.",
          tools: ["REST APIs", "Webhooks", "Selenium", "Queues", "Docker"],
        },
      ],
      foundation: [
        {
          title: "Infrastructure & Networking",
          description: "Redes, identidade, segurança, servidores e diagnóstico ponta a ponta.",
          tools: ["Linux", "Windows Server", "Active Directory", "FortiGate", "MikroTik", "VPN"],
        },
        {
          title: "Enterprise Systems",
          description: "Ambientes corporativos, ERP, Microsoft 365 e suporte avançado.",
          tools: ["KMM", "ERP Senior", "Oracle", "Microsoft 365", "Power BI"],
        },
        {
          title: "Data & Integration",
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
      switchLanguage: "Ver em português",
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
      eyebrow: "Selected work",
      title: "A few things I have built.",
      intro:
        "Three projects showing how I work across product, software, and operations.",
      role: "My role",
      projects: [
        {
          name: "LanChat",
          category: "AI product",
          status: "Original product",
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
          name: "Camera OCR",
          category: "Computer vision",
          status: "Internal system",
          description:
            "A service that ingests events and images from a Dahua camera, runs local detection and OCR, and records license-plate readings in real time.",
          role:
            "Collection, OCR pipeline, consensus and review rules, API, dashboard, database, and deployment.",
          highlights: [
            "Local image processing",
            "Idempotent, auditable persistence",
            "Live dashboard updates over SSE",
          ],
          stack: ["Python", "FastAPI", "FastALPR", "PostgreSQL", "SSE", "Linux"],
        },
        {
          name: "Enterprise Automation",
          category: "ERP and browser automation",
          status: "Internal systems",
          description:
            "Procurement and transportation tooling around KMM/Oracle and browser systems, with document ingestion, checkpoints, and execution evidence.",
          role:
            "Architecture, integrations, backend, automation, and operational safety controls.",
          highlights: [
            "Oracle queries and data reconciliation",
            "Remote execution through Selenium Grid",
            "Audit trails, video, and human checkpoints",
          ],
          stack: ["Python", "Oracle", "PostgreSQL", "Selenium Grid", "React", "Docker"],
        },
      ],
      indexEyebrow: "Engineering index",
      indexTitle: "Built along the way.",
      indexIntro:
        "Products, integrations, and tools backed by working implementations in my repositories.",
      index: [
        {
          name: "Vulcan",
          category: "Operational intelligence",
          stack: "Next.js · FastAPI · PostgreSQL · Go",
          description:
            "Event ingestion, traceable metrics, and Windows/Linux agents in a multi-tenant platform.",
        },
        {
          name: "Refrigeration Monitor",
          category: "Operational AI",
          stack: "Python · FastAPI · Supabase · GPT",
          description:
            "Telemetry and alarms converted into deterministic metrics, controlled AI explanations, and notifications.",
        },
        {
          name: "WhatsApp + ERP Data",
          category: "AI integration",
          stack: "TypeScript · WhatsApp · Oracle · PostgreSQL",
          description:
            "AI conversations connected to authorized operational data queried in real time.",
        },
        {
          name: "Browser Automation Grid",
          category: "Automation",
          stack: "Selenium · Python · React · Docker",
          description:
            "Centralized runs in isolated Chrome sessions with VNC, video, and per-operation evidence.",
        },
        {
          name: "Integra Condomínio",
          category: "Mobile product",
          stack: "Expo · React Native · Supabase",
          description:
            "A multi-condominium app with interactive maps, incident reports, documents, and role-based access.",
        },
        {
          name: "Cidade Tranquila",
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
        {
          name: "First-party Analytics",
          category: "Data and SEO",
          stack: "Node.js · SQLite · Search Console",
          description:
            "First-party analytics with SQL-based metrics, scheduled reports, and read-only Search Console integration.",
        },
      ],
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
            "Automation, integrations, and internal tools for operations such as ERS Transportes and Jadimo.",
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
