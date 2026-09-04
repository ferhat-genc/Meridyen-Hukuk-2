import { developer } from "@/lib/data";

export default function WhatsAppButton() {
  const message = encodeURIComponent(developer.whatsappMessage);

  return (
    <a
      href={`https://wa.me/${developer.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden danışma talebinde bulunun"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 fill-white"
      >
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.687 4.518 1.87 6.35L4 29l7.826-1.83A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75c-1.94 0-3.75-.52-5.31-1.43l-.38-.22-4.64 1.09 1.11-4.52-.25-.4A9.7 9.7 0 0 1 5.25 15c0-5.93 4.82-10.75 10.754-10.75S26.75 9.07 26.75 15 21.94 24.75 16.004 24.75Zm5.6-8.03c-.31-.155-1.83-.9-2.113-1.003-.283-.103-.489-.155-.695.155-.206.31-.798 1.003-.978 1.21-.18.207-.36.232-.67.078-.31-.155-1.31-.483-2.496-1.54-.923-.823-1.546-1.84-1.727-2.15-.18-.31-.02-.478.136-.632.14-.14.31-.36.464-.54.155-.18.206-.31.31-.516.103-.207.052-.387-.026-.542-.078-.155-.695-1.677-.953-2.297-.25-.6-.505-.52-.695-.53l-.593-.01c-.206 0-.542.078-.826.387-.284.31-1.083 1.058-1.083 2.58 0 1.522 1.108 2.993 1.263 3.2.155.206 2.182 3.333 5.287 4.673.739.319 1.315.51 1.765.653.741.236 1.415.203 1.949.123.594-.089 1.83-.748 2.088-1.47.258-.723.258-1.343.181-1.47-.078-.129-.284-.206-.594-.361Z" />
      </svg>
    </a>
  );
}
