import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const stack = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Figma"];

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="px-4 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="tile p-8 md:col-span-7 md:p-12"
          >
            <SectionHeader eyebrow={t("about.eyebrow")} title={t("about.title")} className="mb-7" />
            <p className="text-[15px] leading-relaxed text-muted-foreground">{t("about.p1")}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{t("about.p2")}</p>
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              {t("cta.contactMe")}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <div className="grid gap-4 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="tile flex flex-col justify-center p-8"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {t("about.philosophy")}
              </span>
              <p className="mt-4 font-display text-2xl font-semibold leading-snug text-balance">
                {t("about.philosophyValue")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="tile p-8"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Stack
              </span>
              <div className="mt-5 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}