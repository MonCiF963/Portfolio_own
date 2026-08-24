import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const icon = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const groupAccent = [
  "from-acc-blue/25 text-acc-blue border-acc-blue/30",
  "from-acc-purple/25 text-acc-purple border-acc-purple/30",
  "from-acc-cyan/25 text-acc-cyan border-acc-cyan/30",
];

type Tool = { name: string; slug?: string; mark?: string };

const groups: { key: string; items: Tool[] }[] = [
  {
    key: "skills.web",
    items: [
      { name: "React", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "HTML", slug: "html5" },
      { name: "CSS", slug: "css" },
      { name: "Tailwind", slug: "tailwindcss" },
    ],
  },
  {
    key: "skills.design",
    items: [
      { name: "Figma", slug: "figma" },
      { name: "Photoshop", mark: "Ps" },
      { name: "Illustrator", mark: "Ai" },
    ],
  },
  {
    key: "skills.video",
    items: [
      { name: "Premiere Pro", mark: "Pr" },
      { name: "After Effects", mark: "Ae" },
      { name: "DaVinci Resolve", slug: "davinciresolve" },
    ],
  },
];

export function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="border-t border-border px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow={t("skills.eyebrow")} title={t("skills.title")} className="mb-12" />

        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {groups.map((g, gi) => (
            <motion.div
              key={g.key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: gi * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-sm border-t-2 bg-gradient-to-b to-transparent pt-6 ${groupAccent[gi % 3]}`}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.26em]">{t(g.key)}</span>
              <ul className="mt-7 grid grid-cols-3 gap-x-4 gap-y-8">
                {g.items.map((it) => (
                  <li key={it.name} className="group flex flex-col items-center gap-3 text-center">
                    <span className="edge-spectrum grid h-12 w-12 place-items-center rounded-sm bg-white/[0.03] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/[0.07]">
                      {it.slug ? (
                        <img
                          src={icon(it.slug)}
                          alt={it.name}
                          loading="lazy"
                          width={26}
                          height={26}
                          className="h-[26px] w-[26px] saturate-[1.15] transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <span
                          aria-hidden
                          className="font-mono text-[13px] font-bold text-gradient"
                        >
                          {it.mark}
                        </span>
                      )}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-foreground">
                      {it.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
