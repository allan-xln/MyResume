'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Blocks,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  GraduationCap,
  Languages,
  Lightbulb,
  MonitorCog,
  Network,
  ShieldCheck,
} from "lucide-react";

type ResumePageProps = {
  lang: "pt" | "en";
};

function parseMarkdown(text: string | React.ReactNode): React.ReactNode {
  if (typeof text !== "string") return text;

  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="font-semibold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    ),
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

export function ResumePage({ lang }: ResumePageProps) {
  const isPT = lang === "pt";

  const content = {
    kicker: isPT ? "Currículo profissional" : "Professional resume",
    title: "Allan da Silva Pereira",
    heroSummary: isPT
      ? "Profissional de TI com atuação prática em infraestrutura corporativa, automações, desenvolvimento e liderança operacional."
      : "IT professional with hands-on experience in corporate infrastructure, automation, development, and operational leadership.",
    heroEyebrow: isPT
      ? "Infraestrutura, automação e entrega com visão de operação"
      : "Infrastructure, automation, and delivery with an operational mindset",
    sectionTitle: isPT ? "Perfil Profissional" : "Professional Profile",
    theoryTitle: isPT ? "Formação e Base Técnica" : "Education and Technical Foundation",
    experienceTitle: isPT ? "Experiências Profissionais" : "Professional Experience",
    skillsTitle: isPT ? "Habilidades Técnicas" : "Technical Skills",
    strengthsTitle: isPT ? "Pontos de força" : "Core strengths",
    closing: isPT
      ? "Atualmente, busco novos desafios onde eu possa crescer, contribuir e continuar evoluindo com impacto real no negócio."
      : "I am currently seeking new challenges where I can grow, contribute, and keep evolving with real business impact.",
    paragraphs: isPT
      ? [
          "Atuo há **4 anos na área de Tecnologia da Informação**, com experiência voltada para infraestrutura, automações, desenvolvimento e implementação de soluções corporativas.",
          "Sou movido por desafios e motivado a transformar problemas do dia a dia em soluções práticas e eficientes, sempre buscando otimizar processos e agregar valor às operações.",
          "Na **Cotrasa - Scania**, onde estive de **2021 a 2024**, iniciei como jovem aprendiz e, posteriormente, fui promovido ao cargo de analista de TI. Durante esse período, participei da estruturação de processos, conduzi melhorias internas e colaborei diretamente com áreas estratégicas da empresa. Também fui responsável por apoiar a implantação do sistema **Senior**, conduzindo a parte técnica, testes de integração e capacitação dos usuários. Além disso, desenvolvi **projetos de automação** voltados à busca e consolidação de dados para alimentar dashboards, soluções que depois também apliquei em projetos posteriores.",
          "Atuei como **profissional PJ pela PCNet**, com foco no atendimento da **Jadimo Transportes** até **abril de 2026**, sendo responsável pela operação de TI, infraestrutura, suporte técnico, segurança da informação e desenvolvimento de soluções sob medida para a rotina da empresa.",
          "Desde **abril de 2026**, sigo como **profissional PJ pela PCNet**, agora com foco no atendimento da **ERS Transportes**, aplicando a mesma visão prática em infraestrutura, suporte, organização operacional e evolução tecnológica do ambiente.",
          "Além das atividades regulares, já atuei em **projetos extraordinários de infraestrutura** para outras empresas, conduzindo a implementação completa de ambientes de TI, desde a montagem e configuração de racks e equipamentos, como RouterBoard, até a passagem de patch cords e entrega final do ambiente, com toda a estrutura documentada e funcional.",
        ]
      : [
          "I've been working for **4 years in the Information Technology field**, with experience focused on infrastructure, automation, development, and corporate solutions.",
          "I'm driven by challenges and motivated to turn everyday problems into practical and efficient solutions, always seeking to optimize processes and add value to operations.",
          "At **Cotrasa - Scania**, where I worked from **2021 to 2024**, I started as a young apprentice and was later promoted to IT Analyst. During that time, I helped structure internal processes, implemented improvements, and collaborated with strategic departments. I also supported the implementation of the **Senior** system, handling the technical setup, integration testing, and user training. Additionally, I developed **automation projects** that fetched and consolidated data for dashboards, solutions I later applied to other projects as well.",
          "I worked as a **PJ contractor through PCNet**, focused on supporting **Jadimo Transportes** until **April 2026**, being responsible for IT operations, infrastructure, technical support, information security, and custom solution delivery.",
          "Since **April 2026**, I have continued as a **PJ contractor through PCNet**, now focused on supporting **ERS Transportes**, applying the same hands-on approach to infrastructure, support, operational organization, and technology improvement.",
          "In addition to regular activities, I have also worked on **infrastructure projects** for other companies, leading the full setup of IT environments, from racks and RouterBoards to patch cords and final documented delivery.",
        ],
    venturesTitle: isPT ? "Projeto pessoal" : "Personal project",
    ventures: [
      {
        name: "LanFuture",
        url: "https://lanfuture.dev",
        description: isPT
          ? "Projeto pessoal voltado a produtos digitais, presença dev e evolução de soluções próprias."
          : "Personal project focused on digital products, development presence, and the evolution of proprietary solutions.",
      },
    ],
    theory: {
      languagesTitle: isPT ? "Idiomas" : "Languages",
      languages: isPT
        ? ["Inglês intermediário"]
        : ["Intermediate English"],
      informaticsTitle: isPT ? "Informática" : "IT Fundamentals",
      informatics: [
        isPT ? "Informática básica" : "Basic IT",
        isPT ? "Informática intermediária" : "Intermediate IT",
        isPT ? "Informática avançada" : "Advanced IT",
      ],
      techCourseTitle: isPT ? "Curso Técnico" : "Technical Course",
      techCourse: isPT ? "Técnico em Desenvolvimento de Sistemas" : "Systems Development Technician",
      collegeTitle: isPT ? "Ensino Superior" : "Higher Education",
      college: isPT
        ? "Faculdade de Engenharia de Software (em andamento)"
        : "Software Engineering degree (in progress)",
    },
    experiences: [
      {
        role: isPT ? "Analista de TI" : "IT Analyst",
        company: isPT ? "PCNet • ERS Transportes" : "PCNet • ERS Transportes",
        period: isPT ? "abr/2026 - atual" : "Apr 2026 - Present",
        highlight: isPT
          ? "Atuação atual com foco em infraestrutura, suporte e evolução do ambiente de TI."
          : "Current role focused on infrastructure, support, and IT environment improvement.",
      },
      {
        role: isPT ? "Analista de TI" : "IT Analyst",
        company: isPT ? "PCNet • Jadimo Transportes" : "PCNet • Jadimo Transportes",
        period: isPT ? "2024 - abr/2026" : "2024 - Apr 2026",
        highlight: isPT
          ? "Atuação voltada à operação de TI, infraestrutura, suporte e soluções para a Jadimo Transportes."
          : "Worked on IT operations, infrastructure, support, and solution delivery for Jadimo Transportes.",
      },
      {
        role: isPT ? "Analista de TI" : "IT Analyst",
        company: "Cotrasa Scania",
        period: "2024",
      },
      {
        role: isPT ? "Assistente de TI" : "IT Associate",
        company: "Cotrasa Scania",
        period: "2023",
      },
      {
        role: isPT ? "Auxiliar de TI" : "IT Assistant",
        company: "Cotrasa Scania",
        period: "2022",
      },
      {
        role: isPT ? "Auxiliar de Vendas de Serviços" : "Service Sales Assistant",
        company: "Cotrasa Scania",
        period: "2021",
      },
      {
        role: isPT ? "Aprendiz de RH" : "HR Apprentice",
        company: "Cotrasa Scania",
        period: "2021",
      },
    ],
    skills: [
      {
        title: isPT ? "Infraestrutura" : "Infrastructure",
        icon: Network,
        items: [
          "RouterBoard, MikroTik",
          "Firewall (pfSense, OPNsense)",
          isPT ? "Racks, cabeamento e switches" : "Racks, cabling, and switches",
          isPT ? "Pontos de rede e patch panels" : "Network points and patch panels",
          isPT ? "Monitoramento com Zabbix e Grafana" : "Monitoring with Zabbix and Grafana",
          "GLPI",
        ],
      },
      {
        title: isPT ? "Desenvolvimento" : "Development",
        icon: MonitorCog,
        items: [
          "JavaScript, TypeScript",
          "React, Next.js, Vite",
          "React Native, Kotlin",
          "APIs REST, componentização e lógica de interface",
          "Python, Selenium, PyAutoGUI",
          "Tailwind CSS, CSS3",
          isPT ? "Automação de tarefas e scripts" : "Task and script automation",
          isPT ? "Integração com APIs" : "API integration",
        ],
      },
      {
        title: isPT ? "Visão complementar" : "Complementary skills",
        icon: Lightbulb,
        items: [
          isPT ? "Power BI e pacote Office" : "Power BI and Office suite",
          isPT ? "Design visual e UX/UI" : "Visual design and UX/UI",
          isPT ? "Edição de vídeo e imagem" : "Video and image editing",
          isPT ? "Comunicação e leitura de contexto" : "Communication and contextual reading",
          isPT ? "Boa atuação interpessoal" : "Strong interpersonal skills",
        ],
      },
    ],
    strengths: isPT
      ? [
          {
            title: "Visão prática",
            description: "Atuação próxima da operação, com foco em resolver contexto real e não só demanda isolada.",
            icon: ShieldCheck,
          },
          {
            title: "Capacidade de execução",
            description: "Conecta infraestrutura, suporte e desenvolvimento para entregar soluções completas com agilidade.",
            icon: Blocks,
          },
          {
            title: "Leitura de negócio",
            description: "Organiza processos, reduz atrito interno e transforma necessidades recorrentes em melhorias contínuas.",
            icon: ChartNoAxesCombined,
          },
        ]
      : [
          {
            title: "Hands-on mindset",
            description: "Works close to operations, solving real business context instead of isolated requests.",
            icon: ShieldCheck,
          },
          {
            title: "Execution ability",
            description: "Combines infrastructure, support, and development to deliver complete solutions quickly.",
            icon: Blocks,
          },
          {
            title: "Business awareness",
            description: "Organizes processes, reduces friction, and turns recurring needs into ongoing improvements.",
            icon: ChartNoAxesCombined,
          },
        ],
    stats: isPT
      ? [
          { label: "Experiência", value: "4 anos" },
          { label: "Base principal", value: "Infra + Dev" },
          { label: "Modelo de atuação", value: "Operação e projeto" },
        ]
      : [
          { label: "Experience", value: "4 years" },
          { label: "Core base", value: "Infra + Dev" },
          { label: "Work style", value: "Operations and projects" },
        ],
  };

  const theoryCards = [
    {
      title: content.theory.languagesTitle,
      icon: Languages,
      values: content.theory.languages,
    },
    {
      title: content.theory.informaticsTitle,
      icon: MonitorCog,
      values: content.theory.informatics,
    },
    {
      title: content.theory.techCourseTitle,
      icon: GraduationCap,
      values: [content.theory.techCourse],
    },
    {
      title: content.theory.collegeTitle,
      icon: BriefcaseBusiness,
      values: [content.theory.college],
    },
  ];

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-6 md:px-8 md:pt-10">
      <motion.section
        id="perfil-profissional"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="theme-surface theme-spotlight theme-grid rounded-[2rem] border p-6 shadow-sm md:p-10"
      >
        <div className="relative flex flex-col gap-8">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] theme-surface-tint theme-accent-ring">
                <span className="theme-accent">{content.kicker}</span>
                <span className="theme-muted">{content.heroEyebrow}</span>
              </div>

              <div className="max-w-4xl">
                <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                  {content.title}
                </h1>
                <p className="theme-secondary mt-4 max-w-3xl text-base leading-8 md:text-xl">
                  {content.heroSummary}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {content.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="theme-surface-tint rounded-[1.4rem] border p-4"
                  >
                    <p className="theme-muted text-[0.7rem] uppercase tracking-[0.22em]">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-lg font-bold leading-tight">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="theme-divider h-px flex-1" />
                  <h2 className="text-sm font-semibold uppercase tracking-[0.24em] theme-muted">
                    {content.sectionTitle}
                  </h2>
                </div>
                <div className="space-y-5">
                  {content.paragraphs.map((text, index) => (
                    <p
                      key={`${lang}-paragraph-${index}`}
                      className="theme-secondary max-w-3xl text-base leading-8 md:text-lg"
                    >
                      {parseMarkdown(text)}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 self-start">
              <div className="theme-surface-strong rounded-[1.8rem] border p-6">
                <p className="theme-muted text-xs uppercase tracking-[0.24em]">
                  {content.strengthsTitle}
                </p>
                <div className="mt-5 space-y-3">
                  {content.strengths.map((strength) => {
                    const Icon = strength.icon;

                    return (
                      <div
                        key={strength.title}
                        className="theme-surface rounded-[1.35rem] border p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="theme-chip rounded-2xl p-3">
                            <Icon className="size-[18px]" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold">{strength.title}</h3>
                            <p className="theme-muted mt-1 text-sm leading-6">
                              {strength.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="theme-surface rounded-[1.75rem] border p-6 shadow-sm">
                <p className="theme-muted text-sm uppercase tracking-[0.22em]">
                  {content.venturesTitle}
                </p>
                <div className="mt-5 space-y-4">
                  {content.ventures.map((venture) => (
                    <a
                      key={venture.name}
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-surface-soft theme-surface-hover group block rounded-2xl border p-4 transition"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg font-semibold">{venture.name}</h3>
                        <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <p className="theme-muted mt-2 text-sm leading-6">{venture.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="experiencias-teoricas" className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="theme-divider h-px flex-1" />
          <h2 className="text-2xl font-bold md:text-3xl">{content.theoryTitle}</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {theoryCards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="theme-surface theme-spotlight rounded-[1.75rem] border p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="theme-chip rounded-2xl p-3">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                </div>
                <ul className="space-y-2">
                  {card.values.map((item) => (
                    <li key={item} className="theme-secondary leading-7">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="experiencias-profissionais" className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="theme-divider h-px flex-1" />
          <h2 className="text-2xl font-bold md:text-3xl">{content.experienceTitle}</h2>
        </div>

        <div className="relative ml-2 pl-6" style={{ borderLeft: "1px solid var(--border-color)" }}>
          {content.experiences.map((item, index) => (
            <motion.div
              key={`${item.role}-${item.period}`}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="relative pb-6 last:pb-0"
            >
              <div className="absolute -left-[2.05rem] top-6 size-4 rounded-full border-4 shadow-sm theme-surface-soft" />
              <div className="theme-surface theme-spotlight rounded-[1.75rem] border p-6 shadow-sm">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <span className="theme-muted text-sm font-medium uppercase tracking-[0.18em]">
                    {item.period}
                  </span>
                </div>
                <p className="theme-accent mt-3 text-sm font-semibold uppercase tracking-[0.18em]">
                  {item.company}
                </p>
                {item.highlight ? (
                  <p className="theme-secondary mt-3 leading-7">{item.highlight}</p>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="habilidades-tecnicas" className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="theme-divider h-px flex-1" />
          <h2 className="text-2xl font-bold md:text-3xl">{content.skillsTitle}</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {content.skills.map((section) => {
            const Icon = section.icon;

            return (
              <motion.div
                key={section.title}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="theme-surface theme-spotlight rounded-[1.75rem] border p-6 shadow-sm"
              >
                {Icon ? (
                  <div className="mb-4 flex items-center gap-3">
                    <div className="theme-chip rounded-2xl p-3">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{section.title}</h3>
                  </div>
                ) : (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">{section.title}</h3>
                  </div>
                )}
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="theme-secondary leading-7">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="theme-surface-strong rounded-[1.75rem] border p-7 shadow-sm">
          <p className="max-w-3xl text-lg leading-8">{content.closing}</p>
        </div>
      </motion.section>
    </main>
  );
}
