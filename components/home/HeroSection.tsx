import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PhoneButton from "@/components/ui/PhoneButton";
import InstaButton from "@/components/ui/InstaButton";
import { contact } from "@/lib/contact";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-dark overflow-hidden">
      {/* خلفية بـ texture خفيف */}
      <div
        className="absolute inset-0 opacity-[0.03] dot-texture"
        aria-hidden="true"
      />
      {/* تدرج أحمر خفيف */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* النص */}
          <div className="text-center md:text-start order-2 md:order-1">
            {/* شارة */}
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" aria-hidden="true" />
              <span className="text-brand-red text-sm font-semibold">خدمة نقل معتمدة في الكويت</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              نقل بضائعك في الكويت{" "}
              <span className="text-gold">بكل ثقة واحتراف</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              تربات — شركة متخصصة في نقل الأثاث والبضائع في أكثر من 22 منطقة بالكويت.
              فك وتركيب وتغليف احترافي مع ضمان السلامة التامة.
            </p>

            {/* أزرار — MOB-03 */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:justify-start justify-center">
              <WhatsAppButton
                message="السلام عليكم، أريد الاستفسار عن خدمات النقل"
                className="px-6 py-3 text-base w-full sm:w-auto"
              />
              <PhoneButton className="px-6 py-3 text-base w-full sm:w-auto">
                اتصل الآن
              </PhoneButton>
              <InstaButton className="px-6 py-3 text-base w-full sm:w-auto">
                راسلنا على انستا
              </InstaButton>
            </div>

            {/* ثقة */}
            <div className="mt-10 flex items-center gap-6 justify-center md:justify-start text-white/40 text-sm">
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gold shrink-0" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                +500 عميل راضٍ
              </span>
              <span className="w-px h-4 bg-white/20" aria-hidden="true" />
              <span>22+ منطقة</span>
              <span className="w-px h-4 bg-white/20" aria-hidden="true" />
              <span>7 أيام / أسبوع</span>
            </div>
          </div>

          {/* الصورة */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-sm md:max-w-none">
              {/* هالة خلف الصورة */}
              <div
                className="absolute inset-0 rounded-3xl bg-brand-red/8 blur-3xl scale-95"
                aria-hidden="true"
              />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-dark-card aspect-[4/3] md:aspect-[3/2]">
                <Image
                  src="/images/hero_image.png"
                  alt="شاحنة نقل تربات في الكويت"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* سهم للأسفل */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center" aria-hidden="true">
        <div className="w-8 h-8 border-2 border-white/20 rounded-full flex items-center justify-center animate-bounce">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
