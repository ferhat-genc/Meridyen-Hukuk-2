import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { practiceAreas, firm } from "@/lib/data";

export const metadata: Metadata = {
  title: `Uzmanlık Alanları | ${firm.name}`,
  description:
    "Aile, ticaret, iş, ceza, gayrimenkul ve miras hukuku alanlarında sunduğumuz hizmetler.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <section className="bg-navy-950 text-white">
        <div className="container-content py-20 sm:py-24">
          <p className="eyebrow">Hizmetlerimiz</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
            Uzmanlık Alanlarımız
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-200">
            Her hukuk dalında birikimli avukat kadromuzla, dosyanızın niteliğine uygun,
            odaklı ve etkin çözümler sunuyoruz.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content flex flex-col gap-20">
          {practiceAreas.map((area, index) => (
            <div
              key={area.slug}
              id={area.slug}
              className={`grid scroll-mt-28 grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative h-64 overflow-hidden rounded-md sm:h-80 lg:h-96">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl">
                  {area.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-600">{area.description}</p>
                <ul className="mt-6 space-y-3">
                  {area.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-ink-600">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link href="/iletisim" className="btn-outline-dark mt-8">
                  Bu Konuda Danışmak İstiyorum
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
