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
    <html lang="pt" suppressHydrationWarning>
      <body className="theme-page min-h-screen transition-colors duration-300">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
