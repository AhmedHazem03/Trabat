import type { Metadata } from "next";
import CounterSection from "@/components/home/CounterSection";
import CTASection from "@/components/home/CTASection";
import GoldDivider from "@/components/ui/GoldDivider";

export const metadata: Metadata = {
  title: { absolute: "من نحن | تربات لنقل البضائع في الكويت" },
  description:
    "تعرف على تربات — شركة نقل بضائع كويتية تأسست لتقديم خدمة نقل منزلي وتجاري ودولي بأعلى معايير الاحترافية والأمان.",
  alternates: { canonical: "https://turbat.com.kw/about" },
  openGraph: {
    title: "من نحن | تربات لنقل البضائع في الكويت",
    description:
      "شركة نقل بضائع كويتية — نقل منزلي وتجاري ودولي بأعلى معايير الاحترافية.",
    url: "https://turbat.com.kw/about",
  },
};

const valueAccents = [
  { card: "border-brand-red/20 hover:border-brand-red/40", icon: "bg-brand-red/10 border-brand-red/20 text-brand-red" },
  { card: "border-gold/20 hover:border-gold/40", icon: "bg-gold/10 border-gold/20 text-gold" },
  { card: "border-navy-accent/20 hover:border-navy-accent/40", icon: "bg-navy-accent/10 border-navy-accent/20 text-navy-accent" },
  { card: "border-brand-red/20 hover:border-brand-red/40", icon: "bg-brand-red/10 border-brand-red/20 text-brand-red" },
];

const values = [
  {
    title: "الأمانة والشفافية",
    description: "نقدم أسعاراً واضحة بلا رسوم مخفية، ونلتزم بكل ما نَعِد به.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "الاحترافية في العمل",
    description: "فريق مدرّب، معدات حديثة، وعمليات نقل منظمة من البداية للنهاية.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: "رضا العميل أولاً",
    description: "لا نغلق الملف حتى يكون عميلنا سعيداً 100% بالخدمة المقدمة.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: "السرعة والالتزام بالمواعيد",
    description: "نصل في الوقت المحدد ونُنجز العمل بكفاءة دون تأخير أو تأجيل.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": "تربات لنقل البضائع",
  "description":
    "شركة نقل بضائع كويتية احترافية متخصصة في النقل المنزلي والتجاري والدولي والتخزين.",
  "foundingLocation": { "@type": "Place", "name": "الكويت" },
  "telephone": "+96597355268",
  "areaServed": "الكويت",
  "sameAs": ["https://instagram.com/turbat_kw"],
};

export default function AboutPage() {
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
              من نحن
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              قصتنا مع النقل في الكويت
            </h1>
            <p className="text-white/50 max-w-xl mx-auto text-lg">
              بدأنا صغاراً بحلم كبير — أن نكون الخيار الأول لكل من يبحث عن نقل موثوق في الكويت
            </p>
            <GoldDivider className="mt-10 max-w-xs mx-auto" />
          </div>
        </section>

        {/* قصة التأسيس */}
        <section className="bg-dark-card py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* النص */}
                <div>
                  <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-3 block">
                    قصة التأسيس
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                    من فكرة إلى ثقة يومية
                  </h2>
                  <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                    <p>
                      انطلقت تربات من الكويت بفكرة بسيطة: أن النقل يجب أن يكون تجربة مريحة لا
                      مُجهِدة. رأينا كيف يعاني الناس من شركات غير موثوقة، وعمال غير متخصصين،
                      وأسعار مُضللة — فقررنا أن نغيّر الصورة.
                    </p>
                    <p>
                      بدأنا بفريق صغير مؤمن بقيمة الأمانة والاحترافية. واليوم، بعد أكثر من 5
                      سنوات، أصبحنا الشريك الموثوق لمئات العائلات والشركات في أكثر من 22 منطقة
                      بالكويت.
                    </p>
                    <p>
                      كل شحنة ننقلها، كل قطعة أثاث نلمسها — نتعامل معها كأنها ممتلكاتنا نحن.
                      هذا ليس شعاراً، هذا أسلوب عملنا كل يوم.
                    </p>
                  </div>
                </div>

                {/* مربعات الإنجازات */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: "+500", label: "شحنة ناجحة" },
                    { number: "+5", label: "سنوات خبرة" },
                    { number: "22+", label: "منطقة مُخدَّمة" },
                    { number: "100%", label: "رضا العملاء" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-dark-surface border border-white/8 rounded-xl p-4 text-center"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-gold mb-1">
                        {stat.number}
                      </div>
                      <div className="text-white/50 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* الرسالة والرؤية */}
        <section className="bg-dark py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-3 block">
                هويتنا
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                رسالتنا ورؤيتنا
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* الرسالة */}
              <div className="bg-dark-card border border-brand-red/25 rounded-2xl p-6 md:p-8">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-4">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">رسالتنا</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  تقديم خدمة نقل بضائع احترافية وموثوقة لكل عميل في الكويت، مع ضمان سلامة
                  ممتلكاتهم والالتزام التام بالمواعيد والأسعار المتفق عليها.
                </p>
              </div>

              {/* الرؤية */}
              <div className="bg-dark-card border border-navy-accent/25 rounded-2xl p-6 md:p-8">
                <div className="w-10 h-10 rounded-xl bg-navy-accent/10 flex items-center justify-center text-navy-accent mb-4">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="12" y1="2" x2="12" y2="5" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="5" y2="12" />
                    <line x1="19" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">رؤيتنا</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  أن نكون الشركة الأولى في الكويت لنقل البضائع من حيث الجودة والثقة، ونوسّع
                  خدماتنا لتغطي كامل دول الخليج.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* القيم */}
        <section className="bg-dark-card py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-3 block">
                ما يميزنا
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                قيمنا التي نعمل بها يومياً
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {values.map((value, i) => (
                <div
                  key={value.title}
                  className={`bg-dark-surface border rounded-2xl p-5 md:p-6 text-center transition-colors duration-300 ${valueAccents[i].card}`}
                >
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mx-auto mb-4 ${valueAccents[i].icon}`}>
                    {value.icon}
                  </div>
                  <h3 className="text-white font-bold text-sm md:text-base mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* أرقام الإنجاز */}
        <CounterSection />

        {/* CTA */}
        <CTASection />
      </main>
    </>
  );
}
