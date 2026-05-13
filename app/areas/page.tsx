import type { Metadata } from "next";
import AreaGrid from "@/components/areas/AreaGrid";

export const metadata: Metadata = {
  title: { absolute: "مناطق الخدمة | تربات لنقل البضائع في الكويت" },
  description:
    "تربات لنقل البضائع تخدم أكثر من 22 منطقة في الكويت. نقل عفش منزلي واحترافي في صباح السالم، العدان، السالمية، حولي وغيرها.",
  alternates: { canonical: "https://turbat.com.kw/areas" },
  openGraph: {
    title: "مناطق الخدمة | تربات لنقل البضائع في الكويت",
    description: "نغطي أكثر من 22 منطقة في الكويت. اختر منطقتك وتواصل معنا.",
    url: "https://turbat.com.kw/areas",
  },
};

export default function AreasPage() {
  return (
    <main className="min-h-screen bg-white text-dark">
      {/* Hero */}
      <section className="bg-light pt-28 pb-16 md:pt-36 md:pb-24 text-center px-4 border-b border-gray-100">
        <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
          مناطق <span className="text-brand-red">الخدمة</span>
        </h1>
        <p className="text-dark/60 text-lg max-w-2xl mx-auto">
          نغطي أكثر من <span className="text-brand-red font-bold">22 منطقة</span> في
          الكويت. اختر منطقتك وتواصل معنا مباشرة.
        </p>
      </section>

      {/* Grid */}
      <section className="py-14 px-4 max-w-7xl mx-auto pb-20">
        <AreaGrid />
      </section>
    </main>
  );
}
