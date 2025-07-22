'use client';

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { SwitchTheme } from "./SwitchTheme";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const lang = pathname.startsWith('/en') ? 'en' : 'pt';

  const toggleLang = () => {
    const newLang = lang === "pt" ? "en" : "pt";
    router.push(`/${newLang}`);
  };

  const sections = [
    { id: "perfil-profissional", label: lang === "pt" ? "Perfil" : "Profile" },
    { id: "experiencias-teoricas", label: lang === "pt" ? "Teoria" : "Theory" },
    { id: "experiencias-profissionais", label: lang === "pt" ? "Experiência" : "Experience" },
    { id: "habilidades-tecnicas", label: lang === "pt" ? "Habilidades" : "Skills" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Scroll control
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false); // Scroll para baixo -> esconde
      } else {
        setShowHeader(true); // Scroll para cima -> mostra
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`flex flex-col md:flex-row items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-zinc-900 sticky top-0 z-30 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <h1 className="text-2xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-100">
        Allan da Silva Pereira
      </h1>

      <div className="flex flex-wrap items-center gap-3 mt-3 md:mt-0">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="text-sm md:text-base px-3 py-1.5 rounded-full border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
          >
            {section.label}
          </button>
        ))}

        <button
          onClick={toggleLang}
          className="text-xl hover:scale-110 transition-transform"
          title={lang === "pt" ? "Change to English" : "Mudar para Português"}
        >
          {lang === "pt" ? "🇧🇷" : "🇺🇸"}
        </button>

        <SwitchTheme />
      </div>
    </header>
  );
}
