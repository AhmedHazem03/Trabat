import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { areas } from "@/lib/areas";
import { contact } from "@/lib/contact";

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    return {
      title: "منطقة غير موجودة | تربات",
    };
  }

  return {
    title: { absolute: `نقل عفش ${area.name} الكويت | تربات للنقل` },
    description: `خدمة نقل عفش احترافية في ${area.name}. فك وتركيب وتغليف. اتصل الآن.`,
    alternates: { canonical: `https://turbat.com.kw/areas/${slug}` },
    openGraph: {
      title: `نقل عفش ${area.name} الكويت | تربات للنقل`,
      description: `خدمة نقل عفش احترافية في ${area.name}. فك وتركيب وتغليف. اتصل الآن.`,
      url: `https://turbat.com.kw/areas/${slug}`,
    },
  };
}

export default async function AreaPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
    return;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": ["MovingCompany", "LocalBusiness"],
    name: "تربات لنقل البضائع",
    areaServed: {
      "@type": "Place",
      name: `${area.name}، الكويت`,
    },
    telephone: contact.phone,
    sameAs: [contact.instagram],
  };

  return (
    <main className="min-h-screen bg-white text-dark">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-light pt-28 pb-16 md:pt-36 md:pb-24 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 rounded-full px-4 py-2 text-brand-red text-sm font-semibold mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {area.name}، الكويت
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
            نقل عفش{" "}
            <span className="text-brand-red">{area.name}</span>
          </h1>
          <p className="text-dark/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            خدمة نقل عفش احترافية في {area.name} — فك وتركيب، تغليف كامل، ونقل
            آمن من الباب للباب.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
            <a
              href={contact.whatsapp.area(area.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto px-8 rounded-xl bg-brand-red text-white font-bold text-base hover:bg-brand-red-dark active:scale-95 transition-all duration-200"
              aria-label={`تواصل عبر واتساب عن نقل عفش ${area.name}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              تواصل عبر واتساب
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto px-8 rounded-xl border border-dark/20 text-dark font-bold text-base hover:border-dark/40 hover:bg-dark/5 active:scale-95 transition-all duration-200"
              aria-label="اتصل بنا"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.72A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              اتصل الآن
            </a>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="py-14 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-dark text-center mb-10">
          خدماتنا في <span className="text-brand-red">{area.name}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              ),
              title: "النقل المنزلي",
              desc: `نقل عفش منزلي كامل في ${area.name} — فك وتركيب الأثاث، تغليف احترافي، ونقل آمن.`,
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              ),
              title: "النقل التجاري",
              desc: `نقل مكاتب ومعدات تجارية في ${area.name} بأعلى معايير الاحترافية.`,
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red" aria-hidden="true">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                </svg>
              ),
              title: "التغليف الاحترافي",
              desc: "تغليف كامل لجميع القطع بمواد عالية الجودة تضمن سلامة أثاثك أثناء النقل.",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red" aria-hidden="true">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              ),
              title: "نقل سريع وموثوق",
              desc: `فريقنا المتخصص يصلك في ${area.name} في الوقت المحدد — بدون تأخير.`,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-6 flex gap-4 shadow-sm hover:shadow-md hover:border-brand-red/20 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-dark font-bold mb-2">{item.title}</h3>
                <p className="text-dark/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Back to areas */}
      <section className="py-6 px-4 text-center pb-16">
        <Link
          href="/areas"
          className="inline-flex items-center gap-2 text-brand-red/70 hover:text-brand-red text-sm font-semibold transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          عرض جميع المناطق
        </Link>
      </section>
    </main>
  );
}
