import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PhoneButton from "@/components/ui/PhoneButton";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  waMessage?: string;
  startingPrice?: string;
  usePhone?: boolean;
  service?: string;
}

export default function ServiceCard({
  title,
  description,
  features,
  icon,
  waMessage,
  startingPrice,
  usePhone = false,
  service = "general",
}: ServiceCardProps) {
  return (
    <div className="bg-dark-card border border-white/8 rounded-2xl p-6 md:p-8 flex flex-col gap-5 hover:border-gold/30 transition-colors duration-300">
      {/* أيقونة + عنوان */}
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
          {startingPrice && (
            <span className="text-gold text-sm font-semibold mt-1 block">
              يبدأ من {startingPrice}
            </span>
          )}
        </div>
      </div>

      {/* وصف */}
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>

      {/* مميزات */}
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-white/70 text-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gold shrink-0"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* زر التواصل */}
      <div className="mt-auto pt-2">
        {usePhone ? (
          <PhoneButton className="px-6 py-3 w-full text-sm">
            اتصل بنا للاستفسار
          </PhoneButton>
        ) : waMessage ? (
          <WhatsAppButton message={waMessage} service={service} className="px-6 py-3 w-full text-sm">
            استفسر الآن عبر واتساب
          </WhatsAppButton>
        ) : null}
      </div>
    </div>
  );
}
