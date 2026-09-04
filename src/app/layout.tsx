import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteInfoPopup from "@/components/SiteInfoPopup";
import { firm } from "@/lib/data";

const heading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${firm.name} | İstanbul`,
  description:
    "Aile, ticaret, iş, ceza, gayrimenkul ve miras hukuku alanlarında güvenilir hukuki danışmanlık. (Kurgusal demo site)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${heading.variable} ${body.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <SiteInfoPopup />
      </body>
    </html>
  );
}
