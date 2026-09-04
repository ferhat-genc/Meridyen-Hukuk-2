export const firm = {
  name: "Meridyen Hukuk Bürosu",
  shortName: "Meridyen Hukuk",
  slogan: "Güvenle temsil ediyoruz.",
  phoneDisplay: "0212 555 01 23",
  phoneDial: "+902125550123",
  whatsappNumber: "902125550123",
  email: "info@meridyenhukuk-demo.com",
  addressLines: [
    "Levent Mahallesi, Büyükdere Caddesi No: 201, Kat: 12",
    "34394 Şişli / İstanbul",
  ],
  workingHours: "Pazartesi – Cuma, 09:00 – 18:30",
};

export const developer = {
  name: "Ferhat Genç",
  url: "https://ferhatgenc.com",
  whatsappNumber: "905523051944",
  whatsappMessage:
    "Merhaba, hukuk bürosu için hazırladığınız site tasarımını inceledim. Kendi büromuz için de bir web sitesi tasarımı konusunda görüşme talep etmek istiyorum.",
  infoPopupMessage:
    "Merhaba, hukuk büromuz için böyle bir web sitesi tasarımı hakkında bilgi almak istiyorum.",
};

export const stats = [
  { value: "18+", label: "Yıllık Deneyim" },
  { value: "1.200+", label: "Sonuçlanan Dosya" },
  { value: "%92", label: "Müvekkil Memnuniyeti" },
  { value: "6", label: "Uzmanlık Alanı" },
];

