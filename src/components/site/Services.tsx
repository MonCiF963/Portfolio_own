import { motion } from "framer-motion";
import { Code2, PenTool, Film, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const services = [
  {
    n: "01",
    icon: Code2,
    key: "services.web",
    span: "md:col-span-6",
    surface: "bg-acc-green text-background",
    subtle: "opacity-80",
    primary: true,
  },
  {
    n: "02",
    icon: PenTool,
    key: "services.uiux",
    span: "md:col-span-3",
    surface: "bg-acc-cyan text-background",
    subtle: "opacity-80",
  },
  {
    n: "03",
    icon: Film,
    key: "services.videodesign",
    span: "md:col-span-3",
    surface: "bg-acc-purple text-white",
    subtle: "opacity-75",
  },
];

export function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={t("services.eyebrow")} title={t("services.title")} className="mb-10" />

        <div className="grid gap-4 md:grid-cols-12">
          {services.map((s, i) => (
            <motion.article
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col justify-between gap-10 overflow-hidden rounded-[1.5rem] p-8 md:p-10 ${s.span} ${s.surface}`}
            >
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-sm bg-black/15">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3
                  className={`mt-8 font-display uppercase leading-[0.95] tracking-[-0.02em] ${
                    s.primary ? "text-3xl md:text-[2.6rem]" : "text-2xl md:text-3xl"
                  }`}
                >
                  {t(s.key)}
                </h3>
                <p className={`mt-3 max-w-sm text-[15px] font-semibold leading-snug ${s.subtle}`}>
                  {t(`${s.key}.d`)}
                </p>
                {s.primary && (
                  <a
                    href="#contact"
                    className="group/link mt-8 inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.18em]"
                  >
                    <span className="border-b border-current/40 pb-0.5">{t("cta.quote")}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1 rtl:rotate-180" />
                  </a>
                )}
              </div>
              <div className="-mb-4 text-end font-display text-6xl leading-none opacity-15 md:text-7xl">
                {s.n}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
