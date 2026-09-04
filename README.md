# Meridyen Hukuk Bürosu — Demo Web Sitesi

Bu proje, İstanbul'daki küçük/orta ölçekli hukuk bürolarına örnek/teklif sunumu amacıyla
hazırlanmış **tamamen kurgusal bir demo web sitesidir**.

> ⚠️ **Önemli:** "Meridyen Hukuk Bürosu" ismi, adresi, telefon numarası, avukat kadrosu,
> müvekkil sayıları ve tüm makale içerikleri **hayalidir**. Gerçek bir hukuk bürosunu,
> kişiyi veya kurumu temsil etmemektedir. Sitede yer alan sayısal veriler ("18+ yıllık
> deneyim", "1.200+ dosya" vb.) gerçek istatistik değildir, yalnızca temsili örnek olarak
> sunulmuştur.

## Kullanılan Teknolojiler

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Görseller: [Unsplash](https://unsplash.com) ücretsiz stok fotoğrafları (gerçek kişi/büro
  fotoğrafı değildir; ekip sayfasındaki portreler de stok modellerdir)

## Sayfalar

- **Ana Sayfa** (`/`) — Hero, temsili güven unsurları, öne çıkan uzmanlık alanları, makale önizlemesi
- **Uzmanlık Alanları** (`/uzmanlik-alanlari`) — Aile, ticaret, iş, ceza, gayrimenkul ve miras hukuku
- **Ekibimiz** (`/ekibimiz`) — Kurgusal avukat profilleri
- **Makaleler** (`/makaleler` ve `/makaleler/[slug]`) — Örnek hukuki bilgilendirme yazıları
- **İletişim** (`/iletisim`) — Adres, telefon, harita placeholder'ı ve danışma talebi formu

## Danışma Formu Hakkında

`/iletisim` sayfasındaki danışma talebi formu **tamamen demo amaçlıdır**. Form gönderildiğinde
herhangi bir sunucuya istek atılmaz, herhangi bir veritabanına veya dosyaya kayıt yapılmaz;
yalnızca arayüzde bir "gönderildi" durumu simüle edilir. Formu deneyen ziyaretçilerin girdiği
hiçbir bilgi hiçbir yerde saklanmaz.

## WhatsApp Entegrasyonu

Sağ alt köşedeki WhatsApp butonu ve iletişim sayfasındaki "WhatsApp'tan Yazın" bağlantısı,
`wa.me` üzerinden örnek/demo bir telefon numarasına yönlendirir (`src/lib/data.ts` içindeki
`whatsappNumber` alanı). Gerçek kullanım için bu numaranın gerçek bir işletme numarasıyla
değiştirilmesi gerekir.

## Yerel Geliştirme

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde açılır.

## Production Build

```bash
npm run build
npm run start
```

## Vercel'e Deploy

Bu proje herhangi bir ek yapılandırma gerektirmeden Vercel'e deploy edilebilir:

1. Depoyu GitHub/GitLab/Bitbucket üzerine push edin.
2. [vercel.com](https://vercel.com) üzerinden "New Project" ile bu depoyu içe aktarın.
3. Framework olarak Next.js otomatik algılanır; ekstra ortam değişkeni gerekmez.
4. "Deploy" ile yayınlayın.

Alternatif olarak Vercel CLI ile:

```bash
npm i -g vercel
vercel
```

## İçerik Yapısı

Tüm sahte/örnek içerik (büro bilgileri, uzmanlık alanları, ekip üyeleri, makaleler)
`src/lib/data.ts` dosyasında merkezi olarak tutulur. Gerçek bir büro için bu dosya ve
`next.config.mjs` içindeki görsel host ayarları güncellenerek site kolayca uyarlanabilir.