export type PracticeArea = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  bullets: string[];
  image: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "aile-hukuku",
    title: "Aile Hukuku",
    shortDescription:
      "Boşanma, velayet, nafaka ve mal paylaşımı süreçlerinde hassas ve kararlı temsil.",
    description:
      "Aile hukuku alanında, boşanma davalarından velayet ve nafaka uyuşmazlıklarına, mal rejimi tasfiyesinden evlat edinme süreçlerine kadar geniş bir yelpazede müvekkillerimize destek sunuyoruz. Sürecin hassasiyetini göz önünde bulundurarak hem hukuki hem de insani boyutuyla ilgileniyoruz.",
    bullets: [
      "Anlaşmalı ve çekişmeli boşanma davaları",
      "Velayet ve kişisel ilişki tesisi",
      "Nafaka talep ve itiraz süreçleri",
      "Mal rejimi tasfiyesi ve paylaşım davaları",
    ],
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "ticaret-hukuku",
    title: "Ticaret Hukuku",
    shortDescription:
      "Şirketler, sözleşmeler ve ticari uyuşmazlıklarda kurumsal danışmanlık.",
    description:
      "Şirket kuruluşundan birleşme ve devralmalara, ticari sözleşmelerin hazırlanmasından ortaklık uyuşmazlıklarının çözümüne kadar ticaret hukukunun her aşamasında işletmelerin yanındayız. Amacımız, ticari faaliyetlerin sürdürülebilir ve hukuka uygun şekilde ilerlemesini sağlamak.",
    bullets: [
      "Şirket kuruluşu ve yeniden yapılandırma",
      "Ticari sözleşme hazırlığı ve incelemesi",
      "Ortaklık ve pay devri uyuşmazlıkları",
      "Alacak takibi ve icra süreçleri",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "is-hukuku",
    title: "İş Hukuku",
    shortDescription:
      "İşçi ve işveren uyuşmazlıklarında dengeli, çözüm odaklı hukuki destek.",
    description:
      "İşe iade davalarından kıdem ve ihbar tazminatı uyuşmazlıklarına, toplu iş sözleşmelerinden iş sağlığı ve güvenliği süreçlerine kadar iş hukuku alanında hem çalışanlara hem de işverenlere danışmanlık veriyoruz.",
    bullets: [
      "İşe iade ve haksız fesih davaları",
      "Kıdem ve ihbar tazminatı hesaplamaları",
      "Hizmet sözleşmeleri ve iç yönetmelikler",
      "Toplu iş uyuşmazlıkları arabuluculuğu",
    ],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "ceza-hukuku",
    title: "Ceza Hukuku",
    shortDescription:
      "Soruşturma ve kovuşturma aşamalarında etkin savunma ve müdahillik hizmeti.",
    description:
      "Gözaltı ve ifade aşamasından iddianame ve duruşma sürecine kadar ceza yargılamasının her evresinde savunma hakkının etkin biçimde kullanılmasını sağlıyoruz. Mağdur ve müşteki vekilliği hizmetlerini de yürütüyoruz.",
    bullets: [
      "Soruşturma aşamasında müdafilik",
      "Ağır ceza ve asliye ceza yargılamaları",
      "Mağdur / müşteki vekilliği",
      "İtiraz, istinaf ve temyiz süreçleri",
    ],
    image:
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "gayrimenkul-hukuku",
    title: "Gayrimenkul Hukuku",
    shortDescription:
      "Tapu, kira ve inşaat uyuşmazlıklarında sağlam hukuki zemin.",
    description:
      "Tapu iptali ve tescil davalarından kira uyuşmazlıklarına, kat karşılığı inşaat sözleşmelerinden ortaklığın giderilmesi davalarına kadar gayrimenkul hukukunun tüm süreçlerinde uzman desteği sağlıyoruz.",
    bullets: [
      "Tapu iptali ve tescil davaları",
      "Kira tespiti ve tahliye süreçleri",
      "Kat karşılığı inşaat sözleşmeleri",
      "Ortaklığın giderilmesi (izale-i şüyu)",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "miras-hukuku",
    title: "Miras Hukuku",
    shortDescription:
      "Veraset, tenkis ve mirasın paylaşımı konularında güvenilir rehberlik.",
    description:
      "Veraset ilamı alınmasından mirasın reddi süreçlerine, tenkis davalarından mirasçılar arası paylaşım anlaşmazlıklarına kadar miras hukuku alanında kapsamlı danışmanlık ve dava takibi hizmeti sunuyoruz.",
    bullets: [
      "Veraset ilamı ve mirasçılık belgesi",
      "Tenkis ve mirasta denkleştirme davaları",
      "Mirasın reddi ve borca batıklık süreçleri",
      "Vasiyetname düzenleme danışmanlığı",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
  },
];

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    slug: "elif-yildirim",
    name: "Av. Elif Yıldırım",
    title: "Kurucu Ortak / Aile ve Miras Hukuku",
    bio: "20 yıla yakın deneyimiyle aile ve miras hukuku alanında uzmanlaşmış olan Elif Yıldırım, özellikle karmaşık velayet ve mal paylaşımı davalarında müvekkillerine rehberlik etmektedir.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "kaan-demirtas",
    name: "Av. Kaan Demirtaş",
    title: "Kurucu Ortak / Ticaret ve Şirketler Hukuku",
    bio: "Kurumsal danışmanlık ve ticari uyuşmazlıklar konusunda uzman olan Kaan Demirtaş, yerli ve yabancı sermayeli şirketlere hukuki destek sağlamaktadır.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "selin-arslan",
    name: "Av. Selin Arslan",
    title: "Kıdemli Avukat / İş Hukuku",
    bio: "İşçi ve işveren uyuşmazlıklarında arabuluculuk ve dava takibi süreçlerini yürüten Selin Arslan, iş sağlığı ve güvenliği mevzuatı konusunda da danışmanlık vermektedir.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "mert-ozkan",
    name: "Av. Mert Özkan",
    title: "Kıdemli Avukat / Ceza Hukuku",
    bio: "Ceza yargılamasının her aşamasında etkin savunma stratejileri geliştiren Mert Özkan, ağır ceza mahkemelerinde uzun süreli dava tecrübesine sahiptir.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: string;
  image: string;
  readTime: string;
};

