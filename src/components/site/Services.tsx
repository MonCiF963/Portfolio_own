import { motion } from "framer-motion";
import {
  Building2, ShoppingBag, Rocket, LayoutDashboard,
  Palette, Smartphone, Gauge, Search,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const items = [
  { icon: Building2, ar: "تصميم مواقع الشركات", fr: "Sites d'entreprise" },
  { icon: ShoppingBag, ar: "المتاجر الإلكترونية", fr: "E-commerce" },
  { icon: Rocket, ar: "صفحات الهبوط", fr: "Landing pages" },
  { icon: LayoutDashboard, ar: "تطبيقات ويب مخصصة", fr: "Applications web sur mesure" },
  { icon: Palette, ar: "تصميم واجهات UI/UX", fr: "Design UI / UX" },
  { icon: Smartphone, ar: "مواقع متجاوبة", fr: "Sites responsives" },
  { icon: Gauge, ar: "تحسين الأداء والسرعة", fr: "Optimisation performance" },
  { icon: Search, ar: "تحسين SEO", fr: "Optimisation SEO" },
];

export function Services() {
  const { t, lang } = useI18n();
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow={t("services.eyebrow")} title={t("services.title")} subtitle={t("services.subtitle")} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl transition-opacity group-hover:bg-blue-500/25" />
              <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 shadow-glow">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold">{lang === "ar" ? s.ar : s.fr}</h3>
              <div className="relative mt-3 h-[2px] w-10 rounded-full bg-gradient-to-r from-blue-500 to-transparent transition-all duration-500 group-hover:w-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
