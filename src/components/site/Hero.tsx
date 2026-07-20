import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Zap, Code2, Layers, Gauge } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t, dir } = useI18n();
  const Arrow = dir === "rtl" ? ArrowRight : ArrowRight;
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-start"
          >
            <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500">
                <Sparkles className="h-3 w-3 text-white" />
              </span>
              {t("hero.badge")}
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.15] tracking-tight md:text-6xl lg:text-7xl">
              <span className="block">{t("hero.title").split(" ").slice(0, 3).join(" ")}</span>
              <span className="block text-gradient">{t("hero.title").split(" ").slice(3).join(" ")}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
              {t("hero.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
              >
                {t("cta.quote")}
                <Arrow className={`h-4 w-4 transition-transform ${dir === "rtl" ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
              </a>
              <a
                href="#portfolio"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
              >
                <Play className="h-4 w-4" />
                {t("cta.viewWork")}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground lg:justify-start">
              {[
                { icon: Zap, label: t("hero.chip2") },
                { icon: Layers, label: t("hero.chip1") },
                { icon: Gauge, label: t("hero.chip3") },
              ].map((c, i) => (
                <div key={i} className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5">
                  <c.icon className="h-3.5 w-3.5 text-blue-400" />
                  {c.label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Glow */}
            <div className="absolute inset-0 -z-10 rounded-full bg-blue-600/30 blur-3xl" />

            {/* Laptop */}
            <div className="relative animate-float-slow">
              <div className="glass-strong rounded-2xl border border-white/10 p-3 shadow-glow">
                <div className="flex items-center gap-1.5 px-2 pb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>
                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950">
                  <BrowserMock />
                </div>
              </div>
              <div className="mx-auto mt-1 h-2 w-2/3 rounded-b-2xl bg-gradient-to-b from-white/10 to-transparent" />
            </div>

            {/* Floating phone */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -end-4 w-32 rotate-6 md:w-40"
            >
              <div className="glass-strong rounded-[2rem] border border-white/10 p-1.5 shadow-glow">
                <div className="h-56 rounded-[1.6rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-3 md:h-64">
                  <div className="h-2 w-8 rounded-full bg-white/40" />
                  <div className="mt-4 space-y-2">
                    <div className="h-3 w-3/4 rounded bg-white/40" />
                    <div className="h-3 w-1/2 rounded bg-white/30" />
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="glass h-12 rounded-lg" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating UI card */}
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="glass-strong absolute -top-6 -start-4 rounded-2xl p-3 text-xs shadow-glow md:-start-8"
            >
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500">
                  <Code2 className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Lighthouse</div>
                  <div className="text-[10px] text-muted-foreground">100 / 100</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BrowserMock() {
  return (
    <div className="p-4">
      <div className="glass mb-3 flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> nova.dev
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2 space-y-2">
          <div className="h-3 w-2/3 rounded bg-white/60" />
          <div className="h-3 w-1/2 rounded bg-white/30" />
          <div className="mt-4 h-24 rounded-lg bg-gradient-to-br from-blue-500/80 to-indigo-500/80" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-14 rounded-md bg-white/10" />
            <div className="h-14 rounded-md bg-white/10" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-24 rounded-lg bg-white/10" />
          <div className="h-3 w-full rounded bg-white/30" />
          <div className="h-3 w-3/4 rounded bg-white/20" />
          <div className="mt-2 h-8 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500" />
        </div>
      </div>
    </div>
  );
}
