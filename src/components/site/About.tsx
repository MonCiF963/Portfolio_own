import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow={t("about.eyebrow")} title={t("about.title")} align="start" />
            <p className="text-base leading-relaxed text-muted-foreground">{t("about.p1")}</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t("about.p2")}</p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow"
            >
              {t("cta.quote")}
            </a>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass-strong relative aspect-square overflow-hidden rounded-3xl p-8">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-gradient shadow-glow">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="glass rounded-2xl p-4">
                    <div className="text-xs text-muted-foreground">Focus</div>
                    <div className="font-display text-xl font-bold">Performance · Design · Conversion</div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {["React", "Next.js", "Node"].map((s) => (
                      <div key={s} className="glass rounded-xl px-3 py-2 text-center text-xs font-semibold">{s}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
