import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";
import { projects, type ProjectCategory } from "@/lib/projects";

const filters: { id: "all" | ProjectCategory; key: string }[] = [
  { id: "all", key: "portfolio.filter.all" },
  { id: "company", key: "portfolio.filter.company" },
  { id: "restaurant", key: "portfolio.filter.restaurant" },
  { id: "doctor", key: "portfolio.filter.doctor" },
  { id: "construction", key: "portfolio.filter.construction" },
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
    <section id="portfolio" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow={t("portfolio.eyebrow")} title={t("portfolio.title")} subtitle={t("portfolio.subtitle")} />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                active === f.id
                  ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-glow"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(f.key)}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group overflow-hidden rounded-2xl glass"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title[lang]}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80" />
                  <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-1.5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {p.technologies.map((tech) => (
                      <span key={tech} className="glass rounded-full px-2.5 py-1 text-[10px] font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{p.title[lang]}</h3>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-blue-300">
                      {t(`portfolio.filter.${p.category}`)}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.description[lang]}</p>
                  <div className="mt-4 flex items-center gap-2">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-3 py-1.5 text-xs font-semibold text-white"
                      >
                        <ExternalLink className="h-3 w-3" /> {t("portfolio.viewLive")}
                      </a>
                    )}
                    {p.codeUrl && (
                      <a
                        href={p.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
                      >
                        <Github className="h-3 w-3" /> {t("portfolio.viewCode")}
                      </a>
                    )}
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
