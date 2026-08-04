import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";
import { projects, type ProjectCategory } from "@/lib/projects";

const filters: { id: "all" | ProjectCategory; key: string }[] = [
  { id: "all", key: "portfolio.filter.all" },
  { id: "company", key: "portfolio.filter.company" },
  { id: "restaurant", key: "portfolio.filter.restaurant" },
  { id: "realestate", key: "portfolio.filter.realestate" },
  { id: "landing", key: "portfolio.filter.landing" },
  { id: "dashboard", key: "portfolio.filter.dashboard" },
  { id: "ecommerce", key: "portfolio.filter.ecommerce" },
];

export function Portfolio() {
  const { t, lang } = useI18n();
  const [active, setActive] = useState<"all" | ProjectCategory>("all");

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="work" className="border-t border-border px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow={t("portfolio.eyebrow")}
            title={t("portfolio.title")}
            subtitle={t("portfolio.subtitle")}
          />
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`relative pb-1 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                  active === f.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(f.key)}
                {active === f.id && (
                  <motion.span
                    layoutId="filter-underline"
                    className="absolute inset-x-0 bottom-0 h-px bg-accent-line"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 md:gap-7">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex flex-col overflow-hidden rounded-sm border border-border bg-card/40 transition-colors duration-300 hover:border-white/25 ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.cover}
                    alt={`${p.title[lang]} — ${t(`portfolio.filter.${p.category}`)}`}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] ${
                      i === 0 ? "h-64 md:h-[26rem]" : "h-56 md:h-64"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                  <span className="absolute top-4 start-4 rounded-sm border border-white/15 bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
                    {t(`portfolio.filter.${p.category}`)}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em]">{p.title[lang]}</h3>
                  <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
                    {p.description[lang]}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                    {p.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-border pt-6">
                    <a
                      href={p.liveUrl ?? "#contact"}
                      target={p.liveUrl ? "_blank" : undefined}
                      rel={p.liveUrl ? "noopener noreferrer" : undefined}
                      className="animate-heartbeat inline-flex items-center gap-2 rounded-sm bg-foreground px-4.5 py-2.5 text-[13px] font-semibold text-background transition-opacity hover:opacity-85"
                    >
                      {t("cta.demo")}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <span className="font-mono text-[11px] tracking-widest text-muted-foreground" dir="ltr">
                      {p.date}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}