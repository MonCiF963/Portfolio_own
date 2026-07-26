import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { BrowserMockup, PhoneMockup } from "./Mockup";

export function Hero() {
  const { t, lang } = useI18n();
  const showcase = projects[0];
  const secondary = projects[4] ?? projects[1];

  return (
    <section id="home" className="px-4 pt-28 md:pt-32">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="tile relative overflow-hidden p-8 md:col-span-7 md:p-12"
        >
          <div className="pointer-events-none absolute -top-24 end-[-4rem] h-64 w-64 rounded-full bg-primary/10 blur-[90px]" />
          <div className="relative">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary/70" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="mt-6 font-display text-[2.1rem] font-bold leading-[1.12] tracking-tight text-balance sm:text-5xl md:text-[3.4rem]">
              {t("hero.title.1")}
              <br />
              <span className="text-gradient">{t("hero.title.2")}</span>
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground md:text-base">
              {t("hero.subtitle")}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                {t("cta.quote")}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center rounded-2xl border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/5"
              >
                {t("cta.viewWork")}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          className="tile flex flex-col justify-between gap-4 p-5 md:col-span-5"
        >
          <BrowserMockup src={showcase.cover} alt={showcase.title[lang]} />
          <div className="flex items-end gap-4">
            <PhoneMockup
              src={secondary.cover}
              alt={secondary.title[lang]}
              className="h-28 w-[4.25rem] shrink-0"
            />
            <div className="flex flex-wrap gap-1.5">
              {showcase.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}