import { ArrowDownRight, ArrowUpRight, Download, Github, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import {
  getPortfolioContent,
  type PortfolioLanguage,
  type Project,
} from "@/lib/portfolio-data";

const EMAIL = "allansilvapereirae@gmail.com";
const GITHUB_URL = "https://github.com/allan-xln";

function SectionIntro({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        <p>{intro}</p>
      </div>
    </div>
  );
}

function ProjectItem({
  project,
  roleLabel,
  index,
}: {
  project: Project;
  roleLabel: string;
  index: number;
}) {
  return (
    <article className="project">
      <span className="project__index">0{index + 1}</span>
      <div className="project__identity">
        <p>{project.category}</p>
        <h3>{project.name}</h3>
        <span>{project.status}</span>
      </div>
      <div className="project__copy">
        <p className="project__description">{project.description}</p>
        <div>
          <span>{roleLabel}</span>
          <p>{project.role}</p>
        </div>
      </div>
      <div className="project__evidence">
        <ul>
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="project__stack" aria-label="Technology stack">
        {project.stack.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
    </article>
  );
}

export function ResumePage({ lang }: { lang: PortfolioLanguage }) {
  const content = getPortfolioContent(lang);
  const isPortuguese = lang === "pt";
  const resumePath = isPortuguese ? "/curriculo.pdf" : "/resume.pdf";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Allan da Silva Pereira",
    alternateName: "Allan Pereira",
    url: "https://meetallan.com",
    email: `mailto:${EMAIL}`,
    homeLocation: {
      "@type": "Place",
      name: "São José dos Pinhais, Paraná, Brazil",
    },
    sameAs: [GITHUB_URL, "https://lanfuture.dev"],
    jobTitle: "Software Engineer",
    knowsAbout: [
      "Artificial Intelligence",
      "Software Engineering",
      "Automation",
      "Infrastructure",
      "Computer Networks",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main id="main-content">
        <section className="hero" id="about" aria-labelledby="hero-title">
          <div className="hero__frame">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <div className="hero__identity">
              <h1 id="hero-title">
                <span>Allan</span>
                <span>Pereira</span>
              </h1>
              <div className="hero__role">
                <p>{content.hero.role}</p>
                <strong>{content.hero.focus}</strong>
              </div>
            </div>
            <div className="hero__summary">
              <p>{content.hero.summary}</p>
              <span>{content.hero.location}</span>
            </div>
            <div className="hero__actions">
              <a href="#work">
                {content.actions.work}
                <ArrowDownRight size={17} aria-hidden="true" />
              </a>
              <a href={resumePath} download>
                {content.actions.resume}
                <Download size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="section section--work" id="work">
          <Reveal>
            <SectionIntro
              eyebrow={content.work.eyebrow}
              title={content.work.title}
              intro={content.work.intro}
            />
          </Reveal>
          <div className="projects-grid">
            {content.work.projects.map((project, index) => (
              <ProjectItem
                key={project.name}
                project={project}
                roleLabel={content.work.role}
                index={index}
              />
            ))}
          </div>
        </section>

        <section className="section section--index" aria-labelledby="engineering-index-title">
          <Reveal>
            <div className="section-intro">
              <p className="eyebrow">{content.work.indexEyebrow}</p>
              <div>
                <h2 id="engineering-index-title">{content.work.indexTitle}</h2>
                <p>{content.work.indexIntro}</p>
              </div>
            </div>
          </Reveal>
          <div className="engineering-index">
            {content.work.index.map((item, index) => (
              <details className="engineering-entry" key={item.name}>
                <summary>
                  <span className="engineering-entry__index">0{index + 1}</span>
                  <strong>{item.name}</strong>
                  <span>{item.category}</span>
                  <span>{item.stack}</span>
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{item.description}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section section--experience" id="experience">
          <Reveal>
            <SectionIntro
              eyebrow={content.experience.eyebrow}
              title={content.experience.title}
              intro={content.experience.intro}
            />
          </Reveal>
          <div className="experience-list">
            {content.experience.items.map((item) => (
              <article className="experience-row" key={`${item.company}-${item.period}`}>
                <p className="experience-row__period">{item.period}</p>
                <div className="experience-row__identity">
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <ul>
                  {item.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--capabilities" id="capabilities">
          <Reveal>
            <SectionIntro
              eyebrow={content.capabilities.eyebrow}
              title={content.capabilities.title}
              intro={content.capabilities.intro}
            />
          </Reveal>

          <div className="capability-group">
            <p className="capability-group__label">{content.capabilities.coreLabel}</p>
            <div className="core-grid">
              {content.capabilities.core.map((capability) => (
                <article className="core-capability" key={capability.title}>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <div>
                    {capability.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="capability-group capability-group--foundation">
            <p className="capability-group__label">{content.capabilities.foundationLabel}</p>
            <div className="foundation-list">
              {content.capabilities.foundation.map((capability) => (
                <article className="foundation-capability" key={capability.title}>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <div>
                    {capability.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--closing">
          <div className="education" id="education">
            <Reveal>
              <p className="eyebrow">{content.education.eyebrow}</p>
              <h2>{content.education.title}</h2>
            </Reveal>
            <div className="education-list">
              {content.education.items.map((item) => (
                <div className="education-item" key={item.label}>
                  <span>{item.label}</span>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="contact" id="contact">
            <Reveal>
              <p className="eyebrow">{content.contact.eyebrow}</p>
              <h2>{content.contact.title}</h2>
              <p className="contact__text">{content.contact.text}</p>
            </Reveal>
            <a className="contact__email" href={`mailto:${EMAIL}`}>
              <span>{EMAIL}</span>
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
            <div className="contact__actions">
              <a href={`mailto:${EMAIL}`}>
                <Mail size={15} aria-hidden="true" />
                {content.actions.email}
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                <Github size={15} aria-hidden="true" />
                {content.actions.source}
              </a>
              <a href={resumePath} download>
                <Download size={15} aria-hidden="true" />
                CV
              </a>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Allan Pereira</p>
          <p>{content.contact.location}</p>
          <p>{content.contact.rights}</p>
        </footer>
      </main>
    </>
  );
}
