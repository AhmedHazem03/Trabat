// GA4 event tracking — T-42
// تأكد من ضبط NEXT_PUBLIC_GA_ID في ملف .env.local بمعرّف GA4 الخاص بك
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

export function trackContact(
  method: "whatsapp" | "phone" | "instagram",
  service: string = "general"
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "contact_click", {
    method,
    page: window.location.pathname,
    service,
  });
}
