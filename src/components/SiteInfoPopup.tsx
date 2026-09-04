"use client";

import { useEffect, useState } from "react";
import { developer } from "@/lib/data";

const STORAGE_KEY = "meridyen-demo-info-popup-shown";
const AUTO_OPEN_DELAY_MS = 30000;

const reasons = [
  "Google'da ve ChatGPT gibi yapay zeka aramalarında görünür olursunuz.",
  "Danışanlar size WhatsApp üzerinden tek tıkla ulaşır — aramayla ya da form doldurmayla uğraşmaz.",
  "Uzmanlık alanları ve ekip bilgileriyle müvekkili ilk görüşmeden önce ikna edersiniz.",
  "Kurumsal bir site, rakip bürolarınızın önüne geçmenizi sağlar.",
  "Bir kez kurulur, içerik ve iletişim bilgisi güncellemeleri dakikalar içinde yapılabilir.",
];

export default function SiteInfoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      alreadyShown = false;
    }

    if (alreadyShown) return;

    const timer = window.setTimeout(() => {
      setOpen(true);
      try {
        window.localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* localStorage erişilemiyorsa sessizce yoksay */
      }
    }, AUTO_OPEN_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  function handleOpen() {
    setOpen(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* localStorage erişilemiyorsa sessizce yoksay */
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        aria-label="Bu site hakkında bilgi al"
        className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-navy-700/20 bg-white text-sm font-serif italic text-navy-900 shadow-lg shadow-black/10 transition-transform hover:scale-105 hover:border-gold-400"
      >
        i
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/75 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Kapat"
              className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-ink-100 text-ink-400 transition-colors hover:border-gold-400 hover:text-navy-900"
            >
              <span className="relative block h-3 w-3">
                <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 -rotate-45 bg-current" />
              </span>
            </button>

            <p className="eyebrow">Fark Yaratan Bir Yatırım</p>
            <h2 className="mt-3 max-w-xs text-2xl font-medium leading-snug tracking-tight text-navy-900">
              Neden profesyonel bir hukuk bürosu sitesi?
            </h2>

            <ul className="mt-7 divide-y divide-ink-100 border-t border-ink-100">
              {reasons.map((reason, i) => (
                <li key={reason} className="flex items-start gap-4 py-3.5">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-gold-500">
                    0{i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-600">{reason}</span>
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/${developer.whatsappNumber}?text=${encodeURIComponent(
                developer.infoPopupMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2.5 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              <svg viewBox="0 0 32 32" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.687 4.518 1.87 6.35L4 29l7.826-1.83A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75c-1.94 0-3.75-.52-5.31-1.43l-.38-.22-4.64 1.09 1.11-4.52-.25-.4A9.7 9.7 0 0 1 5.25 15c0-5.93 4.82-10.75 10.754-10.75S26.75 9.07 26.75 15 21.94 24.75 16.004 24.75Zm5.6-8.03c-.31-.155-1.83-.9-2.113-1.003-.283-.103-.489-.155-.695.155-.206.31-.798 1.003-.978 1.21-.18.207-.36.232-.67.078-.31-.155-1.31-.483-2.496-1.54-.923-.823-1.546-1.84-1.727-2.15-.18-.31-.02-.478.136-.632.14-.14.31-.36.464-.54.155-.18.206-.31.31-.516.103-.207.052-.387-.026-.542-.078-.155-.695-1.677-.953-2.297-.25-.6-.505-.52-.695-.53l-.593-.01c-.206 0-.542.078-.826.387-.284.31-1.083 1.058-1.083 2.58 0 1.522 1.108 2.993 1.263 3.2.155.206 2.182 3.333 5.287 4.673.739.319 1.315.51 1.765.653.741.236 1.415.203 1.949.123.594-.089 1.83-.748 2.088-1.47.258-.723.258-1.343.181-1.47-.078-.129-.284-.206-.594-.361Z" />
              </svg>
              Bilgi Almak İstiyorum
            </a>
          </div>
        </div>
      )}
    </>
  );
}
