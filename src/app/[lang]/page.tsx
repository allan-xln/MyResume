import { use } from "react";

import React from "react";

// Função que transforma **texto** em <strong>texto</strong>
function parseMarkdown(text: string | React.ReactNode): React.ReactNode {
  if (typeof text !== "string") return text;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

export default function Page({ params }: { params: Promise<{ lang: "pt" | "en" }> }) {
  const { lang } = use(params);
  const isPT = lang === "pt";

  const content = {
    title: "Allan da Silva Pereira",
    sectionTitle: isPT ? "Perfil Profissional" : "Professional Profile",
    paragraphs: isPT
      ? [
      `Atuo há **4 anos na área de Tecnologia da Informação**, com experiência voltada para infraestrutura, automações, desenvolvimento web e implementação de soluções corporativas.`,
      `Sou movido por desafios e motivado a transformar problemas do dia a dia em soluções práticas e eficientes, sempre buscando otimizar processos e agregar valor às operações.`,
      `Na **Cotrasa - Scania**, onde estive de **2021 a 2024**, iniciei como jovem aprendiz e, posteriormente, fui promovido ao cargo de analista de TI. Durante esse período, participei da estruturação de processos, conduzi melhorias internas e colaborei diretamente com áreas estratégicas da empresa. Também fui responsável por apoiar a implantação do sistema **Senior**, conduzindo a parte técnica, testes de integração e capacitação dos usuários. Além disso, desenvolvi **projetos de automação** voltados à busca e consolidação de dados para alimentar dashboards, soluções que depois também apliquei em projetos posteriores.`,
      `Hoje, presto serviços como **profissional PJ** na área de TI da **Jadimo Transportes**, sendo responsável por toda a estrutura de TI da empresa — desde infraestrutura de rede, suporte técnico e segurança da informação até o desenvolvimento de soluções sob medida. Atualmente, também lidero a área com o apoio de **dois aprendizes**, coordenando as atividades e contribuindo para sua formação prática.`,
      `Além das atividades regulares, já atuei em **projetos extraordinários de infraestrutura** para outras empresas, conduzindo a implementação completa de ambientes de TI, desde a montagem e configuração de racks e equipamentos, como RouterBoard, até a passagem de patch cords e entrega final do ambiente, com toda a estrutura documentada e funcional.`,
      `Paralelamente, também desenvolvi alguns sites, incluindo projetos pessoais voltados à criação dos meus próprios negócios. Entre eles, destacam-se:`,
      <>
        <strong>LamtecIT</strong> (
        <a
          href="https://lamtecit.com.br"
          className="text-blue-600 dark:text-blue-400 underline"
          target="_blank"
        >
          lamtecit.com.br
        </a>
        ) — voltada ao suporte técnico, automações e soluções de tecnologia para pequenas e médias empresas.
      </>,
      <>
        <strong>LamFuture</strong> (
        <a
          href="https://lamfuture.com"
          className="text-blue-600 dark:text-blue-400 underline"
          target="_blank"
        >
          lamfuture.com
        </a>
        ) — projeto em fase inicial, com foco em ferramentas digitais, inovação e inteligência artificial aplicada ao cotidiano.
      </>,
      `Ambas as iniciativas vêm sendo desenvolvidas gradualmente, com o objetivo de consolidar soluções tecnológicas acessíveis, inteligentes e adaptadas às necessidades do mercado.`,
    ]

      : [
  `I've been working for **4 years in the Information Technology field**, with experience focused on infrastructure, automation, web development, and corporate solutions.`,
  `I'm driven by challenges and motivated to turn everyday problems into practical and efficient solutions, always seeking to optimize processes and add value to operations.`,
  `At **Cotrasa - Scania**, where I worked from **2021 to 2024**, I started as a young apprentice and was later promoted to IT Analyst. During that time, I helped structure internal processes, implemented improvements, and collaborated with strategic departments. I also supported the implementation of the **Senior** system, handling the technical setup, integration testing, and user training. Additionally, I developed **automation projects** that fetched and consolidated data for dashboards — solutions I later applied to other projects as well.`,
  `Currently, I work as a **freelancer** (PJ) in the IT department at **Jadimo Transportes**, where I'm responsible for the entire IT infrastructure — including networking, technical support, information security, and custom solution development. I also lead the IT team with the support of **two apprentices**, guiding their practical learning and managing daily operations.`,
  `In addition to regular activities, I have also worked on **extraordinary infrastructure projects** for other companies, leading the full setup of IT environments — from assembling and configuring racks and equipment such as RouterBoards to running patch cords and delivering a fully documented, functional infrastructure.`,
  `In parallel, I also developed a few websites, including personal projects aimed at building my own businesses. Among them are:`,
  <>
    <strong>LamtecIT</strong> (
    <a
      href="https://lamtecit.com.br"
      className="text-blue-600 dark:text-blue-400 underline"
      target="_blank"
    >
      lamtecit.com.br
    </a>
    ) — focused on technical support, automation, and technology solutions for small and medium-sized businesses.
  </>,
  <>
    <strong>LamFuture</strong> (
    <a
      href="https://lamfuture.com"
      className="text-blue-600 dark:text-blue-400 underline"
      target="_blank"
    >
      lamfuture.com
    </a>
    ) — an early-stage project focused on digital tools, innovation, and AI applied to daily life.
  </>,
  `Both initiatives are being developed gradually, aiming to consolidate accessible, smart, and market-adapted tech solutions.`,
],

    theoryTitle: isPT ? "Experiências Teóricas" : "Theoretical Experience",
    theory: {
      languagesTitle: isPT ? "Idiomas" : "Languages",
      languages: ["Inglês básico", "Inglês intermediário"],
      informaticsTitle: isPT ? "Informática" : "IT Skills",
      informatics: [
        isPT ? "Informática básica" : "Basic IT",
        isPT ? "Informática intermediária" : "Intermediate IT",
        isPT ? "Informática avançada" : "Advanced IT",
      ],
      techCourseTitle: isPT ? "Curso Técnico" : "Technical Course",
      techCourse: isPT
        ? "Técnico em Desenvolvimento de Sistemas"
        : "Systems Development Technician",
      collegeTitle: isPT ? "Ensino Superior" : "Higher Education",
      college:
        "Faculdade de Engenharia de Software (em andamento)",
    },
  };

  return (
    <>

   
    <main className="flex-1 p-8 flex flex-col justify-center items-center text-left max-w-6xl w-full mx-auto">
  <section id="perfil-profissional" className="space-y-6">
    <h1
      key={lang}
      className="text-3xl md:text-4xl font-bold mb-6 text-center"
    >
      {content.title}
    </h1>


    <h2
  key={`sectionTitle-${lang}`} // <-- forçando re-render
  className="text-2xl font-semibold border-b pb-1 border-zinc-300 dark:border-zinc-700"
>
  {content.sectionTitle}
</h2>

{content.paragraphs.map((text, i) => (
  <p
    key={`paragraph-${lang}-${i}`} // <-- chave única baseada no idioma
    className="text-lg leading-relaxed"
  >
    {parseMarkdown(text)}
  </p>
))}
  </section>

      <section
  id="experiencias-teoricas"
  className="mt-16 w-full"
>
  <h2 className="text-2xl font-semibold border-b pb-1 border-zinc-300 dark:border-zinc-700 mb-6">
    {content.theoryTitle}
  </h2>

  <div className="grid md:grid-cols-2 gap-6 text-base">
    {/* Idiomas */}
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-5 shadow">
      <h3 className="font-semibold text-lg mb-2 text-zinc-800 dark:text-zinc-100">
        {content.theory.languagesTitle}
      </h3>
      <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1">
        {content.theory.languages.map((lang, idx) => (
          <li key={idx}>{lang}</li>
        ))}
      </ul>
    </div>

    {/* Informática */}
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-5 shadow">
      <h3 className="font-semibold text-lg mb-2 text-zinc-800 dark:text-zinc-100">
        {content.theory.informaticsTitle}
      </h3>
      <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1">
        {content.theory.informatics.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>

    {/* Curso Técnico */}
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-5 shadow">
      <h3 className="font-semibold text-lg mb-2 text-zinc-800 dark:text-zinc-100">
        {content.theory.techCourseTitle}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-300">
        {content.theory.techCourse}
      </p>
    </div>

    {/* Ensino Superior */}
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-5 shadow">
      <h3 className="font-semibold text-lg mb-2 text-zinc-800 dark:text-zinc-100">
        {content.theory.collegeTitle}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-300">
        {content.theory.college}
      </p>
    </div>
  </div>
</section>


  <section id="experiencias-profissionais" className="mt-16 w-full">
  <h2 className="text-2xl font-semibold border-b pb-1 border-zinc-300 dark:border-zinc-700 mb-10">
    {isPT ? "Experiências Profissionais" : "Professional Experience"}
  </h2>

  <div className="relative border-l-2 border-zinc-400 pl-6 space-y-10 transition-colors duration-300">
    {[
      {
        cargo: isPT ? "Aprendiz de RH" : "HR Apprentice",
        empresa: "Cotrasa Scania",
        periodo: "2021",
      },
      {
        cargo: isPT ? "Auxiliar de Vendas de Serviços" : "Service Sales Assistant",
        empresa: "Cotrasa Scania",
        periodo: "2021",
      },
      {
        cargo: isPT ? "Auxiliar de TI" : "IT Assistant",
        empresa: "Cotrasa Scania",
        periodo: "2022",
      },
      {
        cargo: isPT ? "Assistente de TI" : "IT Associate",
        empresa: "Cotrasa Scania",
        periodo: "2023",
      },
      {
        cargo: isPT ? "Analista de TI" : "IT Analyst",
        empresa: "Cotrasa Scania",
        periodo: "2024",
      },
      {
        cargo: isPT ? "Analista e responsável de TI" : "Lead IT Analyst",
        empresa: "Jadimo Transportes",
        periodo: isPT ? "2024 - atual" : "2024 - Present",
        destaque: isPT
          ? "Atualmente lidero a TI com dois aprendizes sob minha supervisão."
          : "Currently leading the IT team with two apprentices under my supervision.",
      },
    ].map((item, idx) => (
      <div key={idx} className="relative group">
        <div className="absolute -left-[1.06rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full 
          bg-zinc-400 border-2 border-zinc-400 
          shadow-md transition-all duration-300 group-hover:scale-110" />

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-lg p-5 transition duration-300 hover:shadow-xl">
          <h3 className="text-lg md:text-xl font-semibold text-zinc-800 dark:text-white mb-1">
            {item.cargo}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium mb-2">
            {item.empresa} • {item.periodo}
          </p>
          {item.destaque && (
            <p className="text-zinc-700 dark:text-zinc-300">{item.destaque}</p>
          )}
        </div>
      </div>
    ))}
  </div>
</section>

<h2
  id="habilidades-tecnicas"
  className="text-2xl font-semibold border-b pb-1 border-zinc-300 dark:border-zinc-700 mt-10"
>
  {isPT ? "Habilidades Técnicas" : "Technical Skills"}
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-base">
  {[
    {
      title: isPT ? "Infraestrutura" : "Infrastructure",
      items: [
        "RouterBoard, Mikrotik",
        "Firewall (pfSense, OPNsense)",
        "Racks, cabeamento, switches",
        "Pontos de rede, patch panels",
        isPT ? "Instalação e configuração de redes" : "Network installation and configuration",
        isPT ? "Monitoramento com Zabbix, Grafana" : "Monitoring with Zabbix, Grafana",
        isPT ? "Helpdesk com GLPI" : "Helpdesk with GLPI",
      ],
    },
    {
      title: isPT ? "Desenvolvimento" : "Development",
      items: [
        "JavaScript, TypeScript",
        "React, Vite, Next.js",
        "Python, Selenium, PyAutoGUI",
        "Tailwind CSS, CSS3",
        isPT ? "Automação de tarefas e scripts" : "Task and script automation",
        isPT ? "Integração com APIs" : "API integration",
      ],
    },
    {
      title: isPT ? "Outros conhecimentos" : "Other Knowledge",
      items: [
        isPT ? "Power BI, pacote Office completo" : "Power BI, full Office suite",
        isPT ? "Design visual, UX/UI" : "Visual design, UX/UI",
        isPT ? "Edição de vídeos e imagens" : "Video and image editing",
        isPT
          ? "Conhecimento interpessoal e intrapessoal"
          : "Interpersonal and intrapersonal skills",
        isPT
          ? "Boa comunicação e leitura de pessoas"
          : "Good communication and people reading",
      ],
    },
  ].map((section, idx) => (
    <div
      key={idx}
      className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-md p-6"
    >
      <h3 className="font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
        {section.title}
      </h3>
      <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-1">
        {section.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

<p className="text-lg mt-8 leading-relaxed">
  {isPT ? (
    <>
      Atualmente, busco <strong>novos desafios</strong> onde eu possa crescer,
      contribuir e estar em constante evolução. Não gosto de estagnação, prefiro
      ambientes que incentivam aprendizado, colaboração e inovação.
    </>
  ) : (
    <>
      I'm currently seeking <strong>new challenges</strong> where I can grow,
      contribute, and keep evolving. I dislike stagnation — I prefer environments
      that foster learning, collaboration, and innovation.
    </>
  )}
</p>

</main>
</>
);
}
