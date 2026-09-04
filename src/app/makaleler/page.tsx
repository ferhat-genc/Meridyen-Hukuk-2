import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { articles, firm } from "@/lib/data";

export const metadata: Metadata = {
  title: `Makaleler | ${firm.name}`,
  description: "Hukuki konularda bilgilendirici yazılarımız.",
};

export default function ArticlesPage() {
  return (
    <>
      <section className="bg-navy-950 text-white">
        <div className="container-content py-20 sm:py-24">
          <p className="eyebrow">Blog</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Makaleler</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-200">
            Güncel hukuki konular hakkında kısa ve anlaşılır bilgilendirme yazıları.
          </p>
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-content grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
