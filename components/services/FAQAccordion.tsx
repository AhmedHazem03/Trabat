"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "ما هي مناطق الخدمة؟",
    answer:
      "نخدم أكثر من 22 منطقة في الكويت، تشمل: صباح السالم، القرين، العدان، مبارك الكبير، الأحمدي، السالمية، حولي، بيان، مشرف، الخالدية، اليرموك، وغيرها. تواصل معنا للتأكد من تغطية منطقتك.",
  },
  {
    question: "كيف أطلب الخدمة؟",
    answer:
      "تواصل معنا مباشرة عبر واتساب أو بالاتصال الهاتفي. لا يوجد نموذج حجز — نؤمن بالتواصل المباشر للحصول على أفضل خدمة وسرعة في الاستجابة.",
  },
  {
    question: "هل تقدمون خدمة التغليف؟",
    answer:
      "نعم، نقدم خدمة تغليف احترافي لجميع القطع سواء الأثاث، الأجهزة الكهربائية، أو المقتنيات الثمينة. نستخدم مواد تغليف عالية الجودة لضمان سلامة كل قطعة.",
  },
  {
    question: "هل الأسعار ثابتة؟",
    answer:
      "تختلف الأسعار حسب الكمية والمسافة وطبيعة الأثاث. نقدم عروض أسعار فورية بعد معرفة تفاصيل النقل. تواصل معنا للحصول على سعر دقيق ومناسب.",
  },
  {
    question: "هل تعملون في عطلة نهاية الأسبوع؟",
    answer:
      "نعم، نعمل 7 أيام في الأسبوع بلا انقطاع. ساعات العمل: السبت–الخميس من 8 صباحاً حتى 10 مساءً، والجمعة من 10 صباحاً حتى 10 مساءً.",
  },
  {
    question: "هل يوجد ضمان على سلامة الأثاث؟",
    answer:
      "نعم، نضمن سلامة جميع محتوياتك من لحظة الاستلام حتى التسليم في وجهتك. فريقنا مدرب على التعامل مع الأثاث بعناية فائقة، مع التغليف الاحترافي لتجنب أي تلف.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm transition-all duration-200 hover:border-brand-red/30 hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start min-h-[44px]"
              aria-expanded={isOpen}
            >
              <span className="text-dark font-semibold text-sm md:text-base">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="shrink-0 text-brand-red"
                aria-hidden="true"
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
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-6 pb-5">
                    <div className="h-px bg-gray-100 mb-4" aria-hidden="true" />
                    <p className="text-dark/60 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
