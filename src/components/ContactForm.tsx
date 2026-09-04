"use client";

import { useState, type FormEvent } from "react";
import { practiceAreas } from "@/lib/data";

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
    }, 700);
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-gold-300 bg-gold-50 p-8 text-center">
        <h3 className="font-serif text-xl font-semibold text-navy-900">Talebiniz Alındı</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-600">
          Bu bir demo formudur; girdiğiniz bilgiler hiçbir sunucuya veya veritabanına
          gönderilmemiş, hiçbir yerde kaydedilmemiştir. Gerçek bir başvuru için lütfen bizi
          telefon veya WhatsApp üzerinden arayın.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline-dark mt-6"
        >
          Yeni Talep Oluştur
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-navy-800">
          Ad Soyad
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-sm border border-ink-200 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-500"
          placeholder="Adınız ve soyadınız"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-medium text-navy-800">
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="rounded-sm border border-ink-200 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-500"
          placeholder="0 5xx xxx xx xx"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-navy-800">
          E-posta
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-sm border border-ink-200 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-500"
          placeholder="ornek@eposta.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="area" className="text-sm font-medium text-navy-800">
          Uzmanlık Alanı
        </label>
        <select
          id="area"
          name="area"
          required
          defaultValue=""
          className="rounded-sm border border-ink-200 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-500"
        >
          <option value="" disabled>
            Seçiniz
          </option>
          {practiceAreas.map((area) => (
            <option key={area.slug} value={area.title}>
              {area.title}
            </option>
          ))}
          <option value="diger">Diğer</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium text-navy-800">
          Talebinizin Kısa Açıklaması
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-sm border border-ink-200 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-500"
          placeholder="Danışmak istediğiniz konuyu kısaca özetleyiniz"
        />
      </div>

      <div className="sm:col-span-2">
        <p className="text-xs leading-relaxed text-ink-400">
          Bu form demo amaçlıdır. Gönder butonuna bastığınızda hiçbir veri sunucuya iletilmez
          veya kaydedilmez; yalnızca arayüz akışı simüle edilir.
        </p>
      </div>

      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto">
          {status === "submitting" ? "Gönderiliyor..." : "Danışma Talebi Gönder"}
        </button>
      </div>
    </form>
  );
}
