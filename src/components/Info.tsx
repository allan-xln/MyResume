'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Mail, Github, Globe } from 'lucide-react';

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
  };

  return (
    <>
      {/* Botão hamburguer para mobile, só aparece quando sidebar fechado */}
      {!isOpen && (
        <button
  onClick={() => setIsOpen(true)}
  className="fixed top-4 left-4 z-50 md:hidden bg-zinc-800 p-2 rounded text-white shadow-md"
  aria-label={isEnglish ? 'Open menu' : 'Abrir menu'}
>
  <Menu size={24} />
</button>

      )}

      {/* Overlay semi-transparente atrás do sidebar no mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-72 bg-zinc-900 p-6 text-sm md:text-base text-zinc-100
          z-50 flex flex-col transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:sticky md:transform-none
        `}
        role="complementary"
        aria-label={personalInfoLabels.title}
      >
        {/* Botão fechar sidebar (mobile) */}
        <div className="flex justify-end md:hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="text-zinc-400 hover:text-white mb-4"
            aria-label={isEnglish ? 'Close menu' : 'Fechar menu'}
          >
            <X size={24} />
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-6 border-b border-zinc-700 pb-2">
          {personalInfoLabels.title}
        </h2>

        <ul className="space-y-3 flex-1">
          <li>
            <strong>{personalInfoLabels.age}:</strong> 21
          </li>
          <li>
            <strong>{personalInfoLabels.birth}:</strong> 23/01/2004
          </li>
          <li>
            <strong>{personalInfoLabels.location}:</strong> São José dos Pinhais
          </li>
          <li>
            <strong>{personalInfoLabels.contact}:</strong>{' '}
            <span className="text-zinc-400">41 98447-6869</span>
          </li>

          <li className="flex flex-wrap items-center gap-x-1.5">
            <Mail size={16} className="text-zinc-400" />
            <strong className="min-w-[60px]">{personalInfoLabels.email}:</strong>
            <span className="text-zinc-400 break-all overflow-hidden">
              allansilvapereirae@gmail.com
            </span>
          </li>

          <li className="flex flex-wrap items-center gap-x-1.5">
            <Github size={16} className="text-zinc-400" />
            <strong className="min-w-[60px]">{personalInfoLabels.github}:</strong>
            <a
              href="https://github.com/allan-xln"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline break-all"
            >
              github.com/allan-xln
            </a>
          </li>

          <li className="flex flex-wrap items-center gap-x-1.5">
            <Globe size={16} className="text-zinc-400" />
            <strong className="min-w-[60px]">{personalInfoLabels.english}:</strong>
            <span className="text-zinc-400">{personalInfoLabels.englishLevel}</span>
          </li>
        </ul>
      </aside>
    </>
  );
}
