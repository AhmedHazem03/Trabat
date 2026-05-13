const features = [
  {
    title: "خبرة 5+ سنوات",
    description: "سنوات من التميز في خدمات نقل البضائع والأثاث في الكويت.",
    accent: "bg-brand-red/10 text-brand-red group-hover:bg-brand-red/20",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="7"/>
        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
      </svg>
    ),
  },
  {
    title: "فريق محترف",
    description: "عمال مدربون على أحدث أساليب الفك والتركيب والتغليف الآمن.",
    accent: "bg-gold/10 text-gold group-hover:bg-gold/20",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    title: "ضمان السلامة",
    description: "نضمن سلامة أغراضك من لحظة الاستلام حتى التسليم التام.",
    accent: "bg-navy-accent/10 text-navy-accent group-hover:bg-navy-accent/20",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: "أسعار تنافسية",
    description: "أسعار عادلة وشفافة بدون رسوم مخفية مع أفضل جودة في الخدمة.",
    accent: "bg-brand-red/10 text-brand-red group-hover:bg-brand-red/20",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-3 block">
            لماذا تربات؟
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-dark">
            نتميز بما يهمك
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 shrink-0 ${feature.accent}`}>
                {feature.icon}
              </div>
              <h3 className="text-dark font-bold text-base leading-snug">
                {feature.title}
              </h3>
              <p className="text-dark/55 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
