'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function SwitchTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const preferred =
      stored ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    setTheme(preferred);
    document.documentElement.setAttribute('data-theme', preferred);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-surface theme-surface-hover flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-105"
      title="Trocar tema"
      aria-label="Trocar tema"
    >
      {theme === 'light' ? (
        <Sun size={20} className="theme-accent" />
      ) : (
        <Moon size={20} className="theme-accent" />
      )}
    </button>
  );
}
