import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import AreasStrip from "@/components/home/AreasStrip";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { absolute: "تربات لنقل البضائع في الكويت | نقل منزلي وتجاري ودولي" },
  description:
    "تربات — خدمة نقل بضائع احترافية في أكثر من 22 منطقة بالكويت. نقل منزلي، تجاري، دولي وتخزين مؤقت. فك وتركيب وتغليف. تواصل معنا عبر واتساب.",
  keywords: ["نقل عفش الكويت", "نقل بضائع", "شركة نقل الكويت", "نقل أثاث"],
  alternates: { canonical: "https://turbat.com.kw" },
  openGraph: {
    title: "تربات لنقل البضائع في الكويت | نقل منزلي وتجاري ودولي",
    description:
      "خدمة نقل بضائع احترافية في أكثر من 22 منطقة بالكويت. تواصل عبر واتساب.",
    url: "https://turbat.com.kw",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["MovingCompany", "LocalBusiness"],
  name: "تربات لنقل البضائع",
  description:
    "خدمة نقل بضائع وأثاث احترافية في الكويت. نقل منزلي، تجاري، دولي وتخزين.",
  url: "https://turbat.com.kw",
  telephone: "+96597355268",
  areaServed: { "@type": "Country", name: "الكويت" },
  sameAs: ["https://instagram.com/turbat_kw"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "10:00",
      closes: "22:00",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD — RULE-09 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      <main>
        <HeroSection />
        <ServicesPreview />
        <AreasStrip />
        <WhyUs />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
