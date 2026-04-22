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
    <div className="relative flex min-h-screen bg-transparent md:items-start">
      <Info isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex min-h-screen min-w-0 flex-1 flex-col md:pl-4">
        <Header />
        <main className="min-h-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