export const articles: Article[] = [
  {
    slug: "bosanma-davasinda-mal-paylasimi",
    title: "Boşanma Davasında Mal Paylaşımı Nasıl Yapılır?",
    excerpt:
      "Evlilik birliği içinde edinilen malların paylaşımında izlenen yasal süreç ve dikkat edilmesi gereken noktalar.",
    content: [
      "Türk Medeni Kanunu uyarınca, eşler arasında aksi kararlaştırılmadıkça edinilmiş mallara katılma rejimi uygulanır. Bu rejimde, evlilik süresince edinilen mal varlığı boşanma anında eşit şekilde paylaştırılır.",
      "Mal paylaşımı davası açılmadan önce edinilmiş ve kişisel malların ayrımının doğru yapılması büyük önem taşır. Miras yoluyla veya bağış yoluyla edinilen mallar kişisel mal sayılır ve paylaşıma dahil edilmez.",
      "Süreç genellikle boşanma davasından bağımsız olarak, boşanma kararının kesinleşmesinin ardından ayrı bir dava ile yürütülür. Uzman bir avukat desteği, hak kaybının önüne geçilmesi açısından önemlidir.",
    ],
    date: "2026-06-12",
    category: "Aile Hukuku",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    readTime: "6 dk",
  },
  {
    slug: "isten-haksiz-cikarilma-haklariniz",
    title: "İşten Haksız Çıkarılırsanız Haklarınız Nelerdir?",
    excerpt:
      "Haksız fesih durumunda işe iade, kıdem ve ihbar tazminatı talep sürecinde bilinmesi gerekenler.",
    content: [
      "İş sözleşmesinin işveren tarafından geçerli bir sebep gösterilmeden feshedilmesi halinde çalışan, işe iade davası açma hakkına sahiptir. Bu hak, işyerinde en az 6 aylık kıdemi olan ve iş güvencesi kapsamındaki çalışanlar için geçerlidir.",
      "Fesih bildiriminin tebliğinden itibaren 1 ay içinde arabulucuya başvurulması zorunlu ön şarttır. Arabuluculuk sürecinde anlaşma sağlanamazsa dava yoluna gidilebilir.",
      "Kıdem ve ihbar tazminatı hesaplamalarında çalışılan süre, son brüt ücret ve varsa yan haklar dikkate alınır. Bu hesaplamaların doğru yapılması için hukuki destek alınması tavsiye edilir.",
    ],
    date: "2026-05-28",
    category: "İş Hukuku",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    readTime: "5 dk",
  },
  {
    slug: "kira-tahliye-davasi-sureci",
    title: "Kiracının Tahliyesi İçin Hangi Yollara Başvurulabilir?",
    excerpt:
      "Kira sözleşmesinin sona ermesi ve tahliye talebinde izlenecek hukuki yollar üzerine kısa bir rehber.",
    content: [
      "Kiracının tahliyesi; kira bedelinin ödenmemesi, kira süresinin sona ermesi, ihtiyaç sebebiyle tahliye gibi çeşitli sebeplere dayanabilir. Her bir sebep için kanunda öngörülen usul ve süreler farklılık gösterir.",
      "Kira bedelinin ödenmemesi halinde icra takibi yoluyla veya doğrudan dava yoluyla tahliye talep edilebilir. İhtarname gönderilmesi süreç açısından önem taşır.",
      "Tahliye taahhütnamesi gibi belgelerin geçerliliği ve zamanlaması, davanın seyrini doğrudan etkileyen unsurlardır. Sürecin başında hukuki danışmanlık alınması olası hak kayıplarını önler.",
    ],
    date: "2026-04-15",
    category: "Gayrimenkul Hukuku",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    readTime: "4 dk",
  },
  {
    slug: "sirket-kurulusunda-dikkat-edilmesi-gerekenler",
    title: "Şirket Kuruluşunda Hukuki Açıdan Dikkat Edilmesi Gerekenler",
    excerpt:
      "Limited ve anonim şirket kuruluş sürecinde ortaklık yapısı ve sözleşme hükümlerinin önemi.",
    content: [
      "Şirket kuruluşunda ortaklık yapısının doğru kurgulanması, ileride yaşanabilecek pay devri ve yönetim uyuşmazlıklarının önüne geçer. Esas sözleşme hükümleri bu noktada belirleyici rol oynar.",
      "Sermaye taahhütleri, kar payı dağıtım esasları ve yönetim kurulu yetkileri gibi konular, kuruluş aşamasında detaylı şekilde düzenlenmelidir.",
      "Yabancı sermayeli şirket kuruluşlarında ek olarak yabancı yatırım mevzuatına uyum sağlanması gerekmektedir. Kuruluş öncesi alınacak hukuki danışmanlık, süreci hızlandırır ve riskleri azaltır.",
    ],
    date: "2026-03-02",
    category: "Ticaret Hukuku",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    readTime: "7 dk",
  },
];
