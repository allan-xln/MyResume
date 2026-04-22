'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, X, Mail, Github, Globe, Download, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO, getAgeLabel } from '@/lib/resume-data';

export function Info({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}) {
  const pathname = usePathname();
  const lang = pathname.startsWith('/en') ? 'en' : 'pt';
  const isEnglish = lang === 'en';
  const [ageLabel, setAgeLabel] = React.useState(lang === 'en' ? '21 years old' : '21 anos');
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const [hasMoreBelow, setHasMoreBelow] = React.useState(false);

  React.useEffect(() => {
    setAgeLabel(getAgeLabel(lang));
  }, [lang]);

  React.useEffect(() => {
    const element = scrollRef.current;

    if (!element) return;

    const updateScrollState = () => {
      const canScroll = element.scrollHeight > element.clientHeight + 8;
      const atBottom =
        element.scrollTop + element.clientHeight >= element.scrollHeight - 8;

      setHasMoreBelow(canScroll && !atBottom);
    };

    updateScrollState();
    element.addEventListener('scroll', updateScrollState, { passive: true });

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(element);

    window.addEventListener('resize', updateScrollState);

    return () => {
      element.removeEventListener('scroll', updateScrollState);
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateScrollState);
    };
  }, [isOpen, lang]);

  const personalInfoLabels = {
    title: isEnglish ? 'Personal Info' : 'Informações Pessoais',
    age: isEnglish ? 'Age' : 'Idade',
    birth: isEnglish ? 'Birth' : 'Nascimento',
    location: isEnglish ? 'Location' : 'Moro em',
    contact: isEnglish ? 'Contact' : 'Contato',
    email: 'Email',
    github: 'GitHub',
    english: 'English',
    englishLevel: isEnglish
      ? 'Intermediate (in progress)'
      : 'Intermediário (em desenvolvimento)',
    downloadCV: isEnglish ? 'Download Resume (PDF)' : 'Baixar Currículo (PDF)',
  };

  return (
    <>
      {!isOpen && (
        <>
          <button
            onClick={() => setIsOpen(true)}
            className="theme-surface fixed left-4 top-4 z-50 rounded-2xl border p-2.5 shadow-sm md:hidden"
            aria-label={isEnglish ? 'Open menu' : 'Abrir menu'}
          >
            <Menu size={24} />
          </button>

          <a
            href="/curriculo.pdf"
            download
            className="theme-surface-strong theme-surface-hover fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full border px-4 py-3 font-semibold shadow-sm transition md:hidden"
            aria-label={personalInfoLabels.downloadCV}
          >
            <Download size={18} />
            <span className="text-sm">{isEnglish ? 'PDF' : 'Baixar PDF'}</span>
          </a>
        </>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <motion.aside
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={`
          fixed inset-0 z-50 flex h-dvh w-dvw flex-col p-0 text-sm transition-transform duration-300 ease-in-out md:sticky md:top-0 md:h-screen md:w-80 md:flex-none md:self-start md:p-4 md:text-base
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:transform-none
        `}
        role="complementary"
        aria-label={personalInfoLabels.title}
      >
        <div
          ref={scrollRef}
          className="theme-surface theme-spotlight sidebar-scrollbar relative flex h-full min-h-0 flex-col overflow-x-hidden !overflow-y-auto overscroll-contain rounded-none border-0 px-6 py-6 shadow-none touch-pan-y [-webkit-overflow-scrolling:touch] md:rounded-[2rem] md:border md:shadow-sm"
        >
          <div className="flex justify-end md:hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="theme-muted mb-4 hover:opacity-100"
              aria-label={isEnglish ? 'Close menu' : 'Fechar menu'}
            >
              <X size={24} />
            </button>
          </div>

          <div className="mb-8">
            <p className="theme-muted text-xs font-semibold uppercase tracking-[0.26em]">
              {personalInfoLabels.title}
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight">{PERSONAL_INFO.shortName}</h2>
            <p className="theme-accent mt-1 text-xs font-semibold uppercase tracking-[0.22em]">
              IT • Infra • Dev
            </p>
            <p className="theme-muted mt-3 text-sm leading-6">
              {isEnglish
                ? 'Hands-on IT professional focused on infrastructure, automation, and delivery.'
                : 'Profissional de TI com foco prático em infraestrutura, automação e entrega.'}
            </p>
          </div>

          <div className="theme-surface mb-6 hidden rounded-[1.6rem] border p-3 md:block">
            <a
              href="/curriculo.pdf"
              download
              className="theme-surface-strong theme-surface-hover inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-4 py-3 font-semibold transition"
            >
              <Download size={18} />
              {personalInfoLabels.downloadCV}
            </a>
          </div>

          <ul className="flex-1 space-y-3 pb-1">
            <li className="theme-surface-soft rounded-2xl border p-4">
              <strong>{personalInfoLabels.age}:</strong> {ageLabel}
            </li>
            <li className="theme-surface-soft rounded-2xl border p-4">
              <strong>{personalInfoLabels.birth}:</strong> {PERSONAL_INFO.birthDateLabel}
            </li>
            <li className="theme-surface-soft flex items-center gap-3 rounded-2xl border p-4">
              <MapPin size={18} className="theme-muted" />
              <div>
                <strong className="block">{personalInfoLabels.location}</strong>
                <span className="theme-muted">{PERSONAL_INFO.location.replace(' - PR', '')}</span>
              </div>
            </li>
            <li className="theme-surface-soft flex items-center gap-3 rounded-2xl border p-4">
              <Phone size={18} className="theme-muted" />
              <div>
                <strong className="block">{personalInfoLabels.contact}</strong>
                <span className="theme-muted">{PERSONAL_INFO.phone}</span>
              </div>
            </li>
            <li className="theme-surface-soft flex items-center gap-3 rounded-2xl border p-4">
              <Mail size={18} className="theme-muted" />
              <div className="min-w-0">
                <strong className="block">{personalInfoLabels.email}</strong>
                <span className="theme-muted break-all">{PERSONAL_INFO.email}</span>
              </div>
            </li>
            <li className="theme-surface-soft flex items-center gap-3 rounded-2xl border p-4">
              <Github size={18} className="theme-muted" />
              <div className="min-w-0">
                <strong className="block">{personalInfoLabels.github}</strong>
                <a
                  href="https://github.com/allan-xln"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-muted break-all transition hover:opacity-100"
                >
                  {PERSONAL_INFO.github}
                </a>
              </div>
            </li>
            <li className="theme-surface-soft flex items-center gap-3 rounded-2xl border p-4">
              <Globe size={18} className="theme-muted" />
              <div>
                <strong className="block">{personalInfoLabels.english}</strong>
                <span className="theme-muted">{personalInfoLabels.englishLevel}</span>
              </div>
            </li>
          </ul>

          <div className="theme-surface mt-6 rounded-[1.6rem] border p-3 md:hidden">
            <a
              href="/curriculo.pdf"
              download
              className="theme-surface-strong theme-surface-hover inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-4 py-3 font-semibold transition"
            >
              <Download size={18} />
              {personalInfoLabels.downloadCV}
            </a>
          </div>

          {hasMoreBelow && (
            <button
              type="button"
              onClick={() =>
                scrollRef.current?.scrollBy({
                  top: 180,
                  behavior: 'smooth',
                })
              }
              className="theme-surface-strong theme-border-strong sticky bottom-3 left-1/2 z-10 mt-4 inline-flex w-fit -translate-x-1/2 items-center gap-2 self-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] shadow-sm"
              aria-label={isEnglish ? 'Scroll down for more information' : 'Descer para ver mais informações'}
            >
              <span>{isEnglish ? 'More' : 'Ver mais'}</span>
              <ChevronDown size={16} className="animate-bounce" />
            </button>
          )}
        </div>
      </motion.aside>
    </>
  );
}
