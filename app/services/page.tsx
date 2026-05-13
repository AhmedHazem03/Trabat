import type { Metadata } from "next";
import ServiceCard from "@/components/services/ServiceCard";
import FAQAccordion from "@/components/services/FAQAccordion";
import GoldDivider from "@/components/ui/GoldDivider";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: { absolute: "خدماتنا | تربات لنقل البضائع في الكويت" },
  description:
    "خدمات نقل احترافية في الكويت: نقل منزلي، نقل تجاري، نقل دولي، وتخزين مؤقت. فك وتركيب وتغليف. تواصل عبر واتساب.",
  alternates: { canonical: "https://turbat.com.kw/services" },
  openGraph: {
    title: "خدماتنا | تربات لنقل البضائع في الكويت",
    description:
      "نقل منزلي، تجاري، دولي وتخزين مؤقت. فك وتركيب وتغليف. تواصل عبر واتساب.",
    url: "https://turbat.com.kw/services",
  },
};

const accentColors = ["red", "gold", "blue", "red"] as const;

const services = [
  {
    title: "النقل المنزلي",
    description:
      "ننقل أثاثك ومقتنياتك بكل أمان من الفك إلى التركيب في الموقع الجديد. فريق متخصص ومعدات حديثة تضمن سلامة كل قطعة.",
    features: ["فك وتركيب الأثاث", "تغليف احترافي", "نقل آمن ومؤمّن", "تنظيف بعد النقل"],
    waMessage: "السلام عليكم، أريد الاستفسار عن النقل المنزلي",
    service: "home",
    startingPrice: "25 د.ك",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "النقل التجاري",
    description:
      "متخصصون في نقل المكاتب والمعدات التجارية والشركات. ننجز العمل بسرعة واحترافية لتعود أعمالك للعمل في أسرع وقت.",
    features: ["نقل مكاتب ومعدات", "نقل أجهزة تقنية", "تنسيق مع الإدارة", "مرونة في المواعيد"],
    waMessage: "السلام عليكم، أريد الاستفسار عن النقل التجاري",
    service: "commercial",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    title: "النقل الدولي",
    description:
      "نوفر خدمات نقل البضائع خارج الكويت إلى دول الخليج العربي والمنطقة. نتعامل مع جميع إجراءات الشحن والجمارك.",
    features: ["شحن لدول الخليج", "تخليص جمركي", "تتبع الشحنة", "تأمين على البضاعة"],
    usePhone: true,
    service: "international",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    title: "التخزين المؤقت",
    description:
      "مستودعات آمنة ومؤمنة لتخزين أثاثك أو بضاعتك مؤقتاً. بيئة نظيفة وجافة مع حراسة على مدار الساعة.",
    features: ["مستودعات مؤمّنة", "حراسة 24/7", "بيئة نظيفة وجافة", "مرونة في مدة التخزين"],
    waMessage: "السلام عليكم، أريد الاستفسار عن خدمة التخزين",
    service: "storage",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": {
    "@type": "MovingCompany",
    "name": "تربات لنقل البضائع",
    "telephone": "+96597355268",
    "areaServed": "الكويت",
    "sameAs": ["https://instagram.com/turbat_kw"],
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "خدمات النقل",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "النقل المنزلي" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "النقل التجاري" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "النقل الدولي" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "التخزين المؤقت" } },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        {/* Hero */}
        <section className="bg-dark pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="container mx-auto px-4 text-center">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
              خدماتنا
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              كل ما تحتاجه للنقل في مكان واحد
            </h1>
            <p className="text-white/50 max-w-xl mx-auto text-lg">
              من النقل المنزلي إلى التجاري والدولي — نقدم حلول نقل متكاملة باحترافية عالية
            </p>
            <GoldDivider className="mt-10 max-w-xs mx-auto" />
          </div>
        </section>

        {/* بطاقات الخدمات */}
        <section className="bg-dark py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <ServiceCard key={service.title} {...service} accent={accentColors[i]} />
              ))}
            </div>
          </div>
        </section>

        {/* الأسئلة الشائعة */}
        <section className="bg-dark-card py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-3 block">
                الأسئلة الشائعة
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                أسئلة يسألها عملاؤنا كثيراً
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <FAQAccordion />
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection />
      </main>
    </>
  );
}
