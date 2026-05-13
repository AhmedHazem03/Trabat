import { areas } from "@/lib/areas";
import Link from "next/link";

const items = [...areas, ...areas];

export default function AreasStrip() {
  return (
    <section className="bg-light py-10 overflow-hidden border-y border-gray-100" aria-label="مناطق الخدمة">
      <div className="container mx-auto px-4 mb-6 text-center">
        <span className="text-dark/50 text-sm">
          نخدم أكثر من{" "}
          <span className="text-brand-red font-semibold">22 منطقة</span>{" "}
          في الكويت
        </span>
      </div>

      <div className="overflow-hidden" dir="ltr" aria-hidden="true">
        <div className="marquee-track">
          {items.map((area, i) => (
            <span
              key={`${area.slug}-${i}`}
              className="inline-flex items-center gap-3 mx-4 whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
              <span className="text-dark/55 text-sm font-medium hover:text-brand-red transition-colors duration-200 cursor-default">
                {area.name}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <Link
          href="/areas"
          className="inline-flex items-center gap-2 text-brand-red/70 hover:text-brand-red text-sm font-medium transition-colors duration-200"
        >
          <span>عرض جميع المناطق</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}
