import { motion } from "framer-motion";
import { Brush, Smartphone, Gauge, Search, Code2, MessageSquare } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const items = [
  {
    icon: Brush,
    title: { ar: "تصميم خاص بمشروعك", fr: "Un design propre à votre projet" },
    desc: { ar: "لا قوالب مُعاد استخدامها — كل واجهة تُرسم من جديد.", fr: "Pas de template recyclé : chaque interface est dessinée pour vous." },
  },
  {
    icon: Smartphone,
    title: { ar: "متجاوب على كل شاشة", fr: "Responsive sur tous les écrans" },
    desc: { ar: "تجربة مدروسة على الجوّال بنفس عناية الحاسوب.", fr: "Le mobile est traité avec le même soin que le desktop." },
  },
  {
    icon: Gauge,
    title: { ar: "أداء سريع", fr: "Des pages rapides" },
    desc: { ar: "صور محسّنة وكود خفيف حتى لا ينتظر زوّارك.", fr: "Images optimisées et code léger, sans temps d'attente." },
  },
  {
    icon: Search,
    title: { ar: "بنية صديقة لمحركات البحث", fr: "Structure prête pour le SEO" },
    desc: { ar: "HTML دلالي وبيانات وصفية مضبوطة من البداية.", fr: "HTML sémantique et balises soignées dès le départ." },
  },
  {
    icon: Code2,
    title: { ar: "كود نظيف وقابل للتطوير", fr: "Un code propre et maintenable" },
    desc: { ar: "تستطيع التوسّع لاحقاً دون إعادة بناء كل شيء.", fr: "Vous pourrez faire évoluer le site sans tout refaire." },
  },
  {
    icon: MessageSquare,
    title: { ar: "تواصل مباشر معي", fr: "Vous échangez directement avec moi" },
    desc: { ar: "أنا من يصمّم ويبرمج ويسلّم — بدون وسطاء.", fr: "Je conçois, je développe et je livre — sans intermédiaire." },
  },
];

export function WhyChooseUs() {
  const { t, lang } = useI18n();
  return (
    <section className="px-4 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow={t("why.eyebrow")} title={t("why.title")} />
        <div className="tile grid divide-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="border-b border-border p-7 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0 sm:[&:nth-child(odd)]:border-e lg:[&:nth-child(odd)]:border-e-0 lg:[&:not(:nth-child(3n))]:border-e"
            >
              <it.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-5 text-[15px] font-semibold">{it.title[lang]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}