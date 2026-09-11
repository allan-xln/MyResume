"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Header } from "./Header";
import { IntroLoader } from "./IntroLoader";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en-US" : "pt-BR";
  }, [isEnglish]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {isEnglish ? "Skip to content" : "Pular para o conteúdo"}
      </a>
      <IntroLoader />
      <Header />
      {children}
    </>
  );
}
