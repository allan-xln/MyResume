"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BriefcaseBusiness,
  Download,
  FolderKanban,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import { SwitchTheme } from "./SwitchTheme";
import { getPortfolioContent, type PortfolioLanguage } from "@/lib/portfolio-data";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const lang: PortfolioLanguage = pathname.startsWith("/en") ? "en" : "pt";
  const content = getPortfolioContent(lang);
  const otherLanguage = lang === "pt" ? "en" : "pt";
  const resumePath = lang === "pt" ? "/curriculo.pdf" : "/resume.pdf";

  const links = [
    { href: "#about", label: content.nav.about, icon: UserRound },
    { href: "#work", label: content.nav.work, icon: FolderKanban },
    { href: "#experience", label: content.nav.experience, icon: BriefcaseBusiness },
    { href: "#capabilities", label: content.nav.capabilities, icon: Layers3 },
    { href: "#education", label: content.nav.education, icon: GraduationCap },
    { href: "#contact", label: content.nav.contact, icon: Mail },
  ];

  const navigation = (
    <>
      {links.map(({ href, label, icon: Icon }) => (
        <a href={href} key={href} onClick={() => setIsOpen(false)}>
          <Icon size={16} strokeWidth={1.6} aria-hidden="true" />
          <span>{label}</span>
        </a>
      ))}
    </>
  );

  return (
    <header className="site-header">
      <div className="desktop-rail">
        <Link href={`/${lang}`} className="monogram" aria-label="Allan Pereira — home">
          AP<span aria-hidden="true" />
        </Link>

        <nav aria-label={lang === "pt" ? "Navegação principal" : "Primary navigation"}>
          {navigation}
        </nav>

        <div className="rail-actions">
          <a href={resumePath} download aria-label={content.actions.resume} title={content.actions.resume}>
            <Download size={16} strokeWidth={1.6} aria-hidden="true" />
            <span>CV</span>
          </a>
          <Link href={`/${otherLanguage}`} aria-label={content.actions.switchLanguage}>
            {otherLanguage.toUpperCase()}
          </Link>
          <SwitchTheme lang={lang} />
        </div>
      </div>

      <div className="mobile-bar">
        <Link href={`/${lang}`} className="monogram" aria-label="Allan Pereira — home">
          AP<span aria-hidden="true" />
        </Link>
        <p>Allan Pereira</p>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? (lang === "pt" ? "Fechar menu" : "Close menu") : (lang === "pt" ? "Abrir menu" : "Open menu")}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>
      </div>

      <div
        className={isOpen ? "mobile-panel mobile-panel--open" : "mobile-panel"}
        id="mobile-navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <nav aria-label={lang === "pt" ? "Navegação móvel" : "Mobile navigation"}>
          {navigation}
        </nav>
        <div className="mobile-panel__actions">
          <a href={resumePath} download>
            <Download size={15} aria-hidden="true" />
            CV
          </a>
          <Link href={`/${otherLanguage}`}>{otherLanguage.toUpperCase()}</Link>
          <SwitchTheme lang={lang} />
        </div>
      </div>
    </header>
  );
}
