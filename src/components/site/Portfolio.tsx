import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";
import { projects } from "@/lib/projects";

export function Portfolio() {
  const { t, lang } = useI18n();

  return (
    <section id="work" className="border-t border-border px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t("portfolio.eyebrow")}
          title={t("portfolio.title")}
          subtitle={t("portfolio.subtitle")}
          className="mb-12"
        />

        <div className="flex flex-col">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="group grid gap-7 border-t border-border py-10 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-10 md:py-14"
            >
              <div
                className={`overflow-hidden rounded-sm border border-border md:col-span-8 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={p.cover}
                  alt={`${p.title[lang]} — ${t(`portfolio.filter.${p.category}`)}`}
                  loading="lazy"
                  className="h-60 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] md:h-[24rem]"
                />
              </div>

              <div className="flex flex-col justify-center md:col-span-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  {t(`portfolio.filter.${p.category}`)}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em]">
                  {p.title[lang]}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  {p.description[lang]}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                  {p.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-heartbeat mt-7 inline-flex w-fit items-center gap-2 rounded-sm bg-foreground px-5 py-3 text-[13px] font-semibold text-background transition-opacity hover:opacity-85"
                  >
                    {t("cta.demo")}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
