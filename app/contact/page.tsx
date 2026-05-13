import type { Metadata } from "next";
import { contact } from "@/lib/contact";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "تواصل معنا | تربات لنقل البضائع في الكويت",
    description:
      "تواصل مع تربات لنقل البضائع عبر واتساب أو هاتف مباشرة. خدمة 7 أيام في الأسبوع من 8 صباحاً حتى 10 مساءً.",
    alternates: { canonical: "https://turbat.com.kw/contact" },
    openGraph: {
      title: "تواصل معنا | تربات لنقل البضائع في الكويت",
      description:
        "تواصل عبر واتساب أو هاتف. خدمة 7 أيام في الأسبوع.",
      url: "https://turbat.com.kw/contact",
    },
  };
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-dark">
      {/* Hero */}
      <section className="bg-light pt-28 pb-16 md:pt-36 md:pb-24 text-center px-4 border-b border-gray-100">
        <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
          تواصل <span className="text-brand-red">معنا</span>
        </h1>
        <p className="text-dark/60 text-lg max-w-xl mx-auto">
          نحن هنا لمساعدتك. تواصل معنا مباشرة عبر واتساب أو هاتف، بدون انتظار.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="py-14 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp */}
          <a
            href={contact.whatsapp.general}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 bg-white border border-gray-100 shadow-sm rounded-2xl p-8 text-center hover:border-brand-red/40 hover:shadow-md transition-all duration-200"
            aria-label="تواصل عبر واتساب"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#22c55e" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-dark mb-1">واتساب</h2>
              <p className="text-dark/60 text-sm mb-4">الأسرع والأسهل — ردّ فوري</p>
              <span className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-xl bg-green-500 text-white font-bold text-sm hover:bg-green-600 transition-colors">
                راسلنا الآن
              </span>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${contact.phone}`}
            className="group flex flex-col items-center gap-4 bg-white border border-gray-100 shadow-sm rounded-2xl p-8 text-center hover:border-gold/40 hover:shadow-md transition-all duration-200"
            aria-label="اتصل بنا"
          >
            <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.72A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-dark mb-1">اتصال مباشر</h2>
              <p className="text-dark/60 text-sm mb-4">تحدث مع فريقنا مباشرة</p>
              <span className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-xl bg-brand-red text-white font-bold text-sm hover:bg-brand-red-dark transition-colors">
                اتصل الآن
              </span>
            </div>
          </a>

          {/* Instagram */}
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 bg-white border border-gray-100 shadow-sm rounded-2xl p-8 text-center hover:border-pink-500/40 hover:shadow-md transition-all duration-200"
            aria-label="راسلنا على انستاغرام"
          >
            <div className="w-16 h-16 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-dark mb-1">انستاغرام</h2>
              <p className="text-dark/60 text-sm mb-4">تابعنا وشاهد أعمالنا</p>
              <span className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-sm hover:opacity-90 transition-opacity">
                راسلنا على انستا
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-10 px-4 max-w-3xl mx-auto">
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-dark mb-6 text-center">ساعات <span className="text-gold">العمل</span></h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <span className="text-dark font-semibold">السبت – الخميس</span>
              <span className="text-dark/60 text-sm">8:00 صباحاً – 10:00 مساءً</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-dark font-semibold">الجمعة</span>
              <span className="text-dark/60 text-sm">10:00 صباحاً – 10:00 مساءً</span>
            </div>
          </div>
          <p className="text-center text-brand-red/80 text-sm mt-6">
            نخدمك 7 أيام في الأسبوع — بدون أيام عطلة
          </p>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="py-10 px-4 max-w-5xl mx-auto pb-16">
        <h2 className="text-2xl font-bold text-dark mb-6 text-center">موقعنا</h2>
        <div className="rounded-2xl overflow-hidden border border-gray-200">
          <iframe
            src="https://maps.google.com/maps?q=%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA&output=embed"
            width="100%"
            className="h-[250px] md:h-[400px] w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع تربات لنقل البضائع في الكويت"
          />
        </div>
      </section>
    </main>
  );
}
