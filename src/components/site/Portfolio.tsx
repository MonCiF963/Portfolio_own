import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";
import { projects, type ProjectCategory } from "@/lib/projects";

const filters: { id: "all" | ProjectCategory; key: string }[] = [
  { id: "all", key: "portfolio.filter.all" },
  { id: "company", key: "portfolio.filter.company" },
  { id: "landing", key: "portfolio.filter.landing" },
  { id: "dashboard", key: "portfolio.filter.dashboard" },
  { id: "ecommerce", key: "portfolio.filter.ecommerce" },
  { id: "restaurant", key: "portfolio.filter.restaurant" },
  { id: "realestate", key: "portfolio.filter.realestate" },
];

const span = (i: number) => (i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5" : "md:col-span-4");

export function Portfolio() {
  const { t, lang } = useI18n();
  const [active, setActive] = useState<"all" | ProjectCategory>("all");

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="work" className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow={t("portfolio.eyebrow")}
            title={t("portfolio.title")}
            subtitle={t("portfolio.subtitle")}
            className="mb-0"
          />
          <div className="flex flex-wrap gap-1.5">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`rounded-full px-3.5 py-1.5 text-[11px] font-semibold transition-colors ${
                  active === f.id
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(f.key)}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-4 md:grid-cols-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`tile group overflow-hidden transition-colors hover:border-primary/25 ${span(i)}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title[lang]}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-70" />
                  <span className="absolute top-4 start-4 rounded-full border border-border bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur">
                    {t(`portfolio.filter.${p.category}`)}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold">{p.title[lang]}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {p.description[lang]}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
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