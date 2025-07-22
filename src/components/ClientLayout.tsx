'use client';

import { useState } from "react";
import { Info } from "./Info";
import { Header } from "./Header";

export function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Info isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col flex-1 min-h-screen">
        <Header /> {/* ✅ lang removido */}
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
