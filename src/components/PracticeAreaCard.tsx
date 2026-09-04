import Image from "next/image";
import Link from "next/link";
import type { PracticeArea } from "@/lib/data";

export default function PracticeAreaCard({ area }: { area: PracticeArea }) {
  return (
    <Link
      href={`/uzmanlik-alanlari#${area.slug}`}
      className="group flex flex-col overflow-hidden rounded-md border border-ink-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={area.image}
          alt={area.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-lg font-semibold text-navy-900">{area.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
          {area.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 group-hover:text-gold-500">
          Detaylı Bilgi
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
