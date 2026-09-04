import Link from "next/link";
import { firm, developer } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/uzmanlik-alanlari", label: "Uzmanlık Alanları" },
  { href: "/ekibimiz", label: "Ekibimiz" },
  { href: "/makaleler", label: "Makaleler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-ink-300">
      <div className="container-content py-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-serif text-xl font-semibold text-white">{firm.shortName}</span>
          <p className="mt-4 text-sm leading-relaxed text-ink-400">
            {firm.slogan} İstanbul merkezli büromuz, aile, ticaret, iş, ceza, gayrimenkul ve miras
            hukuku alanlarında müvekkillerine güvenilir hukuki temsil sunar.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Kurumsal</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-gold-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">İletişim</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{firm.addressLines[0]}</li>
            <li>{firm.addressLines[1]}</li>
            <li>
              <a href={`tel:${firm.phoneDial}`} className="hover:text-gold-400">
                {firm.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${firm.email}`} className="hover:text-gold-400">
                {firm.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Çalışma Saatleri</h3>
          <p className="mt-4 text-sm">{firm.workingHours}</p>
          <p className="mt-6 text-xs leading-relaxed text-ink-500">
            Bu web sitesi, kurgusal bir hukuk bürosu için hazırlanmış demo/tanıtım amaçlı bir
            çalışmadır ve gerçek bir kişi veya kurumu temsil etmez.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-content flex flex-col items-center justify-between gap-2 text-xs text-ink-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {firm.name}. Tüm hakları saklıdır. (Demo Site)</p>
          <p>
            Web Sitesi Tasarımı:{" "}
            <a
              href={developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink-300 transition-colors hover:text-gold-400"
            >
              {developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
