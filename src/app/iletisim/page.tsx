import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { firm } from "@/lib/data";

export const metadata: Metadata = {
  title: `İletişim | ${firm.name}`,
  description: "Danışma talebiniz için bizimle iletişime geçin.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950 text-white">
        <div className="container-content py-20 sm:py-24">
          <p className="eyebrow">İletişim</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Bize Ulaşın</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-200">
            Sorularınız veya danışma talepleriniz için aşağıdaki formu doldurabilir ya da
            doğrudan telefon ve WhatsApp üzerinden bize ulaşabilirsiniz.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-xl font-semibold text-navy-900">Adres</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                {firm.addressLines[0]}
                <br />
                {firm.addressLines[1]}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-navy-900">Telefon</h2>
              <a href={`tel:${firm.phoneDial}`} className="mt-3 block text-sm text-ink-600 hover:text-gold-600">
                {firm.phoneDisplay}
              </a>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-navy-900">E-posta</h2>
              <a href={`mailto:${firm.email}`} className="mt-3 block text-sm text-ink-600 hover:text-gold-600">
                {firm.email}
              </a>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-navy-900">Çalışma Saatleri</h2>
              <p className="mt-3 text-sm text-ink-600">{firm.workingHours}</p>
            </div>

            <a
              href={`https://wa.me/${firm.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-fit"
            >
              WhatsApp&apos;tan Yazın
            </a>

            <div className="relative h-56 w-full overflow-hidden rounded-md border border-ink-100 bg-ink-100">
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-ink-400">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span className="text-xs">Harita alanı (demo placeholder)</span>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-ink-100 p-6 sm:p-10">
            <h2 className="font-serif text-2xl font-semibold text-navy-900">Danışma Talebi Formu</h2>
            <p className="mt-2 text-sm text-ink-500">
              Formu doldurun, ekibimiz en kısa sürede sizinle iletişime geçsin.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
