import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

const icon = (slug: string) => `https://cdn.simpleicons.org/${slug}/ffffff`;

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
              className="border-t border-border pt-6"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                {t(g.key)}
              </span>
              <ul className="mt-7 grid grid-cols-3 gap-x-4 gap-y-8">
                {g.items.map((it) => (
                  <li key={it.slug} className="group flex flex-col items-center gap-3 text-center">
                    <img
                      src={icon(it.slug)}
                      alt={it.name}
                      loading="lazy"
                      width={28}
                      height={28}
                      className="h-7 w-7 opacity-55 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
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
