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
    <section id="home" className="relative flex min-h-[88vh] items-center overflow-hidden">
      {/* Ambient workspace loop — dark and colorized so type stays legible */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <video
          className="h-full w-full scale-105 object-cover opacity-30 blur-[3px] saturate-150"
          src="/media/hero-loop.mp4"
          poster="/media/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-aurora opacity-90 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/88 to-background/70" />
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="animate-float-slow absolute -left-32 top-1/4 h-[26rem] w-[26rem] rounded-full bg-acc-purple/25 blur-[130px]" />
        <div className="animate-float-slow absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full bg-acc-cyan/20 blur-[130px] [animation-delay:-8s]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-accent-line opacity-60" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-28 md:pb-20 md:pt-32">
        <motion.div
          custom={0}
          variants={rise}
          initial="hidden"
          animate="show"
          className="flex w-fit items-center gap-3 rounded-sm border border-acc-emerald/30 bg-acc-emerald/[0.07] px-3 py-1.5"
        >
          <span className="animate-pulse-ring h-1.5 w-1.5 rounded-full bg-acc-emerald" />
          <span className="font-mono text-[11px] uppercase tracking-[0.26em] text-acc-emerald">
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
          <span className="text-gradient-flow">{t("hero.title.2")}</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-8 max-w-xl border-s-2 border-acc-blue/50 ps-4 text-[15px] leading-relaxed text-muted-foreground md:text-base"
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
            className="btn-spectrum group inline-flex items-center gap-2.5 rounded-sm px-6 py-3.5 text-sm font-semibold"
          >
            {t("cta.quote")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </a>
          <a
            href="#work"
            className="edge-spectrum inline-flex items-center gap-2.5 rounded-sm bg-white/[0.03] px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/[0.07]"
          >
            {t("cta.viewWork")}
          </a>
        </motion.div>

        <motion.div
          custom={4}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-14 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          <ArrowDown className="h-3.5 w-3.5" />
          {t("hero.scroll")}
        </motion.div>
      </div>
    </section>
  );
}