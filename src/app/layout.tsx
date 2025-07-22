import "@/globals.css";
import type { Metadata } from "next";
import { ClientLayout } from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Currículo de Allan",
  description: "Currículo online moderno",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: "pt" | "en" };
}) {
  return (
    <html lang={params.lang}>
      <body className="min-h-screen transition-colors duration-300 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100">
        <ClientLayout>{children}</ClientLayout> {/* ✅ lang removido */}
      </body>
    </html>
  );
}
