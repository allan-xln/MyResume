'use client';

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";
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

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`theme-surface theme-spotlight sticky top-0 z-30 mx-4 mt-4 flex flex-col items-center justify-between rounded-[1.6rem] border px-6 py-4 shadow-sm transition-transform duration-300 md:flex-row md:px-7 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col items-center gap-1.5 md:items-start">
        <p className="theme-muted text-[0.7rem] uppercase tracking-[0.28em]">
          Resume
        </p>
        <h1 className="text-2xl font-black tracking-tight">Allan da Silva Pereira</h1>
        <p className="theme-muted text-xs uppercase tracking-[0.24em]">IT • Infraestrutura • Web</p>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-3 md:mt-0 md:justify-end">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="theme-surface-soft theme-surface-hover rounded-full border px-3 py-1.5 text-sm font-medium transition-colors duration-200 md:text-base"
          >
            {section.label}
          </button>
        ))}

        <button
          onClick={toggleLang}
          className="theme-surface-soft theme-surface-hover inline-flex h-10 items-center gap-2 rounded-full border px-3 text-sm font-medium transition hover:scale-[1.02]"
          title={lang === "pt" ? "Change to English" : "Mudar para Português"}
        >
          <Languages className="size-4" />
          {lang === "pt" ? "EN" : "PT"}
        </button>

        <SwitchTheme />
      </div>
    </motion.header>
  );
}
