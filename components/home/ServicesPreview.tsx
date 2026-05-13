import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PhoneButton from "@/components/ui/PhoneButton";

const services = [
  {
    id: "home",
    title: "النقل المنزلي",
    description: "فك وتركيب الأثاث، تغليف احترافي، نقل آمن للأغراض الثمينة والأجهزة المنزلية.",
    waMessage: "السلام عليكم، أريد الاستفسار عن النقل المنزلي",
    service: "home",
    accent: { bar: "bg-brand-red", icon: "bg-brand-red/10 text-brand-red group-hover:bg-brand-red/20", hover: "hover:border-brand-red/30" },
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
    accent: { bar: "bg-gold", icon: "bg-gold/10 text-gold group-hover:bg-gold/20", hover: "hover:border-gold/30" },
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
    id: "storage",
    title: "التخزين المؤقت",
    description: "مستودعات آمنة ومؤمنة لتخزين أغراضك بضمان تام حتى موعد نقلها.",
    waMessage: "السلام عليكم، أريد الاستفسار عن خدمة التخزين",
    service: "storage",
    accent: { bar: "bg-navy-accent", icon: "bg-navy-accent/10 text-navy-accent group-hover:bg-navy-accent/20", hover: "hover:border-navy-accent/30" },
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-3 block">
            خدماتنا
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-dark mb-4">
            حلول نقل شاملة لكل احتياجاتك
          </h2>
          <p className="text-dark/55 max-w-xl mx-auto">
            نوفر خدمات نقل متكاملة للأفراد والشركات بأعلى معايير الجودة والأمان.
          </p>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-light border border-gray-100 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group shadow-sm hover:shadow-md ${service.accent.hover}`}
            >
              {/* شريط اللون العلوي */}
              <div className={`h-1 ${service.accent.bar}`} aria-hidden="true" />

              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* الأيقونة */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 ${service.accent.icon}`}>
                  {service.icon}
                </div>

                {/* النص */}
                <div className="flex-1">
                  <h3 className="text-dark font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-dark/55 text-sm leading-relaxed">{service.description}</p>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
