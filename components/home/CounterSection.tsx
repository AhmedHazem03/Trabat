import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GoldDivider from "@/components/ui/GoldDivider";

const counters = [
  { target: 500, prefix: "+", suffix: "", label: "شحنة ناجحة" },
  { target: 5, prefix: "+", suffix: "", label: "سنوات خبرة" },
  { target: 100, prefix: "", suffix: "%", label: "رضا العملاء" },
  { target: 24, prefix: "", suffix: "/7", label: "خدمة دائمة" },
];

export default function CounterSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <GoldDivider className="mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {counters.map((c) => (
            <AnimatedCounter
              key={c.label}
              target={c.target}
              prefix={c.prefix}
              suffix={c.suffix}
              label={c.label}
            />
          ))}
        </div>
        <GoldDivider className="mt-12" />
      </div>
    </section>
  );
}
