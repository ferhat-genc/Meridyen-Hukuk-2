import Image from "next/image";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import TaglineRotator from "@/components/TaglineRotator";
import { firm, stats, practiceAreas, articles } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden text-white">
        <div className="absolute inset-0 hero-glow" />
        <div
          className="absolute -top-1/4 right-[-10%] h-[70vw] w-[70vw] max-w-3xl rounded-full bg-gold-500/20 blur-3xl animate-drift"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] h-[60vw] w-[60vw] max-w-2xl rounded-full bg-navy-600/30 blur-3xl animate-drift-slow"
          aria-hidden="true"
        />
        <div className="container-content relative pb-24 pt-40 sm:pb-32 sm:pt-48 lg:pb-40 lg:pt-56">
          <p className="eyebrow">İstanbul · Bağımsız Hukuk Bürosu</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
            Haklarınızı korumak için güvenilir ve kararlı hukuki temsil.
          </h1>
          <TaglineRotator />
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/iletisim" className="btn-primary">
              Ücretsiz Ön Görüşme Talep Et
            </Link>
            <Link href="/uzmanlik-alanlari" className="btn-secondary">
              Uzmanlık Alanlarımız
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-ink-100 bg-white">
        <div className="container-content grid grid-cols-2 gap-y-10 py-14 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-medium tracking-tight text-navy-900 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-wide text-ink-400 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="container-content pb-8">
          <p className="text-center text-xs text-ink-400">
            * Rakamlar temsilidir; gerçek bir istatistiği yansıtmamaktadır.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section bg-ink-50">
        <div className="container-content grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative h-72 overflow-hidden rounded-md sm:h-96 lg:h-[28rem]">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
              alt="Hukuk bürosu ofis ortamı"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Neden {firm.shortName}?</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-navy-900 sm:text-4xl">
              Bağımsız ve tam kapsamlı hukuki destek.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">
              Kurulduğumuz günden bu yana, hukuki süreçlerin karmaşıklığını müvekkillerimiz
              adına sadeleştirmeyi ilke edindik. Şeffaf iletişim, düzenli bilgilendirme ve
              alanında uzman ekibimizle, her dosyanın arkasında somut bir strateji olduğundan
              emin oluyoruz.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-600">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-500" />
                Uzmanlık alanına göre yapılandırılmış deneyimli avukat kadrosu
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-500" />
                Dava süreci boyunca düzenli ve şeffaf bilgilendirme
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-500" />
                İlk görüşmede net ücret ve süreç planlaması
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS — flat editorial list */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Çalışma Alanlarımız</p>
              <h2 className="mt-4 max-w-xl text-3xl font-medium tracking-tight text-navy-900 sm:text-4xl">
                Derin hukuki uzmanlık, pratik bir bakış açısıyla
              </h2>
            </div>
            <Link
              href="/uzmanlik-alanlari"
              className="text-sm font-semibold text-gold-600 hover:text-gold-500"
            >
              Tümünü İnceleyin →
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 border-t border-ink-100 sm:grid-cols-2">
            {practiceAreas.map((area, i) => (
              <Link
                key={area.slug}
                href={`/uzmanlik-alanlari#${area.slug}`}
                className="group flex items-start justify-between gap-6 border-b border-ink-100 py-7 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
              >
                <div>
                  <span className="font-mono text-xs text-gold-500">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 text-xl font-medium text-navy-900 transition-colors group-hover:text-gold-600 sm:text-2xl">
                    {area.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-500">
                    {area.shortDescription}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="mt-2 shrink-0 text-2xl text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-gold-500"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-navy-900">
        <div className="container-content flex flex-col items-center gap-6 py-16 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Hukuki bir sorununuz mu var?
            </h2>
            <p className="mt-2 text-sm text-ink-200">
              İlk değerlendirme görüşmesi için ekibimizle iletişime geçin.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${firm.phoneDial}`} className="btn-secondary">
              {firm.phoneDisplay}
            </a>
            <Link href="/iletisim" className="btn-primary">
              Danışma Talebi Gönder
            </Link>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="section bg-ink-50">
        <div className="container-content">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Makaleler</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-navy-900 sm:text-4xl">
                Hukuki Bilgilendirme
              </h2>
            </div>
            <Link href="/makaleler" className="text-sm font-semibold text-gold-600 hover:text-gold-500">
              Tüm Makaleler →
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
