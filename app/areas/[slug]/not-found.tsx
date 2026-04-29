import Link from "next/link";

export default function AreaNotFound() {
  return (
    <main className="min-h-screen bg-dark text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-gold text-8xl font-bold mb-4">404</div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          المنطقة غير موجودة
        </h1>
        <p className="text-white/60 text-base mb-8 leading-relaxed">
          المنطقة التي تبحث عنها غير متوفرة. يمكنك تصفح جميع مناطق الخدمة
          المتاحة.
        </p>
        <Link
          href="/areas"
          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-8 rounded-xl bg-gold text-dark font-bold hover:bg-gold-light active:scale-95 transition-all duration-200"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          عرض جميع المناطق
        </Link>
      </div>
    </main>
  );
}
