import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteInfoPopup from "@/components/SiteInfoPopup";
import { firm } from "@/lib/data";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${firm.name} | İstanbul`,
  description:
    "Bağımsız bir hukuk bürosu olarak aile, ticaret, iş, ceza, gayrimenkul ve miras hukuku alanlarında sonuç odaklı hukuki danışmanlık sunuyoruz. (Kurgusal demo site)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${grotesk.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <SiteInfoPopup />
      </body>
    </html>
  );
}
