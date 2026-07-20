import { motion } from "framer-motion";
import { MessageCircle, Search, Palette, Code2, Bug, Rocket } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const steps = [
  { icon: MessageCircle, ar: "تواصل معنا", fr: "Prise de contact" },
  { icon: Search, ar: "تحليل المشروع", fr: "Analyse du projet" },
  { icon: Palette, ar: "تصميم الواجهة", fr: "Design UI/UX" },
  { icon: Code2, ar: "تطوير الموقع", fr: "Développement" },
  { icon: Bug, ar: "الاختبار", fr: "Tests & QA" },
  { icon: Rocket, ar: "إطلاق الموقع", fr: "Lancement" },
];

export function Process() {
  const { t, lang } = useI18n();
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow={t("process.eyebrow")} title={t("process.title")} subtitle={t("process.subtitle")} />
        <div className="relative">
          <div className="absolute inset-y-0 start-6 w-px bg-gradient-to-b from-blue-500/60 via-indigo-500/30 to-transparent md:start-1/2 md:-translate-x-1/2 rtl:md:translate-x-1/2" />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center gap-6 md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? "md:[direction:rtl] rtl:md:[direction:ltr]" : ""
                }`}
              >
                <div className={`hidden md:block ${i % 2 === 1 ? "md:order-2" : ""}`} />
                <div className={`relative flex items-start gap-4 ${i % 2 === 1 ? "md:order-1" : ""}`} style={{ direction: "inherit" }}>
                  <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 text-white shadow-glow">
                    <s.icon className="h-5 w-5" />
                    <span className="absolute -top-2 -end-2 grid h-6 w-6 place-items-center rounded-full bg-slate-900 text-[10px] font-bold text-blue-300 ring-1 ring-white/10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="glass flex-1 rounded-2xl p-5">
                    <h3 className="text-lg font-semibold">{lang === "ar" ? s.ar : s.fr}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {lang === "ar"
                        ? "مرحلة أساسية من رحلة تنفيذ مشروعك بجودة عالية."
                        : "Une étape clé de la réalisation de votre projet."}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
