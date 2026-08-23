import { motion } from "framer-motion";
import { Code2, PenTool, Image as ImageIcon, Film, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const secondary = [
  { icon: Film, accent: "text-acc-cyan", key: "services.video" },
  { icon: ImageIcon, accent: "text-acc-purple", key: "services.graphic" },
  { icon: PenTool, accent: "text-acc-blue", key: "services.uiux" },
];

export function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="border-t border-border px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow={t("services.eyebrow")} title={t("services.title")} className="mb-12" />

        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-white/[0.07] md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col justify-between gap-10 bg-background p-8 transition-colors hover:bg-white/[0.02] md:p-10"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-accent-line" />
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-sm bg-foreground text-background">
                  <Code2 className="h-5 w-5" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  {t("services.primaryTag")}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.02em] md:text-[2rem]">
                {t("services.web")}
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                {t("services.web.d")}
              </p>
            </div>
            <a
              href="#contact"
              className="group/link inline-flex items-center gap-2 text-[13px] font-semibold"
            >
              <span className="border-b border-white/25 pb-0.5 transition-colors group-hover/link:border-foreground">
                {t("cta.quote")}
              </span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1 rtl:rotate-180" />
            </a>
          </motion.article>

          <div className="grid gap-px bg-white/[0.07]">
            {secondary.map((s, i) => (
              <motion.article
                key={s.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-1 items-center gap-5 bg-background p-8 transition-colors hover:bg-white/[0.02]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-border transition-colors group-hover:border-white/25">
                  <s.icon className={`h-4 w-4 ${s.accent}`} />
                </span>
                <div>
                  <h3 className="font-display text-[15px] font-semibold">{t(s.key)}</h3>
                  <p className="mt-1.5 text-[13px] text-muted-foreground">{t(`${s.key}.d`)}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
