const WA_NUMBER = "96512345678";

const encode = (text: string) => encodeURIComponent(text);

export const buildWaUrl = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encode(message)}`;

export const contact = {
  phone: `+${WA_NUMBER}`,
  instagram: "https://instagram.com/turbat_kw",
  whatsapp: {
    general: buildWaUrl("السلام عليكم، أريد الاستفسار عن خدمات النقل"),
    home: buildWaUrl("السلام عليكم، أريد الاستفسار عن النقل المنزلي"),
    commercial: buildWaUrl("السلام عليكم، أريد الاستفسار عن النقل التجاري"),
    international: buildWaUrl("السلام عليكم، أريد الاستفسار عن النقل الدولي"),
    storage: buildWaUrl("السلام عليكم، أريد الاستفسار عن خدمة التخزين"),
    area: (name: string) =>
      buildWaUrl(`السلام عليكم، أريد الاستفسار عن خدمات النقل في منطقة ${name}`),
  },
};
