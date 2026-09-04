import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/data";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/makaleler/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-md border border-ink-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-gold-600">
          <span>{article.category}</span>
          <span className="text-ink-300">•</span>
          <span className="text-ink-400">{article.readTime} okuma</span>
        </div>
        <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-navy-900">
          {article.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{article.excerpt}</p>
        <p className="mt-4 text-xs text-ink-400">{formatDate(article.date)}</p>
      </div>
    </Link>
  );
}
