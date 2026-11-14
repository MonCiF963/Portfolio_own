import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Magnetic, Scramble } from "./fx";

const Lanyard = lazy(() => import("./Lanyard"));

/** Each word slides up from behind a mask, rotated, like it's being printed from the baseline. */
function Words({ text, className = "", offset = 0 }: { text: string; className?: string; offset?: number }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            initial={{ y: "115%", rotate: 7, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 + (offset + i) * 0.11, ease: [0.16, 1, 0.3, 1] }}
            className={`inline-block origin-bottom-left ${className}`}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </>
  );
}

function LanyardScene() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <Suspense fallback={null}>
      <Lanyard
        frontImage="/card-front.png"
        backImage="/card-back.png"
        strapImage="/band.png"
        finish="holographic"
        metal="gold"
        cardColor="#150d24"
        strapColor="#1b1030"
        size={0.6}
      />
    </Suspense>
  );
}

export function Hero() {
  const { t, lang } = useI18n();
  const first = t("hero.title.1");

  return (
    <section id="home" className="relative px-4 pb-6 pt-24 md:px-8 md:pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-2 lg:grid-cols-12">
        <div className="relative z-10 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-2 pe-5 ps-3 backdrop-blur-md"
          >
            <span className="animate-pulse-ring h-2 w-2 rounded-full bg-acc-emerald" />
            <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-acc-cyan">
              {lang === "ar" ? t("hero.badge") : <Scramble text={t("hero.badge")} delay={350} />}
            </span>
          </motion.div>

          <h1 className="font-display text-[clamp(2.6rem,7.4vw,6.9rem)] uppercase leading-[1.02] tracking-[-0.03em] rtl:leading-[1.25]">
            <Words text={first} className="chrome-text" />
            <br />
            <Words text={t("hero.title.2")} className="mesh-text" offset={first.split(" ").length} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-7 max-w-md text-[15px] font-medium leading-relaxed text-muted-foreground md:text-lg"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#contact"
                className="btn-spectrum group/cta inline-flex items-center gap-2.5 rounded-full px-8 py-4 font-display text-[11px] uppercase tracking-[0.18em]"
              >
                {t("cta.quote")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1 rtl:rotate-180 rtl:group-hover/cta:-translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 font-display text-[11px] uppercase tracking-[0.18em] backdrop-blur-md transition-colors hover:border-acc-green/70 hover:text-acc-green"
              >
                {t("cta.viewWork")}
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
          >
            <span className="h-px w-10 bg-acc-green" />
            {t("hero.side.label")}
          </motion.div>
        </div>

        <div className="relative h-[30rem] lg:col-span-5 lg:h-[42rem]">
          <div aria-hidden className="mesh-orb absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative h-full w-full"
          >
            <LanyardScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
