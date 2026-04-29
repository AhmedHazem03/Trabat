import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-dark text-white flex flex-col items-center justify-center text-center px-4">
      {/* رقم الخطأ */}
      <p className="text-8xl font-bold text-gold mb-2">404</p>

      {/* عنوان */}
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        الصفحة غير موجودة
      </h1>

      {/* وصف */}
      <p className="text-white/60 text-base md:text-lg mb-10 max-w-md">
        عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
      </p>

      {/* زر العودة */}
      <Link
        href="/"
        className="inline-flex items-center justify-center bg-gold text-dark font-bold px-8 min-h-[48px] rounded-lg hover:bg-gold-light transition-colors"
      >
        العودة للصفحة الرئيسية
      </Link>
    </main>
  );
}
