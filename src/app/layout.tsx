import "@/globals.css";
import type { Metadata } from "next";
import { ClientLayout } from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Currículo de Allan",
  description: "Currículo online moderno",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="min-h-screen transition-colors duration-300 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
