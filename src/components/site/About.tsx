import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";
import portrait from "@/assets/moncif-portrait.jpg";

export function About() {
  const { t } = useI18n();
  const focus = [t("about.focus1"), t("about.focus2"), t("about.focus3")];

  return (
    <section id="about" className="border-t border-border px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5"
        >
          <div className="overflow-hidden rounded-sm border border-border">
            <img
              src={portrait}
              alt="Moncif — web developer and designer"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7"
        >
          <SectionHeader eyebrow={t("about.eyebrow")} title={t("about.title")} className="mb-7" />
          <p className="text-[15px] leading-[1.75] text-muted-foreground md:text-base">{t("about.p1")}</p>
          <p className="mt-4 text-[15px] leading-[1.75] text-muted-foreground md:text-base">
            {t("about.p2")}
          </p>

          <div className="mt-9 border-t border-border pt-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
              {t("about.focus")}
            </span>
            <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              {focus.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm font-medium">
                  <span className="h-1 w-1 bg-acc-emerald" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <a href="#contact" className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold">
            <span className="border-b border-white/25 pb-0.5 transition-colors group-hover:border-foreground">
              {t("cta.contactMe")}
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
