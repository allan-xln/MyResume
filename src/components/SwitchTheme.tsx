"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import type { PortfolioLanguage } from "@/lib/portfolio-data";

type Theme = "light" | "dark";

export function SwitchTheme({ lang }: { lang: PortfolioLanguage }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme") as Theme | null;
    setTheme(currentTheme === "light" ? "light" : "dark");
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("meetallan-theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }

  const label =
    lang === "pt"
      ? theme === "dark"
        ? "Usar tema claro"
        : "Usar tema escuro"
      : theme === "dark"
        ? "Use light theme"
        : "Use dark theme";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {theme === "dark" ? (
        <Sun size={16} strokeWidth={1.7} aria-hidden="true" />
      ) : (
        <Moon size={16} strokeWidth={1.7} aria-hidden="true" />
      )}
    </button>
  );
}
