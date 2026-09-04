"use client";

import Link from "next/link";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/95 backdrop-blur supports-[backdrop-filter]:bg-navy-950/80">
      <div className="container-content flex h-20 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-white">
            {firm.shortName}
          </span>
          <span className="hidden sm:inline text-[11px] uppercase tracking-[0.25em] text-gold-400">
            Bürosu
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-200 transition-colors hover:text-gold-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${firm.phoneDial}`}
            className="text-sm font-semibold text-white transition-colors hover:text-gold-400"
          >
            {firm.phoneDisplay}
          </a>
          <Link href="/iletisim" className="btn-primary">
            Danışma Talebi
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menüyü aç/kapat"
          className="flex lg:hidden h-10 w-10 flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy-950 px-6 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm px-2 py-3 text-sm font-medium text-ink-200 hover:bg-white/5 hover:text-gold-400"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a href={`tel:${firm.phoneDial}`} className="text-sm font-semibold text-white">
              {firm.phoneDisplay}
            </a>
            <Link href="/iletisim" className="btn-primary" onClick={() => setOpen(false)}>
              Danışma Talebi
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
