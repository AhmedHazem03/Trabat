interface GoldDividerProps {
  className?: string;
}

export default function GoldDivider({ className = "" }: GoldDividerProps) {
  return (
    <div
      className={`flex items-center gap-4 ${className}`}
      aria-hidden="true"
    >
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
      <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
    </div>
  );
}
