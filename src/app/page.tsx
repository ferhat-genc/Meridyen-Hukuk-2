import Image from "next/image";
import Link from "next/link";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import ArticleCard from "@/components/ArticleCard";
import { firm, stats, practiceAreas, articles } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-gradient text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?q=80&w=1920&auto=format&fit=crop"
            alt="İstanbul'da adliye binası kolonları"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="container-content relative py-28 sm:py-32 lg:py-40">
          <p className="eyebrow">İstanbul · Hukuk Danışmanlığı</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Haklarınızı korumak için güvenilir ve kararlı hukuki temsil.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
            {firm.name}, aile hukukundan ticaret hukukuna, iş hukukundan ceza hukukuna kadar
            geniş bir yelpazede müvekkillerine titiz, şeffaf ve sonuç odaklı hukuki danışmanlık
            sunar.
          </p>
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
        <div className="container-content grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ink-400 sm:text-sm">
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
            <h2 className="mt-4 font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">
              Her dosyaya, her müvekkile aynı titizlikle yaklaşıyoruz.
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

      {/* PRACTICE AREAS */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Uzmanlık Alanlarımız</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">
              Hukukun geniş yelpazesinde odaklı çözümler
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.slice(0, 6).map((area) => (
              <PracticeAreaCard key={area.slug} area={area} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/uzmanlik-alanlari" className="btn-outline-dark">
              Tüm Uzmanlık Alanlarını Gör
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-navy-900">
        <div className="container-content flex flex-col items-center gap-6 py-16 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
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
              <h2 className="mt-4 font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">
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
