import "@/globals.css";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { ClientLayout } from "@/components/ClientLayout";

const bodyFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meetallan.com"),
  title: {
    default: "Allan Pereira — Software, AI & Infrastructure",
    template: "%s — Allan Pereira",
  },
  description:
    "Software engineer building AI systems, automation, infrastructure, and original products for real-world operations.",
  authors: [{ name: "Allan da Silva Pereira", url: "https://meetallan.com" }],
  creator: "Allan Pereira",
  applicationName: "Allan Pereira — Portfolio",
  category: "technology",
  openGraph: {
    type: "profile",
    url: "https://meetallan.com",
    siteName: "Allan Pereira",
    title: "Allan Pereira — Software, AI & Infrastructure",
    description:
      "AI systems, automation, software engineering, and infrastructure built for real operations.",
    locale: "pt_BR",
    alternateLocale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090a09" },
    { media: "(prefers-color-scheme: light)", color: "#f1f0e9" },
  ],
};

const themeScript = `
  try {
    const storedTheme = localStorage.getItem('meetallan-theme');
    document.documentElement.setAttribute('data-theme', storedTheme === 'light' ? 'light' : 'dark');
    document.documentElement.setAttribute(
      'data-intro',
      sessionStorage.getItem('meetallan-intro-seen') === 'true' ? 'seen' : 'first'
    );
  } catch (_) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
