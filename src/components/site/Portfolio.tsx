import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";
import { projects } from "@/lib/projects";

const catColor = ["text-acc-green", "text-acc-cyan", "text-acc-purple"];

export function Portfolio() {
  const { t, lang } = useI18n();

  return (
    <section id="work" className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end gap-6">
          <SectionHeader
            eyebrow={t("portfolio.eyebrow")}
            title={t("portfolio.title")}
            subtitle={t("portfolio.subtitle")}
          />
          <span className="mb-2 hidden h-px flex-1 bg-border md:block" />
        </div>

        <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className={`group ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-card/40">
                <img
                  src={p.cover}
                  alt={`${p.title[lang]} — ${t(`portfolio.filter.${p.category}`)}`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] ${
                    i === 0 ? "h-64 md:h-[30rem]" : "h-56 md:h-72"
                  }`}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-heartbeat absolute bottom-5 end-5 inline-flex items-center gap-2 rounded-sm bg-acc-green px-5 py-3 font-display text-[10px] uppercase tracking-[0.16em] text-background transition-colors hover:bg-acc-cyan"
                  >
                    {t("cta.demo")}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-end justify-between gap-5">
                <div>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.24em] ${catColor[i % 3]}`}
                  >
                    {t(`portfolio.filter.${p.category}`)}
                  </span>
                  <h3 className="mt-3 font-display text-xl uppercase tracking-[-0.01em] md:text-2xl">
                    {p.title[lang]}
                  </h3>
                  <p className="mt-2 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                    {p.description[lang]}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  {p.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
