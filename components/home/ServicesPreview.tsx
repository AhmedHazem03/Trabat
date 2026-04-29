import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PhoneButton from "@/components/ui/PhoneButton";

const services = [
  {
    id: "home",
    title: "النقل المنزلي",
    description: "فك وتركيب الأثاث، تغليف احترافي، نقل آمن للأغراض الثمينة والأجهزة المنزلية.",
    waMessage: "السلام عليكم، أريد الاستفسار عن النقل المنزلي",
    service: "home",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    ),
  },
  {
    id: "commercial",
    title: "النقل التجاري",
    description: "نقل مكاتب وشركات ومعدات تجارية بكل احترافية مع ضمان عدم تعطيل العمل.",
    waMessage: "السلام عليكم، أريد الاستفسار عن النقل التجاري",
    service: "commercial",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    id: "international",
    title: "النقل الدولي",
    description: "نقل البضائع خارج الكويت وإلى دول الخليج والعالم العربي مع جميع الوثائق الجمركية.",
    waMessage: "السلام عليكم، أريد الاستفسار عن النقل الدولي",
    service: "international",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
  {
    id: "storage",
    title: "التخزين المؤقت",
    description: "مستودعات آمنة ومؤمنة لتخزين أغراضك بضمان تام حتى موعد نقلها.",
    waMessage: "السلام عليكم، أريد الاستفسار عن خدمة التخزين",
    service: "storage",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        <rect x="1" y="3" width="22" height="5" rx="1"/>
        <path d="M1 8v13a1 1 0 001 1h20a1 1 0 001-1V8"/>
      </svg>
    ),
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-3 block">
            خدماتنا
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            حلول نقل شاملة لكل احتياجاتك
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            نوفر خدمات نقل متكاملة للأفراد والشركات بأعلى معايير الجودة والأمان.
          </p>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-dark-card border border-white/8 rounded-2xl p-6 flex flex-col gap-4 hover:border-gold/30 transition-colors duration-300 group"
            >
              {/* الأيقونة */}
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors duration-300">
                {service.icon}
              </div>

              {/* النص */}
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* الزر */}
              {service.waMessage ? (
                <WhatsAppButton
                  message={service.waMessage}
                  service={service.service}
                  className="px-4 py-2.5 text-sm w-full"
                />
              ) : (
                <PhoneButton className="px-4 py-2.5 text-sm w-full">
                  اتصل بنا
                </PhoneButton>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
