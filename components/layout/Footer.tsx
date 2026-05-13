import Link from "next/link";
import Image from "next/image";
import { contact } from "@/lib/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-light text-dark/80 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* العمود الأول — عن تربات */}
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="تربات لنقل البضائع">
              <Image
                src="/images/Trabat.png"
                alt="تربات لنقل البضائع"
                width={140}
                height={42}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-dark/60 text-sm leading-relaxed">
              خدمة نقل بضائع احترافية في الكويت. نقل منزلي، تجاري، دولي
              وتخزين. نخدم أكثر من 22 منطقة بكل ثقة واحتراف.
            </p>
          </div>

          {/* العمود الثاني — روابط سريعة */}
          <div className="flex flex-col gap-4">
            <h3 className="text-dark font-semibold text-base">روابط سريعة</h3>
            <nav aria-label="روابط التذييل" className="flex flex-col gap-2">
              {[
                { label: "الرئيسية", href: "/" },
                { label: "خدماتنا", href: "/services" },
                { label: "مناطقنا", href: "/areas" },
                { label: "من نحن", href: "/about" },
                { label: "تواصل معنا", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-dark/60 hover:text-brand-red transition-colors duration-200 text-sm w-fit min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* العمود الثالث — تواصل معنا */}
          <div className="flex flex-col gap-4">
            <h3 className="text-dark font-semibold text-base">تواصل معنا</h3>
            <div className="flex flex-col gap-3">
              <a
                href={contact.whatsapp.general}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dark/60 hover:text-brand-red transition-colors duration-200 text-sm min-h-[44px]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-gold" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                واتساب
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 text-dark/60 hover:text-brand-red transition-colors duration-200 text-sm min-h-[44px]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gold" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.72A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                {contact.phone}
              </a>

              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dark/60 hover:text-brand-red transition-colors duration-200 text-sm min-h-[44px]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gold" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                turbat_kw@
              </a>
            </div>
          </div>
        </div>

        {/* خط فاصل + حقوق النشر */}
        <div className="mt-10 pt-8 border-t border-gray-200 text-center">
          <p className="text-dark/40 text-sm">
            © {year} تربات لنقل البضائع — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
