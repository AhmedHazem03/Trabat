const testimonials = [
  {
    name: "أحمد الرشيدي",
    area: "مشرف",
    rating: 5,
    text: "خدمة ممتازة، الفريق وصل في الوقت المحدد وأنهى النقل بسرعة ودقة. الأثاث وصل سليم 100% دون أي خدش. أنصح بهم بشدة!",
  },
  {
    name: "فاطمة الكندري",
    area: "السالمية",
    rating: 5,
    text: "نقلت شقة كاملة مع تربات وكانت التجربة رائعة جداً. التغليف كان احترافي والتركيب بعد النقل صح تماماً. سأتعامل معهم مرة ثانية.",
  },
  {
    name: "محمد البغلي",
    area: "بيان",
    rating: 5,
    text: "نقل مكتبي تم بكل احترافية، حتى أجهزة الكمبيوتر وصلت سليمة. الأسعار منطقية جداً مقارنة بالخدمة المقدمة.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`تقييم ${count} من 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className={i < count ? "text-gold" : "text-white/20"}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-dark-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-3 block">
            آراء العملاء
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            ماذا يقول عملاؤنا
          </h2>
        </div>

        {/* الكروت — موبايل: عمود واحد / ديسكتوب: 3 أعمدة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-dark border border-white/8 rounded-2xl p-6 flex flex-col gap-4"
            >
              {/* النجوم */}
              <StarRating count={t.rating} />

              {/* النص */}
              <p className="text-white/70 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* العميل */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.area}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
