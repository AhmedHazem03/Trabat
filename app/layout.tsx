import type { Metadata } from "next";
import { Cairo, Noto_Kufi_Arabic, Inter } from "next/font/google";
import Script from "next/script";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import StickyContactBar from "@/components/layout/StickyContactBar";

// ضع معرّف GA4 في ملف .env.local: NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-XXXXXXXXXX";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500"],
  variable: "--font-noto-kufi",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://turbat.com.kw"),
  title: {
    default: "تربات لنقل البضائع في الكويت",
    template: "%s | تربات",
  },
  description:
    "تربات — خدمة نقل بضائع احترافية في الكويت. نقل منزلي، تجاري، دولي وتخزين. تواصل معنا عبر واتساب أو هاتف.",
  keywords: ["نقل عفش الكويت", "نقل بضائع", "شركة نقل", "نقل أثاث الكويت"],
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: "https://turbat.com.kw",
    siteName: "تربات لنقل البضائع",
    title: "تربات لنقل البضائع في الكويت",
    description:
      "تربات — خدمة نقل بضائع احترافية في الكويت. نقل منزلي، تجاري، دولي وتخزين.",
  },
  twitter: {
    card: "summary_large_image",
    title: "تربات لنقل البضائع في الكويت",
    description:
      "خدمة نقل بضائع احترافية في أكثر من 22 منطقة بالكويت.",
  },
  alternates: {
    canonical: "https://turbat.com.kw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${notoKufi.variable} ${inter.variable}`}
    >
      <body className="pb-20 md:pb-0">
        {/* Google Analytics 4 — T-42 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Navbar />
        {children}
        <StickyContactBar />
      </body>
    </html>
  );
}
