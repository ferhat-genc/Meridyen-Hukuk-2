"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { firm } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/uzmanlik-alanlari", label: "Uzmanlık Alanları" },
  { href: "/ekibimiz", label: "Ekibimiz" },
  { href: "/makaleler", label: "Makaleler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="container-content flex h-24 items-center justify-between">
          <Link href="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
            <span className="text-lg sm:text-xl font-semibold uppercase tracking-[0.15em] text-white">
              {firm.shortName}
            </span>
          </Link>

          <button
            type="button"
            aria-label="Menüyü aç"
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur transition-colors hover:border-gold-300 hover:text-gold-200"
          >
            Menü
            <span className="flex flex-col gap-1">
              <span className="block h-px w-4 bg-current" />
              <span className="block h-px w-4 bg-current" />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[70] bg-navy-950 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-content flex h-24 items-center justify-between">
          <Link
            href="/"
            className="text-lg sm:text-xl font-semibold uppercase tracking-[0.15em] text-white"
            onClick={() => setOpen(false)}
          >
            {firm.shortName}
          </Link>
          <button
            type="button"
            aria-label="Menüyü kapat"
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-gold-300 hover:text-gold-200"
          >
            <span className="relative block h-4 w-4">
              <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 rotate-45 bg-current" />
              <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        <nav className="container-content mt-10 flex flex-col gap-2 sm:mt-16">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 border-b border-white/10 py-4 sm:py-5"
            >
              <span className="font-mono text-xs text-gold-400">0{i + 1}</span>
              <span className="font-serif text-3xl font-medium text-white transition-colors group-hover:text-gold-300 sm:text-5xl">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="container-content mt-10 flex flex-col gap-3 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`tel:${firm.phoneDial}`}
            className="text-sm font-semibold text-white transition-colors hover:text-gold-300"
          >
            {firm.phoneDisplay}
          </a>
          <Link href="/iletisim" className="btn-primary w-fit" onClick={() => setOpen(false)}>
            Danışma Talebi
          </Link>
        </div>
      </div>
    </>
  );
}
