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
    <div className="relative flex min-h-screen bg-transparent">
      <Info isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex min-h-screen flex-1 flex-col md:pl-4">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
