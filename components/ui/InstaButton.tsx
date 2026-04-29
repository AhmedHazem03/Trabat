"use client";

import { trackContact } from "@/lib/analytics";
import { contact } from "@/lib/contact";

interface InstaButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function InstaButton({ className = "", children }: InstaButtonProps) {
  return (
    <a
      href={contact.instagram}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackContact("instagram")}
      className={`inline-flex items-center justify-center gap-2 min-h-[44px] rounded-xl border border-white/20 text-white/80 font-bold transition-all duration-200 hover:border-pink-400 hover:text-pink-400 hover:bg-pink-500/10 active:scale-95 ${className}`}
      aria-label="راسلنا على انستاغرام"
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
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
      <span>{children ?? "راسلنا على انستا"}</span>
    </a>
  );
}
