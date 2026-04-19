'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, Mail, Github, Globe, Download, MapPin, Phone } from 'lucide-react';
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
  const ageLabel = getAgeLabel(lang);

  const personalInfoLabels = {
    title: isEnglish ? 'Personal Info' : 'Informações Pessoais',
    age: isEnglish ? 'Age' : 'Idade',
    birth: isEnglish ? 'Birth' : 'Nascimento',
    location: isEnglish ? 'Location' : 'Moro em',
    contact: isEnglish ? 'Contact' : 'Contato',
    email: 'Email',
    github: 'GitHub',
    onlineResume: isEnglish ? 'Online Resume' : 'Currículo online',
    english: 'English',
    englishLevel: isEnglish
      ? 'Intermediate (in progress)'
      : 'Intermediário (em desenvolvimento)',
    downloadCV: isEnglish ? 'Download Resume (PDF)' : 'Baixar Currículo (PDF)',
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="theme-surface fixed left-4 top-4 z-50 rounded-2xl border p-2.5 shadow-sm md:hidden"
          aria-label={isEnglish ? 'Open menu' : 'Abrir menu'}
        >
          <Menu size={24} />
        </button>
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
          fixed top-0 left-0 z-50 flex h-screen w-80 flex-col p-4 text-sm transition-transform duration-300 ease-in-out md:sticky md:top-0 md:h-screen md:text-base
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:transform-none
        `}
        role="complementary"
        aria-label={personalInfoLabels.title}
      >
        <div className="theme-surface theme-spotlight flex h-full flex-col overflow-hidden rounded-[2rem] border px-6 py-6 shadow-sm">
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
              IT • Infra • Web
            </p>
            <p className="theme-muted mt-3 text-sm leading-6">
              {isEnglish
                ? 'Hands-on IT professional focused on infrastructure, automation, and delivery.'
                : 'Profissional de TI com foco prático em infraestrutura, automação e entrega.'}
            </p>
          </div>

          <ul className="flex-1 space-y-3">
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
              <div className="min-w-0">
                <strong className="block">{personalInfoLabels.onlineResume}</strong>
                <a
                  href="https://meetallan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-muted break-all transition hover:opacity-100"
                >
                  {PERSONAL_INFO.onlineResume}
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

          <a
            href="/curriculo.pdf"
            download
            className="theme-surface-strong theme-surface-hover mt-6 inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 font-semibold transition"
          >
            <Download size={18} />
            {personalInfoLabels.downloadCV}
          </a>
        </div>
      </motion.aside>
    </>
  );
}
