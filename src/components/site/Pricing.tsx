import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const plans = [
  {
    name: { ar: "صفحة هبوط", fr: "Landing Page" },
    price: "25 000",
    features: {
      ar: ["تصميم مخصص", "صفحة واحدة", "متجاوب بالكامل", "SEO أساسي", "تسليم خلال أسبوع"],
      fr: ["Design sur mesure", "Une page", "100% responsive", "SEO de base", "Livré en 1 semaine"],
    },
  },
  {
    name: { ar: "موقع أعمال", fr: "Site Business" },
    price: "60 000",
    popular: true,
    features: {
      ar: ["حتى 6 صفحات", "تصميم مخصص", "لوحة إدارة", "SEO متقدم", "نموذج تواصل", "تسليم خلال 2-3 أسابيع"],
      fr: ["Jusqu'à 6 pages", "Design sur mesure", "Panneau admin", "SEO avancé", "Formulaire de contact", "Livré en 2-3 semaines"],
    },
  },
  {
    name: { ar: "متجر إلكتروني", fr: "E-commerce" },
    price: "120 000",
    features: {
      ar: ["منتجات غير محدودة", "بوابة دفع", "إدارة الطلبات", "تصميم مخصص", "SEO متقدم", "تدريب على الاستخدام"],
      fr: ["Produits illimités", "Passerelle de paiement", "Gestion commandes", "Design sur mesure", "SEO avancé", "Formation incluse"],
    },
  },
  {
    name: { ar: "تطبيق مخصص", fr: "App sur mesure" },
    price: "—",
    features: {
      ar: ["استشارة مجانية", "تحليل معمق", "بنية قابلة للتطوير", "لوحة تحكم مخصصة", "تكاملات API", "دعم مستمر"],
      fr: ["Consultation gratuite", "Analyse approfondie", "Architecture scalable", "Dashboard sur mesure", "Intégrations API", "Support continu"],
    },
  },
];

export function Pricing() {
  const { t, lang } = useI18n();
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow={t("pricing.eyebrow")} title={t("pricing.title")} subtitle={t("pricing.subtitle")} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 ${
                p.popular ? "glass-strong border-blue-500/40 shadow-glow ring-1 ring-blue-500/30" : "glass"
              }`}
            >
              {p.popular && (
                <div className="absolute end-4 top-4 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-3 py-1 text-[10px] font-bold text-white shadow-glow">
                  <Sparkles className="h-3 w-3" /> {t("pricing.mostPopular")}
                </div>
              )}
              <h3 className="text-lg font-semibold">{p.name[lang]}</h3>
              <div className="mt-4">
                <div className="text-xs text-muted-foreground">{t("pricing.startFrom")}</div>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-gradient">{p.price}</span>
                  {p.price !== "—" && <span className="text-sm text-muted-foreground">{t("pricing.currency")}</span>}
                </div>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {p.features[lang].map((f, k) => (
                  <li key={k} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                  p.popular
                    ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-glow"
                    : "glass hover:bg-white/10"
                }`}
              >
                {t("pricing.getStarted")}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
