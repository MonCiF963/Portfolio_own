import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import portrait from "@/assets/moncif-portrait.jpg";

export function About() {
  const { t } = useI18n();
  const focus = [t("about.focus1"), t("about.focus2"), t("about.focus3")];

  return (
    <section id="about" className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-[1.5rem] border border-white/[0.08] md:col-span-4"
        >
          <img
            src={portrait}
            alt="Moncif — freelance web developer and digital creator"
            loading="lazy"
            width={1024}
            height={1280}
            className="h-72 w-full object-cover grayscale transition-all duration-700 hover:grayscale-0 md:h-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-9 rounded-[1.5rem] border border-white/[0.07] bg-card/30 p-8 md:col-span-8 md:p-11"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-acc-cyan" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-acc-cyan">
                {t("about.eyebrow")}
              </span>
            </div>
            <h2 className="mt-4 font-display text-3xl uppercase leading-[0.95] tracking-[-0.025em] md:text-[2.8rem]">
              {t("about.title")}
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-muted-foreground md:text-base">
              {t("about.p1")}
            </p>
            <p className="mt-3 max-w-xl text-[15px] leading-[1.75] text-muted-foreground md:text-base">
              {t("about.p2")}
            </p>
          </div>

          <div>
            <ul className="flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
              {focus.map((f, i) => (
                <li key={f} className="flex items-center gap-2.5 text-sm font-semibold">
                  <span
                    className={`h-1.5 w-1.5 ${
                      ["bg-acc-green", "bg-acc-cyan", "bg-acc-purple"][i % 3]
                    }`}
                  />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.18em] text-acc-green"
            >
              <span className="border-b border-acc-green/40 pb-0.5">{t("cta.contactMe")}</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
