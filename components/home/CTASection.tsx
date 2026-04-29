import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PhoneButton from "@/components/ui/PhoneButton";
import InstaButton from "@/components/ui/InstaButton";

export default function CTASection() {
  return (
    <section className="bg-dark-card py-16 md:py-24 relative overflow-hidden">
      {/* خلفية ذهبية خفيفة */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
          تواصل معنا الآن
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          جاهز للنقل؟ نحن هنا لمساعدتك
        </h2>
        <p className="text-white/50 max-w-lg mx-auto mb-10 text-lg">
          تواصل معنا عبر واتساب أو اتصل مباشرة للحصول على عرض سعر فوري.
        </p>

        {/* أزرار — MOB-03 */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center">
          <WhatsAppButton
            message="السلام عليكم، أريد الاستفسار عن خدمات النقل"
            className="px-8 py-4 text-base w-full sm:w-auto"
          />
          <PhoneButton className="px-8 py-4 text-base w-full sm:w-auto">
            اتصل الآن
          </PhoneButton>
          <InstaButton className="px-8 py-4 text-base w-full sm:w-auto">
            راسلنا على انستا
          </InstaButton>
        </div>

        {/* ملاحظة */}
        <p className="mt-6 text-white/30 text-sm">
          متاحون 7 أيام في الأسبوع · السبت–الخميس 8ص–10م · الجمعة 10ص–10م
        </p>
      </div>
    </section>
  );
}
