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
    <section id="home" className="px-4 pb-8 pt-24 md:px-8 md:pt-28">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-12">
        {/* Main hero block — coding workspace loop, headline anchored bottom */}
        <motion.div
          custom={0}
          variants={rise}
          initial="hidden"
          animate="show"
          className="group relative flex min-h-[26rem] flex-col overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-card/40 md:col-span-8 md:min-h-[34rem]"
        >
          <div aria-hidden className="absolute inset-0 z-0">
            <video
              className="h-full w-full object-cover opacity-40 transition-transform duration-[1200ms] group-hover:scale-105"
              src="/media/hero-loop.mp4"
              poster="/media/hero-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
          </div>

          <div className="relative z-10 mt-auto p-7 md:p-11">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-acc-green" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-acc-green">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="font-display text-[2.2rem] uppercase leading-[1.35] tracking-[-0.02em] md:leading-[1.22] text-balance sm:text-6xl md:text-[5.4rem]">
              {t("hero.title.1")}{" "}
              <span className="bg-gradient-to-r from-acc-green via-acc-cyan to-acc-purple bg-clip-text text-transparent">
                {t("hero.title.2")}
              </span>
            </h1>

            <p className="mt-6 max-w-md text-[15px] font-medium leading-relaxed text-muted-foreground md:text-lg">
              {t("hero.subtitle")}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group/cta inline-flex items-center gap-2.5 rounded-sm bg-acc-green px-7 py-4 font-display text-[11px] uppercase tracking-[0.18em] text-background transition-all hover:-translate-y-0.5 hover:bg-acc-cyan"
              >
                {t("cta.quote")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1 rtl:rotate-180 rtl:group-hover/cta:-translate-x-1" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 rounded-sm border border-white/12 px-7 py-4 font-display text-[11px] uppercase tracking-[0.18em] transition-colors hover:border-acc-green/60 hover:text-acc-green"
              >
                {t("cta.viewWork")}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Side stack — identity + availability */}
        <div className="grid gap-4 md:col-span-4">
          <motion.div
            custom={1}
            variants={rise}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-end gap-6 rounded-[1.5rem] bg-acc-green p-8 text-background md:p-9"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-70">
              {t("hero.side.label")}
            </span>
            <div>
              <h2 className="font-display text-4xl uppercase leading-[0.9] tracking-[-0.02em] md:text-5xl">
                Moncif
              </h2>
              <p className="mt-3 text-[15px] font-semibold leading-snug opacity-80">
                {t("hero.side.role")}
              </p>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            variants={rise}
            initial="hidden"
            animate="show"
            className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-acc-cyan/25 bg-acc-cyan/[0.06] p-8 md:p-9"
          >
            <div className="flex items-center gap-3">
              <span className="animate-pulse-ring h-2 w-2 rounded-full bg-acc-cyan" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-acc-cyan">
                {t("contact.available")}
              </span>
            </div>
            <ArrowDown className="h-4 w-4 shrink-0 text-acc-cyan" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
