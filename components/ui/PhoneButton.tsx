"use client";

import { trackContact } from "@/lib/analytics";
import { contact } from "@/lib/contact";

interface PhoneButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PhoneButton({ className = "", children }: PhoneButtonProps) {
  return (
    <a
      href={`tel:${contact.phone}`}
      onClick={() => trackContact("phone")}
      className={`inline-flex items-center justify-center gap-2 min-h-[44px] rounded-xl border border-white/30 text-white font-bold transition-all duration-200 hover:border-white hover:bg-white/10 active:scale-95 ${className}`}
      aria-label="اتصل بنا"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.72A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
      <span>{children ?? "اتصل الآن"}</span>
    </a>
  );
}
