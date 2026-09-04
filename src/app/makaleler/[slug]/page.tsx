import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, firm } from "@/lib/data";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return { title: firm.name };
  return {
    title: `${article.title} | ${firm.name}`,
    description: article.excerpt,
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <section className="bg-navy-gradient text-white">
        <div className="container-content pb-16 pt-40 sm:pb-20 sm:pt-48">
          <Link href="/makaleler" className="text-sm text-gold-400 hover:text-gold-300">
            ← Tüm Makaleler
          </Link>
          <p className="eyebrow mt-6">{article.category}</p>
          <h1 className="mt-4 max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 text-sm text-ink-300">
            {formatDate(article.date)} · {article.readTime} okuma
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="relative h-64 w-full overflow-hidden rounded-md sm:h-96">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="prose prose-neutral mt-10 max-w-none">
              {article.content.map((paragraph, i) => (
                <p key={i} className="mb-5 text-base leading-relaxed text-ink-600">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-8 text-xs text-ink-400">
              Bu makale genel bilgilendirme amaçlıdır ve somut bir hukuki durum için avukatınıza
              danışmanız önerilir. İçerik kurgusal bir demo site kapsamında hazırlanmıştır.
            </p>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-md border border-ink-100 bg-ink-50 p-6">
              <h3 className="font-serif text-lg font-semibold text-navy-900">
                Bu konuda danışmanlık ister misiniz?
              </h3>
              <p className="mt-3 text-sm text-ink-600">
                Ekibimizle iletişime geçin, dosyanızı birlikte değerlendirelim.
              </p>
              <Link href="/iletisim" className="btn-primary mt-5 w-full">
                Danışma Talebi Gönder
              </Link>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-navy-900">Diğer Makaleler</h3>
              <ul className="mt-4 space-y-4">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/makaleler/${item.slug}`}
                      className="text-sm font-medium text-ink-600 hover:text-gold-600"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
