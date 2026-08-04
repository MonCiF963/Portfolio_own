import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const stack = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Figma"];

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="border-t border-border px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7"
        >
          <SectionHeader eyebrow={t("about.eyebrow")} title={t("about.title")} className="mb-8" />
          <p className="text-[15px] leading-[1.75] text-muted-foreground md:text-base">{t("about.p1")}</p>
          <p className="mt-5 text-[15px] leading-[1.75] text-muted-foreground md:text-base">
            {t("about.p2")}
          </p>
          <a
            href="#contact"
            className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold"
          >
            <span className="border-b border-white/25 pb-0.5 transition-colors group-hover:border-foreground">
              {t("cta.contactMe")}
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5"
        >
          <div className="border-t border-border pt-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
              {t("about.philosophy")}
            </span>
            <p className="mt-4 font-display text-2xl font-semibold leading-snug tracking-[-0.02em]">
              {t("about.philosophyValue")}
            </p>
          </div>
          <div className="mt-10 border-t border-border pt-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
              {t("about.stack")}
            </span>
            <div className="mt-5 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  className="rounded-sm border border-border px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors hover:border-white/25 hover:text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}