import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.1 + i * 0.09, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative flex min-h-[92vh] items-end overflow-hidden">
      {/* Ambient workspace loop — dark and blurred so type stays legible */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <video
          className="h-full w-full scale-105 object-cover opacity-40 blur-[3px]"
          src="/media/hero-loop.mp4"
          poster="/media/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 md:pb-24 md:pt-40">
        <motion.div
          custom={0}
          variants={rise}
          initial="hidden"
          animate="show"
          className="flex items-center gap-3"
        >
          <span className="h-1.5 w-1.5 bg-acc-emerald" />
          <span className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
            {t("hero.badge")}
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-7 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl md:text-[5.2rem]"
        >
          {t("hero.title.1")}
          <br />
          <span className="text-muted-foreground">{t("hero.title.2")}</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          custom={3}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-sm bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
          >
            {t("cta.quote")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2.5 rounded-sm border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-white/25 hover:bg-white/[0.04]"
          >
            {t("cta.viewWork")}
          </a>
        </motion.div>

        <motion.div
          custom={4}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-16 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          <ArrowDown className="h-3.5 w-3.5" />
          {t("hero.scroll")}
        </motion.div>
      </div>
    </section>
  );
}