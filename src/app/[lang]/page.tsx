import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResumePage } from "@/components/ResumePage";
import type { PortfolioLanguage } from "@/lib/portfolio-data";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const languageMetadata = {
  pt: {
    title: "Software, IA e Infraestrutura",
    description:
      "Portfólio de Allan Pereira: sistemas de IA, automação, software e infraestrutura construídos para operações reais.",
  },
  en: {
    title: "Software, AI & Infrastructure",
    description:
      "Allan Pereira's portfolio: AI systems, automation, software, and infrastructure built for real-world operations.",
  },
} as const;

function isPortfolioLanguage(lang: string): lang is PortfolioLanguage {
  return lang === "pt" || lang === "en";
}

export function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isPortfolioLanguage(lang)) {
    return {};
  }

  const current = languageMetadata[lang];

  return {
    title: current.title,
    description: current.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "pt-BR": "/pt",
        "en-US": "/en",
      },
    },
    openGraph: {
      title: `${current.title} — Allan Pereira`,
      description: current.description,
      url: `https://meetallan.com/${lang}`,
      locale: lang === "pt" ? "pt_BR" : "en_US",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  if (!isPortfolioLanguage(lang)) {
    notFound();
  }

  return <ResumePage lang={lang} />;
}
