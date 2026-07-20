import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const items = [
  { ar: "تصميم مخصص بالكامل", fr: "Design 100% sur mesure" },
  { ar: "أداء وسرعة عالية", fr: "Performance & vitesse élevées" },
  { ar: "تصميم متجاوب", fr: "Design responsive" },
  { ar: "تجربة مستخدم احترافية", fr: "UX professionnelle" },
  { ar: "تحسين SEO", fr: "Optimisation SEO" },
  { ar: "أحدث تقنيات البرمجة", fr: "Technologies modernes" },
  { ar: "كود نظيف وقابل للتطوير", fr: "Code propre et scalable" },
  { ar: "واجهات عصرية", fr: "Interfaces modernes" },
];

export function WhyChooseUs() {
  const { t, lang } = useI18n();
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow={t("why.eyebrow")} title={t("why.title")} subtitle={t("why.subtitle")} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group flex items-start gap-3 rounded-2xl glass p-5 transition-all hover:-translate-y-1"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 shadow-glow">
                <Check className="h-4 w-4 text-white" />
              </span>
              <p className="pt-1.5 text-sm font-medium">{lang === "ar" ? it.ar : it.fr}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
