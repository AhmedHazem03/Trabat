import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PhoneButton from "@/components/ui/PhoneButton";

type AccentColor = "red" | "gold" | "blue";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  waMessage?: string;
  startingPrice?: string;
  usePhone?: boolean;
  service?: string;
  accent?: AccentColor;
}

const accentMap: Record<AccentColor, { bar: string; icon: string; check: string; price: string }> = {
  red: {
    bar: "bg-brand-red",
    icon: "bg-brand-red/10 border-brand-red/20 text-brand-red",
    check: "text-brand-red",
    price: "text-brand-red",
  },
  gold: {
    bar: "bg-gold",
    icon: "bg-gold/10 border-gold/20 text-gold",
    check: "text-gold",
    price: "text-gold",
  },
  blue: {
    bar: "bg-navy-accent",
    icon: "bg-navy-accent/10 border-navy-accent/20 text-navy-accent",
    check: "text-navy-accent",
    price: "text-gold",
  },
};

export default function ServiceCard({
  title,
  description,
  features,
  icon,
  waMessage,
  startingPrice,
  usePhone = false,
  service = "general",
  accent = "red",
}: ServiceCardProps) {
  const a = accentMap[accent];

  return (
    <div className="bg-dark-card border border-white/8 rounded-2xl overflow-hidden flex flex-col hover:border-white/15 transition-colors duration-300">
      {/* شريط اللون العلوي */}
      <div className={`h-1 ${a.bar}`} aria-hidden="true" />

      <div className="p-6 md:p-8 flex flex-col gap-5 flex-1">
        {/* أيقونة + عنوان */}
        <div className="flex items-start gap-4">
          <div className={`shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center ${a.icon}`}>
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
            {startingPrice && (
              <span className={`text-sm font-semibold mt-1 block ${a.price}`}>
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
                className={`shrink-0 ${a.check}`}
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
    </div>
  );
}
